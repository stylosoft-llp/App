(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1061:function(e,t,n){"use strict";n.r(t);var o=n(510),r=n(221),c=n(124),l=n(776),d=n(566),m=n(530),h=n(552),_=n(509),v=(n(25),n(5),n(33),n(35),{layout:"userDesktop",data:function(){return{name:"",type:null,service_type:null,loading:!1,product_id:null,product_name:"",customer_id:"",customer_name:"",zone:{},serviceForms:[{text:"1. Installation",value:"Installation"},{text:"2. Replacement",value:"Replacement"},{text:"3. Repair",value:"Repair"}]}},components:{userAssign:function(){return n.e(21).then(n.bind(null,813))},productAssign:function(){return n.e(20).then(n.bind(null,1009))},ZoneAssign:n(759).a},mounted:function(){},methods:{assignProduct:function(e){e&&(this.product_id=e.id,this.product_name=e.name)},assignCustomer:function(e){this.customer_id=e.id,this.customer_name=e.name},updateService:function(){var e=this;this.$route.query.id;this.$axios.post("auth/tickets",{name:this.name,service_type:this.service_type,type:this.type,status:this.status,product_id:this.product_id,customer_id:this.customer_id,zone:this.zone}).then((function(t){e.$toast.success("Ticket Saved",{icon:"mdi-check-circle"}),e.$router.push("/user/#")}),(function(t){e.$toast.error("An Error Occured While Saving",{icon:"mdi-alert"})}))}}}),f=n(26),component=Object(f.a)(v,(function(){var e=this,t=this,n=t._self._c;return n(m.a,{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[n(r.a,{attrs:{"max-width":"600",width:"100%"}},[n(c.c,[n("div",{staticClass:"d-flex flex-row my-2"},[n("h2",{staticClass:"black--text"},[t._v("Raise Ticket")])]),t._v(" "),n("user-assign",{attrs:{id:t.customer_id,name:t.customer_name,permissions:"Customer",allowNew:!1,title:"Customer"},on:{assignTo:function(e){return t.assignCustomer(e)}}}),t._v(" "),t.customer_id?n("zoneAssign",{ref:"zoneAssign",attrs:{id:t.customer_id,title:"Zone"},model:{value:t.zone,callback:function(e){t.zone=e},expression:"zone"}}):t._e(),t._v(" "),n(_.a,{attrs:{outlined:"",dense:"",label:"Subject"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("productAssign",{attrs:{id:t.product_id,name:t.product_name,addNew:!1,title:"Product"},on:{assignTo:function(t){t&&(e.product_id=t.id,e.product_name=t.name)}}}),t._v(" "),n(l.a,{attrs:{outlined:"",items:["New Installation","Old Installation","Replacement","Repair","Delivery"],label:"Service Type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),n(h.a,{attrs:{outlined:"",items:t.serviceForms,label:"Service Form","prepend-inner-icon":"mdi-form-select"},model:{value:t.service_type,callback:function(e){t.service_type=e},expression:"service_type"}})],1),t._v(" "),n(c.a,[n(o.a,{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit",block:""},on:{click:function(e){return t.updateService()}}},[t._v("Save Service")])],1)],1),t._v(" "),n(d.a)],1)}),[],!1,null,null,null);t.default=component.exports},759:function(e,t,n){"use strict";var o=n(568),r={props:{id:{default:null},value:{default:{}}},data:function(){return{createDialog:!1,assignee:{},zone_search:"",zones:[],loadingZones:!1,show1:!1}},watch:{zone_search:function(){this.searchZones()}},methods:{searchZones:function(){var e,t=this;(null===(e=this.zone_search)||void 0===e?void 0:e.length)<=2||(this.loadingZones=!0,this.$axios.get("/auth/users/".concat(this.id,"/zones"),{params:{name:this.zone_search,is:this.permissions}}).then((function(e){e.data&&e.data.length&&(t.zones=e.data),t.loadingZones=!1}),(function(e){t.loadingZones=!1})))}}},c=n(26),component=Object(c.a)(r,(function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v("Zone Search: "),t("b",[e._v(e._s(e.value.zone))]),e._v(" "+e._s(e.value.address)+" ")]),e._v(" "),t("div",{staticClass:"d-flex flex-row"},[t(o.a,{attrs:{dense:"",outlined:"",clearable:"",loading:e.loadingZones,"search-input":e.zone_search,label:"Search Zone","item-text":"zone","return-object":"","prepend-inner-icon":"mdi-magnify",items:e.zones},on:{focus:function(t){return e.searchZones()},input:function(t){t?e.$emit("input",t):e.$emit("input",{})},"update:searchInput":function(t){e.zone_search=t},"update:search-input":function(t){e.zone_search=t}}})],1)])}),[],!1,null,null,null);t.a=component.exports}}]);