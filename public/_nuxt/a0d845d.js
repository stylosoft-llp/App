(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1051:function(e,t,n){"use strict";n.r(t);n(28);var r={layout:"appDesktop",data:function(){return{user:{},show1:!1,registering:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}]}},beforeMount:function(){this.$route.query.id&&this.getUser()},methods:{getUser:function(){var e=this;this.$axios.get("/admin/users/"+(this.$route.query.id||null)).then((function(t){var n;e.user=t.data,e.user.role=null===(n=t.data.user_company)||void 0===n?void 0:n.role}))},addUser:function(){var e=this,t=this.user;t.user_role=t.role,this.$axios.put("/admin/users/"+(this.$route.query.id||null),this.user).then((function(t){e.$toast.success("User Saved")}))}}},o=n(27),l=n(31),d=n.n(l),c=n(491),v=n(211),f=n(177),m=n(503),h=n(210),w=n(512),x=n(539),y=n(501),$=n(490),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{container:"","align-center":"","justify-center":""}},[n("v-card",{attrs:{width:"100%","max-width":"600"}},[n("v-card-title",[e._v(e._s(e.$route.query.id?"Edit":"Add")+" User\n      "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{outlined:"",small:"",color:"primary"},on:{click:function(t){return e.$router.back()}}},[n("v-icon",[e._v("mdi-arrow-left")])],1)],1),e._v(" "),n("v-container",[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-account-outline",outlined:"","validate-on-blur":"",dense:"",rules:[function(e){return!!e||"Full Name is Required"}],label:"Full Name *"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-email-outline",outlined:"","validate-on-blur":"",dense:"",rules:e.emailRules,label:"User E-mail *"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-lock-outline",outlined:"","validate-on-blur":"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Password *",rules:e.passwordRules},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-phone-outline",rules:[function(e){return!!e||"Phone No. is Required"}],outlined:"","validate-on-blur":"",hint:"Enter Phone No. without country code Eg. 8123456789",dense:"",counter:"",maxlength:"10",label:"Phone No. *"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),n("v-select",{attrs:{outlined:"",dense:"",label:"Role",items:e.$store.state.roles},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",block:"",loading:e.registering},on:{click:function(t){return e.addUser()}}},[e._v("Save User")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:c.a,VCard:v.a,VCardTitle:f.d,VContainer:m.a,VIcon:h.a,VLayout:w.a,VSelect:x.a,VSpacer:y.a,VTextField:$.a})},509:function(e,t,n){"use strict";var r=n(5),o=n(123).findIndex,l=n(122),d="findIndex",c=!0;d in[]&&Array(1).findIndex((function(){c=!1})),r({target:"Array",proto:!0,forced:c},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(d)},510:function(e,t,n){var r=n(327),o=n(43);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),o.f(e,t,n)}},511:function(e,t,n){"use strict";var r=n(1),o=n(2);t.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.j}}})},512:function(e,t,n){"use strict";n(221);var r=n(222);t.a=Object(r.a)("layout")},513:function(e,t,n){"use strict";var r=n(37),o=n(122),l=n(55),d=n(63),c=n(510);r&&(c(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=l(this),t=d(e);return 0==t?void 0:e[t-1]},set:function(e){var t=l(this),n=d(t);return t[0==n?0:n-1]=e}}),o("lastItem"))}}]);