(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{1012:function(e,t,n){"use strict";n.r(t);var r=n(20),c=(n(70),{layout:"userDesktop",data:function(){return{serviceHeaders:[{text:"Ticket #",value:"id"},{text:"Client",value:"customer.name"},{text:"Product",value:"product.name"},{text:"E-Mail",value:"customer.email"},{text:"Address",value:"customer.address_1"},{text:"Mobile",value:"customer.phone"},{text:"Service Type",value:"service_type"},{text:"Payment Charges",value:""},{text:"Payment Mode",value:""},{text:"Ticket Status",value:"ticket_status"},{text:"Actions",value:"actions"}],date:[],leadFile:null,datemenu:!1,tableSelected:[],leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:""}},created:function(){this.fetchServices()},mounted:function(){},methods:{updatePage:function(e){this.current_page=e,this.fetchServices()},fetchServices:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/tasks",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()},markPresent:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.post("auth/present").then((function(t){e.$toast.success("You're marked as present")}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()}}}),o=(n(840),n(27)),l=n(31),d=n.n(l),f=n(494),v=n(579),m=n(506),_=n(743),h=n(210),x=n(515),y=n(493),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("v-container",[n("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[n("v-text-field",{staticClass:"mx-1",attrs:{label:"Search Service","append-icon":"mdi-magnify",hint:"Search By Tracking No, Name or Phone",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchServices()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(t){return e.fetchServices()}}},[n("v-icon",[e._v("mdi-magnify")])],1)],1),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":!1,"footer-props":{"disable-items-per-page":!0},"disable-sort":"",headers:e.serviceHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"item.status",fn:function(t){var r=t.item;return[n("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[n("span",{staticClass:"font-weight-bold",class:e.statusColors[r.status]+"--text"},[e._v(e._s(r.status))])])]}},{key:"item.expected_date",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v("\n          "+e._s(r.expected_date?e.$luxon(r.expected_date):"NA")+"\n\t\t\t\t")])]}},{key:"item.ticket_status",fn:function(t){var r=t.item;return[n("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[n("v-chip",{staticClass:"font-weight-medium",attrs:{outlined:"",label:"",color:"accent"}},[e._v(e._s(r.ticket_status))])],1)]}},{key:"item.work_status",fn:function(t){var r=t.item;return[n("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[n("v-chip",{staticClass:"font-weight-medium",attrs:{outlined:"",label:"",color:"accent"}},[e._v(e._s(r.work_status))])],1)]}},{key:"item.form",fn:function(t){var r=t.item;return[r.form?n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-btn",{attrs:{outlined:"",small:"",to:"/app/services/forms/"+r.form.id}},[e._v(e._s(r.form.id))])],1):e._e()]}},{key:"item.serviced_on",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v("\n          "+e._s(r.serviced_on?e.$luxon(r.serviced_on):"NA")+"\n\t\t\t\t")])]}},{key:"item.actions",fn:function(t){var r=t.item;return[n("div",[n("v-btn",{attrs:{to:"/user/tasks/editor?id="+r.id,color:"blue",outlined:"",small:""}},[n("v-icon",{attrs:{left:""}},[e._v(" mdi-pencil-box-multiple ")]),e._v(" Fill\n        ")],1)],1)]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}}),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!e.$auth.user.present,expression:"!$auth.user.present"}],staticClass:"my-1",attrs:{small:"",color:"primary"},on:{click:function(t){return e.markPresent()}}},[e._v("Mark Present")])],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:f.a,VChip:v.a,VContainer:m.a,VDataTable:_.a,VIcon:h.a,VLayout:x.a,VTextField:y.a})},512:function(e,t,n){"use strict";var r=n(5),c=n(123).findIndex,o=n(122),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},513:function(e,t,n){var r=n(328),c=n(44);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),c.f(e,t,n)}},516:function(e,t,n){"use strict";var r=n(37),c=n(122),o=n(56),l=n(64),d=n(513);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=o(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=o(this),n=l(t);return t[0==n?0:n-1]=e}}),c("lastItem"))},756:function(e,t,n){var content=n(841);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("3c26ec4a",content,!0,{sourceMap:!1})},840:function(e,t,n){"use strict";n(756)},841:function(e,t,n){var r=n(9)(!1);r.push([e.i,".v-data-footer__select{visibility:hidden}",""]),e.exports=r}}]);