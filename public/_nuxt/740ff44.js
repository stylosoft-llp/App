(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1036:function(e,t,n){"use strict";n.r(t);n(28);var l={layout:"appDesktop",data:function(){return{user:{},show1:!1,registering:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}],userDetail:{designation:"",zone:"",address_1:"",address_2:"",city:"",state:"",country:"",pincode:"",consent_auth_1:"",consent_auth_1_phone:"",consent_auth_2:"",consent_auth_2_phone:"",addresses:[]}}},beforeMount:function(){this.getUser()},methods:{getUser:function(){var e=this;this.$axios.get("/auth/customers/"+(this.$route.query.id||null)).then((function(t){e.user=t.data,t.data.user_detail&&(e.userDetail=t.data.user_detail)}))},addUser:function(){var e=this,t=this.user;t.userDetail=this.userDetail,this.$axios.put("/auth/customers/"+(this.$route.query.id||null),t).then((function(t){e.$toast.success("User Created")}))},addAddress:function(){var e;null===(e=this.userDetail)||void 0===e||e.addresses.push({zone:"",address:""})}}},r=n(27),o=n(31),d=n.n(o),v=n(491),x=n(211),c=n(177),f=n(502),_=n(503),h=n(210),m=n(510),w=n(505),y=n(501),D=n(490),k=n(546),component=Object(r.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{container:"","fill-height":"","align-center":"","justify-center":""}},[n("v-card",{attrs:{width:"100%","max-width":"600"}},[n("v-card-title",[e._v(e._s(e.$route.query.id?"Edit":"Add New")+" Customer\n      "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{outlined:"",small:"",color:"primary",to:"/app/customers"}},[n("v-icon",[e._v("mdi-arrow-left")])],1)],1),e._v(" "),n("v-container",[n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-account-outline",outlined:"","validate-on-blur":"",dense:"",rules:[function(e){return!!e||"Full Name is Required"}],label:"Full Name *"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-email-outline",outlined:"","validate-on-blur":"",dense:"",rules:e.emailRules,label:"E-mail *"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-lock-outline",outlined:"","validate-on-blur":"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Password *",rules:e.passwordRules},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),n("v-text-field",{attrs:{"prepend-inner-icon":"mdi-phone-outline",rules:[function(e){return!!e||"Phone No. is Required"}],outlined:"","validate-on-blur":"",hint:"Enter Phone No. without country code Eg. 8123456789",dense:"",counter:"",maxlength:"10",label:"Phone No. *"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),e.userDetail?n("div",[n("v-text-field",{attrs:{label:"Designation",outlined:"",dense:""},model:{value:e.userDetail.designation,callback:function(t){e.$set(e.userDetail,"designation",t)},expression:"userDetail.designation"}}),e._v(" "),n("h3",{staticClass:"my-1"},[e._v("Primary Address")]),e._v(" "),n("v-text-field",{attrs:{label:"Zone",outlined:"",dense:""},model:{value:e.userDetail.zone,callback:function(t){e.$set(e.userDetail,"zone",t)},expression:"userDetail.zone"}}),e._v(" "),n("v-text-field",{attrs:{label:"Address 1",outlined:"",dense:""},model:{value:e.userDetail.address_1,callback:function(t){e.$set(e.userDetail,"address_1",t)},expression:"userDetail.address_1"}}),e._v(" "),n("v-text-field",{attrs:{label:"Address 2",outlined:"",dense:""},model:{value:e.userDetail.address_2,callback:function(t){e.$set(e.userDetail,"address_2",t)},expression:"userDetail.address_2"}}),e._v(" "),n("v-text-field",{attrs:{label:"City",outlined:"",dense:""},model:{value:e.userDetail.city,callback:function(t){e.$set(e.userDetail,"city",t)},expression:"userDetail.city"}}),e._v(" "),n("v-text-field",{attrs:{label:"State",outlined:"",dense:""},model:{value:e.userDetail.state,callback:function(t){e.$set(e.userDetail,"state",t)},expression:"userDetail.state"}}),e._v(" "),n("v-text-field",{attrs:{label:"Country",outlined:"",dense:""},model:{value:e.userDetail.country,callback:function(t){e.$set(e.userDetail,"country",t)},expression:"userDetail.country"}}),e._v(" "),n("v-text-field",{attrs:{label:"Pincode",outlined:"",dense:""},model:{value:e.userDetail.pincode,callback:function(t){e.$set(e.userDetail,"pincode",t)},expression:"userDetail.pincode"}}),e._v(" "),n("h4",{staticClass:"mb-2"},[e._v("Contact Person 1 (Consent Authority)")]),e._v(" "),n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-text-field",{attrs:{label:"Name",outlined:"",dense:""},model:{value:e.userDetail.consent_auth_1,callback:function(t){e.$set(e.userDetail,"consent_auth_1",t)},expression:"userDetail.consent_auth_1"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Phone",outlined:"",dense:""},model:{value:e.userDetail.consent_auth_1_phone,callback:function(t){e.$set(e.userDetail,"consent_auth_1_phone",t)},expression:"userDetail.consent_auth_1_phone"}})],1)],1),e._v(" "),n("h4",{staticClass:"mb-2"},[e._v("Contact Person 2 (Consent Authority)")]),e._v(" "),n("v-row",{attrs:{dense:""}},[n("v-col",[n("v-text-field",{attrs:{label:"Name",outlined:"",dense:""},model:{value:e.userDetail.consent_auth_2,callback:function(t){e.$set(e.userDetail,"consent_auth_2",t)},expression:"userDetail.consent_auth_2"}})],1),e._v(" "),n("v-col",[n("v-text-field",{attrs:{label:"Phone",outlined:"",dense:""},model:{value:e.userDetail.consent_auth_2_phone,callback:function(t){e.$set(e.userDetail,"consent_auth_2_phone",t)},expression:"userDetail.consent_auth_2_phone"}})],1)],1),e._v(" "),n("v-card-title",[e._v("Additional Address Blocks "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{outlined:""},on:{click:function(t){return e.addAddress()}}},[e._v("Add Block")])],1),e._v(" "),e._l(e.userDetail.addresses,(function(t,l){return n("div",{key:l},[n("v-text-field",{attrs:{outlined:"",dense:"",label:"Zone","append-icon":"mdi-delete"},on:{"click:append":function(t){return e.userDetail.addresses.splice(l,1)}},model:{value:t.zone,callback:function(n){e.$set(t,"zone",n)},expression:"addr.zone"}}),e._v(" "),n("v-textarea",{attrs:{outlined:"",rows:"2",label:"Address"},model:{value:t.address,callback:function(n){e.$set(t,"address",n)},expression:"addr.address"}})],1)}))],2):e._e(),e._v(" "),n("v-btn",{attrs:{color:"primary",type:"submit",block:"",loading:e.registering},on:{click:function(t){return e.addUser()}}},[e._v("Add User")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:x.a,VCardTitle:c.d,VCol:f.a,VContainer:_.a,VIcon:h.a,VLayout:m.a,VRow:w.a,VSpacer:y.a,VTextField:D.a,VTextarea:k.a})},510:function(e,t,n){"use strict";n(221);var l=n(222);t.a=Object(l.a)("layout")},517:function(e,t,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("5c8fbe94",content,!0,{sourceMap:!1})},518:function(e,t,n){var l=n(9)(!1);l.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=l},546:function(e,t,n){"use strict";n(17),n(11),n(13),n(6),n(23),n(16),n(24);var l=n(3),r=(n(35),n(79),n(517),n(490)),o=n(14);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(o.a)(r.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},r.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=r.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){r.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})}}]);