parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"VCqk":[function(require,module,exports) {
module.exports=function(n,e){var t=1e3/e,o=Date.now(),a=!1;return requestAnimationFrame(function e(){a||requestAnimationFrame(e);var r=Date.now(),i=r-o;i>t&&!a&&(o=r-i%t,n(r))}),n(Date.now()),function(){a=!0}};
},{}],"OORs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(i,n,e){e?(this._x=t.x(i,n),this._y=t.y(i,n)):(this._x=i,this._y=n,this._angle=this.angle,this._magnitude=this.magnitude)}return t.clone=function(i){var n=new t(0,0);return n._x=i._x,n._y=i._y,n},t.random=function(){return t.polar(2*Math.PI*Math.random(),1)},t.cartesian=function(i,n){return new t(i,n)},t.polar=function(i,n){return new t(i,n,!0)},t.dist=function(t,i){var n=i?i.x:0,e=i?i.y:0;return Math.sqrt(Math.pow(t.x-n,2)+Math.pow(t.y-e,2))},t.x=function(t,i){return i*Math.cos(t)},t.y=function(t,i){return i*Math.sin(t)},t.dot=function(t,i){return t.x*t.y+i.x*i.y},t.zero=function(){return t.cartesian(0,0)},t.prototype.add=function(i){return i instanceof t?(this.x+=i.x,this.y+=i.y):(this.x+=i,this.y+=i),this},t.prototype.mult=function(t){return this.x*=t,this.y*=t,this},t.prototype.sub=function(i){return i instanceof t?this.add(t.clone(i).mult(-1)):this.add(-i),this},t.prototype.div=function(t){return this.x/=t,this.y/=t,this},t.prototype.clone=function(){return t.clone(this)},t.prototype.copyFrom=function(t){return this._x=t._x,this._y=t._y,this},t.prototype.dot=function(i){return t.dot(this,i)},t.prototype.limit=function(t){return this.magnitude=Math.min(this.magnitude,t),this},t.prototype.normalize=function(){return this.magnitude>0&&this.div(this.magnitude),this},Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this.setX(t)},enumerable:!0,configurable:!0}),t.prototype.setX=function(t){return this._x=t,this._magnitude=void 0,this._angle=void 0,this},Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this.setY(t)},enumerable:!0,configurable:!0}),t.prototype.setY=function(t){return this._y=t,this._magnitude=void 0,this._angle=void 0,this},t.prototype.setCartesian=function(t,i){return this.setX(t),this.setY(i),this},Object.defineProperty(t.prototype,"angle",{get:function(){return this._angle=void 0===this._angle?Math.atan2(this.y,this.x):this._angle,this._angle},set:function(t){this.setAngle(t)},enumerable:!0,configurable:!0}),t.prototype.setAngle=function(i){if(this._angle!==i){var n=this.magnitude;this._x=t.x(i,n),this._y=t.y(i,n),this._angle=i}return this},Object.defineProperty(t.prototype,"magnitude",{get:function(){return this._magnitude=void 0===this._magnitude?t.dist(this):this._magnitude,this._magnitude},set:function(t){this.setMagnitude(t)},enumerable:!0,configurable:!0}),t.prototype.setMagnitude=function(i){if(this._magnitude!==i){var n=this.angle;this._x=t.x(n,i),this._y=t.y(n,i),this._magnitude=i}return this},t.prototype.setPolar=function(i,n){return this._x=t.x(i,n),this._y=t.y(i,n),this._angle=i,this._magnitude=n,this},t}();exports.Vector=t;
},{}],"ZG3O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./vector");exports.Vector=e.Vector;
},{"./vector":"OORs"}],"Sa0M":[function(require,module,exports) {
function e(e,n,o){return e*(1-o)+n*o}module.exports=e;
},{}],"O9DC":[function(require,module,exports) {
var r=require("lerp");module.exports=function(e,n,t,u){if("number"==typeof e&&"number"==typeof n)return r(e,n,t);var o=Math.min(e.length,n.length);u=u||new Array(o);for(var a=0;a<o;a++)u[a]=r(e[a],n[a],t);return u};
},{"lerp":"Sa0M"}],"VgR0":[function(require,module,exports) {
"use strict";module.exports=((e,t,r,o)=>{const n=(e+(o||"")).toString().includes("%");if("string"==typeof e){const n=e.match(/(0?\.?\d{1,3})%?\b/g).map(Number);e=n[0],t=n[1],r=n[2],o=n[3]}else void 0!==o&&(o=parseFloat(o));if("number"!=typeof e||"number"!=typeof t||"number"!=typeof r||e>255||t>255||r>255)throw new TypeError("Expected three numbers below 256");if("number"==typeof o){if(!n&&o>=0&&o<=1)o=Math.round(255*o);else{if(!(n&&o>=0&&o<=100))throw new TypeError("Expected alpha value (".concat(o,") as a fraction or percentage"));o=Math.round(255*o/100)}o=(256|o).toString(16).slice(1)}else o="";return(r|t<<8|e<<16|1<<24).toString(16).slice(1)+o});
},{}],"LJ5r":[function(require,module,exports) {
"use strict";var e="a-f\\d",t="#?[".concat(e,"]{3}[").concat(e,"]?"),r="#?[".concat(e,"]{6}([").concat(e,"]{2})?"),n=new RegExp("[^#".concat(e,"]"),"gi"),a=new RegExp("^".concat(t,"$|^").concat(r,"$"),"i");module.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if("string"!=typeof e||n.test(e)||!a.test(e))throw new TypeError("Expected a valid hex string");var r=255;8===(e=e.replace(/^#/,"")).length&&(r=parseInt(e.slice(6,8),16)/255,e=e.substring(0,6)),4===e.length&&(r=parseInt(e.slice(3,4).repeat(2),16)/255,e=e.substring(0,3)),3===e.length&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]);var c=parseInt(e,16),s=c>>16,o=c>>8&255,i=255&c;return"array"===t.format?[s,o,i,r]:{red:s,green:o,blue:i,alpha:r}};
},{}],"0MTD":[function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=e(require("rgb-hex")),t=e(require("hex-rgb"));exports.hexColorRegex=/^#(?=[0-9a-fA-F]*$)(?:.{3}|.{4}|.{6}|.{8})$/,exports.rgbColorRegex=/^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\)$/,exports.rgbaColorRegex=/^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d+(?:\.\d+)?|\.\d+)\)$/,exports.rgbaHexColorRegex=/^rgba\((#[0-9a-fA-F]{3,6})\s*,\s*(\d+(?:\.\d+)?|\.\d+)\)$/,exports.isColor=function(e){return exports.hexColorRegex.test(String(e))||exports.rgbColorRegex.test(String(e))||exports.rgbaColorRegex.test(String(e))||exports.rgbaHexColorRegex.test(String(e))},exports.parseColor=function(e){if(exports.hexColorRegex.test(e)){var r=t.default(e,{format:"array"}),o=r[0],s=r[1],x=r[2],g=r[3];return[o,s,x,255===g?1:g]}var a;if(exports.rgbColorRegex.test(e)&&(a=e.match(exports.rgbColorRegex)))return a.slice(1,4).map(Number).concat([1]);if(exports.rgbaColorRegex.test(e)&&(a=e.match(exports.rgbaColorRegex)))return a.slice(1,5).map(Number);if(exports.rgbaHexColorRegex.test(e))return(a=e.match(exports.rgbaHexColorRegex))?t.default(a[1],{format:"array"}).slice(0,3).concat([Number(a[2])]):[]},exports.stringifyColor=function(e,t){var o=e.slice(0,3).map(Math.round),s=o[0],x=o[1],g=o[2],a=e[3];return exports.hexColorRegex.test(t)?1===a?"#"+r.default(s,x,g):"#"+r.default(s,x,g,a):exports.rgbColorRegex.test(t)&&1===a?"rgb("+s+", "+x+", "+g+")":"rgba("+s+", "+x+", "+g+", "+a+")"},exports.getStep=function(e){if(3===e.length)return[0,e[2]];var r=e.splice(-1)[0],t=e.length-1,o=1/t,s=Math.min(t-1,Math.floor(r/o));return[s,(r-o*s)/o]};
},{"rgb-hex":"VgR0","hex-rgb":"LJ5r"}],"8XB+":[function(require,module,exports) {
"use strict";var r=this&&this.__importDefault||function(r){return r&&r.__esModule?r:{default:r}};Object.defineProperty(exports,"__esModule",{value:!0});var e=r(require("lerp-array")),t=require("./utils"),o=require("./utils");exports.isColor=o.isColor;var a=function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if("number"!=typeof r[r.length-1]){var a=r.map(t.parseColor);return function(o){var i=t.getStep(a.concat([o])),u=i[0],l=i[1],s=r[u],n=r[u+1];if((0===l||s===n)&&!t.rgbaHexColorRegex.test(s))return s;if(1===l&&!t.rgbaHexColorRegex.test(n))return n;var f=a[u],g=a[u+1];return f&&g?t.stringifyColor(e.default(f,g,l),n):void 0}}var i=t.getStep(r),u=i[0],l=i[1],s=r[u],n=r[u+1];if((0===l||s===n)&&!t.rgbaHexColorRegex.test(s))return s;if(1===l&&!t.rgbaHexColorRegex.test(n))return n;var f=t.parseColor(s),g=t.parseColor(n);return f&&g?t.stringifyColor(e.default(f,g,l),n):void 0};exports.default=a;
},{"lerp-array":"O9DC","./utils":"0MTD"}],"1KnD":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PIXEL_RATIO=exports.POINTS_TTL=void 0;var e=300;exports.POINTS_TTL=e;var t=function(){var e=document.createElement("canvas").getContext("2d");return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}();exports.PIXEL_RATIO=t;
},{}],"izpd":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=function(t,i,e){var n=Math.min(i,e)/4;return[Math.cos(t)*n,Math.sin(t)*n]},i=function(t,i,e){var n=Math.min(300,Math.min(i,e)/4);return[Math.cos(t)*n,Math.sin(t)*(n/1.5)*(1.3*Math.cos(t))]},e=function(t,i,e){var n=Math.pow(t,.61),o=Math.pow(Math.log(t),2.35);return[(2+n*o)*Math.cos(o),(2+n*o)*Math.sin(o)]},n={x:5,y:5,z:4},o=function(){var t=n.x,i=n.y,e=n.z,o=n.x+6*(-t+i)*.005,r=n.y+.005*(22*t-i-e*t),a=n.z+.005*(-3*e+t*i),s=[15*o,15*r];return n.x=o,n.y=r,n.z=a,s},r=function(t){return function(i,e,n){var o=Math.min(200,Math.min(e,n)/4),r=i,a=1.5;return[Math.cos(r/t*a)*o*Math.cos(r*a),Math.sin(r/t*a)*o*Math.cos(r*a)]}},a=function(t,i){return function(e,n,o){var r=Math.min(23,Math.min(n,o)/30);return[((t-i)*Math.cos(e)+i*Math.cos((t/i-1)*e))*r,((t-i)*Math.sin(e)-i*Math.sin((t/i-1)*e))*r]}},s=function(t,i,e){return function(n,o,r){var a=Math.min(200,Math.min(o,r)/4),s=a;return[a*Math.sin(t*n+e),s*Math.sin(i*n)]}},h=function(t,i,e){var n=Math.min(40,i/20);return[t*n-i/2,Math.sin(t)*n*1.4]},u=[{getPoint:t,dt:.015,title:"Circle",url:"https://en.wikipedia.org/wiki/Circle"},{getPoint:i,dt:.015,title:"Lemniscate of Gerono",url:"https://en.wikipedia.org/wiki/Lemniscate_of_Gerono"},{getPoint:e,dt:.05,time:1,title:"Spiral",url:"https://en.wikipedia.org/wiki/Spiral"},{getPoint:o,dt:0,title:"Lorenz attractor",url:"https://en.wikipedia.org/wiki/Lorenz_system#Lorenz_attractor"},{getPoint:r(.8),dt:.01,title:"Rose [4/5]",url:"https://en.wikipedia.org/wiki/Rose_(mathematics)"},{getPoint:r(4),dt:.01,title:"Rose [4]",url:"https://en.wikipedia.org/wiki/Rose_(mathematics)"},{getPoint:r(2/3),dt:.01,title:"Rose [2/3]",url:"https://en.wikipedia.org/wiki/Rose_(mathematics)"},{getPoint:r(1.4),dt:.01,title:"Rose [7/5]",url:"https://en.wikipedia.org/wiki/Rose_(mathematics)"},{getPoint:a(10,3),dt:.013,title:"Hypocycloid",url:"https://en.wikipedia.org/wiki/Hypocycloid"},{getPoint:a(12,3),dt:.013,title:"Astroid",url:"https://en.wikipedia.org/wiki/Astroid"},{getPoint:a(12,4),dt:.013,title:"Deltoid",url:"https://en.wikipedia.org/wiki/Deltoid_curve"},{getPoint:s(10,12,.67*Math.PI),dt:.0015,title:"Lissajous Curve [10:12]",url:"https://en.wikipedia.org/wiki/Lissajous_curve"},{getPoint:s(2,3,.37*Math.PI),dt:.005,title:"Lissajous Curve [2:3]",url:"https://en.wikipedia.org/wiki/Lissajous_curve"},{getPoint:h,dt:.08,title:"Sine",url:"https://en.wikipedia.org/wiki/Sine"}];exports.default=u;
},{}],"PRCQ":[function(require,module,exports) {
function r(r){var e=2.5949095;return(r*=2)<1?r*r*((e+1)*r-e)*.5:.5*((r-=2)*r*((e+1)*r+e)+2)}module.exports=r;
},{}],"zIMB":[function(require,module,exports) {
function r(r){var e=1.70158;return r*r*((e+1)*r-e)}module.exports=r;
},{}],"2p5i":[function(require,module,exports) {
function r(r){var e=1.70158;return--r*r*((e+1)*r+e)+1}module.exports=r;
},{}],"Neu6":[function(require,module,exports) {
function r(r){var e=r*r;return r<4/11?7.5625*e:r<8/11?9.075*e-9.9*r+3.4:r<.9?4356/361*e-35442/1805*r+16061/1805:10.8*r*r-20.52*r+10.72}module.exports=r;
},{}],"T8wt":[function(require,module,exports) {
var e=require("./bounce-out");function r(r){return r<.5?.5*(1-e(1-2*r)):.5*e(2*r-1)+.5}module.exports=r;
},{"./bounce-out":"Neu6"}],"UYy4":[function(require,module,exports) {
var e=require("./bounce-out");function r(r){return 1-e(1-r)}module.exports=r;
},{"./bounce-out":"Neu6"}],"V8jc":[function(require,module,exports) {
function t(t){return(t*=2)<1?-.5*(Math.sqrt(1-t*t)-1):.5*(Math.sqrt(1-(t-=2)*t)+1)}module.exports=t;
},{}],"/ehr":[function(require,module,exports) {
function t(t){return 1-Math.sqrt(1-t*t)}module.exports=t;
},{}],"w51Y":[function(require,module,exports) {
function t(t){return Math.sqrt(1- --t*t)}module.exports=t;
},{}],"vclg":[function(require,module,exports) {
function o(o){return o<.5?4*o*o*o:.5*Math.pow(2*o-2,3)+1}module.exports=o;
},{}],"gVmS":[function(require,module,exports) {
function e(e){return e*e*e}module.exports=e;
},{}],"/Mmv":[function(require,module,exports) {
function r(r){var e=r-1;return e*e*e+1}module.exports=r;
},{}],"ddOc":[function(require,module,exports) {
function t(t){return t<.5?.5*Math.sin(13*Math.PI/2*2*t)*Math.pow(2,10*(2*t-1)):.5*Math.sin(-13*Math.PI/2*(2*t-1+1))*Math.pow(2,-10*(2*t-1))+1}module.exports=t;
},{}],"wEBC":[function(require,module,exports) {
function t(t){return Math.sin(13*t*Math.PI/2)*Math.pow(2,10*(t-1))}module.exports=t;
},{}],"reQF":[function(require,module,exports) {
function t(t){return Math.sin(-13*(t+1)*Math.PI/2)*Math.pow(2,-10*t)+1}module.exports=t;
},{}],"3kcF":[function(require,module,exports) {
function o(o){return 0===o||1===o?o:o<.5?.5*Math.pow(2,20*o-10):-.5*Math.pow(2,10-20*o)+1}module.exports=o;
},{}],"qiZq":[function(require,module,exports) {
function o(o){return 0===o?o:Math.pow(2,10*(o-1))}module.exports=o;
},{}],"A8oK":[function(require,module,exports) {
function o(o){return 1===o?o:1-Math.pow(2,-10*o)}module.exports=o;
},{}],"8VPf":[function(require,module,exports) {
function e(e){return e}module.exports=e;
},{}],"RyhL":[function(require,module,exports) {
function e(e){return(e/=.5)<1?.5*e*e:-.5*(--e*(e-2)-1)}module.exports=e;
},{}],"g0GT":[function(require,module,exports) {
function e(e){return e*e}module.exports=e;
},{}],"jDSy":[function(require,module,exports) {
function e(e){return-e*(e-2)}module.exports=e;
},{}],"lAMl":[function(require,module,exports) {
function o(o){return o<.5?8*Math.pow(o,4):-8*Math.pow(o-1,4)+1}module.exports=o;
},{}],"YTnM":[function(require,module,exports) {
function o(o){return Math.pow(o,4)}module.exports=o;
},{}],"9adZ":[function(require,module,exports) {
function o(o){return Math.pow(o-1,3)*(1-o)+1}module.exports=o;
},{}],"P873":[function(require,module,exports) {
function e(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}module.exports=e;
},{}],"l6e8":[function(require,module,exports) {
function e(e){return e*e*e*e*e}module.exports=e;
},{}],"gzrT":[function(require,module,exports) {
function e(e){return--e*e*e*e*e+1}module.exports=e;
},{}],"t4Hf":[function(require,module,exports) {
function t(t){return-.5*(Math.cos(Math.PI*t)-1)}module.exports=t;
},{}],"YFBx":[function(require,module,exports) {
function t(t){var a=Math.cos(t*Math.PI*.5);return Math.abs(a)<1e-14?1:1-a}module.exports=t;
},{}],"X/6S":[function(require,module,exports) {
function t(t){return Math.sin(t*Math.PI/2)}module.exports=t;
},{}],"9uiP":[function(require,module,exports) {
module.exports={backInOut:require("./back-in-out"),backIn:require("./back-in"),backOut:require("./back-out"),bounceInOut:require("./bounce-in-out"),bounceIn:require("./bounce-in"),bounceOut:require("./bounce-out"),circInOut:require("./circ-in-out"),circIn:require("./circ-in"),circOut:require("./circ-out"),cubicInOut:require("./cubic-in-out"),cubicIn:require("./cubic-in"),cubicOut:require("./cubic-out"),elasticInOut:require("./elastic-in-out"),elasticIn:require("./elastic-in"),elasticOut:require("./elastic-out"),expoInOut:require("./expo-in-out"),expoIn:require("./expo-in"),expoOut:require("./expo-out"),linear:require("./linear"),quadInOut:require("./quad-in-out"),quadIn:require("./quad-in"),quadOut:require("./quad-out"),quartInOut:require("./quart-in-out"),quartIn:require("./quart-in"),quartOut:require("./quart-out"),quintInOut:require("./quint-in-out"),quintIn:require("./quint-in"),quintOut:require("./quint-out"),sineInOut:require("./sine-in-out"),sineIn:require("./sine-in"),sineOut:require("./sine-out")};
},{"./back-in-out":"PRCQ","./back-in":"zIMB","./back-out":"2p5i","./bounce-in-out":"T8wt","./bounce-in":"UYy4","./bounce-out":"Neu6","./circ-in-out":"V8jc","./circ-in":"/ehr","./circ-out":"w51Y","./cubic-in-out":"vclg","./cubic-in":"gVmS","./cubic-out":"/Mmv","./elastic-in-out":"ddOc","./elastic-in":"wEBC","./elastic-out":"reQF","./expo-in-out":"3kcF","./expo-in":"qiZq","./expo-out":"A8oK","./linear":"8VPf","./quad-in-out":"RyhL","./quad-in":"g0GT","./quad-out":"jDSy","./quart-in-out":"lAMl","./quart-in":"YTnM","./quart-out":"9adZ","./quint-in-out":"P873","./quint-in":"l6e8","./quint-out":"gzrT","./sine-in-out":"t4Hf","./sine-in":"YFBx","./sine-out":"X/6S"}],"ZF6t":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=s,exports.colors=void 0;var r=n(require("@sunify/lerp-color")),e=n(require("eases")),t=require("./constants");function n(r){return r&&r.__esModule?r:{default:r}}function o(r,e){return i(r)||u(r,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function u(r,e){var t=[],n=!0,o=!1,a=void 0;try{for(var u,i=r[Symbol.iterator]();!(n=(u=i.next()).done)&&(t.push(u.value),!e||t.length!==e);n=!0);}catch(l){o=!0,a=l}finally{try{n||null==i.return||i.return()}finally{if(o)throw a}}return t}function i(r){if(Array.isArray(r))return r}var l={primary:"#00FFCC",secondary:"#7800FF"};function s(n,a){n.forEach(function(n){var u=o(n,2),i=u[0],s=u[1],c=(Date.now()-s)/t.POINTS_TTL;a.strokeStyle=(0,r.default)("rgba(".concat(l.primary,", 0.7)"),"rgba(".concat(l.secondary,", 0.3)"),e.default.sineInOut(c)),a.lineWidth=t.PIXEL_RATIO,i.update();var d=i.vel.clone().mult(2).div(t.PIXEL_RATIO).add(i.pos);a.beginPath(),a.moveTo(d.x*t.PIXEL_RATIO,d.y*t.PIXEL_RATIO),a.lineTo(i.pos.x*t.PIXEL_RATIO,i.pos.y*t.PIXEL_RATIO),a.stroke()})}exports.colors=l;
},{"@sunify/lerp-color":"8XB+","eases":"9uiP","./constants":"1KnD"}],"9JHf":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distFast=o,exports.default=void 0;var t=require("v-for-vector");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var s=0;s<e.length;s++){var i=e[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function i(t,e,i){return e&&s(t.prototype,e),i&&s(t,i),t}function o(t,e,s,i){var o=s-t||.001,a=i-e||.001;return 1.426776695*Math.min(.7071067812*(Math.abs(o)+Math.abs(a)),Math.max(Math.abs(o),Math.abs(a)))}var a=function(){function s(i,o,a,r){e(this,s),this.pos=i,this.acc=a||new t.Vector(0,0),this.vel=o||new t.Vector(0,0),this.friction=r||.7}return i(s,[{key:"update",value:function(t,e){this.vel.add(this.acc),this.vel.mult(this.friction),this.pos.add(this.vel),this.pos.x>t&&(this.pos.x=0),this.pos.x<0&&(this.pos.x=t),this.pos.y>e&&(this.pos.y=0),this.pos.y<0&&(this.pos.y=e)}}]),s}();exports.default=a;
},{"v-for-vector":"ZG3O"}],"4fAx":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=c;var r=require("v-for-vector"),e=n(require("./point")),t=require("./constants");function n(r){if(r&&r.__esModule)return r;var e={};if(null!=r)for(var t in r)if(Object.prototype.hasOwnProperty.call(r,t)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(r,t):{};n.get||n.set?Object.defineProperty(e,t,n):e[t]=r[t]}return e.default=r,e}function o(r,e){return u(r)||i(r,e)||a()}function a(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function i(r,e){var t=[],n=!0,o=!1,a=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done)&&(t.push(i.value),!e||t.length!==e);n=!0);}catch(c){o=!0,a=c}finally{try{n||null==u.return||u.return()}finally{if(o)throw a}}return t}function u(r){if(Array.isArray(r))return r}function c(t,n,a){var i=o(t,2),u=i[0],c=i[1];if(!u||!c)return[];if(!(c.x<0||c.x>n)||!(c.y<0||c.y>a)){for(var l=c.clone().sub(u).angle,f=r.Vector.dist(u,c),p=[],s=0;s<15;s+=1){var y=l+Math.PI/4*(.5-Math.random()),d=Math.max(-10,f/5*-10)*Math.random()/2;p.push([new e.default(c.clone(),r.Vector.polar(y,d),r.Vector.polar(y,d/10)),Date.now()+100*Math.random(),y])}return p}}
},{"v-for-vector":"ZG3O","./point":"9JHf","./constants":"1KnD"}],"VrLc":[function(require,module,exports) {
"use strict";var t=c(require("run-with-fps")),e=require("v-for-vector"),r=c(require("@sunify/lerp-color")),n=require("./constants"),o=c(require("./curves")),i=a(require("./renderPoints")),u=c(require("./emitPoints"));function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var r in t)if(Object.prototype.hasOwnProperty.call(t,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(t,r):{};n.get||n.set?Object.defineProperty(e,r,n):e[r]=t[r]}return e.default=t,e}function c(t){return t&&t.__esModule?t:{default:t}}function l(t){return s(t)||f(t)||d()}function d(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function s(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function y(t,e){return h(t)||m(t,e)||p()}function p(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function m(t,e){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=t[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!e||r.length!==e);n=!0);}catch(c){o=!0,i=c}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}function h(t){if(Array.isArray(t))return t}var v=document.getElementById("caption"),g=1.2*window.innerWidth,w=1.2*window.innerHeight,b=function(t){var e=y(t,2),r=e[0],n=e[1];return[r+g/2,n+w/2]},P=document.getElementById("bg"),O=P.getContext("2d");P.width=g*n.PIXEL_RATIO,P.height=w*n.PIXEL_RATIO,P.style.width=g+"px",P.style.height=w+"px";var A=Math.round(Math.random()*(o.default.length-1)),E=o.default[A];v.innerHTML='<sup>*</sup> <a href="'.concat(E.url,'" target="_blank">').concat(E.title,"</a>"),document.documentElement.style.setProperty("--primary",i.colors.primary),document.documentElement.style.setProperty("--primary-fade","".concat(i.colors.primary,"AA")),document.documentElement.style.setProperty("--secondary",(0,r.default)(i.colors.secondary,"#FFF",.6));var I=[],j=[],T=E.time,_=void 0===T?0:T,q=E.dt,M=E.getPoint,x=function(){j=j.filter(function(t){var e=y(t,2),r=(e[0],e[1]);return Date.now()-r<n.POINTS_TTL}),_+=q,I.push(e.Vector.cartesian.apply(e.Vector,l(b(M(_,g,w))))),I=I.slice(-2),j=j.concat((0,u.default)(I,g,w)),(0,i.default)(j,O)},L=(0,t.default)(x,30);module.hot&&module.hot.dispose(function(){L&&L()});
},{"run-with-fps":"VCqk","v-for-vector":"ZG3O","@sunify/lerp-color":"8XB+","./constants":"1KnD","./curves":"izpd","./renderPoints":"ZF6t","./emitPoints":"4fAx"}]},{},["VrLc"], null)
//# sourceMappingURL=/canvas-playground/js.23143173.map