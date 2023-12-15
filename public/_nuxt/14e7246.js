(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{1029:function(e,t,n){"use strict";n.r(t);var r=n(510),o=n(524),l=n(218),c=n(530),d=n(509),f=n(17),h=(n(5),n(13),n(69),{components:{leadManager:n(601).a},layout:"adminDesktop",data:function(){return{leadsHeaders:[{text:"FirstStar Id",value:"tracking_id"},{text:"Consigner Name",value:"consigner_name"},{text:"Consigner Phone",value:"consigner_phone1"},{text:"Consignee Name",value:"consignee_name"},{text:"Consignee Phone",value:"consignee_phone1"},{text:"Destination",value:"destination"},{text:"Status",value:"status"},{text:"Booked On",value:"booked_on"},{text:"Actions",value:"actions"}],date:[],leadFile:null,datemenu:!1,leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:"New"}},created:function(){this.fetchLeads()},mounted:function(){},methods:{csvLead:function(){var e=this,t=new FormData;t.append("csv",this.leadFile),this.$axios.post("auth/admin/leads/csv",t,{headers:{"content-type":"multipart/form-data"}}).then((function(n){e.leadFile=null,t=null,e.fetchLeads()}),(function(e){406===e.response.status&&alert("Upload Failed! Please recheck CSV File & try again.")}))},updatePage:function(e){this.current_page=e,this.fetchLeads()},fetchLeads:function(){var e=this;return Object(f.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/admin/couriers",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status,date:e.date}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()},save:function(e){var t=this;return Object(f.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,r=e,n.next=4,t.$axios.put("auth/leads/".concat(r.id),r).then((function(e){t.closeDialog+=1,t.fetchLeads()}),(function(e){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(e){var t=this;return Object(f.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.loading=!0,r=[],e.forEach((function(e){r.push(e.id)})),t.$axios.delete("auth/admin/couriers/".concat(e),{ids:r}).then((function(e){t.fetchLeads()}),(function(e){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},deleteMultiple:function(e){var t=this;this.loading=!0;var n=[];e.forEach((function(e){n.push(e.id)})),this.$axios.post("auth/admin/couriers-delete",{ids:n}).then((function(e){t.fetchLeads()}),(function(e){t.loading=!1}))},changeStatuses:function(e){var t=this;this.loading=!0;var n=e.status,r=[];e.selected.forEach((function(e){r.push(e.id)})),this.$axios.post("auth/admin/couriers-status",{ids:r,status:n}).then((function(e){t.fetchLeads()}),(function(e){t.loading=!1}))}}}),m=(n(857),n(26)),component=Object(m.a)(h,(function(){var e=this,t=e._self._c;return t(c.a,{attrs:{column:""}},[t(o.a,[t("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[t(d.a,{staticClass:"mx-1",attrs:{label:"Search Shipment","append-icon":"mdi-magnify",hint:"Search By Tracking No, Name or Phone",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchLeads()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),t(r.a,{staticClass:"mx-1",attrs:{color:"secondary"},on:{click:function(t){return e.fetchLeads()}}},[t(l.a,[e._v("mdi-magnify")])],1),e._v(" "),t(r.a,{staticClass:"mx-1",attrs:{to:"/admin/editor",color:"primary"}},[t(l.a,{attrs:{left:""}},[e._v("mdi-map-plus")]),e._v(" Create\n    ")],1)],1),e._v(" "),t("lead-manager",{attrs:{leads:e.leads,leadsHeaders:e.leadsHeaders,total:e.total,current_page:e.current_page,per_page:e.per_page,closeDialog:e.closeDialog,loading:e.loading,admin:!0,title:"New Shipments"},on:{assign:function(t){return e.assignLead(t)},changeStatuses:function(t){return e.changeStatuses(t)},deleteMultiple:function(t){return e.deleteMultiple(t)},"page-changed":function(t){return e.updatePage(t)},deleteItem:function(t){return e.deleteItem(t)},update:function(t){return e.save(t)}}})],1)],1)}),[],!1,null,null,null);t.default=component.exports},528:function(e,t,n){"use strict";var r=n(4),o=n(126).findIndex,l=n(125),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},531:function(e,t,n){"use strict";var r=n(34),o=n(125),l=n(54),c=n(61),d=n(103);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=l(this),t=c(e);return 0==t?void 0:e[t-1]},set:function(e){var t=l(this),n=c(t);return t[0==n?0:n-1]=e}}),o("lastItem"))},567:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(76),o=n(2),l=Object(o.i)("v-toolbar__title"),c=Object(o.i)("v-toolbar__items");r.a},601:function(e,t,n){"use strict";var r=n(510),o=n(757),l=n(511),c=n(218),d=n(552),f=n(76),h=n(567),m=(n(30),n(186),n(17)),v=(n(69),{props:["leads","leadsHeaders","total","current_page","per_page","loading","closeDialog","admin","title"],data:function(){return{leadFile:null,statusColors:{New:"red",Preparing:"deep-orange",Dispatching:"orange","Out for Delivery":"cyan",Arriving:"teal",Shipped:"green"},tableSelected:[],editedItem:{},editedIndex:null,editDialog:!1,dialogDelete:!1,options:!1,selected:[],upload:null,sending:!1,assignDialog:!1,assignee:null,assignee_search:"",assignees:[],loadingAssignees:!1}},watch:{closeDialog:function(){this.close()},assignee_search:function(){this.searchAssignees()}},methods:{deleteItem:function(){this.dialogDelete=!0},editItem:function(e){this.editedIndex=this.leads.indexOf(e),this.editedItem=Object.assign({},e),this.editDialog=!0},updatePage:function(e){this.$emit("page-changed",e)},deleteConfirm:function(e){window.confirm("Sure to Delete?")&&this.$emit("deleteItem",[e])},multipleDeleteConfirm:function(e){window.confirm("Delete Selected Lead(s)?")&&this.$emit("deleteMultiple",e)},changeMultiStatus:function(e){var t=this;this.$emit("changeStatuses",{status:e,selected:this.selected}),this.$nextTick((function(){t.selected=[],t.tableSelected=[],t.assignee=""}))},close:function(){var e=this;this.editDialog=!1,this.assignDialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},uploadFile:function(e){var t=this;this.sending=!0;var n=new FormData;n.append("file",this.upload),n.append("id",e),this.$axios.post("auth/file",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.editedItem=e.data,window.alert("Upload Successful!"),t.sending=!1}),(function(){t.sending=!1,window.alert("ERROR: Upload Failed")}))},save:function(){var e=this;return Object(m.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.editedItem,e.$emit("update",n);case 2:case"end":return t.stop()}}),t)})))()},select:function(e){this.selected=e}}}),_=n(26),component=Object(_.a)(v,(function(){var e=this,t=e._self._c;return t("div",[t(o.a,{staticClass:"elevation-1",attrs:{"show-select":"","footer-props":{"disable-items-per-page":!0},"disable-sort":"",headers:e.leadsHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"top",fn:function(){return[t(f.a,{attrs:{flat:""}},[t(h.a,[e._v(e._s(e.title))]),e._v(" "),t(l.a,{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),e.selected.length?t("span",{staticClass:"d-flex flex-row align-center"},[t(r.a,{staticClass:"mx-1",attrs:{color:"black",dark:"",depressed:""},on:{click:function(t){return e.multipleDeleteConfirm(e.selected)}}},[t(c.a,{attrs:{left:""}},[e._v("mdi-delete")]),e._v(" Delete\n            ")],1),e._v(" "),t(r.a,{directives:[{name:"show",rawName:"v-show",value:null!==e.$nuxt.$route.path.match(/admin\/trash/i),expression:"($nuxt.$route.path.match(/admin\\/trash/i) !== null)"}],staticClass:"mx-1",attrs:{color:"green",dark:"",depressed:""},on:{click:function(t){return e.$emit("restore",e.selected)}}},[t(c.a,{attrs:{left:""}},[e._v("mdi-restore")]),e._v(" Restore\n            ")],1),e._v(" "),t(d.a,{staticClass:"mx-1",attrs:{dense:"","hide-details":"",solo:"",color:"primary",items:e.$store.state.statuses,label:"Change Status"},on:{input:function(t){return e.changeMultiStatus(t)}}})],1):e._e()],1)]},proxy:!0},{key:"item.status",fn:function(n){var r=n.item;return[t("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[t("span",{staticClass:"font-weight-bold",class:"".concat(e.statusColors[r.status],"--text")},[e._v(e._s(r.status))])])]}},{key:"item.replacement",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[t(c.a,[e._v(e._s(r.replacement?"mdi-check":"mdi-close"))])],1)]}},{key:"item.installation",fn:function(n){var r=n.item;return[t("td",{staticStyle:{"white-space":"nowrap"}},[t(c.a,[e._v(e._s(r.installation?"mdi-check":"mdi-close"))])],1)]}},{key:"item.actions",fn:function(n){var o=n.item;return[t("div",{staticClass:"row"},[t(r.a,{attrs:{to:"/admin/editor?id="+o.id,color:"blue",icon:"","x-small":""}},[t(c.a,{attrs:{small:""}},[e._v(" mdi-pencil ")])],1),e._v(" "),t(r.a,{attrs:{color:"black",icon:"","x-small":""},on:{click:function(t){return e.deleteConfirm(o.id)}}},[t(c.a,{attrs:{small:""}},[e._v("\n          mdi-delete\n        ")])],1)],1)]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}})],1)}),[],!1,null,null,null);t.a=component.exports},771:function(e,t,n){var content=n(858);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("26197d59",content,!0,{sourceMap:!1})},857:function(e,t,n){"use strict";n(771)},858:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,".v-data-footer__select{visibility:hidden}",""]),r.locals={},e.exports=r}}]);