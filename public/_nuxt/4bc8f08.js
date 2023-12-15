(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1054:function(e,t,n){"use strict";n.r(t);var r=n(510),c=n(524),o=n(757),l=n(218),d=n(530),f=n(509),v=n(17),m=(n(69),{layout:"superDesktop",data:function(){return{serviceHeaders:[{text:"Id",value:"id"},{text:"Name",value:"name"},{text:"Type",value:"service_type"},{text:"Status",value:"status"},{text:"Assignee",value:"assignee.name"},{text:"Customer",value:"customer.name"},{text:"Expected Date",value:"expected_date"},{text:"Serviced On",value:"serviced_on"},{text:"Actions",value:"actions"}],date:[],leadFile:null,datemenu:!1,tableSelected:[],leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:""}},created:function(){this.fetchServices()},mounted:function(){},methods:{csvLead:function(){var e=this,t=new FormData;t.append("csv",this.leadFile),this.$axios.post("auth/admin/leads/csv",t,{headers:{"content-type":"multipart/form-data"}}).then((function(n){e.leadFile=null,t=null,e.fetchServices()}),(function(e){406===e.response.status&&alert("Upload Failed! Please recheck CSV File & try again.")}))},updatePage:function(e){this.current_page=e,this.fetchServices()},fetchServices:function(){var e=this;return Object(v.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/services",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status,type:"assigned"}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()},save:function(e){var t=this;return Object(v.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,r=e,n.next=4,t.$axios.put("auth/leads/".concat(r.id),r).then((function(e){t.closeDialog+=1,t.fetchServices()}),(function(e){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(e){var t=this;return Object(v.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:confirm("delete?"),t.loading=!0,t.$axios.delete("auth/services/".concat(e)).then((function(e){t.fetchServices()}),(function(e){t.loading=!1}));case 3:case"end":return n.stop()}}),n)})))()}}}),h=(n(888),n(26)),component=Object(h.a)(m,(function(){var e=this,t=e._self._c;return t(d.a,{attrs:{column:""}},[t(c.a,[t("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[t(f.a,{staticClass:"mx-1",attrs:{label:"Search Service","append-icon":"mdi-magnify",hint:"Search By Tracking No, Name or Phone",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchServices()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),t(r.a,{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(t){return e.fetchServices()}}},[t(l.a,[e._v("mdi-magnify")])],1),e._v(" "),t(r.a,{staticClass:"mx-1",attrs:{to:"/app/services/editor",color:"primary"}},[t(l.a,{attrs:{left:""}},[e._v("mdi-plus-box-multiple")]),e._v(" Add Service\n    ")],1)],1),e._v(" "),t(o.a,{staticClass:"elevation-1",attrs:{"show-select":!1,"footer-props":{"disable-items-per-page":!0},"disable-sort":"",headers:e.serviceHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"item.status",fn:function(n){var r=n.item;return[t("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[t("span",{staticClass:"font-weight-bold",class:"".concat(e.statusColors[r.status],"--text")},[e._v(e._s(r.status))])])]}},{key:"item.expected_date",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[e._v("\n          "+e._s(r.expected_date?e.$luxon(r.expected_date):"NA")+"\n\t\t\t\t")])]}},{key:"item.serviced_on",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[e._v("\n          "+e._s(r.serviced_on?e.$luxon(r.serviced_on):"NA")+"\n\t\t\t\t")])]}},{key:"item.actions",fn:function(n){var c=n.item;return[t("div",{staticClass:"row"},[t(r.a,{attrs:{to:"/app/services/editor?id="+c.id,color:"blue",icon:"",small:""}},[t(l.a,[e._v(" mdi-pencil-box-multiple ")])],1),e._v(" "),t(r.a,{attrs:{color:"error",icon:"",small:""},on:{click:function(t){return e.deleteItem(c.id)}}},[t(l.a,[e._v("\n          mdi-delete\n        ")])],1)],1)]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},528:function(e,t,n){"use strict";var r=n(4),c=n(126).findIndex,o=n(125),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return c(this,e,arguments.length>1?arguments[1]:void 0)}}),o(l)},531:function(e,t,n){"use strict";var r=n(34),c=n(125),o=n(54),l=n(61),d=n(103);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=o(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=o(this),n=l(t);return t[0==n?0:n-1]=e}}),c("lastItem"))},783:function(e,t,n){var content=n(889);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("63dfd4cc",content,!0,{sourceMap:!1})},888:function(e,t,n){"use strict";n(783)},889:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,".v-data-footer__select{visibility:hidden}",""]),r.locals={},e.exports=r}}]);