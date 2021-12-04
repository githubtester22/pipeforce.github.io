"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[6490],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(n),f=a,d=m["".concat(c,".").concat(f)]||m[f]||u[f]||o;return n?r.createElement(d,s(s({ref:t},l),{},{components:n})):r.createElement(d,s({ref:t},l))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9410:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return p},toc:function(){return l},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),s=["components"],i={},c="Schema & Objects",p={unversionedId:"guides/schema-&-objects",id:"guides/schema-&-objects",isDocsHomePage:!1,title:"Schema & Objects",description:"Objects in PIPEFORCE are custom models that represent data of a specific app or process. For example an Invoice or Person object. The structure of such objects can by defined using a Schema. Also forms need such a Schema for its field structure.",source:"@site/docs/guides/schema-&-objects.md",sourceDirName:"guides",slug:"/guides/schema-&-objects",permalink:"/docs/guides/schema-&-objects",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/schema-&-objects.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Groups, Roles, Permissions",permalink:"/docs/guides/permissions"},next:{title:"Schema Types",permalink:"/docs/guides/schema-types"}},l=[{value:"Default form rendering",id:"default-form-rendering",children:[],level:2}],u={toc:l};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"schema--objects"},"Schema & Objects"),(0,o.kt)("p",null,"Objects in PIPEFORCE are custom models that represent data of a specific app or process. For example an ",(0,o.kt)("inlineCode",{parentName:"p"},"Invoice")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Person")," object. The structure of such objects can by defined using a Schema. Also forms need such a Schema for its field structure."),(0,o.kt)("h1",{id:"the-schema"},"The Schema"),(0,o.kt)("p",null,"For example before you can use a form, you need to know which \u201ctype of data\u201d such a form produces: After a form was submitted, it creates a new data set called an ",(0,o.kt)("strong",{parentName:"p"},"object and stores it into the property store"),". The structure of such an object (which fields it has) is defined in a JSON Schema."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"JSON Schema")," is a formalized format to describe data structures in the JSON document format. It is similar to XML Schema, DTD or Database Schemas, but a lot easier."),(0,o.kt)("p",null,"See here for more details about JSON schema: ",(0,o.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"https://json-schema.org/")),(0,o.kt)("p",null,"PIPEFORCE Forms are built on top of JSON schema. Therefore, the first step to create a form is always to create a JSON schema configuration or using an existing one."),(0,o.kt)("p",null,"But also in other areas beside forms it is meaningful to define a JSON Schema first before you start to work with data models in your application."),(0,o.kt)("p",null,"Here is an example of how such a JSON schema can look like defining an person object:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n\n  "properties": {\n    "firstName": {\n      "type": "string"\n    },\n    "lastName": {\n      "type": "string"\n    },\n    "age": {\n      "type": "number"\n    },\n    "gender": {\n      "type": "string",\n      "enum": ["male", "female", "neutral"]\n    }\n  }\n}\n')),(0,o.kt)("p",null,"You can see that it defines four fields of different types: The ",(0,o.kt)("inlineCode",{parentName:"p"},"firstName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"lastName"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"age")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"gender")," of a person. Within your application you can then refer to it at any place as the model with a clearly defined structure."),(0,o.kt)("p",null,"By default, a JSON schema which describes an object within PIPEORCE is placed in a property using this key path:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"global/app/<APP>/object/<NAME>/v1/schema\n")),(0,o.kt)("p",null,"Whereas ",(0,o.kt)("inlineCode",{parentName:"p"},"<APP>")," is the name of the app, the object belongs to and ",(0,o.kt)("inlineCode",{parentName:"p"},"<NAME>")," is the name of the object. In the example of a person which is part of the app ",(0,o.kt)("inlineCode",{parentName:"p"},"myApp"),", you could use this path to access the object schema in a unique way from within the overall PIPEFORCE instance:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"global/app/myApp/object/person/v1/schema\n")),(0,o.kt)("h2",{id:"default-form-rendering"},"Default form rendering"),(0,o.kt)("p",null,"The JSON schema will be used as a base to render the fields defined in it as a form. By default all fields are rendered vertically (each in a row) as you can see here:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(7958).Z})))}m.isMDXComponent=!0},7958:function(e,t,n){t.Z=n.p+"assets/images/grafik-20201023-084022-a5aa43a807e2ca2223a0b478005181cc.png"}}]);