!function(n){var o={};function i(t){if(o[t])return o[t].exports;var e=o[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,i),e.l=!0,e.exports}i.m=n,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=20)}({0:function(t,e,n){"use strict";function o(){return"onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"MozMousePixelScroll"}n.d(e,"a",function(){return o})},14:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);n(14);var i=n(0),r=function(n){var o={};return n&&(1<arguments.length&&void 0!==arguments[1]?arguments[1]:[]).forEach(function(t){var e=t.name.replace(/([A-Z])/g,"-$1");o[t.name]=n.dataset[t.name]?n.dataset[t.name]:n.getAttribute(t.name)||n.getAttribute(e)||n.getAttribute("data-".concat(e))||t.default}),o};function l(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o)}}function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var s=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.data={_scrollTop:0,_isDesktop:!0,scrollDir:1,event:Object(i.a)()},this.initData(),this.options=r(this.el,t.defaultOptions),this.data.scrollTop=window.scrollY,this.data.isDesktop=1100<window.innerWidth,this.attachedHandlers=[],this.calcScrollHeight(),this.initScrollBar()}var e,n,o;return e=t,(n=[{key:"calcScrollHeight",value:function(){this.data.scrollHeight=document.body.scrollHeight-window.innerHeight}},{key:"initData",value:function(){var t=this;Object.defineProperty(this.data,"scrollTop",{enumerable:!0,get:function(){return this._scrollTop},set:function(t){t=t<0?0:t>this.scrollHeight?this.scrollHeight:t,this.scrollDir=Math.sign(t-this._scrollTop),this._scrollTop=t,window.scrollTo({top:this._scrollTop})}}),Object.defineProperty(this.data,"isDesktop",{enumerable:!0,get:function(){return this._isDesktop},set:function(t){this.eventStack="".concat(t?"desktop":"touch"),this._isDesktop=t}}),window.addEventListener("resize",function(){t.data.isDesktop=1100<window.innerWidth})}},{key:"initScrollBar",value:function(){document.head.innerHTML+="<style>.body-ov-hidden{overflow: hidden !important;}</style>",document.body.classList.add("body-ov-hidden")}},{key:"initSlider",value:function(){this.calcScrollHeight(),this.calcSliderPosition()}},{key:"setScrollBarOptions",value:function(){this.el.style.backgroundColor=this.options.lineColor,this.el.style.setProperty("--width","".concat(this.options.width,"px")),document.body.style.marginRight="".concat(this.options.width,"px"),this.slider.style.backgroundColor=this.options.sliderColor,this.progress.style.backgroundColor=this.options.indicatorColor}},{key:"attachEvents",value:function(){var e=this;this.mouseWheel=!1,document.addEventListener(this.event,function(t){e.handleWheelEvent(t),e.mouseWheel=!0})}},{key:"attachScrollbarEvents",value:function(){var e=this;window.addEventListener("scroll",function(){e.initSlider()}),window.addEventListener("resize",this.initSlider.bind(this)),this.el.addEventListener("click",function(t){t.target.closest(".scrollbar__slider")||e.clickedTarget||(e.data.scrollTop=t.offsetY/t.target.offsetHeight*e.data.scrollHeight)}),this.slider.addEventListener("mousedown",function(t){[2].includes(t.button)||e.sliderDragStart(t)}),document.addEventListener("mousemove",function(t){e.sliderDragMove(t)}),document.addEventListener("mouseup",function(t){e.sliderDragEnd(t)})}},{key:"attachTouchEvents",value:function(){var n=this;document.addEventListener("touchstart",function(t){n.touch=!0,n.touchY=t.changedTouches[0].pageY,n.prevScrollY=n.data.scrollTop}),document.addEventListener("touchmove",function(t){var e;n.touch&&(e=t.changedTouches[0].pageY-n.touchY,n.data.scrollTop=n.prevScrollY+e)}),document.addEventListener("touchend",function(t){n.touch=!1,n.scrollDecay()})}},{key:"scrollDecay",value:function(t,e,n){var o=this,i=0<arguments.length&&void 0!==t?t:1e3,r=1<arguments.length&&void 0!==e?e:30,l=2<arguments.length&&void 0!==n?n:0;r<0?this.mouseWheel=!1:(this.data.scrollTop+=this.data.scrollDir*r/this.options.slowParam,0<i&&setTimeout(function(){o.scrollDecay(i-100,r-l,++l)},100))}},{key:"sliderDragStart",value:function(t){this.clickedTarget=t.target.closest(".scrollbar__slider"),this.sliderClicked=!0}},{key:"sliderDragMove",value:function(t){this.sliderClicked&&(this.data.scrollTop=t.clientY/this.el.offsetHeight*this.data.scrollHeight)}},{key:"sliderDragEnd",value:function(){this.clickedTarget&&(this.sliderClicked=!1,this.clickedTarget=null)}},{key:"handleWheelEvent",value:function(t){this.data.scrollTop+=t.deltaY/this.options.slowParam,this.scrollDecay()}},{key:"calcSliderPosition",value:function(){var t=window.scrollY/this.data.scrollHeight,e=(this.el.offsetHeight-this.slider.offsetHeight)*t,n=this.slider.offsetHeight*t;this.slider.style.top="".concat(e,"px"),this.progress.style.height="".concat(n,"px")}}])&&l(e.prototype,n),o&&l(e,o),t}();o(s,"defaultOptions",[{name:"indicatorColor",default:"transparent"},{name:"lineColor",default:"transparent"},{name:"sliderColor",default:"#000000"},{name:"slowParam",default:1},{name:"width",default:10},{name:"decay",default:10}]),o(s,"eventHandlers",{desktop:[],touch:[]}),document.addEventListener("DOMContentLoaded",function(){new s})}});