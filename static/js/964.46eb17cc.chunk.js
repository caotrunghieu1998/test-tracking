"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[964],{8594:function(e,t,n){n.d(t,{$_:function(){return s},h4:function(){return o},SW:function(){return c}});n(2791);var a=n(184),o=function(){return(0,a.jsx)("div",{})},i=n(1087),s=function(){return(0,a.jsxs)("footer",{className:"bg-blue-900 fixed inset-x-0 bottom-0",children:[(0,a.jsx)("div",{className:"text-base text-center text-white md:absolute top-4 right-5 md:pt-0 pt-5",children:(0,a.jsx)(i.rU,{className:"icon-envelop mr-4"})}),(0,a.jsx)("div",{className:"text-white text-center text-base pt-3 pb-4",children:(0,a.jsx)("p",{children:"\xa9 2022 Name of comapany. All rights reserved."})})]})},r=n(1694),l=n.n(r),c=function(e){return(0,a.jsx)("div",{className:l()("fixed inset-0 bg-black bg-opacity-50 z-50",{hidden:!(null!==e&&void 0!==e&&e.isShowLoadding)}),children:(0,a.jsx)("div",{className:"loader absolute top-[40%] left-[40%]"})})}},2964:function(e,t,n){n.r(t),n.d(t,{default:function(){return $}});var a=n(7166),o=n(3032),i=n(3430),s=n(1694),r=n.n(s),l=n(2791),c=n(4569),u=n.n(c),d={getTracks:function(){var e=(0,o.Z)((0,a.Z)().mark((function e(t){var n,o,i;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=t||"",e.next=4,u().get("/api/postshipping-tracks?ReferenceNumber=".concat(n),{headers:{Token:"84E47384A8C06F87D9F3D985A350D969",Accept:"application/json","Content-Type":"application/json"}});case 4:return o=e.sent,i=o.data,e.abrupt("return",i);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",null);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()},f=n(6222),m=n(8489),v=n(3738),p=n(5531);function h(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=h(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}var g=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=h(e))&&(a&&(a+=" "),a+=t);return a},x=["theme","type"],T=["delay","staleId"],y=function(e){return"number"==typeof e&&!isNaN(e)},b=function(e){return"string"==typeof e},E=function(e){return"function"==typeof e},N=function(e){return b(e)||E(e)?e:null},j=function(e){return(0,l.isValidElement)(e)||b(e)||E(e)||y(e)};function k(e){var t=e.enter,n=e.exit,a=e.appendPosition,o=void 0!==a&&a,i=e.collapse,s=void 0===i||i,r=e.collapseDuration,c=void 0===r?300:r;return function(e){var a=e.children,i=e.position,r=e.preventExitTransition,u=e.done,d=e.nodeRef,f=e.isIn,m=o?"".concat(t,"--").concat(i):t,v=o?"".concat(n,"--").concat(i):n,h=(0,l.useRef)(0);return(0,l.useLayoutEffect)((function(){var e,t=d.current,n=m.split(" "),a=function e(a){var o;a.target===d.current&&(t.dispatchEvent(new Event("d")),t.removeEventListener("animationend",e),t.removeEventListener("animationcancel",e),0===h.current&&"animationcancel"!==a.type&&(o=t.classList).remove.apply(o,(0,p.Z)(n)))};(e=t.classList).add.apply(e,(0,p.Z)(n)),t.addEventListener("animationend",a),t.addEventListener("animationcancel",a)}),[]),(0,l.useEffect)((function(){var e=d.current,t=function t(){e.removeEventListener("animationend",t),s?function(e,t,n){void 0===n&&(n=300);var a=e.scrollHeight,o=e.style;requestAnimationFrame((function(){o.minHeight="initial",o.height=a+"px",o.transition="all ".concat(n,"ms"),requestAnimationFrame((function(){o.height="0",o.padding="0",o.margin="0",setTimeout(t,n)}))}))}(e,u,c):u()};f||(r?t():(h.current=1,e.className+=" ".concat(v),e.addEventListener("animationend",t)))}),[f]),l.createElement(l.Fragment,null,a)}}function C(e,t){return{content:e.content,containerId:e.props.containerId,id:e.props.toastId,theme:e.props.theme,type:e.props.type,data:e.props.data||{},isLoading:e.props.isLoading,icon:e.props.icon,status:t}}var w={list:new Map,emitQueue:new Map,on:function(e,t){return this.list.has(e)||this.list.set(e,[]),this.list.get(e).push(t),this},off:function(e,t){if(t){var n=this.list.get(e).filter((function(e){return e!==t}));return this.list.set(e,n),this}return this.list.delete(e),this},cancelEmit:function(e){var t=this.emitQueue.get(e);return t&&(t.forEach(clearTimeout),this.emitQueue.delete(e)),this},emit:function(e){var t=arguments,n=this;this.list.has(e)&&this.list.get(e).forEach((function(a){var o=setTimeout((function(){a.apply(void 0,(0,p.Z)([].slice.call(t,1)))}),0);n.emitQueue.has(e)||n.emitQueue.set(e,[]),n.emitQueue.get(e).push(o)}))}},Z=function(e){var t=e.theme,n=e.type,a=(0,v.Z)(e,x);return l.createElement("svg",(0,m.Z)({viewBox:"0 0 24 24",width:"100%",height:"100%",fill:"colored"===t?"currentColor":"var(--toastify-icon-color-".concat(n,")")},a))},I={info:function(e){return l.createElement(Z,(0,m.Z)({},e),l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.013 12.013 0 0012 0zm.25 5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5zm2.25 13.5h-4a1 1 0 010-2h.75a.25.25 0 00.25-.25v-4.5a.25.25 0 00-.25-.25h-.75a1 1 0 010-2h1a2 2 0 012 2v4.75a.25.25 0 00.25.25h.75a1 1 0 110 2z"}))},warning:function(e){return l.createElement(Z,(0,m.Z)({},e),l.createElement("path",{d:"M23.32 17.191L15.438 2.184C14.728.833 13.416 0 11.996 0c-1.42 0-2.733.833-3.443 2.184L.533 17.448a4.744 4.744 0 000 4.368C1.243 23.167 2.555 24 3.975 24h16.05C22.22 24 24 22.044 24 19.632c0-.904-.251-1.746-.68-2.44zm-9.622 1.46c0 1.033-.724 1.823-1.698 1.823s-1.698-.79-1.698-1.822v-.043c0-1.028.724-1.822 1.698-1.822s1.698.79 1.698 1.822v.043zm.039-12.285l-.84 8.06c-.057.581-.408.943-.897.943-.49 0-.84-.367-.896-.942l-.84-8.065c-.057-.624.25-1.095.779-1.095h1.91c.528.005.84.476.784 1.1z"}))},success:function(e){return l.createElement(Z,(0,m.Z)({},e),l.createElement("path",{d:"M12 0a12 12 0 1012 12A12.014 12.014 0 0012 0zm6.927 8.2l-6.845 9.289a1.011 1.011 0 01-1.43.188l-4.888-3.908a1 1 0 111.25-1.562l4.076 3.261 6.227-8.451a1 1 0 111.61 1.183z"}))},error:function(e){return l.createElement(Z,(0,m.Z)({},e),l.createElement("path",{d:"M11.983 0a12.206 12.206 0 00-8.51 3.653A11.8 11.8 0 000 12.207 11.779 11.779 0 0011.8 24h.214A12.111 12.111 0 0024 11.791 11.766 11.766 0 0011.983 0zM10.5 16.542a1.476 1.476 0 011.449-1.53h.027a1.527 1.527 0 011.523 1.47 1.475 1.475 0 01-1.449 1.53h-.027a1.529 1.529 0 01-1.523-1.47zM11 12.5v-6a1 1 0 012 0v6a1 1 0 11-2 0z"}))},spinner:function(){return l.createElement("div",{className:"Toastify__spinner"})}};function _(e){var t=(0,l.useReducer)((function(e){return e+1}),0),n=(0,i.Z)(t,2)[1],a=(0,l.useState)([]),o=(0,i.Z)(a,2),s=o[0],r=o[1],c=(0,l.useRef)(null),u=(0,l.useRef)(new Map).current,d=function(e){return-1!==s.indexOf(e)},f=(0,l.useRef)({toastKey:1,displayedToast:0,count:0,queue:[],props:e,containerId:null,isToastActive:d,getToast:function(e){return u.get(e)}}).current;function h(e){var t=e.containerId;!f.props.limit||t&&f.containerId!==t||(f.count-=f.queue.length,f.queue=[])}function g(e){r((function(t){return null==e?[]:t.filter((function(t){return t!==e}))}))}function x(){var e=f.queue.shift();Z(e.toastContent,e.toastProps,e.staleId)}function k(e,t){var a=t.delay,o=t.staleId,i=(0,v.Z)(t,T);if(j(e)&&!function(e){return!c.current||f.props.enableMultiContainer&&e.containerId!==f.props.containerId||u.has(e.toastId)&&null==e.updateId}(i)){var s=i.toastId,r=i.updateId,d=i.data,p=f.props,h=function(){return g(s)},k=null==r;k&&f.count++;var _,L,D=(0,m.Z)((0,m.Z)((0,m.Z)({},p),{},{style:p.toastStyle,key:f.toastKey++},i),{},{toastId:s,updateId:r,data:d,closeToast:h,isIn:!1,className:N(i.className||p.toastClassName),bodyClassName:N(i.bodyClassName||p.bodyClassName),progressClassName:N(i.progressClassName||p.progressClassName),autoClose:!i.isLoading&&(_=i.autoClose,L=p.autoClose,!1===_||y(_)&&_>0?_:L),deleteToast:function(){var e=C(u.get(s),"removed");u.delete(s),w.emit(4,e);var t=f.queue.length;if(f.count=null==s?f.count-f.displayedToast:f.count-1,f.count<0&&(f.count=0),t>0){var a=null==s?f.props.limit:1;if(1===t||1===a)f.displayedToast++,x();else{var o=a>t?t:a;f.displayedToast=o;for(var i=0;i<o;i++)x()}}else n()}});D.iconOut=function(e){var t=e.theme,n=e.type,a=e.isLoading,o=e.icon,i=null,s={theme:t,type:n};return!1===o||(E(o)?i=o(s):(0,l.isValidElement)(o)?i=(0,l.cloneElement)(o,s):b(o)||y(o)?i=o:a?i=I.spinner():function(e){return e in I}(n)&&(i=I[n](s))),i}(D),E(i.onOpen)&&(D.onOpen=i.onOpen),E(i.onClose)&&(D.onClose=i.onClose),D.closeButton=p.closeButton,!1===i.closeButton||j(i.closeButton)?D.closeButton=i.closeButton:!0===i.closeButton&&(D.closeButton=!j(p.closeButton)||p.closeButton);var O=e;(0,l.isValidElement)(e)&&!b(e.type)?O=(0,l.cloneElement)(e,{closeToast:h,toastProps:D,data:d}):E(e)&&(O=e({closeToast:h,toastProps:D,data:d})),p.limit&&p.limit>0&&f.count>p.limit&&k?f.queue.push({toastContent:O,toastProps:D,staleId:o}):y(a)?setTimeout((function(){Z(O,D,o)}),a):Z(O,D,o)}}function Z(e,t,n){var a=t.toastId;n&&u.delete(n);var o={content:e,props:t};u.set(a,o),r((function(e){return[].concat((0,p.Z)(e),[a]).filter((function(e){return e!==n}))})),w.emit(4,C(o,null==o.props.updateId?"added":"updated"))}return(0,l.useEffect)((function(){return f.containerId=e.containerId,w.cancelEmit(3).on(0,k).on(1,(function(e){return c.current&&g(e)})).on(5,h).emit(2,f),function(){u.clear(),w.emit(3,f)}}),[]),(0,l.useEffect)((function(){f.props=e,f.isToastActive=d,f.displayedToast=s.length})),{getToastToRender:function(t){var n=new Map,a=Array.from(u.values());return e.newestOnTop&&a.reverse(),a.forEach((function(e){var t=e.props.position;n.has(t)||n.set(t,[]),n.get(t).push(e)})),Array.from(n,(function(e){return t(e[0],e[1])}))},containerRef:c,isToastActive:d}}function L(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientX:e.clientX}function D(e){return e.targetTouches&&e.targetTouches.length>=1?e.targetTouches[0].clientY:e.clientY}function O(e){var t=(0,l.useState)(!1),n=(0,i.Z)(t,2),a=n[0],o=n[1],s=(0,l.useState)(!1),r=(0,i.Z)(s,2),c=r[0],u=r[1],d=(0,l.useRef)(null),f=(0,l.useRef)({start:0,x:0,y:0,delta:0,removalDistance:0,canCloseOnClick:!0,canDrag:!1,boundingRect:null,didMove:!1}).current,m=(0,l.useRef)(e),v=e.autoClose,p=e.pauseOnHover,h=e.closeToast,g=e.onClick,x=e.closeOnClick;function T(t){if(e.draggable){"touchstart"===t.nativeEvent.type&&t.nativeEvent.preventDefault(),f.didMove=!1,document.addEventListener("mousemove",j),document.addEventListener("mouseup",k),document.addEventListener("touchmove",j),document.addEventListener("touchend",k);var n=d.current;f.canCloseOnClick=!0,f.canDrag=!0,f.boundingRect=n.getBoundingClientRect(),n.style.transition="",f.x=L(t.nativeEvent),f.y=D(t.nativeEvent),"x"===e.draggableDirection?(f.start=f.x,f.removalDistance=n.offsetWidth*(e.draggablePercent/100)):(f.start=f.y,f.removalDistance=n.offsetHeight*(80===e.draggablePercent?1.5*e.draggablePercent:e.draggablePercent/100))}}function y(t){if(f.boundingRect){var n=f.boundingRect,a=n.top,o=n.bottom,i=n.left,s=n.right;"touchend"!==t.nativeEvent.type&&e.pauseOnHover&&f.x>=i&&f.x<=s&&f.y>=a&&f.y<=o?N():b()}}function b(){o(!0)}function N(){o(!1)}function j(t){var n=d.current;f.canDrag&&n&&(f.didMove=!0,a&&N(),f.x=L(t),f.y=D(t),f.delta="x"===e.draggableDirection?f.x-f.start:f.y-f.start,f.start!==f.x&&(f.canCloseOnClick=!1),n.style.transform="translate".concat(e.draggableDirection,"(").concat(f.delta,"px)"),n.style.opacity=""+(1-Math.abs(f.delta/f.removalDistance)))}function k(){document.removeEventListener("mousemove",j),document.removeEventListener("mouseup",k),document.removeEventListener("touchmove",j),document.removeEventListener("touchend",k);var t=d.current;if(f.canDrag&&f.didMove&&t){if(f.canDrag=!1,Math.abs(f.delta)>f.removalDistance)return u(!0),void e.closeToast();t.style.transition="transform 0.2s, opacity 0.2s",t.style.transform="translate".concat(e.draggableDirection,"(0)"),t.style.opacity="1"}}(0,l.useEffect)((function(){m.current=e})),(0,l.useEffect)((function(){return d.current&&d.current.addEventListener("d",b,{once:!0}),E(e.onOpen)&&e.onOpen((0,l.isValidElement)(e.children)&&e.children.props),function(){var e=m.current;E(e.onClose)&&e.onClose((0,l.isValidElement)(e.children)&&e.children.props)}}),[]),(0,l.useEffect)((function(){return e.pauseOnFocusLoss&&(document.hasFocus()||N(),window.addEventListener("focus",b),window.addEventListener("blur",N)),function(){e.pauseOnFocusLoss&&(window.removeEventListener("focus",b),window.removeEventListener("blur",N))}}),[e.pauseOnFocusLoss]);var C={onMouseDown:T,onTouchStart:T,onMouseUp:y,onTouchEnd:y};return v&&p&&(C.onMouseEnter=N,C.onMouseLeave=b),x&&(C.onClick=function(e){g&&g(e),f.canCloseOnClick&&h()}),{playToast:b,pauseToast:N,isRunning:a,preventExitTransition:c,toastRef:d,eventHandlers:C}}function R(e){var t=e.closeToast,n=e.theme,a=e.ariaLabel,o=void 0===a?"close":a;return l.createElement("button",{className:"Toastify__close-button Toastify__close-button--".concat(n),type:"button",onClick:function(e){e.stopPropagation(),t(e)},"aria-label":o},l.createElement("svg",{"aria-hidden":"true",viewBox:"0 0 14 16"},l.createElement("path",{fillRule:"evenodd",d:"M7.71 8.23l3.75 3.75-1.48 1.48-3.75-3.75-3.75 3.75L1 11.98l3.75-3.75L1 4.48 2.48 3l3.75 3.75L9.98 3l1.48 1.48-3.75 3.75z"})))}function A(e){var t=e.delay,n=e.isRunning,a=e.closeToast,o=e.type,i=void 0===o?"default":o,s=e.hide,r=e.className,c=e.style,u=e.controlledProgress,d=e.progress,v=e.rtl,p=e.isIn,h=e.theme,x=s||u&&0===d,T=(0,m.Z)((0,m.Z)({},c),{},{animationDuration:"".concat(t,"ms"),animationPlayState:n?"running":"paused",opacity:x?0:1});u&&(T.transform="scaleX(".concat(d,")"));var y=g("Toastify__progress-bar",u?"Toastify__progress-bar--controlled":"Toastify__progress-bar--animated","Toastify__progress-bar-theme--".concat(h),"Toastify__progress-bar--".concat(i),{"Toastify__progress-bar--rtl":v}),b=E(r)?r({rtl:v,type:i,defaultClassName:y}):g(y,r);return l.createElement("div",(0,f.Z)({role:"progressbar","aria-hidden":x?"true":"false","aria-label":"notification timer",className:b,style:T},u&&d>=1?"onTransitionEnd":"onAnimationEnd",u&&d<1?null:function(){p&&a()}))}var M=function(e){var t=O(e),n=t.isRunning,a=t.preventExitTransition,o=t.toastRef,i=t.eventHandlers,s=e.closeButton,r=e.children,c=e.autoClose,u=e.onClick,d=e.type,f=e.hideProgressBar,v=e.closeToast,p=e.transition,h=e.position,x=e.className,T=e.style,y=e.bodyClassName,b=e.bodyStyle,N=e.progressClassName,j=e.progressStyle,k=e.updateId,C=e.role,w=e.progress,Z=e.rtl,I=e.toastId,_=e.deleteToast,L=e.isIn,D=e.isLoading,M=e.iconOut,B=e.closeOnClick,P=e.theme,S=g("Toastify__toast","Toastify__toast-theme--".concat(P),"Toastify__toast--".concat(d),{"Toastify__toast--rtl":Z},{"Toastify__toast--close-on-click":B}),z=E(x)?x({rtl:Z,position:h,type:d,defaultClassName:S}):g(S,x),F=!!w||!c,H={closeToast:v,type:d,theme:P},q=null;return!1===s||(q=E(s)?s(H):(0,l.isValidElement)(s)?(0,l.cloneElement)(s,H):R(H)),l.createElement(p,{isIn:L,done:_,position:h,preventExitTransition:a,nodeRef:o},l.createElement("div",(0,m.Z)((0,m.Z)({id:I,onClick:u,className:z},i),{},{style:T,ref:o}),l.createElement("div",(0,m.Z)((0,m.Z)({},L&&{role:C}),{},{className:E(y)?y({type:d}):g("Toastify__toast-body",y),style:b}),null!=M&&l.createElement("div",{className:g("Toastify__toast-icon",{"Toastify--animate-icon Toastify__zoom-enter":!D})},M),l.createElement("div",null,r)),q,l.createElement(A,(0,m.Z)((0,m.Z)({},k&&!F?{key:"pb-".concat(k)}:{}),{},{rtl:Z,theme:P,delay:c,isRunning:n,isIn:L,closeToast:v,hide:f,type:d,style:j,className:N,controlledProgress:F,progress:w||0}))))},B=function(e,t){return void 0===t&&(t=!1),{enter:"Toastify--animate Toastify__".concat(e,"-enter"),exit:"Toastify--animate Toastify__".concat(e,"-exit"),appendPosition:t}},P=k(B("bounce",!0)),S=(k(B("slide",!0)),k(B("zoom")),k(B("flip")),(0,l.forwardRef)((function(e,t){var n=_(e),a=n.getToastToRender,o=n.containerRef,i=n.isToastActive,s=e.className,r=e.style,c=e.rtl,u=e.containerId;function d(e){var t=g("Toastify__toast-container","Toastify__toast-container--".concat(e),{"Toastify__toast-container--rtl":c});return E(s)?s({position:e,rtl:c,defaultClassName:t}):g(t,N(s))}return(0,l.useEffect)((function(){t&&(t.current=o.current)}),[]),l.createElement("div",{ref:o,className:"Toastify",id:u},a((function(e,t){var n=t.length?(0,m.Z)({},r):(0,m.Z)((0,m.Z)({},r),{},{pointerEvents:"none"});return l.createElement("div",{className:d(e),style:n,key:"container-".concat(e)},t.map((function(e,n){var a=e.content,o=e.props;return l.createElement(M,(0,m.Z)((0,m.Z)({},o),{},{isIn:i(o.toastId),style:(0,m.Z)((0,m.Z)({},o.style),{},{"--nth":n+1,"--len":t.length}),key:"toast-".concat(o.key)}),a)})))})))})));S.displayName="ToastContainer",S.defaultProps={position:"top-right",transition:P,autoClose:5e3,closeButton:R,pauseOnHover:!0,pauseOnFocusLoss:!0,closeOnClick:!0,draggable:!0,draggablePercent:80,draggableDirection:"x",role:"alert",theme:"light"};var z,F=new Map,H=[],q=1;function Q(){return""+q++}function V(e){return e&&(b(e.toastId)||y(e.toastId))?e.toastId:Q()}function G(e,t){return F.size>0?w.emit(0,e,t):H.push({content:e,options:t}),t.toastId}function U(e,t){return(0,m.Z)((0,m.Z)({},t),{},{type:t&&t.type||e,toastId:V(t)})}function W(e){return function(t,n){return G(t,U(e,n))}}function Y(e,t){return G(e,U("default",t))}Y.loading=function(e,t){return G(e,U("default",(0,m.Z)({isLoading:!0,autoClose:!1,closeOnClick:!1,closeButton:!1,draggable:!1},t)))},Y.promise=function(e,t,n){var a,o=t.pending,i=t.error,s=t.success;o&&(a=b(o)?Y.loading(o,n):Y.loading(o.render,(0,m.Z)((0,m.Z)({},n),o)));var r={isLoading:null,autoClose:null,closeOnClick:null,closeButton:null,draggable:null,delay:100},l=function(e,t,o){if(null!=t){var i=(0,m.Z)((0,m.Z)((0,m.Z)({type:e},r),n),{},{data:o}),s=b(t)?{render:t}:t;return a?Y.update(a,(0,m.Z)((0,m.Z)({},i),s)):Y(s.render,(0,m.Z)((0,m.Z)({},i),s)),o}Y.dismiss(a)},c=E(e)?e():e;return c.then((function(e){return l("success",s,e)})).catch((function(e){return l("error",i,e)})),c},Y.success=W("success"),Y.info=W("info"),Y.error=W("error"),Y.warning=W("warning"),Y.warn=Y.warning,Y.dark=function(e,t){return G(e,U("default",(0,m.Z)({theme:"dark"},t)))},Y.dismiss=function(e){F.size>0?w.emit(1,e):H=H.filter((function(t){return null!=e&&t.options.toastId!==e}))},Y.clearWaitingQueue=function(e){return void 0===e&&(e={}),w.emit(5,e)},Y.isActive=function(e){var t=!1;return F.forEach((function(n){n.isToastActive&&n.isToastActive(e)&&(t=!0)})),t},Y.update=function(e,t){void 0===t&&(t={}),setTimeout((function(){var n=function(e,t){var n=t.containerId,a=F.get(n||z);return a&&a.getToast(e)}(e,t);if(n){var a=n.props,o=n.content,i=(0,m.Z)((0,m.Z)((0,m.Z)({},a),t),{},{toastId:t.toastId||e,updateId:Q()});i.toastId!==e&&(i.staleId=e);var s=i.render||o;delete i.render,G(s,i)}}),0)},Y.done=function(e){Y.update(e,{progress:1})},Y.onChange=function(e){return w.on(4,e),function(){w.off(4,e)}},Y.POSITION={TOP_LEFT:"top-left",TOP_RIGHT:"top-right",TOP_CENTER:"top-center",BOTTOM_LEFT:"bottom-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_CENTER:"bottom-center"},Y.TYPE={INFO:"info",SUCCESS:"success",WARNING:"warning",ERROR:"error",DEFAULT:"default"},w.on(2,(function(e){z=e.containerId||e,F.set(z,e),H.forEach((function(e){w.emit(0,e.content,e.options)})),H=[]})).on(3,(function(e){F.delete(e.containerId||e),0===F.size&&w.off(0).off(1).off(5)}));var K=n(8594),X=n(184),$=function(){var e,t,n,s=(0,l.useState)(null),c=(0,i.Z)(s,2),u=c[0],f=c[1],m=(0,l.useState)([]),v=(0,i.Z)(m,2),p=v[0],h=v[1],g=(0,l.useState)(!1),x=(0,i.Z)(g,2),T=x[0],y=x[1],b=function(){var e=(0,o.Z)((0,a.Z)().mark((function e(){var t,n,o;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return y(!0),e.next=3,d.getTracks(u);case 3:null!==(t=e.sent)&&void 0!==t&&t.TrackingDetail?null!==(n=t.TrackingDetail[0])&&void 0!==n&&n.TrackingError?(Y.error(null===(o=t.TrackingDetail[0])||void 0===o?void 0:o.TrackingError),h([])):h(null===t||void 0===t?void 0:t.TrackingDetail):(Y.error("No record"),h([])),y(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,X.jsxs)("div",{children:[(0,X.jsx)(K.SW,{isShowLoadding:T}),(0,X.jsx)(S,{}),(0,X.jsx)("div",{className:"bg-blue-900",children:(0,X.jsxs)("div",{className:"xl:flex py-10",children:[(0,X.jsx)("div",{className:"xl:w-6/12 w-fit xl:mx-0 mx-auto xl:mb-0 mb-6",children:(0,X.jsx)("div",{className:"xl:ml-40 mx-auto",children:(0,X.jsx)("div",{className:"px-3 xl:w-28 w-36",children:(0,X.jsx)("img",{src:"/images/logo.svg"})})})}),(0,X.jsx)("div",{className:"xl:w-6/12 xl:mx-0 w-fit mx-auto",children:(0,X.jsxs)("div",{className:"md:flex text-xl w-fit mx-auto",children:[(0,X.jsx)("div",{className:"md:mx-3 mx-0 md:my-0 my-4",children:(0,X.jsx)("input",{placeholder:"Tracking ID",type:"text",className:"border-teal-800 rounded-lg p-3 h-11 md:w-80 w-full",value:u||"",onChange:function(e){return f(e.target.value)}})}),(0,X.jsx)("div",{children:(0,X.jsx)("button",{className:"bg-[#D9E0FB] text-center text-blue-900 border-blue-900 rounded-lg md:w-40 w-full h-11 font-bold text-2xl leading-6",onClick:b,children:"Track"})})]})})]})}),(0,X.jsxs)("div",{className:"lg:flex pb-12",children:[(0,X.jsx)("div",{className:"lg:w-3/12 bg-[#D9D9D9] lg:h-auto h-60"}),(0,X.jsx)("div",{className:r()("lg:w-6/12 bg-white mx-14 my-12",{"h-[750px]":0===p.length,"h-auto":0!==p.length}),children:(0,X.jsxs)("div",{className:r()({"lg:flex":0!==p.length,hidden:0===p.length}),children:[(0,X.jsxs)("div",{className:"lg:w-1/2 w-10/12 lg:mx-0 mx-auto text-black",children:[(0,X.jsxs)("div",{className:"mb-8",children:[(0,X.jsx)("p",{className:"font-semibold text-xl leading-6 mb-3",children:"DELIVERY STATUS:"}),0!==p.length&&(0,X.jsx)("p",{className:"font-semibold text-3xl",children:null===(e=p[p.length-1])||void 0===e?void 0:e.TrackingEventName})]}),(0,X.jsxs)("div",{className:"mb-8",children:[(0,X.jsx)("p",{className:"font-semibold text-xl leading-6 mb-3",children:"DATE:"}),0!==p.length&&(0,X.jsx)("p",{className:"font-semibold text-3xl",children:null===(t=p[p.length-1])||void 0===t?void 0:t.TrackingDate})]}),(0,X.jsxs)("div",{className:"mb-8",children:[(0,X.jsx)("p",{className:"font-semibold text-xl leading-6 mb-3",children:"TRACKING ID:"}),0!==p.length&&(0,X.jsx)("p",{className:"font-semibold text-3xl",children:null===(n=p[p.length-1])||void 0===n?void 0:n.TrackingNumber})]})]}),(0,X.jsx)("div",{className:"lg:w-1/2",children:p&&p.map((function(e,t){return 1!==p.length&&0===t?(0,X.jsxs)("div",{className:"flex pt-7",children:[(0,X.jsx)("div",{className:"w-3/12",children:(0,X.jsx)("div",{className:"h-full w-3 bg-blue-900 rounded-t-2xl mx-auto mt-2 relative",children:(0,X.jsx)("div",{className:"absolute h-2 inset-x-0.5 top-4 bg-white rounded-full"})})}),(0,X.jsx)("div",{className:"w-9/12",children:(0,X.jsxs)("div",{children:[(0,X.jsx)("div",{className:"text-black text-2xl font-bold",children:(null===e||void 0===e?void 0:e.TrackingEventName)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingEventName})}),(0,X.jsxs)("div",{className:"text-[#6B6C6E] text-xl font-normal",children:[(null===e||void 0===e?void 0:e.TrackingLocation)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingLocation}),(null===e||void 0===e?void 0:e.TrackingNotes)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingNotes}),(null===e||void 0===e?void 0:e.TrackingDate)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingDate})]})]})})]},t):1===p.length||t===p.length-1?(0,X.jsxs)("div",{className:"flex",children:[(0,X.jsxs)("div",{className:"w-3/12",children:[(0,X.jsx)("div",{className:"h-8 w-3 bg-blue-900 mx-auto"}),(0,X.jsx)("div",{children:(0,X.jsx)("img",{src:"/images/Group_127.png",className:"mx-auto -my-0.5"})})]}),(0,X.jsx)("div",{className:"w-9/12 mt-7",children:(0,X.jsxs)("div",{children:[(0,X.jsx)("div",{className:"text-black text-2xl font-bold",children:(null===e||void 0===e?void 0:e.TrackingEventName)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingEventName})}),(0,X.jsxs)("div",{className:"text-[#6B6C6E] text-xl font-normal",children:[(null===e||void 0===e?void 0:e.TrackingLocation)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingLocation}),(null===e||void 0===e?void 0:e.TrackingNotes)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingNotes}),(null===e||void 0===e?void 0:e.TrackingDate)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingDate})]})]})})]},t):(0,X.jsxs)("div",{className:"flex",children:[(0,X.jsx)("div",{className:"w-3/12",children:(0,X.jsx)("div",{className:"h-full w-3 bg-blue-900 mx-auto mt-2 relative",children:(0,X.jsx)("div",{className:"absolute h-2 inset-x-0.5 top-9 bg-white rounded-full"})})}),(0,X.jsx)("div",{className:"w-9/12 mt-7",children:(0,X.jsxs)("div",{children:[(0,X.jsx)("div",{className:"text-black text-2xl font-bold",children:(null===e||void 0===e?void 0:e.TrackingEventName)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingEventName})}),(0,X.jsxs)("div",{className:"text-[#6B6C6E] text-xl font-normal",children:[(null===e||void 0===e?void 0:e.TrackingLocation)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingLocation}),(null===e||void 0===e?void 0:e.TrackingNotes)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingNotes}),(null===e||void 0===e?void 0:e.TrackingDate)&&(0,X.jsx)("p",{children:null===e||void 0===e?void 0:e.TrackingDate})]})]})})]},t)}))})]})}),(0,X.jsx)("div",{className:"lg:w-3/12 bg-[#D9D9D9] lg:h-auto h-60"})]})]})}}}]);