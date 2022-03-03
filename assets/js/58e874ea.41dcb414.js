"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4520],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=d(t),m=i,f=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return t?a.createElement(f,l(l({ref:n},u),{},{components:t})):a.createElement(f,l({ref:n},u))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=t[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8533:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return d},toc:function(){return u},default:function(){return c}});var a=t(7462),i=t(3366),r=(t(7294),t(3905)),l=["components"],o={},s="Validation",d={unversionedId:"guides/forms/forms-validation",id:"guides/forms/forms-validation",isDocsHomePage:!1,title:"Validation",description:"Basic validations regarding data types will be specified by the underlying JSON schema of the form.",source:"@site/docs/guides/forms/040_forms-validation.md",sourceDirName:"guides/forms",slug:"/guides/forms/forms-validation",permalink:"/docs/guides/forms/forms-validation",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/forms/040_forms-validation.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Look & Feel",permalink:"/docs/guides/forms/forms-lookandfeel"},next:{title:"File Upload",permalink:"/docs/guides/forms/forms-upload"}},u=[{value:"Validation Engine: JavaScript (js)",id:"validation-engine-javascript-js",children:[{value:"Some examples",id:"some-examples",children:[],level:3}],level:2}],p={toc:u};function c(e){var n=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"validation"},"Validation"),(0,r.kt)("p",null,"Basic validations regarding data types will be specified by the underlying ",(0,r.kt)("a",{parentName:"p",href:"../guides/schema-and-objects"},"JSON schema")," of the form."),(0,r.kt)("p",null,"In order to create more specific custom validation rules for form fields, you can add the validation attribute to each field in the form configuration. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Person",\n  "description": "A person form",  \n  ...\n  \n  "layout": {\n    "items": [\n      {\n        "field": "firstName", \n        "validation":[\n          { "type":"js", "rule":"!!val", "message": "Field is required!" }\n        ]\n      },\n      ...\n    ]\n  }\n}\n')),(0,r.kt)("p",null,"You can define as many validation rules as you want. All of them will be executed in the order they are specified in the list. The first one, which fails, will be shown to the user as a validation message."),(0,r.kt)("p",null,"Each validation rule has this format:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ "type":"TYPE", "rule":"EXPRESSION", "message": "MESSAGE" }\n')),(0,r.kt)("p",null,"Where ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," defines the type of the validation engine. This is, by default, ",(0,r.kt)("inlineCode",{parentName:"p"},"js")," which validates using a JavaScript expression. In future, there will be different validation engines available here."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"rule")," defines the rule expression to be applied. The return value of this rule must be ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," in order to have a valid field value."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"message")," defines the message to be displayed in case this validation has failed."),(0,r.kt)("h2",{id:"validation-engine-javascript-js"},"Validation Engine: JavaScript (js)"),(0,r.kt)("p",null,"This validation engine is the default engine. It takes a JavaScript expression using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rule")," attribute and evaluates it. In case it evaluates to ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),", the message given by attribute ",(0,r.kt)("inlineCode",{parentName:"p"},"message")," is shown."),(0,r.kt)("p",null,"The field value is provided as variable ",(0,r.kt)("inlineCode",{parentName:"p"},"val")," and can be used inside the rule expression."),(0,r.kt)("h3",{id:"some-examples"},"Some examples"),(0,r.kt)("p",null,"The given field is a required one. Therefore, make sure this field has a value. In case it has not value, ",(0,r.kt)("inlineCode",{parentName:"p"},"!val")," will return ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),". So we have to negate it with an additional ",(0,r.kt)("inlineCode",{parentName:"p"},"!")," in order activare the validation rule and show the message: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"!!val", \n  "message": "Field is required!" \n}\n')),(0,r.kt)("p",null,"This will produce the ",(0,r.kt)("inlineCode",{parentName:"p"},"Field is required!")," message if the respective field is not given, as seen below: "),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(4396).Z})),(0,r.kt)("p",null,"Make sure that the given number input has maximum range:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "js",\n  "rule": "val < 1000",\n  "message": "Number cannot be or exceed 1000"\n}\n')),(0,r.kt)("p",null,"Make sure that the given string input has not more than 150 characters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"val.length <= 150", \n  "message": "Field may not contain more than 150 characters!" \n}\n')),(0,r.kt)("p",null,"Make sure the given input contains the word ",(0,r.kt)("inlineCode",{parentName:"p"},"Hello"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"val.includes(\'Hello\')", \n  "message": "Field must contain word Hello!" \n}\n')),(0,r.kt)("p",null,"Make sure the given input is an email (simple approach):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"val.indexOf(\'@\'\') > 0", \n  "message": "Field must contain a valid email!" \n}\n')),(0,r.kt)("p",null,"Make sure the given input is an email (advanced approach with regex):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"/\\S+@\\S+\\.\\S+/.test(val)", \n  "message": "Field must contain a valid email!" \n}\n')),(0,r.kt)("p",null,'If the form is created using workflow form, then one of the following are ways which can be used to implement the "required" validation rule:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Local Camunda Modeler:")),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(8117).Z})),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"BPMN in Online Workbench:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-xml"},'<camunda:formField id="v1" label="v1" type="string">\n  <camunda:validation>\n    <camunda:constraint name="required" />\n  </camunda:validation>\n</camunda:formField>\n')),(0,r.kt)("p",null,"Here, we used ",(0,r.kt)("inlineCode",{parentName:"p"},'<camunda:constraint name="required" />'),' to implement the "required" validation rule.'))}c.isMDXComponent=!0},8117:function(e,n){n.Z="data:image/png;base64,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"},4396:function(e,n){n.Z="data:image/png;base64,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"}}]);