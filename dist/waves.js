!function(n){var a={};function r(t){if(a[t])return a[t].exports;var e=a[t]={i:t,l:!1,exports:{}};return n[t].call(e.exports,e,e.exports,r),e.l=!0,e.exports}r.m=n,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=5)}({5:function(t,e,n){"use strict";n.r(e);n(6);var c,i,u,d,s="";function f(t){var e,n=t.id,a=t.waveWidth,r=t.waveHeight,o=t.rotateDir;return".waves__item#".concat(n," {")+"width: ".concat(r,"px;")+"height: ".concat(.9*a,"px;")+"z-index: ".concat(c-i,";")+"right: ".concat(-d/c+d/c*i,"px;")+"bottom: ".concat((u?-.75:-.85)*r,"px;")+"border-radius: ".concat((e=a,["".concat((.4*Math.random()*e+.6*e)/e*100,"%"),"".concat((.4*Math.random()*e+.6*e)/e*100,"%"),"".concat((.4*Math.random()*e+.6*e)/e*100,"%"),"".concat((.4*Math.random()*e+.6*e)/e*100,"%")].join(" ")),";")+"transform: rotate(0deg);"+"animation-name: wave_".concat(n,";")+"animation-duration: ".concat(l,";")+"animation-timing-function: linear;animation-iteration-count: infinite;"+"} @keyframes wave_".concat(n," {")+"0% {transform: rotate(0deg)}"+"50% {transform: rotate(".concat(180*o,"deg)}")+"100% {transform: rotate(".concat(360*o,"deg)}}")}function a(){c=i=0,u=window.innerWidth<640,d=p.offsetWidth,p.innerHTML="";var t=[{perspective:"front",count:p.dataset.frontWavesCount},{perspective:"back",count:p.dataset.backWavesCount}];t.forEach(function(t){var e=JSON.parse(t.count);if("Object"===e.constructor.name)for(var n in e){if(!(window.innerWidth>=parseFloat(n)))break;t.count=parseInt(e[n]),c+=parseInt(e[n])}else t.count=parseInt(e),c+=parseInt(e)}),t.forEach(function(t,e){for(var n=0;n<t.count;n++){var a=document.createElement("div"),r=Math.random()<.5?-1:1,o="".concat(t.perspective).concat(e+1,"-wave").concat(n+1);a.className="waves__item waves__item_".concat(t.perspective),a.setAttribute("id",o),p.appendChild(a);var c=d*v/100;s+=f({id:o,waveWidth:c,waveHeight:.9*c,rotateDir:r}),i++}}),p.innerHTML+="<style>".concat(s,"</style>")}var p=document.querySelector(".waves"),v=parseInt(p.dataset.wavePercWidth),l=p.dataset.animationDuration;a(),window.addEventListener("resize",a)},6:function(t,e,n){}});