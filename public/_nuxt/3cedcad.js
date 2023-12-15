(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{206:function(t,e,n){"use strict";n.r(e);n(37),n(65);var o=n(14),r={props:["value","project"],data:function(){return{tab:"",errors:"",show1:!1,name:null,email:null,phone:null,password:null,loading:!1,emailRules:[function(t){return!!t||"E-mail is required"},function(t){return/.+@.+\..+/.test(t)||"E-mail must be valid"}],passwordRules:[function(t){return!!t||"Password is required"}]}},methods:{login:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$auth.loginWith("local",{data:{email:t.email,password:t.password}});case 4:t.$router.push("/staff"),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(1),t.errors=e.t0.response.data.error||e.t0.response.data.message||e.t0.response.data,t.loading=!1;case 11:case"end":return e.stop()}}),e,null,[[1,7]])})))()},register:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.errors=!1,t.loading=!0,n=t,e.prev=3,e.next=6,t.$axios.post("auth/signup",{name:n.name,email:n.email,phone:n.phone,password:n.password});case 6:return e.next=8,t.$auth.loginWith("local",{data:{email:n.email,password:n.password}});case 8:t.$router.push("/staff"),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(3),t.errors=e.t0.response.data.error||e.t0.response.data.message||e.t0.response.data,t.loading=!1;case 15:case"end":return e.stop()}}),e,null,[[3,11]])})))()}}},l=n(22),c=n(24),d=n.n(c),m=n(467),v=n(199),f=n(202),h=n(456),k=n(457),w=n(458),_=n(459),x=n(468),y=n(466),V=n(284),C=n(275),$=n(440),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{width:"unset",value:t.value},on:{input:function(e){return t.$emit("input",e)}}},[n("v-card",{staticClass:"pa-4",attrs:{width:"600"}},[n("v-container",["object"==typeof t.errors&&t.errors.length?n("div",t._l(t.errors,(function(e,o){return n("v-alert",{key:o,attrs:{type:"error"}},[t._v(t._s(e[0]))])})),1):t.errors?n("v-alert",{attrs:{type:"error"}},[t._v(t._s(t.errors))]):t._e(),t._v(" "),n("v-tabs",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tabs-slider",{attrs:{color:"blue"}}),t._v(" "),n("v-tab",[t._v("Login")]),t._v(" "),n("v-tab",[t._v("Register")])],1),t._v(" "),n("v-tabs-items",{model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[n("v-tab-item",{staticClass:"container"},[n("v-form",{ref:"form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[n("v-text-field",{attrs:{solo:"",label:"E-mail","prepend-inner-icon":"mdi-account-outline",dense:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{solo:"",dense:"",label:"Password","append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password","prepend-inner-icon":"mdi-lock-outline"},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-btn",{staticClass:"mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit",block:""}},[t._v("Login")]),t._v(" "),n("v-btn",{staticStyle:{"text-transform":"capitalize"},attrs:{color:"primary",to:"/forgotPassword",text:""}},[t._v("Forgot your Password?")])],1)],1),t._v(" "),n("v-tab-item",{staticClass:"container"},[n("v-form",{ref:"form",attrs:{method:"post","lazy-validation":!0},on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-account-outline",solo:"","validate-on-blur":"",dense:"",rules:[function(t){return!!t||"Full Name is Required"}],label:"Full Name *"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-email-outline",solo:"","validate-on-blur":"",dense:"",rules:t.emailRules,label:"Your E-mail *"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-lock-outline",solo:"","validate-on-blur":"",dense:"","append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password",label:"Password *",rules:t.passwordRules},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-phone-outline",rules:[function(t){return!!t||"Phone No. is Required"}],solo:"","validate-on-blur":"",hint:"Enter Phone No. without country code Eg. 8123456789",dense:"",counter:"",maxlength:"10",label:"Your Phone No. *"},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),t._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",block:"",loading:t.loading}},[t._v("Register Now")])],1)],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:m.a,VBtn:v.a,VCard:f.a,VContainer:h.a,VDialog:k.a,VForm:w.a,VTab:_.a,VTabItem:x.a,VTabs:y.a,VTabsItems:V.a,VTabsSlider:C.a,VTextField:$.a})},251:function(t,e,n){var content=n(317);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("6ad9ee04",content,!0,{sourceMap:!1})},253:function(t,e,n){var content=n(325);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("23eaab49",content,!0,{sourceMap:!1})},260:function(t,e,n){var content=n(354);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("2dac00bf",content,!0,{sourceMap:!1})},261:function(t,e,n){var content=n(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("4c5c7218",content,!0,{sourceMap:!1})},262:function(t,e,n){var content=n(394);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("4d04581f",content,!0,{sourceMap:!1})},263:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("734c850e",content,!0,{sourceMap:!1})},278:function(t,e,n){"use strict";n(15);var o=n(206),r={data:function(){return{icons:[{name:"mdi-facebook",link:"https://www.facebook.com/ownearweb"},{name:"mdi-twitter",link:"https://twitter.com/Ownearweb"},{name:"mdi-linkedin",link:"https://www.linkedin.com/company/ownearweb"},{name:"mdi-instagram",link:"https://www.instagram.com/ownearweb/"}]}}},l=(n(385),n(22)),c=n(24),d=n.n(c),m=n(199),v=n(202),f=n(137),h=n(460),k=n(456),w=n(446),_=n(461),x=n(201),y=n(462),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"justify-center pl-0 pr-0",staticStyle:{"border-top":"5px solid #00A498"},attrs:{dark:"",padless:"",inset:""}},[n("v-card",{staticClass:"white--text text-center",staticStyle:{width:"100%"},attrs:{flat:"",color:"background darken-1"}},[n("v-card-text",t._l(t.icons,(function(e){return n("v-btn",{key:e.name,staticClass:"mx-2 white--text",attrs:{href:e.link,target:"_blank",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.name))])],1)})),1),t._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-container",{staticClass:"text-justify"},[n("h1",[t._v("🦅 AQUILA")]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"body-1"},[t._v("The Golden Eagle Project is Second Hustle Sponsored by Spotverge, developing Smart Cloud Automation and Video Streaming Platform.")]),t._v(" "),n("p",{staticClass:"body-1"},[t._v("Thank you for using our app!")])])],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3",sm:"6"}},[n("v-container",{staticClass:"text-justify"},[n("h3",{staticClass:"title"},[t._v("Quick Links")]),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"#"}},[t._v("Search")]),n("br"),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"/register"}},[t._v("Register")]),n("br"),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"/login"}},[t._v("Login")]),n("br"),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"#"}},[t._v("Link 1")]),n("br"),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"#"}},[t._v("Link 2")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3",sm:"6"}},[n("v-container",{staticClass:"text-justify"},[n("h3",{staticClass:"title"},[t._v("Know More")]),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"#"}},[t._v("Terms & Conditions")]),n("br"),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"#"}},[t._v("Privacy Policy")]),n("br"),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"#"}},[t._v("Refund Policy")]),n("br"),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"#"}},[t._v("Contact us")]),n("br"),t._v(" "),n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:"#"}},[t._v("About us")])],1)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"black--background white--text"},[t._v("©\n        "+t._s((new Date).getFullYear())+" — ✨ "),n("strong",[t._v("My Company | All Rights Reserved!")])])],1)],1)}),[],!1,null,null,null),footer=component.exports;d()(component,{VBtn:m.a,VCard:v.a,VCardText:f.c,VCol:h.a,VContainer:k.a,VDivider:w.a,VFooter:_.a,VIcon:x.a,VRow:y.a});var V={name:"landingPage",data:function(){return{location:"",searchterm:"",drawer:null,login:!1,more:!1,menus:[{name:"Product",link:"/",icon:"mdi-briefcase-outline"},{name:"Pricing",link:"/pricing",icon:"mdi-account-tie-outline"}]}},created:function(){this.drawer=!!this.$vuetify.breakpoint.mdAndUp,this.$route.query.auth&&(this.login=!0)},methods:{},watch:{location:function(t){this.$store.commit("add",t),localStorage.setItem("location",t)}},components:{adminNavDrawer:function(){return Promise.resolve().then(n.bind(null,283))},adminBottomNav:function(){return n.e(2).then(n.bind(null,567))},Auth:o.default,Footer:footer},computed:{locations:function(){return this.$store.state.locations}}},C=(n(393),n(453)),$=n(454),S=Object(l.a)(V,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{staticStyle:{background:"url('/background.svg')","background-size":"cover","background-attachment":"fixed","background-position":"center center"}},[n("nuxt")],1),t._v(" "),n("auth",{model:{value:t.login,callback:function(e){t.login=e},expression:"login"}})],1)}),[],!1,null,null,null);e.a=S.exports;d()(S,{Auth:n(206).default}),d()(S,{VApp:C.a,VMain:$.a})},279:function(t,e,n){"use strict";n(15),n(21),n(97);var o={name:"adminDesktop",middleware:["isAdmin"],data:function(){return{location:"",searchterm:"",msgNotification:{},msgSnack:!1,drawer:null,more:!1,moreItems:[{name:"Jobs",link:"/business/jobs",icon:"mdi-briefcase-outline"},{name:"Freelancer",link:"/freelancer",icon:"mdi-account-tie-outline"},{name:"Close",link:"",icon:"mdi-close"}]}},created:function(){this.drawer=!!this.$vuetify.breakpoint.mdAndUp},methods:{},mounted:function(){var t=this;this.$echo.channel("chat").listen("MessageCreated",(function(e){var n={name:e.message.user_name,message:e.message.message};null===t.$nuxt.$route.path.match(/forum/i)?(new Audio("/message.mp3").play(),t.msgSnack=!0,t.msgNotification=n):t.$nuxt.$emit("new-message",e)}))},watch:{location:function(t){this.$store.commit("add",t),localStorage.setItem("location",t)}},components:{adminNavDrawer:function(){return n.e(21).then(n.bind(null,578))}},computed:{locations:function(){return this.$store.state.locations}}},r=(n(324),n(22)),l=n(24),c=n.n(l),d=n(453),m=n(199),v=n(454),f=n(455),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("nuxt")],1),t._v(" "),n("adminNavDrawer",{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),t._v(" "),n("v-snackbar",{model:{value:t.msgSnack,callback:function(e){t.msgSnack=e},expression:"msgSnack"}},[t._v("\n      "+t._s(t.msgNotification.name)),n("br"),t._v("\n      "+t._s(t.msgNotification.message)+"\n      "),n("v-btn",{attrs:{"x-small":"",color:"error"},on:{click:function(e){t.msgSnack=!1}}},[t._v("\n        close\n      ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;c()(component,{VApp:d.a,VBtn:m.a,VMain:v.a,VSnackbar:f.a})},280:function(t,e,n){"use strict";n(15),n(65);var o=n(14),r={components:{desktopView:function(){return Promise.resolve().then(n.bind(null,281))},mobileView:function(){return Promise.resolve().then(n.bind(null,282))}},data:function(){return{update:!1}},methods:{checkPWAUpdate:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.$workbox;case 2:(n=e.sent)&&n.addEventListener("installed",(function(e){console.log("installed",e),e.isUpdate&&(t.update=!0,console.log("update needed"))}));case 4:case"end":return e.stop()}}),e)})))()},reloadWindow:function(){window.location.reload(!0)}},computed:{currentComponent:function(){return this.$vuetify.breakpoint.mdAndUp?"desktopView":"mobileView"}}},l=n(22),c=n(24),d=n.n(c),m=n(453),v=n(199),f=n(455),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n(t.currentComponent,{tag:"component"}),t._v(" "),n("v-snackbar",{model:{value:t.update,callback:function(e){t.update=e},expression:"update"}},[t._v("\n    New Update Available\n    "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.reloadWindow()}}},[t._v("Update Now")])],1),t._v(" "),n("snackbar-global")],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{SnackbarGlobal:n(436).default}),d()(component,{VApp:m.a,VBtn:v.a,VSnackbar:f.a})},281:function(t,e,n){"use strict";n.r(e);n(15),n(21),n(97);var o={name:"desktopView",data:function(){return{msgSnack:!1,msgNotification:{},location:"",searchterm:"",drawer:null,more:!1,moreItems:[{name:"Jobs",link:"/business/jobs",icon:"mdi-briefcase-outline"},{name:"Freelancer",link:"/freelancer",icon:"mdi-account-tie-outline"},{name:"Close",link:"",icon:"mdi-close"}]}},created:function(){this.drawer=!!this.$vuetify.breakpoint.mdAndUp},mounted:function(){var t=this;this.$echo.channel("chat").listen("MessageCreated",(function(e){var n={name:e.message.user_name,message:e.message.message};null===t.$nuxt.$route.path.match(/forum/i)?(new Audio("/message.mp3").play(),t.msgSnack=!0,t.msgNotification=n):t.$nuxt.$emit("new-message",e)}))},methods:{},watch:{location:function(t){this.$store.commit("add",t),localStorage.setItem("location",t)}},components:{navDrawer:function(){return Promise.resolve().then(n.bind(null,283))}},computed:{locations:function(){return this.$store.state.locations}}},r=(n(353),n(22)),l=n(24),c=n.n(l),d=n(453),m=n(199),v=n(454),f=n(455),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("nuxt")],1),t._v(" "),n("v-snackbar",{model:{value:t.msgSnack,callback:function(e){t.msgSnack=e},expression:"msgSnack"}},[t._v("\n      "+t._s(t.msgNotification.name)),n("br"),t._v("\n      "+t._s(t.msgNotification.message)+"\n      "),n("v-btn",{attrs:{"x-small":"",color:"error"},on:{click:function(e){t.msgSnack=!1}}},[t._v(" close ")])],1),t._v(" "),n("navDrawer",{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VApp:d.a,VBtn:m.a,VMain:v.a,VSnackbar:f.a})},282:function(t,e,n){"use strict";n.r(e);n(15);var o={name:"mobileView",data:function(){return{drawer:!1,title:"Ownear.dev"}},components:{bottomNav:function(){return n.e(2).then(n.bind(null,567))},navDrawer:n(283).default,userMenu:function(){return n.e(20).then(n.bind(null,579))}}},r=n(22),l=n(24),c=n.n(l),d=n(453),m=n(464),v=n(199),f=n(201),h=n(454),k=n(465),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{"hide-on-scroll":"","elevate-on-scroll":"",height:"70",app:"",color:"white"}},[n("v-btn",{attrs:{color:"black",icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-sort-variant")])],1),t._v(" "),n("nuxt-link",{attrs:{to:"/"}},[n("h4",[t._v("LOGO")])]),t._v(" "),n("v-spacer"),t._v(" "),this.$auth.loggedIn?n("userMenu"):n("v-btn",{attrs:{icon:"",to:"/login"}},[n("v-icon",[t._v("mdi-login")])],1)],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("navDrawer",{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}})],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VApp:d.a,VAppBar:m.a,VBtn:v.a,VIcon:f.a,VMain:h.a,VSpacer:k.a})},283:function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-format-list-checks",title:"Assigned",to:"/staff#assigned"},{icon:"mdi-comment-multiple-outline",title:"Team Forum",to:"/staff/forum"},{icon:"mdi-view-list",title:"Completed",to:"/staff/completed"}]}}},r=(n(395),n(22)),l=n(24),c=n.n(l),d=n(201),m=n(165),v=n(203),f=n(125),h=n(92),k=n(107),w=n(463),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{left:"",width:"200",value:t.value,floating:"",dark:"",color:"primary",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){return t.$emit("input",e)}}},[n("v-list",{attrs:{nav:""}},[n("v-list-item",[n("nuxt-link",{staticClass:"my-1 white--text",staticStyle:{"text-decoration":"unset !important"},attrs:{to:"/"}},[n("v-list-item",{staticStyle:{"border-radius":"10px",padding:"5px"}},[n("v-img",{attrs:{contain:"",alt:"Join Us Now","max-width":"160",src:"/excella-logo.png"}})],1)],1)],1),t._v(" "),t._l(t.items,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n        "+t._s(e.title)+" \n      ")])],1)],1)})),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$auth.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a,VImg:m.a,VList:v.a,VListItem:f.a,VListItemContent:h.a,VListItemIcon:k.a,VListItemTitle:h.b,VNavigationDrawer:w.a})},291:function(t,e,n){n(292),t.exports=n(293)},306:function(t,e,n){"use strict";n.r(e);n(23),n(59),n(39);e.default=function(t){var e=t.$auth,n=t.redirect;if(!e.loggedIn)return n("/login");var o=e.user.role;return["admin","super"].some((function(t){return o.includes(t)}))?void 0:n("/login")}},316:function(t,e,n){"use strict";n(251)},317:function(t,e,n){(e=n(6)(!1)).push([t.i,"h1[data-v-c6ee6458]{font-size:20px}",""]),t.exports=e},322:function(t,e,n){var content=n(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("aaec6fdc",content,!0,{sourceMap:!1})},323:function(t,e,n){(e=n(6)(!1)).push([t.i,".spl-btn{box-shadow:0 20px 20px -10px var(--v-primary-base)!important}html{scroll-behavior:smooth!important}.theme--dark.v-application,.theme--dark .v-item-group,.theme--dark .v-tabs-items{background-color:var(--v-background-base)!important}.theme--dark .v-btn--has-bg,.theme--dark .v-card{background-color:var(--v-info-base)!important}.blue--background{background-color:#00acee!important}",""]),t.exports=e},324:function(t,e,n){"use strict";n(253)},325:function(t,e,n){(e=n(6)(!1)).push([t.i,".v-text-field.shrink{max-width:200px!important}",""]),t.exports=e},353:function(t,e,n){"use strict";n(260)},354:function(t,e,n){(e=n(6)(!1)).push([t.i,".v-text-field.shrink{max-width:200px!important}",""]),t.exports=e},385:function(t,e,n){"use strict";n(261)},386:function(t,e,n){(e=n(6)(!1)).push([t.i,".footerLink,.footerLink:link{color:#00acee!important;text-decoration:none}",""]),t.exports=e},393:function(t,e,n){"use strict";n(262)},394:function(t,e,n){(e=n(6)(!1)).push([t.i,".v-text-field.shrink{max-width:200px!important}",""]),t.exports=e},395:function(t,e,n){"use strict";n(263)},396:function(t,e,n){(e=n(6)(!1)).push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{z-index:3;padding-top:64px}.menu-item:after{min-height:0!important}",""]),t.exports=e},417:function(t,e){},436:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{snackbar:!1,snackColor:"",message:"",icon:""}},mounted:function(){var t=this;this.$nuxt.$on("snack",(function(e){t.snackColor=e.snackColor,t.message=e.message,t.icon=e.icon,t.snackbar=!0,console.log(e)}))}},r=n(22),l=n(24),c=n.n(l),d=n(201),m=n(455),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{bottom:"",right:"",transition:"slide-x-reverse-transition",color:t.snackColor},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("v-icon",[t._v(t._s(t.icon))]),t._v(" \n\t"),n("span",{staticClass:"font-weight-medium"},[t._v(t._s(t.message))])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:d.a,VSnackbar:m.a})},90:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(316),n(22)),l=n(24),c=n.n(l),d=n(453),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("div",{staticStyle:{margin:"auto","align-text":"center"},attrs:{align:"center"}},[n("h1",{staticClass:"display-4 font-weight-black grey--text"},[t._v("😕 404")]),t._v(" "),n("p",{staticClass:"display-1"},[t._v("\n      Looks like You're Lost, Let's go "),n("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1)]):n("div",{staticStyle:{margin:"auto","align-text":"center"},attrs:{align:"center"}},[n("h1",{staticClass:"display-4 font-weight-black grey--text"},[t._v("🤕 Oh No!")]),t._v(" "),n("p",{staticClass:"display-1"},[t._v("\n      Something Went Wrong! But Don't Worry, Help's on the way!\n    ")]),t._v(" "),n("p",[n("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1)])])}),[],!1,null,"c6ee6458",null);e.a=component.exports;c()(component,{VApp:d.a})}},[[291,18,4,19]]]);