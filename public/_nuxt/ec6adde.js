(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{1042:function(e,t,n){"use strict";n.r(t);var r=n(510),c=n(594),o=n(523),l=n(758),d=n(218),f=n(530),v=n(522),m=n(509),_=n(17),h=(n(69),{layout:"appDesktop",data:function(){return{serviceHeaders:[{text:"S No",value:"sn"},{text:"Ticket #",value:"id"},{text:"Customer Name",value:"customer.name"},{text:"Customer E-Mail",value:"customer.email"},{text:"Product",value:"product.name"},{text:"Expected Date",value:"expected_date"},{text:"Execution Date",value:"time_location"},{text:"Created At",value:"created_at"},{text:"Service Type",value:"type"},{text:"Form Filled",value:"form"},{text:"Ticket Status",value:"ticket_status"},{text:"Employee Name",value:"assignee.name"},{text:"Actions",value:"actions"}],date:[],leadFile:null,datemenu:!1,tableSelected:[],leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:"",analytics:[],type:"",colors:{installation:"#a2cffe",replacement:"#edf1fe",repair:"#a6e7ff",completed:"#fae5bf"}}},beforeMount:function(){this.fetchServices()},mounted:function(){this.countServices()},methods:{csvLead:function(){var e=this,t=new FormData;t.append("csv",this.leadFile),this.$axios.post("auth/admin/leads/csv",t,{headers:{"content-type":"multipart/form-data"}}).then((function(n){e.leadFile=null,t=null,e.fetchServices()}),(function(e){406===e.response.status&&alert("Upload Failed! Please recheck CSV File & try again.")}))},updatePage:function(e){this.current_page=e,this.fetchServices()},filterServices:function(e){var t=this;return Object(_.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.type=e,t.fetchServices();case 2:case"end":return n.stop()}}),n)})))()},fetchServices:function(){var e=this;return Object(_.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,n=e.$auth.user.id,t.next=4,e.$axios.get("auth/services",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status,assigned_to:n,type:e.type,notClosed:"closed"!=e.type?1:0}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 4:case"end":return t.stop()}}),t)})))()},countServices:function(){var e=this;this.$axios.get("/auth/analytics/service-count").then((function(t){e.analytics=t.data}),(function(e){}))},save:function(e){var t=this;return Object(_.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,r=e,n.next=4,t.$axios.put("auth/leads/".concat(r.id),r).then((function(e){t.closeDialog+=1,t.fetchServices()}),(function(e){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(e){var t=this;return Object(_.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:confirm("delete?"),t.loading=!0,t.$axios.delete("auth/services/".concat(e)).then((function(e){t.fetchServices()}),(function(e){t.loading=!1}));case 3:case"end":return n.stop()}}),n)})))()}}}),x=(n(879),n(26)),component=Object(x.a)(h,(function(){var e=this,t=e._self._c;return t(f.a,{staticClass:"pa-4",attrs:{column:""}},[t(v.a,e._l(e.analytics,(function(n,c){return t(o.a,{key:c},[t(r.a,{attrs:{depressed:"",block:"",color:e.colors[c]},on:{click:function(t){return e.filterServices(c)}}},[e._v(e._s(c.toUpperCase())+" "+e._s(n))])],1)})),1),e._v(" "),t("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[t(m.a,{staticClass:"mx-1",attrs:{label:"Search Service","append-icon":"mdi-magnify",hint:"Search By Tracking No, Name or Phone",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchServices()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),t(r.a,{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(t){return e.fetchServices()}}},[t(d.a,[e._v("mdi-magnify")])],1),e._v(" "),t(r.a,{staticClass:"mx-1",attrs:{to:"/app/services/editor",color:"primary"}},[t(d.a,{attrs:{left:""}},[e._v("mdi-plus-box-multiple")]),e._v("Add Service\n      ")],1)],1),e._v(" "),t(l.a,{staticClass:"elevation-1",attrs:{"disable-sort":"","show-select":!1,"footer-props":{"disable-items-per-page":!0},headers:e.serviceHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"item.sn",fn:function(t){var n=t.index;return[e._v(e._s(e.current_page*(n+1)))]}},{key:"item.ticket_status",fn:function(n){var r=n.item;return[t("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[t(c.a,{staticClass:"font-weight-medium",attrs:{small:"",label:"",color:"accent"}},[e._v(e._s(r.ticket_status))])],1)]}},{key:"item.work_status",fn:function(n){var r=n.item;return[t("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[t(c.a,{staticClass:"font-weight-medium",attrs:{small:"",label:"",color:"accent"}},[e._v(e._s(r.work_status))])],1)]}},{key:"item.form",fn:function(n){var c=n.item;return[c.form?t("td",{staticStyle:{"white-space":"nowrap"}},[t(r.a,{attrs:{color:"primary",small:"",to:"/app/services/forms?id=".concat(c.id)}},[e._v("View")])],1):e._e()]}},{key:"item.expected_date",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(r.expected_date?e.$luxon(r.expected_date):"NA"))])]}},{key:"item.time_location",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(r.time_location&&r.time_location.end&&r.time_location.end.time?e.$luxon(r.time_location.end.time):"NA"))])]}},{key:"item.serviced_on",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(r.serviced_on?e.$luxon(r.serviced_on):"NA"))])]}},{key:"item.created_at",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[e._v(e._s(r.created_at?e.$luxon(r.created_at):"NA"))])]}},{key:"item.actions",fn:function(n){var c=n.item;return[t("div",{staticClass:"d-flex flex-row"},[t(r.a,{attrs:{to:"/app/services/editor?id="+c.id,color:"blue",icon:"",small:""}},[t(d.a,[e._v("mdi-pencil-box-multiple")])],1),e._v(" "),t(r.a,{attrs:{color:"error",icon:"",small:""},on:{click:function(t){return e.deleteItem(c.id)}}},[t(d.a,[e._v("mdi-delete")])],1)],1)]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}})],1)}),[],!1,null,null,null);t.default=component.exports},528:function(e,t,n){"use strict";var r=n(4),c=n(126).findIndex,o=n(125),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},531:function(e,t,n){"use strict";var r=n(34),c=n(125),o=n(54),l=n(61),d=n(103);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=o(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=o(this),n=l(t);return t[0==n?0:n-1]=e}}),c("lastItem"))},779:function(e,t,n){var content=n(880);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("680da88a",content,!0,{sourceMap:!1})},879:function(e,t,n){"use strict";n(779)},880:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,".v-data-footer__select{visibility:hidden}",""]),r.locals={},e.exports=r}}]);