!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";n.r(t);n(2);if(document.documentElement.clientWidth<768){document.querySelector(".brands__container").classList.add("swiper"),document.querySelector(".brands__list").classList.add("swiper-wrapper");for(var r=document.querySelectorAll(".brands__item"),o=0;o<r.length;o++)r[o].classList.add("swiper-slide");swiper=new Swiper(".swiper",{sliderPerView:"auto",spaceBetween:16,mousewheel:!0,pagination:{el:".swiper-pagination",clickable:!0}})}var i=document.querySelector(".brands__button");i.addEventListener("click",(function(){l(".brands__item"),c(i,"Показать все","Скрыть")}));var u=document.querySelector(".about__button");function c(e,t,n){e.classList.toggle("button-show"),e.classList.contains("button-show")?e.textContent=t:e.textContent=n}function l(e){for(var t=document.querySelectorAll(e),n=0;n<t.length;n++)t[n].classList.toggle("open")}u.addEventListener("click",(function(){l(".about__text-item"),c(u,"Читать далее!","Скрыть")}))},function(e,t,n){}]);
//# sourceMappingURL=bundle.js.map