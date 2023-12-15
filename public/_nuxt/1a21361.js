(window.webpackJsonp=window.webpackJsonp||[]).push([[88],{1043:function(e,t,n){"use strict";n.r(t);n(6),n(33),n(34),n(42);var o={layout:"userDesktop",data:function(){return{name:"",service_type:null,loading:!1,product_id:null,product_name:"",customer_id:"",customer_name:"",zone:{}}},components:{userAssign:function(){return n.e(21).then(n.bind(null,798))},productAssign:function(){return n.e(20).then(n.bind(null,992))},ZoneAssign:n(744).a},mounted:function(){},methods:{assignProduct:function(e){e&&(this.product_id=e.id,this.product_name=e.name)},assignCustomer:function(e){this.customer_id=e.id,this.customer_name=e.name},updateService:function(){var e=this;this.$route.query.id;this.$axios.post("auth/tickets",{name:this.name,service_type:this.service_type,status:this.status,product_id:this.product_id,customer_id:this.customer_id,zone:this.zone}).then((function(t){e.$toast.success("Ticket Saved",{icon:"mdi-check-circle"}),e.$router.push("/user/#")}),(function(t){e.$toast.error("An Error Occured While Saving",{icon:"mdi-alert"})}))}}},r=n(27),c=n(31),l=n.n(c),d=n(494),m=n(211),h=n(177),v=n(552),_=n(515),f=n(537),z=n(493),component=Object(r.a)(o,(function(){var e=this,t=this,n=t.$createElement,o=t._self._c||n;return o("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[o("v-card",{attrs:{"max-width":"600",width:"100%"}},[o("v-card-text",[o("div",{staticClass:"d-flex flex-row my-2"},[o("h2",{staticClass:"black--text"},[t._v("Raise Ticket")])]),t._v(" "),o("user-assign",{attrs:{id:t.customer_id,name:t.customer_name,permissions:"Customer",allowNew:!1,title:"Customer"},on:{assignTo:function(e){return t.assignCustomer(e)}}}),t._v(" "),t.customer_id?o("zoneAssign",{ref:"zoneAssign",attrs:{id:t.customer_id,title:"Zone"},model:{value:t.zone,callback:function(e){t.zone=e},expression:"zone"}}):t._e(),t._v(" "),o("v-text-field",{attrs:{outlined:"",dense:"",label:"Subject"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),o("productAssign",{attrs:{id:t.product_id,name:t.product_name,addNew:!1,title:"Product"},on:{assignTo:function(t){t&&(e.product_id=t.id,e.product_name=t.name)}}}),t._v(" "),o("v-select",{attrs:{outlined:"",items:["Installation","Replacement","Repair"],label:"Service Type"},model:{value:t.service_type,callback:function(e){t.service_type=e},expression:"service_type"}})],1),t._v(" "),o("v-card-actions",[o("v-btn",{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit",block:""},on:{click:function(e){return t.updateService()}}},[t._v("Save Service")])],1)],1),t._v(" "),o("v-dialog")],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardActions:h.a,VCardText:h.c,VDialog:v.a,VLayout:_.a,VSelect:f.a,VTextField:z.a})},744:function(e,t,n){"use strict";var o={props:{id:{default:null},value:{default:{}}},data:function(){return{createDialog:!1,assignee:{},zone_search:"",zones:[],loadingZones:!1,show1:!1}},watch:{zone_search:function(){this.searchZones()}},methods:{searchZones:function(){var e,t=this;(null===(e=this.zone_search)||void 0===e?void 0:e.length)<=2||(this.loadingZones=!0,this.$axios.get("/auth/users/".concat(this.id,"/zones"),{params:{name:this.zone_search,is:this.permissions}}).then((function(e){var n;t.zones=null!==(n=e.data)&&void 0!==n&&n.length?e.data:[],t.loadingZones=!1}),(function(e){t.loadingZones=!1})))}}},r=n(27),c=n(31),l=n.n(c),d=n(555),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Zone Search: "),n("b",[e._v(e._s(e.value.zone))]),e._v(" "+e._s(e.value.address)+" ")]),e._v(" "),n("div",{staticClass:"d-flex flex-row"},[n("v-autocomplete",{attrs:{dense:"",outlined:"",clearable:"",loading:e.loadingZones,"search-input":e.zone_search,label:"Search Zone","item-text":"zone","return-object":"","prepend-inner-icon":"mdi-magnify",items:e.zones},on:{focus:function(t){return e.searchZones()},input:function(t){t?e.$emit("input",t):e.$emit("input",{})},"update:searchInput":function(t){e.zone_search=t},"update:search-input":function(t){e.zone_search=t}}})],1)])}),[],!1,null,null,null);t.a=component.exports;l()(component,{VAutocomplete:d.a})}}]);