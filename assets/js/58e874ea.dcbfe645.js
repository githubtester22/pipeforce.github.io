"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[4520],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),u=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(t),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return t?a.createElement(f,o(o({ref:n},p),{},{components:t})):a.createElement(f,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},8533:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),o=["components"],l={},s="Validation",u={unversionedId:"guides/forms/forms-validation",id:"guides/forms/forms-validation",isDocsHomePage:!1,title:"Validation",description:"In order to create custom validations rule for form fields, you can add the validation attribute to each field in the form configuration. For example:",source:"@site/docs/guides/forms/040_forms-validation.md",sourceDirName:"guides/forms",slug:"/guides/forms/forms-validation",permalink:"/docs/guides/forms/forms-validation",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/forms/040_forms-validation.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Look & Feel",permalink:"/docs/guides/forms/forms-lookandfeel"},next:{title:"Upload",permalink:"/docs/guides/forms/forms-upload"}},p=[{value:"Some examples",id:"some-examples",children:[],level:2}],d={toc:p};function c(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"validation"},"Validation"),(0,i.kt)("p",null,"In order to create custom validations rule for form fields, you can add the validation attribute to each field in the form configuration. For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Person",\n  "description": "A person form",  \n  ...\n  \n  "layout": {\n    "items": [\n      {\n        "field": "firstName", \n        "validation":[\n          { "type":"js", "rule":"!!val", "message": "Field is required!" }\n        ]\n      },\n      ...\n    ]\n  }\n}\n')),(0,i.kt)("p",null,"You can define as many validation rules as you want. All of them will be executed in the order they are defined in the list. The first one which fails will be shown to the user as validation message."),(0,i.kt)("p",null,"Each validation rule has this format:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ "type":"TYPE", "rule":"EXPRESSION", "message": "MESSAGE" }\n')),(0,i.kt)("p",null,"Whereas ",(0,i.kt)("inlineCode",{parentName:"p"},"type")," defines the type of the validation engine. This is by default ",(0,i.kt)("inlineCode",{parentName:"p"},"js")," which validates using a JavaScript expression. In future there will be different validation engines available here."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"rule")," defines the rule expression to be applied. The return value of this rule must be ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," in order to have a valid field value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"message")," defines the message to be displayed in case this validation has been failed."),(0,i.kt)("h1",{id:"validation-engine-javascript-js"},"Validation Engine: JavaScript (js)"),(0,i.kt)("p",null,"This validation engine is the default engine. It takes a JavaScript expression using the ",(0,i.kt)("inlineCode",{parentName:"p"},"rule")," attribute and evaluates it. In case it evaluates to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", the message given by attribute ",(0,i.kt)("inlineCode",{parentName:"p"},"message")," is shown."),(0,i.kt)("p",null,"The field value is provided as variable ",(0,i.kt)("inlineCode",{parentName:"p"},"val")," and can be used inside the rule expression."),(0,i.kt)("h2",{id:"some-examples"},"Some examples"),(0,i.kt)("p",null,"The given field is a required one. Therefore, make sure the field has a value. See the ",(0,i.kt)("inlineCode",{parentName:"p"},"!!")," operator in JavaScript:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"!!val", \n  "message": "Field is required!" \n}\n')),(0,i.kt)("p",null,"Make sure that the given input has not more than 150 characters:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"val.length <= 150", \n  "message": "Field may not contain more than 150 characters!" \n}\n')),(0,i.kt)("p",null,"Make sure the given input contains the word ",(0,i.kt)("inlineCode",{parentName:"p"},"Hello"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"val.includes(\'Hello\')", \n  "message": "Field must contain word Hello!" \n}\n')),(0,i.kt)("p",null,"Make sure the given input is an email (simple approach):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"val.indexOf(\'@\'\') > 0", \n  "message": "Field must contain a valid email!" \n}\n')),(0,i.kt)("p",null,"Make sure the given input is an email (advanced approach with regex):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{ \n  "type":"js", \n  "rule":"/\\S+@\\S+\\.\\S+/.test(val)", \n  "message": "Field must contain a valid email!" \n}\n')))}c.isMDXComponent=!0}}]);