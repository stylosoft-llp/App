(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{1053:function(t,e,n){"use strict";n.r(e);n(54),n(67);var o={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/superadmin#dashboard"},{icon:"mdi-account-group",title:"Customers",to:"/superadmin/users"},{icon:"mdi-cash-multiple",title:"Revenue",to:"/superadmin/revenue"},{icon:"mdi-account-multiple",title:"Service Desk",to:"/superadmin/desk"},{icon:"mdi-email-newsletter",title:"App Queries",to:"/superadmin/queries"},{icon:"mdi-shape-plus",title:"Packages",to:"/superadmin/packages"},{icon:"mdi-home",title:"Home",to:"/"}]}},computed:{superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}}},r=(n(884),n(27)),l=n(31),c=n.n(l),m=n(210),d=n(209),v=n(729),f=n(710),h=n(504),w=n(711),y=n(984),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticStyle:{"box-shadow":"2px 0 5px #00000055"},attrs:{left:"",width:"220",floating:"",value:t.value,"mini-variant":t.$vuetify.breakpoint.mdAndUp&&!t.value,light:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){t.$vuetify.breakpoint.smAndDown&&t.$emit("input",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-list-item",{staticStyle:{"background-color":"var(--v-info-base)"},attrs:{dense:""},on:{click:function(e){return t.$auth.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)]},proxy:!0}])},[n("v-card",{staticClass:"ma-2 pa-2 rounded-lg",attrs:{flat:"",light:""}},[t.value?n("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{contain:"",alt:"StyloDesk",src:"/logo.png"}}):n("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{alt:"StyloDesk",src:"/favicon.png"}})]),t._v(" "),n("v-list",{attrs:{nav:""}},t._l(t.items,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.to,router:"","active-class":"activeItem"}},[n("v-list-item-icon",[n("v-icon",{attrs:{color:"secondary"}},[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n          "+t._s(e.title)+"\n        ")])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:m.a,VIcon:d.a,VList:v.a,VListItem:f.a,VListItemContent:h.a,VListItemIcon:w.a,VListItemTitle:h.c,VNavigationDrawer:y.a})},759:function(t,e,n){var content=n(885);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("ca69c778",content,!0,{sourceMap:!1})},884:function(t,e,n){"use strict";n(759)},885:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{z-index:3;padding-top:64px}.menu-item:after{min-height:0!important}.activeItem{background:var(--v-primary-base);box-shadow:0 10px 10px -5px var(--v-primary-base)}.activeItem div,.activeItem i:before{color:#fff!important;font-weight:700}.v-navigation-drawer--mini-variant ::-webkit-scrollbar{display:none!important}.v-navigation-drawer--mini-variant div{-ms-overflow-style:none!important;scrollbar-width:none!important;overflow-y:scroll}",""]),t.exports=o}}]);