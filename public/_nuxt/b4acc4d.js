(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{500:function(e,t,r){"use strict";r(206);var n=r(207);t.a=Object(n.a)("layout")},524:function(e,t,r){var content=r(525);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(17).default)("e8b41e5e",content,!0,{sourceMap:!1})},525:function(e,t,r){var n=r(16)(!1);n.push([e.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),e.exports=n},530:function(e,t,r){"use strict";r(15),r(12),r(11),r(6),r(26),r(14),r(27);var n=r(3),l=(r(524),r(57)),c=r(30);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(c.a)(l.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(e){return e("div",{staticClass:"v-subheader",class:v({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},864:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{pricing:[{id:1,image:"/silver.png",title:"StyloCRM - SILVER",desc:"StyloCRM Silver is best suitable for small scale business with all the required only features.",features:["Business flow management","Ticket management","Stylo Servicedesk Support",""],super_admin:1,admin:1,service_engineers:8},{id:2,image:"/gold.png",title:"StyloCRM - GOLD",desc:"StyloCRM Silver is best suitable for small scale business with all the required only features.",features:["Business flow management","Ticket management","Stylo Servicedesk support","Payments and  more"],super_admin:1,admin:2,service_engineers:16},{id:3,image:"/platinum.png",title:"StyloCRM - PLATINUM",desc:"StyloCRM Silver is best suitable for small scale business with all the required only features.",features:["Business flow management","Ticket management","Stylo Servicedesk support","Payments and  more"],super_admin:1,admin:4,service_engineers:40}],package:null}},methods:{purchaseLicense:function(e){var t=this;this.$axios.post("/auth/licenses",{package_id:e}).then((function(e){t.$auth.fetchUser(),t.$router.push("/onboarding")}))}}},l=r(28),c=r(31),o=r.n(c),v=r(454),m=r(199),d=r(466),h=r(455),f=r(293),_=r(500),y=r(689),S=r(670),w=r(671),O=r(473),C=r(469),k=r(530),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[r("div",{staticClass:"my-16"},[r("h1",{staticClass:"display-1 font-weight-black text-center"},[e._v("SELECT FROM THE PLANS BELOW")]),e._v(" "),r("v-row",{staticClass:"container",staticStyle:{width:"100%",margin:"auto"}},e._l(e.pricing,(function(t,n){return r("v-col",{key:n},[r("v-card",{staticClass:"rounded-xl ma-1 pa-2",staticStyle:{"box-shadow":"0 5px 10px #e7e7e7"}},[r("v-img",{staticClass:"mx-auto",attrs:{src:t.image,width:"100",height:"100"}}),e._v(" "),r("h2",{staticClass:"text-center"},[e._v(e._s(t.title))]),e._v(" "),r("p",{staticClass:"mt-2 body-2 text-center"},[e._v(e._s(t.desc))]),e._v(" "),r("v-list",{attrs:{dense:""}},[e._l(t.features,(function(t,n){return r("v-list-item",{key:n},[t?r("v-list-item-icon",[r("v-icon",{attrs:{right:"",color:"green accent-4"}},[e._v("mdi-check-circle")])],1):e._e(),e._v(" "),r("v-list-item-title",[e._v(e._s(t))])],1)})),e._v(" "),r("v-subheader",[e._v("Licenses")]),e._v(" "),r("v-list-item",[r("v-list-item-title",[e._v("Super Admin")]),e._v(" "),r("v-list-item-subtitle",[e._v(e._s(t.super_admin))])],1),e._v(" "),r("v-list-item",[r("v-list-item-title",[e._v("Admin")]),e._v(" "),r("v-list-item-subtitle",[e._v(e._s(t.admin))])],1),e._v(" "),r("v-list-item",[r("v-list-item-title",[e._v("Service Engineers")]),e._v(" "),r("v-list-item-subtitle",[e._v(e._s(t.service_engineers))])],1)],2),e._v(" "),r("v-btn",{staticClass:"spl-btn",attrs:{rounded:"",color:"primary","x-large":"",block:""},on:{click:function(r){return e.purchaseLicense(t.id)}}},[e._v("Buy Plan")])],1)],1)})),1)],1)])}),[],!1,null,null,null);t.default=component.exports;o()(component,{VBtn:v.a,VCard:m.a,VCol:d.a,VIcon:h.a,VImg:f.a,VLayout:_.a,VList:y.a,VListItem:S.a,VListItemIcon:w.a,VListItemSubtitle:O.b,VListItemTitle:O.c,VRow:C.a,VSubheader:k.a})}}]);