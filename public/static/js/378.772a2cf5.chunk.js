"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[378],{8594:function(e,n,t){t.d(n,{$_:function(){return a},h4:function(){return i},SW:function(){return u}});t(2791);var r=t(184),i=function(){return(0,r.jsx)("div",{})},o=t(1087),a=function(){return(0,r.jsxs)("footer",{className:"bg-blue-900 fixed inset-x-0 bottom-0",children:[(0,r.jsx)("div",{className:"text-base text-center text-white md:absolute top-4 right-5 md:pt-0 pt-5",children:(0,r.jsx)(o.rU,{className:"icon-envelop mr-4"})}),(0,r.jsx)("div",{className:"text-white text-center text-base pt-3 pb-4",children:(0,r.jsx)("p",{children:"\xa9 2022 Name of comapany. All rights reserved."})})]})},c=t(1694),s=t.n(c),u=function(e){return(0,r.jsx)("div",{className:s()("fixed inset-0 bg-black bg-opacity-50 z-50",{hidden:!(null!==e&&void 0!==e&&e.isShowLoadding)}),children:(0,r.jsx)("div",{className:"loader absolute top-[40%] left-[40%]"})})}},378:function(e,n,t){t.r(n),t.d(n,{default:function(){return h}});var r=t(3430),i=t(2791),o=t(5897),a=t(1865),c=t(8594),s=t(5701),u=t.n(s),d=t(6396),l={insert:"head",singleton:!1},f=(u()(d.Z,l),d.Z.locals,t(184)),h=function(e){var n=e.children,t=(0,o.$)().i18n,s=(0,a.aC)().changeLanguage,u=(0,i.useState)(window.innerWidth<769),d=(0,r.Z)(u,2),l=d[0],h=d[1];return(0,i.useEffect)((function(){function e(){window.innerWidth<1025&&!l&&h(!0)}return window.innerWidth<769&&!l&&setTimeout((function(){h(!0)})),window.scrollTo({top:0,behavior:"smooth"}),window.addEventListener("resize",e,!0),function(){return window.removeEventListener("resize",e,!0)}}),[]),-1===["en","vi"].indexOf(t.language)&&("vi-VN"===t.language?s("vi"):s("en")),(0,f.jsxs)("div",{children:[(0,f.jsx)(c.h4,{}),(0,f.jsx)("div",{children:n}),(0,f.jsx)(c.$_,{})]})}},2182:function(e){e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"===typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var c=0;c<e.length;c++){var s=[].concat(e[c]);r&&i[s[0]]||(t&&(s[2]?s[2]="".concat(t," and ").concat(s[2]):s[2]=t),n.push(s))}},n}},6396:function(e,n,t){var r=t(2182),i=t.n(r)()((function(e){return e[1]}));i.push([e.id,"",""]),n.Z=i},5701:function(e,n,t){var r=function(){var e;return function(){return"undefined"===typeof e&&(e=Boolean(window&&document&&document.all&&!window.atob)),e}}(),i=function(){var e={};return function(n){if("undefined"===typeof e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(r){t=null}e[n]=t}return e[n]}}(),o=[];function a(e){for(var n=-1,t=0;t<o.length;t++)if(o[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],i=0;i<e.length;i++){var c=e[i],s=n.base?c[0]+n.base:c[0],u=t[s]||0,d="".concat(s," ").concat(u);t[s]=u+1;var l=a(d),f={css:c[1],media:c[2],sourceMap:c[3]};-1!==l?(o[l].references++,o[l].updater(f)):o.push({identifier:d,updater:p(f,n),references:1}),r.push(d)}return r}function s(e){var n=document.createElement("style"),r=e.attributes||{};if("undefined"===typeof r.nonce){var o=t.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"===typeof e.insert)e.insert(n);else{var a=i(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(n)}return n}var u=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function d(e,n,t,r){var i=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(n,i);else{var o=document.createTextNode(i),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}function l(e,n,t){var r=t.css,i=t.media,o=t.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!==typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,h=0;function p(e,n){var t,r,i;if(n.singleton){var o=h++;t=f||(f=s(n)),r=d.bind(null,t,o,!1),i=d.bind(null,t,o,!0)}else t=s(n),r=l.bind(null,t,n),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else i()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"===typeof n.singleton||(n.singleton=r());var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var i=a(t[r]);o[i].references--}for(var s=c(e,n),u=0;u<t.length;u++){var d=a(t[u]);0===o[d].references&&(o[d].updater(),o.splice(d,1))}t=s}}}}}]);