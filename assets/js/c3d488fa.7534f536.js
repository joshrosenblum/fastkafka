"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[3196],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(a),u=i,m=c["".concat(p,".").concat(u)]||c[u]||k[u]||r;return a?n.createElement(m,o(o({ref:t},d),{},{components:a})):n.createElement(m,o({ref:t},d))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s[c]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<r;l++)o[l]=a[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},4617:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var n=a(7462),i=(a(7294),a(3905));const r={},o="Using Redpanda to test FastKafka",s={unversionedId:"guides/Guide_31_Using_redpanda_to_test_fastkafka",id:"version-0.8.0/guides/Guide_31_Using_redpanda_to_test_fastkafka",title:"Using Redpanda to test FastKafka",description:"What is FastKafka?",source:"@site/versioned_docs/version-0.8.0/guides/Guide_31_Using_redpanda_to_test_fastkafka.md",sourceDirName:"guides",slug:"/guides/Guide_31_Using_redpanda_to_test_fastkafka",permalink:"/docs/guides/Guide_31_Using_redpanda_to_test_fastkafka",draft:!1,tags:[],version:"0.8.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Using multiple Kafka clusters",permalink:"/docs/guides/Guide_24_Using_Multiple_Kafka_Clusters"},next:{title:"Deploy FastKafka docs to GitHub Pages",permalink:"/docs/guides/Guide_04_Github_Actions_Workflow"}},p={},l=[{value:"What is FastKafka?",id:"what-is-fastkafka",level:2},{value:"What is Redpanda?",id:"what-is-redpanda",level:2},{value:"Example repo",id:"example-repo",level:2},{value:"The process",id:"the-process",level:2},{value:"1. Prerequisites",id:"1-prerequisites",level:2},{value:"2. Cloning and setting up the example repo",id:"2-cloning-and-setting-up-the-example-repo",level:2},{value:"Create a virtual environment",id:"create-a-virtual-environment",level:3},{value:"Install Python dependencies",id:"install-python-dependencies",level:3},{value:"3. Writing server code",id:"3-writing-server-code",level:2},{value:"Preparing the demo model",id:"preparing-the-demo-model",level:3},{value:"Messages",id:"messages",level:3},{value:"Application",id:"application",level:3},{value:"Function decorators",id:"function-decorators",level:3},{value:"4. Writing the test code",id:"4-writing-the-test-code",level:2},{value:"5. Running the tests",id:"5-running-the-tests",level:2},{value:"Recap",id:"recap",level:3}],d={toc:l},c="wrapper";function k(e){let{components:t,...a}=e;return(0,i.kt)(c,(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"using-redpanda-to-test-fastkafka"},"Using Redpanda to test FastKafka"),(0,i.kt)("h2",{id:"what-is-fastkafka"},"What is FastKafka?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://fastkafka.airt.ai/"},"FastKafka")," is a powerful and easy-to-use\nPython library for building asynchronous services that interact with\nKafka topics. Built on top of ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/"},"Pydantic"),",\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/aio-libs/aiokafka"},"AIOKafka")," and\n",(0,i.kt)("a",{parentName:"p",href:"https://www.asyncapi.com/"},"AsyncAPI"),", FastKafka simplifies the process\nof writing producers and consumers for Kafka topics, handling all the\nparsing, networking, task scheduling and data generation automatically.\nWith FastKafka, you can quickly prototype and develop high-performance\nKafka-based services with minimal code, making it an ideal choice for\ndevelopers looking to streamline their workflow and accelerate their\nprojects."),(0,i.kt)("h2",{id:"what-is-redpanda"},"What is Redpanda?"),(0,i.kt)("p",null,"Redpanda is a drop-in replacement for Kafka. Most of the Kafka tools\nwork out of the box with Redpanda."),(0,i.kt)("p",null,"From ",(0,i.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"redpanda.com"),":"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Redpanda is a Kafka\xae-compatible streaming data platform that is proven\nto be 10x faster and 6x lower in total costs. It is also JVM-free,\nZooKeeper\xae-free, Jepsen-tested and source available.")),(0,i.kt)("p",null,"Some of the advantages of Redpanda over Kafka are"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"A single binary with built-in everything, no ZooKeeper\xae or JVM\nneeded."),(0,i.kt)("li",{parentName:"ol"},"Costs upto 6X less than Kafka."),(0,i.kt)("li",{parentName:"ol"},"Up to 10x lower average latencies and up to 6x faster Kafka\ntransactions without compromising correctness.")),(0,i.kt)("p",null,"To learn more about Redpanda, please visit their\n",(0,i.kt)("a",{parentName:"p",href:"https://redpanda.com/"},"website")," or checkout this ",(0,i.kt)("a",{parentName:"p",href:"https://redpanda.com/blog/redpanda-vs-kafka-performance-benchmark"},"blog\npost"),"\ncomparing Redpanda and Kafka\u2019s performance benchmarks."),(0,i.kt)("h2",{id:"example-repo"},"Example repo"),(0,i.kt)("p",null,"A sample FastKafka-based library that uses Redpanda for testing, based\non this guide, can be found\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airtai/sample_fastkafka_with_redpanda"},"here"),"."),(0,i.kt)("h2",{id:"the-process"},"The process"),(0,i.kt)("p",null,"Here are the steps we\u2019ll be walking through to build our example:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Set up the prerequisites."),(0,i.kt)("li",{parentName:"ol"},"Clone the example repo."),(0,i.kt)("li",{parentName:"ol"},"Explain how to write an application using FastKafka."),(0,i.kt)("li",{parentName:"ol"},"Explain how to write a test case to test FastKafka with Redpanda."),(0,i.kt)("li",{parentName:"ol"},"Run the test case and produce/consume messages.")),(0,i.kt)("h2",{id:"1-prerequisites"},"1. Prerequisites"),(0,i.kt)("p",null,"Before starting, make sure you have the following prerequisites set up:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Python 3.x"),": A Python 3.x installation is required to run\nFastKafka. You can download the latest version of Python from the\n",(0,i.kt)("a",{parentName:"li",href:"https://www.python.org/downloads/"},"official website"),". You\u2019ll also\nneed to have pip installed and updated, which is Python\u2019s package\ninstaller."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Docker Desktop"),": Docker is used to run Redpanda, which is\nrequired for testing FastKafka. You can download and install Docker\nDesktop from the ",(0,i.kt)("a",{parentName:"li",href:"https://www.docker.com/products/docker-desktop/"},"official\nwebsite"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Git"),": You\u2019ll need to have Git installed to clone the example\nrepo. You can download Git from the ",(0,i.kt)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"official\nwebsite"),".")),(0,i.kt)("h2",{id:"2-cloning-and-setting-up-the-example-repo"},"2. Cloning and setting up the example repo"),(0,i.kt)("p",null,"To get started with the example code, clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/airtai/sample_fastkafka_with_redpanda"},"GitHub\nrepository")," by\nrunning the following command in your terminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"git clone https://github.com/airtai/sample_fastkafka_with_redpanda.git\ncd sample_fastkafka_with_redpanda\n")),(0,i.kt)("p",null,"This will create a new directory called sample_fastkafka_with_redpanda\nand download all the necessary files."),(0,i.kt)("h3",{id:"create-a-virtual-environment"},"Create a virtual environment"),(0,i.kt)("p",null,"Before writing any code, let\u2019s ",(0,i.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/venv.html#module-venv"},"create a new virtual\nenvironment"),"\nfor our project."),(0,i.kt)("p",null,"A virtual environment is an isolated environment for a Python project,\nwhich allows you to manage project-specific dependencies and avoid\nconflicts between different projects."),(0,i.kt)("p",null,"To create a new virtual environment, run the following commands in your\nterminal:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"python3 -m venv venv\n")),(0,i.kt)("p",null,"This will create a new directory called ",(0,i.kt)("inlineCode",{parentName:"p"},"venv")," in your project\ndirectory, which will contain the virtual environment."),(0,i.kt)("p",null,"To activate the virtual environment, run the following command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"source venv/bin/activate\n")),(0,i.kt)("p",null,"This will change your shell\u2019s prompt to indicate that you are now\nworking inside the virtual environment."),(0,i.kt)("p",null,"Finally, run the following command to upgrade ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),", the Python package\ninstaller:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"pip install --upgrade pip\n")),(0,i.kt)("h3",{id:"install-python-dependencies"},"Install Python dependencies"),(0,i.kt)("p",null,"Next, let\u2019s install the required Python dependencies. In this guide,\nwe\u2019ll be using\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/#fastkafka.FastKafka"},(0,i.kt)("inlineCode",{parentName:"a"},"FastKafka")),"\nto write our application code and ",(0,i.kt)("inlineCode",{parentName:"p"},"pytest")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"pytest-asyncio")," to test\nit."),(0,i.kt)("p",null,"You can install the dependencies from the ",(0,i.kt)("inlineCode",{parentName:"p"},"requirements.txt")," file\nprovided in the cloned repository by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"pip install -r requirements.txt\n")),(0,i.kt)("p",null,"This will install all the required packages and their dependencies."),(0,i.kt)("h2",{id:"3-writing-server-code"},"3. Writing server code"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"application.py")," file in the cloned repository demonstrates how to\nuse FastKafka to consume messages from a Kafka topic, make predictions\nusing a predictive model, and publish the predictions to another Kafka\ntopic. Here is an explanation of the code:"),(0,i.kt)("h3",{id:"preparing-the-demo-model"},"Preparing the demo model"),(0,i.kt)("p",null,"First we will prepare our model using the Iris dataset so that we can\ndemonstrate the predictions using FastKafka. The following call\ndownloads the dataset and trains the model."),(0,i.kt)("p",null,"We will wrap the model creation into a lifespan of our app so that the\nmodel is created just before the app is started."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from contextlib import asynccontextmanager\n\nfrom sklearn.datasets import load_iris\nfrom sklearn.linear_model import LogisticRegression\n\nfrom fastkafka import FastKafka\n\nml_models = {}\n\n\n@asynccontextmanager\nasync def lifespan(app: FastKafka):\n    # Load the ML model\n    X, y = load_iris(return_X_y=True)\n    ml_models["iris_predictor"] = LogisticRegression(random_state=0, max_iter=500).fit(\n        X, y\n    )\n    yield\n    # Clean up the ML models and release the resources\n    ml_models.clear()\n')),(0,i.kt)("h3",{id:"messages"},"Messages"),(0,i.kt)("p",null,"FastKafka uses ",(0,i.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/"},"Pydantic")," to parse input\nJSON-encoded data into Python objects, making it easy to work with\nstructured data in your Kafka-based applications. Pydantic\u2019s\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/usage/models/"},(0,i.kt)("inlineCode",{parentName:"a"},"BaseModel"))," class allows you\nto define messages using a declarative syntax, making it easy to specify\nthe fields and types of your messages."),(0,i.kt)("p",null,"This example defines two message classes for use in a FastKafka\napplication:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IrisInputData")," class is used to represent input data for a\npredictive model. It has four fields of type\n",(0,i.kt)("a",{parentName:"p",href:"https://docs.pydantic.dev/latest/api/types/#pydantic.types.NonNegativeFloat"},(0,i.kt)("inlineCode",{parentName:"a"},"NonNegativeFloat")),",\nwhich is a subclass of float that only allows non-negative floating\npoint values.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"IrisPrediction")," class is used to represent the output of the\npredictive model. It has a single field ",(0,i.kt)("inlineCode",{parentName:"p"},"species")," of type string\nrepresenting the predicted species."))),(0,i.kt)("p",null,"These message classes will be used to parse and validate incoming data\nin Kafka consumers and producers."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from pydantic import BaseModel, Field, NonNegativeFloat\n\n\nclass IrisInputData(BaseModel):\n    sepal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal length in cm"\n    )\n    sepal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Sepal width in cm"\n    )\n    petal_length: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal length in cm"\n    )\n    petal_width: NonNegativeFloat = Field(\n        ..., example=0.5, description="Petal width in cm"\n    )\n\n\nclass IrisPrediction(BaseModel):\n    species: str = Field(..., example="setosa", description="Predicted species")\n')),(0,i.kt)("h3",{id:"application"},"Application"),(0,i.kt)("p",null,"This example shows how to initialize a FastKafka application."),(0,i.kt)("p",null,"It starts by defining a dictionary called ",(0,i.kt)("inlineCode",{parentName:"p"},"kafka_brokers"),", which\ncontains two entries: ",(0,i.kt)("inlineCode",{parentName:"p"},'"localhost"')," and ",(0,i.kt)("inlineCode",{parentName:"p"},'"production"'),", specifying local\ndevelopment and production Kafka brokers. Each entry specifies the URL,\nport, and other details of a Kafka broker. This dictionary is used both\nto generate documentation and to later run the server against one of the\ngiven kafka broker."),(0,i.kt)("p",null,"Next, an instance of the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/#fastkafka.FastKafka"},(0,i.kt)("inlineCode",{parentName:"a"},"FastKafka")),"\nclass is initialized with the minimum required arguments:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"kafka_brokers"),": a dictionary used for generating documentation")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'from fastkafka import FastKafka\n\nkafka_brokers = {\n    "localhost": {\n        "url": "localhost",\n        "description": "local development kafka broker",\n        "port": 9092,\n    },\n    "production": {\n        "url": "kafka.airt.ai",\n        "description": "production kafka broker",\n        "port": 9092,\n        "protocol": "kafka-secure",\n        "security": {"type": "plain"},\n    },\n}\n\nkafka_app = FastKafka(\n    title="Iris predictions",\n    kafka_brokers=kafka_brokers,\n    lifespan=lifespan,\n)\n')),(0,i.kt)("h3",{id:"function-decorators"},"Function decorators"),(0,i.kt)("p",null,"FastKafka provides convenient function decorators ",(0,i.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes"),"\nand ",(0,i.kt)("inlineCode",{parentName:"p"},"@kafka_app.produces")," to allow you to delegate the actual process of"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"consuming and producing data to Kafka, and")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"decoding and encoding JSON encode messages"))),(0,i.kt)("p",null,"from user defined functions to the framework. The FastKafka framework\ndelegates these jobs to AIOKafka and Pydantic libraries."),(0,i.kt)("p",null,"These decorators make it easy to specify the processing logic for your\nKafka consumers and producers, allowing you to focus on the core\nbusiness logic of your application without worrying about the underlying\nKafka integration."),(0,i.kt)("p",null,"This following example shows how to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes")," and\n",(0,i.kt)("inlineCode",{parentName:"p"},"@kafka_app.produces")," decorators in a FastKafka application:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@kafka_app.consumes")," decorator is applied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"on_input_data"),'\nfunction, which specifies that this function should be called whenever\na message is received on the \u201cinput_data" Kafka topic. The\n',(0,i.kt)("inlineCode",{parentName:"p"},"on_input_data")," function takes a single argument which is expected to\nbe an instance of the ",(0,i.kt)("inlineCode",{parentName:"p"},"IrisInputData")," message class. Specifying the\ntype of the single argument is instructing the Pydantic to use\n",(0,i.kt)("inlineCode",{parentName:"p"},"IrisInputData.parse_raw()")," on the consumed message before passing it\nto the user defined function ",(0,i.kt)("inlineCode",{parentName:"p"},"on_input_data"),".")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"@produces")," decorator is applied to the ",(0,i.kt)("inlineCode",{parentName:"p"},"to_predictions"),' function,\nwhich specifies that this function should produce a message to the\n\u201cpredictions" Kafka topic whenever it is called. The ',(0,i.kt)("inlineCode",{parentName:"p"},"to_predictions"),"\nfunction takes a single integer argument ",(0,i.kt)("inlineCode",{parentName:"p"},"species_class")," representing\none of three possible strign values predicted by the mdoel. It creates\na new ",(0,i.kt)("inlineCode",{parentName:"p"},"IrisPrediction")," message using this value and then returns it.\nThe framework will call the ",(0,i.kt)("inlineCode",{parentName:"p"},'IrisPrediction.json().encode("utf-8")'),"\nfunction on the returned value and produce it to the specified topic."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'@kafka_app.consumes(topic="input_data", auto_offset_reset="latest")\nasync def on_input_data(msg: IrisInputData):\n    species_class = ml_models["iris_predictor"].predict(\n        [[msg.sepal_length, msg.sepal_width, msg.petal_length, msg.petal_width]]\n    )[0]\n\n    await to_predictions(species_class)\n\n\n@kafka_app.produces(topic="predictions")\nasync def to_predictions(species_class: int) -> IrisPrediction:\n    iris_species = ["setosa", "versicolor", "virginica"]\n\n    prediction = IrisPrediction(species=iris_species[species_class])\n    return prediction\n')),(0,i.kt)("h2",{id:"4-writing-the-test-code"},"4. Writing the test code"),(0,i.kt)("p",null,"The service can be tested using the\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/testing/Tester#fastkafka.testing.Tester"},(0,i.kt)("inlineCode",{parentName:"a"},"Tester")),"\ninstance which can be configured to start a ",(0,i.kt)("a",{parentName:"p",href:"../../api/fastkafka/testing/LocalRedpandaBroker/"},"Redpanda\nbroker")," for testing\npurposes. The ",(0,i.kt)("inlineCode",{parentName:"p"},"test.py")," file in the cloned repository contains the\nfollowing code for testing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import pytest\nfrom application import IrisInputData, IrisPrediction, kafka_app\n\nfrom fastkafka.testing import Tester\n\nmsg = IrisInputData(\n    sepal_length=0.1,\n    sepal_width=0.2,\n    petal_length=0.3,\n    petal_width=0.4,\n)\n\n\n@pytest.mark.asyncio\nasync def test():\n    # Start Tester app and create local Redpanda broker for testing\n    async with Tester(kafka_app).using_local_redpanda(\n        tag="v23.1.2", listener_port=9092\n    ) as tester:\n        # Send IrisInputData message to input_data topic\n        await tester.to_input_data(msg)\n\n        # Assert that the kafka_app responded with IrisPrediction in predictions topic\n        await tester.awaited_mocks.on_predictions.assert_awaited_with(\n            IrisPrediction(species="setosa"), timeout=2\n        )\n')),(0,i.kt)("p",null,"The\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/testing/Tester#fastkafka.testing.Tester"},(0,i.kt)("inlineCode",{parentName:"a"},"Tester")),"\nmodule utilizes uses\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/testing/LocalRedpandaBroker#fastkafka.testing.LocalRedpandaBroker"},(0,i.kt)("inlineCode",{parentName:"a"},"LocalRedpandaBroker")),"\nto start and stop a Redpanda broker for testing purposes using Docker"),(0,i.kt)("h2",{id:"5-running-the-tests"},"5. Running the tests"),(0,i.kt)("p",null,"We can run the tests which is in ",(0,i.kt)("inlineCode",{parentName:"p"},"test.py")," file by executing the\nfollowing command:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"pytest test.py\n")),(0,i.kt)("p",null,"This will start a Redpanda broker using Docker and executes tests. The\noutput of the command is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cmd"},"(venv) fastkafka@airt-ai:~/dev/sample_fastkafka_with_redpanda$ pytest\n============================== test session starts ===============================\nplatform linux -- Python 3.10.6, pytest-7.2.2, pluggy-1.0.0\nrootdir: /home/kumaran/dev/sample_fastkafka_with_redpanda, configfile: pytest.ini, testpaths: test.py\nplugins: asyncio-0.21.0, anyio-3.6.2\nasyncio: mode=strict\ncollected 1 item                                                                 \n\ntest.py .                                                                  [100%]\n\n=============================== 1 passed in 7.28s ================================\n(venv) fastkafka@airt-ai:~/dev/sample_fastkafka_with_redpanda$\n")),(0,i.kt)("p",null,"Running the tests with the Redpanda broker ensures that your code is\nworking correctly with a real Kafka-like message broker, making your\ntests more reliable."),(0,i.kt)("h3",{id:"recap"},"Recap"),(0,i.kt)("p",null,"We have created an Iris classification model and encapulated it into our\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/#fastkafka.FastKafka"},(0,i.kt)("inlineCode",{parentName:"a"},"FastKafka")),"\napplication. The app will consume the ",(0,i.kt)("inlineCode",{parentName:"p"},"IrisInputData")," from the\n",(0,i.kt)("inlineCode",{parentName:"p"},"input_data")," topic and produce the predictions to ",(0,i.kt)("inlineCode",{parentName:"p"},"predictions")," topic."),(0,i.kt)("p",null,"To test the app we have:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Created the app")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Started our\n",(0,i.kt)("a",{parentName:"p",href:"/docs/api/fastkafka/testing/Tester#fastkafka.testing.Tester"},(0,i.kt)("inlineCode",{parentName:"a"},"Tester")),"\nclass with ",(0,i.kt)("inlineCode",{parentName:"p"},"Redpanda")," broker which mirrors the developed app topics\nfor testing purposes")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Sent ",(0,i.kt)("inlineCode",{parentName:"p"},"IrisInputData")," message to ",(0,i.kt)("inlineCode",{parentName:"p"},"input_data")," topic")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Asserted and checked that the developed iris classification service\nhas reacted to ",(0,i.kt)("inlineCode",{parentName:"p"},"IrisInputData")," message"))))}k.isMDXComponent=!0}}]);