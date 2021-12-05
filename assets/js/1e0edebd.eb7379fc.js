"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[2379],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),f=l(n),d=o,m=f["".concat(u,".").concat(d)]||f[d]||p[d]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<a;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8238:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return f}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),s=["components"],i={},u="Buttons",l={unversionedId:"guides/forms/forms-buttons",id:"guides/forms/forms-buttons",isDocsHomePage:!1,title:"Buttons",description:"By default each form shows a single submit button. If this button is pressed, the data of the form will be stored as new instance property into the property store.",source:"@site/docs/guides/forms/060_forms-buttons.md",sourceDirName:"guides/forms",slug:"/guides/forms/forms-buttons",permalink:"/docs/guides/forms/forms-buttons",editUrl:"https://github.com/pipeforce/pipeforce.github.io/edit/master/docs/guides/forms/060_forms-buttons.md",tags:[],version:"current",sidebarPosition:60,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Upload",permalink:"/docs/guides/forms/forms-upload"},next:{title:"Form Fields v1",permalink:"/docs/guides/forms/forms-fields_v1"}},c=[],p={toc:c};function f(e){var t=e.components,n=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"buttons"},"Buttons"),(0,a.kt)("p",null,"By default each form shows a single submit button. If this button is pressed, the data of the form will be stored as new instance property into the property store."),(0,a.kt)("p",null,"You can change this default behaviour in two steps:"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step1:")," Change the JSON Schema and add a new field of type ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," for each button. This field should carry the value of the button after it was clicked (",(0,a.kt)("inlineCode",{parentName:"p"},"true"),") or not (",(0,a.kt)("inlineCode",{parentName:"p"},"false"),"). For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type": "object",\n\n  "properties": {\n    "buttonYes": {\n      "type": "boolean"\n    },\n    "buttonNo": {\n      "type": "boolean"\n    } \n  }\n}\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Step 2:")," \u201cTell\u201d the form configuration, that it should \u201cdraw\u201d these fields as buttons using the ",(0,a.kt)("inlineCode",{parentName:"p"},"render")," attribute. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "title": "Approval",\n  "description": "Do you approve?",  \n  ...\n  "layout": {\n    "items": [      \n      {"field": "buttonYes", "render": "button"},      \n      {"field": "buttonNo", "render": "button"}\n    ]\n  }\n}\n')),(0,a.kt)("p",null,"After a button has been clicked, a new object is created and stored in the property store which do have a structure like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "buttonYes": true,\n  "buttonNo": false\n}\n')),(0,a.kt)("p",null,"Here you can see that the \u201cYes\u201d button was clicked."),(0,a.kt)("p",null,"You can then create a event.listen pipeline to listen for such a submit and react accordingly. See section about listening for form submits."))}f.isMDXComponent=!0}}]);