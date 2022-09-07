"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[490],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,o(o({ref:t},c),{},{components:a})):n.createElement(h,o({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5385:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>p,toc:()=>l});var n=a(7462),r=(a(7294),a(3905));const i={},o="App Installation",p={unversionedId:"guides/apps/app_deployment",id:"guides/apps/app_deployment",isDocsHomePage:!1,title:"App Installation",description:"From GitHub",source:"@site/docs/guides/apps/030_app_deployment.md",sourceDirName:"guides/apps",slug:"/guides/apps/app_deployment",permalink:"/docs/guides/apps/app_deployment",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/apps/030_app_deployment.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"App Testing",permalink:"/docs/guides/apps/app_testing"},next:{title:"Basics",permalink:"/docs/microservices"}},l=[{value:"From GitHub",id:"from-github",children:[{value:"Public repo",id:"public-repo",children:[],level:3},{value:"Private repo",id:"private-repo",children:[{value:"Create a GitHub personal access token",id:"create-a-github-personal-access-token",children:[],level:4},{value:"Register access token as credentials",id:"register-access-token-as-credentials",children:[],level:4},{value:"Refer to these credentials in the command",id:"refer-to-these-credentials-in-the-command",children:[],level:4}],level:3}],level:2}],s={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"app-installation"},"App Installation"),(0,r.kt)("h2",{id:"from-github"},"From GitHub"),(0,r.kt)("p",null,"You can install any PIPEFORCE app directly from a GitHub repository."),(0,r.kt)("p",null,"Make sure the repository you would like to deploy from has a folder structure like this:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"src/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"global/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"app/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"yourapp/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"The contents of your app start in this level."))))))))))),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Make sure you install only from trusted sources since installing apps from untrusted sources could harm your system!"))),(0,r.kt)("h3",{id:"public-repo"},"Public repo"),(0,r.kt)("p",null,"Let's assume you have a public GitHub repository with a name like ",(0,r.kt)("inlineCode",{parentName:"p"},"acme/my-pipeforce-app"),", then you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.install")," command to install from this repository like this example shows using a pipeline:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - app.install:\n      github: "acme/my-pipeforce-app"\n')),(0,r.kt)("p",null,"Or you can use the CLI:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"pi command app.install github=acme/my-pipeforce-app\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Since GitHub allows only a few requests for non-authenticated API calls, you can install\nonly very small apps using this public repo approach. If you have to install apps with\nmany resources, use the private repo approach since this has higher limits for API calls."))),(0,r.kt)("h3",{id:"private-repo"},"Private repo"),(0,r.kt)("p",null,"In case you would like to install from a private repo, you have to do additional steps:"),(0,r.kt)("h4",{id:"create-a-github-personal-access-token"},"Create a GitHub personal access token"),(0,r.kt)("p",null,"At first you need to create a personal access token in GitHub which allows to read your repo. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token"},"GitHub Docs")," how to do so."),(0,r.kt)("h4",{id:"register-access-token-as-credentials"},"Register access token as credentials"),(0,r.kt)("p",null,"Copy the GitHub access token, open the PIPEFORCE portal and go to ",(0,r.kt)("inlineCode",{parentName:"p"},"LOW CODE -> Credentials")," and create a new Credentials of type ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," with a name of your choice, for example ",(0,r.kt)("inlineCode",{parentName:"p"},"github-token")," and as value use this format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Authorization: token COPY_YOUR_TOKEN_HERE\n")),(0,r.kt)("p",null,"Save your new Credentials. "),(0,r.kt)("h4",{id:"refer-to-these-credentials-in-the-command"},"Refer to these credentials in the command"),(0,r.kt)("p",null,"Then you can use it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"app.install")," command like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - app.install:\n      github: "acme/my-pipeforce-app"\n      credentials: "github-token"\n')))}c.isMDXComponent=!0}}]);