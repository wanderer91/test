!function(n){var o={};function r(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=o,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=15)}({0:function(t,e,n){"use strict";function o(){return"onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"MozMousePixelScroll"}n.d(e,"a",function(){return o})},15:function(t,e,n){"use strict";n.r(e);var o=n(0);function r(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function i(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var l=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data={_scrollTop:0,_isDesktop:!0,scrollDir:1,attachedHandlers:[],mouseWheel:!1,touch:!1,touchY:0,prevScrollY:0,scrollHeight:0,currentEvents:"",slowParam:5},this.initData(),this.data.scrollTop=window.scrollY,this.launch()}var e,n,o;return e=t,(n=[{key:"calcScrollHeight",value:function(){this.data.scrollHeight=document.body.scrollHeight-window.innerHeight}},{key:"launch",value:function(){this.data.isDesktop=1100<window.innerWidth,document.head.innerHTML+="<style>.body-ov-hidden{overflow: hidden !important;}</style>",document.body.classList.add("body-ov-hidden")}},{key:"initData",value:function(){var t,e=this,n=this;Object.defineProperty(this.data,"scrollTop",{enumerable:!0,get:function(){return this._scrollTop},set:function(t){t=t<0?0:t>this.scrollHeight?this.scrollHeight:t,this.scrollDir=Math.sign(t-this._scrollTop),this._scrollTop=t,window.scrollTo({top:this._scrollTop})}}),Object.defineProperty(this.data,"isDesktop",{enumerable:!0,get:function(){return this._isDesktop},set:function(t){this._isDesktop=t,n.data.currentEvents&&n.detachEvents(),n.data.currentEvents="".concat(t?"desktop":"touch"),n.attachEvents()}}),window.addEventListener("resize",function(){t&&clearTimeout(t),t=setTimeout(function(){e.data.isDesktop=1100<window.innerWidth},50)})}},{key:"detachEvents",value:function(){this.data.attachedHandlers.length&&(this.data.attachedHandlers.forEach(function(t){t.target.removeEventListener(t.event,t.handler)}),this.data.attachedHandlers.splice(0))}},{key:"attachEvents",value:function(){var n=this;t.eventHandlers[this.data.currentEvents].forEach(function(t){var e=t.handler.bind(n);t.target.addEventListener(t.event,e),n.data.attachedHandlers.push(a(a({},t),{},{handler:e}))})}},{key:"scrollDecay",value:function(t,e,n){var o=this,r=1<arguments.length&&void 0!==e?e:30,a=2<arguments.length&&void 0!==n?n:0;t=t||1e3,r<0||t<0?this.data.mouseWheel=!1:(this.data.scrollTop+=this.data.scrollDir*r/this.data.slowParam,setTimeout(function(){o.scrollDecay(t-50,r-a,++a)},50))}},{key:"handleWheelEvent",value:function(t){this.data.scrollTop+=t.deltaY/this.data.slowParam,120!==Math.abs(t.wheelDeltaY)||this.scrollDecay()}}])&&i(e.prototype,n),o&&i(e,o),t}();c(l,"eventHandlers",{desktop:[{event:Object(o.a)(),target:document,handler:function(t){this.calcScrollHeight(),this.handleWheelEvent(t),this.data.mouseWheel=!0}},{event:"scroll",target:window,handler:function(){this.data.mouseWheel||(this.data.scrollTop=window.scrollY)}}],touch:[{event:"touchstart",target:document,handler:function(t){this.calcScrollHeight(),this.data.touch=!0,this.data.touchY=t.changedTouches[0].pageY}},{event:"touchmove",target:document,handler:function(t){var e;this.data.touch&&(e=t.changedTouches[0].pageY-this.data.touchY,this.data.scrollTop=this.data._scrollTop-e,this.data.prevScrollY=this.data.scrollTop,this.data.scrollDir=Math.sign(-e))}},{event:"touchend",target:document,handler:function(){this.data.touch=!1,this.scrollDecay(2e3,50)}}]}),document.addEventListener("DOMContentLoaded",function(){new l})}});