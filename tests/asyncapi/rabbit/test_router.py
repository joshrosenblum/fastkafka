from faststream import FastStream
from faststream.asyncapi.generate import get_app_schema
from faststream.rabbit import RabbitBroker, RabbitQueue, RabbitRoute, RabbitRouter
from tests.asyncapi.base.arguments import ArgumentsTestcase
from tests.asyncapi.base.publisher import PublisherTestcase
from tests.asyncapi.base.router import RouterTestcase


class TestRouter(RouterTestcase):  # noqa: D101
    broker_class = RabbitBroker
    router_class = RabbitRouter
    route_class = RabbitRoute

    def test_prefix(self):
        broker = self.broker_class()

        router = self.router_class(prefix="test_")

        @router.subscriber(RabbitQueue("test", routing_key="key"))
        async def handle(msg):
            ...

        broker.include_router(router)

        schema = get_app_schema(FastStream(broker)).to_jsonable()

        assert (
            schema
            == {
                "asyncapi": "2.6.0",
                "defaultContentType": "application/json",
                "info": {"title": "FastStream", "version": "0.1.0", "description": ""},
                "servers": {
                    "development": {
                        "url": "amqp://guest:guest@localhost:5672/",  # pragma: allowlist secret
                        "protocol": "amqp",
                        "protocolVersion": "0.9.1",
                    }
                },
                "channels": {
                    "test_test:_:Handle": {
                        "servers": ["development"],
                        "bindings": {
                            "amqp": {
                                "is": "routingKey",
                                "bindingVersion": "0.2.0",
                                "queue": {
                                    "name": "test_test",
                                    "durable": False,
                                    "exclusive": False,
                                    "autoDelete": False,
                                    "vhost": "/",
                                },
                                "exchange": {"type": "default", "vhost": "/"},
                            }
                        },
                        "subscribe": {
                            "bindings": {
                                "amqp": {
                                    "cc": "key",
                                    "ack": True,
                                    "bindingVersion": "0.2.0",
                                }
                            },
                            "message": {
                                "$ref": "#/components/messages/test_test:_:Handle:Message"
                            },
                        },
                    }
                },
                "components": {
                    "messages": {
                        "test_test:_:Handle:Message": {
                            "title": "test_test:_:Handle:Message",
                            "correlationId": {
                                "location": "$message.header#/correlation_id"
                            },
                            "payload": {
                                "$ref": "#/components/schemas/Handle:Message:Payload"
                            },
                        }
                    },
                    "schemas": {
                        "Handle:Message:Payload": {"title": "Handle:Message:Payload"}
                    },
                },
            }
        )


class TestRouterArguments(ArgumentsTestcase):  # noqa: D101
    broker_class = RabbitRouter

    def build_app(self, router):
        broker = RabbitBroker()
        broker.include_router(router)
        return FastStream(broker)


class TestRouterPublisher(PublisherTestcase):  # noqa: D101
    broker_class = RabbitRouter

    def build_app(self, router):
        broker = RabbitBroker()
        broker.include_router(router)
        return FastStream(broker)
