(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{1039:function(t,e,n){"use strict";n.r(e);var o=n(20),r=n(3),c=(n(70),{layout:"superDesktop",data:function(){var t;return t={serviceHeaders:[{text:"S.No",value:"sn"},{text:"Id",value:"id"},{text:"User Name",value:"name"},{text:"E-Mail",value:"email"},{text:"Role",value:"company[0].pivot.role"},{text:"Mobile",value:"phone"},{text:"License Start",value:"license.created_at"},{text:"License Expiry",value:"license.expires_on"},{text:"License",value:"license.name"},{text:"Admins",value:"license.admins"},{text:"Subadmins",value:"license.subadmins"},{text:"Engineers",value:"license.engineers"},{text:"Actions",value:"actions"}],leadFile:null,datemenu:!1,tableSelected:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},leads:[],date:[],users:[],focus:0,userToggle:!1,status:"",changingStatus:!1},Object(r.a)(t,"loading",!1),Object(r.a)(t,"search_keywords",""),t},mounted:function(){this.getUsers()},methods:{getUsers:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("super/users",{params:{page:t.current_page,per_page:t.per_page,search:t.search_keywords,status:t.search_status}}).then((function(e){t.leads=e.data.data,t.total=e.data.total,t.current_page=e.data.current_page,t.per_page=+e.data.per_page,t.loading=!1}),(function(t){}));case 3:case"end":return e.stop()}}),e)})))()},deleteUser:function(t){var e=this;window.confirm("Are you sure you want to delete this user?")&&this.$axios.delete("super/users/"+t).then((function(t){e.$toast.info("User Deleted!"),e.getUsers()}),(function(t){e.$toast.error("An Error Occured While Deleting!")}))},focususer:function(t){this.focus=t,this.userToggle=!0}}}),l=n(27),h=n(31),v=n.n(h),d=n(494),f=n(743),_=n(210),m=n(515),w=n(866),x=n(493),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"",container:""}},[n("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[n("v-text-field",{staticClass:"mx-1",attrs:{label:"Search User","append-icon":"mdi-magnify",hint:"Search By Name or Email",outlined:"",dense:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getUsers()}},model:{value:t.search_keywords,callback:function(e){t.search_keywords=e},expression:"search_keywords"}}),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(e){return t.getUsers()}}},[n("v-icon",[t._v("mdi-magnify")])],1),t._v(" "),n("v-btn",{staticClass:"mx-1",attrs:{to:"/superadmin/users/editor",color:"primary"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-plus-box-multiple")]),t._v(" Add User\n    ")],1)],1),t._v(" "),t.loading?n("p",{staticClass:"pa-4 text-center"},[t._v("Loading")]):t._e(),t._v(" "),n("v-data-table",{staticClass:"elevation-1",attrs:{"disable-sort":"","show-select":!1,"footer-props":{"disable-items-per-page":!0},headers:t.serviceHeaders,items:t.leads,itemsPerPage:t.per_page,page:t.current_page,"server-items-length":t.total,loading:t.loading},on:{input:function(e){return t.select(e)},"update:page":function(e){return t.updatePage(e)}},scopedSlots:t._u([{key:"item.sn",fn:function(e){var n=e.index;return[t._v(t._s(t.current_page*(n+1)))]}},{key:"item.status",fn:function(e){var o=e.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[n("v-switch",{attrs:{"true-value":1,"false-value":0},model:{value:o.status,callback:function(e){t.$set(o,"status",e)},expression:"item.status"}})],1)]}},{key:"item.license.created_at",fn:function(e){var o=e.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[t._v("\n          "+t._s(o.license&&o.license.created_at?t.$luxon(o.license.created_at):"NA")+"\n\t\t\t\t")])]}},{key:"item.license.expires_on",fn:function(e){var o=e.item;return[n("td",{staticStyle:{"white-space":"nowrap"}},[t._v("\n          "+t._s(o.license&&o.license.expires_on?t.$luxon(o.license.expires_on):"NA")+"\n\t\t\t\t")])]}},{key:"item.actions",fn:function(e){var o=e.item;return[n("div",{staticClass:"row"},[n("v-btn",{attrs:{to:"/superadmin/users/editor?id="+o.id,color:"blue",icon:"",small:""}},[n("v-icon",[t._v(" mdi-pencil-box-multiple ")])],1),t._v(" "),n("v-btn",{attrs:{color:"error",icon:"",small:""},on:{click:function(e){return t.deleteUser(o.id)}}},[n("v-icon",[t._v("\n          mdi-delete\n        ")])],1)],1)]}}]),model:{value:t.tableSelected,callback:function(e){t.tableSelected=e},expression:"tableSelected"}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VDataTable:f.a,VIcon:_.a,VLayout:m.a,VSwitch:w.a,VTextField:x.a})},512:function(t,e,n){"use strict";var o=n(5),r=n(123).findIndex,c=n(122),l="findIndex",h=!0;l in[]&&Array(1).findIndex((function(){h=!1})),o({target:"Array",proto:!0,forced:h},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},513:function(t,e,n){var o=n(328),r=n(44);t.exports=function(t,e,n){return n.get&&o(n.get,e,{getter:!0}),n.set&&o(n.set,e,{setter:!0}),r.f(t,e,n)}},516:function(t,e,n){"use strict";var o=n(37),r=n(122),c=n(56),l=n(64),h=n(513);o&&(h(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=c(this),e=l(t);return 0==e?void 0:t[e-1]},set:function(t){var e=c(this),n=l(e);return e[0==n?0:n-1]=t}}),r("lastItem"))},541:function(t,e,n){var content=n(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("2e2bc7da",content,!0,{sourceMap:!1})},542:function(t,e,n){var o=n(9)(!1);o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},543:function(t,e,n){"use strict";n(6),n(86),n(14);var o=n(79),r=n(146),c=n(1).default.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),l=n(514),h=n(16);function v(t){t.preventDefault()}e.a=Object(h.a)(o.a,c,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:v},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:v},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},562:function(t,e,n){"use strict";n(6),n(13);var o=n(2);function r(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),function(t){var e=t.touchstartX,n=t.touchendX,o=t.touchstartY,r=t.touchendY;t.offsetX=n-e,t.offsetY=r-o,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&r<o-16&&t.up(t),t.down&&r>o+16&&t.down(t))}(e)}function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return r(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var l={inserted:function(t,e,n){var r=e.value,l=r.parent?t.parentElement:t,h=r.options||{passive:!0};if(l){var v=c(e.value);l._touchHandlers=Object(l._touchHandlers),l._touchHandlers[n.context._uid]=v,Object(o.y)(v).forEach((function(t){l.addEventListener(t,v[t],h)}))}},unbind:function(t,e,n){var r=e.value.parent?t.parentElement:t;if(r&&r._touchHandlers){var c=r._touchHandlers[n.context._uid];Object(o.y)(c).forEach((function(t){r.removeEventListener(t,c[t])})),delete r._touchHandlers[n.context._uid]}}};e.a=l},737:function(t,e,n){var content=n(738);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("beda1088",content,!0,{sourceMap:!1})},738:function(t,e,n){var o=n(9)(!1);o.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;width:36px;height:14px;left:2px;position:absolute;opacity:.6;right:2px;top:calc(50% - 7px)}.v-input--switch__thumb{border-radius:50%;top:calc(50% - 10px);height:20px;position:relative;width:20px;display:flex;justify-content:center;align-items:center;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-input--switch .v-input--selection-controls__input{width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{width:18px;height:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;width:44px;top:calc(50% - 12px);left:-3px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),t.exports=o},866:function(t,e,n){"use strict";n(15),n(11),n(14),n(6),n(23),n(13),n(24);var o=n(99),r=n(3),c=(n(183),n(184),n(541),n(737),n(543)),l=n(79),h=n(562),v=n(181),d=n(194),f=n(2),_=["title"];function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-switch",directives:{Touch:h.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return w(w({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",w(w({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",w({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",w({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f.x.left&&this.isActive||t.keyCode===f.x.right&&!this.isActive)&&this.onChange()}}})}}]);