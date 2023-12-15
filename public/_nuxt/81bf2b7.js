(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1010:function(e,t,n){"use strict";n.r(t);var r=n(21),o=n(3),l=(n(70),{layout:"appDesktop",data:function(){var e;return e={serviceHeaders:[{text:"Company Id",value:"company[0].id"},{text:"Company Name",value:"company[0].name"},{text:"Customer Name",value:"name"},{text:"E-Mail",value:"email"},{text:"Address",value:"user_detail.address_1"},{text:"Mobile",value:"phone"},{text:"Added On",value:"created_at"},{text:"Consent Person",value:"user_detail.consent_auth_1"},{text:"Actions",value:"actions"}],importing:!1,datemenu:!1,tableSelected:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},leads:[],date:[],users:[],focus:0,userToggle:!1,status:"",changingStatus:!1},Object(o.a)(e,"loading",!1),Object(o.a)(e,"search_keywords",""),e},mounted:function(){this.getUsers()},methods:{getUsers:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/customers",{params:{page:e.current_page,per_page:e.per_page,search:e.search_keywords,status:e.search_status}}).then((function(t){e.leads=t.data.data,e.total=t.data.total,e.current_page=t.data.current_page,e.per_page=+t.data.per_page,e.loading=!1}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()},csvUsers:function(e){var t=this;this.importing=!0;var n=new FormData;n.append("csv",e.target.files[0]),this.$axios.post("admin/customers/csv",n,{headers:{"content-type":"multipart/form-data"}}).then((function(e){t.getUsers(),t.importing=!1,alert("Upload Successful. Fetching..."),t.$refs.fileInput.value=""}),(function(e){t.importing=!1,406===e.response.status&&alert("Upload Failed! Please recheck CSV File & try again."),t.$refs.fileInput.value=""}))},focususer:function(e){this.focus=e,this.userToggle=!0}}}),c=n(27),d=n(31),m=n.n(d),v=n(491),f=n(990),_=n(210),h=n(510),y=n(490),component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:"",container:""}},[n("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[n("v-text-field",{staticClass:"mx-1",attrs:{label:"Search User","append-icon":"mdi-magnify",hint:"Search By Name or Email",outlined:"",dense:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.getUsers()}},model:{value:e.search_keywords,callback:function(t){e.search_keywords=t},expression:"search_keywords"}}),e._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(t){return e.getUsers()}}},[n("v-icon",[e._v("mdi-magnify")])],1),e._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{to:"/app/customers/editor",color:"primary"}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-plus-box-multiple")]),e._v(" Add\n    ")],1)],1),e._v(" "),e.loading?n("p",{staticClass:"pa-4 text-center"},[e._v("Loading")]):e._e(),e._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"disable-sort":"","show-select":!1,"footer-props":{"disable-items-per-page":!0},headers:e.serviceHeaders,items:e.leads,itemsPerPage:e.per_page,page:e.current_page,"server-items-length":e.total,loading:e.loading},on:{input:function(t){return e.select(t)},"update:page":function(t){return e.updatePage(t)}},scopedSlots:e._u([{key:"item.created_at",fn:function(t){var r=t.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[e._v("\n          "+e._s(r.created_at?e.$luxon(r.created_at):"NA")+"\n\t\t\t\t")])]}},{key:"item.actions",fn:function(t){var r=t.item;return[n("div",{staticClass:"row"},[n("v-btn",{attrs:{to:"/app/customers/editor?id="+r.id,color:"blue",icon:"",small:""}},[n("v-icon",[e._v(" mdi-pencil-box-multiple ")])],1),e._v(" "),n("v-btn",{attrs:{color:"error",icon:"",small:""},on:{click:function(t){return e.deleteItem(r.id)}}},[n("v-icon",[e._v("\n          mdi-delete\n        ")])],1)],1)]}}]),model:{value:e.tableSelected,callback:function(t){e.tableSelected=t},expression:"tableSelected"}}),e._v(" "),n("div",{staticClass:"my-1"},[n("input",{ref:"fileInput",attrs:{type:"file",hidden:"",label:"Upload CSV"},on:{input:function(t){return e.csvUsers(t)}}}),e._v(" "),n("v-btn",{attrs:{loading:e.importing,color:"primary"},on:{click:function(t){return e.$refs.fileInput.click()}}},[n("v-icon",{attrs:{left:""}},[e._v("mdi-file-table")]),e._v(" Import")],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VDataTable:f.a,VIcon:_.a,VLayout:h.a,VTextField:y.a})}}]);