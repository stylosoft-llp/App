(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{1058:function(t,e,o){"use strict";o.r(e);o(54),o(69);var n={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-format-list-checkbox",title:"Active Tasks",to:"/user/"},{icon:"mdi-format-list-checks",title:"Completed Tasks",to:"/user/completed"},{icon:"mdi-chat",title:"Messages",to:"/user/chat"},{icon:"mdi-home",title:"Home",to:"/"}]}},computed:{superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}}},r=(o(890),o(27)),c=o(31),l=o.n(c),m=o(211),v=o(210),d=o(307),h=o(733),f=o(714),k=o(508),w=o(715),x=o(988),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-navigation-drawer",{staticStyle:{"box-shadow":"2px 0 5px #00000055"},attrs:{left:"",width:"220",floating:"",value:t.value,"mini-variant":t.$vuetify.breakpoint.mdAndUp&&!t.value,light:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){t.$vuetify.breakpoint.smAndDown&&t.$emit("input",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[o("v-list-item",{staticStyle:{"background-color":"var(--v-info-base)"},attrs:{dense:""},on:{click:function(e){return t.$auth.logout()}}},[o("v-list-item-icon",[o("v-icon",[t._v("mdi-logout")])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("Logout")])],1)],1),t._v(" "),o("v-card",{staticClass:"mx-2 mt-auto pa-2 rounded-lg",attrs:{flat:"",light:""}},[t.value?o("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{contain:"",alt:"StyloDesk",src:"/logo.png"}}):o("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{alt:"StyloDesk",src:"/favicon.png"}})])]},proxy:!0}])},[o("v-list",{attrs:{nav:""}},[t.$auth.user&&t.$auth.user.company&&t.$auth.user.company.logo_url?o("v-img",{staticClass:"pa-2 ma-1",staticStyle:{"background-color":"white","max-height":"50px!important"},attrs:{contain:"",alt:"Join Us Now",src:t.$config.media_url+"/"+t.$auth.user.company.logo_url},on:{click:function(e){return t.$refs.logoInput.click()}}}):t._e(),t._v(" "),t._l(t.items,(function(e,n){return o("v-list-item",{key:n,attrs:{to:e.to,router:"","active-class":"activeItem"}},[o("v-list-item-icon",[o("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),o("v-list-item-content",[o("v-list-item-title",[t._v("\n          "+t._s(e.title)+"\n        ")])],1)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCard:m.a,VIcon:v.a,VImg:d.a,VList:h.a,VListItem:f.a,VListItemContent:k.a,VListItemIcon:w.a,VListItemTitle:k.c,VNavigationDrawer:x.a})},764:function(t,e,o){var content=o(891);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(10).default)("7bdb1c50",content,!0,{sourceMap:!1})},890:function(t,e,o){"use strict";o(764)},891:function(t,e,o){var n=o(9)(!1);n.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{z-index:3;padding-top:64px}.menu-item:after{min-height:0!important}.activeItem{background:var(--v-primary-base);box-shadow:0 10px 10px -5px var(--v-primary-base)}.activeItem div{color:#fff!important;font-weight:700}",""]),t.exports=n}}]);