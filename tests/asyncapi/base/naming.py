from typing import Any, Type

from dirty_equals import IsStr
from pydantic import create_model

from faststream import FastStream
from faststream.asyncapi.generate import get_app_schema
from faststream.broker.core.abc import BrokerUsecase


class BaseNaming:  # noqa: D101
    broker_class: Type[BrokerUsecase[Any, Any]]


class SubscriberNaming(BaseNaming):  # noqa: D101
    def test_subscriber_naming(self):
        broker = self.broker_class()

        @broker.subscriber("test")
        async def handle_user_created(msg: str):
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated")
        ]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated:Message")
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            "HandleUserCreated:Message:Payload"
        ]

    def test_pydantic_subscriber_naming(self):
        broker = self.broker_class()

        @broker.subscriber("test")
        async def handle_user_created(msg: create_model("SimpleModel")):
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated")
        ]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated:Message")
        ]

        assert list(schema["components"]["schemas"].keys()) == ["SimpleModel"]

    def test_multi_subscribers_naming(self):
        broker = self.broker_class()

        @broker.subscriber("test")
        @broker.subscriber("test2")
        async def handle_user_created(msg: str):
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated"),
            IsStr(regex=r"test2[\w:]*:HandleUserCreated"),
        ]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated:Message"),
            IsStr(regex=r"test2[\w:]*:HandleUserCreated:Message"),
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            "HandleUserCreated:Message:Payload"
        ]

    def test_subscriber_naming_manual(self):
        broker = self.broker_class()

        @broker.subscriber("test", title="custom")
        async def handle_user_created(msg: str):
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == ["custom"]

        assert list(schema["components"]["messages"].keys()) == ["custom:Message"]

        assert list(schema["components"]["schemas"].keys()) == [
            "custom:Message:Payload"
        ]


class FilterNaming(BaseNaming):  # noqa: D101
    def test_subscriber_filter_base(self):
        broker = self.broker_class()

        @broker.subscriber("test")
        async def handle_user_created(msg: str):
            ...

        @broker.subscriber("test")
        async def handle_user_id(msg: int):
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated")
        ]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated:Message")
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            "HandleUserCreated:Message:Payload",
            "HandleUserId:Message:Payload",
        ]

    def test_subscriber_filter_pydantic(self):
        broker = self.broker_class()

        @broker.subscriber("test")
        async def handle_user_created(msg: create_model("SimpleModel")):
            ...

        @broker.subscriber("test")
        async def handle_user_id(msg: int):
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated")
        ]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:HandleUserCreated:Message")
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            "SimpleModel",
            "HandleUserId:Message:Payload",
        ]

    def test_subscriber_filter_with_title(self):
        broker = self.broker_class()

        @broker.subscriber("test", title="custom")
        async def handle_user_created(msg: str):
            ...

        @broker.subscriber("test", title="custom")
        async def handle_user_id(msg: int):
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == ["custom"]

        assert list(schema["components"]["messages"].keys()) == ["custom:Message"]

        assert list(schema["components"]["schemas"].keys()) == [
            "HandleUserCreated:Message:Payload",
            "HandleUserId:Message:Payload",
        ]


class PublisherNaming(BaseNaming):  # noqa: D101
    def test_publisher_naming_base(self):
        broker = self.broker_class()

        @broker.publisher("test")
        async def handle_user_created() -> str:
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [IsStr(regex=r"test[\w:]*:Publisher")]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher:Message")
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher:Message:Payload")
        ]

    def test_publisher_naming_pydantic(self):
        broker = self.broker_class()

        @broker.publisher("test")
        async def handle_user_created() -> create_model("SimpleModel"):
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [IsStr(regex=r"test[\w:]*:Publisher")]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher:Message")
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            "SimpleModel",
        ]

    def test_publisher_manual_naming(self):
        broker = self.broker_class()

        @broker.publisher("test", title="custom")
        async def handle_user_created() -> str:
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == ["custom"]

        assert list(schema["components"]["messages"].keys()) == ["custom:Message"]

        assert list(schema["components"]["schemas"].keys()) == [
            "custom:Message:Payload"
        ]

    def test_publisher_with_schema_naming(self):
        broker = self.broker_class()

        @broker.publisher("test", schema=str)
        async def handle_user_created():
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [IsStr(regex=r"test[\w:]*:Publisher")]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher:Message")
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher:Message:Payload")
        ]

    def test_publisher_manual_naming_with_schema(self):
        broker = self.broker_class()

        @broker.publisher("test", title="custom", schema=str)
        async def handle_user_created():
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == ["custom"]

        assert list(schema["components"]["messages"].keys()) == ["custom:Message"]

        assert list(schema["components"]["schemas"].keys()) == [
            "custom:Message:Payload"
        ]

    def test_multi_publishers_naming(self):
        broker = self.broker_class()

        @broker.publisher("test")
        @broker.publisher("test2")
        async def handle_user_created() -> str:
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher"),
            IsStr(regex=r"test2[\w:]*:Publisher"),
        ]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher:Message"),
            IsStr(regex=r"test2[\w:]*:Publisher:Message"),
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher:Message:Payload"),
            IsStr(regex=r"test2[\w:]*:Publisher:Message:Payload"),
        ]

    def test_multi_publisher_usages(self):
        broker = self.broker_class()

        pub = broker.publisher("test")

        @pub
        async def handle_user_created() -> str:
            ...

        @pub
        async def handle() -> int:
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher"),
        ]

        assert list(schema["components"]["messages"].keys()) == [
            IsStr(regex=r"test[\w:]*:Publisher:Message"),
        ]

        assert list(schema["components"]["schemas"].keys()) == [
            "HandleUserCreated:Publisher:Message:Payload",
            "Handle:Publisher:Message:Payload",
        ]

    def test_multi_publisher_usages_with_custom(self):
        broker = self.broker_class()

        pub = broker.publisher("test", title="custom")

        @pub
        async def handle_user_created() -> str:
            ...

        @pub
        async def handle() -> int:
            ...

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert list(schema["channels"].keys()) == ["custom"]

        assert list(schema["components"]["messages"].keys()) == ["custom:Message"]

        assert list(schema["components"]["schemas"].keys()) == [
            "HandleUserCreated:Publisher:Message:Payload",
            "Handle:Publisher:Message:Payload",
        ]


class NamingTestCase(SubscriberNaming, FilterNaming, PublisherNaming):  # noqa: D101
    pass
