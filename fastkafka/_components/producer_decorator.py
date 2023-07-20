# AUTOGENERATED! DO NOT EDIT! File to edit: ../../nbs/013_ProducerDecorator.ipynb.

# %% auto 0
__all__ = ['logger', 'BaseSubmodel', 'ProduceReturnTypes', 'ProduceCallable', 'KafkaEvent', 'unwrap_from_kafka_event',
           'release_callback', 'produce_single', 'send_batch', 'produce_batch', 'producer_decorator']

# %% ../../nbs/013_ProducerDecorator.ipynb 1
import asyncio
import functools
import logging
import random
import time
from asyncio import iscoroutinefunction  # do not use the version from inspect
from dataclasses import dataclass
from functools import partial
from inspect import Parameter
from typing import *

from aiokafka import AIOKafkaProducer
from aiokafka.errors import KafkaTimeoutError, RequestTimedOutError
from aiokafka.producer.message_accumulator import BatchBuilder
from pydantic import BaseModel

from .logger import get_logger, cached_log
from .meta import export
from .helpers import remove_suffix

# %% ../../nbs/013_ProducerDecorator.ipynb 3
logger = get_logger(__name__)

# %% ../../nbs/013_ProducerDecorator.ipynb 5
BaseSubmodel = TypeVar("BaseSubmodel", bound=Union[List[BaseModel], BaseModel])
BaseSubmodel


@dataclass
@export("fastkafka")
class KafkaEvent(Generic[BaseSubmodel]):
    """
    A generic class for representing Kafka events. Based on BaseSubmodel, bound to pydantic.BaseModel

    Attributes:
        message (BaseSubmodel): The message contained in the Kafka event, can be of type pydantic.BaseModel.
        key (bytes, optional): The optional key used to identify the Kafka event.
    """

    message: BaseSubmodel
    key: Optional[bytes] = None

# %% ../../nbs/013_ProducerDecorator.ipynb 7
def unwrap_from_kafka_event(var_type: Union[Type, Parameter]) -> Union[Type, Parameter]:
    """
    Unwraps the type from a KafkaEvent.

    Args:
        var_type: Type to unwrap.

    Returns:
        Type: Unwrapped type if the given type is a KafkaEvent, otherwise returns the same type.

    Example:
        - Input: KafkaEvent[str]
          Output: str
        - Input: int
          Output: int
    """
    if hasattr(var_type, "__origin__") and var_type.__origin__ == KafkaEvent:
        return var_type.__args__[0]  # type: ignore
    else:
        return var_type

# %% ../../nbs/013_ProducerDecorator.ipynb 9
ProduceReturnTypes = Union[
    BaseModel, KafkaEvent[BaseModel], List[BaseModel], KafkaEvent[List[BaseModel]]
]

ProduceCallable = Union[
    Callable[..., ProduceReturnTypes], Callable[..., Awaitable[ProduceReturnTypes]]
]

# %% ../../nbs/013_ProducerDecorator.ipynb 12
def _wrap_in_event(
    message: Union[BaseModel, List[BaseModel], KafkaEvent]
) -> KafkaEvent:
    return message if type(message) == KafkaEvent else KafkaEvent(message)

# %% ../../nbs/013_ProducerDecorator.ipynb 15
def release_callback(
    fut: asyncio.Future, topic: str, wrapped_val: KafkaEvent[BaseModel]
) -> None:
    if fut.exception() is not None:
        cached_log(
            logger,
            f"release_callback(): Exception {fut.exception()=}, raised when producing {wrapped_val.message=} to {topic=}",
            level=logging.WARNING,
            timeout=1,
            log_id="release_callback()",
        )
    pass

# %% ../../nbs/013_ProducerDecorator.ipynb 16
async def produce_single(  # type: ignore
    producer: AIOKafkaProducer,
    topic: str,
    encoder_fn: Callable[[BaseModel], bytes],
    wrapped_val: KafkaEvent[BaseModel],
) -> None:
    """
    Sends a single message to the Kafka producer.

    Args:
        producer (AIOKafkaProducer): The Kafka producer object.
        topic (str): The topic to which the message will be sent.
        encoder_fn (Callable[[BaseModel], bytes]): The encoding function to encode the message.
        wrapped_val (KafkaEvent[BaseModel]): The wrapped Kafka event containing the message.
    """
    while True:
        try:
            fut = await producer.send(
                topic, encoder_fn(wrapped_val.message), key=wrapped_val.key
            )
            fut.add_done_callback(
                partial(release_callback, topic=topic, wrapped_val=wrapped_val)
            )
            break
        except KafkaTimeoutError as e:
            logger.warning(
                f"produce_single(): Exception {e=} raised when producing {wrapped_val.message} to {topic=}, sleeping for 1 second and retrying.."
            )
            await asyncio.sleep(1)

# %% ../../nbs/013_ProducerDecorator.ipynb 21
async def send_batch(  # type: ignore
    producer: AIOKafkaProducer, topic: str, batch: BatchBuilder, key: Optional[bytes]
) -> None:
    """
    Sends a batch of messages to the Kafka producer.

    Args:
        producer (AIOKafkaProducer): The Kafka producer object.
        topic (str): The topic to which the messages will be sent.
        batch (BatchBuilder): The batch builder object containing the messages.
        key (Optional[bytes]): The optional key used to identify the batch of messages.

    Returns:
        None
    """
    partitions = await producer.partitions_for(topic)
    if key == None:
        partition = random.choice(tuple(partitions))  # nosec
    else:
        partition = producer._partition(topic, None, None, None, key, None)
    while True:
        try:
            await producer.send_batch(batch, topic, partition=partition)
            break
        except KafkaTimeoutError as e:
            logger.warning(
                f"send_batch(): Exception {e} raised when producing {batch} to {topic=}, sleeping for 1 second and retrying.."
            )
            await asyncio.sleep(1)


async def produce_batch(  # type: ignore
    producer: AIOKafkaProducer,
    topic: str,
    encoder_fn: Callable[[BaseModel], bytes],
    wrapped_val: KafkaEvent[List[BaseModel]],
) -> ProduceReturnTypes:
    """
    Sends a batch of messages to the Kafka producer.

    Args:
        producer (AIOKafkaProducer): The Kafka producer object.
        topic (str): The topic to which the messages will be sent.
        encoder_fn (Callable[[BaseModel], bytes]): The encoding function to encode the messages.
        wrapped_val (KafkaEvent[List[BaseModel]]): The wrapped Kafka event containing the list of messages.

    Returns:
        ProduceReturnTypes: The return value from the decorated function.
    """
    batch = producer.create_batch()

    for message in wrapped_val.message:
        metadata = batch.append(
            key=wrapped_val.key,
            value=encoder_fn(message),
            timestamp=int(time.time() * 1000),
        )
        if metadata == None:
            # send batch
            await send_batch(producer, topic, batch, wrapped_val.key)
            # create new batch
            batch = producer.create_batch()
            batch.append(
                key=None, value=encoder_fn(message), timestamp=int(time.time() * 1000)
            )

    await send_batch(producer, topic, batch, wrapped_val.key)

# %% ../../nbs/013_ProducerDecorator.ipynb 24
def producer_decorator(
    producer_store: Dict[str, Any],
    func: ProduceCallable,
    topic_key: str,
    encoder_fn: Callable[[BaseModel], bytes],
) -> ProduceCallable:
    """
    Decorator for Kafka producer functions.

    Args:
        producer_store (Dict[str, Any]): Dictionary to store the Kafka producer objects.
        func (ProduceCallable): The function to be decorated.
        topic_key (str): The key used to identify the topic.
        encoder_fn (Callable[[BaseModel], bytes]): The encoding function to encode the messages.

    Returns:
        ProduceCallable: The decorated function.

    Raises:
        ValueError: If the decorated function is synchronous.
    """

    @functools.wraps(func)
    async def _produce_async(
        *args: List[Any],
        topic_key: str = topic_key,
        encoder_fn: Callable[[BaseModel], bytes] = encoder_fn,
        producer_store: Dict[str, Any] = producer_store,
        f: Callable[..., Awaitable[ProduceReturnTypes]] = func,  # type: ignore
        **kwargs: Any,
    ) -> ProduceReturnTypes:
        return_val = await f(*args, **kwargs)
        wrapped_val = _wrap_in_event(return_val)
        _, producer, _, _ = producer_store[topic_key]
        topic = remove_suffix(topic_key)

        if isinstance(wrapped_val.message, list):
            await produce_batch(producer, topic, encoder_fn, wrapped_val)
        else:
            await produce_single(producer, topic, encoder_fn, wrapped_val)
        return return_val

    if not iscoroutinefunction(func):
        raise ValueError(
            "Synchronous functions are not supported for produce operation"
        )

    return _produce_async
