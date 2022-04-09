"use strict";(self.webpackChunkdevdocs=self.webpackChunkdevdocs||[]).push([[9671],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),l=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),p=l(n),m=r,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,s(s({ref:t},c),{},{components:n})):o.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:r,s[1]=a;for(var l=2;l<i;l++)s[l]=n[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9881:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return d}});var o=n(7462),r=n(3366),i=(n(7294),n(3905)),s=["components"],a={id:"introduction",title:"Introduction",description:"Moodle developer documentation",slug:"/"},u=void 0,l={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Moodle developer documentation",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/dinodevdocs/docs/",editUrl:"https://github.com/andrewnicols/dinodevdocs/edit/main/docs/intro.md",tags:[],version:"current",lastUpdatedBy:"Andrew Nicols",lastUpdatedAt:1649482268,formattedLastUpdatedAt:"09/04/2022",frontMatter:{id:"introduction",title:"Introduction",description:"Moodle developer documentation",slug:"/"},sidebar:"docs",next:{title:"Quick start",permalink:"/dinodevdocs/docs/gettingstarted/quickstart"}},c={},d=[{value:"Contributing",id:"contributing",level:2},{value:"Getting involved",id:"getting-involved",level:3},{value:"Issues",id:"issues",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Feature requests",id:"feature-requests",level:3},{value:"Development process",id:"development-process",level:3},{value:"Semantic Commit Messages",id:"semantic-commit-messages",level:3},{value:"Licensing",id:"licensing",level:3}],p={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Welcome to the new Moodle Developer documentation, your main resource in Moodle development."),(0,i.kt)("h2",{id:"contributing"},"Contributing"),(0,i.kt)("p",null,"Moodle is made by people like you, and so is its documentation. Moodlers are members of a big, worldwide, community of developers, designers, testers,\nteachers, translators, administrators, and many more. We work in universities, schools, companies, NGOs, charities, and all sorts of other places."),(0,i.kt)("p",null,"You are welcome to join us and to contribute to both the Moodle project, and our Developer Documentation."),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"https://opensource.guide/"},"Open Source Guides")," website has a collection of resources for individuals, communities, and companies, who want to\nlearn how to run and contribute to an open source project. If you are new to open source contributions then the following guides may be especially\nuseful:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.guide/how-to-contribute/"},"How to Contribute to Open Source")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.guide/building-community/"},"Building Welcoming Communities")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://opensource.guide/legal/"},"The Legal Side of Open Source"))),(0,i.kt)("h3",{id:"getting-involved"},"Getting involved"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-todo"},"\n- Fix typos and bugs in our docs\n- Add to our docs\n- Look through the issues on our repo and offer to fix one\n- Find anything confusing? Help us fix it\n- Help migrate something from docs.moodle.org/dev to our new repo\n- Document the documentation process\n- Look at our requeted features\n")),(0,i.kt)("h3",{id:"issues"},"Issues"),(0,i.kt)("h3",{id:"bugs"},"Bugs"),(0,i.kt)("h3",{id:"feature-requests"},"Feature requests"),(0,i.kt)("h3",{id:"development-process"},"Development process"),(0,i.kt)("h3",{id:"semantic-commit-messages"},"Semantic Commit Messages"),(0,i.kt)("h3",{id:"licensing"},"Licensing"),(0,i.kt)("p",null,"Moodle is licensed under the ",(0,i.kt)("a",{parentName:"p",href:"https://www.gnu.org/licenses/gpl-3.0.en.html"},"GPLv3 license"),"."),(0,i.kt)("p",null,"This page is licensed under a ",(0,i.kt)("a",{parentName:"p",href:"https://creativecommons.org/licenses/by-nd/4.0/"},"Creative Commons Attribution-NoDerivatives 4.0 International License"),"."))}m.isMDXComponent=!0}}]);