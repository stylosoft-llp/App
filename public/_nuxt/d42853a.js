(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{812:function(e,n,t){"use strict";t.r(n);var r=t(567),o=t(509),l=t(220),c=t(124),d=t(593),m=t(523),h=t(565),f=t(219),v=t(764),_=t(526),w=t(508),x=(t(25),t(30),t(5),t(13),{props:{permissions:{default:null},allowNew:{default:!0},title:{default:"Assignee"},id:{default:null},name:{default:null}},data:function(){return{createDialog:!1,user:{},assignee:{},assignee_search:"",assignees:[],loadingAssignees:!1,show1:!1,registering:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}]}},watch:{assignee_search:function(e){e&&e.length>2&&this.searchAssignees()}},methods:{addDialog:function(){"Customer"==this.permissions?this.$router.push("/app/customers/editor"):this.createDialog=!0},addUser:function(){var e=this,n=this.user;this.$axios.put("/auth/users",n).then((function(n){e.$toast.success(e.permissions+" Added Successfully!")}))},searchAssignees:function(){var e,n=this;(null===(e=this.assignee_search)||void 0===e?void 0:e.length)<=2||(this.loadingAssignees=!0,this.$axios.get("/auth/users/filter",{params:{name:this.assignee_search,is:this.permissions}}).then((function(e){var t=e.data;t.forEach((function(e){e.user_detail&&(e.name=e.name+" ("+e.user_detail.company_name+")")})),n.assignees=t,n.loadingAssignees=!1}),(function(e){n.loadingAssignees=!1})))}}}),k=t(26),component=Object(k.a)(x,(function(){var e=this,n=e._self._c;return n("div",[n("p",[e._v(e._s(e.title)+" "),n(d.a,{staticClass:"font-weight-medium",attrs:{label:""}},[e._v(e._s(e.name||"None")+" ")])],1),e._v(" "),n("div",{staticClass:"d-flex flex-row",attrs:{dense:""}},[n(r.a,{staticClass:"mr-1",attrs:{dense:"",outlined:"",clearable:"",loading:e.loadingAssignees,"search-input":e.assignee_search,label:"Search "+e.title,"item-text":"name","return-object":"","prepend-inner-icon":"mdi-magnify",items:e.assignees},on:{focus:function(n){return e.searchAssignees()},input:function(n){n&&e.$emit("assignTo",n)},"update:searchInput":function(n){e.assignee_search=n},"update:search-input":function(n){e.assignee_search=n}},scopedSlots:e._u([{key:"item",fn:function(t){var r=t.item;return[n(_.a,[n(_.c,[e._v("\n            "+e._s(r.name)+"\n          ")])],1),e._v(" "),n(v.a,[r.present?n(f.a,{attrs:{small:"",color:"green"}},[e._v("mdi-circle")]):e._e()],1)]}}])}),e._v(" "),e.allowNew?n(o.a,{staticClass:"ml-1",on:{click:function(n){return e.addDialog()}}},[n(f.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v("New")],1):e._e()],1),e._v(" "),n(h.a,{attrs:{"max-width":"600"},model:{value:e.createDialog,callback:function(n){e.createDialog=n},expression:"createDialog"}},[n(l.a,[n(c.d,[e._v("Add New User")]),e._v(" "),n(m.a,[n(w.a,{attrs:{"prepend-inner-icon":"mdi-account-outline",outlined:"","validate-on-blur":"",dense:"",rules:[function(e){return!!e||"Full Name is Required"}],label:"Full Name *"},model:{value:e.user.name,callback:function(n){e.$set(e.user,"name",n)},expression:"user.name"}}),e._v(" "),n(w.a,{attrs:{"prepend-inner-icon":"mdi-email-outline",outlined:"","validate-on-blur":"",dense:"",rules:e.emailRules,label:"E-mail *"},model:{value:e.user.email,callback:function(n){e.$set(e.user,"email",n)},expression:"user.email"}}),e._v(" "),n(w.a,{attrs:{"prepend-inner-icon":"mdi-lock-outline",outlined:"","validate-on-blur":"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Password *",rules:e.passwordRules},on:{"click:append":function(n){e.show1=!e.show1}},model:{value:e.user.password,callback:function(n){e.$set(e.user,"password",n)},expression:"user.password"}}),e._v(" "),n(w.a,{attrs:{"prepend-inner-icon":"mdi-phone-outline",rules:[function(e){return!!e||"Phone No. is Required"}],outlined:"","validate-on-blur":"",hint:"Enter Phone No. without country code Eg. 8123456789",dense:"",counter:"",maxlength:"10",label:"Phone No. *"},model:{value:e.user.phone,callback:function(n){e.$set(e.user,"phone",n)},expression:"user.phone"}}),e._v(" "),n(o.a,{attrs:{color:"primary",type:"submit",block:"",loading:e.registering},on:{click:function(n){return e.addUser()}}},[e._v("Register Now")])],1)],1)],1)],1)}),[],!1,null,null,null);n.default=component.exports}}]);