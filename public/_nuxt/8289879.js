(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{489:function(t,e,n){var content=n(490);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("2e2bc7da",content,!0,{sourceMap:!1})},490:function(t,e,n){(e=n(6)(!1)).push([t.i,'.theme--light.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:rgba(0,0,0,.26)!important}.theme--dark.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:hsla(0,0%,100%,.3)!important}.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls .v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=e},499:function(t,e,n){"use strict";n(49),n(59),n(16),n(74);var o=n(71),r=n(78),c=n(2).a.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),l=n(482),d=n(3);function v(t){t.preventDefault()}e.a=Object(d.a)(o.a,c,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:v},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:v},ref:"input"})},onBlur:function(){this.isFocused=!1},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(){this.isFocused=!0},onKeydown:function(t){}}})},555:function(t,e,n){var content=n(556);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(7).default)("beda1088",content,!0,{sourceMap:!1})},556:function(t,e,n){(e=n(6)(!1)).push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),t.exports=e},582:function(t,e,n){"use strict";n.r(e);n(65);var o=n(14),r={layout:"adminDesktop",data:function(){return{title:"",courier:{},newShipping:{},progress:[],loading:!1}},mounted:function(){this.$route.query.id&&this.fetchSingle(this.$route.query.id)},filters:{datetime:function(t){return new Date(t).toLocaleString({hour12:!0})}},methods:{fetchSingle:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e.loading=!0,n.next=3,e.$axios.get("auth/admin/couriers/"+t).then((function(n){e.courier=n.data,e.loading=!1,e.fetchProgress(t)}),(function(t){e.loading=!1,e.$toast.error("Couldn't Load. Please Try Again",{icon:"mdi-information"})}));case 3:case"end":return n.stop()}}),n)})))()},saveSingle:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.post("auth/admin/couriers/"+t.$route.query.id||!1,t.courier).then((function(e){t.loading=!1,t.$toast.success("Changes Saved",{icon:"mdi-check-circle"})}),(function(e){t.loading=!1,t.$toast.error("An Error Occured",{icon:"mdi-information"})}));case 3:case"end":return e.stop()}}),e)})))()},addShippingProgress:function(){this.progress||(this.progress=[]),this.progress.push(this.newShipping),this.newShipping={}},fetchProgress:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("auth/admin/couriers/"+t.$route.query.id+"/progress").then((function(e){t.progress=e.data.data,t.loading=!1}),(function(t){}));case 3:case"end":return e.stop()}}),e)})))()},saveProgress:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,t.$route.query.id){e.next=5;break}t.$toast.show("Save Shipping Details First",{icon:"mdi-information"}),e.next=7;break;case 5:return e.next=7,t.$axios.post("auth/admin/couriers/"+t.$route.query.id+"/progress",{data:t.progress}).then((function(e){t.$toast.success("Progress Saved",{icon:"mdi-check-circle"}),t.loading=!1}),(function(e){t.$toast.error("An Error Occured",{icon:"mdi-information"}),t.loading=!1}));case 7:case"end":return e.stop()}}),e)})))()}}},c=n(23),l=n(21),d=n.n(l),v=n(201),h=n(203),_=n(461),f=n(474),m=n(497),x=n(491),w=(n(140),n(141),n(1)),y=(n(489),n(555),n(499)),k=n(71),C=n(86),$=n(99),S=n(199),O=n(0);function V(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function P(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=y.a.extend({name:"v-switch",directives:{Touch:C.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return P(P({},k.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",P(P({},this.attrs),this.attrs$)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",P({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",P({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement($.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(S.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===O.x.left&&this.isActive||t.keyCode===O.x.right&&!this.isActive)&&this.onChange()}}}),D=n(447),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{container:"",row:""}},[n("v-col",{attrs:{md:"6"}},[n("v-card",{staticClass:"ma-2 container"},[n("h3",{staticClass:"my-2"},[t._v("Consigner")]),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consigner Name"},model:{value:t.courier.consigner_name,callback:function(e){t.$set(t.courier,"consigner_name",e)},expression:"courier.consigner_name"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consigner Email"},model:{value:t.courier.consigner_email,callback:function(e){t.$set(t.courier,"consigner_email",e)},expression:"courier.consigner_email"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consigner Phone1"},model:{value:t.courier.consigner_phone1,callback:function(e){t.$set(t.courier,"consigner_phone1",e)},expression:"courier.consigner_phone1"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consigner Phone2"},model:{value:t.courier.consigner_phone2,callback:function(e){t.$set(t.courier,"consigner_phone2",e)},expression:"courier.consigner_phone2"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consigner Address"},model:{value:t.courier.consigner_address,callback:function(e){t.$set(t.courier,"consigner_address",e)},expression:"courier.consigner_address"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consigner City"},model:{value:t.courier.consigner_city,callback:function(e){t.$set(t.courier,"consigner_city",e)},expression:"courier.consigner_city"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consigner Country"},model:{value:t.courier.consigner_country,callback:function(e){t.$set(t.courier,"consigner_country",e)},expression:"courier.consigner_country"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consigner Pincode"},model:{value:t.courier.consigner_pincode,callback:function(e){t.$set(t.courier,"consigner_pincode",e)},expression:"courier.consigner_pincode"}}),t._v(" "),n("h3",{staticClass:"my-2"},[t._v("Consignee")]),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consignee Name"},model:{value:t.courier.consignee_name,callback:function(e){t.$set(t.courier,"consignee_name",e)},expression:"courier.consignee_name"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consignee Email"},model:{value:t.courier.consignee_email,callback:function(e){t.$set(t.courier,"consignee_email",e)},expression:"courier.consignee_email"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consignee Phone1"},model:{value:t.courier.consignee_phone1,callback:function(e){t.$set(t.courier,"consignee_phone1",e)},expression:"courier.consignee_phone1"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consignee Phone2"},model:{value:t.courier.consignee_phone2,callback:function(e){t.$set(t.courier,"consignee_phone2",e)},expression:"courier.consignee_phone2"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consignee Address"},model:{value:t.courier.consignee_address,callback:function(e){t.$set(t.courier,"consignee_address",e)},expression:"courier.consignee_address"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consignee City"},model:{value:t.courier.consignee_city,callback:function(e){t.$set(t.courier,"consignee_city",e)},expression:"courier.consignee_city"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consignee Country"},model:{value:t.courier.consignee_country,callback:function(e){t.$set(t.courier,"consignee_country",e)},expression:"courier.consignee_country"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Consignee Pincode"},model:{value:t.courier.consignee_pincode,callback:function(e){t.$set(t.courier,"consignee_pincode",e)},expression:"courier.consignee_pincode"}}),t._v(" "),n("h3",{staticClass:"my-2"},[t._v("Shipping Details")]),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Origin"},model:{value:t.courier.origin,callback:function(e){t.$set(t.courier,"origin",e)},expression:"courier.origin"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Destination"},model:{value:t.courier.destination,callback:function(e){t.$set(t.courier,"destination",e)},expression:"courier.destination"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Weight"},model:{value:t.courier.weight,callback:function(e){t.$set(t.courier,"weight",e)},expression:"courier.weight"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Quantity"},model:{value:t.courier.quantity,callback:function(e){t.$set(t.courier,"quantity",e)},expression:"courier.quantity"}}),t._v(" "),n("v-switch",{attrs:{outlined:"",dense:"",label:"Dox"},model:{value:t.courier.dox,callback:function(e){t.$set(t.courier,"dox",e)},expression:"courier.dox"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Xps"},model:{value:t.courier.xps,callback:function(e){t.$set(t.courier,"xps",e)},expression:"courier.xps"}}),t._v(" "),n("v-select",{attrs:{items:["Home","Office"],outlined:"",dense:"",label:"Pickup"},model:{value:t.courier.pickup,callback:function(e){t.$set(t.courier,"pickup",e)},expression:"courier.pickup"}}),t._v(" "),n("div",{staticClass:"d-flex flex-row"},[n("v-text-field",{staticClass:"mr-1",attrs:{outlined:"",dense:"",label:"Wide"},model:{value:t.courier.wide,callback:function(e){t.$set(t.courier,"wide",e)},expression:"courier.wide"}}),t._v(" "),n("v-text-field",{staticClass:"mr-1",attrs:{outlined:"",dense:"",label:"Length"},model:{value:t.courier.length,callback:function(e){t.$set(t.courier,"length",e)},expression:"courier.length"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Height"},model:{value:t.courier.height,callback:function(e){t.$set(t.courier,"height",e)},expression:"courier.height"}})],1),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Tracking Link"},model:{value:t.courier.tracking_link,callback:function(e){t.$set(t.courier,"tracking_link",e)},expression:"courier.tracking_link"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",label:"Forwarding No"},model:{value:t.courier.forwarding_no,callback:function(e){t.$set(t.courier,"forwarding_no",e)},expression:"courier.forwarding_no"}}),t._v(" "),n("v-select",{attrs:{items:["New","Preparing","Dispatching","Out for Delivery","Arriving","Shipped"],outlined:"",dense:"",label:"Status"},model:{value:t.courier.status,callback:function(e){t.$set(t.courier,"status",e)},expression:"courier.status"}}),t._v(" "),n("v-text-field",{attrs:{outlined:"",dense:"",type:"datetime-local",label:"Delivered On"},model:{value:t.courier.delivered_on,callback:function(e){t.$set(t.courier,"delivered_on",e)},expression:"courier.delivered_on"}}),t._v(" "),n("v-btn",{attrs:{loading:t.loading,color:"primary"},on:{click:function(e){return t.saveSingle()}}},[t._v("SUBMIT")])],1)],1),t._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-card",{staticClass:"ma-2 container"},[n("h3",{staticClass:"my-2"},[t._v("Shipping Progress")]),t._v(" "),n("v-simple-table",{scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("Date Time")]),t._v(" "),n("th",[t._v("Location")]),t._v(" "),n("th",[t._v("Activity")])])]),t._v(" "),n("tbody",t._l(t.progress,(function(p,e){return n("tr",{key:e},[n("td",[t._v(t._s(t._f("datetime")(p.date)))]),t._v(" "),n("td",[t._v(t._s(p.location))]),t._v(" "),n("td",[t._v(t._s(p.activity))])])})),0)]},proxy:!0}])}),t._v(" "),n("p",{staticClass:"body-2 my-2 font-weight-bold"},[t._v("Add Shipping")]),t._v(" "),n("div",{staticClass:"d-flex flex-row"},[n("v-text-field",{staticClass:"mr-1",attrs:{dense:"",outlined:"",type:"datetime-local",label:"date"},model:{value:t.newShipping.date,callback:function(e){t.$set(t.newShipping,"date",e)},expression:"newShipping.date"}}),t._v(" "),n("v-text-field",{staticClass:"mr-1",attrs:{dense:"",outlined:"",label:"Location"},model:{value:t.newShipping.location,callback:function(e){t.$set(t.newShipping,"location",e)},expression:"newShipping.location"}})],1),t._v(" "),n("v-text-field",{attrs:{dense:"",outlined:"",label:"Activity"},model:{value:t.newShipping.activity,callback:function(e){t.$set(t.newShipping,"activity",e)},expression:"newShipping.activity"}}),t._v(" "),n("v-btn",{attrs:{loading:t.loading,color:"secondary"},on:{click:function(e){return t.addShippingProgress()}}},[t._v("Add")]),t._v(" "),n("v-btn",{attrs:{loading:t.loading,color:"primary"},on:{click:function(e){return t.saveProgress()}}},[t._v("Save Changes")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:h.a,VCol:_.a,VLayout:f.a,VSelect:m.a,VSimpleTable:x.a,VSwitch:A,VTextField:D.a})}}]);