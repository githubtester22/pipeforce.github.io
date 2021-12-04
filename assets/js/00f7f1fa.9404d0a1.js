"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[8496],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return d}});var i=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,i,n=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=i.createContext({}),s=function(e){var t=i.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return i.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(a),d=n,h=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?i.createElement(h,o(o({ref:t},c),{},{components:a})):i.createElement(h,o({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<r;s++)o[s]=a[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7042:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var i=a(7462),n=a(3366),r=(a(7294),a(3905)),o=["components"],p={},l="Tutorial 5: Create a Pipeline",s={unversionedId:"tutorials/create-pipeline",id:"tutorials/create-pipeline",isDocsHomePage:!1,title:"Tutorial 5: Create a Pipeline",description:"Estimated time: 20 min.",source:"@site/docs/tutorials/50_create-pipeline.md",sourceDirName:"tutorials",slug:"/tutorials/create-pipeline",permalink:"/docs/tutorials/create-pipeline",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/tutorials/50_create-pipeline.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Tutorial 4: Create a List",permalink:"/docs/tutorials/create-list"},next:{title:"Tutorial 6: Data Mapping",permalink:"/docs/tutorials/create-data-mapping"}},c=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Intro",id:"intro",children:[],level:2},{value:"1 - Execute an ad-hoc pipeline",id:"1---execute-an-ad-hoc-pipeline",children:[],level:2},{value:"2 - Persist a pipeline",id:"2---persist-a-pipeline",children:[],level:2},{value:"3 - Execute a persisted pipeline",id:"3---execute-a-persisted-pipeline",children:[],level:2}],m={toc:c};function u(e){var t=e.components,p=(0,n.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},m,p,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tutorial-5-create-a-pipeline"},"Tutorial 5: Create a Pipeline"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Estimated time:")," 20 min."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PIPEFORCE Enterprise 7.0 or higher"),(0,r.kt)("li",{parentName:"ul"},"You have a valid PIPEFORCE Developer account"),(0,r.kt)("li",{parentName:"ul"},"You have executed tutorial ",(0,r.kt)("a",{parentName:"li",href:"../tutorials/beginner/create-app"},"Tutorial: Create a new app"))),(0,r.kt)("h2",{id:"intro"},"Intro"),(0,r.kt)("p",null,"A pipeline in PIPEFORCE is an easy to learn ",(0,r.kt)("strong",{parentName:"p"},"low code script")," which can do many different things for you:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Data conversion, validation and mapping"),(0,r.kt)("li",{parentName:"ul"},"Connecting with external services"),(0,r.kt)("li",{parentName:"ul"},"Business logic"),(0,r.kt)("li",{parentName:"ul"},"Send and receive messages"),(0,r.kt)("li",{parentName:"ul"},"Robotic Process Automation (RPA)"),(0,r.kt)("li",{parentName:"ul"},"Regularly execute jobs"),(0,r.kt)("li",{parentName:"ul"},"Trigger workflows"),(0,r.kt)("li",{parentName:"ul"},"And many more\u2026")),(0,r.kt)("p",null,"It\u2019s named \u201clow code script\u201d, because you are not required to do real coding inside such a pipeline script. You will mainly configure commands with parameters and combine them in a list. All commands in the list will then be executed one after another."),(0,r.kt)("p",null,"Because of its simplicity and power at the same time, the pipeline is one of the most important part in PIPEFORCE. In this tutorial, you will learn how to create and execute such a pipeline script. To learn more about pipelines and commands in detail, see this section of the documentation: ",(0,r.kt)("a",{parentName:"p",href:"..//guides/Pipelines-&-Commands"},"Pipelines & Commands")),(0,r.kt)("h2",{id:"1---execute-an-ad-hoc-pipeline"},"1 - Execute an ad-hoc pipeline"),(0,r.kt)("p",null,"You can have these two main types of pipelines:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Ad-hoc pipeline")," = Doesn't need to be stored. The script is sent to the server, executed and then \u201cforgotten\u201d. Ad-hoc pipelines are good for example to execute an ad-hoc query, send ad-hoc messages or to be called by client implementations."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Persisted pipeline")," = A pipeline script which is stored at server side in the property store under a unique key. The pipeline can be executed later by calling its unique key. This kind of pipeline is good to persist your execution logic, to create automation apps and to organize them into multiple pipelines.")),(0,r.kt)("p",null,"In this first part of the tutorial we gonna execute an ",(0,r.kt)("strong",{parentName:"p"},"ad-hoc pipeline"),". To do so, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Login to the portal ",(0,r.kt)("a",{parentName:"p",href:"https://NAMESPACE.pipeforce.net"},"https://NAMESPACE.pipeforce.net"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Navigate to LOW CODE \u2192 Workbench")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now you should see the ad-hoc pipeline editor automatically opened for you. It looks similar to this:  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(8082).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Here you can scribble any ad-hoc pipeline and execute it by pushing the RUN button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"There is already a hello world demo pipeline prepared for you here.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Do not change this pipeline and execute it by pushing the RUN button. After this, you should see an output like this at the bottom:  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(4730).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Congrats, you have executed your first pipeline!")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, lets create a more sophisticated pipeline by sending a simple email. To do so, start typing inside the editor after the dash ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," and you should see command suggestions like this:  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9740).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lets select the command ",(0,r.kt)("inlineCode",{parentName:"p"},"mail.send")," from the list, finish the line with a colon ",(0,r.kt)("inlineCode",{parentName:"p"},":"),", go to next line and indent with two tabs ",(0,r.kt)("inlineCode",{parentName:"p"},"[->|]"),". To see the list of available parameters for the command press ",(0,r.kt)("inlineCode",{parentName:"p"},"[CTRL] + [SPACE]")," and you should again see the auto-completion list like this:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(1834).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Lets select the parameter ",(0,r.kt)("inlineCode",{parentName:"p"},"to")," from the list and set your email address here and a ",(0,r.kt)("inlineCode",{parentName:"p"},"subject")," as shown below:"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(2808).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In your pipeline you have now two commands: The first one simply logs a message, the second one sends an email. Note that each command")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"is listed below ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline:"),",")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"is indented with one tab,")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"starts with a dash ",(0,r.kt)("inlineCode",{parentName:"p"},"-")," followed by the command name.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"is finished with a colon ",(0,r.kt)("inlineCode",{parentName:"p"},":")," finally.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"can have optional parameters. In this case, you can specify them below the command after an additional indent using a tab.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"can exchange data with other commands. If you want to learn more about this, have a look here: ",(0,r.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/785088596"},"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/785088596"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now lets execute this pipeline by pressing the RUN button.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"After a while you should receive the email in your inbox.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Since this is an ad-hoc pipeline, in case you leave this view, your pipeline is gone. Therefore, you should persist (store) it if you later need it. At first copy this pipeline into your clipboard, then go on to the next part in this tutorial to learn how to persist it."))),(0,r.kt)("h2",{id:"2---persist-a-pipeline"},"2 - Persist a pipeline"),(0,r.kt)("p",null,"Persisting a pipeline means \u201cstoring\u201d a pipeline script at server side in the property store (",(0,r.kt)("a",{parentName:"p",href:"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/988807265"},"https://logabit.atlassian.net/wiki/spaces/DEVEX/pages/988807265")," ) under a unique key. From there you can then load and execute it later by this unique key. Follow these steps to create such a persisted pipeline:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select LOW CODE \u2192 Workbench.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"In the property tree select the node of the app you\u2019ve created in the last tutorial.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click the plus icon at the top of the tree.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"The new property view opens:"),(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"As a property key use the value ",(0,r.kt)("inlineCode",{parentName:"li"},"global/app/MY_APP/pipeline/mypipeline"),". Replace ",(0,r.kt)("inlineCode",{parentName:"li"},"MY_APP")," with the name of the app you created before, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"myapp24"),". ",(0,r.kt)("strong",{parentName:"li"},"Do use only lower case letters and don\u2019t use special characters or spaces!")),(0,r.kt)("li",{parentName:"ol"},"As mime type select ",(0,r.kt)("inlineCode",{parentName:"li"},"application/yaml; type=pipeline"),". ",(0,r.kt)("strong",{parentName:"li"},"Do not select")," ",(0,r.kt)("inlineCode",{parentName:"li"},"application/json; type=pipeline"),"!"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click SAVE.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"You should now see again the hello world pipeline in the editor.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the content of this editor by pasting your clipboard content here (Ctrl + V).")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Click again SAVE.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Congrats: Now you have your first persisted pipeline. This pipeline has the unique key ",(0,r.kt)("inlineCode",{parentName:"p"},"global/app/MY_APP/pipeline/mypipeline"),"."))),(0,r.kt)("h2",{id:"3---execute-a-persisted-pipeline"},"3 - Execute a persisted pipeline"),(0,r.kt)("p",null,"After you have persisted a pipeline you can execute it by calling it using its unique property key. There are many different possibilities in PIPEFORCE to do so. In this step, you will learn how to do it using the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline.start"),":"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select LOW CODE \u2192 Commands.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Search for the command ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline.start")," and click it.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Into the parameter field ",(0,r.kt)("inlineCode",{parentName:"p"},"key")," copy the key of the pipeline you have created before, for example like this:  "),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{src:a(9373).Z}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Execute the command by clicking ",(0,r.kt)("strong",{parentName:"p"},"SUBMIT"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"As a result you should see the \u201cHello World\u201d output and after a while you should have received the email in your inbox.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Congrats, you have executed a persisted pipeline by its property key!"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The online documentation of all available commands for your pipelines can be found at ",(0,r.kt)("a",{parentName:"p",href:"https://NAMESPACE.pipeforce.org/#/commands"},"https://NAMESPACE.pipeforce.org/#/commands")," (replace NAMESPACE by your real namespace name) or you use the CLI:",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"pi help command")))))}u.isMDXComponent=!0},8082:function(e,t,a){t.Z=a.p+"assets/images/grafik-20210721-060243-71d5e5117608d856e2bdc323ad33209a.png"},4730:function(e,t,a){t.Z=a.p+"assets/images/grafik-20210721-060457-d782ddfd6a721f7b4c657dc4093ff24f.png"},9740:function(e,t,a){t.Z=a.p+"assets/images/grafik-20210721-060810-aeaf18e67ca9e67cd8f56c6dbcadc19c.png"},1834:function(e,t,a){t.Z=a.p+"assets/images/grafik-20210721-061124-ea8183fd313a3481cf55341caff0ad31.png"},2808:function(e,t,a){t.Z=a.p+"assets/images/grafik-20210721-061508-15a1736018920de13342b0dbae26863d.png"},9373:function(e,t,a){t.Z=a.p+"assets/images/grafik-20210721-070826-7ff97d28785bef4d83929794c5930256.png"}}]);