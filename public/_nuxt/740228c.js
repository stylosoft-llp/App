(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{1049:function(t,o,e){"use strict";e.r(o);e(54),e(67);var n={props:{value:{type:Boolean,default:!1}},data:function(){return{adminItems:[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/app#dashboard"},{icon:"mdi-account-group",title:"Users",to:"/app/users"},{icon:"mdi-hammer-wrench",title:"Services",to:"/app/services"},{icon:"mdi-chat",title:"Messages",to:"/app/chat"},{icon:"mdi-account-multiple",title:"Customer Data",to:"/app/customers"},{icon:"mdi-package-variant",title:"Products",to:"/app/products"},{icon:"mdi-home",title:"Home",to:"/"}],subAdminItems:[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/app#dashboard"},{icon:"mdi-hammer-wrench",title:"Services",to:"/app/services"},{icon:"mdi-format-list-checkbox",title:"My Tasks",to:"/app/tasks"},{icon:"mdi-chat",title:"Messages",to:"/app/chat"},{icon:"mdi-account-multiple",title:"Customer Data",to:"/app/customers"},{icon:"mdi-package-variant",title:"Products",to:"/app/products"},{icon:"mdi-home",title:"Home",to:"/"}]}},computed:{items:function(){var t,o,e=null===(t=this.$auth.user.company)||void 0===t||null===(o=t.pivot)||void 0===o?void 0:o.role;return"Admin"==e?this.adminItems:"Subadmin"==e?this.subAdminItems:void 0},superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}},methods:{addLogo:function(t){var o=this,e=new FormData;e.append("file",t.target.files[0]),this.$axios.post("/auth/logo",e).then((function(t){o.$nuxt.$auth.fetchUser()}))}}},r=(e(878),e(27)),c=e(31),l=e.n(c),d=e(488),m=e(210),v=e(209),h=e(306),f=e(729),w=e(710),y=e(504),k=e(711),x=e(984),component=Object(r.a)(n,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("v-navigation-drawer",{staticStyle:{"box-shadow":"2px 0 5px #00000055"},attrs:{left:"",width:"220",floating:"",value:t.value,"mini-variant":t.$vuetify.breakpoint.mdAndUp&&!t.value,light:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(o){t.$vuetify.breakpoint.smAndDown&&t.$emit("input",o)}},scopedSlots:t._u([{key:"append",fn:function(){return[e("v-list-item",{staticStyle:{"background-color":"var(--v-info-base)"},attrs:{dense:""},on:{click:function(o){return t.$auth.logout()}}},[e("v-list-item-icon",[e("v-icon",[t._v("mdi-logout")])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v("Logout")])],1)],1),t._v(" "),e("v-card",{staticClass:"mx-2 mt-auto pa-2 rounded-lg",attrs:{flat:"",light:""}},[t.value?e("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{contain:"",alt:"StyloDesk",src:"/logo.png"}}):e("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{alt:"StyloDesk",src:"/favicon.png"}})])]},proxy:!0}])},[e("v-card",{staticClass:"ma-2 pa-2 rounded-lg",attrs:{flat:"",light:""}},[e("div",[e("input",{ref:"logoInput",attrs:{hidden:"",type:"file"},on:{change:function(o){return t.addLogo(o)}}}),t._v(" "),t.$auth.user&&t.$auth.user.company&&t.$auth.user.company.logo_url?e("v-img",{staticClass:"pa-2",staticStyle:{"background-color":"white","max-height":"50px!important"},attrs:{contain:"",alt:"Join Us Now",src:t.$config.media_url+"/"+t.$auth.user.company.logo_url},on:{click:function(o){return t.$refs.logoInput.click()}}}):e("v-btn",{staticStyle:{border:"1px dashed black"},attrs:{block:"",outlined:""},on:{click:function(o){return t.$refs.logoInput.click()}}},[e("v-icon",[t._v("mdi-plus")]),t._v("Add Logo\n      ")],1)],1)]),t._v(" "),e("v-list",{attrs:{nav:""}},t._l(t.items,(function(o,n){return e("v-list-item",{key:n,attrs:{to:o.to,router:"","active-class":"activeItem"}},[e("v-list-item-icon",[e("v-icon",{attrs:{color:"primary"}},[t._v(t._s(o.icon))])],1),t._v(" "),e("v-list-item-content",[e("v-list-item-title",[t._v("\n          "+t._s(o.title)+"\n        ")])],1)],1)})),1)],1)}),[],!1,null,null,null);o.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VIcon:v.a,VImg:h.a,VList:f.a,VListItem:w.a,VListItemContent:y.a,VListItemIcon:k.a,VListItemTitle:y.c,VNavigationDrawer:x.a})},756:function(t,o,e){var content=e(879);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(10).default)("5af27ef8",content,!0,{sourceMap:!1})},878:function(t,o,e){"use strict";e(756)},879:function(t,o,e){var n=e(9)(!1);n.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{z-index:3;padding-top:64px}.menu-item:after{min-height:0!important}.activeItem{background:var(--v-primary-base);box-shadow:0 10px 10px -5px var(--v-primary-base)}.activeItem div,.activeItem i:before{color:#fff!important;font-weight:700}.v-navigation-drawer--mini-variant ::-webkit-scrollbar{display:none!important}.v-navigation-drawer--mini-variant div{-ms-overflow-style:none!important;scrollbar-width:none!important;overflow-y:scroll}",""]),t.exports=n}}]);