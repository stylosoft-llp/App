(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{1071:function(e,t,n){"use strict";n.r(t);var l=n(509),o=n(220),r=n(124),d=n(522),c=n(523),_=n(219),h=n(529),m=n(521),v=n(519),D=n(508),f=(n(25),n(30),{layout:"superDesktop",data:function(){return{user:{},show1:!1,registering:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}],userDetail:{designation:"",zone:"",address_1:"",address_2:"",city:"",state:"",country:"",pincode:"",consent_auth_1:"",consent_auth_1_phone:"",consent_auth_2:"",consent_auth_2_phone:""}}},beforeMount:function(){this.getUser()},methods:{getUser:function(){var e=this;this.$axios.get("/auth/customers/"+(this.$route.query.id||null)).then((function(t){e.user=t.data,t.data.userDetail&&(e.userDetail=t.data.userDetail)}))},addUser:function(){var e=this,t=this.user;t.userDetail=this.userDetail,this.$axios.put("/auth/customers/"+(this.$route.query.id||null),t).then((function(t){e.$toast.success("User Created")}))}}}),w=n(26),component=Object(w.a)(f,(function(){var e=this,t=e._self._c;return t(h.a,{attrs:{container:"","fill-height":"","align-center":"","justify-center":""}},[t(o.a,{attrs:{width:"100%","max-width":"600"}},[t(r.d,[e._v("Add New Customer\n      "),t(v.a),e._v(" "),t(l.a,{attrs:{outlined:"",small:"",color:"primary",to:"/app/customers"}},[t(_.a,[e._v("mdi-arrow-left")])],1)],1),e._v(" "),t(c.a,[t(D.a,{attrs:{"prepend-inner-icon":"mdi-account-outline",outlined:"","validate-on-blur":"",dense:"",rules:[function(e){return!!e||"Full Name is Required"}],label:"Full Name *"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e._v(" "),t(D.a,{attrs:{"prepend-inner-icon":"mdi-email-outline",outlined:"","validate-on-blur":"",dense:"",rules:e.emailRules,label:"E-mail *"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),t(D.a,{attrs:{"prepend-inner-icon":"mdi-lock-outline",outlined:"","validate-on-blur":"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Password *",rules:e.passwordRules},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),t(D.a,{attrs:{"prepend-inner-icon":"mdi-phone-outline",rules:[function(e){return!!e||"Phone No. is Required"}],outlined:"","validate-on-blur":"",hint:"Enter Phone No. without country code Eg. 8123456789",dense:"",counter:"",maxlength:"10",label:"Phone No. *"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),t("h3",[e._v("Additional Details")]),e._v(" "),t(D.a,{attrs:{label:"Designation",outlined:"",dense:""},model:{value:e.userDetail.designation,callback:function(t){e.$set(e.userDetail,"designation",t)},expression:"userDetail.designation"}}),e._v(" "),t(D.a,{attrs:{label:"Zone",outlined:"",dense:""},model:{value:e.userDetail.zone,callback:function(t){e.$set(e.userDetail,"zone",t)},expression:"userDetail.zone"}}),e._v(" "),t(D.a,{attrs:{label:"Address 1",outlined:"",dense:""},model:{value:e.userDetail.address_1,callback:function(t){e.$set(e.userDetail,"address_1",t)},expression:"userDetail.address_1"}}),e._v(" "),t(D.a,{attrs:{label:"Address 2",outlined:"",dense:""},model:{value:e.userDetail.address_2,callback:function(t){e.$set(e.userDetail,"address_2",t)},expression:"userDetail.address_2"}}),e._v(" "),t(D.a,{attrs:{label:"City",outlined:"",dense:""},model:{value:e.userDetail.city,callback:function(t){e.$set(e.userDetail,"city",t)},expression:"userDetail.city"}}),e._v(" "),t(D.a,{attrs:{label:"State",outlined:"",dense:""},model:{value:e.userDetail.state,callback:function(t){e.$set(e.userDetail,"state",t)},expression:"userDetail.state"}}),e._v(" "),t(D.a,{attrs:{label:"Country",outlined:"",dense:""},model:{value:e.userDetail.country,callback:function(t){e.$set(e.userDetail,"country",t)},expression:"userDetail.country"}}),e._v(" "),t(D.a,{attrs:{label:"Pincode",outlined:"",dense:""},model:{value:e.userDetail.pincode,callback:function(t){e.$set(e.userDetail,"pincode",t)},expression:"userDetail.pincode"}}),e._v(" "),t("h4",{staticClass:"mb-2"},[e._v("Consent Authority 1")]),e._v(" "),t(m.a,{attrs:{dense:""}},[t(d.a,[t(D.a,{attrs:{label:"Name",outlined:"",dense:""},model:{value:e.userDetail.consent_auth_1,callback:function(t){e.$set(e.userDetail,"consent_auth_1",t)},expression:"userDetail.consent_auth_1"}})],1),e._v(" "),t(d.a,[t(D.a,{attrs:{label:"Phone",outlined:"",dense:""},model:{value:e.userDetail.consent_auth_1_phone,callback:function(t){e.$set(e.userDetail,"consent_auth_1_phone",t)},expression:"userDetail.consent_auth_1_phone"}})],1)],1),e._v(" "),t("h4",{staticClass:"mb-2"},[e._v("Consent Authority 2")]),e._v(" "),t(m.a,{attrs:{dense:""}},[t(d.a,[t(D.a,{attrs:{label:"Name",outlined:"",dense:""},model:{value:e.userDetail.consent_auth_2,callback:function(t){e.$set(e.userDetail,"consent_auth_2",t)},expression:"userDetail.consent_auth_2"}})],1),e._v(" "),t(d.a,[t(D.a,{attrs:{label:"Phone",outlined:"",dense:""},model:{value:e.userDetail.consent_auth_2_phone,callback:function(t){e.$set(e.userDetail,"consent_auth_2_phone",t)},expression:"userDetail.consent_auth_2_phone"}})],1)],1),e._v(" "),t(l.a,{attrs:{color:"primary",type:"submit",block:"",loading:e.registering},on:{click:function(t){return e.addUser()}}},[e._v("Add User")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},529:function(e,t,n){"use strict";n(230);var l=n(231);t.a=Object(l.a)("layout")}}]);