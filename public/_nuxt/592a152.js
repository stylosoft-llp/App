(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{1046:function(e,t,c){"use strict";c.r(t);var l={layout:"superDesktop",data:function(){return{pack:{id:"",name:"",s_desc:"",reg_price:"",sale_price:"",admin:"",sub_admin:"",users:"",frequency:"",status:""},loading:!1}},mounted:function(){this.fetchPackage()},methods:{fetchPackage:function(){var e=this;this.$axios.get("/super/packages/"+this.$route.params.id).then((function(t){e.pack=t.data}))},updatePackage:function(){var e=this;this.loading=!0,this.$axios.put("/super/packages/"+this.$route.params.id,this.pack).then((function(t){e.loading=!1,e.$router.push("/superadmin/packages")}))}}},n=c(27),r=c(31),o=c.n(r),d=c(488),k=c(210),v=c(177),m=c(209),f=c(506),_=c(550),x=c(497),h=c(487),component=Object(n.a)(l,(function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("v-layout",{attrs:{column:"",container:"","align-center":"","justify-center":"","fill-height":""}},[c("v-card",{attrs:{"max-width":"600",width:"100%"}},[c("v-card-text",[c("div",{staticClass:"d-flex flex-row my-2"},[c("v-btn",{attrs:{color:"primary",to:"/superadmin/packages",outlined:""}},[c("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),c("v-spacer"),e._v(" "),c("h2",{staticClass:"black--text"},[e._v("Product Editor")])],1),e._v(" "),c("v-text-field",{attrs:{outlined:"",label:"Package Name"},model:{value:e.pack.name,callback:function(t){e.$set(e.pack,"name",t)},expression:"pack.name"}}),e._v(" "),c("v-text-field",{attrs:{outlined:"",label:"Package Description"},model:{value:e.pack.s_desc,callback:function(t){e.$set(e.pack,"s_desc",t)},expression:"pack.s_desc"}}),e._v(" "),c("v-text-field",{attrs:{outlined:"",label:"Reg Price"},model:{value:e.pack.reg_price,callback:function(t){e.$set(e.pack,"reg_price",t)},expression:"pack.reg_price"}}),e._v(" "),c("v-text-field",{attrs:{outlined:"",label:"Sale Price"},model:{value:e.pack.sale_price,callback:function(t){e.$set(e.pack,"sale_price",t)},expression:"pack.sale_price"}}),e._v(" "),c("v-text-field",{attrs:{outlined:"",label:"Admins Allowed"},model:{value:e.pack.admin,callback:function(t){e.$set(e.pack,"admin",t)},expression:"pack.admin"}}),e._v(" "),c("v-text-field",{attrs:{outlined:"",label:"Sub Admins Allowed"},model:{value:e.pack.sub_admin,callback:function(t){e.$set(e.pack,"sub_admin",t)},expression:"pack.sub_admin"}}),e._v(" "),c("v-text-field",{attrs:{outlined:"",label:"Users Allowed"},model:{value:e.pack.users,callback:function(t){e.$set(e.pack,"users",t)},expression:"pack.users"}}),e._v(" "),c("v-select",{attrs:{outlined:"",items:["Monthly","Yearly"],label:"Frequency"},model:{value:e.pack.frequency,callback:function(t){e.$set(e.pack,"frequency",t)},expression:"pack.frequency"}}),e._v(" "),c("v-select",{attrs:{outlined:"","item-text":"name","item-value":"id",items:[{name:"Active",id:1},{name:"Inactive",id:0}],label:"Product Status"},model:{value:e.pack.status,callback:function(t){e.$set(e.pack,"status",t)},expression:"pack.status"}})],1),e._v(" "),c("v-card-actions",[c("v-btn",{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:e.loading,type:"submit",block:""},on:{click:function(t){return e.updatePackage()}}},[e._v("Save Package")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;o()(component,{VBtn:d.a,VCard:k.a,VCardActions:v.a,VCardText:v.c,VIcon:m.a,VLayout:f.a,VSelect:_.a,VSpacer:x.a,VTextField:h.a})},505:function(e,t,c){"use strict";var l=c(1),n=c(2);t.a=l.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:n.j}}})},506:function(e,t,c){"use strict";c(219);var l=c(220);t.a=Object(l.a)("layout")}}]);