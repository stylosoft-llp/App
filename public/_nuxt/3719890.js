(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{1020:function(e,t,n){"use strict";n.r(t);var r=n(510),o=n(219),l=n(523),d=n(524),v=n(743),f=n(218),x=n(530),c=n(764),h=n(744),_=n(815),m=n(527),w=n(522),y=n(509),O=n(574),j=(n(25),{data:function(){return{name:"",email:"",phone:"",message:"",loading:!1}},methods:{submitQuery:function(){var e=this;this.loading=!0,this.$axios.post("inquiries",{name:this.name,email:this.email,phone:this.phone,message:this.message}).then((function(t){e.loading=!1,e.$toast.success("We've Received Your Response and We'll Contact You Shortly",{icon:"mdi-check-circle"})}),(function(t){e.loading=!1,e.$toast.error("An Error Occured",{icon:"mdi-information"})}))}}}),k=(n(834),n(26)),component=Object(k.a)(j,(function(){var e=this,t=e._self._c;return t(x.a,{staticStyle:{background:"url('/contact.jpeg')","min-height":"100vh","background-size":"cover","background-attachment":"fixed"}},[t(o.a,{staticClass:"contactBD",staticStyle:{"background-color":"#ffffffdd",margin:"0",width:"100%"}},[t(d.a,[t("h3",{staticClass:"heading3 font-weight-bold text-center my-3"},[e._v("\n        Contact Us\n      ")]),e._v(" "),t(w.a,[t(l.a,{attrs:{cols:"12",md:"6"}},[t(v.a,{ref:"form"},[t(y.a,{attrs:{outlined:"",label:"Name *"},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),e._v(" "),t(y.a,{attrs:{outlined:"",label:"E-Mail Address *"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),t(y.a,{attrs:{outlined:"",label:"Phone No. *",hint:"Phone number with country code"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),e._v(" "),t(O.a,{attrs:{outlined:"",name:"message",label:"Your Message",hint:"Provide your brief message"},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}}),e._v(" "),t(r.a,{staticClass:"spl-btn",attrs:{color:"primary",loading:e.loading,block:"",large:""},on:{click:function(t){return t.stopPropagation(),e.submitQuery()}}},[e._v("Submit Now")]),e._v(" "),t("br")],1)],1),e._v(" "),t(l.a,{attrs:{md:"6",cols:"12"}},[t("p",{staticClass:"font-weight-bold my-2"},[e._v("Corporate Branch")]),e._v(" "),t(c.a,{attrs:{color:"#ffffffcc"}},[t(h.a,[t(_.a,[t(f.a,[e._v("mdi-gmail")])],1),e._v(" "),t(m.a,[t(m.b,[e._v("E-Mail")]),e._v(" "),t(m.c,[e._v("info@stylosoftllp.com")])],1)],1),e._v(" "),t(h.a,[t(_.a,[t(f.a,[e._v("mdi-map-marker")])],1),e._v(" "),t(m.a,[t(m.b,[e._v("Address")]),e._v(" "),t(m.c,[e._v("Stylosoft LLP, Jeedimetla, Hyderabad")])],1)],1),e._v(" "),t(h.a,[t(_.a,[t(f.a,[e._v("mdi-phone")])],1),e._v(" "),t(m.a,[t(m.b,[e._v("Phone")]),e._v(" "),t(m.c,[e._v("+91 980 981-9823")])],1)],1)],1),e._v(" "),t("iframe",{staticStyle:{border:"0",margin:"10px"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15218.83089426916!2d78.43761156977541!3d17.521460199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x478e6ef92a6ec910!2sStandard%20Group%20of%20Companies!5e0!3m2!1sen!2sin!4v1654933717821!5m2!1sen!2sin",width:"98%",height:"200",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},528:function(e,t,n){"use strict";var r=n(4),o=n(126).findIndex,l=n(125),d="findIndex",v=!0;d in[]&&Array(1)[d]((function(){v=!1})),r({target:"Array",proto:!0,forced:v},{findIndex:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),l(d)},529:function(e,t,n){"use strict";var r=n(1),o=n(2);t.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.j}}})},530:function(e,t,n){"use strict";n(231);var r=n(232);t.a=Object(r.a)("layout")},550:function(e,t,n){var content=n(551);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("3d8f5383",content,!0,{sourceMap:!1})},551:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),r.locals={},e.exports=r},574:function(e,t,n){"use strict";n(15),n(10),n(14),n(5),n(21),n(13),n(22);var r=n(3),o=(n(31),n(78),n(550),n(509)),l=n(16);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(l.a)(o.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null===(n=t.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},743:function(e,t,n){"use strict";var r=n(3),o=(n(42),n(53),n(183),n(14),n(5),n(13),n(78),n(182),n(15),n(10),n(21),n(22),n(16)),l=n(108),d=n(150);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=Object(o.a)(l.a,Object(d.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var e=this,t=function(input){return input.$watch("hasError",(function(t){e.$set(e.errorBag,input._uid,t)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(e.errorBag.hasOwnProperty(input._uid)||(n.valid=t(input)))})):n.valid=t(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout((function(){e.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var e=this.inputs.find((function(i){return i._uid===input._uid}));if(e){var t=this.watchers.find((function(i){return i._uid===e._uid}));t&&(t.valid(),t.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==e._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==e._uid})),this.$delete(this.errorBag,e._uid)}}},render:function(e){var t=this;return e("form",{staticClass:"v-form",attrs:f({novalidate:!0},this.attrs$),on:{submit:function(e){return t.$emit("submit",e)}}},this.$slots.default)}})},766:function(e,t,n){var content=n(835);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("f95b8606",content,!0,{sourceMap:!1})},834:function(e,t,n){"use strict";n(766)},835:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,".contactBD{-webkit-backdrop-filter:blur(5px);backdrop-filter:blur(5px);border:1px solid hsla(0,0%,100%,.25)}",""]),r.locals={},e.exports=r}}]);