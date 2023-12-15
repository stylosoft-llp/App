(window.webpackJsonp=window.webpackJsonp||[]).push([[71],{1030:function(t,e,n){"use strict";n.r(e);var r=n(20),o=(n(70),{layout:"superDesktop",data:function(){return{productHeaders:[{text:"Product Code",value:"slug"},{text:"Product Name",value:"name"},{text:"Short Desc",value:"s_desc"},{text:"Status",value:"status"},{text:"Actions",value:"actions"}],date:[],leadFile:null,datemenu:!1,tableSelected:[],leads:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},closeDialog:0,search_keywords:"",search_status:""}},created:function(){this.fetchProducts()},mounted:function(){},methods:{csvLead:function(){var t=this,e=new FormData;e.append("csv",this.leadFile),this.$axios.post("auth/admin/leads/csv",e,{headers:{"content-type":"multipart/form-data"}}).then((function(n){t.leadFile=null,e=null,t.fetchProducts()}),(function(t){406===t.response.status&&alert("Upload Failed! Please recheck CSV File & try again.")}))},updatePage:function(t){this.current_page=t,this.fetchProducts()},fetchProducts:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("auth/products",{params:{page:t.current_page,per_page:t.per_page,search:t.search_keywords,status:t.search_status}}).then((function(e){t.leads=e.data.data,t.total=e.data.total,t.current_page=e.data.current_page,t.per_page=+e.data.per_page,t.loading=!1}),(function(t){}));case 3:case"end":return e.stop()}}),e)})))()},save:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,r=t,n.next=4,e.$axios.put("auth/leads/".concat(r.id),r).then((function(t){e.closeDialog+=1,e.fetchProducts()}),(function(t){e.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()},deleteItem:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(window.confirm("Are you sure to this product?")){n.next=2;break}return n.abrupt("return");case 2:e.loading=!0,e.$axios.delete("auth/products/".concat(t)).then((function(t){e.fetchProducts()}),(function(t){e.loading=!1}));case 4:case"end":return n.stop()}}),n)})))()}}}),c=(n(864),n(27)),l=n(31),d=n.n(l),f=n(491),v=n(503),m=n(792),h=n(210),_=n(512),x=n(490),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:""}},[n("v-container",[n("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[n("v-text-field",{staticClass:"mx-1",attrs:{label:"Search Product","append-icon":"mdi-magnify",hint:"Search By Tracking No, Name or Phone",outlined:"",dense:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.fetchProducts()}},model:{value:t.search_keywords,callback:function(e){t.search_keywords=e},expression:"search_keywords"}}),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(e){return t.fetchProducts()}}},[n("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{to:"/app/products/editor",color:"primary"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box-multiple")]),t._v(" Add Product\n    ")],1)],1),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"show-select":!1,"footer-props":{"disable-items-per-page":!0},"disable-sort":"",headers:t.productHeaders,items:t.leads,itemsPerPage:t.per_page,page:t.current_page,"server-items-length":t.total,loading:t.loading},on:{input:function(e){return t.select(e)},"update:page":function(e){return t.updatePage(e)}},scopedSlots:t._u([{key:"item.status",fn:function(e){var r=e.item;return[n("td",{staticClass:"text-center",staticStyle:{"white-space":"nowrap"}},[n("span",{staticClass:"font-weight-bold",class:t.statusColors[r.status]+"--text"},[t._v(t._s(r.status))])])]}},{key:"item.replacement",fn:function(e){var r=e.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-icon",[t._v(t._s(r.replacement?"mdi-check":"mdi-close"))])],1)]}},{key:"item.installation",fn:function(e){var r=e.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-icon",[t._v(t._s(r.installation?"mdi-check":"mdi-close"))])],1)]}},{key:"item.actions",fn:function(e){var r=e.item;return[n("div",{staticClass:"row"},[n("v-btn",{attrs:{to:"/app/products/editor?id="+r.id,color:"blue",icon:"",small:""}},[n("v-icon",[t._v(" mdi-pencil-box-multiple ")])],1),t._v(" "),n("v-btn",{attrs:{color:"error",icon:"",small:""},on:{click:function(e){return t.deleteItem(r.id)}}},[n("v-icon",[t._v("\n          mdi-delete\n        ")])],1)],1)]}}]),model:{value:t.tableSelected,callback:function(e){t.tableSelected=e},expression:"tableSelected"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:f.a,VContainer:v.a,VDataTable:m.a,VIcon:h.a,VLayout:_.a,VTextField:x.a})},509:function(t,e,n){"use strict";var r=n(5),o=n(123).findIndex,c=n(122),l="findIndex",d=!0;l in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},510:function(t,e,n){var r=n(327),o=n(43);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},513:function(t,e,n){"use strict";var r=n(37),o=n(122),c=n(55),l=n(63),d=n(510);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=c(this),e=l(t);return 0==e?void 0:t[e-1]},set:function(t){var e=c(this),n=l(e);return e[0==n?0:n-1]=t}}),o("lastItem"))},761:function(t,e,n){var content=n(865);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("6e0e8a84",content,!0,{sourceMap:!1})},864:function(t,e,n){"use strict";n(761)},865:function(t,e,n){var r=n(9)(!1);r.push([t.i,".v-data-footer__select{visibility:hidden}",""]),t.exports=r}}]);