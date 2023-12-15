(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{1048:function(t,e,n){"use strict";n.r(e);var r=n(3);n(6),n(33),n(34),n(54),n(69),n(42),n(28),n(56),n(17),n(11),n(13),n(23),n(16),n(24);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var c={layout:"appDesktop",data:function(){return{loading:!1,viewHistory:!1,statusItems:["Ticket Raised","Assigned","Work In Progress","Rescheduled","Validation","Closed"],expected_date:"",service_type:null,ticket_status:"",assigned_to:null,assigned_name:"",customer_id:null,customer_name:"",product_id:null,product_name:"",work_status:"",remarks:"",requirements:[],initial_inspection:"",form_id:null,type:""}},components:{userAssign:function(){return n.e(104).then(n.bind(null,793))},productAssign:function(){return n.e(113).then(n.bind(null,987))},history:function(){return n.e(103).then(n.bind(null,1073))}},mounted:function(){this.$route.query.id?this.fetchService():this.ticket_status="Ticket Raised"},computed:{role:function(){var t,e,n,r;return null!==(t=this.$auth.user)&&void 0!==t&&t.role.includes("super")?"super":(null===(e=this.$auth.user)||void 0===e||null===(n=e.company)||void 0===n||null===(r=n.pivot)||void 0===r?void 0:r.role)||""}},methods:{assignUser:function(t){t&&(this.assigned_to=t.id,this.assigned_name=t.name,"Ticket Raised"==this.ticket_status&&(this.ticket_status="Assigned"))},updateTicketStatus:function(){this.$route.query.id&&(this.ticket_status="Rescheduled")},assignCustomer:function(t){t&&(this.customer_id=t.id,this.customer_name=t.name)},assignProduct:function(t){t&&(this.product_id=t.id,this.product_name=t.name)},fetchService:function(){var t=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(e){var n,r,o,l,c,d,h;t.name=e.data.name,t.status=e.data.status,t.expected_date=e.data.expected_date,t.type=e.data.type,t.service_type=e.data.service_type,t.customer_id=null===(n=e.data.customer)||void 0===n?void 0:n.id,t.customer_name=null===(r=e.data.customer)||void 0===r?void 0:r.name,t.assigned_to=null===(o=e.data.assignee)||void 0===o?void 0:o.id,t.assigned_name=null===(l=e.data.assignee)||void 0===l?void 0:l.name,t.product_id=null===(c=e.data.product)||void 0===c?void 0:c.id,t.product_name=null===(d=e.data.product)||void 0===d?void 0:d.name,t.work_status=e.data.work_status,t.remarks=e.data.remarks,t.requirements=e.data.requirements||[],t.initial_inspection=e.data.initial_inspection,t.ticket_status=e.data.ticket_status,t.form_id=null===(h=e.data.form)||void 0===h?void 0:h.id}))},updateService:function(){var t=this,e=this.$route.query.id||null;this.$axios.put("auth/services/"+e,{name:this.name,s_desc:this.s_desc,l_desc:this.l_desc,type:this.type,service_type:this.service_type,expected_date:this.expected_date,status:this.status,product_id:this.product_id,assigned_to:this.assigned_to,customer_id:this.customer_id,work_status:this.work_status,remarks:this.remarks,requirements:this.requirements,initial_inspection:this.initial_inspection,ticket_status:this.ticket_status}).then((function(e){t.$toast.success("Service Saved",{icon:"mdi-check-circle"}),t.$route.query.id||t.$router.replace({query:l(l({},t.$route.query),{},{id:e.data.id})})}),(function(t){}))}}},d=(n(874),n(27)),h=n(31),m=n.n(h),f=n(491),v=n(211),y=n(177),x=n(757),_=n(210),I=n(512),S=n(539),w=n(501),O=n(490),component=Object(d.a)(c,(function(){var t=this,e=this,n=e.$createElement,r=e._self._c||n;return r("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[r("v-card",{attrs:{"max-width":"700",width:"100%"}},[r("v-card-text",[r("div",{staticClass:"d-flex flex-row my-2"},[r("v-btn",{attrs:{small:"",color:"primary",to:"/app/services",outlined:""}},[r("v-icon",[e._v("mdi-arrow-left")])],1),e._v(" "),r("v-spacer"),e._v(" "),r("h2",{staticClass:"black--text"},[e._v("Service Editor")])],1),e._v(" "),r("div",{staticClass:"statusBar px-1 my-2",staticStyle:{"max-width":"100%","overflow-x":"scroll"}},[r("div",{staticClass:"ma-2 row align-center",staticStyle:{width:"680px","overflow-x":"scroll"}},e._l(e.statusItems,(function(t,n){return r("v-card",{key:n,staticClass:"col font-weight-bold text-center",class:e.statusItems&&e.statusItems.indexOf(e.work_status)>=n?"primary white--text":"info",attrs:{flat:"",tile:""}},[r("div",[e._v(e._s(t))])])})),1)]),e._v(" "),r("userAssign",{attrs:{id:e.assigned_to,name:e.assigned_name,permissions:"Employee"},on:{assignTo:function(t){return e.assignUser(t)}}}),e._v(" "),r("userAssign",{attrs:{title:"Customer",id:e.customer_id,name:e.customer_name,permissions:"Customer"},on:{assignTo:function(t){return e.assignCustomer(t)}}}),e._v(" "),r("productAssign",{attrs:{id:e.product_id,name:e.product_name,title:"Product"},on:{assignTo:function(e){t.product_id=e.id,t.product_name=e.name}}}),e._v("\n      Expected Date: "+e._s(e.expected_date?e.$luxon(e.expected_date):"Not Set")+"\n      "),r("v-text-field",{attrs:{filled:"",type:"date",label:e.product_id?"Reschedule":"Set Date"},on:{change:function(t){return e.updateTicketStatus()}},model:{value:e.expected_date,callback:function(t){e.expected_date=t},expression:"expected_date"}}),e._v(" "),r("v-text-field",{attrs:{outlined:"",label:"Initial Remarks"},model:{value:e.initial_inspection,callback:function(t){e.initial_inspection=t},expression:"initial_inspection"}}),e._v(" "),r("v-combobox",{attrs:{outlined:"",items:["New Installation","Old Installation","Replacement","Repair","Delivery"],label:"Service Type"},model:{value:e.type,callback:function(t){e.type=t},expression:"type"}}),e._v(" "),r("v-select",{attrs:{outlined:"",items:["Installation","Replacement","Repair"],label:"Service Form","prepend-inner-icon":"mdi-form-select"},model:{value:e.service_type,callback:function(t){e.service_type=t},expression:"service_type"}}),e._v(" "),r("v-select",{attrs:{outlined:"",disabled:"Subadmin"==e.role,items:e.statusItems,label:"Ticket Status"},model:{value:e.ticket_status,callback:function(t){e.ticket_status=t},expression:"ticket_status"}}),e._v(" "),r("v-select",{attrs:{outlined:"",disabled:"Subadmin"==e.role,items:e.statusItems,label:"Work Status"},model:{value:e.work_status,callback:function(t){e.work_status=t},expression:"work_status"}})],1),e._v(" "),r("v-card-actions",[e.form_id?r("v-btn",{attrs:{outlined:"",to:"/app/services/forms?id="+e.form_id,color:"primary"}},[e._v("View Form")]):e._e(),e._v(" "),e.$route.query.id?r("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(t){e.viewHistory=!0}}},[e._v("View Activity")]):e._e(),e._v(" "),r("v-spacer"),e._v(" "),r("v-btn",{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:e.loading,type:"submit"},on:{click:function(t){return e.updateService()}}},[e._v("Save Service")])],1),e._v(" "),e.$route.query.id&&e.viewHistory?r("history",{attrs:{service_id:e.$route.query.id},model:{value:e.viewHistory,callback:function(t){e.viewHistory=t},expression:"viewHistory"}}):e._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VBtn:f.a,VCard:v.a,VCardActions:y.a,VCardText:y.c,VCombobox:x.a,VIcon:_.a,VLayout:I.a,VSelect:S.a,VSpacer:w.a,VTextField:O.a})},509:function(t,e,n){"use strict";var r=n(5),o=n(123).findIndex,l=n(122),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),r({target:"Array",proto:!0,forced:d},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},510:function(t,e,n){var r=n(327),o=n(43);t.exports=function(t,e,n){return n.get&&r(n.get,e,{getter:!0}),n.set&&r(n.set,e,{setter:!0}),o.f(t,e,n)}},511:function(t,e,n){"use strict";var r=n(1),o=n(2);e.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.j}}})},512:function(t,e,n){"use strict";n(221);var r=n(222);e.a=Object(r.a)("layout")},513:function(t,e,n){"use strict";var r=n(37),o=n(122),l=n(55),c=n(63),d=n(510);r&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=l(this),e=c(t);return 0==e?void 0:t[e-1]},set:function(t){var e=l(this),n=c(e);return e[0==n?0:n-1]=t}}),o("lastItem"))},533:function(t,e,n){var content=n(536);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("50788f08",content,!0,{sourceMap:!1})},536:function(t,e,n){var r=n(9)(!1);r.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=r},552:function(t,e,n){"use strict";n(17),n(11),n(23),n(16),n(24);var r=n(3),o=(n(62),n(6),n(13),n(98),n(178),n(509),n(54),n(69),n(533),n(539)),l=n(490),c=n(57),d=n(2);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=m(m({},o.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=o.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:o.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},o.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(d.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=o.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),m(m({},f),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=o.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var r=e[this.$refs.menu.listIndex];r?this.setMenuIndex(t.findIndex((function(i){return i===r}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===d.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===d.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==d.x.backspace&&t!==d.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var r=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[r]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=r}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,o.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=o.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?o.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.x.home,d.x.end].includes(e)||o.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){o.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){o.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){o.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var r=this.selectedItems[this.selectedIndex],o=this.getText(r);null==(e=t.clipboardData)||e.setData("text/plain",o),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",o),t.preventDefault()}}}})},757:function(t,e,n){"use strict";n(17),n(11),n(13),n(23),n(16),n(24);var r=n(19),o=n(3),l=(n(6),n(86),n(178),n(226),n(48),n(42),n(54),n(69),n(509),n(328),n(533),n(539)),c=n(552),d=n(2);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return l.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)},searchIsDirty:function(){return null!=this.internalSearch}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var input=c.a.options.methods.genInput.call(this);return delete input.data.attrs.name,input.data.on.paste=this.onPaste,input},genChipSelection:function(t,e){var n=this,r=l.a.options.methods.genChipSelection.call(this,t,e);return this.multiple&&(r.componentOptions.listeners=m(m({},r.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),r},onChipInput:function(t){l.a.options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[d.x.home,d.x.end].includes(e)||l.a.options.methods.onKeyDown.call(this,t),this.multiple&&e===d.x.left&&0===this.$refs.input.selectionStart?this.updateSelf():e===d.x.enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();c.a.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():(c.a.options.methods.selectItem.call(this,t),this.internalSearch&&this.multiple&&this.getText(t).toLocaleLowerCase().includes(this.internalSearch.toLocaleLowerCase())&&(this.internalSearch=null))},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){l.a.options.methods.setValue.call(this,void 0===t?this.internalSearch:t)},updateEditing:function(){var t=this,e=this.internalValue.slice(),n=this.selectedItems.findIndex((function(e){return t.getText(e)===t.internalSearch}));if(n>-1){var o="object"===Object(r.a)(e[n])?Object.assign({},e[n]):e[n];e.splice(n,1),e.push(o)}else e[this.editingIndex]=this.internalSearch;this.setValue(e),this.editingIndex=-1,this.internalSearch=null},updateCombobox:function(){this.searchIsDirty&&(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),(Boolean(this.$scopedSlots.selection)||this.hasChips)&&(this.internalSearch=null))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this,e=this.getMenuIndex();if(!(e<0&&!this.searchIsDirty||!this.internalSearch)){if(this.editingIndex>-1)return this.updateEditing();var n=this.selectedItems.findIndex((function(e){return t.internalSearch===t.getText(e)})),o=n>-1&&"object"===Object(r.a)(this.selectedItems[n])?Object.assign({},this.selectedItems[n]):this.internalSearch;if(n>-1){var l=this.internalValue.slice();l.splice(n,1),this.setValue(l)}if(e>-1)return this.internalSearch=null;this.selectItem(o),this.internalSearch=null}},onPaste:function(t){var e;if(this.multiple&&!this.searchIsDirty){var n=null==(e=t.clipboardData)?void 0:e.getData("text/vnd.vuetify.autocomplete.item+plain");n&&-1===this.findExistingIndex(n)&&(t.preventDefault(),l.a.options.methods.selectItem.call(this,n))}},clearableCallback:function(){this.editingIndex=-1,c.a.options.methods.clearableCallback.call(this)}}})},766:function(t,e,n){var content=n(875);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("1a3e1424",content,!0,{sourceMap:!1})},874:function(t,e,n){"use strict";n(766)},875:function(t,e,n){var r=n(9)(!1);r.push([t.i,".statusBar{border:1px solid var(--v-primary-base)}",""]),t.exports=r}}]);