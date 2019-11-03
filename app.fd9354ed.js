parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"QdeU":[function(require,module,exports) {
function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function r(e,r,n){return r&&t(e.prototype,r),n&&t(e,n),e}var n=function(){function t(){e(this,t),this.initialTaskRender(),this.creatButtonListener(),this.creatStatusFilterListener(),this.creatPriorFilterListener(),this.creatSearchFilterListener()}return r(t,[{key:"initialTaskRender",value:function(){var e=new DocumentFragment;s.length=0,a.forEach(function(t){if("deleted"!=t.status){var r=document.createElement("div");s.push(new i(t,r)),e.append(r)}}),document.querySelector(".tasks-section").append(e)}},{key:"creatSearchFilterListener",value:function(){document.querySelector(".search-input").addEventListener("input",function(){var e=document.querySelectorAll(".task-block"),t=document.querySelector(".search-input").value.trim().toLowerCase();t?e.forEach(function(e){e.querySelector(".task-title").innerHTML.trim().toLowerCase().includes(t)?e.classList.remove("hidden-search"):e.classList.add("hidden-search")}):e.forEach(function(e){return e.classList.remove("hidden-search")})})}},{key:"creatStatusFilterListener",value:function(){document.querySelector(".status-filter").addEventListener("change",function(){var e=document.querySelectorAll(".task-block");"all"!=event.target.value?e.forEach(function(e){e.classList.contains(event.target.value)?e.classList.remove("hidden-status"):e.classList.add("hidden-status")}):e.forEach(function(e){return e.classList.remove("hidden-status")})})}},{key:"creatPriorFilterListener",value:function(){document.querySelector(".prior-filter").addEventListener("change",function(){var e=document.querySelectorAll(".task-block");console.log(e),"all"!=event.target.value?e.forEach(function(e){e.querySelector(".priority-mark").innerHTML!=event.target.value?e.classList.add("hidden-prior"):e.classList.remove("hidden-prior")}):e.forEach(function(e){return e.classList.remove("hidden-prior")})})}},{key:"creatButtonListener",value:function(){var e=this;document.querySelector(".creat-button").addEventListener("click",function(){return e.creatTask()})}},{key:"creatTask",value:function(){var e=document.querySelector(".create-block");e.classList.remove("hidden"),e.querySelector(".new-task-prior").value="";var t=function t(){e.querySelector(".new-task-title").value="",e.querySelector(".new-task-description").value="",e.classList.add("hidden"),e.querySelector(".cancel").removeEventListener("click",t),e.querySelector(".new-task-form").removeEventListener("submit",r)},r=function r(){var n={};n.title=e.querySelector(".new-task-title").value,n.desc=e.querySelector(".new-task-description").value,n.prior=e.querySelector(".new-task-prior").value,n.status="open",e.querySelector(".new-task-title").value="",e.querySelector(".new-task-description").value="",e.querySelector(".new-task-prior").value="",e.querySelector(".new-task-form").removeEventListener("submit",r),e.querySelector(".cancel").removeEventListener("click",t),e.classList.add("hidden");var a=document.createElement("div");s.push(new i(n,a)),document.querySelector(".tasks-section").append(a)};e.querySelector(".cancel").addEventListener("click",t,!1),e.querySelector(".new-task-form").addEventListener("submit",r,!1)}}]),t}(),i=function(){function t(r,n){e(this,t),this.title=r.title,this.desc=r.desc,this.prior=r.prior,this.status=r.status,this.container=n,this.render(n,this.status)}return r(t,[{key:"editTask",value:function(e){for(var t in e)this[t]=e[t];this.render(this.container,this.status)}},{key:"doneTask",value:function(){this.status="done",this.render(this.container,this.status)}},{key:"doneListener",value:function(){var e=this;this.container.querySelector(".done-btn").addEventListener("click",function(){return e.doneTask()})}},{key:"editListener",value:function(){var e=this;this.container.querySelector(".edit-btn").addEventListener("click",function(){return e.handleEdition()})}},{key:"deleteListener",value:function(){var e=this;this.container.querySelector(".delete-btn").addEventListener("click",function(){e.status="deleted",setTimeout(c,50),e.container.remove()})}},{key:"handleEdition",value:function(){var e=document.querySelector(".create-block");e.classList.remove("hidden");var t=this;e.querySelector(".new-task-title").value=this.title,e.querySelector(".new-task-description").value=this.desc,e.querySelector(".new-task-prior").value=this.prior;var r=function t(){e.querySelector(".new-task-title").value="",e.querySelector(".new-task-description").value="",e.classList.add("hidden"),e.querySelector(".cancel").removeEventListener("click",t),e.querySelector(".new-task-form").removeEventListener("submit",n)},n=function n(){var i={};i.title=e.querySelector(".new-task-title").value,i.desc=e.querySelector(".new-task-description").value,i.prior=e.querySelector(".new-task-prior").value,e.querySelector(".new-task-title").value="",e.querySelector(".new-task-description").value="",e.querySelector(".new-task-prior").value="",e.querySelector(".cancel").removeEventListener("click",r),e.querySelector(".new-task-form").removeEventListener("submit",n),e.classList.add("hidden"),t.editTask(i)};e.querySelector(".cancel").addEventListener("click",r,!1),e.querySelector(".new-task-form").addEventListener("submit",n,!1)}},{key:"render",value:function(e,t){setTimeout(c,50),e.innerHTML="";var r=document.createElement("article");r.classList.add("task-block"),"done"==t?(r.classList.add("done"),r.classList.remove("open")):(r.classList.add("open"),r.classList.remove("done"));var n=document.createElement("div");n.classList.add("task-text");var i=document.createElement("p");i.classList.add("task-title"),i.innerHTML=this.title;var a=document.createElement("p");a.classList.add("task-desc"),a.innerHTML=this.desc,n.append(i),n.append(a),r.append(n);var s=document.createElement("div");s.classList.add("task-bottom-menu-wrapper");var o=document.createElement("span");o.classList.add("priority-mark");var l="high"==this.prior?"high":"low"==this.prior?"low":"normal";o.classList.add(l),o.innerHTML=this.prior,s.append(o);var u=document.createElement("div");u.classList.add("edit-task"),u.setAttribute("tabindex",0);var d=document.createElement("ul");d.classList.add("edition-menu");for(var v=0;v<3;v++){var m=document.createElement("li");m.classList.add("edition-item");var h=document.createElement("button");h.classList.add("edition-item-btn"),h.innerHTML=0==v?"done":1==v?"edit":"delete";var k=0==v?"done-btn":1==v?"edit-btn":"delete-btn";h.classList.add(k),h.setAttribute("tabindex",0),m.append(h),d.append(m)}u.append(d),s.append(u),r.append(s),e.append(r),this.doneListener(),this.editListener(),this.deleteListener()}}]),t}(),a=JSON.parse(localStorage.getItem("arrayOfTasks"))||[],s=[];function c(){localStorage.setItem("arrayOfTasks",JSON.stringify(s))}new n;
},{}]},{},["QdeU"], null)
//# sourceMappingURL=/app.fd9354ed.js.map