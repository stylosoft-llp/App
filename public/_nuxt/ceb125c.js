(window.webpackJsonp=window.webpackJsonp||[]).push([[112],{1087:function(t,o,e){"use strict";e.r(o);var n=e(219),r=e(218),c=e(323),l=e(764),m=e(745),d=e(527),v=e(746),f=e(1015),h=(e(32),e(42),e(53),{props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-format-list-checkbox",title:"Active Tasks",to:"/user/#"},{icon:"mdi-format-list-checks",title:"Completed Tasks",to:"/user/completed"},{icon:"mdi-card-plus",title:"New Ticket",to:"/user/newTicket"},{icon:"mdi-chat",title:"Messages",to:"/user/chat"},{icon:"mdi-home",title:"Home",to:"/"}]}},computed:{superAdmin:function(){return!!(this.$auth&&this.$auth.loggedIn&&this.$auth.user.role.includes("super"))}}}),k=(e(918),e(26)),component=Object(k.a)(h,(function(){var t=this,o=t._self._c;return o(f.a,{staticStyle:{"box-shadow":"2px 0 5px #00000055"},attrs:{left:"",width:"220",floating:"",value:t.value,"mini-variant":t.$vuetify.breakpoint.mdAndUp&&!t.value,light:"",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(o){t.$vuetify.breakpoint.smAndDown&&t.$emit("input",o)}},scopedSlots:t._u([{key:"append",fn:function(){return[o(m.a,{staticStyle:{"background-color":"var(--v-info-base)"},attrs:{dense:""},on:{click:function(o){return t.$auth.logout()}}},[o(v.a,[o(r.a,[t._v("mdi-logout")])],1),t._v(" "),o(d.a,[o(d.c,[t._v("Logout")])],1)],1),t._v(" "),o(n.a,{staticClass:"mx-2 mt-auto pa-2 rounded-lg",attrs:{flat:"",light:""}},[t.value?o("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{contain:"",alt:"StyloDesk",src:"/logo.png"}}):o("img",{staticStyle:{"background-color":"white","max-height":"50px!important",width:"100% !important"},attrs:{alt:"StyloDesk",src:"/favicon.png"}})])]},proxy:!0}])},[o(l.a,{attrs:{nav:""}},[t.$auth.user&&t.$auth.user.company&&t.$auth.user.company.logo_url?o(c.a,{staticClass:"pa-2 ma-1",staticStyle:{"background-color":"white","max-height":"50px!important"},attrs:{contain:"",alt:"Join Us Now",src:"".concat(t.$config.media_url,"/").concat(t.$auth.user.company.logo_url)},on:{click:function(o){return t.$refs.logoInput.click()}}}):t._e(),t._v(" "),t._l(t.items,(function(e,n){return o(m.a,{key:n,attrs:{to:e.to,router:"","active-class":"activeItem"}},[o(v.a,[o(r.a,[t._v(t._s(e.icon))])],1),t._v(" "),o(d.a,[o(d.c,[t._v("\n          "+t._s(e.title)+"\n        ")])],1)],1)}))],2)],1)}),[],!1,null,null,null);o.default=component.exports},797:function(t,o,e){var content=e(919);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(9).default)("47165fcc",content,!0,{sourceMap:!1})},918:function(t,o,e){"use strict";e(797)},919:function(t,o,e){var n=e(8)((function(i){return i[1]}));n.push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{padding-top:64px;z-index:3}.menu-item:after{min-height:0!important}.activeItem{background:var(--v-primary-base);box-shadow:0 10px 10px -5px var(--v-primary-base)}.activeItem div{color:#fff!important;font-weight:700}",""]),n.locals={},t.exports=n}}]);