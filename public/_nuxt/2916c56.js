(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1089:function(t,e,o){"use strict";o.r(e);var n=o(221),r=o(220),c=o(323),l=o(764),m=o(745),d=o(527),v=o(746),h=o(1016),f=(o(32),o(42),o(54),{props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-format-list-checkbox",title:"Active Tasks",to:"/user/#"},{icon:"mdi-format-list-checks",title:"Completed Tasks",to:"/user/completed"},{icon:"mdi-card-plus",title:"New Ticket",to:"/user/newTicket"},{icon:"mdi-chat",title:"Messages",to:"/user/chat"},{icon:"mdi-home",title:"Home",to:"/"}]}},computed:{superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}}}),k=(o(918),o(26)),component=Object(k.a)(f,(function(){var t=this,e=t._self._c;return e(h.a,{staticStyle:{"box-shadow":"2px 0 5px #00000055"},attrs:{left:"",width:"220",floating:"",value:t.value,"mini-variant":t.$vuetify.breakpoint.mdAndUp&&!t.value,light:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){t.$vuetify.breakpoint.smAndDown&&t.$emit("input",e)}},scopedSlots:t._u([{key:"append",fn:function(){return[e(m.a,{staticStyle:{"background-color":"var(--v-info-base)"},attrs:{dense:""},on:{click:function(e){return t.$auth.logout()}}},[e(v.a,[e(r.a,[t._v("mdi-logout")])],1),t._v(" "),e(d.a,[e(d.c,[t._v("Logout")])],1)],1),t._v(" "),e(n.a,{staticClass:"mx-2 mt-auto pa-2 rounded-lg",attrs:{flat:"",light:""}},[t.value?e("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{contain:"",alt:"StyloDesk",src:"/logo.png"}}):e("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{alt:"StyloDesk",src:"/favicon.png"}})])]},proxy:!0}])},[e(l.a,{attrs:{nav:""}},[t.$auth.user&&t.$auth.user.company&&t.$auth.user.company.logo_url?e(c.a,{staticClass:"pa-2 ma-1",staticStyle:{"background-color":"white","max-height":"50px!important"},attrs:{contain:"",alt:"Join Us Now",src:"".concat(t.$config.media_url,"/").concat(t.$auth.user.company.logo_url)},on:{click:function(e){return t.$refs.logoInput.click()}}}):t._e(),t._v(" "),t._l(t.items,(function(o,n){return e(m.a,{key:n,attrs:{to:o.to,router:"","active-class":"activeItem"}},[e(v.a,[e(r.a,[t._v(t._s(o.icon))])],1),t._v(" "),e(d.a,[e(d.c,[t._v("\n          "+t._s(o.title)+"\n        ")])],1)],1)}))],2)],1)}),[],!1,null,null,null);e.default=component.exports},797:function(t,e,o){var content=o(919);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(9).default)("6ee94ab8",content,!0,{sourceMap:!1})},918:function(t,e,o){"use strict";o(797)},919:function(t,e,o){var n=o(8)((function(i){return i[1]}));n.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{padding-top:64px;z-index:3}.menu-item:after{min-height:0!important}.activeItem{background:var(--v-primary-base);box-shadow:0 10px 10px -5px var(--v-primary-base)}.activeItem div{color:#fff!important;font-weight:700}",""]),n.locals={},t.exports=n}}]);