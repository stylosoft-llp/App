(window.webpackJsonp=window.webpackJsonp||[]).push([[111],{1068:function(t,e,n){"use strict";n.r(e);n(43),n(55);var o={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-format-list-checkbox",title:"Tickets",to:"/customer"},{icon:"mdi-comment-plus",title:"Raise Ticket",to:"/customer/newTicket"},{icon:"mdi-chat",title:"Messages",to:"/customer/chat"},{icon:"mdi-home",title:"Home",to:"/"}]}},computed:{superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}}},r=(n(897),n(27)),c=n(31),l=n.n(c),m=n(211),v=n(210),d=n(308),f=n(751),h=n(730),_=n(511),y=n(731),w=n(999),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{staticStyle:{"box-shadow":"2px 0 5px #00000055"},attrs:{left:"",width:"220",floating:"",value:t.value,"mini-variant":t.$vuetify.breakpoint.mdAndUp&&!t.value,light:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){t.$vuetify.breakpoint.smAndDown&&t.$emit("input",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-list-item",{staticStyle:{"background-color":"grey"},attrs:{dark:"",dense:""},on:{click:function(e){return t.$auth.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1),t._v(" "),n("v-card",{staticClass:"mx-2 mt-auto pa-2 rounded-lg",attrs:{flat:"",light:""}},[t.value&&t.$auth.user&&t.$auth.user.company&&t.$auth.user.company.logo_url?n("v-img",{staticClass:"pa-2",staticStyle:{"background-color":"white"},attrs:{contain:"",alt:"Join Us Now",src:t.$config.media_url+"/"+t.$auth.user.company.logo_url}}):t.value?n("div",[t.$auth.user.company?n("h3",{staticClass:"text-center primary--text"},[t._v(t._s(t.$auth.user.company.name))]):t._e()]):t._e()],1)]},proxy:!0}])},[n("v-list",{attrs:{nav:""}},t._l(t.items,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.to,router:"",exact:"","active-class":"activeItem"}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n          "+t._s(e.title)+"\n        ")])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:m.a,VIcon:v.a,VImg:d.a,VList:f.a,VListItem:h.a,VListItemContent:_.a,VListItemIcon:y.a,VListItemTitle:_.c,VNavigationDrawer:w.a})},780:function(t,e,n){var content=n(898);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("ab7fe670",content,!0,{sourceMap:!1})},897:function(t,e,n){"use strict";n(780)},898:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{z-index:3;padding-top:64px}.menu-item:after{min-height:0!important}.activeItem{background:var(--v-primary-base);box-shadow:0 10px 10px -5px var(--v-primary-base)}.activeItem div{color:#fff!important;font-weight:700}",""]),t.exports=o}}]);