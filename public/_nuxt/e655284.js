(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{1081:function(t,e,n){"use strict";n.r(e);var o=n(220),r=n(219),c=n(322),l=n(763),d=n(743),m=n(526),v=n(744),f=n(1014),h=(n(42),n(53),{props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/admin#dashboard"},{icon:"mdi-package-variant",title:"Products",to:"/admin/products"},{icon:"mdi-hammer-wrench",title:"Services",to:"/admin/services"},{icon:"mdi-format-list-checkbox",title:"Assigned Tasks",to:"/admin/tasks"},{icon:"mdi-account-group",title:"Users",to:"/admin/users"},{icon:"mdi-home",title:"Home",to:"/"}]}},computed:{superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}}}),_=(n(907),n(26)),component=Object(_.a)(h,(function(){var t=this,e=t._self._c;return e(f.a,{style:"background:linear-gradient(140deg,var(--v-primary-base),var(--v-secondary-base)) !important;",attrs:{left:"",width:"220",value:t.value,floating:"",dark:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){return t.$emit("input",e)}}},[e(o.a,{staticClass:"ma-2 pa-2 rounded-lg",attrs:{flat:"",light:""}},[e(c.a,{staticClass:"pa-2",staticStyle:{"background-color":"white"},attrs:{contain:"",alt:"Join Us Now",src:"/logo.png"}})],1),t._v(" "),e(l.a,{attrs:{nav:""}},[t._l(t.items,(function(n,o){return e(d.a,{key:o,attrs:{to:n.to,router:"","active-class":"#00ACEE",exact:""}},[e(v.a,[e(r.a,[t._v(t._s(n.icon))])],1),t._v(" "),e(m.a,[e(m.c,[t._v("\n          "+t._s(n.title)+" \n        ")])],1)],1)})),t._v(" "),e(d.a,{on:{click:function(e){return t.$auth.logout()}}},[e(v.a,[e(r.a,[t._v("mdi-logout")])],1),t._v(" "),e(m.a,[e(m.c,[t._v("Logout")])],1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports},791:function(t,e,n){var content=n(908);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("28594ef5",content,!0,{sourceMap:!1})},907:function(t,e,n){"use strict";n(791)},908:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{padding-top:64px;z-index:3}.menu-item:after{min-height:0!important}",""]),o.locals={},t.exports=o}}]);