"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[8064],{3905:(e,a,t)=>{t.d(a,{Zo:()=>c,kt:()=>f});var n=t(7294);function o(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){o(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=n.createContext({}),p=function(e){var a=n.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},c=function(e){var a=p(e.components);return n.createElement(i.Provider,{value:a},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},k=n.forwardRef((function(e,a){var t=e.components,o=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),k=o,f=d["".concat(i,".").concat(k)]||d[k]||u[k]||r;return t?n.createElement(f,s(s({ref:a},c),{},{components:t})):n.createElement(f,s({ref:a},c))}));function f(e,a){var t=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var r=t.length,s=new Array(r);s[0]=k;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l[d]="string"==typeof e?e:o,s[1]=l;for(var p=2;p<r;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3469:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const r={},s="@produces basics",l={unversionedId:"guides/Guide_21_Produces_Basics",id:"version-0.6.0/guides/Guide_21_Produces_Basics",title:"@produces basics",description:"You can use @produces decorator to produce messages to Kafka topics.",source:"@site/versioned_docs/version-0.6.0/guides/Guide_21_Produces_Basics.md",sourceDirName:"guides",slug:"/guides/Guide_21_Produces_Basics",permalink:"/docs/0.6.0/guides/Guide_21_Produces_Basics",draft:!1,tags:[],version:"0.6.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"@consumes basics",permalink:"/docs/0.6.0/guides/Guide_11_Consumes_Basics"},next:{title:"Defining a partition key",permalink:"/docs/0.6.0/guides/Guide_22_Partition_Keys"}},i={},p=[{value:"Import <code>FastKafka</code>",id:"import-fastkafka",level:2},{value:"Define the structure of the messages",id:"define-the-structure-of-the-messages",level:2},{value:"Create a base FastKafka app",id:"create-a-base-fastkafka-app",level:2},{value:"Create a producer function and decorate it with <code>@produces</code>",id:"create-a-producer-function-and-decorate-it-with-produces",level:2},{value:"Instruct the app to start sending HelloWorld messages",id:"instruct-the-app-to-start-sending-helloworld-messages",level:2},{value:"Final app",id:"final-app",level:2},{value:"Run the app",id:"run-the-app",level:2},{value:"Check if the message was sent to the Kafka topic",id:"check-if-the-message-was-sent-to-the-kafka-topic",level:2},{value:"Choosing a topic",id:"choosing-a-topic",level:2},{value:"Message data",id:"message-data",level:2}],c={toc:p},d="wrapper";function u(e){let{components:a,...t}=e;return(0,o.kt)(d,(0,n.Z)({},c,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"produces-basics"},"@produces basics"),(0,o.kt)("p",null,"You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"@produces")," decorator to produce messages to Kafka topics."),(0,o.kt)("p",null,"In this guide we will create a simple FastKafka app that will produce\nhello world messages to hello_world topic."),(0,o.kt)("h2",{id:"import-fastkafka"},"Import ",(0,o.kt)("a",{parentName:"h2",href:"/docs/0.6.0/api/fastkafka//#fastkafka.FastKafka"},(0,o.kt)("inlineCode",{parentName:"a"},"FastKafka"))),(0,o.kt)("p",null,"To use the ",(0,o.kt)("inlineCode",{parentName:"p"},"@produces")," decorator, frist we need to import the base\nFastKafka app to create our application."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from fastkafka import FastKafka\n")),(0,o.kt)("h2",{id:"define-the-structure-of-the-messages"},"Define the structure of the messages"),(0,o.kt)("p",null,"Next, you need to define the structure of the messages you want to send\nto the topic using ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/"},"pydantic"),". For the guide\nwe\u2019ll stick to something basic, but you are free to define any complex\nmessage structure you wish in your project, just make sure it can be\nJSON encoded."),(0,o.kt)("p",null,"Let\u2019s import ",(0,o.kt)("inlineCode",{parentName:"p"},"BaseModel")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Field")," from pydantic and create a simple\n",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," class containing one string parameter ",(0,o.kt)("inlineCode",{parentName:"p"},"msg")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from pydantic import BaseModel, Field\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nclass HelloWorld(BaseModel):\n    msg: str = Field(\n        ...,\n        example="Hello",\n        description="Demo hello world message",\n    )\n')),(0,o.kt)("h2",{id:"create-a-base-fastkafka-app"},"Create a base FastKafka app"),(0,o.kt)("p",null,"Now we will create and define a base FastKafka app, replace the\n",(0,o.kt)("inlineCode",{parentName:"p"},"<url_of_your_kafka_bootstrap_server>")," and\n",(0,o.kt)("inlineCode",{parentName:"p"},"<port_of_your_kafka_bootstrap_server>")," with the actual values of your\nKafka bootstrap server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n\nkafka_brokers = {\n    "demo_broker": {\n        "url": "<url_of_your_kafka_bootstrap_server>",\n        "description": "local demo kafka broker",\n        "port": "<port_of_your_kafka_bootstrap_server>",\n    }\n}\n\napp = FastKafka(kafka_brokers=kafka_brokers)\n')),(0,o.kt)("h2",{id:"create-a-producer-function-and-decorate-it-with-produces"},"Create a producer function and decorate it with ",(0,o.kt)("inlineCode",{parentName:"h2"},"@produces")),(0,o.kt)("p",null,"Let\u2019s create a producer function that will produce ",(0,o.kt)("inlineCode",{parentName:"p"},"HelloWorld")," messages\nto ",(0,o.kt)("em",{parentName:"p"},"hello_world")," topic:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"\n@app.produces()\nasync def to_hello_world(msg: str) -> HelloWorld:\n    return HelloWorld(msg=msg)\n")),(0,o.kt)("p",null,"Now you can call your defined function as any normal python function in\nyour code. The side effect of calling the function will be that the\nvalue you are returning will also be sent to a kafka topic."),(0,o.kt)("p",null,"By default, the topic is determined from your function name, the \u201cto","_",'"\nprefix is stripped and what is left over is used as a topic name. I this\ncase, that is ',(0,o.kt)("em",{parentName:"p"},"hello_world"),"."),(0,o.kt)("h2",{id:"instruct-the-app-to-start-sending-helloworld-messages"},"Instruct the app to start sending HelloWorld messages"),(0,o.kt)("p",null,"Let\u2019s use ",(0,o.kt)("inlineCode",{parentName:"p"},"@run_in_background")," decorator to instruct our app to send\nHelloWorld messages to hello_world topic every second."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\nimport asyncio\n\n@app.run_in_background()\nasync def hello_every_second():\n    while(True):\n        await to_hello_world(msg="Hello world!")\n        await asyncio.sleep(1)\n')),(0,o.kt)("h2",{id:"final-app"},"Final app"),(0,o.kt)("p",null,"Your app code should look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from fastkafka import FastKafka\nfrom pydantic import BaseModel, Field\n\nclass HelloWorld(BaseModel):\n    msg: str = Field(\n        ...,\n        example="Hello",\n        description="Demo hello world message",\n    )\n\n\nkafka_brokers = {\n    "demo_broker": {\n        "url": "<url_of_your_kafka_bootstrap_server>",\n        "description": "local demo kafka broker",\n        "port": "<port_of_your_kafka_bootstrap_server>",\n    }\n}\n\napp = FastKafka(kafka_brokers=kafka_brokers)\n\n@app.produces()\nasync def to_hello_world(msg: str) -> HelloWorld:\n    return HelloWorld(msg=msg)\n\nimport asyncio\n\n@app.run_in_background()\nasync def hello_every_second():\n    while(True):\n        await to_hello_world(msg="Hello world!")\n        await asyncio.sleep(1)\n')),(0,o.kt)("h2",{id:"run-the-app"},"Run the app"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'script_file = "producer_example.py"\ncmd = "fastkafka run --num-workers=1 --kafka-broker=demo_broker producer_example:app"\nmd(\n    f"Now we can run the app. Copy the code above in producer_example.py and run it by running\\n```shell\\n{cmd}\\n```"\n)\n')),(0,o.kt)("p",null,"Now we can run the app. Copy the code above in producer_example.py and\nrun it by running"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"fastkafka run --num-workers=1 --kafka-broker=demo_broker producer_example:app\n")),(0,o.kt)("p",null,"After running the command, you should see this output in your terminal:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[84645]: [INFO] fastkafka._application.app: run_in_background() : Adding function 'hello_every_second' as background task\n[84645]: [INFO] fastkafka._application.app: set_kafka_broker() : Setting bootstrap_servers value to '127.0.0.1:9092'\n[84645]: [INFO] fastkafka._application.app: _create_producer() : created producer using the config: '{'bootstrap_servers': '127.0.0.1:9092'}'\n[84645]: [INFO] fastkafka._application.app: _populate_bg_tasks() : Starting background task 'hello_every_second'\n[84645]: [WARNING] aiokafka.cluster: Topic hello_world is not available during auto-create initialization\n[84645]: [WARNING] aiokafka.cluster: Topic hello_world is not available during auto-create initialization\nStarting process cleanup, this may take a few seconds...\n[INFO] fastkafka._server: terminate_asyncio_process(): Terminating the process 84645...\n[84645]: [INFO] fastkafka._application.app: _shutdown_bg_tasks() : Cancelling background task 'hello_every_second'\n[84645]: [INFO] fastkafka._application.app: _shutdown_bg_tasks() : Waiting for background task 'hello_every_second' to finish\n[84645]: [INFO] fastkafka._application.app: _shutdown_bg_tasks() : Execution finished for background task 'hello_every_second'\n[INFO] fastkafka._server: terminate_asyncio_process(): Process 84645 terminated.\n")),(0,o.kt)("h2",{id:"check-if-the-message-was-sent-to-the-kafka-topic"},"Check if the message was sent to the Kafka topic"),(0,o.kt)("p",null,'Lets check the topic and see if there is a \u201cHello world!" message in the\nhello_world topic. In your terminal run:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"kafka-console-consumer.sh -topic=hello_world --from-beginning -bootstrap-server=<addr_of_your_kafka_bootstrap_server>\n")),(0,o.kt)("p",null,'You should see the {\u201cmsg": \u201cHello world!"} messages in your topic.'),(0,o.kt)("h2",{id:"choosing-a-topic"},"Choosing a topic"),(0,o.kt)("p",null,"You probably noticed that you didn\u2019t define which topic you are sending\nthe message to, this is because the ",(0,o.kt)("inlineCode",{parentName:"p"},"@produces")," decorator determines the\ntopic by default from your function name. The decorator will take your\nfunction name and strip the default \u201cto","_",'" prefix from it and use the\nrest as the topic name. In this example case, the topic is\n',(0,o.kt)("em",{parentName:"p"},"hello_world"),"."),(0,o.kt)("p",null,'!!! warn "New topics"'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Kafka producers and application startup will fail if the topics you are producing to don't yet exist. Before running the app, make sure that the topics are created.\n")),(0,o.kt)("p",null,"You can choose your custom prefix by defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"prefix")," parameter in\nproduces decorator, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n@app.produces(prefix="send_to_")\nasync def send_to_hello_world(msg: str) -> HelloWorld:\n    return HelloWorld(msg=msg)\n')),(0,o.kt)("p",null,"Also, you can define the topic name completely by defining the ",(0,o.kt)("inlineCode",{parentName:"p"},"topic"),"\nin parameter in produces decorator, like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'\n@app.produces(topic="my_special_topic")\nasync def to_hello_world(msg: str) -> HelloWorld:\n    return HelloWorld(msg=msg)\n')),(0,o.kt)("h2",{id:"message-data"},"Message data"),(0,o.kt)("p",null,"The return value from your function will be translated JSON string and\nthen to bytes and sent to defined Kafka topic. The typing of the return\nvalue is used for generating the documentation for your Kafka app."),(0,o.kt)("p",null,"In this example case, the return value is HelloWorld class which will be\ntranslated into JSON formatted string and then to bytes. The translated\ndata will then be sent to Kafka. In the from of:\n",(0,o.kt)("inlineCode",{parentName:"p"},'b\'{"msg": "Hello world!"}\'')))}u.isMDXComponent=!0}}]);