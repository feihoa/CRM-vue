(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d05dc"],{6859:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"page-title"},[r("h3",[e._v(e._s(e._f("localize")("Planning")))]),r("h4",[e._v(e._s(e._f("currency")(e.info.bill,"RUB")))])]),e.loading?r("Loader"):e.categories.length?r("section",e._l(e.categories,(function(t){return r("div",{key:t.id},[r("p",[r("strong",[e._v(e._s(t.title))]),e._v(" "+e._s(e._f("currency")(t.spend))+" "+e._s(e._f("localize")("From"))+" "+e._s(e._f("currency")(t.limit))+" ")]),r("div",{directives:[{name:"toolTip",rawName:"v-toolTip",value:t.tooltip,expression:"cat.tooltip"}],staticClass:"progress"},[r("div",{staticClass:"determinate",class:[t.progressColor],style:{width:t.progressPercent+"%"}})])])})),0):r("p",{staticClass:"center"},[e._v(" "+e._s(e._f("localize")("No_Categories"))+" "),r("router-link",{attrs:{to:"/categories"}},[e._v(e._s(e._f("localize")("Add_Category")))])],1)],1)},i=[],o=r("1da1"),a=r("5530"),c=(r("96cf"),r("d81d"),r("4de4"),r("99af"),r("2f62")),s=r("5bb3"),l=r("e977"),u={name:"planning",metaInfo:function(){return{title:this.$title("Planning")}},data:function(){return{loading:!0,categories:[],over:Object(l["a"])("Over"),left:Object(l["a"])("Left")}},computed:Object(a["a"])({},Object(c["c"])(["info"])),mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$store.dispatch("fetchRecords");case 2:return r=t.sent,t.next=5,e.$store.dispatch("fetchCategories");case 5:n=t.sent,e.categories=n.map((function(t){var n=r.filter((function(e){return e.categoryId===t.id})).filter((function(e){return"outcome"===e.type})).reduce((function(e,t){return e+ +t.amount}),0),i=100*n/t.limit,o=i>100?100:i,c=i<60?"green":i<100?"yellow":"red",l=t.limit-n,u="".concat(l<0?e.over:e.left," ").concat(Object(s["a"])(Math.abs(l)));return Object(a["a"])(Object(a["a"])({},t),{},{progressPercent:o,progressColor:c,spend:n,tooltip:u})})),e.loading=!1;case 8:case"end":return t.stop()}}),t)})))()}},d=u,f=r("2877"),p=Object(f["a"])(d,n,i,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0d05dc.1acddd70.js.map