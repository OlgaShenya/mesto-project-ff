/*! For license information please see main.js.LICENSE.txt */
(()=>{"use strict";var t=document.querySelector("#card-template").content,e=function(e,r,o,i,a){var c=t.querySelector(".places__item").cloneNode(!0),u=cardElement.querySelector(".card__delete-button"),l=cardElement.querySelector(".card__like-button"),s=cardElement.querySelector(".card__title");return c.src=e.link,c.alt=e.name,cardElement.id=e._id,s.textContent=e.name,n(cardElement,e.likes.length),e.owner._id===r?u.addEventListener("click",(function(){return o(cardElement)})):u.remove(),l.addEventListener("click",(function(){return i(cardElement)})),c.addEventListener("click",(function(){return a(e)})),cardElement},r=function(t){t.querySelector(".card__like-button").classList.toggle("card__like-button_is-active")},n=function(t,e){t.querySelector(".card__like-counter").textContent=e},o=function(t){"Escape"===t.key&&a(document.querySelector(".popup_is-opened"))},i=function(t){t.classList.add("popup_is-opened"),window.addEventListener("keydown",o)},a=function(t){window.removeEventListener("keydown",o),t.classList.remove("popup_is-opened")},c=["formSelector"];var u=function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.remove(r.inputErrorClass),n.classList.remove(r.errorClass),n.textContent=""},l=function(t,e,r){!function(t){return t.some((function(t){return!t.validity.valid}))}(t)?(e.disabled=!1,e.classList.remove(r.inactiveButtonClass)):(e.disabled=!0,e.classList.add(r.inactiveButtonClass))},s=function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(o){u(t,o,e),l(r,n,e)}))},f={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"},p={baseUrl:"https://nomoreparties.co/v1/wff-cohort-7",headers:{authorization:"5a1f7514-cdad-4b42-b7e9-bfa3945e0f19","Content-Type":"application/json"}};function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(){h=function(){return e};var t,e={},r=Object.prototype,n=r.hasOwnProperty,o=Object.defineProperty||function(t,e,r){t[e]=r.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",u=i.toStringTag||"@@toStringTag";function l(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new A(n||[]);return o(a,"_invoke",{value:O(t,r,c)}),a}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}e.wrap=s;var p="suspendedStart",y="suspendedYield",v="executing",m="completed",_={};function b(){}function g(){}function w(){}var S={};l(S,a,(function(){return this}));var E=Object.getPrototypeOf,L=E&&E(E(T([])));L&&L!==r&&n.call(L,a)&&(S=L);var x=w.prototype=b.prototype=Object.create(S);function k(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function q(t,e){function r(o,i,a,c){var u=f(t[o],t,i);if("throw"!==u.type){var l=u.arg,s=l.value;return s&&"object"==d(s)&&n.call(s,"__await")?e.resolve(s.__await).then((function(t){r("next",t,a,c)}),(function(t){r("throw",t,a,c)})):e.resolve(s).then((function(t){l.value=t,a(l)}),(function(t){return r("throw",t,a,c)}))}c(u.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new e((function(e,o){r(t,n,e,o)}))}return i=i?i.then(o,o):o()}})}function O(e,r,n){var o=p;return function(i,a){if(o===v)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var c=n.delegate;if(c){var u=C(c,n);if(u){if(u===_)continue;return u}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===p)throw o=m,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=v;var l=f(e,r,n);if("normal"===l.type){if(o=n.done?m:y,l.arg===_)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(o=m,n.method="throw",n.arg=l.arg)}}}function C(e,r){var n=r.method,o=e.iterator[n];if(o===t)return r.delegate=null,"throw"===n&&e.iterator.return&&(r.method="return",r.arg=t,C(e,r),"throw"===r.method)||"return"!==n&&(r.method="throw",r.arg=new TypeError("The iterator does not provide a '"+n+"' method")),_;var i=f(o,e.iterator,r.arg);if("throw"===i.type)return r.method="throw",r.arg=i.arg,r.delegate=null,_;var a=i.arg;return a?a.done?(r[e.resultName]=a.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,_):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,_)}function j(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function P(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function T(e){if(e||""===e){var r=e[a];if(r)return r.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function r(){for(;++o<e.length;)if(n.call(e,o))return r.value=e[o],r.done=!1,r;return r.value=t,r.done=!0,r};return i.next=i}}throw new TypeError(d(e)+" is not iterable")}return g.prototype=w,o(x,"constructor",{value:w,configurable:!0}),o(w,"constructor",{value:g,configurable:!0}),g.displayName=l(w,u,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,w):(t.__proto__=w,l(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},e.awrap=function(t){return{__await:t}},k(q.prototype),l(q.prototype,c,(function(){return this})),e.AsyncIterator=q,e.async=function(t,r,n,o,i){void 0===i&&(i=Promise);var a=new q(s(t,r,n,o),i);return e.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},k(x),l(x,u,"Generator"),l(x,a,(function(){return this})),l(x,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},e.values=T,A.prototype={constructor:A,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function o(n,o){return c.type="throw",c.arg=e,r.next=n,o&&(r.method="next",r.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),l=n.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,_):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),_},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),P(r),_}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;P(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),_}},e}function y(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function v(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,c,"next",t)}function c(t){y(i,n,o,a,c,"throw",t)}a(void 0)}))}}var m=function(t){return t.ok?t.json():Promise.reject("Request failed. Status: ".concat(t.status))},_=function(){var t=v(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p.baseUrl,"/cards"),{headers:p.headers}).then(m));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=v(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p.baseUrl,"/users/me"),{headers:p.headers}).then((function(t){return t.json()})));case 1:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),g=function(){var t=v(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:p.headers}).then(m));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=v(h().mark((function t(e,r){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p.baseUrl,"/cards/likes/").concat(e),{method:r?"DELETE":"PUT",headers:p.headers}).then(m));case 1:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),S=function(){var t=v(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p.baseUrl,"/users/me"),{method:"PATCH",headers:p.headers,body:JSON.stringify(e)}).then(m));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),E=function(){var t=v(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:p.headers,body:JSON.stringify(e)}).then(m));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),L=function(){var t=v(h().mark((function t(e){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",fetch("".concat(p.baseUrl,"/cards"),{method:"POST",headers:p.headers,body:JSON.stringify(e)}).then(m));case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(t){t.textContent="Сохранение..."},k=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранить";t.textContent=e};function q(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var O=document.querySelector(".places__list"),C=document.querySelector(".profile__edit-button"),j=document.querySelector(".profile__add-button"),P=document.querySelector(".popup_type_edit"),A=document.querySelector(".popup_type_new-card"),T=document.querySelector(".popup_type_image"),N=document.querySelector(".popup__image"),U=document.querySelector("[name='edit-profile']"),I=document.querySelector("[name='new-place']"),G=document.querySelector(".popup__input_type_card-name"),B=document.querySelector(".popup__input_type_url"),D=document.querySelector(".popup__caption"),F=document.querySelector(".profile__title"),M=document.querySelector(".profile__description"),J=document.querySelector(".profile__image"),H=document.querySelector(".popup__input_type_name"),V=document.querySelector(".popup__input_type_description"),Y=document.querySelector(".popup_type_profile-image"),z=document.querySelector(".profile__image-overlay"),R=document.querySelector(".popup__input_type_avatar_url"),$=document.querySelector("[name='avatar']"),K=function(t){return console.log(t)};window.addEventListener("load",(function(){var t=b(),n=_();Promise.all([n,t]).then((function(t){var n,o,i=(o=2,function(t){if(Array.isArray(t))return t}(n=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,a,c=[],u=!0,l=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;u=!1}else for(;!(u=(n=i.call(r)).done)&&(c.push(n.value),c.length!==e);u=!0);}catch(t){l=!0,o=t}finally{try{if(!u&&null!=r.return&&(a=r.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(n,o)||function(t,e){if(t){if("string"==typeof t)return q(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?q(t,e):void 0}}(n,o)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=i[0],c=i[1];a.forEach((function(t){var n=e(t,c._id,W,X);t.likes.find((function(t){return t._id===c._id}))&&r(n),O.append(n)})),F.textContent=c.name,M.textContent=c.about,J.style.backgroundImage="url(".concat(c.avatar,")")})).catch(K)}));var Q=function(t){g(t.id).then((function(){t.remove()})).catch(K)},W=function(t){w(t.id,function(t){return Boolean(t.querySelector(".card__like-button_is-active"))}(t)).then((function(e){n(t,e.likes.length),r(t)})).catch(K)},X=function(t){N.src=t.link,N.alt=t.name,D.textContent=t.name,i(T)},Z=function(t){(t.target.classList.contains("popup__close")||t.target.classList.contains("popup"))&&a(t.currentTarget)};C.addEventListener("click",(function(){H.value=F.textContent,V.value=M.textContent,s(U,f),i(P)})),j.addEventListener("click",(function(){I.reset(),s(I,f),i(A)})),z.addEventListener("click",(function(){s($,f),$.reset(),i(Y)})),P.addEventListener("click",Z),A.addEventListener("click",Z),T.addEventListener("click",Z),Y.addEventListener("click",Z),U.addEventListener("submit",(function(t){t.preventDefault(),x(t.submitter),S({name:H.value,about:V.value}).then((function(t){F.textContent=t.name,M.textContent=t.about})).catch(K).finally((function(){k(t.submitter),a(P)}))})),$.addEventListener("submit",(function(t){t.preventDefault(),x(t.submitter),E({avatar:R.value}).then((function(t){J.style.backgroundImage="url(".concat(t.avatar,")")})).catch(K).finally((function(){k(t.submitter),a(Y)}))})),I.addEventListener("submit",(function(t){t.preventDefault(),x(t.submitter),L({name:G.value,link:B.value}).then((function(t){var r=e(t,t.owner._id,Q,W,X);O.prepend(r)})).catch(K).finally((function(){k(t.submitter,"Создать"),a(A)}))})),function(t){var e=t.formSelector,r=function(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}(t,c);Array.from(document.querySelectorAll(e)).forEach((function(t){!function(t,e){var r=Array.from(t.querySelectorAll(e.inputSelector)),n=t.querySelector(e.submitButtonSelector);r.forEach((function(o){o.addEventListener("input",(function(){!function(t,e,r){e.validity.patternMismatch?e.setCustomValidity(e.dataset.errorMessage):e.setCustomValidity(""),e.validity.valid?u(t,e,r):function(t,e,r){var n=t.querySelector(".".concat(e.id,"-error"));e.classList.add(r.inputErrorClass),n.textContent=e.validationMessage,n.classList.add(r.errorClass)}(t,e,r)}(t,o,e),l(r,n,e)}))}))}(t,r)}))}(f)})();