!function(n){var r={};function a(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,a),t.l=!0,t.exports}a.m=n,a.c=r,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=12)}({12:function(e,t,n){"use strict";n.r(t);n(13);document.addEventListener("DOMContentLoaded",function(){var t,r,e=[{label:"Главная",href:"#top"},{label:"Кейсы",href:"#cases"},{label:"Контакты",href:"#contacts"},{label:"Лаборатория",href:"#lab"}],n=function(){r=t.querySelector(".navbar__nav"),e.forEach(function(e){var t=document.createElement("li"),n=document.createElement("a");t.classList.add("navbar__nav-item"),n.href=e.href,n.textContent=e.label,n.classList.add("navbar__nav-link","link"),n.addEventListener("mouseover",function(e){e.target.closest(".link").classList.add("shaking-content")}),n.addEventListener("mouseout",function(e){e.target.closest(".link").classList.remove("shaking-content")}),n.addEventListener("click",function(e){e.preventDefault();var t=e.target.closest(".link").href.match(/#(.*)$/)[1],n=document.getElementById(t);n&&window.dispatchEvent(new CustomEvent("translatePageTriggered",{detail:{scrollTop:window._getScrollTop()+n.getBoundingClientRect().top}}))}),t.appendChild(n),r.appendChild(t)})};(t=document.createElement("nav")).classList.add("navbar"),document.body.appendChild(t),t.innerHTML='<div class="container"><div class="navbar__content"><div class="navbar__logo"></div><ul class="navbar__nav"></ul></div></div>',window.addEventListener("translatePage",function(e){70<e.detail.scrollTop?t.style.height="60px":t.style.height="70px"}),n()})},13:function(e,t,n){}});