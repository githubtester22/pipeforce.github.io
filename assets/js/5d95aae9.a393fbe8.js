"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4853],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),m=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},p=function(e){var n=m(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(t),u=i,h=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return t?a.createElement(h,r(r({ref:n},p),{},{components:t})):a.createElement(h,r({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var m=2;m<o;m++)r[m]=t[m];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6162:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=t(7462),i=(t(7294),t(3905));const o={},r="Jobs",l={unversionedId:"guides/jobs",id:"guides/jobs",isDocsHomePage:!1,title:"Jobs",description:"Sometimes it is necessary that you trigger the commands in your pipeline after a certain time interval. For this you can",source:"@site/docs/guides/97_jobs.md",sourceDirName:"guides",slug:"/guides/jobs",permalink:"/docs/guides/jobs",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/97_jobs.md",tags:[],version:"current",sidebarPosition:97,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Messaging",permalink:"/docs/guides/messaging"},next:{title:"Local Workspace",permalink:"/docs/guides/local-workspace"}},s=[{value:"Creating a Pipeline Job",id:"creating-a-pipeline-job",children:[],level:2},{value:"Schedules",id:"schedules",children:[{value:"Fixed schedules",id:"fixed-schedules",children:[],level:3},{value:"Dynamic schedules",id:"dynamic-schedules",children:[],level:3}],level:2},{value:"List registered Pipeline Jobs",id:"list-registered-pipeline-jobs",children:[],level:2}],m={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"jobs"},"Jobs"),(0,i.kt)("p",null,"Sometimes it is necessary that you trigger the commands in your pipeline after a certain time interval. For this you can\nuse the concept of pipeline jobs in PIPEFORCE."),(0,i.kt)("h2",{id:"creating-a-pipeline-job"},"Creating a Pipeline Job"),(0,i.kt)("p",null,"To register a pipeline job, you can use the ",(0,i.kt)("a",{parentName:"p",href:"../api/commands#job-v1"},"job")," command."),(0,i.kt)("p",null,"Let's assume you have a pipeline like the one below which sends an email with current date and time:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - mail.send:\n      to: "user@company.tld"\n      subject: "Reminder"\n      message: "Hello, it\'s #{@date.nowIso8601()}"\n')),(0,i.kt)("p",null,"In case you would like to send this email every 2 minutes, you simply need to add the job command at the very beginning:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n\n  - job:\n      schedule: "EVERY_2_MIN"\n\n  - mail.send:\n      to: "user@company.tld"\n      subject: "Reminder"\n      message: "Hello, it\'s #{@date.nowIso8601()}"\n')),(0,i.kt)("p",null,"As soon as you save this pipeline in the property store, a new job will be scheduled which runs every 2 minutes and\nexecutes any command below."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"The job command must be the very first command in the pipeline."),(0,i.kt)("li",{parentName:"ul"},"It's not allowed to have more than one such command per pipeline.")))),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Whenever you delete a pipeline with a ",(0,i.kt)("inlineCode",{parentName:"p"},"job")," command in it, the according job will be deleted. The same is\ntrue in case you remove the ",(0,i.kt)("inlineCode",{parentName:"p"},"job")," command from the pipeline. In case you rename the pipeline or change parameters of the\ncommand, the pipeline job will be replaced by a new one. So make sure to change such a pipeline only in development\nmode, never in production."))),(0,i.kt)("h2",{id:"schedules"},"Schedules"),(0,i.kt)("h3",{id:"fixed-schedules"},"Fixed schedules"),(0,i.kt)("p",null,"There are different fixed schedules available:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVERY_2_MIN")," - Runs every 2 minutes (Enterprise hosting only)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVERY_5_MIN")," - Runs every 5 minutes (Enterprise hosting only)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVERY_15_MIN")," - Runs every 15 minutes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVERY_30_MIN")," - Runs every 30 minutes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"EVERY_45_MIN")," - Runs every 45 minutes."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"HOURLY")," - Runs at every full hour initially starting at a random minute."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"DAILY")," - Runs every day at the very morning on a random time between 2AM and 4AM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"WEEKLY")," - Runs weekly at a random day and on a random time between 2AM and 4AM."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"MONTHLY")," - Runs monthly at a random day and on a random time between 2AM and 4AM.")),(0,i.kt)("p",null,"Example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'pipeline:\n  - job:\n     schedule: "HOURLY"\n\n  # The commands, the job must execute go here...\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Since too many jobs can slow down your system drastically, make sure your jobs are well-designed\nand run in a minimal amount of time. There are some limits for jobs:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Max. of 20 jobs is allowed to be registered per namespace."),(0,i.kt)("li",{parentName:"ul"},"The max. execution time per job is 2 min. All jobs running longer will be cancelled by the system if required.")))),(0,i.kt)("p",null,"In case you need to increase those limits, please ask the PIPEFORCE support (in case you're using the hosted version) or you can write a microservice for this."),(0,i.kt)("h3",{id:"dynamic-schedules"},"Dynamic schedules"),(0,i.kt)("p",null,"Dynamic triggers, also known as cron expressions, are not enabled by default."),(0,i.kt)("p",null,"Since they can slow down the system drastically and therefore need to be managed carefully, you\nhave to enable this kind of triggers separately by asking the PIPEFORCE support in case you're\nusing the hosted version of PIPEFORCE. "),(0,i.kt)("h2",{id:"list-registered-pipeline-jobs"},"List registered Pipeline Jobs"),(0,i.kt)("p",null,"In order to monitor the registered pipeline jobs, you can use the command ",(0,i.kt)("a",{parentName:"p",href:"../api/commands#joblist-v1"},"job.list"),". This will\nreturn a JSON with information about all currently registered pipeline jobs. Such a result can look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "pipelineKey": "/pipeforce/namespace/global/app/myapp/pipeline/somejob",\n        "cron": "4 */2 * * * ?",\n        "schedule": "EVERY_2_MIN", \n        "lastRun": "2022-05-07T06:26:04.022Z", \n        "lastDuration": "00:00:00.021",\n        "created": "2022-05-07T06:24:16.745Z",\n        "running": true\n    }\n]\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Only Pipeline Jobs are shown here and no system-internally jobs."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pipelineKey")," = The property path of the pipeline which will be executed."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"cron")," = The cron expression automatically calculated by the system."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"schedule")," = The input schedule."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lastRun")," = The time when this job was last executed in ISO-8061 format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"lastDuration")," = The time, the last job execution took in the format ",(0,i.kt)("inlineCode",{parentName:"li"},"HH:mm:ss.SSS"),"."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"created")," = The time when this job was created in ISO-8061 format."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"running")," = In case the job is currently actively running. If false, the job is registered, but paused.")),(0,i.kt)("p",null,"In case you would like to get information about a single job, you can use the ",(0,i.kt)("a",{parentName:"p",href:"../api/commands#jobstatus-v1"},"job.status")," command instead."))}p.isMDXComponent=!0}}]);