(function(t){function e(e){for(var r,o,c=e[0],s=e[1],u=e[2],p=0,d=[];p<c.length;p++)o=c[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var s=n[c];0!==i[s]&&(r=!1)}r&&(a.splice(e--,1),t=o(o.s=n[0]))}return t}var r={},i={app:0},a=[];function o(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=r,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"0785":function(t,e,n){"use strict";n("d0d4")},"13ea":function(t,e,n){},"1f6c":function(t,e,n){"use strict";n("31c6")},"200f":function(t,e,n){},2397:function(t,e,n){"use strict";n("705e")},"26ff":function(t,e,n){"use strict";n("200f")},"2a76":function(t,e,n){},"31c6":function(t,e,n){},"3b70":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],o={name:"app"},c=o,s=(n("034f"),n("2877")),u=Object(s["a"])(c,i,a,!1,null,null,null),l=u.exports,p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("el-container",[n("el-container",[n("el-main",[n("Header"),n("ShowCase")],1)],1),n("el-aside",{attrs:{width:"500px"}},[n("ControlPanel")],1)],1)],1)},f=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"control"}},[t._m(0),t._m(1),n("div",{staticClass:"show"},t._l(t.products,(function(t){return n("Info",{key:t.product.id,attrs:{name:t.product.name,prize:t.product.prize,count:t.quantity,id:t.product.id}})})),1),n("div",{staticClass:"control-item"},[n("Control")],1)])},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"control"},[n("span",[n("i",{staticClass:"fas fa-shopping-cart"})]),n("span",[n("i",{staticClass:"fas fa-clipboard-list"})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info"},[n("div",{staticClass:"info-item"},[n("p",[t._v("Names")]),n("p",[t._v("Count")]),n("p",[t._v("Prize")]),n("p",[t._v("All")])])])}],_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"control"}},[n("div",{staticClass:"info"},[n("div",{staticClass:"info-prize"},[n("p",[t._v("All prize")]),n("h5",[t._v(t._s(t.allPrizeItem)+" sum")])]),n("div",{staticClass:"info-prize"},[n("p",[t._v("Items")]),n("h5",[t._v(t._s(t.allItem))])]),t._m(0),t._m(1)]),n("div",{staticClass:"route"},[n("el-button",[n("i",{staticClass:"fas fa-user"}),t._v(" Client ")]),n("el-button",[n("i",{staticClass:"fas fa-print"}),t._v(" Print ")])],1),n("div",{staticClass:"control-button"},[n("el-button",{attrs:{type:"danger"},on:{click:t.clear}},[t._v("Clear")]),n("el-button",{attrs:{type:"primary"}},[t._v("Postponement")]),n("el-button",{attrs:{type:"success"},on:{click:t.pay}},[t._v("Pay")])],1)])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-prize"},[n("p",[t._v("Element")]),n("h5",[t._v("1 000 000 sum")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"info-prize"},[n("p",[t._v("Client")]),n("h5",[t._v("Elon Mask")])])}],h=n("2f62"),y={name:"Control",props:["prizes"],computed:Object(h["b"])(["allPrizeItem","allItem"]),methods:{clear:function(){this.$store.dispatch("clear")},pay:function(){this.$store.dispatch("Pay")}}},C=y,z=(n("2397"),Object(s["a"])(C,_,b,!1,null,"139e373c",null)),P=z.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"show"}},[n("div",{class:!0===t.show?"handle":"show",on:{click:t.handleItem}},[n("p",[t._v(t._s(t.name))]),n("p",[t._v(t._s(t.count))]),n("p",[t._v(t._s(t.prize)+" sum")]),n("p",[t._v(t._s(t.count*t.prize)+" sum")])]),t.show?n("div",{staticClass:"handleItem"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-edit",circle:""}}),n("el-button",{attrs:{type:"success",icon:"el-icon-house",circle:""}}),n("el-input-number",{attrs:{min:1},model:{value:t.count,callback:function(e){t.count=e},expression:"count"}}),n("el-button",{attrs:{type:"danger",icon:"el-icon-delete",circle:""}})],1):t._e()])},g=[],k={name:"Info",props:["prize","name","count","id"],data:function(){return{show:!1,num:1}},methods:{handleItem:function(){this.show=!this.show}}},O=k,j=(n("b218"),Object(s["a"])(O,w,g,!1,null,"83c16300",null)),$=j.exports,x={name:"ControlPanel",components:{Control:P,Info:$},computed:Object(h["b"])(["products"])},I=x,E=(n("0785"),Object(s["a"])(I,m,v,!1,null,"6046011c",null)),S=E.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"head"}},[t._m(0),n("div",{staticClass:"bread"},[n("el-breadcrumb",{attrs:{"separator-class":"el-icon-arrow-right white"}},[n("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("Home")]),n("el-breadcrumb-item",[t._v("Orderlayaway")])],1)],1)])},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"head"},[n("h1",[t._v("Logo")]),n("i",{staticClass:"fas fa-search"})])}],H=(n("26ff"),{}),M=Object(s["a"])(H,A,L,!1,null,"20b047d9",null),q=M.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"show"}},[!1===this.$store.state.pay?n("div",[n("div",{staticClass:"filter"},t._l(t.names,(function(e){return n("el-button",{key:e.name,staticClass:"button",on:{click:function(n){return t.filter(e.name)}}},[t._v(t._s(e.name))])})),1),n("div",{staticClass:"products"},t._l(t.products,(function(e){return n("Card",{key:e.id,attrs:{name:e.name,percent:e.percent,prize:e.prize},on:{event:function(n){return t.handleProduct(e.id)}}})})),1)]):t._e(),this.$store.state.pay?n("div",[n("Pay")],1):t._e()])},G=[],J=(n("4de4"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"card"},on:{click:t.event}},[n("h5",[t._v(t._s(t.name))]),n("el-progress",{attrs:{id:"progress",type:"circle",width:80,percentage:t.percent}}),n("p",[t._v(t._s(t.prize))])],1)}),N=[],K={name:"Card",props:["prize","name","percent"],methods:{event:function(){this.$emit("event")}}},V=K,B=(n("1f6c"),Object(s["a"])(V,J,N,!1,null,"ad3bea68",null)),D=B.exports,F=n("abfb"),Q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"pay"}},[n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("div",{staticClass:"info"},[n("div",{staticClass:"info-prize"},[n("p",[t._v("All prize")]),n("h5",[t._v(t._s(t.allPrizeItem)+" sum")])]),n("div",{staticClass:"info-prize"},[n("p",[t._v("All Items")]),n("h5",[t._v(t._s(t.allItem))])]),n("div",{staticClass:"info-prize"},[n("p",[t._v("Element")]),n("h5",[t._v("1 000 000 sum")])]),n("div",{staticClass:"info-prize"},[n("p",[t._v("All prize")]),n("h5",[t._v(t._s(t.num||0)+" sum")])])])]),n("el-container",[n("el-main",[n("div",{attrs:{id:"number"}},[n("div",{staticClass:"display"},[t._v(t._s(t.num||"0"))]),n("div",{staticClass:"buttons"},[n("el-button",{on:{click:function(e){return t.append("1")}}},[t._v("1")]),n("el-button",{on:{click:function(e){return t.append("2")}}},[t._v("2")]),n("el-button",{on:{click:function(e){return t.append("3")}}},[t._v("3")]),n("el-button",{on:{click:function(e){return t.append("4")}}},[t._v("4")]),n("el-button",{on:{click:function(e){return t.append("5")}}},[t._v("5")]),n("el-button",{on:{click:function(e){return t.append("6")}}},[t._v("6")]),n("el-button",{on:{click:function(e){return t.append("7")}}},[t._v("7")]),n("el-button",{on:{click:function(e){return t.append("8")}}},[t._v("8")]),n("el-button",{on:{click:function(e){return t.append("9")}}},[t._v("9")]),n("el-button",{on:{click:function(e){return t.append(".")}}},[t._v(".")]),n("el-button",{on:{click:function(e){return t.append("0")}}},[t._v("0")]),n("el-button",{on:{click:function(e){return t.clear()}}},[t._v("del")])],1)])])],1)],1),n("el-container",{staticClass:"container"},[n("el-button",{attrs:{type:"primary"}},[t._v("Nalichniy")]),n("el-button",{attrs:{type:"primary"}},[t._v("Karta")]),n("el-button",{attrs:{type:"danger"}},[t._v("Kombinatsiy")]),n("el-button",{attrs:{type:"primary"}},[t._v("Valyuta")])],1)],1)},R=[],U=(n("99af"),{name:"Pay",computed:Object(h["b"])(["allPrizeItem","allItem"]),data:function(){return{num:""}},methods:{clear:function(){this.num=""},append:function(t){if(20===this.num.length)return this.num;this.num="".concat(this.num).concat(t)}}}),W=U,X=(n("b799"),Object(s["a"])(W,Q,R,!1,null,"2c080a3b",null)),Y=X.exports,Z={name:"Show",components:{Card:D,Pay:Y},data:function(){return{products:F,names:[{name:"ALL"},{name:"Lenovo"},{name:"Apple"},{name:"Samsung"},{name:"GoPro"}]}},methods:{handleProduct:function(t){this.$store.dispatch("handleProduct",t)},filter:function(t){var e=F.filter((function(e){return"ALL"===t?F:e.brend===t}));this.products=e}}},tt=Z,et=(n("b14e"),Object(s["a"])(tt,T,G,!1,null,"8c22666e",null)),nt=et.exports,rt={name:"Home",components:{ControlPanel:S,Header:q,ShowCase:nt}},it=rt,at=(n("7a32"),Object(s["a"])(it,d,f,!1,null,"407ebdb4",null)),ot=at.exports;r["default"].use(p["a"]);var ct=[{path:"/",name:"Home",component:ot}],st=new p["a"]({routes:ct}),ut=st,lt=n("5c96"),pt=n.n(lt);n("0fae");r["default"].use(pt.a);n("7db0"),n("d81d"),n("13d5");r["default"].use(h["a"]);var dt=new h["a"].Store({state:{products:[],TotalPrize:0,pay:!1},mutations:{updateHandleProduct:function(t,e){var n=t.products.find((function(t){return t.product.id===e.id}));if(void 0===n||null===n){var r=new Object({product:e,quantity:1,totalPrize:e.prize});t.products.push(r)}else n&&n.quantity++},clear:function(t){t.products=[],t.pay=!1},pay:function(t){0!==t.products.length&&(t.pay=!0)}},actions:{handleProduct:function(t,e){var n=F.filter((function(t){return t.id===e}));t.commit("updateHandleProduct",n[0])},clear:function(t){t.commit("clear")},Pay:function(t){t.commit("pay")}},getters:{products:function(t){return t.products},allItem:function(t){var e=t.products.map((function(t){return t.quantity})),n=e.reduce((function(t,e){return e+t}),0);return n},allPrizeItem:function(t){var e=t.products.map((function(t){return t.quantity*t.product.prize})),n=e.reduce((function(t,e){return e+t}),0);return t.TotalPrize=n}}});r["default"].config.productionTip=!1,new r["default"]({router:ut,store:dt,render:function(t){return t(l)}}).$mount("#app")},"705e":function(t,e,n){},"7a32":function(t,e,n){"use strict";n("2a76")},"839b":function(t,e,n){},"85ec":function(t,e,n){},abfb:function(t){t.exports=JSON.parse('[{"id":"1","name":"Lenovo","brend":"Lenovo","prize":960000,"percent":93},{"id":"2","name":"Macbook","brend":"Apple","prize":250000,"percent":86},{"id":"3","name":"Macbook Air","brend":"Apple","prize":325000,"percent":88},{"id":"4","name":"Lenovo phone","brend":"Lenovo","prize":123000,"percent":53},{"id":"5","name":"Samsung","brend":"Samsung","prize":90000,"percent":25},{"id":"6","name":"Samsung laptop","brend":"Samsung","prize":150000,"percent":42},{"id":"7","name":"GoPro","brend":"GoPro","prize":30000,"percent":10}]')},b14e:function(t,e,n){"use strict";n("13ea")},b218:function(t,e,n){"use strict";n("839b")},b799:function(t,e,n){"use strict";n("3b70")},d0d4:function(t,e,n){}});
//# sourceMappingURL=app.a9b9de77.js.map