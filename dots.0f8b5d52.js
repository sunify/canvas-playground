parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"VCqk":[function(require,module,exports) {
module.exports=function(n,e){var t=1e3/e,o=Date.now(),a=!1;return requestAnimationFrame(function e(){a||requestAnimationFrame(e);var r=Date.now(),i=r-o;i>t&&!a&&(o=r-i%t,n(r))}),n(Date.now()),function(){a=!0}};
},{}],"KFJE":[function(require,module,exports) {
var define;
var r;!function(){"use strict";var t=.5*(Math.sqrt(3)-1),e=(3-Math.sqrt(3))/6,a=1/6,o=(Math.sqrt(5)-1)/4,i=(5-Math.sqrt(5))/20;function n(r){var t;t="function"==typeof r?r:r?function(){var r=0,t=0,e=0,a=1,o=(i=4022871197,function(r){r=r.toString();for(var t=0;t<r.length;t++){var e=.02519603282416938*(i+=r.charCodeAt(t));e-=i=e>>>0,i=(e*=i)>>>0,i+=4294967296*(e-=i)}return 2.3283064365386963e-10*(i>>>0)});var i;r=o(" "),t=o(" "),e=o(" ");for(var n=0;n<arguments.length;n++)(r-=o(arguments[n]))<0&&(r+=1),(t-=o(arguments[n]))<0&&(t+=1),(e-=o(arguments[n]))<0&&(e+=1);return o=null,function(){var o=2091639*r+2.3283064365386963e-10*a;return r=t,t=e,e=o-(a=0|o)}}(r):Math.random,this.p=f(t),this.perm=new Uint8Array(512),this.permMod12=new Uint8Array(512);for(var e=0;e<512;e++)this.perm[e]=this.p[255&e],this.permMod12[e]=this.perm[e]%12}function f(r){var t,e=new Uint8Array(256);for(t=0;t<256;t++)e[t]=t;for(t=0;t<255;t++){var a=t+~~(r()*(256-t)),o=e[t];e[t]=e[a],e[a]=o}return e}n.prototype={grad3:new Float32Array([1,1,0,-1,1,0,1,-1,0,-1,-1,0,1,0,1,-1,0,1,1,0,-1,-1,0,-1,0,1,1,0,-1,1,0,1,-1,0,-1,-1]),grad4:new Float32Array([0,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,1,0,1,1,1,0,1,-1,1,0,-1,1,1,0,-1,-1,-1,0,1,1,-1,0,1,-1,-1,0,-1,1,-1,0,-1,-1,1,1,0,1,1,1,0,-1,1,-1,0,1,1,-1,0,-1,-1,1,0,1,-1,1,0,-1,-1,-1,0,1,-1,-1,0,-1,1,1,1,0,1,1,-1,0,1,-1,1,0,1,-1,-1,0,-1,1,1,0,-1,1,-1,0,-1,-1,1,0,-1,-1,-1,0]),noise2D:function(r,a){var o,i,n=this.permMod12,f=this.perm,v=this.grad3,s=0,h=0,l=0,u=(r+a)*t,d=Math.floor(r+u),p=Math.floor(a+u),M=(d+p)*e,m=r-(d-M),c=a-(p-M);m>c?(o=1,i=0):(o=0,i=1);var y=m-o+e,w=c-i+e,g=m-1+2*e,A=c-1+2*e,x=255&d,q=255&p,D=.5-m*m-c*c;if(D>=0){var S=3*n[x+f[q]];s=(D*=D)*D*(v[S]*m+v[S+1]*c)}var U=.5-y*y-w*w;if(U>=0){var b=3*n[x+o+f[q+i]];h=(U*=U)*U*(v[b]*y+v[b+1]*w)}var F=.5-g*g-A*A;if(F>=0){var N=3*n[x+1+f[q+1]];l=(F*=F)*F*(v[N]*g+v[N+1]*A)}return 70*(s+h+l)},noise3D:function(r,t,e){var o,i,n,f,v,s,h,l,u,d,p=this.permMod12,M=this.perm,m=this.grad3,c=(r+t+e)*(1/3),y=Math.floor(r+c),w=Math.floor(t+c),g=Math.floor(e+c),A=(y+w+g)*a,x=r-(y-A),q=t-(w-A),D=e-(g-A);x>=q?q>=D?(v=1,s=0,h=0,l=1,u=1,d=0):x>=D?(v=1,s=0,h=0,l=1,u=0,d=1):(v=0,s=0,h=1,l=1,u=0,d=1):q<D?(v=0,s=0,h=1,l=0,u=1,d=1):x<D?(v=0,s=1,h=0,l=0,u=1,d=1):(v=0,s=1,h=0,l=1,u=1,d=0);var S=x-v+a,U=q-s+a,b=D-h+a,F=x-l+2*a,N=q-u+2*a,C=D-d+2*a,P=x-1+.5,T=q-1+.5,_=D-1+.5,j=255&y,k=255&w,z=255&g,B=.6-x*x-q*q-D*D;if(B<0)o=0;else{var E=3*p[j+M[k+M[z]]];o=(B*=B)*B*(m[E]*x+m[E+1]*q+m[E+2]*D)}var G=.6-S*S-U*U-b*b;if(G<0)i=0;else{var H=3*p[j+v+M[k+s+M[z+h]]];i=(G*=G)*G*(m[H]*S+m[H+1]*U+m[H+2]*b)}var I=.6-F*F-N*N-C*C;if(I<0)n=0;else{var J=3*p[j+l+M[k+u+M[z+d]]];n=(I*=I)*I*(m[J]*F+m[J+1]*N+m[J+2]*C)}var K=.6-P*P-T*T-_*_;if(K<0)f=0;else{var L=3*p[j+1+M[k+1+M[z+1]]];f=(K*=K)*K*(m[L]*P+m[L+1]*T+m[L+2]*_)}return 32*(o+i+n+f)},noise4D:function(r,t,e,a){var n,f,v,s,h,l,u,d,p,M,m,c,y,w,g,A,x,q=this.perm,D=this.grad4,S=(r+t+e+a)*o,U=Math.floor(r+S),b=Math.floor(t+S),F=Math.floor(e+S),N=Math.floor(a+S),C=(U+b+F+N)*i,P=r-(U-C),T=t-(b-C),_=e-(F-C),j=a-(N-C),k=0,z=0,B=0,E=0;P>T?k++:z++,P>_?k++:B++,P>j?k++:E++,T>_?z++:B++,T>j?z++:E++,_>j?B++:E++;var G=P-(l=k>=3?1:0)+i,H=T-(u=z>=3?1:0)+i,I=_-(d=B>=3?1:0)+i,J=j-(p=E>=3?1:0)+i,K=P-(M=k>=2?1:0)+2*i,L=T-(m=z>=2?1:0)+2*i,O=_-(c=B>=2?1:0)+2*i,Q=j-(y=E>=2?1:0)+2*i,R=P-(w=k>=1?1:0)+3*i,V=T-(g=z>=1?1:0)+3*i,W=_-(A=B>=1?1:0)+3*i,X=j-(x=E>=1?1:0)+3*i,Y=P-1+4*i,Z=T-1+4*i,$=_-1+4*i,rr=j-1+4*i,tr=255&U,er=255&b,ar=255&F,or=255&N,ir=.6-P*P-T*T-_*_-j*j;if(ir<0)n=0;else{var nr=q[tr+q[er+q[ar+q[or]]]]%32*4;n=(ir*=ir)*ir*(D[nr]*P+D[nr+1]*T+D[nr+2]*_+D[nr+3]*j)}var fr=.6-G*G-H*H-I*I-J*J;if(fr<0)f=0;else{var vr=q[tr+l+q[er+u+q[ar+d+q[or+p]]]]%32*4;f=(fr*=fr)*fr*(D[vr]*G+D[vr+1]*H+D[vr+2]*I+D[vr+3]*J)}var sr=.6-K*K-L*L-O*O-Q*Q;if(sr<0)v=0;else{var hr=q[tr+M+q[er+m+q[ar+c+q[or+y]]]]%32*4;v=(sr*=sr)*sr*(D[hr]*K+D[hr+1]*L+D[hr+2]*O+D[hr+3]*Q)}var lr=.6-R*R-V*V-W*W-X*X;if(lr<0)s=0;else{var ur=q[tr+w+q[er+g+q[ar+A+q[or+x]]]]%32*4;s=(lr*=lr)*lr*(D[ur]*R+D[ur+1]*V+D[ur+2]*W+D[ur+3]*X)}var dr=.6-Y*Y-Z*Z-$*$-rr*rr;if(dr<0)h=0;else{var pr=q[tr+1+q[er+1+q[ar+1+q[or+1]]]]%32*4;h=(dr*=dr)*dr*(D[pr]*Y+D[pr+1]*Z+D[pr+2]*$+D[pr+3]*rr)}return 27*(n+f+v+s+h)}},n._buildPermutationTable=f,void 0!==r&&r.amd&&r(function(){return n}),"undefined"!=typeof exports?exports.SimplexNoise=n:"undefined"!=typeof window&&(window.SimplexNoise=n),"undefined"!=typeof module&&(module.exports=n)}();
},{}],"OORs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(e,n,i){i?(this._x=t.x(e,n),this._y=t.y(e,n)):(this._x=e,this._y=n)}return t.clone=function(e){var n=new t(0,0);return n._x=e._x,n._y=e._y,n},t.cartesian=function(e,n){return new t(e,n)},t.polar=function(e,n){return new t(e,n,!0)},t.dist=function(t,e){return Math.hypot(t.x-e.x,t.y-e.y)},t.x=function(t,e){return e*Math.cos(t)},t.y=function(t,e){return e*Math.sin(t)},t.dot=function(t,e){return t.x*t.y+e.x*e.y},t.zero=function(){return t.cartesian(0,0)},t.prototype.add=function(e){return e instanceof t?(this.x+=e.x,this.y+=e.y):(this.x+=e,this.y+=e),this},t.prototype.mult=function(t){return this.x*=t,this.y*=t,this},t.prototype.sub=function(e){return e instanceof t?this.add(t.clone(e).mult(-1)):this.add(-e),this},t.prototype.div=function(t){return this.x/=t,this.y/=t,this},t.prototype.clone=function(){return t.clone(this)},t.prototype.copyFrom=function(t){return this._x=t._x,this._y=t._y,this},t.prototype.dot=function(e){return t.dot(this,e)},t.prototype.normalize=function(){return this.magnitude>0&&this.div(this.magnitude),this},Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this.setX(t)},enumerable:!0,configurable:!0}),t.prototype.setX=function(t){return this._x=t,this},Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this.setY(t)},enumerable:!0,configurable:!0}),t.prototype.setY=function(t){return this._y=t,this},t.prototype.setCartesian=function(t,e){return this.setX(t),this.setY(e),this},Object.defineProperty(t.prototype,"angle",{get:function(){return Math.atan2(this.y,this.x)},set:function(t){this.setAngle(t)},enumerable:!0,configurable:!0}),t.prototype.setAngle=function(e){var n=this.magnitude;return this._x=t.x(e,n),this._y=t.y(e,n),this},Object.defineProperty(t.prototype,"magnitude",{get:function(){return t.dist(this,e)},set:function(t){this.setMagnitude(t)},enumerable:!0,configurable:!0}),t.prototype.setMagnitude=function(e){var n=this.angle;return this._x=t.x(n,e),this._y=t.y(n,e),this},t.prototype.setPolar=function(e,n){return this._x=t.x(e,n),this._y=t.y(e,n),this},t}();exports.Vector=t;var e=new t(0,0);
},{}],"ZG3O":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./vector");exports.Vector=e.Vector;
},{"./vector":"OORs"}],"hmpl":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.distFast=o,exports.default=void 0;var t=require("v-for-vector");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function s(t,e){for(var s=0;s<e.length;s++){var a=e[s];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(t,a.key,a)}}function a(t,e,a){return e&&s(t.prototype,e),a&&s(t,a),t}function o(t,e,s,a){var o=s-t,i=a-e;return 1.426776695*Math.min(.7071067812*(Math.abs(o)+Math.abs(i)),Math.max(Math.abs(o),Math.abs(i)))}var i=function(){function s(a,o,i){e(this,s),this.pos=a,this.acc=i||new t.Vector(0,0),this.vel=o||new t.Vector(0,0)}return a(s,[{key:"update",value:function(t,e){this.vel.add(this.acc),this.vel.multS(.99),this.pos.add(this.vel),this.pos.x>t&&(this.pos.x=0),this.pos.x<0&&(this.pos.x=t),this.pos.y>e&&(this.pos.y=0),this.pos.y<0&&(this.pos.y=e)}},{key:"applyToField",value:function(t,e){var s=Math.round(this.pos.x/e),a=Math.round(this.pos.y/e);if(t[s]&&t[s][a]){var o=t[s][a]*Math.PI;this.acc.setAxes(Math.sin(o)/40,Math.cos(o)/40)}}}]),s}();exports.default=i;
},{"v-for-vector":"ZG3O"}],"Sa0M":[function(require,module,exports) {
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
},{"lerp-array":"O9DC","./utils":"0MTD"}],"msO6":[function(require,module,exports) {
"use strict";var t=n(require("run-with-fps")),a=n(require("simplex-noise")),r=n(require("./point")),e=require("v-for-vector"),o=n(require("@sunify/lerp-color"));function n(t){return t&&t.__esModule?t:{default:t}}var i=window,h=i.innerWidth,u=i.innerHeight,d=new a.default,f=document.getElementById("bg"),l=f.getContext("2d");f.width=h,f.height=u;for(var c=[],s=20,M=[],v=0;v<100;v+=1)M.push(new r.default(new e.Vector(h*Math.random(),u*Math.random()),new e.Vector(20*(.5-Math.random()),20*(.5-Math.random())),new e.Vector(20*(.5-Math.random()),20*(.5-Math.random()))));var m=function(){for(var t=0;t<h/s;t+=1){c[t]=[];for(var a=0;a<h/s;a+=1)c[t][a]=d.noise3D(t/10,a/10,Date.now()/4e3)}},p=function(){M.forEach(function(t){t.applyToField(c,s),t.update(h,u);var a=Math.round(t.pos.x/s),r=Math.round(t.pos.y/s);if(c[a]&&c[a][r]){var e=c[a][r];l.fillStyle=(0,o.default)("rgba(0, 230, 230, 0.4)","rgba(255, 255, 204, 0.4)",Math.max(0,Math.min(1.5*e,1))),l.beginPath(),l.arc(t.pos.x,t.pos.y,Math.abs(s*e/1.5),0,2*Math.PI),l.fill()}})},w=function(){for(var t=0;t<h/s;t+=1)for(var a=0;a<u/s;a+=1)if(c[t]&&void 0!==c[t][a]){var r=c[t][a];l.fillStyle=(0,o.default)("rgba(0, 230, 230, 0.4)","rgba(255, 255, 204, 0.4)",Math.max(0,Math.min(1.5*r,1))),l.beginPath(),l.arc(t*s,a*s,Math.abs(s*r/3),0,2*Math.PI),l.fill()}};m();for(var g=0;g<1e3;g+=1);var b=function(){m(),f.width=f.width,w()},y=(0,t.default)(b,20);module.hot&&module.hot.dispose(function(){y&&y()});
},{"run-with-fps":"VCqk","simplex-noise":"KFJE","./point":"hmpl","v-for-vector":"ZG3O","@sunify/lerp-color":"8XB+"}]},{},["msO6"], null)
//# sourceMappingURL=/canvas-playground/dots.0f8b5d52.map