(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1079:function(e,n,t){"use strict";t.r(n);var r=t(510),o=t(219),l=t(124),c=t(524),d=t(218),m=t(530),f=t(552),v=t(520),h=t(509),y=(t(25),t(30),{layout:"superDesktop",data:function(){return{user:{},show1:!1,registering:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}],licenses:[{id:1,name:"StyloDesk - Silver"},{id:2,name:"StyloDesk - Gold"},{id:3,name:"StyloDesk - Platinum"}]}},beforeMount:function(){this.getUser()},methods:{getUser:function(){var e=this;this.$axios.get("/super/users/"+(this.$route.query.id||null)).then((function(n){e.user=n.data}))},addUser:function(){var e=this;this.$axios.put("/super/users/"+(this.$route.query.id||null),this.user).then((function(n){e.$toast.success("User Created")}))}}}),w=t(26),component=Object(w.a)(y,(function(){var e=this,n=e._self._c;return n(m.a,{attrs:{container:"","align-center":"","justify-center":""}},[n(o.a,{attrs:{width:"100%","max-width":"600"}},[n(l.d,[e._v("Add/Edit User\n      "),n(v.a),e._v(" "),n(r.a,{attrs:{small:"",to:"/superadmin/users",outlined:"",color:"primary"}},[n(d.a,[e._v("mdi-arrow-left")])],1)],1),e._v(" "),n(c.a,[n(h.a,{attrs:{"prepend-inner-icon":"mdi-account-outline",outlined:"","validate-on-blur":"",dense:"",rules:[function(e){return!!e||"Full Name is Required"}],label:"Full Name *"},model:{value:e.user.name,callback:function(n){e.$set(e.user,"name",n)},expression:"user.name"}}),e._v(" "),n(h.a,{attrs:{"prepend-inner-icon":"mdi-email-outline",outlined:"","validate-on-blur":"",dense:"",rules:e.emailRules,label:"E-mail *"},model:{value:e.user.email,callback:function(n){e.$set(e.user,"email",n)},expression:"user.email"}}),e._v(" "),n(h.a,{attrs:{"prepend-inner-icon":"mdi-lock-outline",outlined:"","validate-on-blur":"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Password *",rules:e.passwordRules},on:{"click:append":function(n){e.show1=!e.show1}},model:{value:e.user.password,callback:function(n){e.$set(e.user,"password",n)},expression:"user.password"}}),e._v(" "),n(h.a,{attrs:{"prepend-inner-icon":"mdi-phone-outline",rules:[function(e){return!!e||"Phone No. is Required"}],outlined:"","validate-on-blur":"",hint:"Enter Phone No. without country code Eg. 8123456789",dense:"",counter:"",maxlength:"10",label:"Phone No. *"},model:{value:e.user.phone,callback:function(n){e.$set(e.user,"phone",n)},expression:"user.phone"}}),e._v(" "),e.user&&e.user.company&&e.user.company[0]&&e.user.company[0].license?n("p",[e._v("License: "),n("b",[e._v(e._s(e.user.company[0].license.name))])]):e._e(),e._v(" "),n(f.a,{attrs:{items:e.licenses,label:"Change License",outlined:"",dense:"","item-text":"name","item-value":"id"},model:{value:e.user.license,callback:function(n){e.$set(e.user,"license",n)},expression:"user.license"}}),e._v(" "),n(r.a,{attrs:{color:"primary",type:"submit",block:"",loading:e.registering},on:{click:function(n){return e.addUser()}}},[e._v("Save User")])],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports},528:function(e,n,t){"use strict";var r=t(4),o=t(126).findIndex,l=t(125),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},529:function(e,n,t){"use strict";var r=t(1),o=t(2);n.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.j}}})},530:function(e,n,t){"use strict";t(231);var r=t(232);n.a=Object(r.a)("layout")},531:function(e,n,t){"use strict";var r=t(34),o=t(125),l=t(54),c=t(61),d=t(103);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=l(this),n=c(e);return 0==n?void 0:e[n-1]},set:function(e){var n=l(this),t=c(n);return n[0==t?0:t-1]=e}}),o("lastItem"))}}]);