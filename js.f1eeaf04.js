parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"VCqk":[function(require,module,exports) {
module.exports=function(n,e){var t=1e3/e,o=Date.now(),a=!1;return requestAnimationFrame(function e(){a||requestAnimationFrame(e);var r=Date.now(),i=r-o;i>t&&!a&&(o=r-i%t,n(r))}),n(Date.now()),function(){a=!0}};
},{}],"OORs":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=function(){function t(n,e,i){i?(this._x=t.x(n,e),this._y=t.y(n,e)):(this._x=n,this._y=e)}return t.clone=function(n){var e=new t(0,0);return e._x=n._x,e._y=n._y,e},t.cartesian=function(n,e){return new t(n,e)},t.polar=function(n,e){return new t(n,e,!0)},t.magnitude=function(e){return t.dist(e,n)},t.angle=function(t){return Math.atan2(t.y,t.x)},t.dist=function(t,n){return Math.hypot(t.x-n.x,t.y-n.y)},t.x=function(t,n){return n*Math.cos(t)},t.y=function(t,n){return n*Math.sin(t)},t.dot=function(t,n){return t.x*t.y+n.x*n.y},t.prototype.add=function(t){return this.x=this.x+t.x,this.y=this.y+t.y,this},t.prototype.addS=function(t){return this.x+=t,this.y+=t,this},t.prototype.mult=function(t){return this.x*=t.x,this.y*=t.y,this},t.prototype.multS=function(t){return this.x*=t,this.y*=t,this},t.prototype.sub=function(n){return this.add(t.clone(n).multS(-1))},t.prototype.subS=function(t){return this.addS(-t)},t.prototype.div=function(t){return this.x/=t.x,this.y/=t.y,this},t.prototype.divS=function(t){return this.x/=t,this.y/=t,this},t.prototype.clone=function(){return t.clone(this)},t.prototype.copyFrom=function(t){return this._x=t._x,this._y=t._y,this},t.prototype.dot=function(n){return t.dot(this,n)},t.prototype.normalize=function(){return this.magnitude>0&&this.divS(this.magnitude),this},Object.defineProperty(t.prototype,"x",{get:function(){return this._x},set:function(t){this._x=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"y",{get:function(){return this._y},set:function(t){this._y=t},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"angle",{get:function(){return t.angle(this)},set:function(t){this.setAngle(t)},enumerable:!0,configurable:!0}),t.prototype.setAngle=function(n){var e=this.magnitude;return this._x=t.x(n,e),this._y=t.y(n,e),this},Object.defineProperty(t.prototype,"magnitude",{get:function(){return t.magnitude(this)},set:function(t){this.setMagnitude(t)},enumerable:!0,configurable:!0}),t.prototype.setMagnitude=function(n){var e=this.angle;return this._x=t.x(e,n),this._y=t.y(e,n),this},t}();exports.Vector=t;var n=new t(0,0);
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
},{"lerp-array":"O9DC","./utils":"0MTD"}],"q04K":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("v-for-vector");function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}var r=function(){function i(t,n,r,o){e(this,i),this.reuse(t,n,r,o)}return n(i,[{key:"reuse",value:function(e,i,n,r){return this.pos=e,this.acc=n||new t.Vector(0,0),this.vel=i||new t.Vector(0,0),this.friction=r||.9,this.time=Date.now(),this.direction=Math.sign(.5-Math.random()),this}},{key:"update",value:function(t,e){this.acc.angle+=.006*this.direction,this.vel.add(this.acc).mult(this.friction),this.pos.add(this.vel)}},{key:"x",get:function(){return this.pos.x}},{key:"y",get:function(){return this.pos.y}}]),i}();exports.default=r;
},{"v-for-vector":"ZG3O"}],"Ueo9":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.PIXEL_RATIO=exports.POINTS_TTL=void 0;var e=2e4;exports.POINTS_TTL=e;var t=function(){var e=document.createElement("canvas").getContext("2d");return(window.devicePixelRatio||1)/(e.webkitBackingStorePixelRatio||e.mozBackingStorePixelRatio||e.msBackingStorePixelRatio||e.oBackingStorePixelRatio||e.backingStorePixelRatio||1)}();exports.PIXEL_RATIO=t;
},{}],"Kmmy":[function(require,module,exports) {
function e(){this.vertices=null,this.edges=null,this.cells=null,this.toRecycle=null,this.beachsectionJunkyard=[],this.circleEventJunkyard=[],this.vertexJunkyard=[],this.edgeJunkyard=[],this.cellJunkyard=[]}e.prototype.reset=function(){if(this.beachline||(this.beachline=new this.RBTree),this.beachline.root)for(var e=this.beachline.getFirst(this.beachline.root);e;)this.beachsectionJunkyard.push(e),e=e.rbNext;this.beachline.root=null,this.circleEvents||(this.circleEvents=new this.RBTree),this.circleEvents.root=this.firstCircleEvent=null,this.vertices=[],this.edges=[],this.cells=[]},e.prototype.sqrt=Math.sqrt,e.prototype.abs=Math.abs,e.prototype.ε=e.ε=1e-9,e.prototype.invε=e.invε=1/e.ε,e.prototype.equalWithEpsilon=function(e,t){return this.abs(e-t)<1e-9},e.prototype.greaterThanWithEpsilon=function(e,t){return e-t>1e-9},e.prototype.greaterThanOrEqualWithEpsilon=function(e,t){return t-e<1e-9},e.prototype.lessThanWithEpsilon=function(e,t){return t-e>1e-9},e.prototype.lessThanOrEqualWithEpsilon=function(e,t){return e-t<1e-9},e.prototype.RBTree=function(){this.root=null},e.prototype.RBTree.prototype.rbInsertSuccessor=function(e,t){var r,i,s;if(e){if(t.rbPrevious=e,t.rbNext=e.rbNext,e.rbNext&&(e.rbNext.rbPrevious=t),e.rbNext=t,e.rbRight){for(e=e.rbRight;e.rbLeft;)e=e.rbLeft;e.rbLeft=t}else e.rbRight=t;r=e}else this.root?(e=this.getFirst(this.root),t.rbPrevious=null,t.rbNext=e,e.rbPrevious=t,e.rbLeft=t,r=e):(t.rbPrevious=t.rbNext=null,this.root=t,r=null);for(t.rbLeft=t.rbRight=null,t.rbParent=r,t.rbRed=!0,e=t;r&&r.rbRed;)r===(i=r.rbParent).rbLeft?(s=i.rbRight)&&s.rbRed?(r.rbRed=s.rbRed=!1,i.rbRed=!0,e=i):(e===r.rbRight&&(this.rbRotateLeft(r),r=(e=r).rbParent),r.rbRed=!1,i.rbRed=!0,this.rbRotateRight(i)):(s=i.rbLeft)&&s.rbRed?(r.rbRed=s.rbRed=!1,i.rbRed=!0,e=i):(e===r.rbLeft&&(this.rbRotateRight(r),r=(e=r).rbParent),r.rbRed=!1,i.rbRed=!0,this.rbRotateLeft(i)),r=e.rbParent;this.root.rbRed=!1},e.prototype.RBTree.prototype.rbRemoveNode=function(e){e.rbNext&&(e.rbNext.rbPrevious=e.rbPrevious),e.rbPrevious&&(e.rbPrevious.rbNext=e.rbNext),e.rbNext=e.rbPrevious=null;var t,r,i=e.rbParent,s=e.rbLeft,o=e.rbRight;if(t=s?o?this.getFirst(o):s:o,i?i.rbLeft===e?i.rbLeft=t:i.rbRight=t:this.root=t,s&&o?(r=t.rbRed,t.rbRed=e.rbRed,t.rbLeft=s,s.rbParent=t,t!==o?(i=t.rbParent,t.rbParent=e.rbParent,e=t.rbRight,i.rbLeft=e,t.rbRight=o,o.rbParent=t):(t.rbParent=i,i=t,e=t.rbRight)):(r=e.rbRed,e=t),e&&(e.rbParent=i),!r)if(e&&e.rbRed)e.rbRed=!1;else{var n;do{if(e===this.root)break;if(e===i.rbLeft){if((n=i.rbRight).rbRed&&(n.rbRed=!1,i.rbRed=!0,this.rbRotateLeft(i),n=i.rbRight),n.rbLeft&&n.rbLeft.rbRed||n.rbRight&&n.rbRight.rbRed){n.rbRight&&n.rbRight.rbRed||(n.rbLeft.rbRed=!1,n.rbRed=!0,this.rbRotateRight(n),n=i.rbRight),n.rbRed=i.rbRed,i.rbRed=n.rbRight.rbRed=!1,this.rbRotateLeft(i),e=this.root;break}}else if((n=i.rbLeft).rbRed&&(n.rbRed=!1,i.rbRed=!0,this.rbRotateRight(i),n=i.rbLeft),n.rbLeft&&n.rbLeft.rbRed||n.rbRight&&n.rbRight.rbRed){n.rbLeft&&n.rbLeft.rbRed||(n.rbRight.rbRed=!1,n.rbRed=!0,this.rbRotateLeft(n),n=i.rbLeft),n.rbRed=i.rbRed,i.rbRed=n.rbLeft.rbRed=!1,this.rbRotateRight(i),e=this.root;break}n.rbRed=!0,e=i,i=i.rbParent}while(!e.rbRed);e&&(e.rbRed=!1)}},e.prototype.RBTree.prototype.rbRotateLeft=function(e){var t=e,r=e.rbRight,i=t.rbParent;i?i.rbLeft===t?i.rbLeft=r:i.rbRight=r:this.root=r,r.rbParent=i,t.rbParent=r,t.rbRight=r.rbLeft,t.rbRight&&(t.rbRight.rbParent=t),r.rbLeft=t},e.prototype.RBTree.prototype.rbRotateRight=function(e){var t=e,r=e.rbLeft,i=t.rbParent;i?i.rbLeft===t?i.rbLeft=r:i.rbRight=r:this.root=r,r.rbParent=i,t.rbParent=r,t.rbLeft=r.rbRight,t.rbLeft&&(t.rbLeft.rbParent=t),r.rbRight=t},e.prototype.RBTree.prototype.getFirst=function(e){for(;e.rbLeft;)e=e.rbLeft;return e},e.prototype.RBTree.prototype.getLast=function(e){for(;e.rbRight;)e=e.rbRight;return e},e.prototype.Diagram=function(e){this.site=e},e.prototype.Cell=function(e){this.site=e,this.halfedges=[],this.closeMe=!1},e.prototype.Cell.prototype.init=function(e){return this.site=e,this.halfedges=[],this.closeMe=!1,this},e.prototype.createCell=function(e){var t=this.cellJunkyard.pop();return t?t.init(e):new this.Cell(e)},e.prototype.Cell.prototype.prepareHalfedges=function(){for(var e,t=this.halfedges,r=t.length;r--;)(e=t[r].edge).vb&&e.va||t.splice(r,1);return t.sort(function(e,t){return t.angle-e.angle}),t.length},e.prototype.Cell.prototype.getNeighborIds=function(){for(var e,t=[],r=this.halfedges.length;r--;)null!==(e=this.halfedges[r].edge).lSite&&e.lSite.voronoiId!=this.site.voronoiId?t.push(e.lSite.voronoiId):null!==e.rSite&&e.rSite.voronoiId!=this.site.voronoiId&&t.push(e.rSite.voronoiId);return t},e.prototype.Cell.prototype.getBbox=function(){for(var e,t,r,i=this.halfedges,s=i.length,o=1/0,n=1/0,h=-1/0,a=-1/0;s--;)(t=(e=i[s].getStartpoint()).x)<o&&(o=t),(r=e.y)<n&&(n=r),t>h&&(h=t),r>a&&(a=r);return{x:o,y:n,width:h-o,height:a-n}},e.prototype.Cell.prototype.pointIntersection=function(e,t){for(var r,i,s,o,n=this.halfedges,h=n.length;h--;){if(i=(r=n[h]).getStartpoint(),s=r.getEndpoint(),!(o=(t-i.y)*(s.x-i.x)-(e-i.x)*(s.y-i.y)))return 0;if(o>0)return-1}return 1},e.prototype.Vertex=function(e,t){this.x=e,this.y=t},e.prototype.Edge=function(e,t){this.lSite=e,this.rSite=t,this.va=this.vb=null},e.prototype.Halfedge=function(e,t,r){if(this.site=t,this.edge=e,r)this.angle=Math.atan2(r.y-t.y,r.x-t.x);else{var i=e.va,s=e.vb;this.angle=e.lSite===t?Math.atan2(s.x-i.x,i.y-s.y):Math.atan2(i.x-s.x,s.y-i.y)}},e.prototype.createHalfedge=function(e,t,r){return new this.Halfedge(e,t,r)},e.prototype.Halfedge.prototype.getStartpoint=function(){return this.edge.lSite===this.site?this.edge.va:this.edge.vb},e.prototype.Halfedge.prototype.getEndpoint=function(){return this.edge.lSite===this.site?this.edge.vb:this.edge.va},e.prototype.createVertex=function(e,t){var r=this.vertexJunkyard.pop();return r?(r.x=e,r.y=t):r=new this.Vertex(e,t),this.vertices.push(r),r},e.prototype.createEdge=function(e,t,r,i){var s=this.edgeJunkyard.pop();return s?(s.lSite=e,s.rSite=t,s.va=s.vb=null):s=new this.Edge(e,t),this.edges.push(s),r&&this.setEdgeStartpoint(s,e,t,r),i&&this.setEdgeEndpoint(s,e,t,i),this.cells[e.voronoiId].halfedges.push(this.createHalfedge(s,e,t)),this.cells[t.voronoiId].halfedges.push(this.createHalfedge(s,t,e)),s},e.prototype.createBorderEdge=function(e,t,r){var i=this.edgeJunkyard.pop();return i?(i.lSite=e,i.rSite=null):i=new this.Edge(e,null),i.va=t,i.vb=r,this.edges.push(i),i},e.prototype.setEdgeStartpoint=function(e,t,r,i){e.va||e.vb?e.lSite===r?e.vb=i:e.va=i:(e.va=i,e.lSite=t,e.rSite=r)},e.prototype.setEdgeEndpoint=function(e,t,r,i){this.setEdgeStartpoint(e,r,t,i)},e.prototype.Beachsection=function(){},e.prototype.createBeachsection=function(e){var t=this.beachsectionJunkyard.pop();return t||(t=new this.Beachsection),t.site=e,t},e.prototype.leftBreakPoint=function(e,t){var r=e.site,i=r.x,s=r.y,o=s-t;if(!o)return i;var n=e.rbPrevious;if(!n)return-1/0;var h=(r=n.site).x,a=r.y,l=a-t;if(!l)return h;var c=h-i,b=1/o-1/l,f=c/l;return b?(-f+this.sqrt(f*f-2*b*(c*c/(-2*l)-a+l/2+s-o/2)))/b+i:(i+h)/2},e.prototype.rightBreakPoint=function(e,t){var r=e.rbNext;if(r)return this.leftBreakPoint(r,t);var i=e.site;return i.y===t?i.x:1/0},e.prototype.detachBeachsection=function(e){this.detachCircleEvent(e),this.beachline.rbRemoveNode(e),this.beachsectionJunkyard.push(e)},e.prototype.removeBeachsection=function(e){var t=e.circleEvent,r=t.x,i=t.ycenter,s=this.createVertex(r,i),o=e.rbPrevious,n=e.rbNext,h=[e],a=Math.abs;this.detachBeachsection(e);for(var l=o;l.circleEvent&&a(r-l.circleEvent.x)<1e-9&&a(i-l.circleEvent.ycenter)<1e-9;)o=l.rbPrevious,h.unshift(l),this.detachBeachsection(l),l=o;h.unshift(l),this.detachCircleEvent(l);for(var c=n;c.circleEvent&&a(r-c.circleEvent.x)<1e-9&&a(i-c.circleEvent.ycenter)<1e-9;)n=c.rbNext,h.push(c),this.detachBeachsection(c),c=n;h.push(c),this.detachCircleEvent(c);var b,f=h.length;for(b=1;b<f;b++)c=h[b],l=h[b-1],this.setEdgeStartpoint(c.edge,l.site,c.site,s);l=h[0],(c=h[f-1]).edge=this.createEdge(l.site,c.site,void 0,s),this.attachCircleEvent(l),this.attachCircleEvent(c)},e.prototype.addBeachsection=function(e){for(var t,r,i,s,o=e.x,n=e.y,h=this.beachline.root;h;)if((i=this.leftBreakPoint(h,n)-o)>1e-9)h=h.rbLeft;else{if(!((s=o-this.rightBreakPoint(h,n))>1e-9)){i>-1e-9?(t=h.rbPrevious,r=h):s>-1e-9?(t=h,r=h.rbNext):t=r=h;break}if(!h.rbRight){t=h;break}h=h.rbRight}var a=this.createBeachsection(e);if(this.beachline.rbInsertSuccessor(t,a),t||r){if(t===r)return this.detachCircleEvent(t),r=this.createBeachsection(t.site),this.beachline.rbInsertSuccessor(a,r),a.edge=r.edge=this.createEdge(t.site,a.site),this.attachCircleEvent(t),void this.attachCircleEvent(r);if(!t||r){if(t!==r){this.detachCircleEvent(t),this.detachCircleEvent(r);var l=t.site,c=l.x,b=l.y,f=e.x-c,u=e.y-b,p=r.site,d=p.x-c,v=p.y-b,y=2*(f*v-u*d),g=f*f+u*u,R=d*d+v*v,x=this.createVertex((v*g-u*R)/y+c,(f*R-d*g)/y+b);return this.setEdgeStartpoint(r.edge,l,p,x),a.edge=this.createEdge(l,e,void 0,x),r.edge=this.createEdge(e,p,void 0,x),this.attachCircleEvent(t),void this.attachCircleEvent(r)}}else a.edge=this.createEdge(t.site,a.site)}},e.prototype.CircleEvent=function(){this.arc=null,this.rbLeft=null,this.rbNext=null,this.rbParent=null,this.rbPrevious=null,this.rbRed=!1,this.rbRight=null,this.site=null,this.x=this.y=this.ycenter=0},e.prototype.attachCircleEvent=function(e){var t=e.rbPrevious,r=e.rbNext;if(t&&r){var i=t.site,s=e.site,o=r.site;if(i!==o){var n=s.x,h=s.y,a=i.x-n,l=i.y-h,c=o.x-n,b=o.y-h,f=2*(a*b-l*c);if(!(f>=-2e-12)){var u=a*a+l*l,p=c*c+b*b,d=(b*u-l*p)/f,v=(a*p-c*u)/f,y=v+h,g=this.circleEventJunkyard.pop();g||(g=new this.CircleEvent),g.arc=e,g.site=s,g.x=d+n,g.y=y+this.sqrt(d*d+v*v),g.ycenter=y,e.circleEvent=g;for(var R=null,x=this.circleEvents.root;x;)if(g.y<x.y||g.y===x.y&&g.x<=x.x){if(!x.rbLeft){R=x.rbPrevious;break}x=x.rbLeft}else{if(!x.rbRight){R=x;break}x=x.rbRight}this.circleEvents.rbInsertSuccessor(R,g),R||(this.firstCircleEvent=g)}}}},e.prototype.detachCircleEvent=function(e){var t=e.circleEvent;t&&(t.rbPrevious||(this.firstCircleEvent=t.rbNext),this.circleEvents.rbRemoveNode(t),this.circleEventJunkyard.push(t),e.circleEvent=null)},e.prototype.connectEdge=function(e,t){var r=e.vb;if(r)return!0;var i,s,o=e.va,n=t.xl,h=t.xr,a=t.yt,l=t.yb,c=e.lSite,b=e.rSite,f=c.x,u=c.y,p=b.x,d=b.y,v=(f+p)/2,y=(u+d)/2;if(this.cells[c.voronoiId].closeMe=!0,this.cells[b.voronoiId].closeMe=!0,d!==u&&(s=y-(i=(f-p)/(d-u))*v),void 0===i){if(v<n||v>=h)return!1;if(f>p){if(!o||o.y<a)o=this.createVertex(v,a);else if(o.y>=l)return!1;r=this.createVertex(v,l)}else{if(!o||o.y>l)o=this.createVertex(v,l);else if(o.y<a)return!1;r=this.createVertex(v,a)}}else if(i<-1||i>1)if(f>p){if(!o||o.y<a)o=this.createVertex((a-s)/i,a);else if(o.y>=l)return!1;r=this.createVertex((l-s)/i,l)}else{if(!o||o.y>l)o=this.createVertex((l-s)/i,l);else if(o.y<a)return!1;r=this.createVertex((a-s)/i,a)}else if(u<d){if(!o||o.x<n)o=this.createVertex(n,i*n+s);else if(o.x>=h)return!1;r=this.createVertex(h,i*h+s)}else{if(!o||o.x>h)o=this.createVertex(h,i*h+s);else if(o.x<n)return!1;r=this.createVertex(n,i*n+s)}return e.va=o,e.vb=r,!0},e.prototype.clipEdge=function(e,t){var r=e.va.x,i=e.va.y,s=0,o=1,n=e.vb.x-r,h=e.vb.y-i,a=r-t.xl;if(0===n&&a<0)return!1;var l=-a/n;if(n<0){if(l<s)return!1;l<o&&(o=l)}else if(n>0){if(l>o)return!1;l>s&&(s=l)}if(a=t.xr-r,0===n&&a<0)return!1;if(l=a/n,n<0){if(l>o)return!1;l>s&&(s=l)}else if(n>0){if(l<s)return!1;l<o&&(o=l)}if(a=i-t.yt,0===h&&a<0)return!1;if(l=-a/h,h<0){if(l<s)return!1;l<o&&(o=l)}else if(h>0){if(l>o)return!1;l>s&&(s=l)}if(a=t.yb-i,0===h&&a<0)return!1;if(l=a/h,h<0){if(l>o)return!1;l>s&&(s=l)}else if(h>0){if(l<s)return!1;l<o&&(o=l)}return s>0&&(e.va=this.createVertex(r+s*n,i+s*h)),o<1&&(e.vb=this.createVertex(r+o*n,i+o*h)),(s>0||o<1)&&(this.cells[e.lSite.voronoiId].closeMe=!0,this.cells[e.rSite.voronoiId].closeMe=!0),!0},e.prototype.clipEdges=function(e){for(var t,r=this.edges,i=r.length,s=Math.abs;i--;)t=r[i],(!this.connectEdge(t,e)||!this.clipEdge(t,e)||s(t.va.x-t.vb.x)<1e-9&&s(t.va.y-t.vb.y)<1e-9)&&(t.va=t.vb=null,r.splice(i,1))},e.prototype.closeCells=function(e){for(var t,r,i,s,o,n,h,a,l,c=e.xl,b=e.xr,f=e.yt,u=e.yb,p=this.cells,d=p.length,v=Math.abs;d--;)if((t=p[d]).prepareHalfedges()&&t.closeMe){for(s=(i=t.halfedges).length,r=0;r<s;){if(n=i[r].getEndpoint(),a=i[(r+1)%s].getStartpoint(),v(n.x-a.x)>=1e-9||v(n.y-a.y)>=1e-9)switch(!0){case this.equalWithEpsilon(n.x,c)&&this.lessThanWithEpsilon(n.y,u):if(l=this.equalWithEpsilon(a.x,c),h=this.createVertex(c,l?a.y:u),o=this.createBorderEdge(t.site,n,h),r++,i.splice(r,0,this.createHalfedge(o,t.site,null)),s++,l)break;n=h;case this.equalWithEpsilon(n.y,u)&&this.lessThanWithEpsilon(n.x,b):if(l=this.equalWithEpsilon(a.y,u),h=this.createVertex(l?a.x:b,u),o=this.createBorderEdge(t.site,n,h),r++,i.splice(r,0,this.createHalfedge(o,t.site,null)),s++,l)break;n=h;case this.equalWithEpsilon(n.x,b)&&this.greaterThanWithEpsilon(n.y,f):if(l=this.equalWithEpsilon(a.x,b),h=this.createVertex(b,l?a.y:f),o=this.createBorderEdge(t.site,n,h),r++,i.splice(r,0,this.createHalfedge(o,t.site,null)),s++,l)break;n=h;case this.equalWithEpsilon(n.y,f)&&this.greaterThanWithEpsilon(n.x,c):if(l=this.equalWithEpsilon(a.y,f),h=this.createVertex(l?a.x:c,f),o=this.createBorderEdge(t.site,n,h),r++,i.splice(r,0,this.createHalfedge(o,t.site,null)),s++,l)break;if(n=h,l=this.equalWithEpsilon(a.x,c),h=this.createVertex(c,l?a.y:u),o=this.createBorderEdge(t.site,n,h),r++,i.splice(r,0,this.createHalfedge(o,t.site,null)),s++,l)break;if(n=h,l=this.equalWithEpsilon(a.y,u),h=this.createVertex(l?a.x:b,u),o=this.createBorderEdge(t.site,n,h),r++,i.splice(r,0,this.createHalfedge(o,t.site,null)),s++,l)break;if(n=h,l=this.equalWithEpsilon(a.x,b),h=this.createVertex(b,l?a.y:f),o=this.createBorderEdge(t.site,n,h),r++,i.splice(r,0,this.createHalfedge(o,t.site,null)),s++,l)break;default:throw"Voronoi.closeCells() > this makes no sense!"}r++}t.closeMe=!1}},e.prototype.quantizeSites=function(e){for(var t,r=this.ε,i=e.length;i--;)(t=e[i]).x=Math.floor(t.x/r)*r,t.y=Math.floor(t.y/r)*r},e.prototype.recycle=function(e){if(e){if(!(e instanceof this.Diagram))throw"Voronoi.recycleDiagram() > Need a Diagram object.";this.toRecycle=e}},e.prototype.compute=function(e,t){var r=new Date;this.reset(),this.toRecycle&&(this.vertexJunkyard=this.vertexJunkyard.concat(this.toRecycle.vertices),this.edgeJunkyard=this.edgeJunkyard.concat(this.toRecycle.edges),this.cellJunkyard=this.cellJunkyard.concat(this.toRecycle.cells),this.toRecycle=null);var i=e.slice(0);i.sort(function(e,t){var r=t.y-e.y;return r||t.x-e.x});for(var s,o,n,h=i.pop(),a=0,l=this.cells;;)if(n=this.firstCircleEvent,h&&(!n||h.y<n.y||h.y===n.y&&h.x<n.x))h.x===s&&h.y===o||(l[a]=this.createCell(h),h.voronoiId=a++,this.addBeachsection(h),o=h.y,s=h.x),h=i.pop();else{if(!n)break;this.removeBeachsection(n.arc)}this.clipEdges(t),this.closeCells(t);var c=new Date,b=new this.Diagram;return b.cells=this.cells,b.edges=this.edges,b.vertices=this.vertices,b.execTime=c.getTime()-r.getTime(),this.reset(),b},"undefined"!=typeof module&&(module.exports=e);
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
},{"./back-in-out":"PRCQ","./back-in":"zIMB","./back-out":"2p5i","./bounce-in-out":"T8wt","./bounce-in":"UYy4","./bounce-out":"Neu6","./circ-in-out":"V8jc","./circ-in":"/ehr","./circ-out":"w51Y","./cubic-in-out":"vclg","./cubic-in":"gVmS","./cubic-out":"/Mmv","./elastic-in-out":"ddOc","./elastic-in":"wEBC","./elastic-out":"reQF","./expo-in-out":"3kcF","./expo-in":"qiZq","./expo-out":"A8oK","./linear":"8VPf","./quad-in-out":"RyhL","./quad-in":"g0GT","./quad-out":"jDSy","./quart-in-out":"lAMl","./quart-in":"YTnM","./quart-out":"9adZ","./quint-in-out":"P873","./quint-in":"l6e8","./quint-out":"gzrT","./sine-in-out":"t4Hf","./sine-in":"YFBx","./sine-out":"X/6S"}],"V5eC":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=d,exports.colors=void 0;var r=n(require("voronoi")),e=n(require("@sunify/lerp-color")),t=n(require("eases")),o=require("./constants");function n(r){return r&&r.__esModule?r:{default:r}}function a(r){return u(r)||l(r)||i()}function i(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(r){if(Symbol.iterator in Object(r)||"[object Arguments]"===Object.prototype.toString.call(r))return Array.from(r)}function u(r){if(Array.isArray(r)){for(var e=0,t=new Array(r.length);e<r.length;e++)t[e]=r[e];return t}}var c={primary:"#00FFEE",secondary:"#7800FF"};exports.colors=c;var s=new r.default,f=null;function v(r,e){return Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2)}function y(r){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,o={},n=e.default.apply(void 0,a(r));return function(r){var e=Math.floor(r/(1/t));return o[e]=o[e]||n(r),o[e]}}var p=y(["rgba(#A0F, 0.02)","rgba(#33a, 0.1)","rgba(#AAF, 0.2)","rgba(#0FE, 0.02)","rgba(#000, 0)"],30);function d(r,e,n,a){s.recycle(f);var i={xl:-1e3,xr:e.canvas.width/o.PIXEL_RATIO+1e3,yt:-1e3,yb:e.canvas.height/o.PIXEL_RATIO+1e3};f=s.compute(r,i);r.forEach(function(r){var t,n=Date.now()-r.time;e.fillStyle="rgba(255, 255, 255, ".concat((t=n/1e4,Math.sin((.5-t)*Math.PI*2)/2),")"),e.fillRect(r.pos.x*o.PIXEL_RATIO,r.pos.y*o.PIXEL_RATIO,1,1)});for(var l=0,u=f.edges.length;l<u;l++){var c=f.edges[l],y=c.va,d=c.vb,I=v(y,d);e.beginPath(),e.lineWidth=1,e.strokeStyle=p(t.default.circOut(Math.min(1,I/1600))),e.moveTo(y.x*o.PIXEL_RATIO,y.y*o.PIXEL_RATIO),e.lineTo(d.x*o.PIXEL_RATIO,d.y*o.PIXEL_RATIO),e.stroke()}}
},{"voronoi":"Kmmy","@sunify/lerp-color":"8XB+","eases":"9uiP","./constants":"Ueo9"}],"00wy":[function(require,module,exports) {
"use strict";var e=i(require("run-with-fps")),t=require("v-for-vector"),r=i(require("@sunify/lerp-color")),o=i(require("./point")),n=require("./constants"),c=s(require("./renderPoints"));function s(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};o.get||o.set?Object.defineProperty(t,r,o):t[r]=e[r]}return t.default=e,t}function i(e){return e&&e.__esModule?e:{default:e}}var u=window.innerWidth,a=window.innerHeight,d=document.getElementById("bg"),l=d.getContext("2d");d.width=u*n.PIXEL_RATIO,d.height=a*n.PIXEL_RATIO,d.style.width=u+"px",d.style.height=a+"px",document.documentElement.style.setProperty("--primary",c.colors.primary),document.documentElement.style.setProperty("--primary-fade","".concat(c.colors.primary,"AA")),document.documentElement.style.setProperty("--secondary",(0,r.default)(c.colors.secondary,"#FFF",.6));var p=document.querySelector(".content"),f=document.querySelector(".projects-overlay");document.addEventListener("click",function(e){e.target.classList&&e.target.classList.contains("projects-toggle")&&(document.body.classList.toggle("st-show-projects"),document.body.classList.contains("st-show-projects")?(f.setAttribute("tabindex","0"),p.setAttribute("tabindex","-1"),f.focus()):(f.setAttribute("tabindex","-1"),p.setAttribute("tabindex","0"),p.focus()))}),document.addEventListener("keyup",function(e){27===e.keyCode&&document.body.classList.remove("st-show-projects")});var y=[],m=[],h=t.Vector.cartesian(u/2,a/2),b=0,g=function(){y.forEach(function(e,t,r){Date.now()-e.time<n.POINTS_TTL||m.push(r.splice(t,1)[0])}),y.forEach(function(e){e.update()}),(0,c.default)(y,l,u,a)},w=[(0,e.default)(function(){var e=2*Math.PI*Math.random();y.push(new o.default(t.Vector.polar(e,0).add(h),t.Vector.polar(e,0*Math.random()),t.Vector.polar(e,.1)))},20)];w.push((0,e.default)(g,30)),module.hot&&module.hot.dispose(function(){w&&w.forEach(function(e){return e()})});
},{"run-with-fps":"VCqk","v-for-vector":"ZG3O","@sunify/lerp-color":"8XB+","./point":"q04K","./constants":"Ueo9","./renderPoints":"V5eC"}]},{},["00wy"], null)
//# sourceMappingURL=/canvas-playground/js.f1eeaf04.map