(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{236:function(t,e,n){var content=n(304);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("6ad9ee04",content,!0,{sourceMap:!1})},238:function(t,e,n){var content=n(312);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("23eaab49",content,!0,{sourceMap:!1})},245:function(t,e,n){var content=n(342);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("4c5c7218",content,!0,{sourceMap:!1})},246:function(t,e,n){var content=n(357);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("2dac00bf",content,!0,{sourceMap:!1})},248:function(t,e,n){var content=n(367);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("4d04581f",content,!0,{sourceMap:!1})},249:function(t,e,n){var content=n(369);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("734c850e",content,!0,{sourceMap:!1})},266:function(t,e,n){"use strict";n(13);var o={name:"adminDesktop",middleware:["isAdmin"],data:function(){return{location:"",searchterm:"",msgNotification:{},msgSnack:!1,drawer:null,more:!1,moreItems:[{name:"Jobs",link:"/business/jobs",icon:"mdi-briefcase-outline"},{name:"Freelancer",link:"/freelancer",icon:"mdi-account-tie-outline"},{name:"Close",link:"",icon:"mdi-close"}]}},created:function(){this.drawer=!!this.$vuetify.breakpoint.mdAndUp},methods:{},mounted:function(){},watch:{location:function(t){this.$store.commit("add",t),localStorage.setItem("location",t)}},components:{adminNavDrawer:function(){return n.e(25).then(n.bind(null,556))}},computed:{locations:function(){return this.$store.state.locations}}},r=(n(311),n(23)),c=n(21),l=n.n(c),d=n(413),m=n(405),v=n(414),f=n(415),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",[n("nuxt")],1),t._v(" "),n("adminNavDrawer",{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}}),t._v(" "),n("v-snackbar",{model:{value:t.msgSnack,callback:function(e){t.msgSnack=e},expression:"msgSnack"}},[t._v("\n      "+t._s(t.msgNotification.name)),n("br"),t._v("\n      "+t._s(t.msgNotification.message)+"\n      "),n("v-btn",{attrs:{"x-small":"",color:"error"},on:{click:function(e){t.msgSnack=!1}}},[t._v("\n        close\n      ")])],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VBtn:m.a,VMain:v.a,VSnackbar:f.a})},267:function(t,e,n){"use strict";n(13),n(62);var o=n(11),r={components:{desktopView:function(){return Promise.resolve().then(n.bind(null,268))},mobileView:function(){return Promise.resolve().then(n.bind(null,270))}},data:function(){return{update:!1}},methods:{checkPWAUpdate:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.$workbox;case 2:(n=e.sent)&&n.addEventListener("installed",(function(e){console.log("installed",e),e.isUpdate&&(t.update=!0,console.log("update needed"))}));case 4:case"end":return e.stop()}}),e)})))()},reloadWindow:function(){window.location.reload(!0)}},computed:{currentComponent:function(){return this.$vuetify.breakpoint.mdAndUp?"desktopView":"mobileView"}}},c=n(23),l=n(21),d=n.n(l),m=n(413),v=n(405),f=n(415),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n(t.currentComponent,{tag:"component"}),t._v(" "),n("v-snackbar",{model:{value:t.update,callback:function(e){t.update=e},expression:"update"}},[t._v("\n    New Update Available\n    "),n("v-btn",{attrs:{text:"",color:"primary"},on:{click:function(e){return t.reloadWindow()}}},[t._v("Update Now")])],1),t._v(" "),n("snackbar-global")],1)}),[],!1,null,null,null);e.a=component.exports;d()(component,{SnackbarGlobal:n(404).default}),d()(component,{VApp:m.a,VBtn:v.a,VSnackbar:f.a})},268:function(t,e,n){"use strict";n.r(e);var o={name:"desktopView",data:function(){return{msgSnack:!1,msgNotification:{},location:"",searchterm:"",more:!1,items:[{name:"Home",link:"/"},{name:"About Us",link:"/about-us"},{name:"Services",link:"/services"},{name:"We Send",link:"/we-send"}]}},created:function(){},mounted:function(){},methods:{},watch:{location:function(t){this.$store.commit("add",t),localStorage.setItem("location",t)}},components:{Footer:n(75).default},computed:{locations:function(){return this.$store.state.locations}}},r=(n(356),n(23)),c=n(21),l=n.n(c),d=n(413),m=n(422),v=n(405),f=n(407),k=n(414),h=n(415),_=n(420),x=n(57),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{staticClass:"appbar",attrs:{light:"",color:"white",height:"90"}},[n("nuxt-link",{attrs:{to:"/"}},[n("img",{staticClass:"ml-4",attrs:{width:"220px",contain:"",src:"/firststar.png"}})]),t._v(" "),n("v-spacer"),t._v(" "),n("div",{staticClass:"d-flex flex-row"},[n("a",{staticClass:"mx-4",attrs:{href:"tel:+919391689442"}},[n("p",{staticClass:"my-0 body-2"},[t._v("📞 Call Us Now")]),t._v(" "),n("h3",{staticClass:"my-0 primary--text"},[t._v("(+91) 939 168 9442")])]),t._v(" "),n("a",{staticClass:"mx-4",attrs:{href:"mailto:firststar82@gmail.com"}},[n("p",{staticClass:"my-0 body-2"},[t._v("📩 E-Mail Us Now")]),t._v(" "),n("h3",{staticClass:"my-0 primary--text"},[t._v("firststar82@gmail.com")])])]),t._v(" "),n("v-divider",{staticClass:"mx-2",attrs:{vertical:""}}),t._v(" "),n("v-btn",{staticClass:"font-weight-black",attrs:{depressed:"",to:"/track-ship",large:"",color:"secondary"}},[t._v("\n        Track Shipment\n      ")])],1),t._v(" "),n("v-toolbar",{staticClass:"mx-8 toolbar rounded-lg",attrs:{dense:"",absolute:"",elevation:4}},[t._l(t.items,(function(e,o){return n("v-btn",{key:o,staticClass:"font-weight-black",attrs:{text:"","active-class":"secondary--text",color:"primary",to:e.link}},[t._v("\n        "+t._s(e.name)+"\n      ")])})),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"font-weight-black",attrs:{dense:"",outlined:"",color:"primary",dark:"","active-class":"secondary--text",to:"/contact-us"}},[t._v("Contact Us")])],2),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("Footer"),t._v(" "),n("v-snackbar",{model:{value:t.msgSnack,callback:function(e){t.msgSnack=e},expression:"msgSnack"}},[t._v("\n      "+t._s(t.msgNotification.name)),n("br"),t._v("\n      "+t._s(t.msgNotification.message)+"\n      "),n("v-btn",{attrs:{"x-small":"",color:"error"},on:{click:function(e){t.msgSnack=!1}}},[t._v(" close ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Footer:n(75).default}),l()(component,{VApp:d.a,VAppBar:m.a,VBtn:v.a,VDivider:f.a,VMain:k.a,VSnackbar:h.a,VSpacer:_.a,VToolbar:x.a})},269:function(t,e,n){"use strict";n(13);var o={name:"landingPage",data:function(){return{location:"",searchterm:"",drawer:null,login:!1,more:!1,menus:[{name:"Product",link:"/",icon:"mdi-briefcase-outline"},{name:"Pricing",link:"/pricing",icon:"mdi-account-tie-outline"}]}},created:function(){this.drawer=!!this.$vuetify.breakpoint.mdAndUp,this.$route.query.auth&&(this.login=!0)},methods:{},watch:{location:function(t){this.$store.commit("add",t),localStorage.setItem("location",t)}},components:{adminNavDrawer:function(){return Promise.resolve().then(n.bind(null,271))},Footer:n(75).default},computed:{locations:function(){return this.$store.state.locations}}},r=(n(366),n(23)),c=n(21),l=n.n(c),d=n(413),m=n(414),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-main",{staticStyle:{background:"url('/background.svg')","background-size":"cover","background-attachment":"fixed","background-position":"center center"}},[n("nuxt")],1),t._v(" "),n("auth",{model:{value:t.login,callback:function(e){t.login=e},expression:"login"}})],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:d.a,VMain:m.a})},270:function(t,e,n){"use strict";n.r(e);var o=n(271),footer=n(75),r={name:"mobileView",data:function(){return{drawer:!1,title:"Ownear.dev"}},components:{navDrawer:o.default,Footer:footer.default}},c=n(23),l=n(21),d=n.n(l),m=n(413),v=n(422),f=n(405),k=n(189),h=n(414),_=n(420),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{"hide-on-scroll":"","elevate-on-scroll":"",height:"80",app:"",color:"white"}},[n("a",{attrs:{href:this.$config.base_url}},[n("img",{staticClass:"ml-4",attrs:{width:"220px",contain:"",src:"/firststar.png"}})]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"black",icon:""},on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("nuxt")],1),t._v(" "),n("Footer"),t._v(" "),n("navDrawer",{model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}})],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{Footer:n(75).default}),d()(component,{VApp:m.a,VAppBar:v.a,VBtn:f.a,VIcon:k.a,VMain:h.a,VSpacer:_.a})},271:function(t,e,n){"use strict";n.r(e);var o={props:{value:{type:Boolean,default:!1}},data:function(){return{items:[{icon:"mdi-home",title:"Home",to:"/"},{icon:"mdi-information",title:"About Us",to:"/about-us"},{icon:"mdi-airplane",title:"Services",to:"/services"},{icon:"mdi-package-variant",title:"We Send",to:"/we-send"},{icon:"mdi-contacts",title:"Contact Us",to:"/contact-us"}]}}},r=(n(368),n(23)),c=n(21),l=n.n(c),d=n(189),m=n(191),v=n(113),f=n(78),k=n(95),h=n(421),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-navigation-drawer",{attrs:{left:"",width:"200",value:t.value,floating:"",dark:"",color:"primary",app:"",permanent:t.$vuetify.breakpoint.mdAndUp},on:{input:function(e){return t.$emit("input",e)}}},[n("v-list",{attrs:{nav:""}},[t._l(t.items,(function(e,o){return n("v-list-item",{key:o,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-icon",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("\n        "+t._s(e.title)+" \n      ")])],1)],1)})),t._v(" "),n("v-list-item",{on:{click:function(e){return t.$auth.logout()}}},[n("v-list-item-icon",[n("v-icon",[t._v("mdi-logout")])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",[t._v("Logout")])],1)],1)],2)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:d.a,VList:m.a,VListItem:v.a,VListItemContent:f.a,VListItemIcon:k.a,VListItemTitle:f.c,VNavigationDrawer:h.a})},277:function(t,e,n){n(278),t.exports=n(279)},292:function(t,e,n){"use strict";n.r(e);n(33),n(63),n(45);e.default=function(t){var e=t.$auth,n=t.redirect;if(!e.loggedIn)return n("/login");var o=e.user.role;return["admin","super"].some((function(t){return o.includes(t)}))?void 0:n("/login")}},303:function(t,e,n){"use strict";n(236)},304:function(t,e,n){(e=n(7)(!1)).push([t.i,"h1[data-v-c6ee6458]{font-size:20px}",""]),t.exports=e},309:function(t,e,n){var content=n(310);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("aaec6fdc",content,!0,{sourceMap:!1})},310:function(t,e,n){(e=n(7)(!1)).push([t.i,'.spl-btn{box-shadow:0 20px 20px -10px var(--v-primary-base)!important}html{scroll-behavior:smooth!important}.theme--dark.v-application,.theme--dark .v-item-group,.theme--dark .v-tabs-items{background-color:var(--v-background-base)!important}.theme--dark .v-btn--has-bg,.theme--dark .v-card{background-color:var(--v-info-base)!important}.blue--background{background-color:#00acee!important}a:not(.v-btn){text-decoration:unset!important;color:unset!important}.toasted{font-family:"Roboto","Sans-serif"!important;font-weight:700!important}',""]),t.exports=e},311:function(t,e,n){"use strict";n(238)},312:function(t,e,n){(e=n(7)(!1)).push([t.i,".v-text-field.shrink{max-width:200px!important}",""]),t.exports=e},341:function(t,e,n){"use strict";n(245)},342:function(t,e,n){(e=n(7)(!1)).push([t.i,".footerLink,.footerLink:link{color:#ccd!important;text-decoration:none}",""]),t.exports=e},356:function(t,e,n){"use strict";n(246)},357:function(t,e,n){(e=n(7)(!1)).push([t.i,".v-text-field.shrink{max-width:200px!important}.toolbar{top:80px!important;width:90%}",""]),t.exports=e},366:function(t,e,n){"use strict";n(248)},367:function(t,e,n){(e=n(7)(!1)).push([t.i,".v-text-field.shrink{max-width:200px!important}",""]),t.exports=e},368:function(t,e,n){"use strict";n(249)},369:function(t,e,n){(e=n(7)(!1)).push([t.i,".v-navigation-drawer--temporary.v-navigation-drawer--clipped{z-index:3;padding-top:64px}.menu-item:after{min-height:0!important}",""]),t.exports=e},386:function(t,e,n){"use strict";n.r(e),n.d(e,"state",(function(){return o}));var o=function(){return{statuses:["New","In Transit","Out for Delivery","Arriving Destination","Delivered","Cancelled"],international:["DHL","UPS","FEDEX","DPD","SELF"],domestic:["DTDC","ICL","TRACK ON","BLUE DART","DELHIVERY.COM","SELF"]}}},404:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{snackbar:!1,snackColor:"",message:"",icon:""}},mounted:function(){var t=this;this.$nuxt.$on("snack",(function(e){t.snackColor=e.snackColor,t.message=e.message,t.icon=e.icon,t.snackbar=!0,console.log(e)}))}},r=n(23),c=n(21),l=n.n(c),d=n(189),m=n(415),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-snackbar",{attrs:{bottom:"",right:"",transition:"slide-x-reverse-transition",color:t.snackColor},model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[n("v-icon",[t._v(t._s(t.icon))]),t._v(" \n\t"),n("span",{staticClass:"font-weight-medium"},[t._v(t._s(t.message))])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VIcon:d.a,VSnackbar:m.a})},75:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{icons:[{name:"mdi-facebook",link:""},{name:"mdi-twitter",link:""},{name:"mdi-linkedin",link:""},{name:"mdi-instagram",link:""}],items:[{name:"Home",link:"/"},{name:"About Us",link:"/about-us"},{name:"Services",link:"/services"},{name:"We Send",link:"/we-send"},{name:"Contact Us",link:"/contact-us"}],services:[{name:"International Courier",link:"/services#international"},{name:"Domestic Courier",link:"/services#domestic"}]}}},r=(n(341),n(23)),c=n(21),l=n.n(c),d=n(405),m=n(190),v=n(152),f=n(416),k=n(417),h=n(407),_=n(418),x=n(189),w=n(419),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-footer",{staticClass:"justify-center pl-0 pr-0",staticStyle:{"border-top":"5px solid var(--v-secondary-base)"},attrs:{dark:"",padless:"",inset:""}},[n("v-card",{staticClass:"white--text text-center",staticStyle:{width:"100%",color:"#091842 !important"},attrs:{flat:"",color:"primary darken-2"}},[n("v-card-text",t._l(t.icons,(function(e){return n("v-btn",{key:e.name,staticClass:"mx-2 white--text",attrs:{href:e.link,target:"_blank",icon:""}},[n("v-icon",{attrs:{size:"24px"}},[t._v(t._s(e.name))])],1)})),1),t._v(" "),n("v-card-text",{staticClass:"white--text pt-0"},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6",sm:"12"}},[n("v-container",{staticClass:"text-justify"},[n("v-card",{staticClass:"pa-2",staticStyle:{width:"240px"},attrs:{color:"white",depressed:""}},[n("img",{attrs:{width:"220px",contain:"",src:"/firststar.png"}})]),t._v(" "),n("br"),t._v(" "),n("p",{staticClass:"body-1"},[t._v("Fastest Courier Service in Hyderabad Since 2000.")])],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3",sm:"6"}},[n("v-container",{staticClass:"text-justify"},[n("h2",{staticClass:"title mb-4"},[t._v("Navigate")]),t._v(" "),t._l(t.items,(function(e,i){return n("div",{key:i},[n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:e.link}},[t._v(t._s(e.name))])],1)}))],2)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"3",sm:"6"}},[n("v-container",{staticClass:"text-justify"},[n("h3",{staticClass:"title mb-4"},[t._v("Services")]),t._v(" "),t._l(t.services,(function(e,i){return n("div",{key:i},[n("nuxt-link",{staticClass:"body-1 footerLink",attrs:{to:e.link}},[t._v(t._s(e.name))])],1)}))],2)],1)],1)],1),t._v(" "),n("v-divider"),t._v(" "),n("v-card-text",{staticClass:"black--background white--text"},[t._v("©\n        "+t._s((new Date).getFullYear())+" — ✨ "),n("strong",[t._v("FirstStar Courier | All Rights Reserved!")])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:m.a,VCardText:v.b,VCol:f.a,VContainer:k.a,VDivider:h.a,VFooter:_.a,VIcon:x.a,VRow:w.a})},76:function(t,e,n){"use strict";var o={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},r=(n(303),n(23)),c=n(21),l=n.n(c),d=n(413),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("div",{staticStyle:{margin:"auto","align-text":"center"},attrs:{align:"center"}},[n("h1",{staticClass:"display-4 font-weight-black grey--text"},[t._v("😕 404")]),t._v(" "),n("p",{staticClass:"display-1"},[t._v("\n      Looks like You're Lost, Let's go "),n("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1)]):n("div",{staticStyle:{margin:"auto","align-text":"center"},attrs:{align:"center"}},[n("h1",{staticClass:"display-4 font-weight-black grey--text"},[t._v("🤕 Oh No!")]),t._v(" "),n("p",{staticClass:"display-1"},[t._v("\n      Something Went Wrong! But Don't Worry, Help's on the way!\n    ")]),t._v(" "),n("p",[n("NuxtLink",{attrs:{to:"/"}},[t._v("Home")])],1)])])}),[],!1,null,"c6ee6458",null);e.a=component.exports;l()(component,{VApp:d.a})}},[[277,21,4,22]]]);