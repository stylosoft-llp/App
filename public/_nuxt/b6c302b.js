(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{1020:function(t,e,n){"use strict";n.r(e);var o={layout:"adminDesktop",data:function(){return{users:[],focus:0,userToggle:!1,status:"",changingStatus:!1,loading:!1}},mounted:function(){this.getUsers()},methods:{getUsers:function(){var t=this;this.loading=!0,this.$axios.get("auth/admin/queries").then((function(e){t.users=e.data,t.loading=!1}))},focususer:function(t){this.focus=t,this.userToggle=!0}}},l=n(27),r=n(31),v=n.n(r),c=n(488),_=n(210),d=n(499),m=n(541),f=n(489),h=n(506),y=n(726),V=n(709),w=n(504),C=n(548),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"",container:""}},[t.loading?n("p",{staticClass:"pa-4 text-center"},[t._v("Loading")]):n("v-simple-table",{attrs:{grow:"","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("User Id")]),t._v(" "),n("th",[t._v("User Name")]),t._v(" "),n("th",[t._v("User E-Mail")]),t._v(" "),n("th",[t._v("Actions")])])]),t._v(" "),n("tbody",t._l(t.users,(function(e,o){return n("tr",{key:o},[n("td",[n("div",[t._v("\n                "+t._s(e.id)+"\n              ")])]),t._v(" "),n("td",{staticClass:"py-1 body-1"},[t._v("\n                "+t._s(e.name)+"\n            ")]),t._v(" "),n("td",{staticClass:"py-1 body-2"},[t._v("\n                "+t._s(e.email)+"\n            ")]),t._v(" "),n("td",{staticClass:"py-1 body-1"},[t._v("\n                "+t._s(e.phone)+"\n            ")]),t._v(" "),n("td",[n("v-btn",{attrs:{color:"primary",small:""},on:{click:function(e){return t.focususer(o)}}},[t._v("View")])],1)])})),0)]},proxy:!0}])}),t._v(" "),t.users[t.focus]?n("v-dialog",{attrs:{"max-width":"600"},model:{value:t.userToggle,callback:function(e){t.userToggle=e},expression:"userToggle"}},[t.users[t.focus]?n("v-card",[n("v-container",[n("h4",[t._v("user Details")]),t._v(" "),t.users[t.focus]?n("v-list",{attrs:{"two-line":""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("User Name:")]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.users[t.focus].name))])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("User E-Mail:")]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.users[t.focus].email))])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",[t._v("User Phone:")]),t._v(" "),n("v-list-item-subtitle",[t._v(t._s(t.users[t.focus].phone))])],1)],1)],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("p",{staticClass:"body-2"},[t._v(t._s(t.users[t.focus].message))])],1)],1):t._e()],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:c.a,VCard:_.a,VContainer:d.a,VDialog:m.a,VDivider:f.a,VLayout:h.a,VList:y.a,VListItem:V.a,VListItemContent:w.a,VListItemSubtitle:w.b,VListItemTitle:w.c,VSimpleTable:C.a})}}]);