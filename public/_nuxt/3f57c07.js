(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{1087:function(t,n,o){"use strict";o.r(n);var e=o(220),r=o(764),c=o(745),l=o(527),d=o(746),v=o(1016),f={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-home",title:"Home",to:"/"},{icon:"mdi-information",title:"About Us",to:"/about-us"},{icon:"mdi-contacts",title:"Contact Us",to:"/contact-us"}]}}},m=(o(914),o(26)),component=Object(m.a)(f,(function(){var t=this,n=t._self._c;return n(v.a,{attrs:{left:"",width:"200",value:t.value,floating:"",dark:"",color:"primary",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(n){return t.$emit("input",n)}}},[n(r.a,{attrs:{nav:""}},[t._l(t.items,(function(o,r){return n(c.a,{key:r,attrs:{to:o.to,router:"",exact:""}},[n(d.a,[n(e.a,[t._v(t._s(o.icon))])],1),t._v(" "),n(l.a,[n(l.c,[t._v("\n        "+t._s(o.title)+" \n      ")])],1)],1)})),t._v(" "),t.$auth.loggedIn?n(c.a,{on:{click:function(n){t.$auth.logout(),t.$router.push("/login")}}},[n(d.a,[n(e.a,[t._v("mdi-logout")])],1),t._v(" "),n(l.a,[n(l.c,[t._v("Logout")])],1)],1):n(c.a,{attrs:{to:"/login"}},[n(d.a,[n(e.a,[t._v("mdi-login")])],1),t._v(" "),n(l.a,[n(l.c,[t._v("Login")])],1)],1)],2)],1)}),[],!1,null,null,null);n.default=component.exports},795:function(t,n,o){var content=o(915);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("00c4fede",content,!0,{sourceMap:!1})},914:function(t,n,o){"use strict";o(795)},915:function(t,n,o){var e=o(8)((function(i){return i[1]}));e.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{padding-top:64px;z-index:3}.menu-item:after{min-height:0!important}",""]),e.locals={},t.exports=e}}]);