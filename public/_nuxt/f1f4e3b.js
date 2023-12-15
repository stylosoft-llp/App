(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{1039:function(e,t,n){"use strict";n.r(t);var r=n(3);n(6),n(32),n(34),n(42),n(28),n(55),n(17),n(11),n(13),n(23),n(16),n(24);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var d={layout:"appDesktop",data:function(){return{loading:!1,viewHistory:!1,statusItems:["Ticket Raised","Assigned","Work In Progress","Validation","Closed"],expected_date:"",service_type:null,ticket_status:"",assigned_to:null,assigned_name:"",customer_id:null,customer_name:"",product_id:null,product_name:"",work_status:"",remarks:"",requirements:[],initial_inspection:""}},components:{userAssign:function(){return n.e(12).then(n.bind(null,979))},productAssign:function(){return n.e(6).then(n.bind(null,1061))},history:function(){return n.e(94).then(n.bind(null,1063))}},mounted:function(){this.$route.query.id&&this.fetchService()},methods:{assignUser:function(e){e&&(this.assigned_to=e.id,this.assigned_name=e.name)},assignCustomer:function(e){e&&(this.customer_id=e.id,this.customer_name=e.name)},assignProduct:function(e){e&&(this.product_id=e.id,this.product_name=e.name)},fetchService:function(){var e=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(t){var n,r,l,o,d,v;e.name=t.data.name,e.status=t.data.status,e.expected_date=t.data.expected_date,e.service_type=t.data.service_type,e.customer_id=null===(n=t.data.customer)||void 0===n?void 0:n.id,e.customer_name=null===(r=t.data.customer)||void 0===r?void 0:r.name,e.assigned_to=null===(l=t.data.assignee)||void 0===l?void 0:l.id,e.assigned_name=null===(o=t.data.assignee)||void 0===o?void 0:o.name,e.product_id=null===(d=t.data.product)||void 0===d?void 0:d.id,e.product_name=null===(v=t.data.product)||void 0===v?void 0:v.name,e.work_status=t.data.work_status,e.remarks=t.data.remarks,e.requirements=t.data.requirements,e.initial_inspection=t.data.initial_inspection,e.ticket_status=t.data.ticket_status}))},updateService:function(){var e=this,t=this.$route.query.id||null;this.$axios.put("auth/services/"+t,{name:this.name,s_desc:this.s_desc,l_desc:this.l_desc,service_type:this.service_type,expected_date:this.expected_date,status:this.status,product_id:this.product_id,assigned_to:this.assigned_to,customer_id:this.customer_id,work_status:this.work_status,remarks:this.remarks,requirements:this.requirements,initial_inspection:this.initial_inspection,ticket_status:this.ticket_status}).then((function(t){e.$toast.success("Service Saved",{icon:"mdi-check-circle"}),e.$route.query.id||e.$router.replace({query:o(o({},e.$route.query),{},{id:t.data.id})})}),(function(e){}))}}},v=(n(866),n(27)),c=n(31),x=n.n(c),f=n(491),_=n(211),m=n(177),h=n(210),y=n(510),w=n(552),k=n(501),O=n(490),j=n(546),component=Object(v.a)(d,(function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[r("v-card",{attrs:{"max-width":"700",width:"100%"}},[r("v-card-text",[r("div",{staticClass:"d-flex flex-row my-2"},[r("v-btn",{attrs:{small:"",color:"primary",to:"/app/services",outlined:""}},[r("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("h2",{staticClass:"black--text"},[t._v("Service Editor")])],1),t._v(" "),r("div",{staticClass:"statusBar px-1 my-2",staticStyle:{"max-width":"100%","overflow-x":"scroll"}},[r("div",{staticClass:"ma-2 row align-center",staticStyle:{width:"680px","overflow-x":"scroll"}},t._l(t.statusItems,(function(e,n){return r("v-card",{key:n,staticClass:"col font-weight-bold text-center",class:t.statusItems&&t.statusItems.indexOf(t.work_status)>=n?"primary white--text":"info",attrs:{flat:"",tile:""}},[r("div",[t._v("\n\t\t\t\t\t"+t._s(e)+"\n\t\t\t\t")])])})),1)]),t._v(" "),r("userAssign",{attrs:{id:t.assigned_to,name:t.assigned_name,permissions:"executive"},on:{assignTo:function(e){return t.assignUser(e)}}}),t._v(" "),r("userAssign",{attrs:{title:"Customer",id:t.customer_id,name:t.customer_name,permissions:"customer"},on:{assignTo:function(e){return t.assignCustomer(e)}}}),t._v(" "),r("productAssign",{attrs:{id:t.product_id,name:t.product_name,title:"Product"},on:{assignTo:function(t){e.product_id=t.id,e.product_name=t.name}}}),t._v("\n\t\t\tExpected Date: "+t._s(t.expected_date?t.$luxon(t.expected_date):"Not Set")+"\n\t\t"),r("v-text-field",{attrs:{filled:"",type:"date",label:t.product_id?"Reschedule":"Set Date"},model:{value:t.expected_date,callback:function(e){t.expected_date=e},expression:"expected_date"}}),t._v(" "),r("v-text-field",{attrs:{outlined:"",label:"Initial Inspection"},model:{value:t.initial_inspection,callback:function(e){t.initial_inspection=e},expression:"initial_inspection"}}),t._v(" "),r("v-select",{attrs:{outlined:"",items:["Installation","Replacement","Repair"],label:"Service Type"},model:{value:t.service_type,callback:function(e){t.service_type=e},expression:"service_type"}}),t._v(" "),r("v-select",{attrs:{outlined:"",items:t.statusItems,label:"Ticket Status"},model:{value:t.ticket_status,callback:function(e){t.ticket_status=e},expression:"ticket_status"}}),t._v(" "),r("v-select",{attrs:{outlined:"",items:t.statusItems,label:"Work Status"},model:{value:t.work_status,callback:function(e){t.work_status=e},expression:"work_status"}}),t._v(" "),r("p",[t._v("Requirements "),r("v-btn",{attrs:{outlined:"",small:""},on:{click:function(e){return t.requirements.push("")}}},[t._v("Add")])],1),t._v(" "),t._l(t.requirements,(function(e,n){return r("v-text-field",{key:n,attrs:{solo:"",dense:"",placeholder:"requirement "+(n+1),"append-icon":"mdi-delete"},on:{"click:append":function(e){return t.requirements.splice(n,1)}},model:{value:t.requirements[n],callback:function(e){t.$set(t.requirements,n,e)},expression:"requirements[reqi]"}})})),t._v(" "),r("v-textarea",{attrs:{outlined:"",rows:"3",label:"Remarks"},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],2),t._v(" "),r("v-card-actions",[r("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(e){t.viewHistory=!0}}},[t._v("View Activity")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit"},on:{click:function(e){return t.updateService()}}},[t._v(" Save Service")])],1),t._v(" "),t.$route.query.id&&t.viewHistory?r("history",{attrs:{service_id:t.$route.query.id},model:{value:t.viewHistory,callback:function(e){t.viewHistory=e},expression:"viewHistory"}}):t._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;x()(component,{VBtn:f.a,VCard:_.a,VCardActions:m.a,VCardText:m.c,VIcon:h.a,VLayout:y.a,VSelect:w.a,VSpacer:k.a,VTextField:O.a,VTextarea:j.a})},509:function(e,t,n){"use strict";var r=n(1),l=n(2);t.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:l.j}}})},510:function(e,t,n){"use strict";n(221);var r=n(222);t.a=Object(r.a)("layout")},517:function(e,t,n){var content=n(518);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("5c8fbe94",content,!0,{sourceMap:!1})},518:function(e,t,n){var r=n(9)(!1);r.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=r},546:function(e,t,n){"use strict";n(17),n(11),n(13),n(6),n(23),n(16),n(24);var r=n(3),l=(n(35),n(79),n(517),n(490)),o=n(14);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(o.a)(l.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},l.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){l.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},753:function(e,t,n){var content=n(867);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("1a3e1424",content,!0,{sourceMap:!1})},866:function(e,t,n){"use strict";n(753)},867:function(e,t,n){var r=n(9)(!1);r.push([e.i,".statusBar{border:1px solid var(--v-primary-base)}",""]),e.exports=r}}]);