!function(o){var n={};function i(e){if(n[e])return n[e].exports;var t=n[e]={i:e,l:!1,exports:{}};return o[e].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=o,i.c=n,i.d=function(e,t,o){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(o,n,function(e){return t[e]}.bind(null,n));return o},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=13)}({13:function(e,t,o){"use strict";o.r(t);o(14);function i(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var n,r,l,s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),document.body.style.overflow="hidden",this.event="onwheel"in document?"wheel":"onmousewheel"in document?"mousewheel":"MozMousePixelScroll",this.data={_scrollTop:0},this.initData(),this.attachEvents(),this.initScrollBar(),this.data.scrollTop=window.scrollY}var t,o,n;return t=e,(o=[{key:"initData",value:function(){Object.defineProperty(this.data,"scrollTop",{enumerable:!0,get:function(){return this._scrollTop},set:function(e){e<0?e=0:e>document.body.scrollHeight-window.innerHeight&&(e=document.body.scrollHeight-window.innerHeight),this._scrollTop=e,window.scrollTo(0,this._scrollTop)}})}},{key:"getOptions",value:function(){var t=this;this.options=[],e.defaultOptions.forEach(function(e){t.options[e.name]=t.el.dataset[e.name]||e.default})}},{key:"initScrollBar",value:function(){this.el=document.querySelector(".scrollbar"),this.el&&(this.getOptions(),this.slider=this.el.querySelector(".scrollbar__slider"),this.progress=this.slider.querySelector(".scrollbar__fulfil-progress"),this.setOptions(),this.attachScrollbarEvents())}},{key:"setOptions",value:function(){this.el.style.backgroundColor=this.options.lineColor,this.el.style.setProperty("--width","".concat(this.options.width,"px")),this.slider.style.backgroundColor=this.options.sliderColor,this.progress.style.backgroundColor=this.options.indicatorColor}},{key:"attachEvents",value:function(){var t=this;document.addEventListener(this.event,function(e){t.handleWheelEvent(e)})}},{key:"attachScrollbarEvents",value:function(){var t=this;window.addEventListener("scroll",function(){t.calcSliderPosition()}),window.addEventListener("resize",function(){t.calcSliderPosition()}),this.el.addEventListener("click",function(e){e.target.closest(".scrollbar__slider")||t.clickedTarget||(t.data.scrollTop=e.offsetY/e.target.offsetHeight*document.body.scrollHeight)}),this.slider.addEventListener("mousedown",function(e){e.stopImmediatePropagation(),t.clickedTarget=e.target.closest(".scrollbar__slider"),t.targetOffsetY=e.offsetY,t.sliderClicked=!0}),document.addEventListener("mousemove",function(e){t.sliderClicked&&(t.data.scrollTop=e.clientY/t.el.offsetHeight*document.body.scrollHeight)}),document.addEventListener("mouseup",function(e){t.clickedTarget&&(e.stopImmediatePropagation(),t.sliderClicked=!1,t.targetOffsetY=0,t.clickedTarget=null)})}},{key:"handleWheelEvent",value:function(e){this.data.scrollTop+=e.deltaY/this.options.slowParam}},{key:"calcSliderPosition",value:function(){var e=window.scrollY/(document.body.scrollHeight-window.innerHeight),t=(this.el.offsetHeight-this.slider.offsetHeight)*e,o=this.slider.offsetHeight*e;this.slider.style.top="".concat(t,"px"),this.progress.style.height="".concat(o,"px")}}])&&i(t.prototype,o),n&&i(t,n),e}();l=[{name:"indicatorColor",default:"transparent"},{name:"lineColor",default:"transparent"},{name:"sliderColor",default:"#000000"},{name:"slowParam",default:1},{name:"width",default:10}],(r="defaultOptions")in(n=s)?Object.defineProperty(n,r,{value:l,enumerable:!0,configurable:!0,writable:!0}):n[r]=l,new s},14:function(e,t,o){}});