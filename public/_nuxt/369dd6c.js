(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1020:function(e,t,n){"use strict";n.r(t);var r=n(20),c=(n(70),{layout:"appDesktop",data:function(){return{serviceHeaders:[{text:"S No",value:"sn"},{text:"Ticket #",value:"id"},{text:"Customer Name",value:"customer.name"},{text:"Customer E-Mail",value:"customer.email"},{text:"Product",value:"product.name"},{text:"Expected Date",value:"expected_date"},{text:"Execution Date",value:"time_location"},{text:"Created At",value:"created_at"},{text:"Service Type",value:"type"},{text:"Form Filled",value:"form"},{text:"Ticket Status",value:"ticket_status"},{text:"Work Status",value:"work_status"},{text:"Employee Name",value:"assignee.name"},{text:"Actions",value:"actions"}],date:[],leadFile:null,datemenu:!1,tableSelected:[],leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:"",analytics:[],type:"",colors:{installation:"#a2cffe",replacement:"#edf1fe",repair:"#a6e7ff",completed:"#fae5bf"}}},beforeMount:function(){this.fetchServices()},mounted:function(){this.countServices()},methods:{csvLead:function(){var e=this,t=new FormData;t.append("csv",this.leadFile),this.$axios.post("auth/admin/leads/csv",t,{headers:{"content-type":"multipart/form-data"}}).then((function(n){e.leadFile=null,t=null,e.fetchServices()}),(function(e){406===e.response.status&&alert("Upload Failed! Please recheck CSV File & try again.")}))},updatePage:function(e){this.current_page=e,this.fetchServices()},filterServices:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.type=e,t.fetchServices();case 2:case"end":return n.stop()}}),n)})))()},fetchServices:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/services",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status,type:e.type,notClosed:"closed"!=e.type?1:0}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()},countServices:function(){var e=this;this.$axios.get("/auth/analytics/service-count").then((function(t){e.analytics=t.data}),(function(e){}))},save:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,r=e,n.next=4,t.$axios.put("auth/leads/".concat(r.id),r).then((function(e){t.closeDialog+=1,t.fetchServices()}),(function(e){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(e){var t=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:confirm("delete?"),t.loading=!0,t.$axios.delete("auth/services/".concat(e)).then((function(e){t.fetchServices()}),(function(e){t.loading=!1}));case 3:case"end":return n.stop()}}),n)})))()}}}),o=(n(857),n(27)),l=n(31),d=n.n(l),f=n(491),v=n(568),m=n(502),_=n(792),h=n(210),x=n(512),y=n(505),w=n(490),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{staticClass:"pa-4",attrs:{column:""}},[n("v-row",e._l(e.analytics,(function(t,r){return n("v-col",{key:r},[n("v-btn",{attrs:{depressed:"",block:"",color:e.colors[r]},on:{click:function(t){return e.filterServices(r)}}},[e._v(e._s(r.toUpperCase())+" "+e._s(t))])],1)})),1),e._v(" "),n("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[n("v-text-field",{staticClass:"mx-1",attrs:{label:"Search Service","append-icon":"mdi-magnify",hint:"Search By Tracking No, Name or Phone",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchServices()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(t){return e.fetchServices()}}},[n("v-icon",[e._v("mdi-magnify")])],1),e._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{to:"/app/services/editor",color:"primary"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus-box-multiple")]),e._v("Add Service\n      ")],1)],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"disable-sort":"","show-select":!1,"footer-props":{"disable-items-per-page":!0},headers:e.serviceHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"item.sn",fn:function(t){var n=t.index;return[e._v(e._s(e.current_page*(n+1)))]}},{key:"item.ticket_status",fn:function(t){var r=t.item;return[n("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[n("v-chip",{staticClass:"font-weight-medium",attrs:{small:"",label:"",color:"accent"}},[e._v(e._s(r.ticket_status))])],1)]}},{key:"item.work_status",fn:function(t){var r=t.item;return[n("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[n("v-chip",{staticClass:"font-weight-medium",attrs:{small:"",label:"",color:"accent"}},[e._v(e._s(r.work_status))])],1)]}},{key:"item.form",fn:function(t){var r=t.item;return[r.form?n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-btn",{attrs:{color:"primary",small:"",to:"/app/services/forms?id="+r.id}},[e._v("View")])],1):e._e()]}},{key:"item.expected_date",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(r.expected_date?e.$luxon(r.expected_date):"NA"))])]}},{key:"item.time_location",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(r.time_location&&r.time_location.end&&r.time_location.end.time?e.$luxon(r.time_location.end.time):"NA"))])]}},{key:"item.serviced_on",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(r.serviced_on?e.$luxon(r.serviced_on):"NA"))])]}},{key:"item.created_at",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(r.created_at?e.$luxon(r.created_at):"NA"))])]}},{key:"item.actions",fn:function(t){var r=t.item;return[n("div",{staticClass:"d-flex flex-row"},[n("v-btn",{attrs:{to:"/app/services/editor?id="+r.id,color:"blue",icon:"",small:""}},[n("v-icon",[e._v("mdi-pencil-box-multiple")])],1),e._v(" "),n("v-btn",{attrs:{color:"error",icon:"",small:""},on:{click:function(t){return e.deleteItem(r.id)}}},[n("v-icon",[e._v("mdi-delete")])],1)],1)]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}})],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:f.a,VChip:v.a,VCol:m.a,VDataTable:_.a,VIcon:h.a,VLayout:x.a,VRow:y.a,VTextField:w.a})},509:function(e,t,n){"use strict";var r=n(5),c=n(123).findIndex,o=n(122),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},510:function(e,t,n){var r=n(327),c=n(43);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),c.f(e,t,n)}},513:function(e,t,n){"use strict";var r=n(37),c=n(122),o=n(55),l=n(63),d=n(510);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=o(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=o(this),n=l(t);return t[0==n?0:n-1]=e}}),c("lastItem"))},758:function(e,t,n){var content=n(858);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("26102723",content,!0,{sourceMap:!1})},857:function(e,t,n){"use strict";n(758)},858:function(e,t,n){var r=n(9)(!1);r.push([e.i,".v-data-footer__select{visibility:hidden}",""]),e.exports=r}}]);