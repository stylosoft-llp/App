(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1048:function(e,t,n){"use strict";n.r(t);var r=n(510),o=n(742),l=n(220),c=n(530),d=n(509),m=n(17),f=n(3),_=(n(70),{layout:"superDesktop",data:function(){var e;return e={serviceHeaders:[{text:"Company Id",value:"company[0].id"},{text:"Company Name",value:"company[0].name"},{text:"Customer Name",value:"name"},{text:"E-Mail",value:"email"},{text:"Address",value:"user_detail.address_1"},{text:"Mobile",value:"phone"},{text:"Date",value:"created_at"},{text:"Consent Person",value:"user_detail.consent_auth_1"},{text:"Actions",value:"actions"}],leadFile:null,datemenu:!1,tableSelected:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},leads:[],date:[],users:[],focus:0,userToggle:!1,status:"",changingStatus:!1},Object(f.a)(e,"loading",!1),Object(f.a)(e,"search_keywords",""),e},mounted:function(){this.getUsers()},methods:{getUsers:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/customers",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()},focususer:function(e){this.focus=e,this.userToggle=!0}}}),v=n(26),component=Object(v.a)(_,(function(){var e=this,t=e._self._c;return t(c.a,{attrs:{column:"",container:""}},[t("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[t(d.a,{staticClass:"mx-1",attrs:{label:"Search User","append-icon":"mdi-magnify",hint:"Search By Name or Email",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getUsers()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),t(r.a,{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(t){return e.getUsers()}}},[t(l.a,[e._v("mdi-magnify")])],1),e._v(" "),t(r.a,{staticClass:"mx-1",attrs:{to:"/app/customers/editor",color:"primary"}},[t(l.a,{attrs:{left:""}},[e._v("mdi-plus-box-multiple")]),e._v(" Add\n    ")],1)],1),e._v(" "),e.loading?t("p",{staticClass:"pa-4 text-center"},[e._v("Loading")]):e._e(),e._v(" "),t(o.a,{staticClass:"elevation-1",attrs:{"disable-sort":"","show-select":!1,"footer-props":{"disable-items-per-page":!0},headers:e.serviceHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"item.created_at",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[e._v("\n          "+e._s(r.created_at?e.$luxon(r.created_at):"NA")+"\n\t\t\t\t")])]}},{key:"item.actions",fn:function(n){var o=n.item;return[t("div",{staticClass:"row"},[t(r.a,{attrs:{to:"/app/customers/editor?id="+o.id,color:"blue",icon:"",small:""}},[t(l.a,[e._v(" mdi-pencil-box-multiple ")])],1),e._v(" "),t(r.a,{attrs:{color:"error",icon:"",small:""},on:{click:function(t){return e.deleteItem(o.id)}}},[t(l.a,[e._v("\n          mdi-delete\n        ")])],1)],1)]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}})],1)}),[],!1,null,null,null);t.default=component.exports},528:function(e,t,n){"use strict";var r=n(4),o=n(127).findIndex,l=n(125),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},531:function(e,t,n){"use strict";var r=n(34),o=n(125),l=n(55),c=n(62),d=n(103);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=l(this),t=c(e);return 0==t?void 0:e[t-1]},set:function(e){var t=l(this),n=c(t);return t[0==n?0:n-1]=e}}),o("lastItem"))}}]);