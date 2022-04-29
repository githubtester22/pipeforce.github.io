"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4315],{3905:function(e,a,t){t.d(a,{Zo:function(){return l},kt:function(){return u}});var n=t(7294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function r(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function s(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=n.createContext({}),m=function(e){var a=n.useContext(p),t=a;return e&&(t="function"==typeof e?e(a):r(r({},a),e)),t},l=function(e){var a=m(e.components);return n.createElement(p.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=m(t),u=i,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||o;return t?n.createElement(h,r(r({ref:a},l),{},{components:t})):n.createElement(h,r({ref:a},l))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var s={};for(var p in a)hasOwnProperty.call(a,p)&&(s[p]=a[p]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var m=2;m<o;m++)r[m]=t[m];return n.createElement.apply(null,r)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5877:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return l},default:function(){return c}});var n=t(7462),i=t(3366),o=(t(7294),t(3905)),r=["components"],s={},p="Command",m={unversionedId:"guides/command",id:"guides/command",isDocsHomePage:!1,title:"Command",description:"One of the most important parts in PIPEFORCE is the command. Easily spoken, the definition of a command is like this:",source:"@site/docs/guides/10_command.md",sourceDirName:"guides",slug:"/guides/command",permalink:"/docs/guides/command",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/10_command.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Microservice Messaging",permalink:"/docs/guides/microservices/messaging"},next:{title:"Pipeline",permalink:"/docs/guides/pipeline"}},l=[{value:"Command Name",id:"command-name",children:[],level:2},{value:"Command Parameters",id:"command-parameters",children:[],level:2},{value:"Executing a Command",id:"executing-a-command",children:[{value:"Execute as HTTP Request",id:"execute-as-http-request",children:[{value:"Execute as HTTP GET",id:"execute-as-http-get",children:[],level:4},{value:"Execute as HTTP POST",id:"execute-as-http-post",children:[],level:4}],level:3},{value:"Execute as CLI call",id:"execute-as-cli-call",children:[],level:3},{value:"Execute in a Pipeline",id:"execute-in-a-pipeline",children:[],level:3}],level:2},{value:"Input and Output Body",id:"input-and-output-body",children:[],level:2},{value:"Chaining of Commands (Pipelining)",id:"chaining-of-commands-pipelining",children:[{value:"Send a pipeline via HTTP",id:"send-a-pipeline-via-http",children:[],level:3},{value:"Send a pipeline in Workbench",id:"send-a-pipeline-in-workbench",children:[],level:3}],level:2}],d={toc:l};function c(e){var a=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command"},"Command"),(0,o.kt)("p",null,"One of the most important parts in PIPEFORCE is the ",(0,o.kt)("strong",{parentName:"p"},"command"),". Easily spoken, the definition of a command is like this:"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"What is a Command?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"}," A command is a server-side component, which can be called remotely. It takes an input, does a certain task, and finally produces an output."))),(0,o.kt)("p",null,"There are many different commands for different tasks. For example, commands can "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"upload and download files"),(0,o.kt)("li",{parentName:"ul"},"encrypt and decrypt data "),(0,o.kt)("li",{parentName:"ul"},"save data into a database or read from it "),(0,o.kt)("li",{parentName:"ul"},"connect to other systems, and read / write data there")),(0,o.kt)("p",null,"just to name a few. You can find a all built-in commands in the ",(0,o.kt)("a",{parentName:"p",href:"../api/commands"},"commands reference")," or directly try them out in the ",(0,o.kt)("a",{parentName:"p",href:"https://trial.pipeforce.org/#/commands"},"trial instance"),"."),(0,o.kt)("p",null,"The concept of PIPEFORCE commands is described by a combination of the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Command_pattern"},"command pattern")," and ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Function_as_a_service"},"function as a service")," approach. "),(0,o.kt)("h2",{id:"command-name"},"Command Name"),(0,o.kt)("p",null,"Each command has a unique name which is always written in lower case and follows the dot notation. Here is an example of such a command name:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"mail.send   \n")),(0,o.kt)("h2",{id:"command-parameters"},"Command Parameters"),(0,o.kt)("p",null,"Commands can have zero to many parameters. Whereas each parameter is a name-value pair. The parameters can be passed in different ways to the command, depending on the execution context you're working in. See execution examples below."),(0,o.kt)("h2",{id:"executing-a-command"},"Executing a Command"),(0,o.kt)("p",null,"Commands can be executed in three different ways, called ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("em",{parentName:"strong"},"execution contexts")),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As single requests via HTTP GET, POST or PUT"),(0,o.kt)("li",{parentName:"ul"},"Embedded as part of a ",(0,o.kt)("a",{parentName:"li",href:"../guides/pipeline"},"Pipeline")),(0,o.kt)("li",{parentName:"ul"},"As a command line command using the ",(0,o.kt)("a",{parentName:"li",href:"../guids/../api/cli"},"Command Line Interface (CLI)"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Even if many commands do have a similar resource-based semantic for HTTP GET, POST or PUT as REST do, they do not follow this approach 100%, since commands can be used also outside of the HTTP context. Therefore, the operation type of a command is often defined by its name. For example: ",(0,o.kt)("inlineCode",{parentName:"p"},"property.put")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"config.get")," to name just a few."))),(0,o.kt)("h3",{id:"execute-as-http-request"},"Execute as HTTP Request"),(0,o.kt)("p",null,"Every command can be excuted by a HTTP request, similar to REST endpoints. The url structure is always like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"https://HOST/api/v3/command/COMMAND?PARAM=VALUE\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"HOST")," by the host name of your instance."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"COMMAND")," by the name of the command."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"PARAM")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"VALUE")," by the optional parameter of your command.")))),(0,o.kt)("h4",{id:"execute-as-http-get"},"Execute as HTTP GET"),(0,o.kt)("p",null,"Here is an example to execute a command as HTTP GET request, and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," parameter to a ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," command using a HTTP GET parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"http://hub-trial.pipeforce.org/api/v3/command/log?message=HELLO\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Authentication is not considered here for simplicity reasons."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"http://hub-trial.pipeforce.org")," by the url of your target system.")))),(0,o.kt)("h4",{id:"execute-as-http-post"},"Execute as HTTP POST"),(0,o.kt)("p",null,"Here is an example to execute a command as HTTP POST request, and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," parameter to a ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," command using a HTTP POST data body in ",(0,o.kt)("inlineCode",{parentName:"p"},"curl"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Authorization: Bearer <YOUR_TOKEN>" \\\n  -X POST "https://hub-trial.pipeforce.org/api/v3/command/log" -d "message=HELLO"\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Authentication is done here by using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header. See ",(0,o.kt)("a",{parentName:"li",href:"../api/headers"},"Authorization")," for details."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"http://hub-trial.pipeforce.org")," by the url of your target system.")))),(0,o.kt)("h3",{id:"execute-as-cli-call"},"Execute as CLI call"),(0,o.kt)("p",null,"Here is an example to execute a command using the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/cli"},"CLI tool"),", and set the ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," parameter to the ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pi command log message=HELLO\n")),(0,o.kt)("h3",{id:"execute-in-a-pipeline"},"Execute in a Pipeline"),(0,o.kt)("p",null,"Commands can be executed as part of a ",(0,o.kt)("a",{parentName:"p",href:"../guides/pipeline"},"pipeline"),". Here is an example of such a pipeline with a single ",(0,o.kt)("inlineCode",{parentName:"p"},"log")," command and the ",(0,o.kt)("inlineCode",{parentName:"p"},"message")," parameter:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - log:\n      message: "HELLO"\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Its also possible to chain multiple commands in a pipeline. Learn more about this in the ",(0,o.kt)("a",{parentName:"li",href:"../guides/pipeline"},"Pipelines")," guide."),(0,o.kt)("li",{parentName:"ul"},"You can try out pipelines using the ",(0,o.kt)("a",{parentName:"li",href:"https://trial.pipeforce.org/#/propertyeditor"},"online workbench"),". ")))),(0,o.kt)("h2",{id:"input-and-output-body"},"Input and Output Body"),(0,o.kt)("p",null,"Beside ",(0,o.kt)("strong",{parentName:"p"},"parameters"),", a command can also consume an ",(0,o.kt)("strong",{parentName:"p"},"input body")," to read data from and write to an ",(0,o.kt)("strong",{parentName:"p"},"output body"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(2622).Z})),(0,o.kt)("p",null,"This is similar to an HTTP POST request which also can consume a huge amount of data in the request body and return with data in the response body."),(0,o.kt)("p",null,"Different to parameters, the input body is typically a more complex document and/or bigger data stream which must be modified in some way. Therfore, it is passed-in and written-out via the body by default. "),(0,o.kt)("p",null,"Here is an example to pass data via body to a ",(0,o.kt)("inlineCode",{parentName:"p"},"cache.put")," command using a HTTP POST request and the ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," tool:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Authorization: Bearer <YOUR_TOKEN>" \\\n  -X POST "https://hub-trial.pipeforce.org/api/v3/command/cache.put?key=someKey" \\\n  -d \'{"productId": 123, "quantity": 10}\'\n')),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Authentication is done here by using the ",(0,o.kt)("inlineCode",{parentName:"li"},"Authorization")," header. See ",(0,o.kt)("a",{parentName:"li",href:"/docs/api/headers#authorization"},"Authorization")," for details."),(0,o.kt)("li",{parentName:"ul"},"Replace ",(0,o.kt)("inlineCode",{parentName:"li"},"http://hub-trial.pipeforce.org")," by the url of your target system.")))),(0,o.kt)("h2",{id:"chaining-of-commands-pipelining"},"Chaining of Commands (Pipelining)"),(0,o.kt)("p",null,"One of the most powerful things of commands is that they can be chained, so multiple commands can be executed in serial one after another in a single request. In this case, the output of a previous command becomes automatically the input of the next command.\nThis avoids server-client-round-trips to increase performance, add a huge level of flexibility and reduce complexity in client code."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(7605).Z})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  Chainig of commands is also called a ",(0,o.kt)("strong",{parentName:"p"},"pipeline")," or a ",(0,o.kt)("strong",{parentName:"p"},"pipe"),". "))),(0,o.kt)("h3",{id:"send-a-pipeline-via-http"},"Send a pipeline via HTTP"),(0,o.kt)("p",null,"To chain commands, you have to send a POST request to the endpoint ",(0,o.kt)("inlineCode",{parentName:"p"},"https://HOST/api/v3/pipeline"),", and put a YAML document with the chained commands in the body. Lets assume you have a pipeline of commands like this, which simply logs the current data and time:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"pipeline:\n  - datetime\n  - log\n")),(0,o.kt)("p",null,"Then, you could send this YAML pipeline to the server for execution, like this example using ",(0,o.kt)("inlineCode",{parentName:"p"},"curl")," shows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Authorization: Bearer <YOUR_TOKEN>" \\\n  -X POST "https://hub-trial.pipeforce.org/api/v3/pipeline" \\\n  -d @- << EOF\n  pipeline:\n    - datetime\n    - log\n  EOF\n')),(0,o.kt)("h3",{id:"send-a-pipeline-in-workbench"},"Send a pipeline in Workbench"),(0,o.kt)("p",null,"In case you are working with the ",(0,o.kt)("a",{parentName:"p",href:"https://trial.pipeforce.org/#/propertyeditor"},"online workbench"),", creating and sending a pipeline could look like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(4240).Z})),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"  To learn more about ",(0,o.kt)("strong",{parentName:"p"},"Pipelines"),", have a look into the  ",(0,o.kt)("a",{parentName:"p",href:"../guides/pipeline"},"Pipelines Guide"),"."))))}c.isMDXComponent=!0},7605:function(e,a,t){a.Z=t.p+"assets/images/chaining-568b05ef098a8d5f351bff990521de20.png"},2622:function(e,a,t){a.Z=t.p+"assets/images/command-61dbc0c395c90f1dacb71dd2ab0146d6.png"},4240:function(e,a,t){a.Z=t.p+"assets/images/online-workbench-294a9905125e9ee671f3e0bd22bbd456.png"}}]);