"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6649],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(t),d=a,c=m["".concat(s,".").concat(d)]||m[d]||f[d]||o;return t?r.createElement(c,i(i({ref:n},u),{},{components:t})):r.createElement(c,i({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4435:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return m}});var r=t(7462),a=t(3366),o=(t(7294),t(3905)),i=["components"],l={},s="Form Fields v1",p={unversionedId:"guides/form-fields_v1",id:"guides/form-fields_v1",isDocsHomePage:!1,title:"Form Fields v1",description:"Form fields for trigger forms",source:"@site/docs/guides/form-fields_v1.md",sourceDirName:"guides",slug:"/guides/form-fields_v1",permalink:"/docs/guides/form-fields_v1",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/form-fields_v1.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Forms fields",permalink:"/docs/guides/form-fields"},next:{title:"Look & Feel",permalink:"/docs/guides/form-look"}},u=[{value:"Form fields for trigger forms",id:"form-fields-for-trigger-forms",children:[],level:2},{value:"Form fields for task forms",id:"form-fields-for-task-forms",children:[],level:2},{value:"Static drop down values for form fields",id:"static-drop-down-values-for-form-fields",children:[{value:"Fix list of entries",id:"fix-list-of-entries",children:[],level:3},{value:"Group of users in IAM",id:"group-of-users-in-iam",children:[],level:3}],level:2},{value:"Dynamic drop down values for form fields",id:"dynamic-drop-down-values-for-form-fields",children:[],level:2},{value:"Dynamic calculation of values in a form",id:"dynamic-calculation-of-values-in-a-form",children:[],level:2},{value:"Add attachments in a task form",id:"add-attachments-in-a-task-form",children:[],level:2},{value:"Show attachments in a task form",id:"show-attachments-in-a-task-form",children:[],level:2}],f={toc:u};function m(e){var n=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},f,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"form-fields-v1"},"Form Fields v1"),(0,o.kt)("h2",{id:"form-fields-for-trigger-forms"},"Form fields for trigger forms"),(0,o.kt)("p",null,"Form fields of a Trigger-Forms are determined by the respective schema defined for your app. The type inside a JSON schema defines the data format of a field. Furthermore based on this type, form fields are rendered automatically in order to fit the defined format. The supported format types are listed in the section ",(0,o.kt)("a",{parentName:"p",href:"../guides/schema-types"},"Schema - Types")," ."),(0,o.kt)("p",null,"To create a trigger form you have to create a schema and afterwards create the form as a new property. How to do this is described here: ",(0,o.kt)("a",{parentName:"p",href:"../tutorials/beginner/create-form"},"Tutorial: Create a new form")," . In the form you can just refer to your schema. All fields and types (including file upload functionality) will be taken over from the schema. See example of form description below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "person",\n  "description": "",\n  "schema": "property.list?filter=global/app/MY_App/object/person/v1/schema",\n  "output": "global/app/MY_APP/object/person/v1/instance/%23%7Bvar.property.uuid%7D"\n}\n')),(0,o.kt)("h2",{id:"form-fields-for-task-forms"},"Form fields for task forms"),(0,o.kt)("p",null,"When working with task forms via the Online-Workflow-Modeler you can select the form type directly from a dropdown list. In this list there are the same options as for schema."),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(8829).Z})),(0,o.kt)("h2",{id:"static-drop-down-values-for-form-fields"},"Static drop down values for form fields"),(0,o.kt)("p",null,"In case you want to show in a field of a trigger form a dropdown list you have the following options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Refer to a fix list with any values"),(0,o.kt)("li",{parentName:"ol"},"Refer to a group of users from IAM")),(0,o.kt)("h3",{id:"fix-list-of-entries"},"Fix list of entries"),(0,o.kt)("p",null,"To refer to a fix list of entries, you have to define enum in schema. Below you find an easy example for this."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'"account": {\n      "title": "Kostenstelle *",\n      "type": "string",\n      "enum": [\n        "1000",\n        "2000",\n        "3000",\n        "4000",\n        "5000"\n      ]\n    }\n')),(0,o.kt)("p",null,"If you refer in the form section to this field \u201caccount\u201d, you will see a dropdown list of the values entered (1000, 2000, 3000, 4000, 5000)."),(0,o.kt)("h3",{id:"group-of-users-in-iam"},"Group of users in IAM"),(0,o.kt)("p",null,"to refer to a group of user in IAM, you have to adapt your schema and your form definition."),(0,o.kt)("p",null,"In your schema you have to define the respective filed as indicated below."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In schema:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'"user": {\n      "type": "string",\n      "title": "User",\n      "enum": []\n    }\n')),(0,o.kt)("p",null,"Afterwards you have to enhance your form definition by an specification for the field an a easy pipeline definition, which gives you some values back from IAM. In the example below, all user from group \u201cEmployee (Standard)\u201d will be shown in the dropdown list."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In form:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "field": "user",\n  "visibleColumns": [\n    "username"\n  ],\n  "values": "pipeline:iam.group.members?name=Employee (Standard)"\n}\n')),(0,o.kt)("h2",{id:"dynamic-drop-down-values-for-form-fields"},"Dynamic drop down values for form fields"),(0,o.kt)("p",null,"In case you want to filter values in a dropdown list based on specific entries in the form you have to enhance your schema and your form definition."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Example")),(0,o.kt)("p",null,"When a specific value for budget is exceeded, the list of potential reviewer is directly filtered to members of a specific group in IAM."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Can sign > 10k")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"td"},"Can sign <10k"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"All members of group \u201cC-Level\u201d"),(0,o.kt)("td",{parentName:"tr",align:null},"All members of group \u201cDepartment Head\u201d")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In schema:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'"user": {\n  "type": "string",\n  "title": "User",\n  "enum": []\n},\n"canSign": {\n  "type": "number",\n  "title": "Can sign"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In form definition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "f1",\n  "description": "",\n  "schema": "property.list?filter=global/app/a1/object/f1/v1/schema",\n  "output": "global/app/a1/object/f1/v1/instance/%23%7Bvar.property.uuid%7D",\n  "script": {\n    "onblur": "var response; if (form.canSign > 10000) { response = await pi.pipeline(\'iam.group.members?name=C-Level\') } else { response = await pi.pipeline(\'iam.group.members?name=Department Head\') }; if (response) { schema.properties.user.enum = response }"\n  },\n  "layout": {\n    "orientation": "vertical",\n    "items": [\n      {\n        "field": "user",\n        "visibleColumns": [\n          "username"\n        ]\n      },\n      {\n        "field": "canSign"\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"dynamic-calculation-of-values-in-a-form"},"Dynamic calculation of values in a form"),(0,o.kt)("p",null,"You have the option to show calculated values in a trigger form. To do so you have to enhance the schema and the form definition. Below you will find an example how to show a sum of two entries (value1 and value 2) in a third filed."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In schema:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'"value1": {\n  "type": "number",\n  "title": "value1"\n},\n"value2": {\n  "type": "number",\n  "title": "value2"\n},\n"value3": {\n  "type": "number",\n  "title": "value3"\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In form definition:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "f1",\n  "description": "",\n  "schema": "property.list?filter=global/app/a1/object/f1/v1/schema",\n  "output": "global/app/a1/object/f1/v1/instance/%23%7Bvar.property.uuid%7D",\n  "script": {\n    "onblur": "form.value3 = form.value1 + form.value2"\n  },\n  "layout": {\n    "orientation": "vertical",\n    "items": [\n      {\n        "field": "value1"\n      },\n      {\n        "field": "value2"\n      },\n      {\n        "field": "value3",\n        "readonly": true\n      }\n    ]\n  }\n}\n')),(0,o.kt)("h2",{id:"add-attachments-in-a-task-form"},"Add attachments in a task form"),(0,o.kt)("p",null,"You have the option to upload a file with a task form. To do so you have to enhance your schema and your form definition. Below you will find an example."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In schema:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'"myFile": {\n  "type": "object",\n  "properties": {\n    "filename": \n      {"type": "string"},\n    "contentLength": \n      {"type": "number"},\n    "contentType": \n      {"type": "string"},\n    "contentEncoding": \n      {"type": "string"},\n    "content": \n      {"type": "string"}\n  }  \n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"In form:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'"layout": {    \n        "orientation": "vertical",\n        "items": \n       [\n          {\n            "field": "myFile",\n            "height": "628",\n            "render": "pdfviewer",\n            "validation": [\n              {\n                "type": "js",\n                "rule": "!!val",\n                "message": "Field is required"\n        }\n      ]\n    }\n  ]\n}\n')),(0,o.kt)("p",null,"Tip: Be aware that you have to configure a layout for your form in order to show the file picker as expected."),(0,o.kt)("h2",{id:"show-attachments-in-a-task-form"},"Show attachments in a task form"),(0,o.kt)("p",null,"This functionality will be available with PIPEFORCE Version 8.0. Documentation will be added after release."))}m.isMDXComponent=!0},8829:function(e,n,t){n.Z=t.p+"assets/images/form-fields.det-251e4ceba8614d10cdb01ea067401b8c.png"}}]);