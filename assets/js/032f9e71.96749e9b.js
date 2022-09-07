"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2222],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),A=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=A(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=A(n),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var A=2;A<o;A++)i[A]=n[A];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1589:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={},i="Forms fields",l={unversionedId:"guides/forms/forms-fields",id:"guides/forms/forms-fields",isDocsHomePage:!1,title:"Forms fields",description:"Form fields for trigger forms",source:"@site/docs/guides/forms/070_forms-fields.md",sourceDirName:"guides/forms",slug:"/guides/forms/forms-fields",permalink:"/docs/guides/forms/forms-fields",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/forms/070_forms-fields.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Buttons",permalink:"/docs/guides/forms/forms-buttons"},next:{title:"Reporting",permalink:"/docs/guides/reporting"}},s=[{value:"Form fields for trigger forms",id:"form-fields-for-trigger-forms",children:[],level:2},{value:"Form fields for task forms",id:"form-fields-for-task-forms",children:[],level:2},{value:"Field Attributes",id:"field-attributes",children:[],level:2},{value:"Static drop down values for form fields",id:"static-drop-down-values-for-form-fields",children:[{value:"Fix list of entries",id:"fix-list-of-entries",children:[],level:3},{value:"Group of users in IAM",id:"group-of-users-in-iam",children:[],level:3}],level:2},{value:"Dynamic drop down values for form fields",id:"dynamic-drop-down-values-for-form-fields",children:[],level:2},{value:"Dynamic calculation of values in a form",id:"dynamic-calculation-of-values-in-a-form",children:[],level:2},{value:"Add attachments in a task form",id:"add-attachments-in-a-task-form",children:[],level:2},{value:"Show attachments in a task form",id:"show-attachments-in-a-task-form",children:[],level:2}],A={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},A,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"forms-fields"},"Forms fields"),(0,a.kt)("h2",{id:"form-fields-for-trigger-forms"},"Form fields for trigger forms"),(0,a.kt)("p",null,"Form fields of a Trigger-Form are determined by the respective schema defined for your app. The type inside a JSON schema defines the data format of a field. Furthermore, based on its type, form fields are rendered automatically in order to fit the defined format. The supported format types are listed in the section ",(0,a.kt)("a",{parentName:"p",href:"../schema-and-objects"},"Schema - Types")," ."),(0,a.kt)("p",null,"To create a trigger form, you have to create a schema, and afterwards, create the form as a new property. How to do this is described here: ",(0,a.kt)("a",{parentName:"p",href:"../../tutorials/create-form"},"Tutorial: Create a new form")," .In the form, you can just refer to your schema. All fields and types (including file upload functionality) will be taken over from the schema. See example of the form description below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "person",\n  "description": "",\n  "schema": "property.list?filter=global/app/MY_App/object/person/v1/schema",\n  "output": "global/app/MY_APP/object/person/v1/instance/%23%7Bvar.property.uuid%7D"\n}\n')),(0,a.kt)("h2",{id:"form-fields-for-task-forms"},"Form fields for task forms"),(0,a.kt)("p",null,"When working with task forms via the Online-Workflow-Modeler, you can select the form type directly from a dropdown list. In this list, there are same options for schema."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(8829).Z})),(0,a.kt)("h2",{id:"field-attributes"},"Field Attributes"),(0,a.kt)("p",null,'For defining title of the field, we use the "title" attribute. For defining the message directly in form field like "Betrag in EUR", we use the ',(0,a.kt)("inlineCode",{parentName:"p"},"placeholder")," attribute:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In schema:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  "Field": {\n    "title": "Fr\xfchst\xfcck"\n    "type": "number"\n    "placeholder": "Betrag in EUR"\n  }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(9855).Z})),(0,a.kt)("p",null,'For defining the message as tooltip like "Alle Informationen zur Reise erfasst", we use the ',(0,a.kt)("inlineCode",{parentName:"p"},"description")," attribute:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In schema:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'  "Field": {\n    "title": "Alle Informationen zur Reise erfasst",\n    "description": "Alle Informationen zur Reise erfasst",\n    "type": "boolean"\n  }\n')),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(6096).Z})),(0,a.kt)("h2",{id:"static-drop-down-values-for-form-fields"},"Static drop down values for form fields"),(0,a.kt)("p",null,"In case you want to show a dropdown list in a field of a trigger form, you have the following options:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Refer to a fix list with any values"),(0,a.kt)("li",{parentName:"ol"},"Refer to a group of users from IAM")),(0,a.kt)("h3",{id:"fix-list-of-entries"},"Fix list of entries"),(0,a.kt)("p",null,'To refer to a fix list of entries, you have to define "enum" in schema. Below you find an easy example for this.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'"account": {\n      "title": "Kostenstelle *",\n      "type": "string",\n      "enum": [\n        "1000",\n        "2000",\n        "3000",\n        "4000",\n        "5000"\n      ]\n    }\n')),(0,a.kt)("p",null,"If you refer to this field \u201caccount\u201d in the form section, you will see a dropdown list of the values entered (1000, 2000, 3000, 4000, 5000)."),(0,a.kt)("h3",{id:"group-of-users-in-iam"},"Group of users in IAM"),(0,a.kt)("p",null,"To refer to a group of user in IAM, you have to adapt your schema and your form definition."),(0,a.kt)("p",null,"In your schema, you have to define the respective filed as indicated below."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In schema:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'"user": {\n      "type": "string",\n      "title": "User",\n      "enum": []\n    }\n')),(0,a.kt)("p",null,"Afterwards, you have to enhance your form definition by an easy pipeline definition as specification for the field, which gives you some values back from IAM. In the example below, all user from group \u201cEmployee (Standard)\u201d will be shown in the dropdown list."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In form:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field": "user",\n  "visibleColumns": [\n    "username"\n  ],\n  "values": "pipeline:iam.group.members?name=Employee (Standard)"\n}\n')),(0,a.kt)("h2",{id:"dynamic-drop-down-values-for-form-fields"},"Dynamic drop down values for form fields"),(0,a.kt)("p",null,"In case you want to filter values in a dropdown list based on specific entries in the form, you have to enhance your schema and your form definition."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example")),(0,a.kt)("p",null,"When a specific value for a budget is exceeded, the list of potential reviewer is directly filtered to members of a specific group in IAM."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null}),(0,a.kt)("th",{parentName:"tr",align:null}))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Can sign > 10k")),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("strong",{parentName:"td"},"Can sign <10k"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"All members of group \u201cC-Level\u201d"),(0,a.kt)("td",{parentName:"tr",align:null},"All members of group \u201cDepartment Head\u201d")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In schema:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'"user": {\n  "type": "string",\n  "title": "User",\n  "enum": []\n},\n"canSign": {\n  "type": "number",\n  "title": "Can sign"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In form definition:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "f1",\n  "description": "",\n  "schema": "property.list?filter=global/app/a1/object/f1/v1/schema",\n  "output": "global/app/a1/object/f1/v1/instance/%23%7Bvar.property.uuid%7D",\n  "script": {\n    "onblur": "var response; if (form.canSign > 10000) { response = await pi.pipeline(\'iam.group.members?name=C-Level\') } else { response = await pi.pipeline(\'iam.group.members?name=Department Head\') }; if (response) { schema.properties.user.enum = response }"\n  },\n  "layout": {\n    "orientation": "vertical",\n    "items": [\n      {\n        "field": "user",\n        "visibleColumns": [\n          "username"\n        ]\n      },\n      {\n        "field": "canSign"\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h2",{id:"dynamic-calculation-of-values-in-a-form"},"Dynamic calculation of values in a form"),(0,a.kt)("p",null,"You have the option to show calculated values in a trigger form. To do so, you have to enhance the schema and the form definition. Below, you will find an example how to show a sum of two entries (value1 and value 2) in a third field."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In schema:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'"value1": {\n  "type": "number",\n  "title": "value1"\n},\n"value2": {\n  "type": "number",\n  "title": "value2"\n},\n"value3": {\n  "type": "number",\n  "title": "value3"\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In form definition:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "f1",\n  "description": "",\n  "schema": "property.list?filter=global/app/a1/object/f1/v1/schema",\n  "output": "global/app/a1/object/f1/v1/instance/%23%7Bvar.property.uuid%7D",\n  "script": {\n    "onblur": "form.value3 = form.value1 + form.value2"\n  },\n  "layout": {\n    "orientation": "vertical",\n    "items": [\n      {\n        "field": "value1"\n      },\n      {\n        "field": "value2"\n      },\n      {\n        "field": "value3",\n        "readonly": true\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h2",{id:"add-attachments-in-a-task-form"},"Add attachments in a task form"),(0,a.kt)("p",null,"You have the option to upload a file with a task form. To do so, you have to enhance your schema and your form definition. Below, you will find an example."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In schema:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'"myFile": {\n  "type": "object",\n  "properties": {\n    "filename": \n      {"type": "string"},\n    "contentLength": \n      {"type": "number"},\n    "contentType": \n      {"type": "string"},\n    "contentEncoding": \n      {"type": "string"},\n    "content": \n      {"type": "string"}\n  }  \n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"In form:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'"layout": {    \n        "orientation": "vertical",\n        "items": \n       [\n          {\n            "field": "myFile",\n            "height": "628",\n            "render": "pdfviewer",\n            "validation": [\n              {\n                "type": "js",\n                "rule": "!!val",\n                "message": "Field is required"\n        }\n      ]\n    }\n  ]\n}\n')),(0,a.kt)("p",null,"Tip: Be aware, that you have to configure a layout for your form in order to show the file picker as expected."),(0,a.kt)("h2",{id:"show-attachments-in-a-task-form"},"Show attachments in a task form"),(0,a.kt)("p",null,"This functionality will be available with PIPEFORCE Version 8.0. Documentation will be added after release."))}u.isMDXComponent=!0},9855:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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uLee4fzxxx8rJCREa9eu1e9+9zt17dpVkydP1rRp02o9jj3E9+nTx6k9KChIQUFBTm2rVq2SyWRSZmamiouL5ePjU+vxAQAAXA1rdO+jLmc7PTw89M477ygzM1OHDh3SkCFD9Mtf/lILFiyodQ3t27eXJH333Xf3vXfgwIH697//rbNnzzrtKAEAAGAkBN37iIqKqhIeLRZLjfu5dOmShg8frr/97W+Sbu7Hu3z5ckVFRTnNNJtMJqdZYHsN2dnZTgdS3F7DT37yE0nS7t27ndpnz57t2EHCbuzYsXriiSe0dOlSrVu3jh0XAACAIRF072P06NE6evSoli5dqsOHD2vZsmVauHBhjftp27atCgsL9etf/1rr169XRkaGEhMTdeLECfXs2dNxX69evVRcXKyNGzfKbDY7aqioqNCsWbN06NAhbdiwwbErhF2PHj30/PPPa/ny5dq6datOnz6tP/7xj3r//ff12GOP3bGmKVOmKC4uTtOmTeO0NAAAYDhNZo3ugxozZozWrl2rhIQESVJkZKQmTpyo5cuX17ivHTt26PXXX9drr70mm82myMhITZ8+3WnpwsiRI/XEE08oLi5O48aN02effaaIiAi98cYb+uSTTxxblyUkJGjevHlO/a9Zs0bTp0/Xiy++qJKSEgUFBWnRokV6880371rTX//6V/Xq1Utjx47VwYMH1aJFixp/LgAA4BqKiorqrW8/P79667u+uFXe/jt5I7OvR3WxsnTp0iVVVFQoMDCw1n3duHFDFotF7dq1u+s9ubm5atOmjby8vBxt169fV0FBgUJDQ++5bvfGjRvKy8tTaGhorWsFAAAPj/oMulLdhd2GynsEXQAAAIMg6DpjjS4AAAAMiaALAAAAQyLoAgAAwJAIugAAADAkgi4AAEATFB8fr/j4+MYuo14RdAEAAJqYWwOukcMuQReSJJvN1tglAACABnCnYGvUsNskTkbLz8/XokWLqrR7e3urTZs2CgsL0/Dhw9W6detGqK7xpaena+nSperataumTZtW5/3f7fu/XUBAgH7zm99Iknbv3q3t27erb9++iouLu+P9JSUlmj17tiRp8eLF8vb2liR9/fXX2rRpU5X7fXx8FBgYqM6dO+upp55yOowDAAAYT5MIuhUVFbp69arc3NzUsWNHR3tBQYHS09OVnp6uvXv3atasWerUqVOt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"},6096:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/form-field-tooltip-b66e40d127fafdc26323f92a9c0d00d7.png"},8829:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/form-fields.det-251e4ceba8614d10cdb01ea067401b8c.png"}}]);