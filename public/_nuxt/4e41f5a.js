(window.webpackJsonp=window.webpackJsonp||[]).push([[8,21],{549:function(e,t,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("1377ef10",content,!0,{sourceMap:!1})},555:function(e,t,n){var l=n(8)((function(i){return i[1]}));l.push([e.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),l.locals={},e.exports=l},568:function(e,t,n){"use strict";n(15),n(10),n(21),n(13),n(22);var l=n(3),r=(n(61),n(5),n(14),n(97),n(183),n(528),n(42),n(54),n(549),n(552)),o=n(509),c=n(56),d=n(2);function h(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(t){Object(l.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var f=m(m({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});t.a=r.a.extend({name:"v-autocomplete",props:{autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(e,t,n){return n.toLocaleLowerCase().indexOf(t.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return f}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return m(m({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var e=this;return this.selectedItems.map((function(t){return e.getValue(t)}))},hasDisplayedItems:function(){var e=this;return this.hideSelected?this.filteredItems.some((function(t){return!e.hasItem(t)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var e=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(t){var n=Object(d.q)(t,e.itemText),text=null!=n?String(n):"";return e.filter(t,String(e.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(e){this.lazySearch!==e&&(this.lazySearch=e,this.$emit("update:search-input",e))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var e=r.a.options.computed.$_menuProps.call(this);return e.contentClass="v-autocomplete__content ".concat(e.contentClass||"").trim(),m(m({},f),e)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var e=this;return this.multiple?null:this.selectedItems.find((function(i){return e.valueComparator(e.getValue(i),e.getValue(e.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=m(m({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(e){e?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(e){!e&&this.hasSlot&&(this.lazySearch=null)},items:function(e,t){t&&t.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!e.length||this.activateMenu()},searchInput:function(e){this.lazySearch=e},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(e,t){var n=this;if(e!==t){if(!this.autoSelectFirst){var l=t[this.$refs.menu.listIndex];l?this.setMenuIndex(e.findIndex((function(i){return i===l}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===e.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&e.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(e){this.searchIsDirty||(this.multiple&&e===d.w.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&e===d.w.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:e!==d.w.backspace&&e!==d.w.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var e=this.selectedIndex,t=this.selectedItems[e];if(this.isInteractive&&!this.getDisabled(t)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var l=e!==this.selectedItems.length-1?e:e-1;this.selectedItems[l]?this.selectItem(t):this.setValue(this.multiple?[]:null),this.selectedIndex=l}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(d.o)(this.$refs.menu,"activeTile.id"),autocomplete:Object(d.o)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(e){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(e.target)||this.activateMenu())},onInput:function(e){if(!(this.selectedIndex>-1)&&e.target){var t=e.target,n=t.value;t.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=t.validity&&t.validity.badInput}},onKeyDown:function(e){var t=e.keyCode;!e.ctrlKey&&[d.w.home,d.w.end].includes(t)||r.a.options.methods.onKeyDown.call(this,e),this.changeSelectedIndex(t)},onSpaceDown:function(e){},onTabDown:function(e){r.a.options.methods.onTabDown.call(this,e),this.updateSelf()},onUpDown:function(e){e.preventDefault(),this.activateMenu()},selectItem:function(e){r.a.options.methods.selectItem.call(this,e),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var e=this;this.$nextTick((function(){e.multiple&&e.internalSearch&&e.isMenuActive||(e.internalSearch=!e.selectedItems.length||e.multiple||e.hasSlot?null:e.getText(e.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(e){return this.selectedValues.indexOf(this.getValue(e))>-1},onCopy:function(e){var t,n;if(-1!==this.selectedIndex){var l=this.selectedItems[this.selectedIndex],r=this.getText(l);null===(t=e.clipboardData)||void 0===t||t.setData("text/plain",r),null===(n=e.clipboardData)||void 0===n||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),e.preventDefault()}}}})},813:function(e,t,n){"use strict";n.r(t);var l=n(568),r=n(510),o=n(221),c=n(124),d=n(594),h=n(524),m=n(566),f=n(220),v=n(765),I=n(527),_=n(509),x=(n(25),n(30),n(5),n(13),{props:{permissions:{default:null},allowNew:{default:!0},title:{default:"Assignee"},id:{default:null},name:{default:null},customer_detail:{default:null,required:!1}},data:function(){return{createDialog:!1,user:{},assignee:{},assignee_search:"",assignees:[],loadingAssignees:!1,show1:!1,registering:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}]}},watch:{assignee_search:function(e){e&&e.length>2&&this.searchAssignees()}},methods:{addDialog:function(){"Customer"==this.permissions?this.$router.push("/app/customers/editor"):this.createDialog=!0},addUser:function(){var e=this,t=this.user;this.$axios.put("/auth/users",t).then((function(t){e.$toast.success(e.permissions+" Added Successfully!")}))},searchAssignees:function(){var e,t=this;(null===(e=this.assignee_search)||void 0===e?void 0:e.length)<=2||(this.loadingAssignees=!0,this.$axios.get("/auth/users/filter",{params:{name:this.assignee_search,is:this.permissions}}).then((function(e){var n=e.data;n.forEach((function(e){e.user_detail&&(e.name=e.name+" ("+e.user_detail.company_name+")")})),t.assignees=n,t.loadingAssignees=!1}),(function(e){t.loadingAssignees=!1})))}}}),S=n(26),component=Object(S.a)(x,(function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v(e._s(e.title)+" "),t(d.a,{staticClass:"font-weight-medium",attrs:{label:""}},[e._v(e._s(e.name||"None")+" ")])],1),e._v(" "),e.customer_detail?t("div",[e.customer_detail.user_detail?t("div",[e._v("\n      "+e._s(e.customer_detail.user_detail.address_1)+" "+e._s(e.customer_detail.user_detail.address_2)),t("br"),e._v("\n      "+e._s(e.customer_detail.user_detail.city)+" "+e._s(e.customer_detail.user_detail.state)+" "+e._s(e.customer_detail.user_detail.country)+" "),t("br"),e._v(e._s(e.customer_detail.phone)+"\n    ")]):e._e()]):e._e(),e._v(" "),t("div",{staticClass:"d-flex flex-row",attrs:{dense:""}},[t(l.a,{staticClass:"mr-1",attrs:{dense:"",outlined:"",clearable:"",loading:e.loadingAssignees,"search-input":e.assignee_search,label:"Search "+e.title,"item-text":"name","return-object":"","prepend-inner-icon":"mdi-magnify",items:e.assignees},on:{focus:function(t){return e.searchAssignees()},input:function(t){t&&e.$emit("assignTo",t)},"update:searchInput":function(t){e.assignee_search=t},"update:search-input":function(t){e.assignee_search=t}},scopedSlots:e._u([{key:"item",fn:function(n){var l=n.item;return[t(I.a,[t(I.c,{staticStyle:{"white-space":"normal"}},[e._v("\n            "+e._s(l.name)+"\n          ")])],1),e._v(" "),t(v.a,[l.present?t(f.a,{attrs:{small:"",color:"green"}},[e._v("mdi-circle")]):e._e()],1)]}}])}),e._v(" "),e.allowNew?t(r.a,{staticClass:"ml-1",on:{click:function(t){return e.addDialog()}}},[t(f.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v("New")],1):e._e()],1),e._v(" "),t(m.a,{attrs:{"max-width":"600"},model:{value:e.createDialog,callback:function(t){e.createDialog=t},expression:"createDialog"}},[t(o.a,[t(c.d,[e._v("Add New User")]),e._v(" "),t(h.a,[t(_.a,{attrs:{"prepend-inner-icon":"mdi-account-outline",outlined:"","validate-on-blur":"",dense:"",rules:[function(e){return!!e||"Full Name is Required"}],label:"Full Name *"},model:{value:e.user.name,callback:function(t){e.$set(e.user,"name",t)},expression:"user.name"}}),e._v(" "),t(_.a,{attrs:{"prepend-inner-icon":"mdi-email-outline",outlined:"","validate-on-blur":"",dense:"",rules:e.emailRules,label:"E-mail *"},model:{value:e.user.email,callback:function(t){e.$set(e.user,"email",t)},expression:"user.email"}}),e._v(" "),t(_.a,{attrs:{"prepend-inner-icon":"mdi-lock-outline",outlined:"","validate-on-blur":"",dense:"","append-icon":e.show1?"mdi-eye":"mdi-eye-off",type:e.show1?"text":"password",label:"Password *",rules:e.passwordRules},on:{"click:append":function(t){e.show1=!e.show1}},model:{value:e.user.password,callback:function(t){e.$set(e.user,"password",t)},expression:"user.password"}}),e._v(" "),t(_.a,{attrs:{"prepend-inner-icon":"mdi-phone-outline",rules:[function(e){return!!e||"Phone No. is Required"}],outlined:"","validate-on-blur":"",hint:"Enter Phone No. without country code Eg. 8123456789",dense:"",counter:"",maxlength:"10",label:"Phone No. *"},model:{value:e.user.phone,callback:function(t){e.$set(e.user,"phone",t)},expression:"user.phone"}}),e._v(" "),t(r.a,{attrs:{color:"primary",type:"submit",block:"",loading:e.registering},on:{click:function(t){return e.addUser()}}},[e._v("Register Now")])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);