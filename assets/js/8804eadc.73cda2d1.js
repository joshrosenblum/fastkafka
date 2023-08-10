"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[9498],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>k});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},d=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,s=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,k=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return t?n.createElement(k,r(r({ref:a},c),{},{components:t})):n.createElement(k,r({ref:a},c))}));function k(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=t.length,r=new Array(s);r[0]=d;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<s;p++)r[p]=t[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5131:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>r,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const s={},r="@consumes basics",l={unversionedId:"guides/Guide_11_Consumes_Basics",id:"version-0.7.1/guides/Guide_11_Consumes_Basics",title:"@consumes basics",description:"You can use @consumes decorator to consume messages from Kafka topics.",source:"@site/versioned_docs/version-0.7.1/guides/Guide_11_Consumes_Basics.md",sourceDirName:"guides",slug:"/guides/Guide_11_Consumes_Basics",permalink:"/docs/0.7.1/guides/Guide_11_Consumes_Basics",draft:!1,tags:[],version:"0.7.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"FastKafka",permalink:"/docs/0.7.1/"},next:{title:"Batch consuming",permalink:"/docs/0.7.1/guides/Guide_12_Batch_Consuming"}},i={},p=[{value:"Import <code>FastKafka</code>",id:"import-fastkafka",level:2},{value:"Define the structure of the messages",id:"define-the-structure-of-the-messages",level:2},{value:"Create a base FastKafka app",id:"create-a-base-fastkafka-app",level:2},{value:"Create a consumer function and decorate it with <code>@consumes</code>",id:"create-a-consumer-function-and-decorate-it-with-consumes",level:2},{value:"Final app",id:"final-app",level:2},{value:"Run the app",id:"run-the-app",level:2},{value:"Send the message to kafka topic",id:"send-the-message-to-kafka-topic",level:2},{value:"Choosing a topic",id:"choosing-a-topic",level:2},{value:"Message data",id:"message-data",level:2},{value:"Message metadata",id:"message-metadata",level:2},{value:"Create a consumer function with metadata",id:"create-a-consumer-function-with-metadata",level:3},{value:"Dealing with high latency consuming functions",id:"dealing-with-high-latency-consuming-functions",level:2}],c={toc:p},u="wrapper";function m(e){let{components:a,...t}=e;return(0,o.kt)(u,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"consumes-basics"},"@consumes basics"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"@consumes")," decorator to consume messages from Kafka topics."),(0,o.kt)("p",null,"In this guide we will create a simple FastKafka app that will consume\n",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," messages from hello_world topic."),(0,o.kt)("h2",{id:"import-fastkafka"},"Import ",(0,o.kt)("a",{parentName:"h2",href:"/docs/0.7.1/api/fastkafka//#fastkafka.FastKafka"},(0,o.kt)("inlineCode",{parentName:"a"},"FastKafka"))),(0,o.kt)("p",null,"To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@consumes")," decorator, first we need to import the base\nFastKafka app to create our application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from fastkafka import FastKafka\n")),(0,o.kt)("p",null,"In this demo we will log the messages to the output so that we can\ninspect and verify that our app is consuming properly. For that we need\nto import the logger."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from fastkafka._components.logger import get_logger\n\nlogger = get_logger(__name__)\n")),(0,o.kt)("h2",{id:"define-the-structure-of-the-messages"},"Define the structure of the messages"),(0,o.kt)("p",null,"Next, you need to define the structure of the messages you want to\nconsume from the topic using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/"},"pydantic"),". For\nthe guide we\u2019ll stick to something basic, but you are free to define any\ncomplex message structure you wish in your project, just make sure it\ncan be JSON encoded."),(0,o.kt)("p",null,"Let\u2019s import ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseModel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Field")," from pydantic and create a simple\n",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," class containing one string parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pydantic import BaseModel, Field\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nclass HelloWorld(BaseModel):\n    msg: str = Field(\n        ...,\n        example="Hello",\n        description="Demo hello world message",\n    )\n')),(0,o.kt)("h2",{id:"create-a-base-fastkafka-app"},"Create a base FastKafka app"),(0,o.kt)("p",null,"Now we will create and define a base FastKafka app, replace the\n",(0,o.kt)("inlineCode",{parentName:"p"},"<url_of_your_kafka_bootstrap_server>")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"<port_of_your_kafka_bootstrap_server>")," with the actual values of your\nKafka bootstrap server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n\nkafka_brokers = {\n    "demo_broker": {\n        "url": "<url_of_your_kafka_bootstrap_server>",\n        "description": "local demo kafka broker",\n        "port": "<port_of_your_kafka_bootstrap_server>",\n    }\n}\n\napp = FastKafka(kafka_brokers=kafka_brokers)\n')),(0,o.kt)("h2",{id:"create-a-consumer-function-and-decorate-it-with-consumes"},"Create a consumer function and decorate it with ",(0,o.kt)("inlineCode",{parentName:"h2"},"@consumes")),(0,o.kt)("p",null,"Let\u2019s create a consumer function that will consume ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," messages\nfrom ",(0,o.kt)("em",{parentName:"p"},"hello_world")," topic and log them."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@app.consumes()\nasync def on_hello_world(msg: HelloWorld):\n    logger.info(f"Got msg: {msg}")\n')),(0,o.kt)("p",null,"The function decorated with the ",(0,o.kt)("inlineCode",{parentName:"p"},"@consumes")," decorator will be called\nwhen a message is produced to Kafka."),(0,o.kt)("p",null,"The message will then be injected into the typed ",(0,o.kt)("em",{parentName:"p"},"msg")," argument of the\nfunction and its type will be used to parse the message."),(0,o.kt)("p",null,"In this example case, when the message is sent into a ",(0,o.kt)("em",{parentName:"p"},"hello_world"),"\ntopic, it will be parsed into a HelloWorld class and ",(0,o.kt)("inlineCode",{parentName:"p"},"on_hello_world"),"\nfunction will be called with the parsed class as ",(0,o.kt)("em",{parentName:"p"},"msg")," argument value."),(0,o.kt)("h2",{id:"final-app"},"Final app"),(0,o.kt)("p",null,"Your app code should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fastkafka import FastKafka\nfrom pydantic import BaseModel, Field\nfrom fastkafka._components.logger import get_logger\n\nlogger = get_logger(__name__)\n\nclass HelloWorld(BaseModel):\n    msg: str = Field(\n        ...,\n        example="Hello",\n        description="Demo hello world message",\n    )\n\n\nkafka_brokers = {\n    "demo_broker": {\n        "url": "<url_of_your_kafka_bootstrap_server>",\n        "description": "local demo kafka broker",\n        "port": "<port_of_your_kafka_bootstrap_server>",\n    }\n}\n\napp = FastKafka(kafka_brokers=kafka_brokers)\n@app.consumes()\nasync def on_hello_world(msg: HelloWorld):\n    logger.info(f"Got msg: {msg}")\n')),(0,o.kt)("h2",{id:"run-the-app"},"Run the app"),(0,o.kt)("p",null,"Now we can run the app. Copy the code above in consumer_example.py and\nrun it by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fastkafka run --num-workers=1 --kafka-broker=demo_broker consumer_example:app\n")),(0,o.kt)("p",null,"After running the command, you should see this output in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[513863]: [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to '127.0.0.1:9092'\n[513863]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() starting...\n[513863]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer created using the following parameters: {'bootstrap_servers': '127.0.0.1:9092', 'auto_offset_reset': 'earliest', 'max_poll_records': 100}\n[513863]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer started.\n[513863]: [INFO] aiokafka.consumer.subscription_state: Updating subscribed topics to: frozenset({'hello_world'})\n[513863]: [INFO] aiokafka.consumer.consumer: Subscribed to topic(s): {'hello_world'}\n[513863]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer subscribed.\n[513863]: [INFO] aiokafka.consumer.group_coordinator: Metadata for topic has changed from {} to {'hello_world': 1}. \nStarting process cleanup, this may take a few seconds...\n[INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 513863...\n[513863]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop(): Consumer stopped.\n[513863]: [INFO] fastkafka._components.aiokafka_consumer_loop: aiokafka_consumer_loop() finished.\n[INFO] fastkafka._server: terminate_asyncio_process(): Process 513863 terminated.\n")),(0,o.kt)("h2",{id:"send-the-message-to-kafka-topic"},"Send the message to kafka topic"),(0,o.kt)("p",null,"Lets send a ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," message to the ",(0,o.kt)("em",{parentName:"p"},"hello_world")," topic and check if\nour consumer kafka application has logged the received message. In your\nterminal, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo {\\"msg\\": \\"Hello world\\"} | kafka-console-producer.sh --topic=hello_world --bootstrap-server=<addr_of_your_kafka_bootstrap_server>\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'print(consumer_task.value[1].decode("UTF-8"))\n')),(0,o.kt)("p",null,"You should see the \u201cGot msg: msg='Hello world'\" being logged by your\nconsumer."),(0,o.kt)("h2",{id:"choosing-a-topic"},"Choosing a topic"),(0,o.kt)("p",null,"You probably noticed that you didn\u2019t define which topic you are\nreceiving the message from, this is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"@consumes")," decorator\ndetermines the topic by default from your function name. The decorator\nwill take your function name and strip the default \u201con","_",'" prefix from it\nand use the rest as the topic name. In this example case, the topic is\n',(0,o.kt)("em",{parentName:"p"},"hello_world"),"."),(0,o.kt)("p",null,"You can choose your custom prefix by defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix")," parameter in\nconsumes decorator, like this:"),(0,o.kt)("p",null,"Also, you can define the topic name completely by defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"topic"),"\nin parameter in consumes decorator, like this:"),(0,o.kt)("h2",{id:"message-data"},"Message data"),(0,o.kt)("p",null,"The message received from kafka is translated from binary JSON\nrepresentation int the class defined by typing of ",(0,o.kt)("em",{parentName:"p"},"msg")," parameter in the\nfunction decorated by the ",(0,o.kt)("inlineCode",{parentName:"p"},"@consumes")," decorator."),(0,o.kt)("p",null,"In this example case, the message will be parsed into a ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld"),"\nclass."),(0,o.kt)("h2",{id:"message-metadata"},"Message metadata"),(0,o.kt)("p",null,"If you need any of Kafka message metadata such as timestamp, partition\nor headers you can access the metadata by adding a EventMetadata typed\nargument to your consumes function and the metadata from the incoming\nmessage will be automatically injected when calling the consumes\nfunction."),(0,o.kt)("p",null,"Let\u2019s demonstrate that."),(0,o.kt)("h3",{id:"create-a-consumer-function-with-metadata"},"Create a consumer function with metadata"),(0,o.kt)("p",null,"The only difference from the original basic consume function is that we\nare now passing the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta: EventMetadata")," argument to the function. The\n",(0,o.kt)("inlineCode",{parentName:"p"},"@consumes")," decorator will register that and, when a message is\nconsumed, it will also pass the metadata to your function. Now you can\nuse the metadata in your consume function. Lets log it to see what it\ncontains."),(0,o.kt)("p",null,"First, we need to import the EventMetadata"),(0,o.kt)("p",null,"Now we can add the ",(0,o.kt)("inlineCode",{parentName:"p"},"meta")," argument to our consuming function."),(0,o.kt)("p",null,"Your final app should look like this:"),(0,o.kt)("p",null,"Now lets run the app and send a message to the broker to see the logged\nmessage metadata."),(0,o.kt)("p",null,"You should see a similar log as the one below and the metadata being\nlogged in your app."),(0,o.kt)("p",null,"As you can see in the log, from the metadata you now have the\ninformation about the partition, offset, timestamp, key and headers.\n\ud83c\udf89"),(0,o.kt)("h2",{id:"dealing-with-high-latency-consuming-functions"},"Dealing with high latency consuming functions"),(0,o.kt)("p",null,"If your functions have high latency due to, for example, lengthy\ndatabase calls you will notice a big decrease in performance. This is\ndue to the issue of how the consumes decorator executes your consume\nfunctions when consumeing events. By default, the consume function will\nrun the consuming funtions for one topic sequentially, this is the most\nstraightforward approach and results with the least amount of overhead."),(0,o.kt)("p",null,"But, to handle those high latency tasks and run them in parallel,\nFastKafka has a\n",(0,o.kt)("a",{parentName:"p",href:"/docs/0.7.1/api/fastkafka/executors/DynamicTaskExecutor/#fastkafka.executors.DynamicTaskExecutor"},(0,o.kt)("inlineCode",{parentName:"a"},"DynamicTaskExecutor")),"\nprepared for your consumers. This executor comes with additional\noverhead, so use it only when you need to handle high latency functions."),(0,o.kt)("p",null,"Lets demonstrate how to use it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'decorate_consumes_executor = """@app.consumes(executor="DynamicTaskExecutor")\nasync def on_hello_world(msg: HelloWorld):\n    logger.info(f"Got msg: {msg}")\n"""\nmd(f"```python\\n{decorate_consumes}\\n```")\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'@app.consumes()\nasync def on_hello_world(msg: HelloWorld):\n    logger.info(f"Got msg: {msg}")\n')),(0,o.kt)("p",null,"Lets send a ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," message to the ",(0,o.kt)("em",{parentName:"p"},"hello_world")," topic and check if\nour consumer kafka application has logged the received message. In your\nterminal, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'echo {\\"msg\\": \\"Hello world\\"} | kafka-console-producer.sh --topic=hello_world --bootstrap-server=<addr_of_your_kafka_bootstrap_server>\n')),(0,o.kt)("p",null,"You should see the \u201cGot msg: msg='Hello world'\" being logged by your\nconsumer."))}m.isMDXComponent=!0}}]);