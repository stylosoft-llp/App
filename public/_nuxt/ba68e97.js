(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{1077:function(e,t,n){"use strict";n.r(t);var r=n(510),l=n(221),o=n(124),d=n(220),v=n(530),c=n(549),x=n(520),f=n(509),_=n(575),m=(n(25),n(342),n(3));n(5),n(33),n(35),n(30),n(49),n(15),n(10),n(14),n(21),n(13),n(22);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={layout:"appDesktop",data:function(){return{loading:!1,statusItems:["Ticket Raised","Assigned","In Progress","Validation","Closed"],name:"",expected_date:"",service_type:null,ticket_status:"",assigned_to:null,assigned_name:"",customer_id:null,customer_name:"",product_id:null,product_name:"",work_status:"",remarks:"",requirements:[],initial_inspection:""}},components:{userAssign:function(){return n.e(104).then(n.bind(null,813))},productAssign:function(){return n.e(6).then(n.bind(null,1009))}},mounted:function(){this.$route.query.id&&this.fetchService()},methods:{assignUser:function(e){e&&(this.assigned_to=e.id,this.assigned_name=e.name)},assignCustomer:function(e){e&&(this.customer_id=e.id,this.customer_name=e.name)},assignProduct:function(e){e&&(this.product_id=e.id,this.product_name=e.name)},fetchService:function(){var e=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(t){var n,r,l,o,d,v;e.name=t.data.name,e.status=t.data.status,e.expected_date=t.data.expected_date,e.service_type=t.data.service_type,e.customer_id=null===(n=t.data.customer)||void 0===n?void 0:n.id,e.customer_name=null===(r=t.data.customer)||void 0===r?void 0:r.name,e.assigned_to=null===(l=t.data.assignee)||void 0===l?void 0:l.id,e.assigned_name=null===(o=t.data.assignee)||void 0===o?void 0:o.name,e.product_id=null===(d=t.data.product)||void 0===d?void 0:d.id,e.product_name=null===(v=t.data.product)||void 0===v?void 0:v.name,e.work_status=t.data.work_status,e.remarks=t.data.remarks,e.requirements=t.data.requirements,e.initial_inspection=t.data.initial_inspection,e.ticket_status=t.data.ticket_status}))},updateService:function(){var e=this,t=this.$route.query.id||null;this.$axios.put("auth/services/"+t,{name:this.name,s_desc:this.s_desc,l_desc:this.l_desc,service_type:this.service_type,expected_date:this.expected_date,status:this.status,product_id:this.product_id,assigned_to:this.assigned_to,customer_id:this.customer_id,work_status:this.work_status,remarks:this.remarks,requirements:this.requirements,initial_inspection:this.initial_inspection,ticket_status:this.ticket_status}).then((function(t){e.$toast.success("Service Saved",{icon:"mdi-check-circle"}),e.$route.query.id||e.$router.replace({query:y(y({},e.$route.query),{},{id:t.data.id})})}),(function(e){}))}}},k=(n(900),n(26)),component=Object(k.a)(w,(function(){var e=this,t=this,n=t._self._c;return n(v.a,{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[n(l.a,{attrs:{"max-width":"700",width:"100%"}},[n(o.c,[n("div",{staticClass:"d-flex flex-row my-2"},[n(r.a,{attrs:{small:"",color:"primary",to:"/app/services",outlined:""}},[n(d.a,[t._v("mdi-arrow-left")])],1),t._v(" "),n(x.a),t._v(" "),n("h2",{staticClass:"black--text"},[t._v("Service Editor")])],1),t._v(" "),n("div",{staticClass:"statusBar my-2 row align-center"},t._l(t.statusItems,(function(e,r){return n(l.a,{key:r,staticClass:"col font-weight-bold text-center",class:t.statusItems&&t.statusItems.indexOf(t.ticket_status)>=r?"primary white--text":"info",attrs:{flat:"",tile:""}},[n("div",[t._v("\r\n\t\t\t\t\t"+t._s(e)+"\r\n\t\t\t\t")])])})),1),t._v(" "),n(f.a,{attrs:{outlined:"",dense:"",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("userAssign",{attrs:{id:t.assigned_to,name:t.assigned_name,permissions:"executive"},on:{assignTo:function(e){return t.assignUser(e)}}}),t._v(" "),n("userAssign",{attrs:{title:"Customer",id:t.customer_id,name:t.customer_name,permissions:"customer"},on:{assignTo:function(e){return t.assignCustomer(e)}}}),t._v(" "),n("productAssign",{attrs:{id:t.product_id,name:t.product_name,title:"Product"},on:{assignTo:function(t){e.product_id=t.id,e.product_name=t.name}}}),t._v(" "),n(f.a,{attrs:{filled:"",type:"date",label:"Expected Date"},model:{value:t.expected_date,callback:function(e){t.expected_date=e},expression:"expected_date"}}),t._v(" "),n(f.a,{attrs:{outlined:"",label:"Initial Inspection"},model:{value:t.initial_inspection,callback:function(e){t.initial_inspection=e},expression:"initial_inspection"}}),t._v(" "),n(c.a,{attrs:{outlined:"",items:["Installation","Replacement","Repair"],label:"Service Type"},model:{value:t.service_type,callback:function(e){t.service_type=e},expression:"service_type"}}),t._v(" "),n(c.a,{attrs:{outlined:"",items:t.statusItems,label:"Ticket Status"},model:{value:t.ticket_status,callback:function(e){t.ticket_status=e},expression:"ticket_status"}}),t._v(" "),n(c.a,{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{outlined:"",items:t.statusItems,label:"Work Status"},model:{value:t.work_status,callback:function(e){t.work_status=e},expression:"work_status"}}),t._v(" "),n("p",[t._v("Requirements "),n(r.a,{attrs:{outlined:"",small:""},on:{click:function(e){return t.requirements.push("")}}},[t._v("Add")])],1),t._v(" "),t._l(t.requirements,(function(e,r){return n(f.a,{key:r,attrs:{solo:"",dense:"",placeholder:"requirement ".concat(r+1),"append-icon":"mdi-delete"},on:{"click:append":function(e){return t.requirements.splice(r,1)}},model:{value:t.requirements[r],callback:function(e){t.$set(t.requirements,r,e)},expression:"requirements[reqi]"}})})),t._v(" "),n(_.a,{attrs:{outlined:"",rows:"3",label:"Remarks"},model:{value:t.remarks,callback:function(e){t.remarks=e},expression:"remarks"}})],2),t._v(" "),n(o.a,[n(r.a,{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit",block:""},on:{click:function(e){return t.updateService()}}},[t._v(" Save Service")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports},528:function(e,t,n){"use strict";var r=n(4),l=n(127).findIndex,o=n(125),d="findIndex",v=!0;d in[]&&Array(1)[d]((function(){v=!1})),r({target:"Array",proto:!0,forced:v},{findIndex:function(e){return l(this,e,arguments.length>1?arguments[1]:void 0)}}),o(d)},529:function(e,t,n){"use strict";var r=n(1),l=n(2);t.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:l.j}}})},530:function(e,t,n){"use strict";n(232);var r=n(233);t.a=Object(r.a)("layout")},531:function(e,t,n){"use strict";var r=n(34),l=n(125),o=n(55),d=n(62),v=n(103);r&&(v(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=o(this),t=d(e);return 0==t?void 0:e[t-1]},set:function(e){var t=o(this),n=d(t);return t[0==n?0:n-1]=e}}),l("lastItem"))},551:function(e,t,n){var content=n(552);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("c54b7bb4",content,!0,{sourceMap:!1})},552:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{align-self:start;padding-top:2px}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),r.locals={},e.exports=r},575:function(e,t,n){"use strict";n(15),n(10),n(14),n(5),n(21),n(13),n(22);var r=n(3),l=(n(31),n(79),n(551),n(509)),o=n(16);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(o.a)(l.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},l.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null===(n=t.$refs.input)||void 0===n||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){l.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},789:function(e,t,n){var content=n(901);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("44eb3b2b",content,!0,{sourceMap:!1})},900:function(e,t,n){"use strict";n(789)},901:function(e,t,n){var r=n(8)((function(i){return i[1]}));r.push([e.i,".statusBar{border:1px solid var(--v-primary-base)}",""]),r.locals={},e.exports=r}}]);