(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{476:function(t,e,r){"use strict";r(210);var n=r(211);e.a=Object(n.a)("layout")},568:function(t,e,r){"use strict";r.r(e);r(22),r(39),r(65);var n=r(14),o={layout:"landingPage",data:function(){return{show1:!1,email:null,password:null,success:!1,loading:!1,errors:""}},mounted:function(){this.$auth.loggedIn&&this.$router.push("/admin");this.$route.query&&this.$route.query.redirect},methods:{staffRedirect:function(){var t=this.$auth.user.role;t.includes("super")||t.includes("admin")?this.$router.push("/admin"):t.includes("staff")?this.$router.push("/staff"):alert("Request Pending")},login:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.prev=1,e.next=4,t.$auth.loginWith("local",{data:{email:t.email,password:t.password}});case 4:(r=t.$route.query&&t.$route.query.redirect)?t.$router.push(r):t.staffRedirect(),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),t.errors=e.t0.response.data.error,t.loading=!1;case 12:case"end":return e.stop()}}),e,null,[[1,8]])})))()}}},l=r(23),c=r(24),d=r.n(c),m=r(467),f=r(199),v=r(202),h=r(137),w=r(456),y=r(458),x=r(165),_=r(476),$=r(439),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{staticStyle:{"background-color":"var(--v-primary-base)"},attrs:{column:"","align-center":"","justify-center":""}},[r("img",{staticClass:"my-2 mx-auto",attrs:{width:"160px",src:"/ownear-fd.png"}}),t._v(" "),r("v-card",{staticClass:"my-4 pa-2 elevation-6",attrs:{width:"600"}},[r("v-container",[r("v-form",{ref:"form",attrs:{method:"post"},on:{submit:function(e){return e.preventDefault(),t.login(e)}}},[t.errors?r("v-alert",{attrs:{type:"error"}},[t._v(t._s(t.errors))]):t._e(),t._v(" "),r("v-card-title",{staticClass:"flex-column justify-center"},[r("v-img",{attrs:{alt:"Join Us Now",contain:"","max-width":"300",src:"excella-logo.jpeg"}})],1),t._v(" "),r("h2",{staticClass:"my-2 primary--text font-weight-black",attrs:{align:"center"}},[t._v("\n            Welcome To Exella\n          ")]),t._v(" "),r("v-text-field",{attrs:{label:"E-mail","prepend-inner-icon":"mdi-email-outline",outlined:""},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}),t._v(" "),r("v-text-field",{attrs:{label:"Password","append-icon":t.show1?"mdi-eye":"mdi-eye-off",type:t.show1?"text":"password","prepend-inner-icon":"mdi-lock-outline",outlined:""},on:{"click:append":function(e){t.show1=!t.show1}},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}}),t._v(" "),r("v-btn",{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit",block:""}},[t._v("Login")])],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VAlert:m.a,VBtn:f.a,VCard:v.a,VCardTitle:h.d,VContainer:w.a,VForm:y.a,VImg:x.a,VLayout:_.a,VTextField:$.a})}}]);