(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{1012:function(t,e,n){"use strict";n.r(e);var r=n(21),o=n(3),c=(n(70),{layout:"appDesktop",data:function(){return Object(o.a)({productHeaders:[{text:"Product Code",value:"slug"},{text:"Product Name",value:"name"},{text:"Short Desc",value:"s_desc"},{text:"Status",value:"status"},{text:"Actions",value:"actions"}],date:[],leadFile:null,datemenu:!1,tableSelected:[],leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:""},"leadFile",null)},created:function(){this.fetchProducts()},mounted:function(){},methods:{csvProducts:function(t){var e=this,n=new FormData;n.append("csv",t.target.files[0]),this.$axios.post("admin/products/csv",n,{headers:{"content-type":"multipart/form-data"}}).then((function(t){e.fetchProducts(),alert("Upload Successful. Fetching Products..."),e.$refs.fileInput.value=""}),(function(t){406===t.response.status&&alert("Upload Failed! Please recheck CSV File & try again."),e.$refs.fileInput.value=""}))},updatePage:function(t){this.current_page=t,this.fetchProducts()},fetchProducts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("auth/products",{params:{page:t.current_page,per_page:t.per_page,search:t.search_keywords,status:t.search_status}}).then((function(e){t.leads=e.data.data,t.total=e.data.total,t.current_page=e.data.current_page,t.per_page=+e.data.per_page,t.loading=!1}),(function(t){}));case 3:case"end":return e.stop()}}),e)})))()},save:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,r=t,n.next=4,e.$axios.put("auth/leads/".concat(r.id),r).then((function(t){e.closeDialog+=1,e.fetchProducts()}),(function(t){e.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(window.confirm("Are you sure to this product?")){n.next=2;break}return n.abrupt("return");case 2:e.loading=!0,e.$axios.delete("auth/products/".concat(t)).then((function(t){e.fetchProducts()}),(function(t){e.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()}}}),l=(n(847),n(27)),d=n(31),f=n.n(d),v=n(491),m=n(571),h=n(503),_=n(990),y=n(210),k=n(510),x=n(490),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},[n("v-container",[n("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[n("v-text-field",{staticClass:"mx-1",attrs:{label:"Search Product","append-icon":"mdi-magnify",hint:"Search By Tracking No, Name or Phone",outlined:"",dense:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchProducts()}},model:{value:t.search_keywords,callback:function(e){t.search_keywords=e},expression:"search_keywords"}}),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(e){return t.fetchProducts()}}},[n("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{to:"/app/products/editor",color:"primary"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box-multiple")]),t._v(" Add Product\n      ")],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":!1,"footer-props":{"disable-items-per-page":!0},"disable-sort":"",headers:t.productHeaders,items:t.leads,itemsPerPage:t.per_page,page:t.current_page,"server-items-length":t.total,loading:t.loading},on:{input:function(e){return t.select(e)},"update:page":function(e){return t.updatePage(e)}},scopedSlots:t._u([{key:"item.status",fn:function(e){var r=e.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-chip",{attrs:{label:""}},[t._v(t._s(r.status))])],1)]}},{key:"item.replacement",fn:function(e){var r=e.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-icon",[t._v(t._s(r.replacement?"mdi-check":"mdi-close"))])],1)]}},{key:"item.installation",fn:function(e){var r=e.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-icon",[t._v(t._s(r.installation?"mdi-check":"mdi-close"))])],1)]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("div",{staticClass:"row"},[n("v-btn",{attrs:{to:"/app/products/editor?id="+r.id,color:"blue",icon:"",small:""}},[n("v-icon",[t._v(" mdi-pencil-box-multiple ")])],1),t._v(" "),n("v-btn",{attrs:{color:"error",icon:"",small:""},on:{click:function(e){return t.deleteItem(r.id)}}},[n("v-icon",[t._v(" mdi-delete ")])],1)],1)]}}]),model:{value:t.tableSelected,callback:function(e){t.tableSelected=e},expression:"tableSelected"}}),t._v(" "),n("div",{staticClass:"my-1"},[n("input",{ref:"fileInput",attrs:{type:"file",hidden:"",label:"Upload CSV"},on:{input:function(e){return t.csvProducts(e)}}}),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.$refs.fileInput.click()}}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-file-table")]),t._v(" Import")],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:v.a,VChip:m.a,VContainer:h.a,VDataTable:_.a,VIcon:y.a,VLayout:k.a,VTextField:x.a})},744:function(t,e,n){var content=n(848);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("04a5d8a9",content,!0,{sourceMap:!1})},847:function(t,e,n){"use strict";n(744)},848:function(t,e,n){var r=n(9)(!1);r.push([t.i,".v-data-footer__select{visibility:hidden}",""]),t.exports=r}}]);