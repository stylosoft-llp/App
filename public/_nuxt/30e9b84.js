(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1001:function(e,t,n){"use strict";n.r(t);var r=n(20),c=(n(70),{layout:"custDesktop",data:function(){return{serviceHeaders:[{text:"Ticket #",value:"id"},{text:"Product",value:"product.name"},{text:"E-Mail",value:"customer.email"},{text:"Address",value:"customer.address_1"},{text:"Mobile",value:"customer.phone"},{text:"Service Type",value:"service_type"},{text:"Payment Charges",value:""},{text:"Payment Mode",value:""},{text:"Form Filled",value:"form"},{text:"Ticket Status",value:"ticket_status"},{text:"Work Status",value:"work_status"}],date:[],leadFile:null,datemenu:!1,tableSelected:[],leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:""}},created:function(){this.fetchServices()},mounted:function(){},methods:{csvLead:function(){var e=this,t=new FormData;t.append("csv",this.leadFile),this.$axios.post("auth/admin/leads/csv",t,{headers:{"content-type":"multipart/form-data"}}).then((function(n){e.leadFile=null,t=null,e.fetchServices()}),(function(e){406===e.response.status&&alert("Upload Failed! Please recheck CSV File & try again.")}))},updatePage:function(e){this.current_page=e,this.fetchServices()},fetchServices:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/tickets",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()},save:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,r=e,n.next=4,t.$axios.put("auth/leads/".concat(r.id),r).then((function(e){t.closeDialog+=1,t.fetchServices()}),(function(e){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()}}}),o=(n(816),n(27)),l=n(31),d=n.n(l),f=n(491),v=n(568),m=n(503),h=n(792),_=n(210),x=n(512),y=n(490),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("v-container",[n("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[n("v-text-field",{staticClass:"mx-1",attrs:{label:"Search Tickets","append-icon":"mdi-magnify",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchServices()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(t){return e.fetchServices()}}},[n("v-icon",[e._v("mdi-magnify")])],1),e._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{to:"/customer/newTicket",color:"primary"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus-box-multiple")]),e._v(" Raise Ticket\n    ")],1)],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":!1,"footer-props":{"disable-items-per-page":!0},"disable-sort":"",headers:e.serviceHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"item.status",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-chip",{attrs:{label:""}},[e._v(e._s(r.status))])],1)]}},{key:"item.expected_date",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v("\n          "+e._s(r.expected_date?e.$luxon(r.expected_date):"NA")+"\n\t\t\t\t")])]}},{key:"item.serviced_on",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v("\n          "+e._s(r.serviced_on?e.$luxon(r.serviced_on):"NA")+"\n\t\t\t\t")])]}},{key:"item.actions",fn:function(e){e.item;return[n("div",{staticClass:"row"})]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:f.a,VChip:v.a,VContainer:m.a,VDataTable:h.a,VIcon:_.a,VLayout:x.a,VTextField:y.a})},509:function(e,t,n){"use strict";var r=n(5),c=n(123).findIndex,o=n(122),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},510:function(e,t,n){var r=n(327),c=n(43);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),c.f(e,t,n)}},513:function(e,t,n){"use strict";var r=n(37),c=n(122),o=n(55),l=n(63),d=n(510);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=o(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=o(this),n=l(t);return t[0==n?0:n-1]=e}}),c("lastItem"))},746:function(e,t,n){var content=n(817);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("7a81ffae",content,!0,{sourceMap:!1})},816:function(e,t,n){"use strict";n(746)},817:function(e,t,n){var r=n(9)(!1);r.push([e.i,".v-data-footer__select{visibility:hidden}",""]),e.exports=r}}]);