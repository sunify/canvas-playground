parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"VCqk":[function(require,module,exports) {
module.exports=function(n,e){var t=1e3/e,o=Date.now(),a=!1;return requestAnimationFrame(function e(){a||requestAnimationFrame(e);var r=Date.now(),i=r-o;i>t&&!a&&(o=r-i%t,n(r))}),n(Date.now()),function(){a=!0}};
},{}],"Sgld":[function(require,module,exports) {
"use strict";function r(r){var e=document.createElement("canvas"),a=e.getContext("2d");return function(t,o){return e.width=t,e.height=o,r.forEach(function(r){a.globalCompositeOperation="source-over";var e=a.createRadialGradient(r.x,r.y,0*r.radius,r.x,r.y,2.5*r.radius);e.addColorStop(0,"rgba(".concat(r.color.join(", "),", 1)")),e.addColorStop(1,"rgba(".concat(r.color.join(", "),", 0)")),a.fillStyle=e,a.fillRect(r.x-2.5*r.radius,r.y-2.5*r.radius,5*r.radius,5*r.radius),a.fillRect(r.x-2.5*r.radius,r.y-2.5*r.radius,5*r.radius,5*r.radius)}),e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createGradientDrawer=r;
},{}],"o441":[function(require,module,exports) {
"use strict";function t(t,r){return(r-t)*Math.random()+t}function r(t,r,e,a){return Math.hypot(t-e,r-a)}function e(t,r,e,a){var n=e-t,o=a-r;return 1.426776695*Math.min(.7071067812*(Math.abs(n)+Math.abs(o)),Math.max(Math.abs(n),Math.abs(o)))}function a(t,r){var e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return t===r?null:e+(a-e)*(1-t)/(r-t)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.random=t,exports.dist=r,exports.distFast=e,exports.lerp=a;
},{}],"WPC2":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.interpolateLines=a,exports.calcCirclesWeight=c,exports.getSquareLines=s,exports.cornersByIndex=void 0;var r=require("./utils");function t(r){return o(r)||e(r)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function e(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function o(r){if(Array.isArray(r)){for(var t=0,n=new Array(r.length);t<r.length;t++)n[t]=r[t];return n}}var i=function(r){return(r>>>0).toString(2).padStart(4,"0")};exports.cornersByIndex=i;var u=Array.from(new Array(16),function(r,t){return i(t).split("").map(Number)});function a(n,e){return n.map(function(n){for(var o=0;o<n.length;o+=2){var i=n[o],u=n[o+1];(0!==i&&1!==i||0!==u&&1!==u)&&(0!==i&&1!==i||(n[o+1]=r.lerp.apply(void 0,t(0===i?[e[0],e[3]]:[e[1],e[2]]))),0!==u&&1!==u||(n[o]=r.lerp.apply(void 0,t(0===u?[e[0],e[1]]:[e[3],e[2]]))))}return n})}function c(r,t,n){return r.reduce(function(r,e){return r+Math.pow(e.radius,2)/(Math.pow(e.x-t,2)+Math.pow(e.y-n,2))},0)}function p(r,t){return r[0]===t[0]&&r[1]===t[1]&&r[2]===t[2]&&r[3]===t[3]}function f(r){return i(u.findIndex(p.bind(null,r)))}var l={"0001":[[0,.5,.5,1,0,1]],"0010":[[1,.5,.5,1,1,1]],"0011":[[0,.5,1,.5,1,1,0,1]],"0100":[[.5,0,1,.5,1,0]],"0101":[[0,.5,.5,0,1,0,1,.5,.5,1,0,1]],"0110":[[.5,0,.5,1,1,1,1,0]],"0111":[[0,.5,.5,0,1,0,1,1,0,1]],1000:[[0,.5,.5,0,0,0]],1001:[[.5,0,.5,1,0,1,0,0]],1010:[[0,.5,.5,1,1,1,1,.5,.5,0,0,0]],1011:[[.5,0,1,.5,1,1,0,1,0,0]],1100:[[0,.5,1,.5,1,0,0,0]],1101:[[.5,1,1,.5,1,0,0,0,0,1]],1110:[[0,.5,.5,1,1,1,1,0,0,0]],1111:[[0,0,1,0,1,1,0,1]]};function s(r){var t=f(r.map(function(r){return r>=1?1:0}));return l[t]}
},{"./utils":"o441"}],"Bhwa":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createMetaballsDrawer=o;var e=require("./metaballs");function t(e,t){return a(e)||n(e,t)||r()}function r(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function n(e,t){var r=[],n=!0,a=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(n=(o=l.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==l.return||l.return()}finally{if(a)throw i}}return r}function a(e){if(Array.isArray(e))return e}var i=[[0,0],[1,0],[1,1],[0,1]];function o(r,n){var a=document.createElement("canvas"),o=a.getContext("2d");return function(l,u){a.width=l,a.height=u,o.fillStyle="#000";var f=[];return r.forEach(function(a){for(var l=4*a.radius,u=Math.max(0,Math.floor((a.x-l)/n.size)),c=Math.max(0,Math.floor((a.y-l)/n.size)),s=Math.min(n.cols,Math.floor((a.x+l)/n.size)),h=Math.min(n.cols,Math.floor((a.y+l)/n.size)),v=function(a){for(var l=function(l){var u=l*n.cols+a;if(!f[u]){var c=i.map(function(i){var o=t(i,2),u=o[0],f=o[1];return(0,e.calcCirclesWeight)(r,(u+a)*n.size,(f+l)*n.size)}),s=(0,e.getSquareLines)(c);s&&function(e,t,r){o.strokeStyle="#0f0",r.forEach(function(r){o.beginPath(),o.moveTo((e+r[0])*n.size,(t+r[1])*n.size);for(var a=2;a<r.length;a+=2)o.lineTo((e+r[a])*n.size,(t+r[a+1])*n.size);o.fill()})}(a,l,(0,e.interpolateLines)(s,c)),f[u]=!0}},u=c;u<h;u+=1)l(u)},y=u;y<s;y+=1)v(y)}),a}}
},{"./metaballs":"WPC2"}],"T/xp":[function(require,module,exports) {
"use strict";function e(e){var t=document.getElementById("gridSize"),i=document.getElementById("gridVisibility"),n=document.getElementById("gridSizeValue");e.visible=i.checked;var r=function(t){e.size=Number(t.value),n.innerText="Grid: ".concat(e.size,"px")};r(t),t.addEventListener("input",function(e){r(e.target)}),i.addEventListener("change",function(t){e.visible=t.target.checked})}function t(e,t){e.strokeStyle="#555",e.lineWidth=.1;for(var i=0;i<t.cols;i+=1)for(var n=0;n<t.rows;n+=1)e.beginPath(),e.rect(i*t.size,n*t.size,t.size,t.size),e.stroke()}Object.defineProperty(exports,"__esModule",{value:!0}),exports.initGridUI=e,exports.drawGrid=t;
},{}],"QEXw":[function(require,module,exports) {
"use strict";function o(o){o.forEach(function(o,r){var a=Date.now()/1e3;o.oradius=o.oradius||o.radius,o.radius=o.oradius+5*(r%2?Math.sin:Math.cos)(2*a)})}function r(o){o.forEach(function(o){var r=Date.now()/1e3;o.ox=o.ox||o.x,o.oy=o.oy||o.y,o.x=o.ox+Math.cos(r)*o.radius*o.vx/2,o.y=o.oy+Math.sin(r)*o.radius*o.vy/2+20*Math.cos(r)})}Object.defineProperty(exports,"__esModule",{value:!0}),exports.pulsarUpdater=o,exports.orbitalUpdater=r,exports.createCircles=void 0;var a=function(o,r){return[{color:[44,249,172],radius:60,x:o/2-100,y:r/2+150,vx:-8,vy:0,ax:0,ay:0},{color:[255,255,0],radius:60,x:o/2+100,y:r/2-150,vx:8,vy:0,ax:0,ay:0}]};exports.createCircles=a;
},{}],"64e5":[function(require,module,exports) {
"use strict";var r=o(require("run-with-fps")),e=require("../common/gradientDrawer"),t=require("../common/metaballsDrawer"),a=require("../common/gridUI"),i=require("../common/utils"),n=require("./circles");function o(r){return r&&r.__esModule?r:{default:r}}function u(r,e){return s(r)||d(r,e)||c()}function c(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function d(r,e){var t=[],a=!0,i=!1,n=void 0;try{for(var o,u=r[Symbol.iterator]();!(a=(o=u.next()).done)&&(t.push(o.value),!e||t.length!==e);a=!0);}catch(c){i=!0,n=c}finally{try{a||null==u.return||u.return()}finally{if(i)throw n}}return t}function s(r){if(Array.isArray(r))return r}var l=window.innerWidth,v=window.innerHeight,f=document.getElementById("canvas");f.width=l,f.height=v;var h=f.getContext("2d"),m=(0,n.createCircles)(l,v),y={size:1,visible:!1,get cols(){return l/this.size},get rows(){return v/this.size}};(0,a.initGridUI)(y);var x=(0,e.createGradientDrawer)(m),w=(0,t.createMetaballsDrawer)(m,y);function g(r,e){var t=r.x-e.x,a=r.y-e.y,n=Math.max(30,(0,i.distFast)(r.x,r.y,e.x,e.y));n<Math.max(r.radius,e.radius)&&(r.vx*=.995,r.vy*=.995);var o=-r.radius*e.radius/Math.pow(n,2)/100;r.ax+=o*t,r.ay+=o*a}var b={x:l/2,y:v/2,radius:200};document.getElementById("force").innerText=b.radius,document.addEventListener("click",function(r){r.altKey?b.radius-=100:b.radius+=100,document.getElementById("force").innerText=b.radius});var p=document.createElement("canvas");p.width=l,p.height=v;var M=p.getContext("2d");function E(){h.fillStyle="#000",f.width=l,m.forEach(function(r){m.forEach(function(e){e!==r&&g(r,e)}),g(r,b),r.ax*=.3,r.ay*=.3,r.vx+=r.ax,r.vy+=r.ay,r.x+=r.vx,r.y+=r.vy,(r.y+r.radius+5>v||r.y-r.radius-5<0)&&(r.vy*=-1),(r.x+r.radius+5>l||r.x-r.radius-5<0)&&(r.vx*=-1)}),M.drawImage(w(l,v),0,0),M.globalCompositeOperation="source-in",M.drawImage(x(l,v),0,0),M.globalCompositeOperation="source-over",y.visible&&(0,a.drawGrid)(h,y);for(var r=Math.ceil(l/20),e=Math.ceil(v/20),t=[],n=0;n<r;n+=1){t[n]=[];for(var o=function(r){var e=20*n,a=20*r,o=u(m.map(function(r){var t=r.x-e,n=r.y-a,o=Math.max(20,(0,i.dist)(r.x,r.y,e,a)),u=r.radius/Math.pow(o,2)*10;return[t*u,n*u]}).reduce(function(r,e){return[r[0]+e[0],r[1]+e[1]]}),2),c=o[0],d=o[1];t[n][r]=[c,d]},c=0;c<e;c+=1)o(c)}h.drawImage(p,0,0);var d=function(a,i){var n=u(t[Math.min(a,r)][Math.min(i,e)],2);return[20*a-n[0],20*i-n[1]]};h.lineWidth=.1;for(var s=0;s<r-1;s+=1)for(c=0;c<e-1;c+=1){var E=u(d(s,c),2),I=E[0],T=E[1];if(0!==s){var q=u(d(s,c+1),2),k=q[0],C=q[1];h.beginPath(),h.moveTo(I,T),h.lineTo(k,C),h.stroke()}if(0!==c){var D=u(d(s+1,c),2),z=D[0],B=D[1];h.beginPath(),h.moveTo(I,T),h.lineTo(z,B),h.stroke()}}}function I(){m.forEach(function(r){h.strokeStyle="#000",h.beginPath(),h.arc(r.x,r.y,r.radius,0,360),h.stroke()})}(0,r.default)(E,30);
},{"run-with-fps":"VCqk","../common/gradientDrawer":"Sgld","../common/metaballsDrawer":"Bhwa","../common/gridUI":"T/xp","../common/utils":"o441","./circles":"QEXw"}]},{},["64e5"], null)
//# sourceMappingURL=/canvas-playground/default.54a679fa.map