(self.webpackChunkccm_app=self.webpackChunkccm_app||[]).push([[348],{2348:function(t,r,e){"use strict";function n(t,r){(null==r||r>t.length)&&(r=t.length);for(var e=0,n=new Array(r);e<r;e++)n[e]=t[e];return n}function o(t,r,e,n,o,a,i){try{var c=t[a](i),u=c.value}catch(t){return void e(t)}c.done?r(u):Promise.resolve(u).then(n,o)}function a(t){return function(){var r=this,e=arguments;return new Promise((function(n,a){var i=t.apply(r,e);function c(t){o(i,n,a,c,u,"next",t)}function u(t){o(i,n,a,c,u,"throw",t)}c(void 0)}))}}e.r(r),e(5666),e(4916),e(4765),e(5306),e(6992),e(1539),e(8674),e(8783),e(3948),e(2222),e(4747),e(7042),e(2526),e(1817),e(2165),e(8309),e(1038);var i=document.getElementById("Agenda"),c=document.getElementById("Submit"),u={spreadsheetId:"1UyPFZVN4NIo959qxGCwP6cyKoe9fq5KHD0zE2hyGUi8",valueInputOption:"USER_ENTERED",includeValuesInResponse:!0},l={majorDimension:"COLUMNS"};function s(){return(s=a(regeneratorRuntime.mark((function t(r,e){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,gapi.client.sheets.spreadsheets.values.update(r,e);case 2:if(200!=(n=t.sent).status){t.next=5;break}return t.abrupt("return",n);case 5:throw new Error("Error!");case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t,r){if(null==r)return"&nbsp;";var n=new Date,o=new Date,a=new Date,i=new Date(r),c=-1!==t.search(/PM$/)?parseInt(t.replace(/(\d\d)?:00\sPM/,"$1"),10)+12:t.replace(/^\d\d?:00\sAM/,"$1");if(o.setHours(0,0,0,0),a.setHours(c+1,0,0,0),!(o.getTime()>=i.getTime()&&n.getTime()>=a.getTime()))return(i.getTime()-o.getTime())/864e5;e.e(805).then(e.bind(e,6805)).then((function(r){var e=(0,r.default)(),n="Agenda!".concat(e[t].status,":").concat(e[t].end);u.range=n,l.range=n,l.values=[["FALSE"],[""]],function(t,r){return s.apply(this,arguments)}(u,l).then((function(r){return console.log(r),html+="<td>".concat(t,'</td><td>Open</td><td>&nbsp;</td><td>\n  <button type="button" data-hour="').concat(t,'" class="btn btn-outline-primary buttons__select Select">\n    Select\n  </button></td>')})).catch((function(t){return console.error("Error updating Sheet: ".concat(t.message),t)}))}))}function h(t){var r="";return t.forEach((function(t){var e="TRUE"==t[1]?' class="bg-primary tables__white"':"";r+="<tr".concat(e,">\n    ").concat(function(t){var r,e,o=(e=3,function(t){if(Array.isArray(t))return t}(r=t)||function(t,r){var e=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var n,o,a=[],i=!0,c=!1;try{for(e=e.call(t);!(i=(n=e.next()).done)&&(a.push(n.value),!r||a.length!==r);i=!0);}catch(t){c=!0,o=t}finally{try{i||null==e.return||e.return()}finally{if(c)throw o}}return a}}(r,e)||function(t,r){if(t){if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);return"Object"===e&&t.constructor&&(e=t.constructor.name),"Map"===e||"Set"===e?Array.from(t):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?n(t,r):void 0}}(r,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=o[0],i=o[1],c=o[2],u="FALSE"==i?"Open":"&nbsp;",l=null==c?'<button type="button" data-hour="'.concat(a,'" class="btn btn-outline-primary buttons__select Select">Select</button>'):c,s=f(a,c);return null==s?"<td>".concat(a,'</td><td>Open</td><td>&nbsp;</td>\n    <td><button type="button" data-hour="').concat(a,'" class="btn btn-outline-primary buttons__select Select">Select</button></td>'):"<td>".concat(a,"</td><td>").concat(u,"</td><td>").concat(s,"</td><td>").concat(l,"</td>")}(t),"\n  </tr>")})),r}r.default=function(t){var r=t.result.values,e='<div class="table-responsive">\n  <table id="AgendaTable"\n   class="table table-striped table-hover table-sm table__agenda-table tables__align-cell-middle">\n    <thead>\n      <tr>\n        '.concat(function(t){var r="";return t.forEach((function(t,e){return r+=2==e?"<th>Days remaining</th><th>".concat(t,"</th>"):"<th>".concat(t,"</th>")})),r}(r[1]),"\n      </tr>\n    </thead>\n    <tbody>\n      ").concat(h(r.slice(2)),"\n    </tbody>\n    </table>\n  </div>");return c.disabled=!1,i.innerHTML="",i.innerHTML=e}},1530:function(t,r,e){"use strict";var n=e(8710).charAt;t.exports=function(t,r,e){return r+(e?n(t,r).length:1)}},8533:function(t,r,e){"use strict";var n=e(2092).forEach,o=e(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},9341:function(t,r,e){"use strict";var n=e(7293);t.exports=function(t,r){var e=[][t];return!!e&&n((function(){e.call(null,r||function(){return 1},1)}))}},7007:function(t,r,e){"use strict";e(4916);var n=e(1702),o=e(1320),a=e(2261),i=e(7293),c=e(5112),u=e(8880),l=c("species"),s=RegExp.prototype;t.exports=function(t,r,e,f){var h=c(t),p=!i((function(){var r={};return r[h]=function(){return 7},7!=""[t](r)})),d=p&&!i((function(){var r=!1,e=/a/;return"split"===t&&((e={}).constructor={},e.constructor[l]=function(){return e},e.flags="",e[h]=/./[h]),e.exec=function(){return r=!0,null},e[h](""),!r}));if(!p||!d||e){var v=n(/./[h]),y=r(h,""[t],(function(t,r,e,o,i){var c=n(t),u=r.exec;return u===a||u===s.exec?p&&!i?{done:!0,value:v(r,e,o)}:{done:!0,value:c(e,r,o)}:{done:!1}}));o(String.prototype,t,y[0]),o(s,h,y[1])}f&&u(s[h],"sham",!0)}},647:function(t,r,e){var n=e(1702),o=e(7908),a=Math.floor,i=n("".charAt),c=n("".replace),u=n("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,s=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,r,e,n,f,h){var p=e+t.length,d=n.length,v=s;return void 0!==f&&(f=o(f),v=l),c(h,v,(function(o,c){var l;switch(i(c,0)){case"$":return"$";case"&":return t;case"`":return u(r,0,e);case"'":return u(r,p);case"<":l=f[u(c,1,-1)];break;default:var s=+c;if(0===s)return o;if(s>d){var h=a(s/10);return 0===h?o:h<=d?void 0===n[h-1]?i(c,1):n[h-1]+i(c,1):o}l=n[s-1]}return void 0===l?"":l}))}},7651:function(t,r,e){var n=e(7854),o=e(6916),a=e(9670),i=e(614),c=e(4326),u=e(2261),l=n.TypeError;t.exports=function(t,r){var e=t.exec;if(i(e)){var n=o(e,t,r);return null!==n&&a(n),n}if("RegExp"===c(t))return o(u,t,r);throw l("RegExp#exec called on incompatible receiver")}},1150:function(t){t.exports=Object.is||function(t,r){return t===r?0!==t||1/t==1/r:t!=t&&r!=r}},2222:function(t,r,e){"use strict";var n=e(2109),o=e(7854),a=e(7293),i=e(3157),c=e(111),u=e(7908),l=e(6244),s=e(6135),f=e(5417),h=e(1194),p=e(5112),d=e(7392),v=p("isConcatSpreadable"),y=9007199254740991,g="Maximum allowed index exceeded",m=o.TypeError,b=d>=51||!a((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),w=h("concat"),x=function(t){if(!c(t))return!1;var r=t[v];return void 0!==r?!!r:i(t)};n({target:"Array",proto:!0,forced:!b||!w},{concat:function(t){var r,e,n,o,a,i=u(this),c=f(i,0),h=0;for(r=-1,n=arguments.length;r<n;r++)if(x(a=-1===r?i:arguments[r])){if(h+(o=l(a))>y)throw m(g);for(e=0;e<o;e++,h++)e in a&&s(c,h,a[e])}else{if(h>=y)throw m(g);s(c,h++,a)}return c.length=h,c}})},5306:function(t,r,e){"use strict";var n=e(2104),o=e(6916),a=e(1702),i=e(7007),c=e(7293),u=e(9670),l=e(614),s=e(9303),f=e(7466),h=e(1340),p=e(4488),d=e(1530),v=e(8173),y=e(647),g=e(7651),m=e(5112)("replace"),b=Math.max,w=Math.min,x=a([].concat),E=a([].push),L=a("".indexOf),_=a("".slice),S="$0"==="a".replace(/./,"$0"),O=!!/./[m]&&""===/./[m]("a","$0");i("replace",(function(t,r,e){var a=O?"$":"$0";return[function(t,e){var n=p(this),a=null==t?void 0:v(t,m);return a?o(a,t,n,e):o(r,h(n),t,e)},function(t,o){var i=u(this),c=h(t);if("string"==typeof o&&-1===L(o,a)&&-1===L(o,"$<")){var p=e(r,i,c,o);if(p.done)return p.value}var v=l(o);v||(o=h(o));var m=i.global;if(m){var S=i.unicode;i.lastIndex=0}for(var O=[];;){var T=g(i,c);if(null===T)break;if(E(O,T),!m)break;""===h(T[0])&&(i.lastIndex=d(c,f(i.lastIndex),S))}for(var I,j="",k=0,A=0;A<O.length;A++){for(var $=h((T=O[A])[0]),R=b(w(s(T.index),c.length),0),N=[],P=1;P<T.length;P++)E(N,void 0===(I=T[P])?I:String(I));var M=T.groups;if(v){var G=x([$],N,R,c);void 0!==M&&E(G,M);var F=h(n(o,void 0,G))}else F=y($,c,R,N,M,o);R>=k&&(j+=_(c,k,R)+F,k=R+$.length)}return j+_(c,k)}]}),!!c((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!S||O)},4765:function(t,r,e){"use strict";var n=e(6916),o=e(7007),a=e(9670),i=e(4488),c=e(1150),u=e(1340),l=e(8173),s=e(7651);o("search",(function(t,r,e){return[function(r){var e=i(this),o=null==r?void 0:l(r,t);return o?n(o,r,e):new RegExp(r)[t](u(e))},function(t){var n=a(this),o=u(t),i=e(r,n,o);if(i.done)return i.value;var l=n.lastIndex;c(l,0)||(n.lastIndex=0);var f=s(n,o);return c(n.lastIndex,l)||(n.lastIndex=l),null===f?-1:f.index}]}))},4747:function(t,r,e){var n=e(7854),o=e(8324),a=e(8509),i=e(8533),c=e(8880),u=function(t){if(t&&t.forEach!==i)try{c(t,"forEach",i)}catch(r){t.forEach=i}};for(var l in o)o[l]&&u(n[l]&&n[l].prototype);u(a)},5666:function(t){var r=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{u({},"")}catch(t){u=function(t,r,e){return t[r]=e}}function l(t,r,e,n){var o=r&&r.prototype instanceof y?r:y,a=Object.create(o.prototype),i=new I(n||[]);return a._invoke=function(t,r,e){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===d){if("throw"===o)throw a;return k()}for(e.method=o,e.arg=a;;){var i=e.delegate;if(i){var c=S(i,e);if(c){if(c===v)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=d,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=p;var u=s(t,r,e);if("normal"===u.type){if(n=e.done?d:h,u.arg===v)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=d,e.method="throw",e.arg=u.arg)}}}(t,e,i),a}function s(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",v={};function y(){}function g(){}function m(){}var b={};u(b,a,(function(){return this}));var w=Object.getPrototypeOf,x=w&&w(w(j([])));x&&x!==e&&n.call(x,a)&&(b=x);var E=m.prototype=y.prototype=Object.create(b);function L(t){["next","throw","return"].forEach((function(r){u(t,r,(function(t){return this._invoke(r,t)}))}))}function _(t,r){function e(o,a,i,c){var u=s(t[o],t,a);if("throw"!==u.type){var l=u.arg,f=l.value;return f&&"object"==typeof f&&n.call(f,"__await")?r.resolve(f.__await).then((function(t){e("next",t,i,c)}),(function(t){e("throw",t,i,c)})):r.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return e("throw",t,i,c)}))}c(u.arg)}var o;this._invoke=function(t,n){function a(){return new r((function(r,o){e(t,n,r,o)}))}return o=o?o.then(a,a):a()}}function S(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,S(t,e),"throw"===e.method))return v;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return v}var o=s(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var a=o.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,v):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function O(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(O,this),this.reset(!0)}function j(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return i.next=i}}return{next:k}}function k(){return{value:r,done:!0}}return g.prototype=m,u(E,"constructor",m),u(m,"constructor",g),g.displayName=u(m,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===g||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u(t,c,"GeneratorFunction")),t.prototype=Object.create(E),t},t.awrap=function(t){return{__await:t}},L(_.prototype),u(_.prototype,i,(function(){return this})),t.AsyncIterator=_,t.async=function(r,e,n,o,a){void 0===a&&(a=Promise);var i=new _(l(r,e,n,o),a);return t.isGeneratorFunction(e)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},L(E),u(E,c,"Generator"),u(E,a,(function(){return this})),u(E,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=j,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var u=n.call(i,"catchLoc"),l=n.call(i,"finallyLoc");if(u&&l){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=r&&r<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=r,a?(this.method="next",this.next=a.finallyLoc,v):this.complete(i)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),v},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),v}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:j(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),v}},t}(t.exports);try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}}]);