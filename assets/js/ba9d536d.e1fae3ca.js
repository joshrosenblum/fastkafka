"use strict";(self.webpackChunkfastkafka=self.webpackChunkfastkafka||[]).push([[1384],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return n?r.createElement(m,i(i({ref:t},l),{},{components:n})):r.createElement(m,i({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u[p]="string"==typeof e?e:o,i[1]=u;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2435:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const a={},i="Authentication",u={unversionedId:"guides/Guide_03_Authentication",id:"version-0.8.0/guides/Guide_03_Authentication",title:"Authentication",description:"TLS Authentication",source:"@site/versioned_docs/version-0.8.0/guides/Guide_03_Authentication.md",sourceDirName:"guides",slug:"/guides/Guide_03_Authentication",permalink:"/docs/guides/Guide_03_Authentication",draft:!1,tags:[],version:"0.8.0",frontMatter:{}},c={},s=[{value:"TLS Authentication",id:"tls-authentication",level:2}],l={toc:s},p="wrapper";function f(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"authentication"},"Authentication"),(0,o.kt)("h2",{id:"tls-authentication"},"TLS Authentication"),(0,o.kt)("p",null,"sasl_mechanism (str) \u2013 Authentication mechanism when security_protocol\nis configured for SASL_PLAINTEXT or SASL_SSL. Valid values are: PLAIN,\nGSSAPI, SCRAM-SHA-256, SCRAM-SHA-512, OAUTHBEARER. Default: PLAIN"),(0,o.kt)("p",null,"sasl_plain_username (str) \u2013 username for SASL PLAIN authentication.\nDefault: None"),(0,o.kt)("p",null,"sasl_plain_password (str) \u2013 password for SASL PLAIN authentication.\nDefault: None"),(0,o.kt)("p",null,"sasl_oauth_token_provider (AbstractTokenProvider) \u2013 OAuthBearer token\nprovider instance. (See kafka.oauth.abstract). Default: None"))}f.isMDXComponent=!0}}]);