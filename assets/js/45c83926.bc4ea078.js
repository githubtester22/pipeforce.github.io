"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4668],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>d});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(a),d=r,k=u["".concat(l,".").concat(d)]||u[d]||c[d]||o;return a?n.createElement(k,i(i({ref:t},m),{},{components:a})):n.createElement(k,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},8989:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const o={},i="Tutorial 9: Send Teams Message",s={unversionedId:"tutorials/send-teams-message",id:"tutorials/send-teams-message",isDocsHomePage:!1,title:"Tutorial 9: Send Teams Message",description:"Tutorial 9 Estimated time: 10 min.",source:"@site/docs/tutorials/90_send-teams-message.md",sourceDirName:"tutorials",slug:"/tutorials/send-teams-message",permalink:"/docs/tutorials/send-teams-message",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/tutorials/90_send-teams-message.md",tags:[],version:"current",sidebarPosition:90,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial 8: Send an Email",permalink:"/docs/tutorials/send-email"},next:{title:"Tutorial 10: Create a Webhook",permalink:"/docs/tutorials/create-webhook"}},l=[{value:"Tutorial 9 - Prerequisites",id:"tutorial-9---prerequisites",children:[],level:2},{value:"Teams Messaging - Intro",id:"teams-messaging---intro",children:[],level:2},{value:"1 - Create a webhook in Microsoft Teams",id:"1---create-a-webhook-in-microsoft-teams",children:[],level:2},{value:"2 - Send a message from a pipeline",id:"2---send-a-message-from-a-pipeline",children:[],level:2}],p={toc:l};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-9-send-teams-message"},"Tutorial 9: Send Teams Message"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Tutorial 9 Estimated time:")," 10 min."),(0,r.kt)("h2",{id:"tutorial-9---prerequisites"},"Tutorial 9 - Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher"),(0,r.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account"),(0,r.kt)("li",{parentName:"ul"},"You have completed tutorial: ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/create-app"},"Tutorial: Create a new app")),(0,r.kt)("li",{parentName:"ul"},"You have completed tutorial: ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/create-pipeline"},"Tutorial: Create and execute a pipeline")),(0,r.kt)("li",{parentName:"ul"},"You have an Office 365 / Teams account")),(0,r.kt)("h2",{id:"teams-messaging---intro"},"Teams Messaging - Intro"),(0,r.kt)("p",null,"Sending messages from PIPEFORCE to external systems is very easy when there is an API or webhook available. This tutorial will demonstrate that by sending a message to Office 365 / Teams."),(0,r.kt)("h2",{id:"1---create-a-webhook-in-microsoft-teams"},"1 - Create a webhook in Microsoft Teams"),(0,r.kt)("p",null,"In the first step, you need to create a webhook in Teams, so we can send data to it. To do so, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to your Office 365 account: ",(0,r.kt)("a",{parentName:"p",href:"https://office.com"},"https://office.com"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the Teams app")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to Teams \u2192 Your Teams \u2192 Select the channel you want to send messages to \u2192 Connectors:  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(3853).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the upcoming list click ",(0,r.kt)("inlineCode",{parentName:"p"},"Configure")," of ",(0,r.kt)("strong",{parentName:"p"},"Incoming Webhook"),":  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(6303).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Give the webhook a meaningful name and then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create"),":  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2681).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy the generated webhook url into your clipboard, then click ",(0,r.kt)("inlineCode",{parentName:"p"},"Done"),":  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1394).Z})))),(0,r.kt)("h2",{id:"2---send-a-message-from-a-pipeline"},"2 - Send a message from a pipeline"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the portal ",(0,r.kt)("a",{parentName:"p",href:"https://NAMESPACE.pipeforce.net"},"https://NAMESPACE.pipeforce.net"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The ad-hoc pipeline editor is shown")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy and paste this content into the editor, and overwrite any existing data there by this:  "),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n   - http.post:\n      url: "https://yourname.webhook.office.com/..."\n      body: |\n        {\n          "text": "This message was sent with PIPEFORCE."\n        }\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," param by the webhook url you have copied to clipboard before.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As you can see, we set the ",(0,r.kt)("inlineCode",{parentName:"p"},"url")," and the ",(0,r.kt)("inlineCode",{parentName:"p"},"body")," for the HTTP message, which will be used by the ",(0,r.kt)("inlineCode",{parentName:"p"},"http.post")," command, in order to send it to the Teams webhook using the given url. Note the pipe ",(0,r.kt)("inlineCode",{parentName:"p"},"|")," character of parameter body. This is specific to YAML and allows to define a multi-line value without additional \u201cline encodings\u201d or \u201cescapes\u201d. We can write a JSON string straight here.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"RUN"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Done"),". After a few seconds, you should receive a new message in the Teams channel:  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8305).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you want, you can persist this pipeline in an app to keep it for later use."))),(0,r.kt)("p",null,"References:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/outlook/actionable-messages/send-via-connectors"},"https://docs.microsoft.com/en-us/outlook/actionable-messages/send-via-connectors")))}m.isMDXComponent=!0},3853:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafik-20210727-092443-839b3556cd12be301b9e0569552fcc32.png"},6303:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafik-20210727-092742-e058da9e2b1b47cb18a2b2f135550f44.png"},2681:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafik-20210727-092945-e5d8c0724078563ab084e3495e31654b.png"},1394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafik-20210727-093159-55072069562b457c7301eeb37abb2cec.png"},8305:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/grafik-20210727-123350-cdb45b005785c8ff5c41d5d9676b4878.png"}}]);