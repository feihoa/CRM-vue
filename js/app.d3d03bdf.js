(function(e){function t(t){for(var n,a,i=t[0],s=t[1],u=t[2],l=0,d=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n]);f&&f(t);while(d.length)d.shift()();return c.push.apply(c,u||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,a=1;a<r.length;a++){var i=r[a];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o={app:0},c=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-10b86dd9":"914ebeda","chunk-1af89739":"70c43018","chunk-2d0d05dc":"1acddd70","chunk-2d217a99":"4885e6b2","chunk-2d21a3d2":"267d416d","chunk-53c8ec65":"6dd7526f","chunk-5f4ad635":"5a82574f","chunk-bc3311b2":"09cd63f3","chunk-c420df12":"02a551e2"}[e]+".js"}function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.e=function(e){var t=[],r={"chunk-1af89739":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-10b86dd9":"31d6cfe0","chunk-1af89739":"385dd9a5","chunk-2d0d05dc":"31d6cfe0","chunk-2d217a99":"31d6cfe0","chunk-2d21a3d2":"31d6cfe0","chunk-53c8ec65":"31d6cfe0","chunk-5f4ad635":"31d6cfe0","chunk-bc3311b2":"31d6cfe0","chunk-c420df12":"31d6cfe0"}[e]+".css",o=s.p+n,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===n||l===o))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){u=d[i],l=u.getAttribute("data-href");if(l===n||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=n,delete a[e],f.parentNode.removeChild(f),r(c)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var c=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=c);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",d.name="ChunkLoadError",d.type=n,d.request=a,r[1](d)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/CRM-vue/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var f=l;c.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"34cf":function(e){e.exports=JSON.parse('{"base":"EUR","date":"2021-09-18","rates":{"EUR":"1","RUB":"85.458011","USD":"1.17259"}}')},4360:function(e,t,r){"use strict";var n=r("1da1"),a=(r("96cf"),r("d3b7"),r("2b0e")),o=r("2f62"),c=(r("b0c0"),r("614a")),i={actions:{login:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return e.dispatch,n=e.commit,a=t.email,o=t.password,r.prev=2,r.next=5,c["a"].auth().signInWithEmailAndPassword(a,o);case 5:r.next=11;break;case 7:throw r.prev=7,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 11:case"end":return r.stop()}}),r,null,[[2,7]])})))()},register:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=t.email,i=t.password,s=t.name,r.prev=2,r.next=5,c["a"].auth().createUserWithEmailAndPassword(o,i);case 5:return r.next=7,n("getUid");case 7:return u=r.sent,r.next=10,c["a"].database().ref("/users/".concat(u,"/info")).set({bill:1e3,name:s});case 10:r.next=16;break;case 12:throw r.prev=12,r.t0=r["catch"](2),a("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},getUid:function(){var e=c["a"].auth().currentUser;return e?e.uid:null},logout:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,t.next=3,c["a"].auth().signOut();case 3:r("clearInfo");case 4:case"end":return t.stop()}}),t)})))()}}},s=r("5530"),u=r("4f60"),l={state:{info:{}},mutations:{setInfo:function(e,t){e.info=t},clearInfo:function(e){e.info={}}},actions:{updateInfo:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,o=e.getters,r.prev=1,r.next=4,n("getUid");case 4:return c=r.sent,i=Object(s["a"])(Object(s["a"])({},o.info),t),r.next=8,u["a"].database().ref("users/".concat(c,"/info")).update(i);case 8:a("setInfo",i),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},fetchInfo:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,u["a"].database().ref("users/".concat(a,"/info")).once("value");case 7:o=t.sent.val(),n("setInfo",o),t.next=15;break;case 11:throw t.prev=11,t.t0=t["catch"](1),n("setError",t.t0),t.t0;case 15:case"end":return t.stop()}}),t,null,[[1,11]])})))()}},getters:{info:function(e){return e.info}}},d=(r("d81d"),r("b64b"),{state:{currentCategoryId:null},mutations:{setCurrentCategory:function(e,t){e.currentCategoryId=t}},getters:{currentCategoryId:function(e){return e.currentCategoryId}},actions:{createCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.title,i=t.limit,r.prev=2,r.next=5,a("getUid");case 5:return s=r.sent,r.next=8,c["a"].database().ref("/users/".concat(s,"/categories")).push({title:o,limit:i});case 8:return u=r.sent,r.abrupt("return",{title:o,limit:i,id:u.key});case 12:throw r.prev=12,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 16:case"end":return r.stop()}}),r,null,[[2,12]])})))()},updateCategory:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i,s,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,o=t.title,i=t.limit,s=t.id,r.prev=2,r.next=5,a("getUid");case 5:return u=r.sent,r.next=8,c["a"].database().ref("/users/".concat(u,"/categories")).child(s).update({title:o,limit:i});case 8:n("setCurrentCategory",s),r.next=15;break;case 11:throw r.prev=11,r.t0=r["catch"](2),n("setError",r.t0),r.t0;case 15:case"end":return r.stop()}}),r,null,[[2,11]])})))()},fetchCategories:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.prev=1,t.next=4,n("getUid");case 4:return a=t.sent,t.next=7,c["a"].database().ref("/users/".concat(a,"/categories")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(s["a"])(Object(s["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),r("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchCategoryById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.commit,a=e.dispatch,r.prev=1,r.next=4,a("getUid");case 4:return o=r.sent,r.next=7,c["a"].database().ref("/users/".concat(o,"/categories")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return i=r.t0,r.abrupt("return",Object(s["a"])(Object(s["a"])({},i),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),n("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}}),f={actions:{createRecord:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,u["a"].database().ref("/users/".concat(o,"/records")).push(t);case 7:return r.abrupt("return",r.sent);case 10:throw r.prev=10,r.t0=r["catch"](1),a("setError",r.t0),r.t0;case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))()},fetchRecords:function(e){return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,n,a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.dispatch,n=e.commit,t.prev=1,t.next=4,r("getUid");case 4:return a=t.sent,t.next=7,u["a"].database().ref("/users/".concat(a,"/records")).once("value");case 7:if(t.t0=t.sent.val(),t.t0){t.next=10;break}t.t0={};case 10:return o=t.t0,t.abrupt("return",Object.keys(o).map((function(e){return Object(s["a"])(Object(s["a"])({},o[e]),{},{id:e})})));case 14:throw t.prev=14,t.t1=t["catch"](1),n("setError",t.t1),t.t1;case 18:case"end":return t.stop()}}),t,null,[[1,14]])})))()},fetchRecordById:function(e,t){return Object(n["a"])(regeneratorRuntime.mark((function r(){var n,a,o,c;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return n=e.dispatch,a=e.commit,r.prev=1,r.next=4,n("getUid");case 4:return o=r.sent,r.next=7,u["a"].database().ref("/users/".concat(o,"/records")).child(t).once("value");case 7:if(r.t0=r.sent.val(),r.t0){r.next=10;break}r.t0={};case 10:return c=r.t0,r.abrupt("return",Object(s["a"])(Object(s["a"])({},c),{},{id:t}));case 14:throw r.prev=14,r.t1=r["catch"](1),a("setError",r.t1),r.t1;case 18:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}},p=r("34cf");a["a"].use(o["a"]);t["a"]=new o["a"].Store({state:{error:null},mutations:{setError:function(e,t){e.error=t},clearError:function(e){e.error=null}},actions:{fetchCurrency:function(){return Object(n["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return"f371011f7e83e87a10ce2bb800f4059c",e.prev=1,e.abrupt("return",p);case 5:return t=e.sent,e.next=8,t.json();case 8:return t=e.sent,t=t.success?t:p,e.abrupt("return",t);case 13:return e.prev=13,e.t0=e["catch"](1),console.log(p),e.abrupt("return",p);case 17:case"end":return e.stop()}}),e,null,[[1,13]])})))()}},getters:{error:function(e){return e.error}},modules:{auth:i,info:l,category:d,record:f}})},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d"),r("4de4");var n=r("2b0e"),a=r("1dce"),o=r.n(a),c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r(e.layout,{tag:"component"},[r("router-view")],1)],1)},i=[],s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"grey darken-1 empty-layout"},[r("router-view")],1)},u=[],l=r("b444"),d=r("e977"),f={computed:{error:function(){return this.$store.getters.error}},watch:{error:function(e){this.$error(l["a"][e.code]||Object(d["a"])("Smth_WentWrong"))}}},p=f,m=r("2877"),h=Object(m["a"])(p,s,u,!1,null,null,null),g=h.exports,v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.loading?r("Loader"):r("div",{staticClass:"app-main-layout"},[r("Navbar",{on:{click:function(t){t.preventDefault(),e.isOpen=!e.isOpen}}}),r("Sidebar",{key:e.locale,model:{value:e.isOpen,callback:function(t){e.isOpen=t},expression:"isOpen"}}),r("main",{staticClass:"app-content",class:{full:!e.isOpen}},[r("div",{staticClass:"app-page"},[r("router-view")],1)]),r("div",{staticClass:"fixed-action-btn"},[r("router-link",{directives:[{name:"toolTip",rawName:"v-toolTip",value:"Создать новую запись",expression:"'Создать новую запись'"}],staticClass:"btn-floating btn-large blue",attrs:{to:"/record","data-position":"left"}},[r("i",{staticClass:"large material-icons"},[e._v("add")])])],1)],1)],1)},b=[],y=r("1da1"),w=(r("96cf"),r("b64b"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("nav",{staticClass:"navbar orange lighten-1"},[r("div",{staticClass:"nav-wrapper"},[r("div",{staticClass:"navbar-left"},[r("a",{attrs:{href:"#"},on:{click:function(t){return t.stopPropagation(),e.$emit("click")}}},[r("i",{staticClass:"material-icons black-text"},[e._v("dehaze")])]),r("span",{staticClass:"black-text"},[e._v(e._s(e._f("date")(e.date,"datetime")))])]),r("ul",{staticClass:"right hide-on-small-and-down"},[r("li",[r("a",{ref:"dropdown",staticClass:"dropdown-trigger black-text",attrs:{href:"#","data-target":"dropdown"}},[e._v(" "+e._s(e.name)+" "),r("i",{staticClass:"material-icons right"},[e._v("arrow_drop_down")])]),r("ul",{staticClass:"dropdown-content",attrs:{id:"dropdown"}},[r("li",[r("router-link",{staticClass:"black-text",attrs:{to:"/profile"}},[r("i",{staticClass:"material-icons"},[e._v("account_circle")]),e._v(e._s(e._f("localize")("Profile"))+" ")])],1),r("li",{staticClass:"divider",attrs:{tabindex:"-1"}}),r("li",[r("a",{staticClass:"black-text",attrs:{href:"#"},on:{click:e.logout}},[r("i",{staticClass:"material-icons"},[e._v("assignment_return")]),e._v(e._s(e._f("localize")("Log_Out"))+" ")])])])])])])])}),_=[],k=(r("b0c0"),{data:function(){return{date:new Date,interval:null,dropdown:null}},mounted:function(){var e=this;this.interval=setInterval((function(){e.date=new Date}),1e3);try{this.dropdown=M.Dropdown.init(this.$refs.dropdown,{constrainWidth:!1})}catch(t){}},beforeDestroy:function(){clearInterval(this.interval),this.dropdown&&this.dropdown.destroy&&this.dropdown.destroy()},computed:{name:function(){return this.$store.getters.info.name}},methods:{logout:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$store.getters.info.locale,t.next=3,e.$store.dispatch("logout");case 3:e.$router.push("/login?message=logout"),e.$store.getters.info.locale=r;case 5:case"end":return t.stop()}}),t)})))()}}}),C=k,x=Object(m["a"])(C,w,_,!1,null,null,null),E=x.exports,O=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",{staticClass:"sidenav app-sidenav",class:{open:e.value}},e._l(e.links,(function(t){return r("router-link",{key:t.url,attrs:{tag:"li","active-class":"active",to:t.url,exact:t.exact}},[r("a",{staticClass:"waves-effect waves-orange pointer",attrs:{href:"#"}},[e._v(e._s(t.title))])])})),1)},R=[],j={props:["value"],data:function(){return{links:[{title:Object(d["a"])("Bill"),url:"/",exact:!0},{title:Object(d["a"])("History"),url:"/history"},{title:Object(d["a"])("Menu_Planning"),url:"/planning"},{title:Object(d["a"])("NewRecord"),url:"/record"},{title:Object(d["a"])("Categories"),url:"/categories"}]}}},N=j,P=Object(m["a"])(N,O,R,!1,null,null,null),S=P.exports,I={name:"main-layout",data:function(){return{isOpen:!0,loading:!0}},mounted:function(){var e=this;return Object(y["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(Object.keys(e.$store.getters.info).length){t.next=3;break}return t.next=3,e.$store.dispatch("fetchInfo");case 3:e.loading=!1;case 4:case"end":return t.stop()}}),t)})))()},components:{Navbar:E,Sidebar:S},computed:{error:function(){return this.$store.getters.error},locale:function(){return this.$store.getters.info.locale}},watch:{error:function(e){this.$error(l["a"][e.code]||Object(d["a"])("Smth_WentWrong"))}}},U=I,L=Object(m["a"])(U,v,b,!1,null,null,null),$=L.exports,A={computed:{layout:function(){return(this.$route.meta.layout||"empty")+"-layout"}},components:{EmptyLayout:g,MainLayout:$}},D=A,T=(r("5c0b"),Object(m["a"])(D,c,i,!1,null,null,null)),B=T.exports,F=(r("d3b7"),r("3ca3"),r("ddb0"),r("8c4f")),H=r("614a");n["a"].use(F["a"]);var W=[{path:"/login",name:"login",meta:{layout:"empty"},component:function(){return r.e("chunk-5f4ad635").then(r.bind(null,"a55b"))}},{path:"/register",name:"register",meta:{layout:"empty"},component:function(){return r.e("chunk-c420df12").then(r.bind(null,"73cf"))}},{path:"/",name:"home",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d21a3d2").then(r.bind(null,"bb51"))}},{path:"/categories",name:"categories",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-10b86dd9").then(r.bind(null,"58c2"))}},{path:"/detail/:id",name:"detail",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d217a99").then(r.bind(null,"c84b"))}},{path:"/history",name:"history",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-bc3311b2").then(r.bind(null,"e4bb"))}},{path:"/planning",name:"planning",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-2d0d05dc").then(r.bind(null,"6859"))}},{path:"/profile",name:"profile",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-1af89739").then(r.bind(null,"c66d"))}},{path:"/record",name:"record",meta:{layout:"main",auth:!0},component:function(){return r.e("chunk-53c8ec65").then(r.bind(null,"43ef"))}}],z=new F["a"]({mode:"hash",base:"/CRM-vue/",routes:W});z.beforeEach((function(e,t,r){var n=H["a"].auth().currentUser,a=e.matched.some((function(e){return e.meta.auth}));a&&!n?r("/login?message=login"):r()}));var J=z,q=r("4360"),Y=(r("99af"),{install:function(e){e.prototype.$message=function(e){M.toast({html:Object(d["a"])(e)})},e.prototype.$error=function(e){M.toast({html:"[".concat(Object(d["a"])("Error"),"] ").concat(Object(d["a"])(e))})}}}),K={install:function(e,t){e.prototype.$title=function(e){var t="CRM";return"".concat(Object(d["a"])(e)," | ").concat(t)}}},V=r("9483");Object(V["a"])("".concat("/CRM-vue/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var G=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-loader"},[r("div",{staticClass:"preloader-wrapper active"},[r("div",{staticClass:"spinner-layer",class:e.color},[e._m(0),e._m(1),e._m(2)])])])},Q=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper left"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"gap-patch"},[r("div",{staticClass:"circle"})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"circle-clipper right"},[r("div",{staticClass:"circle"})])}],X={computed:{color:function(){var e=["spinner-red-only","spinner-blue-only","spinner-green-only"];return e[Math.floor(3*Math.random())]}}},Z=X,ee=Object(m["a"])(Z,G,Q,!1,null,null,null),te=ee.exports;r("caad"),r("2532");function re(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"date",r={};t.includes("date")&&(r.day="2-digit",r.month="long",r.year="numeric"),t.includes("time")&&(r.hour="2-digit",r.minute="2-digit",r.second="2-digit");var n=q["a"].getters.info.locale||"ru-RU";return new Intl.DateTimeFormat(n,r).format(new Date(e))}var ne,ae=r("5bb3"),oe={bind:function(e,t){var r=t.value;M.Tooltip.init(e,{html:r})},unbind:function(e){var t=M.Tooltip.getInstance(e);t&&t.destroy&&t.destroy()}},ce=(r("6885"),r("8832")),ie=r.n(ce),se=r("58ca"),ue=r("4f60");r("256a"),r("2979");n["a"].config.productionTip=!1,n["a"].use(Y),n["a"].use(o.a),n["a"].filter("date",re),n["a"].filter("currency",ae["a"]),n["a"].filter("localize",d["a"]),n["a"].component("Loader",te),n["a"].directive("toolTip",oe),n["a"].component("Paginate",ie.a),n["a"].use(se["a"]),n["a"].use(K),ue["a"].initializeApp({apiKey:"AIzaSyBNW082Ff6sl6UOd5Y8uP7bJ0t34QUP17o",authDomain:"crm-vue-947e0.firebaseapp.com",projectId:"crm-vue-947e0",storageBucket:"crm-vue-947e0.appspot.com",messagingSenderId:"237645323875",appId:"1:237645323875:web:46b2daeeb52507e3726256",measurementId:"G-95P0N1DSRY"}),ue["a"].auth().onAuthStateChanged((function(){ne||(ne=new n["a"]({router:J,store:q["a"],render:function(e){return e(B)}}).$mount("#app"))}))},"5bb3":function(e,t,r){"use strict";function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"RUB";return new Intl.NumberFormat("ru-RU",{style:"currency",currency:t}).format(e)}r.d(t,"a",(function(){return n}))},"5c0b":function(e,t,r){"use strict";r("9c0c")},7704:function(e){e.exports=JSON.parse('{"ProfileTitle":"Профиль","Message_EnterName":"Ведите имя","Name":"Имя","Update":"Обновить","Bill":"Счет","History":"История","Menu_Planning":"Планирование","NewRecord":"Новая запись","Categories":"Категории","No_Categories":"Категорий пока нет","Title":"Название","Create":"Создать","Enter_CategoryName":"Введите название категории","Limit":"Лимит","Min_Value":"Минимальное значение","Edit":"Редактировать","Choose_Category":"Выберите категорию","Updated_Successfully":"Категория успешно обновлена","Category_Created":"Категория была создана","Sum":"Сумма","Date":"Дата","Category":"Категория","Type":"Тип","Open":"Открыть","Record_History":"История записей","No_Records":"Записей пока нет","Add_NewRecord":"Добавьте новую","Back":"Назад","Forward":"Вперед","Details":"Детали","Funds_ForeinCurrency":"Счет в иностранной валюте","Exchange_Rates":"Курс валют","Currency":"Валюта","Rates":"Rehc","Smth_WentWrong":"Что-то пошло не так","Income":"Доход","Outcome":"Расход","Description":"Описание","RecordId_NotFound":"Не найдена запись с id=","Spent_ByCategory":"Расходы по категориям","Planning":"Планирование","Add_Category":"Добавить категорию","From":"из","Over":"Превышение на:","Left":"Осталось:","NotEnoughSymbols":"Недостаточно символов:","Enter_Description":"Введите описание","Record_Created":"Запись успешно создана","Insufficient_Funds":"Недостаточно средств на счете","Profile":"Профиль","Log_Out":"Выйти","Home":"Главная","Login":"Войти","Register":"Зарегистрироваться","Home_Book":"Домашняя бухгалтерия","EmailEmpty_Err":"Поле email не должно быть пустым","NotEmail_Err":"Введите корректный email","Password":"Пароль","Enter_Password":"Введите пароль","PasswordLength_Err":"Пароль должен быть более","Symbols.Now":"символов. Сейчас он","No_Account":"Нет аккаунта?","Agreed_Rules":"С правилами согласен","Have_Account":"Уже есть аккаунт?","Enter":"Войти","Logged_Out":"Вы вышли из системы","Error":"Ошибка","Login_first":"Для начала войдите в систему","Email_NotExists":"Пользователя с таким email не существует","Wrong_Password":"Неверный пароль","Email_Exists":"Такой email уже используется"}')},"9c0c":function(e,t,r){},b444:function(e,t,r){"use strict";t["a"]={logout:"Logged_Out",login:"Login_first","auth/user-not-found":"Email_NotExists","auth/wrong-password":"Wrong_Password","auth/email-already-in-use":"Email_Exists"}},e977:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var n=r("4360"),a=r("7704"),o=r("edd4"),c={"ru-RU":a,"en-US":o};function i(e){var t=n["a"].getters.info.locale||"ru-RU";return c[t][e]||"[localize error]: ".concat(e," not found")}},edd4:function(e){e.exports=JSON.parse('{"ProfileTitle":"Profile","Message_EnterName":"Enter name","Name":"Name","Update":"Update","Bill":"Bill","History":"History","Menu_Planning":"Planning","NewRecord":"New record","Categories":"Categories","No_Categories":"No categories yet","Title":"Title","Create":"Create","Enter_CategoryName":"Enter category name","Limit":"Limit","Min_Value":"Minimum value is","Edit":"Edit","Choose_Category":"Choose category","Updated_Successfully":"Category has been updated successfully","Category_Created":"Category has been created successfully","Sum":"Sum","Date":"Date","Category":"Category","Type":"Type","Open":"Open","Record_History":"Record History","No_Records":"No records yet","Add_NewRecord":"Add new record","Back":"Back","Forward":"Forward","Details":"Details","Funds_ForeinCurrency":"Bill in curruncies","Exchange_Rates":"Exchange Rates","Currency":"Currency","Rates":"Rates","Smth_WentWrong":"Something went wrong","Income":"Income","Outcome":"Outcome","Description":"Description","RecordId_NotFound":"No records found with id =","Spent_ByCategory":"Expenses by category","Planning":"Planning","Add_Category":"Add category","From":"from","Over":"Excess by:","Left":"Left:","NotEnoughSymbols":"Not enough symbols","Enter_Description":"Enter description","Record_Created":"Record created successfully","Insufficient_Funds":"Insufficient funds","Profile":"Profile","Log_Out":"Log Out","Home":"Home","Login":"Login","Register":"Register","Home_Book":"Home bookkeeping","EmailEmpty_Err":"The email field must not be empty","NotEmail_Err":"Please enter a valid email","Password":"Password","Enter_Password":"Enter_Password","PasswordLength_Err":"Password must be more than","Symbols.Now":"symbols. Now it is","No_Account":"Do not have account?","Agreed_Rules":"I agree with the rules","Have_Account":"Already have an account?","Enter":"Enter","Logged_Out":"You are logged out","Error":"Error","Login_first":"First, log in","Email_NotExists":"User with this email does not exist","Wrong_Password":"Wrong password","Email_Exists":"This email is already in use"}')}});
//# sourceMappingURL=app.d3d03bdf.js.map