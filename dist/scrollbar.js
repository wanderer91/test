!function(n){var o={};function a(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,a),e.l=!0,e.exports}a.m=n,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="",a(a.s=25)}({0:function(t,e,n){"use strict";function o(){return"onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"MozMousePixelScroll"}n.d(e,"a",function(){return o})},25:function(t,e,n){"use strict";n.r(e);function i(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:4;t&&(o&&clearTimeout(o),o=setTimeout(t,e))}var o,a=n(0);function r(e,t){var n,o=Object.keys(e);return Object.getOwnPropertySymbols&&(n=Object.getOwnPropertySymbols(e),t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),o.push.apply(o,n)),o}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach(function(t){c(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function s(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var d=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data={_scrollTop:0,_isDesktop:!0,scrollDir:1,attachedHandlers:[],mouseWheel:!1,touch:!1,touchY:0,prevScrollY:0,scrollHeight:0,currentEvents:"",slowParam:5,page:null,isTouchpad:!1,scrollable:!1},this.initDOM(),this.initData(),this.holdOnTop(),this.data.scrollTop=0,this.launch()}var e,n,o;return e=t,(n=[{key:"calcScrollHeight",value:function(){this.data.scrollHeight=document.getElementById("scrolled-page").offsetHeight-window.innerHeight,this.data.scrollable=0<this.data.scrollHeight}},{key:"initDOM",value:function(){document.head.innerHTML+="<style>.body-ov-hidden{overflow: hidden !important; height: 100vh;}#scrolled-page{transition: transform 0.2s linear;}#scrolled-page.smooth{transition: transform 1s cubic-bezier(1, 0, 0, 1);}</style>",document.body.classList.add("body-ov-hidden"),document.body.innerHTML='<div id="scrolled-page">'.concat(document.body.innerHTML,"</div>")}},{key:"holdOnTop",value:function(){var t=this;window.scrollTo(0,0),i(function(){t.holdOnTop()},100)}},{key:"launch",value:function(){this.data.isDesktop=1100<window.innerWidth}},{key:"initData",value:function(){var t=this,n=this;Object.defineProperty(this.data,"scrollTop",{enumerable:!0,get:function(){return this._scrollTop},set:function(t){var e=t<0||t>this.scrollHeight;t=t<0?0:t>this.scrollHeight?this.scrollHeight:t,this.scrollDir=Math.sign(t-this._scrollTop),this._scrollTop=t,document.getElementById("scrolled-page").style.transform="translateY(".concat(-this._scrollTop,"px)"),e||window.dispatchEvent(n.createTranslatePageEvent(this._scrollTop))}}),Object.defineProperty(this.data,"isDesktop",{enumerable:!0,get:function(){return this._isDesktop},set:function(t){this._isDesktop=t,n.data.currentEvents&&n.detachEvents(),n.data.currentEvents="".concat(t?"desktop":"touch"),n.attachEvents()}}),window.addEventListener("resize",function(){i(function(){t.data.isDesktop=1100<window.innerWidth},50)}),window._getScrollTop=function(){return t.data.scrollTop},this.calcScrollHeight()}},{key:"createTranslatePageEvent",value:function(t){return new CustomEvent("translatePage",{detail:{scrollTop:t}})}},{key:"detachEvents",value:function(){this.data.attachedHandlers.length&&(this.data.attachedHandlers.forEach(function(t){t.target.removeEventListener(t.event,t.handler)}),this.data.attachedHandlers.splice(0))}},{key:"attachEvents",value:function(){var n=this;t.eventHandlers[this.data.currentEvents].forEach(function(t){var e=t.handler.bind(n);t.options?t.target.addEventListener(t.event,e,t.options):t.target.addEventListener(t.event,e),n.data.attachedHandlers.push(l(l({},t),{},{handler:e}))});var o=this;window.addEventListener("translatePageTriggered",function(t){var e=document.getElementById("scrolled-page");e.classList.add("smooth"),o.data.scrollTop=t.detail.scrollTop,setTimeout(function(){e.classList.remove("smooth")},1e3)})}},{key:"scrollDecay",value:function(t,e,n){var o=this,a=1<arguments.length&&void 0!==e?e:30,r=2<arguments.length&&void 0!==n?n:0;if(t=t||1e3,a<0||t<0)return this.data.isTouchpad=!1,void(this.data.mouseWheel=!1);this.data.scrollTop+=this.data.scrollDir*a/this.data.slowParam,this.data.scrollTop<0||this.data.scrollTop>this.data.scrollHeight||i(function(){o.scrollDecay(t-50,a-r,++r)},50)}},{key:"handleWheelEvent",value:function(t){this.data.scrollTop+=t.deltaY/this.data.slowParam}}])&&s(e.prototype,n),o&&s(e,o),t}();c(d,"eventHandlers",{desktop:[{event:Object(a.a)(),target:document,options:{passive:!1},handler:function(t){var e=this;t.preventDefault(),this.data.isTouchpad=120!==Math.abs(t.wheelDeltaY),this.calcScrollHeight(),this.data.scrollable&&(this.handleWheelEvent(t),this.data.mouseWheel=!0,i(function(){e.data.isTouchpad||e.scrollDecay(2e3,150)},10))}}],touch:[{event:"touchstart",target:document,handler:function(t){this.calcScrollHeight(),this.data.scrollable&&(this.data.touch=!0,this.data.touchY=t.changedTouches[0].pageY,this.data.prevScrollY=this.data.scrollTop)}},{event:"touchmove",target:document,handler:function(t){var e;this.data.touch&&(e=t.changedTouches[0].pageY-this.data.touchY,this.data.scrollTop=this.data.prevScrollY-e,this.data.scrollDir=Math.sign(-e))}},{event:"touchend",target:document,handler:function(){this.data.touch=!1,this.scrollDecay(1500,150)}}]}),document.addEventListener("DOMContentLoaded",function(){new d})}});