(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{1009:function(t,e,n){"use strict";n.r(e);n(6),n(32),n(34);var o={layout:"appDesktop",data:function(){return{conversations:[],selectedConversation:null,newUser:null,keyword:"",users:[],loadingUsers:!1,messages:[],current_room:null}},components:{ChatWindow:function(){return n.e(8).then(n.bind(null,710))}},mounted:function(){this.fetchConversations()},watch:{keyword:function(t){t&&t.length>=2&&(this.loadingUsers=!0,this.fetchUsers())},newUser:function(t){t&&(this.withUser=t,this.startConversation())}},computed:{withUser:{get:function(){return this.$route.query.withUser},set:function(){this.$router.push({query:{withUser:this.newUser.id}})}}},methods:{fetchConversations:function(){var t=this;this.$axios.get("/auth/conversations").then((function(e){t.conversations=e.data}))},fetchUsers:function(){var t=this;this.loadingUsers=!0,this.$axios.get("/auth/users/filter?name"+this.keyword).then((function(e){t.loadingUsers=!1,t.users=e.data}))},startConversation:function(){var t=this;this.$axios.post("/auth/conversations",{user_id:this.newUser}).then((function(e){t.fetchConversations(),t.newUser=null,t.selectedConversation=e.data.id}))}}},r=n(27),l=n(31),c=n.n(l),h=n(558),d=n(502),f=n(210),m=n(510),v=n(733),I=n(714),x=n(508),y=n(715),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{row:"",container:""}},[n("v-col",{attrs:{md:"2.5"}},[n("v-list",{staticStyle:{background:"#f9fbfc",height:"100vh"}},t._l(t.conversations,(function(e,o){return n("v-list-item",{key:o,class:t.current_room==e.id&&"white",on:{click:function(n){t.current_room=e.id}}},[n("v-list-item-icon",[n("v-icon",{attrs:{large:""}},[t._v("mdi-account-circle")])],1),t._v(" "),n("v-list-item-content",[e.receiver&&e.sender?n("v-list-item-title",[t._v("\n\t\t\t\t\t\t"+t._s(e.sender.id==t.$auth.user.id?e.receiver.name:e.sender.name)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),n("v-list-item-subtitle",[t._v("\n\t\t\t\t\t\t\t"+t._s(e.last_message)+"\n\t\t\t\t\t\t")])],1)],1)})),1)],1),t._v(" "),n("v-col",{attrs:{md:"9"}},[n("v-autocomplete",{attrs:{items:t.users,outlined:"",dense:"","item-text":"name","item-value":"id",loading:t.loadingUsers,"search-input":t.keyword,"hide-no-data":"",label:"Search User For New Chat"},on:{"update:searchInput":function(e){t.keyword=e},"update:search-input":function(e){t.keyword=e}},model:{value:t.newUser,callback:function(e){t.newUser=e},expression:"newUser"}}),t._v(" "),t.current_room?n("chat-window",{key:t.current_room,attrs:{current_room:t.current_room}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VAutocomplete:h.a,VCol:d.a,VIcon:f.a,VLayout:m.a,VList:v.a,VListItem:I.a,VListItemContent:x.a,VListItemIcon:y.a,VListItemSubtitle:x.b,VListItemTitle:x.c})},509:function(t,e,n){"use strict";var o=n(1),r=n(2);e.a=o.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.j}}})},510:function(t,e,n){"use strict";n(221);var o=n(222);e.a=Object(o.a)("layout")},543:function(t,e,n){var content=n(544);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("50788f08",content,!0,{sourceMap:!1})},544:function(t,e,n){var o=n(9)(!1);o.push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=o},558:function(t,e,n){"use strict";n(17),n(11),n(23),n(16),n(24);var o=n(3),r=(n(62),n(6),n(13),n(98),n(178),n(532),n(54),n(69),n(543),n(552)),l=n(490),c=n(58),h=n(2);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=f(f({},r.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1});e.a=r.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:r.a.options.props.menuProps.type,default:function(){return m}},noFilter:Boolean,searchInput:{type:String}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return f(f({},r.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(h.r)(e,t.itemText),text=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),text)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch!==t&&(this.lazySearch=t,this.$emit("update:search-input",t))}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=r.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),f(f({},m),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(i){return t.valueComparator(t.getValue(i),t.getValue(t.internalValue))}))},listData:function(){var data=r.a.options.computed.listData.call(this);return data.props=f(f({},data.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),data}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.blur(),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=null)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},destroyed:function(){document.removeEventListener("copy",this.onCopy)},methods:{onFilteredItemsChanged:function(t,e){var n=this;if(t!==e){if(!this.autoSelectFirst){var o=e[this.$refs.menu.listIndex];o?this.setMenuIndex(t.findIndex((function(i){return i===o}))):this.setMenuIndex(-1),this.$emit("update:list-index",this.$refs.menu.listIndex)}this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.autoSelectFirst&&t.length&&(n.setMenuIndex(0),n.$emit("update:list-index",n.$refs.menu.listIndex)))}))}},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===h.x.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===h.x.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==h.x.backspace&&t!==h.x.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){var t=this.selectedIndex,e=this.selectedItems[t];if(this.isInteractive&&!this.getDisabled(e)){var n=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===n){var o=t!==this.selectedItems.length-1?t:t-1;this.selectedItems[o]?this.selectItem(e):this.setValue(this.multiple?[]:null),this.selectedIndex=o}else this.selectedIndex=n}},clearableCallback:function(){this.internalSearch=null,r.a.options.methods.clearableCallback.call(this)},genInput:function(){var input=l.a.options.methods.genInput.call(this);return input.data=Object(c.a)(input.data,{attrs:{"aria-activedescendant":Object(h.p)(this.$refs.menu,"activeTile.id"),autocomplete:Object(h.p)(input.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),input},genInputSlot:function(){var slot=r.a.options.methods.genInputSlot.call(this);return slot.data.attrs.role="combobox",slot},genSelections:function(){return this.hasSlot||this.multiple?r.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isInteractive&&(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.multiple||""!==n||this.deleteCurrentItem(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;!t.ctrlKey&&[h.x.home,h.x.end].includes(e)||r.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){r.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){r.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){r.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.multiple||this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){var e,n;if(-1!==this.selectedIndex){var o=this.selectedItems[this.selectedIndex],r=this.getText(o);null==(e=t.clipboardData)||e.setData("text/plain",r),null==(n=t.clipboardData)||n.setData("text/vnd.vuetify.autocomplete.item+plain",r),t.preventDefault()}}}})}}]);