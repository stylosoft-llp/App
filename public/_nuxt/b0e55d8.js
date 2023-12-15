(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{885:function(e,t,n){"use strict";n.r(t);n(29);var r={layout:"appDesktop",data:function(){return{user:{},show1:!1,registering:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}]}},beforeMount:function(){this.getUser()},methods:{getUser:function(){var e=this;this.$axios.get("/auth/users/"+(this.$route.query.id||null)).then((function(t){e.user=t.data}))},addUser:function(){var e=this;this.$axios.put("/auth/users/"+(this.$route.query.id||null),this.user).then((function(t){e.$toast.success("User Created")}))}}},o=n(28),l=n(31),d=n.n(l),c=n(454),m=n(199),v=n(169),h=n(467),f=n(500),w=n(483),x=n(519),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{container:"","align-center":"","justify-center":""}},[n("v-card",{attrs:{width:"100%","max-width":"600"}},[n("v-card-title",[e._v("Add New User")]),e._v(" "),n("v-container",[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-account-outline",outlined:"","validate-on-blur":"",dense:"",rules:[function(e){return!!e||"Full Name is Required"}],label:"Full Name *"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-email-outline",outlined:"","validate-on-blur":"",dense:"",rules:e.emailRules,label:"Your E-mail *"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-lock-outline",outlined:"","validate-on-blur":"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Password *",rules:e.passwordRules},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-phone-outline",rules:[function(e){return!!e||"Phone No. is Required"}],outlined:"","validate-on-blur":"",hint:"Enter Phone No. without country code Eg. 8123456789",dense:"",counter:"",maxlength:"10",label:"Your Phone No. *"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),n("v-select",{attrs:{outlined:"",dense:"",label:"Role",items:["Service Engineer","Help Desk","Customer"]},model:{value:e.user.role,callback:function(t){e.$set(e.user,"role",t)},expression:"user.role"}}),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",block:"",loading:e.registering},on:{click:function(t){return e.addUser()}}},[e._v("Add User")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:c.a,VCard:m.a,VCardTitle:v.d,VContainer:h.a,VLayout:f.a,VSelect:w.a,VTextField:x.a})}}]);