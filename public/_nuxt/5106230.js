(window.webpackJsonp=window.webpackJsonp||[]).push([[48],{1070:function(t,e,n){"use strict";n.r(e);var o=n(510),r=n(124),c=n(589),l=n(524),d=n(218),v=n(530),h=n(745),m=n(527),_=n(520),f=(n(32),n(25),n(230)),y=(n(5),n(33),n(35),{layout:"appDesktop",data:function(){return{version:1,formData:{},service:{},show:{logo:!0,company:!0,address:!0,sign:!0}}},beforeMount:function(){this.fetchService()},methods:{getPrint:function(){for(var t=document.getElementById("printable").innerHTML,e="",n=0,o=Object(f.a)(document.querySelectorAll('link[rel="stylesheet"], style'));n<o.length;n++){e+=o[n].outerHTML}var r=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");r.document.write("<!DOCTYPE html>\n<html><head>".concat(e,"<style>\n</style></head>\n  <body><div>").concat(t,"</div></body></html>")),r.onload=function(){r.document.close(),r.focus(),r.print(),r.close()}},fetchService:function(){var t=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(e){var n,o;t.service=e.data,t.formData=(null===(n=e.data)||void 0===n||null===(o=n.form)||void 0===o?void 0:o.data)||[]}))}},components:{FormTable:function(){return n.e(109).then(n.bind(null,1096))}}}),x=(n(896),n(26)),component=Object(x.a)(y,(function(){var t=this,e=t._self._c;return e(v.a,{attrs:{container:"",column:"","align-center":"","justify-center":""}},[e("div",[e(r.d,[t._v("Form Preview\n      "),e(_.a),t._v(" "),e(o.a,{staticClass:"ml-1",attrs:{color:"primary"},on:{click:function(e){return t.getPrint()}}},[t._v("Print")]),t._v(" "),e(o.a,{staticClass:"ml-1",attrs:{to:"/app/services/editForm?id=".concat(t.$route.query.id),color:"secondary",outlined:""}},[e(d.a,[t._v("mdi-pencil")])],1),t._v(" "),e(o.a,{staticClass:"ml-1",attrs:{color:"secondary",outlined:""},on:{click:function(e){return t.$router.push("/app/services")}}},[e(d.a,[t._v("mdi-arrow-left")])],1)],1),t._v(" "),e("div",{staticClass:"d-flex flex-wrap align-center",staticStyle:{gap:"10px"}},[t._v("\n      Show:\n      "),e(c.a,{attrs:{label:"Logo"},model:{value:t.show.logo,callback:function(e){t.$set(t.show,"logo",e)},expression:"show.logo"}}),t._v(" "),e(c.a,{attrs:{label:"Company Name"},model:{value:t.show.company,callback:function(e){t.$set(t.show,"company",e)},expression:"show.company"}}),t._v(" "),e(c.a,{attrs:{label:"Address"},model:{value:t.show.address,callback:function(e){t.$set(t.show,"address",e)},expression:"show.address"}}),t._v(" "),e(c.a,{attrs:{label:"Customer Sign."},model:{value:t.show.sign,callback:function(e){t.$set(t.show,"sign",e)},expression:"show.sign"}})],1),t._v(" "),e("div",{staticStyle:{border:"0.5px solid grey","border-radius":"10px"},style:t.$vuetify.breakpoint.mdAndUp?"width:200mm":"width:100%",attrs:{id:"printable"}},[e(l.a,[t.$auth.user&&t.$auth.user.company?e("div",{staticStyle:{"text-align":"center"}},[t.show.logo&&t.$auth.user.company.logo_url?e("img",{staticStyle:{width:"260px"},attrs:{src:"".concat(t.$config.media_url,"/").concat(t.$auth.user.company.logo_url)}}):t._e(),t._v(" "),t.show.company?e("h2",{staticStyle:{margin:"4px"}},[t._v(t._s(t.$auth.user.company.name))]):t._e(),t._v(" "),t.show.address?e("p",{staticStyle:{margin:"4px"}},[t._v(t._s(t.$auth.user.company.address_1)),e("br"),t._v("\n            "+t._s(t.$auth.user.company.city)+" "+t._s(t.$auth.user.company.state)+" - "+t._s(t.$auth.user.company.pincode)+" "),e("span",[t._v("• Phone:"+t._s(t.$auth.user.company.phone))])]):t._e()]):t._e(),t._v(" "),e("div",{key:t.version,staticClass:"d-flex flex-wrap"},[t.service&&t.service.customer?e("div",{staticStyle:{border:"0.5px solid grey",padding:"10px 40px 10px 10px",width:"max-content","max-width":"40%"}},[e("p",[t._v("Customer Name: "+t._s(t.service.customer.name))]),t._v(" "),t.service.customer.user_detail.company_name?e("p",[t._v("Company: "+t._s(t.service.customer.user_detail.company_name))]):t._e(),t._v(" "),e("p",[t._v("Phone: "+t._s(t.service.customer.phone))]),t._v(" "),e("p",[t._v("E-Mail: "+t._s(t.service.customer.email))]),t._v(" "),t.service.customer.user_detail?e("div",[e("p",[t._v("Address: "+t._s(t.service.customer.user_detail.address_1))]),t._v(" "),e("p",[t._v(t._s(t.service.customer.user_detail.address_2))]),t._v(" "),e("p",[t._v(t._s(t.service.customer.user_detail.city)+" "+t._s(t.service.customer.user_detail.state)+" "+t._s(t.service.customer.user_detail.country))]),t._v(" "),e("p",[t._v(t._s(t.service.customer.user_detail.pincode))])]):t._e(),t._v(" "),t.service.zone?e("div",[e("p",{staticClass:"font-weight-bold"},[t._v("Zone: "+t._s(t.service.zone.zone))]),t._v(" "),e("p",[t._v(t._s(t.service.zone.address))])]):t._e()]):t._e(),t._v(" "),t._l(t.formData,(function(del,n){return e("div",{key:n,class:{cmd6:"md"==del.size,cmd12:"lg"==del.size},staticStyle:{height:"100%",display:"inline-block","flex-direction":"row"}},["heading"==del.title?e("h2",{staticStyle:{margin:"10px","text-align":"center"}},[t._v("\n              "+t._s(del.value)+"\n            ")]):"table"==del.title?e("formTable",{staticClass:"ma-1",model:{value:del.value,callback:function(e){t.$set(del,"value",e)},expression:"del.value"}}):"spacer"==del.title?e("div",{staticClass:"ma-auto"}):"text"==del.title?e("p",{staticClass:"body-1 ma-1",domProps:{textContent:t._s(del.value)}}):"checkbox"==del.title?e("div",{staticStyle:{padding:"4px"}},[e(d.a,[t._v(t._s(del.value?"mdi-checkbox-marked-outline":"mdi-checkbox-blank-outline"))]),t._v("\n              "+t._s(del.name)+"\n            ")],1):"textarea"==del.title?e("div",{staticStyle:{padding:"4px"}},[e("p",{staticClass:"title"},[t._v(t._s(del.name))]),t._v(" "),e("p",{staticClass:"body-1"},[t._v(t._s(del.value))])]):"textbox"==del.title?e(h.a,[e(m.a,{staticStyle:{padding:"4px"}},[del.name?e(m.b,[t._v(t._s(del.name))]):t._e(),t._v(" "),e(m.c,[t._v(t._s(del.value))])],1)],1):"image upload"==del.title?e("img",{staticStyle:{width:"100%"},attrs:{src:"".concat(t.$config.media_url,"/").concat(del.value)}}):"logo"==del.title?e("div",{style:"background:#fff url(".concat(t.$config.media_url,"/").concat(del.value,") no-repeat center center;min-height:80px;background-size:contain !important;")}):"Line"==del.title?e("hr"):t._e()],1)}))],2),t._v(" "),e("hr",{staticStyle:{"margin-top":"5px","margin-bottom":"5px"}}),t._v(" "),e("div",{staticStyle:{display:"flex","justify-content":"space-between","align-items":"center"}},[t.service&&t.service.time_location?e("div",[e(d.a,[t._v("mdi-clock-outline")]),t._v(" "),t.service.time_location.start?e("div",[t._v("\n              Work Start@\n              "+t._s(t.$luxon(t.service.time_location.start.time,"med"))+" "),e("br"),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://maps.google.com/?q=".concat(t.service.time_location.start.coordinates.latitude,",").concat(t.service.time_location.start.coordinates.longitude)}},[t._v("Start Location: Lat:"+t._s(t.service.time_location.start.coordinates.latitude)+" Long:"+t._s(t.service.time_location.start.coordinates.longitude))]),e("br"),t._v(" "),e(d.a,[t._v("mdi-clock")])],1):t._e(),t._v(" "),t.service.time_location.end?e("div",[t._v("\n              Work Stop@ "+t._s(t.$luxon(t.service.time_location.end.time,"med"))+" "),e("br"),t._v(" "),e("a",{attrs:{target:"_blank",href:"https://maps.google.com/?q=".concat(t.service.time_location.end.coordinates.latitude,",").concat(t.service.time_location.end.coordinates.longitude)}},[t._v(" Finish Location: Lat:"+t._s(t.service.time_location.end.coordinates.latitude)+" Long:"+t._s(t.service.time_location.end.coordinates.longitude))])]):t._e(),t._v(" "),e("div",[e("strong",[t._v("Activity Remarks:")]),t._v(" "+t._s(t.service.remarks))])],1):t._e(),t._v(" "),t.show.sign?e("div",{staticStyle:{display:"flex","flex-direction":"column"}},[t.service.signature?e("img",{staticStyle:{width:"100px",height:"100px","object-fit":"contain"},attrs:{src:"".concat(t.$config.media_url,"/").concat(t.service.signature)}}):t._e(),t._v("\n            Customer Signature\n          ")]):t._e()])])],1)],1)])}),[],!1,null,"3d526364",null);e.default=component.exports},528:function(t,e,n){"use strict";var o=n(4),r=n(126).findIndex,c=n(125),l="findIndex",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},529:function(t,e,n){"use strict";var o=n(1),r=n(2);e.a=o.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.j}}})},530:function(t,e,n){"use strict";n(231);var o=n(232);e.a=Object(o.a)("layout")},556:function(t,e,n){var content=n(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("4a846a79",content,!0,{sourceMap:!1})},557:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),o.locals={},t.exports=o},558:function(t,e,n){"use strict";n(5),n(86),n(14);var o=n(79),r=n(148),c=n(1).default.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),l=n(529),d=n(16);function v(t){t.preventDefault()}e.a=Object(d.a)(o.a,c,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:v},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:v},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},562:function(t,e,n){var content=n(563);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("7bea2bf0",content,!0,{sourceMap:!1})},563:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),o.locals={},t.exports=o},589:function(t,e,n){"use strict";n(15),n(10),n(14),n(21),n(13),n(22);var o=n(98),r=n(3),c=(n(5),n(86),n(562),n(556),n(68)),l=n(79),d=n(558),v=["title"];function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return m(m({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,v));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",m(m({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},787:function(t,e,n){var content=n(897);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("aedef8a4",content,!0,{sourceMap:!1})},896:function(t,e,n){"use strict";n(787)},897:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,".cmd6[data-v-3d526364]{width:49%}.cmd12[data-v-3d526364]{width:100%!important}table[data-v-3d526364]{border-collapse:collapse;box-shadow:0 0 2px rgba(0,0,0,.15);font-family:sans-serif;font-size:.9em;margin:25px 0}th[data-v-3d526364],thead tr[data-v-3d526364]{border:1px solid #000}th[data-v-3d526364]{padding:8px 12px}tbody tr td[data-v-3d526364]{border:1px solid #000}tbody tr[data-v-3d526364]:nth-of-type(2n){background-color:#f3f3f3}tbody tr[data-v-3d526364]:last-of-type{border-bottom:2px solid var(--v-primary-base)}p[data-v-3d526364]{margin-bottom:5px}",""]),o.locals={},t.exports=o}}]);