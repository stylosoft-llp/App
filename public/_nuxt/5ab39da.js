(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{502:function(t,e,n){var content=n(555);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("6f230a08",content,!0,{sourceMap:!1})},554:function(t,e,n){"use strict";n(502)},555:function(t,e,n){(e=n(6)(!1)).push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{z-index:3;padding-top:64px}.menu-item:after{min-height:0!important}",""]),t.exports=e},582:function(t,e,n){"use strict";n.r(e);n(24),n(39);var o={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/admin#dashboard"},{icon:"mdi-asterisk",title:"New Leads",to:"/admin/new"},{icon:"mdi-format-list-checks",title:"Assigned",to:"/admin/assigned"},{icon:"mdi-chat",title:"Team Forum",to:"/admin/forum"},{icon:"mdi-view-list",title:"Prospects",to:"/admin/prospects"}],superItems:[{icon:"mdi-account-multiple",title:"Employees",to:"/admin/employees"},{icon:"mdi-delete",title:"Trash",to:"/admin/trash"}]}},computed:{superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}}},r=(n(554),n(22)),l=n(23),c=n.n(l),m=n(201),d=n(165),v=n(203),f=n(125),h=n(92),w=n(107),_=n(463),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{style:"background:"+(t.superAdmin?"linear-gradient(140deg, #008e95, #003d46)":"linear-gradient(140deg,#00ACEE,#0066ff)")+"!important;",attrs:{left:"",width:"200",value:t.value,floating:"",dark:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){return t.$emit("input",e)}}},[n("v-list",{attrs:{nav:""}},[n("v-list-item",{staticStyle:{"border-radius":"10px",padding:"10px"}},[n("v-img",{attrs:{contain:"",alt:"Join Us Now","max-width":"160",src:"/excella-logo.png"}})],1),t._v(" "),t._l(t.items,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.to,router:"","active-class":"#00ACEE",exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n        "+t._s(e.title)+" \n      ")])],1)],1)})),t._v(" "),t._l(t.superItems,(function(e,o){return n("v-list-item",{directives:[{name:"show",rawName:"v-show",value:t.superAdmin,expression:"superAdmin"}],key:o+10,attrs:{to:e.to,router:"","active-class":"#00ACEE",exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n        "+t._s(e.title)+" \n      ")])],1)],1)})),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$auth.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:m.a,VImg:d.a,VList:v.a,VListItem:f.a,VListItemContent:h.a,VListItemIcon:w.a,VListItemTitle:h.b,VNavigationDrawer:_.a})}}]);