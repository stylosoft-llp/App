(window.webpackJsonp=window.webpackJsonp||[]).push([[107],{1066:function(t,e,n){"use strict";n.r(e);n(43),n(55);var o={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/admin#dashboard"},{icon:"mdi-package-variant",title:"Products",to:"/admin/products"},{icon:"mdi-hammer-wrench",title:"Services",to:"/admin/services"},{icon:"mdi-format-list-checkbox",title:"Assigned Tasks",to:"/admin/tasks"},{icon:"mdi-account-group",title:"Users",to:"/admin/users"},{icon:"mdi-home",title:"Home",to:"/"}]}},computed:{superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}}},r=(n(890),n(27)),c=n(31),l=n.n(c),d=n(211),m=n(210),v=n(308),f=n(750),h=n(728),w=n(511),_=n(729),k=n(999),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{style:"background:linear-gradient(140deg,var(--v-primary-base),var(--v-secondary-base)) !important;",attrs:{left:"",width:"220",value:t.value,floating:"",dark:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){return t.$emit("input",e)}}},[n("v-card",{staticClass:"ma-2 pa-2 rounded-lg",attrs:{flat:"",light:""}},[n("v-img",{staticClass:"pa-2",staticStyle:{"background-color":"white"},attrs:{contain:"",alt:"Join Us Now",src:"/logo.png"}})],1),t._v(" "),n("v-list",{attrs:{nav:""}},[t._l(t.items,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.to,router:"","active-class":"#00ACEE",exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n          "+t._s(e.title)+" \n        ")])],1)],1)})),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$auth.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:d.a,VIcon:m.a,VImg:v.a,VList:f.a,VListItem:h.a,VListItemContent:w.a,VListItemIcon:_.a,VListItemTitle:w.c,VNavigationDrawer:k.a})},777:function(t,e,n){var content=n(891);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("5dc32bfe",content,!0,{sourceMap:!1})},890:function(t,e,n){"use strict";n(777)},891:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{z-index:3;padding-top:64px}.menu-item:after{min-height:0!important}",""]),t.exports=o}}]);