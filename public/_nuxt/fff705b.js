(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{1052:function(e,t,n){"use strict";n.r(t);var r=n(3);n(6),n(33),n(34),n(43),n(55),n(42),n(28),n(57),n(15),n(11),n(14),n(23),n(13),n(24);function o(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={layout:"appDesktop",data:function(){return{loading:!1,viewHistory:!1,rescheduler:!1,statusItems:["Ticket Raised","Assigned","Work In Progress","Rescheduled","Validation","Closed"],expected_date:"",service_type:null,ticket_status:"",assigned_to:null,assigned_name:"",customer_id:null,customer_name:"",product_id:null,product_name:"",work_status:"",remarks:"",requirements:[],initial_inspection:"",form_id:null,type:"",zone:{}}},components:{userAssign:function(){return n.e(21).then(n.bind(null,797))},productAssign:function(){return n.e(20).then(n.bind(null,991))},history:function(){return n.e(114).then(n.bind(null,1077))},ZoneAssign:n(744).a},mounted:function(){this.$route.query.id?this.fetchService():this.ticket_status="Ticket Raised"},computed:{role:function(){var e,t,n,r,o;return null!==(e=this.$auth.user)&&void 0!==e&&null!==(t=e.role)&&void 0!==t&&t.includes("super")?"super":(null===(n=this.$auth.user)||void 0===n||null===(r=n.company)||void 0===r||null===(o=r.pivot)||void 0===o?void 0:o.role)||""}},methods:{closeTicket:function(){window.confirm('Warning! You are marking ticket as "closed"! Do you want to continue?')&&(this.ticket_status="closed",this.work_status="closed",this.updateService())},assignUser:function(e){e&&(this.assigned_to=e.id,this.assigned_name=e.name,"Ticket Raised"==this.ticket_status&&(this.ticket_status="Assigned"))},updateTicketStatus:function(){this.$route.query.id&&(this.ticket_status="Rescheduled")},assignCustomer:function(e){var t;e&&(this.customer_id=e.id,this.customer_name=e.name),null===(t=this.$refs.zoneAssign)||void 0===t||t.searchZones()},assignProduct:function(e){e&&(this.product_id=e.id,this.product_name=e.name)},fetchService:function(){var e=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(t){var n,r,o,c,l,d,h;e.name=t.data.name,e.status=t.data.status,e.expected_date=t.data.expected_date,e.type=t.data.type,e.service_type=t.data.service_type,e.customer_id=null===(n=t.data.customer)||void 0===n?void 0:n.id,e.customer_name=null===(r=t.data.customer)||void 0===r?void 0:r.name,e.assigned_to=null===(o=t.data.assignee)||void 0===o?void 0:o.id,e.assigned_name=null===(c=t.data.assignee)||void 0===c?void 0:c.name,e.product_id=null===(l=t.data.product)||void 0===l?void 0:l.id,e.product_name=null===(d=t.data.product)||void 0===d?void 0:d.name,e.work_status=t.data.work_status,e.remarks=t.data.remarks,e.requirements=t.data.requirements||[],e.initial_inspection=t.data.initial_inspection,e.ticket_status=t.data.ticket_status,e.form_id=null===(h=t.data.form)||void 0===h?void 0:h.id,e.zone=t.data.zone}))},updateService:function(){var e=this;if(this.customer_id)if(this.product_id)if(this.type){var t=this.$route.query.id||null;this.$axios.put("auth/services/"+t,{name:this.name,s_desc:this.s_desc,l_desc:this.l_desc,type:this.type,service_type:this.service_type,expected_date:this.expected_date,status:this.status,product_id:this.product_id,assigned_to:this.assigned_to,customer_id:this.customer_id,work_status:this.work_status,remarks:this.remarks,requirements:this.requirements,initial_inspection:this.initial_inspection,ticket_status:this.ticket_status,zone:this.zone}).then((function(t){e.$toast.success("Service Saved",{icon:"mdi-check-circle"}),e.$route.query.id||e.$router.replace({query:c(c({},e.$route.query),{},{id:t.data.id})}),e.rescheduler=!1}),(function(e){}))}else this.$toast.error("Please Assign Service Type");else this.$toast.error("Please Assign Product");else this.$toast.error("Please Assign Customer")}}},d=(n(878),n(27)),h=n(31),m=n.n(h),v=n(494),f=n(211),_=n(177),y=n(762),x=n(552),k=n(210),w=n(515),S=n(537),I=n(504),O=n(493),component=Object(d.a)(l,(function(){var e=this,t=this,n=t.$createElement,r=t._self._c||n;return r("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[r("v-card",{attrs:{"max-width":"700",width:"100%"}},[r("v-card-text",[r("div",{staticClass:"d-flex flex-row my-2"},[r("v-btn",{attrs:{small:"",color:"primary",to:"/app/services",outlined:""}},[r("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("h2",{staticClass:"black--text"},[t._v("Service Editor")])],1),t._v(" "),r("div",{staticClass:"statusBar px-1 my-2",staticStyle:{"max-width":"100%","overflow-x":"scroll"}},[r("div",{staticClass:"ma-2 row align-center",staticStyle:{width:"680px","overflow-x":"scroll"}},t._l(t.statusItems,(function(e,n){return r("v-card",{key:n,staticClass:"col font-weight-bold text-center",class:t.statusItems&&t.statusItems.indexOf(t.work_status)>=n?"primary white--text":"info",attrs:{flat:"",tile:""}},[r("div",[t._v(t._s(e))])])})),1)]),t._v(" "),r("userAssign",{attrs:{id:t.assigned_to,name:t.assigned_name,permissions:"Employee"},on:{assignTo:function(e){return t.assignUser(e)}}}),t._v(" "),r("userAssign",{attrs:{title:"Customer",id:t.customer_id,name:t.customer_name,permissions:"Customer"},on:{assignTo:function(e){return t.assignCustomer(e)}}}),t._v(" "),t.customer_id?r("zoneAssign",{ref:"zoneAssign",attrs:{id:t.customer_id,title:"Zone"},model:{value:t.zone,callback:function(e){t.zone=e},expression:"zone"}}):t._e(),t._v(" "),r("productAssign",{attrs:{id:t.product_id,name:t.product_name,title:"Product"},on:{assignTo:function(t){e.product_id=t.id,e.product_name=t.name}}}),t._v("\n      Expected Date: "+t._s(t.expected_date?t.$luxon(t.expected_date):"Not Set")+"\n      "),r("v-text-field",{attrs:{outlined:"",label:"Initial Remarks"},model:{value:t.initial_inspection,callback:function(e){t.initial_inspection=e},expression:"initial_inspection"}}),t._v(" "),r("v-combobox",{attrs:{outlined:"",items:["New Installation","Old Installation","Replacement","Repair","Delivery"],label:"Service Type"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}}),t._v(" "),r("v-select",{attrs:{outlined:"",items:["Installation","Replacement","Repair"],label:"Service Form","prepend-inner-icon":"mdi-form-select"},model:{value:t.service_type,callback:function(e){t.service_type=e},expression:"service_type"}}),t._v(" "),r("v-text-field",{attrs:{filled:"",readonly:"",disabled:"Subadmin"==t.role,items:t.statusItems,label:"Ticket Status"},model:{value:t.ticket_status,callback:function(e){t.ticket_status=e},expression:"ticket_status"}}),t._v(" "),r("v-select",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{outlined:"",disabled:"Subadmin"==t.role,items:t.statusItems,label:"Work Status"},model:{value:t.work_status,callback:function(e){t.work_status=e},expression:"work_status"}}),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:"Subadmin"!=t.role,expression:"role!='Subadmin'"}]},[r("v-btn",{attrs:{color:"indigo",dark:""},on:{click:function(e){return t.closeTicket()}}},[t._v("Close Ticket")]),t._v(" "),r("v-icon",{attrs:{small:""}},[t._v("mdi-information-outline")]),t._v(" Marks Ticket as Closed\n        "),r("p"),t._v(" "),r("v-btn",{attrs:{color:"indigo",dark:""},on:{click:function(e){t.rescheduler=!0}}},[t._v("Reschedule Ticket")])],1)],1),t._v(" "),r("v-card-actions",[t.form_id?r("v-btn",{attrs:{outlined:"",to:"/app/services/forms?id="+t.$route.query.id,color:"primary"}},[t._v("View Form")]):t._e(),t._v(" "),t.$route.query.id?r("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(e){t.viewHistory=!0}}},[t._v("View Activity")]):t._e(),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit"},on:{click:function(e){return t.updateService()}}},[t._v("Save Service")])],1),t._v(" "),t.$route.query.id&&t.viewHistory?r("history",{attrs:{service_id:t.$route.query.id},model:{value:t.viewHistory,callback:function(e){t.viewHistory=e},expression:"viewHistory"}}):t._e()],1),t._v(" "),r("v-dialog",{attrs:{"max-width":"400"},model:{value:t.rescheduler,callback:function(e){t.rescheduler=e},expression:"rescheduler"}},[r("v-card",[r("v-card-title",[t._v("Reschedule Service")]),t._v(" "),r("v-card-text",[t._v("\n      Expected Date: "+t._s(t.expected_date?t.$luxon(t.expected_date):"Not Set")+"\n      "),r("v-text-field",{attrs:{filled:"",type:"date",label:t.product_id?"Reschedule":"Set Date"},on:{change:function(e){return t.updateTicketStatus()}},model:{value:t.expected_date,callback:function(e){t.expected_date=e},expression:"expected_date"}})],1),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"spl-btn",attrs:{color:"primary",large:"",loading:t.loading,type:"submit"},on:{click:function(e){return t.updateService()}}},[t._v("Save")]),t._v(" "),r("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(e){t.rescheduler=!1}}},[t._v("Cancel")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:v.a,VCard:f.a,VCardActions:_.a,VCardText:_.c,VCardTitle:_.d,VCombobox:y.a,VDialog:x.a,VIcon:k.a,VLayout:w.a,VSelect:S.a,VSpacer:I.a,VTextField:O.a})},744:function(e,t,n){"use strict";var r={props:{id:{default:null},value:{default:{}}},data:function(){return{createDialog:!1,assignee:{},zone_search:"",zones:[],loadingZones:!1,show1:!1}},watch:{zone_search:function(){this.searchZones()}},methods:{searchZones:function(){var e,t=this;(null===(e=this.zone_search)||void 0===e?void 0:e.length)<=2||(this.loadingZones=!0,this.$axios.get("/auth/users/".concat(this.id,"/zones"),{params:{name:this.zone_search,is:this.permissions}}).then((function(e){t.zones=e.data,t.loadingZones=!1}),(function(e){t.loadingZones=!1})))}}},o=n(27),c=n(31),l=n.n(c),d=n(555),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("Zone Search: "),n("b",[e._v(e._s(e.value.zone))]),e._v(" "+e._s(e.value.address)+" ")]),e._v(" "),n("div",{staticClass:"d-flex flex-row"},[n("v-autocomplete",{attrs:{dense:"",outlined:"",clearable:"",loading:e.loadingZones,"search-input":e.zone_search,label:"Search Zone","item-text":"zone","return-object":"","prepend-inner-icon":"mdi-magnify",items:e.zones},on:{focus:function(t){return e.searchZones()},input:function(t){t?e.$emit("input",t):e.$emit("input",{})},"update:searchInput":function(t){e.zone_search=t},"update:search-input":function(t){e.zone_search=t}}})],1)])}),[],!1,null,null,null);t.a=component.exports;l()(component,{VAutocomplete:d.a})},762:function(e,t,n){"use strict";n(15),n(11),n(14),n(23),n(13),n(24);var r=n(19),o=n(3),c=(n(6),n(86),n(178),n(227),n(49),n(42),n(43),n(55),n(512),n(329),n(536),n(537)),l=n(555),d=n(2);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}t.a=l.a.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return c.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(e){if(e&&this.multiple&&this.delimiters.length){var t=this.delimiters.find((function(t){return e.endsWith(t)}));null!=t&&(this.internalSearch=e.slice(0,e.length-t.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=l.a.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(e,t){var n=this,r=c.a.options.methods.genChipSelection.call(this,e,t);return this.multiple&&(r.componentOptions.listeners=m(m({},r.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=t,n.internalSearch=n.getText(e),n.selectedIndex=-1}})),r},onChipInput:function(e){c.a.options.methods.onChipInput.call(this,e),this.editingIndex=-1},onEnterDown:function(e){e.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.x.home,d.x.end].includes(t)||c.a.options.methods.onKeyDown.call(this,e),this.multiple&&t===d.x.left&&0===this.$refs.input.selectionStart?this.updateSelf():t===d.x.enter&&this.onEnterDown(e),this.changeSelectedIndex(t)},onTabDown:function(e){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return e.preventDefault(),e.stopPropagation(),this.updateTags();l.a.options.methods.onTabDown.call(this,e)},selectItem:function(e){this.editingIndex>-1?this.updateEditing():(l.a.options.methods.selectItem.call(this,e),this.internalSearch&&this.multiple&&this.getText(e).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(e){c.a.options.methods.setValue.call(this,void 0===e?this.internalSearch:e)},updateEditing:function(){var e=this,t=this.internalValue.slice(),n=this.selectedItems.findIndex((function(t){return e.getText(t)===e.internalSearch}));if(n>-1){var o="object"===Object(r.a)(t[n])?Object.assign({},t[n]):t[n];t.splice(n,1),t.push(o)}else t[this.editingIndex]=this.internalSearch;this.setValue(t),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var e=this,t=this.getMenuIndex();if(!(t<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(t){return e.internalSearch===e.getText(t)})),o=n>-1&&"object"===Object(r.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var c=this.internalValue.slice();c.splice(n,1),this.setValue(c)}if(t>-1)return this.internalSearch=null;this.selectItem(o),this.internalSearch=null}},onPaste:function(e){var t;if(this.multiple&&!this.searchIsDirty){var n=null==(t=e.clipboardData)?void 0:t.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(e.preventDefault(),c.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,l.a.options.methods.clearableCallback.call(this)}}})},771:function(e,t,n){var content=n(879);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("1a3e1424",content,!0,{sourceMap:!1})},878:function(e,t,n){"use strict";n(771)},879:function(e,t,n){var r=n(9)(!1);r.push([e.i,".statusBar{border:1px solid var(--v-primary-base)}",""]),e.exports=r}}]);