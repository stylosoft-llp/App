(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{507:function(t,e,n){"use strict";n(220);var r=n(221);e.a=Object(r.a)("layout")},713:function(t,e,n){"use strict";var r=n(3),o=(n(54),n(67),n(178),n(12),n(6),n(16),n(77),n(219),n(17),n(13),n(21),n(22),n(14)),l=n(103),c=n(147);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},943:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{company:{},loading:!1}},methods:{registerCompany:function(){var t=this;this.loading=!0,this.$axios.post("auth/companies",this.company).then((function(e){t.$auth.fetchUser().then((function(e){t.loading=!1,t.$router.push("/app")}))}),(function(e){var n;409==(null==e||null===(n=e.response)||void 0===n?void 0:n.status)&&t.$router.push("/app")}))}}},o=n(27),l=n(31),c=n.n(l),d=n(487),f=n(210),m=n(499),h=n(713),v=n(507),y=n(488),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"","justify-center":""}},[n("v-card",{staticClass:"elevation-6 my-6 rounded-lg",attrs:{width:"600"}},[n("h2",{staticClass:"mt-2 primary--text font-weight-black",attrs:{align:"center"}},[t._v("\n        Create Your Company\n      ")]),t._v(" "),n("v-container",[n("v-form",{ref:"form",attrs:{method:"post","lazy-validation":!0},on:{submit:function(e){return t.registerCompany()}}},[n("v-text-field",{attrs:{outlined:"","validate-on-blur":"",dense:"",rules:[function(t){return!!t||"Company Name is Required"}],label:"Company Name *"},model:{value:t.company.name,callback:function(e){t.$set(t.company,"name",e)},expression:"company.name"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"","validate-on-blur":"",dense:"",label:"Address Field 1 *"},model:{value:t.company.address_1,callback:function(e){t.$set(t.company,"address_1",e)},expression:"company.address_1"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"","validate-on-blur":"",dense:"",label:"Address Field 1 *"},model:{value:t.company.address_2,callback:function(e){t.$set(t.company,"address_2",e)},expression:"company.address_2"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"","validate-on-blur":"",dense:"",label:"Phone *"},model:{value:t.company.phone,callback:function(e){t.$set(t.company,"phone",e)},expression:"company.phone"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"","validate-on-blur":"",dense:"",label:"City*"},model:{value:t.company.city,callback:function(e){t.$set(t.company,"city",e)},expression:"company.city"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"","validate-on-blur":"",dense:"",label:"State *"},model:{value:t.company.state,callback:function(e){t.$set(t.company,"state",e)},expression:"company.state"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"","validate-on-blur":"",dense:"",label:"Country *"},model:{value:t.company.country,callback:function(e){t.$set(t.company,"country",e)},expression:"company.country"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"","validate-on-blur":"",dense:"",label:"Pin Code *"},model:{value:t.company.pincode,callback:function(e){t.$set(t.company,"pincode",e)},expression:"company.pincode"}}),t._v(" "),n("v-btn",{attrs:{color:"primary",block:"",loading:t.loading},on:{click:function(e){return t.registerCompany()}}},[t._v("Add Company")])],1),t._v(" "),n("p",{staticClass:"mt-1  body-2"},[t._v("\n          By registering with us, you agree to our Terms & Conditions and\n          Privacy Policy\n        ")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:f.a,VContainer:m.a,VForm:h.a,VLayout:v.a,VTextField:y.a})}}]);