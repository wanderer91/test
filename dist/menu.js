!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=6)}({6:function(e,t,n){"use strict";n.r(t);n(7);document.addEventListener("DOMContentLoaded",function(){function e(){o.classList.remove("slideDwn")}var t,n,o=document.querySelector(".t461"),r=o.offsetHeight;window.addEventListener("scroll",function(){n=(window.scrollY||window.pageYOffset)<=5,o.classList.add("slideDwn"),t&&clearTimeout(t),n?o.classList.remove("t461_cyan"):(t=setTimeout(e,600),o.classList.add("t461_cyan"))}),window.addEventListener("mousemove",function(e){n=(window.scrollY||window.pageYOffset)<=5,e.clientY<=r?o.classList.add("slideDwn"):n||o.classList.remove("slideDwn")}),o.classList.add("slideDwn"),$('div[data-record-type="257"]').hover(function(){o.addClass("slideDwn"),clearTimeout(t)},function(){t=setTimeout(e,600)})})},7:function(e,t,n){}});