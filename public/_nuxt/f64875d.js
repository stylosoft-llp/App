(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{469:function(e,t,n){"use strict";n.r(t);n(109),n(15),n(74),n(93),n(285),n(65);var l=n(14),o={props:["leads","leadsHeaders","total","current_page","per_page","loading","closeDialog","admin","title"],data:function(){return{leadFile:null,statusColors:{New:"red",Pending:"amber","Follow Up":"blue","Awaiting Response":"amber","Call Back":"orange",IER:"blue",Completed:"green","Not Interested":"grey","Walk In":"purple",Enrolled:"green"},tableSelected:[],editedItem:{},editedIndex:null,editDialog:!1,dialogDelete:!1,options:!1,selected:[],upload:null,sending:!1,assignDialog:!1,assignee:null,assignee_search:"",assignees:[],loadingAssignees:!1}},watch:{closeDialog:function(){this.close()},assignee_search:function(){this.searchAssignees()}},methods:{deleteItem:function(){this.dialogDelete=!0},editItem:function(e){this.editedIndex=this.leads.indexOf(e),this.editedItem=Object.assign({},e),this.editDialog=!0},updatePage:function(e){this.$emit("page-changed",e)},deleteConfirm:function(e){window.confirm("Sure to Delete?")&&this.$emit("deleteItem",[e])},multipleDeleteConfirm:function(e){window.confirm("Delete Selected Lead(s)?")&&this.$emit("deleteMultiple",e)},changeMultiStatus:function(e){var t=this;this.$emit("changeStatuses",{status:e,selected:this.selected}),this.$nextTick((function(){t.selected=[],t.tableSelected=[],t.assignee=""}))},close:function(){var e=this;this.editDialog=!1,this.assignDialog=!1,this.$nextTick((function(){e.editedItem=Object.assign({},e.defaultItem),e.editedIndex=-1}))},uploadFile:function(e){var t=this;this.sending=!0;var n=new FormData;n.append("file",this.upload),n.append("id",e),this.$axios.post("auth/file",n,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.editedItem=e.data,window.alert("Upload Successful!"),t.sending=!1}),(function(){t.sending=!1,window.alert("ERROR: Upload Failed")}))},deleteSAF:function(e){var t=this,n=this.editedItem;this.$axios.delete("/auth/SAF/"+e).then((function(e){t.$nextTick((function(){n.file=null,t.editedItem=n}))}),(function(e){}))},downloadFile:function(e){this.$axios.get("auth/download",{responseType:"blob",params:{path:e}}).then((function(e){var t=new Blob([e.data],{type:"application/pdf"}),link=document.createElement("a");link.href=window.URL.createObjectURL(t),link.target="_blank",link.click()}))},searchAssignees:function(){var e=this;this.loadingAssignees=!0,this.$axios.get("auth/admin/users",{params:{name:this.assignee_search}}).then((function(t){e.assignees=t.data,e.loadingAssignees=!1}),(function(t){e.loadingAssignees=!1}))},assignConfirm:function(e){var t=this;window.confirm("Sure to assign?")&&(this.$emit("assign",e),this.assignDialog=!1,this.$nextTick((function(){t.selected=[],t.tableSelected=[],t.assignee=""})))},save:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.editedItem,e.$emit("update",n);case 2:case"end":return t.stop()}}),t)})))()},select:function(e){this.selected=e}}},d=n(22),r=n(23),c=n.n(r),m=n(564),f=n(199),v=n(202),h=n(137),_=n(460),x=n(456),k=n(567),w=n(457),I=n(446),y=n(565),C=n(201),D=n(462),S=n(491),$=n(465),A=n(440),V=n(482),L=n(64),R=n(470),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":"","footer-props":{"disable-items-per-page":!0},"disable-sort":"",headers:e.leadsHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"top",fn:function(){return[n("v-toolbar",{attrs:{flat:""}},[n("v-toolbar-title",[e._v(e._s(e.title))]),e._v(" "),n("v-divider",{staticClass:"mx-4",attrs:{inset:"",vertical:""}}),e._v(" "),e.selected.length?n("span",{staticClass:"d-flex flex-row align-center"},[n("v-btn",{staticClass:"mx-1",attrs:{color:"black",dark:"",depressed:""},on:{click:function(t){return e.multipleDeleteConfirm(e.selected)}}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-delete")]),e._v(" Delete\n            ")],1),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:null!==e.$nuxt.$route.path.match(/admin\/trash/i),expression:"($nuxt.$route.path.match(/admin\\/trash/i) !== null)"}],staticClass:"mx-1",attrs:{color:"green",dark:"",depressed:""},on:{click:function(t){return e.$emit("restore",e.selected)}}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-restore")]),e._v(" Restore\n            ")],1),e._v(" "),n("v-select",{staticClass:"mx-1",attrs:{dense:"","hide-details":"",solo:"",color:"primary",items:["New","Follow Up","Awaiting Response","Completed","Walk In","Enrolled","Not Interested","Call Back","IER"],label:"Change Status"},on:{input:function(t){return e.changeMultiStatus(t)}}})],1):e._e(),e._v(" "),n("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.admin&&e.selected.length,expression:"admin && selected.length"}],attrs:{color:"secondary"},on:{click:function(t){e.assignDialog=!0}}},[e._v("Assign Leads")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-dialog",{attrs:{width:"600px",persistent:""},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[n("v-btn",e._g(e._b({staticClass:"mb-2 font-weight-bold",attrs:{color:"primary",dark:"",depressed:""}},"v-btn",o,!1),l),[e._v("\n                New Lead\n              ")])]}}]),model:{value:e.editDialog,callback:function(t){e.editDialog=t},expression:"editDialog"}},[e._v(" "),n("v-card",[n("v-card-title",[n("span",{staticClass:"text-h5"},[e._v(e._s(e.editedItem&&e.editedItem.length?"Edit Lead":"New Lead"))])]),e._v(" "),n("v-card-subtitle",[e._v("Source: "+e._s(e.editedItem.source||"Manual"))]),e._v(" "),n("v-card-text",[n("v-container",[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Full name"},model:{value:e.editedItem.name,callback:function(t){e.$set(e.editedItem,"name",t)},expression:"editedItem.name"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{required:"",label:"E-Mail"},model:{value:e.editedItem.email,callback:function(t){e.$set(e.editedItem,"email",t)},expression:"editedItem.email"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{counter:"",min:"10",label:"Phone"},model:{value:e.editedItem.phone,callback:function(t){e.$set(e.editedItem,"phone",t)},expression:"editedItem.phone"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-text-field",{attrs:{label:"Destination Country"},model:{value:e.editedItem.destination,callback:function(t){e.$set(e.editedItem,"destination",t)},expression:"editedItem.destination"}})],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("v-text-field",{attrs:{label:"Address"},model:{value:e.editedItem.address,callback:function(t){e.$set(e.editedItem,"address",t)},expression:"editedItem.address"}}),e._v(" "),n("v-text-field",{attrs:{label:"City"},model:{value:e.editedItem.city,callback:function(t){e.$set(e.editedItem,"city",t)},expression:"editedItem.city"}}),e._v(" "),n("v-text-field",{attrs:{label:"Description"},model:{value:e.editedItem.desc,callback:function(t){e.$set(e.editedItem,"desc",t)},expression:"editedItem.desc"}}),e._v(" "),n("v-textarea",{attrs:{rows:"3",label:"Message"},model:{value:e.editedItem.query,callback:function(t){e.$set(e.editedItem,"query",t)},expression:"editedItem.query"}}),e._v(" "),n("div",{staticClass:"d-flex justify-center my-2"},[n("v-file-input",{attrs:{solo:"",dense:"","prepend-icon":"","prepend-inner-icon":"mdi-file-pdf-box","hide-details":"",label:"Upload SAF"},model:{value:e.upload,callback:function(t){e.upload=t},expression:"upload"}}),e._v(" "),n("v-btn",{staticClass:"ml-2",attrs:{loading:e.sending,color:"primary"},on:{click:function(t){return e.uploadFile(e.editedItem.id)}}},[e._v("Confirm")])],1),e._v(" "),e.editedItem.file?n("v-btn",{staticClass:"font-weight-bold",attrs:{text:"",color:"secondary"},on:{click:function(t){return e.downloadFile(e.editedItem.file)}}},[e._v("\n                        View SAF\n                      ")]):e._e(),e._v(" "),e.editedItem.file?n("v-btn",{staticClass:"font-weight-bold",attrs:{text:"",color:"primary"},on:{click:function(t){return e.deleteSAF(e.editedItem.id)}}},[e._v("\n                        Delete SAF\n                      ")]):e._e()],1)],1)],1)],1),e._v(" "),n("v-card-actions",[n("v-select",{attrs:{dense:"",outlined:"",items:["New","Follow Up","Awaiting Response","Completed","Walk In","Enrolled","Not Interested","Call Back","IER"],label:"Status"},model:{value:e.editedItem.status,callback:function(t){e.$set(e.editedItem,"status",t)},expression:"editedItem.status"}}),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"grey darken-1",text:""},on:{click:function(t){return e.close()}}},[e._v("\n                  Cancel\n                ")]),e._v(" "),n("v-btn",{attrs:{color:"blue darken-1",dark:""},on:{click:function(t){return e.save()}}},[e._v(" Save ")])],1)],1)],1),e._v(" "),n("v-dialog",{attrs:{persistent:"","max-width":"400px"},model:{value:e.assignDialog,callback:function(t){e.assignDialog=t},expression:"assignDialog"}},[n("v-card",[n("v-card-title",[e._v("\n                Assign To\n                "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(t){e.assignDialog=!1}}},[n("v-icon",[e._v("mdi-close")])],1)],1),e._v(" "),n("v-card-text",[n("v-autocomplete",{attrs:{clearable:"",loading:e.loadingAssignees,"search-input":e.assignee_search,label:"Change Assignee","item-text":"name","item-value":"id","prepend-icon":"mdi-magnify",items:e.assignees},on:{focus:function(t){return e.searchAssignees()},"update:searchInput":function(t){e.assignee_search=t},"update:search-input":function(t){e.assignee_search=t},input:function(t){return e.assignConfirm({user_id:t,selected:e.selected})}},model:{value:e.assignee,callback:function(t){e.assignee=t},expression:"assignee"}})],1)],1)],1)],1)]},proxy:!0},{key:"item.status",fn:function(t){var l=t.item;return[n("td",{staticClass:"text-center"},[n("span",{staticClass:"font-weight-bold",class:e.statusColors[l.status]+"--text"},[e._v(e._s(l.status))])])]}},{key:"item.created_at",fn:function(t){var l=t.item;return[n("td",[e._v("\n        "+e._s(l.created_at&&new Date(l.created_at).toDateString())+"\n\t\t\t\t")])]}},{key:"item.actions",fn:function(t){var l=t.item;return[n("v-icon",{staticClass:"mr-2",attrs:{small:""},on:{click:function(t){return e.editItem(l)}}},[e._v(" mdi-pencil ")]),e._v(" "),n("v-icon",{attrs:{small:""},on:{click:function(t){return e.deleteConfirm(l.id)}}},[e._v("\n          mdi-delete\n        ")])]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}})],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{VAutocomplete:m.a,VBtn:f.a,VCard:v.a,VCardActions:h.a,VCardSubtitle:h.b,VCardText:h.c,VCardTitle:h.d,VCol:_.a,VContainer:x.a,VDataTable:k.a,VDialog:w.a,VDivider:I.a,VFileInput:y.a,VIcon:C.a,VRow:D.a,VSelect:S.a,VSpacer:$.a,VTextField:A.a,VTextarea:V.a,VToolbar:L.a,VToolbarTitle:R.a})},497:function(e,t,n){var content=n(545);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(7).default)("64cf81cd",content,!0,{sourceMap:!1})},544:function(e,t,n){"use strict";n(497)},545:function(e,t,n){(t=n(6)(!1)).push([e.i,".v-data-footer__select{visibility:hidden}",""]),e.exports=t},573:function(e,t,n){"use strict";n.r(t);n(42),n(54),n(65);var l=n(14),o={components:{leadManager:n(469).default},layout:"adminDesktop",data:function(){return{leadsHeaders:[{text:"Full Name",value:"name"},{text:"E-Mail",value:"email"},{text:"Phone",value:"phone"},{text:"Description",value:"desc"},{text:"Dest. Country",value:"destination"},{text:"Assigned To",value:"assignee.name"},{text:"Added On",value:"created_at"},{text:"Status",value:"status"},{text:"Actions",value:"actions"}],datemenu:!1,date:[],leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:"",assignee:null,assignee_search:"",assignees:[],loadingAssignees:!1}},created:function(){this.fetchLeads()},watch:{assignee_search:function(){this.searchAssignees()}},mounted:function(){},methods:{updatePage:function(e){this.current_page=e,this.fetchLeads()},fetchLeads:function(){var e=this;return Object(l.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/admin/leads/assigned",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status,date:e.date,assignee:e.assignee}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()},save:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t.loading=!0,l=e,n.next=4,t.$axios.put("auth/leads/".concat(l.id),l).then((function(e){t.closeDialog+=1,t.fetchLeads()}),(function(e){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},assignLead:function(e){var t=this;this.loading=!0;var n=e.user_id,l=[];e.selected.forEach((function(e){l.push(e.id)})),this.$axios.post("auth/admin/leads/assignees",{ids:l,user_id:n}).then((function(e){t.fetchLeads()}),(function(e){t.loading=!1}))},deleteItem:function(e){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){var l;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t.loading=!0,l=[],e.forEach((function(e){l.push(e.id)})),t.$axios.delete("auth/leads/".concat(e),{ids:l}).then((function(e){t.fetchLeads()}),(function(e){t.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},deleteMultiple:function(e){var t=this;this.loading=!0;var n=[];e.forEach((function(e){n.push(e.id)})),this.$axios.post("auth/leads/delete",{ids:n}).then((function(e){t.fetchLeads()}),(function(e){t.loading=!1}))},changeStatuses:function(e){var t=this;this.loading=!0;var n=e.status,l=[];e.selected.forEach((function(e){l.push(e.id)})),this.$axios.post("auth/leads/statuses",{ids:l,status:n}).then((function(e){t.fetchLeads()}),(function(e){t.loading=!1}))},searchAssignees:function(){var e=this;this.loadingAssignees=!0,this.$axios.get("auth/admin/users",{params:{name:this.assignee_search}}).then((function(t){e.assignees=t.data,e.loadingAssignees=!1}),(function(t){e.loadingAssignees=!1}))}}},d=(n(544),n(22)),r=n(23),c=n.n(r),m=n(564),f=n(199),v=n(456),h=n(566),_=n(201),x=n(479),k=n(492),w=n(491),I=n(440),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("v-container",[n("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[n("v-text-field",{staticClass:"mx-1",attrs:{label:"Search Lead","append-icon":"mdi-magnify",hint:"Search By E-Mail or Phone",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.fetchLeads()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),n("v-autocomplete",{attrs:{outlined:"",dense:"",clearable:"",loading:e.loadingAssignees,"search-input":e.assignee_search,label:"Search By Staff","item-text":"name","item-value":"id","prepend-inner-icon":"mdi-account",items:e.assignees},on:{focus:function(t){return e.searchAssignees()},"update:searchInput":function(t){e.assignee_search=t},"update:search-input":function(t){e.assignee_search=t}},model:{value:e.assignee,callback:function(t){e.assignee=t},expression:"assignee"}}),e._v(" "),n("v-select",{staticClass:"mx-1",attrs:{outlined:"",dense:"",items:["New","Follow Up","Awaiting Response","Completed","Walk In","Enrolled","Not Interested","Call Back","IER"],label:"Search By Status"},model:{value:e.search_status,callback:function(t){e.search_status=t},expression:"search_status"}}),e._v(" "),n("v-menu",{ref:"datemenu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","max-width":"290px","min-width":"auto"},scopedSlots:e._u([{key:"activator",fn:function(t){var l=t.on,o=t.attrs;return[n("v-text-field",e._g(e._b({attrs:{outlined:"",dense:"",clearable:"",multiple:"",chips:"","small-chips":"",label:"Date (read only text field)",hint:"Choose date(s) YY-MM-DD","persistent-hint":"","prepend-inner-icon":"mdi-calendar",readonly:""},on:{focus:function(t){return e.$emit("on",!0)}},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}},"v-text-field",o,!1),l))]}}]),model:{value:e.datemenu,callback:function(t){e.datemenu=t},expression:"datemenu"}},[e._v(" "),n("v-date-picker",{attrs:{"no-title":"",range:""},model:{value:e.date,callback:function(t){e.date=t},expression:"date"}})],1),e._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"secondary"},on:{click:function(t){return e.fetchLeads()}}},[n("v-icon",[e._v("mdi-magnify")])],1)],1),e._v(" "),n("lead-manager",{attrs:{leads:e.leads,leadsHeaders:e.leadsHeaders,total:e.total,current_page:e.current_page,per_page:e.per_page,closeDialog:e.closeDialog,loading:e.loading,admin:!0,title:"Assigned Leads"},on:{assign:function(t){return e.assignLead(t)},changeStatuses:function(t){return e.changeStatuses(t)},deleteMultiple:function(t){return e.deleteMultiple(t)},"page-changed":function(t){return e.updatePage(t)},deleteItem:function(t){return e.deleteItem(t)},update:function(t){return e.save(t)}}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{LeadManager:n(469).default}),c()(component,{VAutocomplete:m.a,VBtn:f.a,VContainer:v.a,VDatePicker:h.a,VIcon:_.a,VLayout:x.a,VMenu:k.a,VSelect:w.a,VTextField:I.a})}}]);