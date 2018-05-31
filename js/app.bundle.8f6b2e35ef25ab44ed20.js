!function(e){function n(n){for(var o,c,a=n[0],l=n[1],i=n[2],d=0,u=[];d<a.length;d++)c=a[d],t[c]&&u.push(t[c][0]),t[c]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(e[o]=l[o]);for(f&&f(n);u.length;)u.shift()();return s.push.apply(s,i||[]),r()}function r(){for(var e,n=0;n<s.length;n++){for(var r=s[n],o=!0,a=1;a<r.length;a++){var l=r[a];0!==t[l]&&(o=!1)}o&&(s.splice(n--,1),e=c(c.s=r[0]))}return e}var o={},t={app:0},s=[];function c(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=o,c.d=function(e,n,r){c.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,n){if(1&n&&(e=c(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)c.d(r,o,function(n){return e[n]}.bind(null,o));return r},c.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(n,"a",n),n},c.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},c.p="/";var a=window.webpackJsonp=window.webpackJsonp||[],l=a.push.bind(a);a.push=n,a=a.slice();for(var i=0;i<a.length;i++)n(a[i]);var f=l;s.push(["./src/index.js","common"]),r()}({"./node_modules/css-loader/index.js!./src/style.css":
/*!*************************************************!*\
  !*** ./node_modules/css-loader!./src/style.css ***!
  \*************************************************/
/*! no static exports found */function(e,n,r){var o=r(/*! ../node_modules/css-loader/lib/url/escape.js */"./node_modules/css-loader/lib/url/escape.js");(e.exports=r(/*! ../node_modules/css-loader/lib/css-base.js */"./node_modules/css-loader/lib/css-base.js")(!1)).push([e.i,"html,body{\r\n    background-color: red;\r\n}\r\n\r\n@font-face {\r\n    font-family: 'Myfont';\r\n    src: url("+o(r(/*! ./my-front.woff */"./src/my-front.woff"))+") format('woff2'),\r\n         url("+o(r(/*! ./my-front.woff2 */"./src/my-front.woff2"))+") format('woff');\r\n    font-weight: 600;\r\n    font-style: normal;\r\n}\r\n.purple{\r\n    background-color: red;\r\n   /* background: url(\"./company.jpg\");*/\r\n    font-family:'Myfont';\r\n    font-color:white;\r\n}",""])},"./src/company.jpg":
/*!*************************!*\
  !*** ./src/company.jpg ***!
  \*************************/
/*! no static exports found */function(e,n,r){e.exports=r.p+"img/5b1e3a536c7bb0df157fa9963dd303a0.jpg"},"./src/data.xml":
/*!**********************!*\
  !*** ./src/data.xml ***!
  \**********************/
/*! no static exports found */function(e,n){e.exports={node:{to:["Mary"],from:["Join"],handing:["Reminder"],body:["on Tuesday"]}}},"./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */function(e,n,r){"use strict";r.r(n);var o=r(/*! lodash */"./node_modules/lodash/lodash.js"),t=r.n(o),s=(r(/*! ./style.css */"./src/style.css"),r(/*! ./company.jpg */"./src/company.jpg")),c=r.n(s),a=r(/*! ./data.xml */"./src/data.xml"),l=r.n(a),i=r(/*! ./math */"./src/math.js");r(/*! ./print */"./src/print.js");console.log("navigator"),console.log(navigator),"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/service-worker.js").then(e=>{alert("success"),console.log("sw registerer",e)}).catch(e=>{alert("fail"),console.log(" SW registration fail",e)})}),document.body.appendChild(function(){var e=document.createElement("div");t.a.join(["I am "," is","index"]),e.innerHTML="立方："+Object(i.default)(3)+"\n\n",e.classList.add("purple");var n=new Image;n.src=c.a,e.appendChild(n);var o=document.createElement("button"),s=document.createElement("br");return o.innerHTML="点击查看console",e.appendChild(s),e.appendChild(o),console.log(l.a),o.onclick=(e=>Promise.resolve().then(r.bind(null,/*! ./print.js */"./src/print.js")).then(e=>{var n=e.default;alert("great!!!Come on"),n()})),e}())},"./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: square, default */function(e,n,r){"use strict";function o(e){return e*e}function t(e){return e*e*e}r.r(n),r.d(n,"square",function(){return o}),r.d(n,"default",function(){return t})},"./src/my-front.woff":
/*!***************************!*\
  !*** ./src/my-front.woff ***!
  \***************************/
/*! no static exports found */function(e,n,r){e.exports=r.p+"fonts/d41d8cd98f00b204e9800998ecf8427e.woff"},"./src/my-front.woff2":
/*!****************************!*\
  !*** ./src/my-front.woff2 ***!
  \****************************/
/*! no static exports found */function(e,n,r){e.exports=r.p+"fonts/d41d8cd98f00b204e9800998ecf8427e.woff2"},"./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */function(e,n,r){"use strict";function o(){alert("print.js"),console.log("I get called print.js")}r.r(n),r.d(n,"default",function(){return o})},"./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */function(e,n,r){var o=r(/*! !../node_modules/css-loader!./style.css */"./node_modules/css-loader/index.js!./src/style.css");"string"==typeof o&&(o=[[e.i,o,""]]);var t={hmr:!0,transform:void 0,insertInto:void 0};r(/*! ../node_modules/style-loader/lib/addStyles.js */"./node_modules/style-loader/lib/addStyles.js")(o,t);o.locals&&(e.exports=o.locals)}});
//# sourceMappingURL=app.bundle.8f6b2e35ef25ab44ed20.js.map