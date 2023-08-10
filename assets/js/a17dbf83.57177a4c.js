"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[162],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),k=a,m=p["".concat(c,".").concat(k)]||p[k]||f[k]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=k;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9044:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"api/fastkafka/executors/DynamicTaskExecutor",id:"version-0.7.0/api/fastkafka/executors/DynamicTaskExecutor",title:"DynamicTaskExecutor",description:"fastkafka.executors.DynamicTaskExecutor {fastkafka.executors.DynamicTaskExecutor}",source:"@site/versioned_docs/version-0.7.0/api/fastkafka/executors/DynamicTaskExecutor.md",sourceDirName:"api/fastkafka/executors",slug:"/api/fastkafka/executors/DynamicTaskExecutor",permalink:"/docs/0.7.0/api/fastkafka/executors/DynamicTaskExecutor",draft:!1,tags:[],version:"0.7.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"json_encoder",permalink:"/docs/0.7.0/api/fastkafka/encoder/json_encoder"},next:{title:"SequentialExecutor",permalink:"/docs/0.7.0/api/fastkafka/executors/SequentialExecutor"}},c={},l=[{value:"<code>fastkafka.executors.DynamicTaskExecutor</code>",id:"fastkafka.executors.DynamicTaskExecutor",level:2},{value:"<code>__init__</code>",id:"init",level:3},{value:"<code>run</code>",id:"run",level:3}],u={toc:l},p="wrapper";function f(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"fastkafka.executors.DynamicTaskExecutor"},(0,a.kt)("inlineCode",{parentName:"h2"},"fastkafka.executors.DynamicTaskExecutor")),(0,a.kt)("p",null,"A class that implements a dynamic task executor for processing consumer records."),(0,a.kt)("p",null,"The DynamicTaskExecutor class extends the StreamExecutor class and provides functionality\nfor running a tasks in parallel using asyncio.Task."),(0,a.kt)("h3",{id:"init"},(0,a.kt)("inlineCode",{parentName:"h3"},"__init__")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"def __init__(self, throw_exceptions: bool = False, max_buffer_size: int = 100000, size: int = 100000) -> None")),(0,a.kt)("p",null,"Create an instance of DynamicTaskExecutor"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"throw_exceptions"),": Flag indicating whether exceptions should be thrown ot logged.\nDefaults to False."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"max_buffer_size"),": Maximum buffer size for the memory object stream.\nDefaults to 100_000."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"size"),": Size of the task pool. Defaults to 100_000.")),(0,a.kt)("h3",{id:"run"},(0,a.kt)("inlineCode",{parentName:"h3"},"run")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"def run(self, is_shutting_down_f: Callable[[], bool], generator: Callable[[], Awaitable[aiokafka.structs.ConsumerRecord]], processor: Callable[[aiokafka.structs.ConsumerRecord], Awaitable[NoneType]]) -> None")),(0,a.kt)("p",null,"Runs the dynamic task executor."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Parameters"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"is_shutting_down_f"),": Function to check if the executor is shutting down."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"generator"),": Generator function for retrieving consumer records."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"processor"),": Processor function for processing consumer records.")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"None")))}f.isMDXComponent=!0}}]);