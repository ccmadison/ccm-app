"use strict";(self.webpackChunkccm_app=self.webpackChunkccm_app||[]).push([[597],{9308:function(e,t,r){function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.r(t),r.d(t,{default:function(){return m}}),r(1539),r(4747),r(2222),r(4916),r(5306),r(2526),r(1817),r(2165),r(6992),r(8783),r(3948),r(1038),r(7042),r(8309),r(8674),r(1249),r(9600);var o=function(){var e,t=document.querySelectorAll('input[id*="daysRange"]');console.log(t),(e=t,function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){var t=e.id.slice(-1);e.addEventListener("input",(function(e){document.getElementById("DayValue".concat(t)).placeholder=e.target.value}))}))};function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var c=document.getElementById("requestTimeModal"),l=function(e){e.preventDefault(),r.e(424).then(r.t.bind(r,7424,23)).then((function(t){var r=t.default,n=e.target;r.getOrCreateInstance(c).toggle(),null==n.querySelector(".form-check-input")?(c.querySelector(".modal-body").innerHTML='<div class="my-5"><h2>Whoops!</h2><h5>Please select a time first.</h5></div>',console.error("Error: you need to select a time first.")):new Promise((function(e,t){var r,n=document.querySelectorAll(".form-check-input"),o=[];(r=n,function(e){if(Array.isArray(e))return a(e)}(r)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(r)||function(e,t){if(e){if("string"==typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(r)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){return 1==e.checked&&o.push(e.value),o}));var l=o.map((function(e,t){return'<div class="row">\n    <div class="col mb-3">\n      <div class="card card-body">\n      <div class="row">\n        <div class="col-3 d-flex flex-column justify-content-center">\n          <h2>'.concat(e,'</h2>\n        </div>\n        <div class="col-5">\n          <label for="daysRange').concat(t,'" class="form-label">Number of days to reserve</label>\n          <input type="range" class="form-range" min="7" max="90" step="1" id="daysRange').concat(t,'">\n        </div>\n        <div class="col-3 d-flex flex-column justify-content-center">\n          <div class="input-group">\n          <input id="DayValue').concat(t,'" type="text" class="form-control" placeholder="" aria-label="Number of days" aria-describedby="days').concat(t,'" disabled>\n          <span class="input-group-text" id="days').concat(t,'">days</span>\n        </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>')}));return c.querySelector(".modal-body").innerHTML=l.join(""),e()})).then((function(){return o()}))}))};function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var u=document.getElementById("AgendaTable"),s=document.getElementById("Form"),d=(s.querySelector("#Submit"),".Select");function f(e,t,r){var n=e.querySelector(".form-check-input"),o=e.querySelector(".form-check-label");n.checked=t,o.textContent=r,e.classList.toggle("btn-primary"),e.classList.toggle("btn-outline-primary")}function y(e){if(e.target.matches(d)){var t,r=e.target;null==r.querySelector(".form-check-input")&&(t=d,(n=document.querySelectorAll(t),function(e){if(Array.isArray(e))return i(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,t){if(e){if("string"==typeof e)return i(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(e,t):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).forEach((function(e){var t=e.dataset.hour,r='<input class="form-check-input" type="radio" name="" id="'.concat(t.replace(/^(\d\d?):.+([A,P]M)/,"$1$2"),'" value="').concat(t,'">\n    &nbsp;<label class="form-check-label" for="').concat(t.replace(/^(\d\d?):.+([A,P]M)/,"$1$2"),'">\n      Select\n    </label>');e.innerHTML=r})),s.querySelector("#Submit").disabled=!1),0==r.querySelector(".form-check-input").checked?f(r,!0,"Selected"):f(r,!1,"Select")}var n}var m=function(){u.addEventListener("click",y),s.addEventListener("submit",l,!1)}}}]);