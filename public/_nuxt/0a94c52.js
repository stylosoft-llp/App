(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1057:function(t,e,n){"use strict";n.r(e);var o=n(510),r=n(742),c=n(220),l=n(530),h=n(881),v=n(509),d=n(17),f=n(3),_=(n(70),{layout:"superDesktop",data:function(){var t;return t={serviceHeaders:[{text:"S.No",value:"sn"},{text:"Id",value:"id"},{text:"User Name",value:"name"},{text:"E-Mail",value:"email"},{text:"Role",value:"company[0].pivot.role"},{text:"Mobile",value:"phone"},{text:"License Start",value:"license.created_at"},{text:"License Expiry",value:"license.expires_on"},{text:"License",value:"license.name"},{text:"Admins",value:"license.admins"},{text:"Subadmins",value:"license.subadmins"},{text:"Engineers",value:"license.engineers"},{text:"Actions",value:"actions"}],leadFile:null,datemenu:!1,tableSelected:[],total:null,current_page:1,loading:!1,per_page:100,editedIndex:null,editedItem:{},leads:[],date:[],users:[],focus:0,userToggle:!1,status:"",changingStatus:!1},Object(f.a)(t,"loading",!1),Object(f.a)(t,"search_keywords",""),t},mounted:function(){this.getUsers()},methods:{getUsers:function(){var t=this;return Object(d.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("super/users",{params:{page:t.current_page,per_page:t.per_page,search:t.search_keywords,status:t.search_status}}).then((function(e){t.leads=e.data.data,t.total=e.data.total,t.current_page=e.data.current_page,t.per_page=+e.data.per_page,t.loading=!1}),(function(t){}));case 3:case"end":return e.stop()}}),e)})))()},deleteUser:function(t){var e=this;window.confirm("Are you sure you want to delete this user?")&&this.$axios.delete("super/users/"+t).then((function(t){e.$toast.info("User Deleted!"),e.getUsers()}),(function(t){e.$toast.error("An Error Occured While Deleting!")}))},focususer:function(t){this.focus=t,this.userToggle=!0}}}),m=n(26),component=Object(m.a)(_,(function(){var t=this,e=t._self._c;return e(l.a,{attrs:{column:"",container:""}},[e("div",{staticClass:"my-2 d-flex flex-row align-start justify-center"},[e(v.a,{staticClass:"mx-1",attrs:{label:"Search User","append-icon":"mdi-magnify",hint:"Search By Name or Email",outlined:"",dense:""},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.getUsers()}},model:{value:t.search_keywords,callback:function(e){t.search_keywords=e},expression:"search_keywords"}}),t._v(" "),e(o.a,{staticClass:"mx-1",attrs:{color:"accent"},on:{click:function(e){return t.getUsers()}}},[e(c.a,[t._v("mdi-magnify")])],1),t._v(" "),e(o.a,{staticClass:"mx-1",attrs:{to:"/superadmin/users/editor",color:"primary"}},[e(c.a,{attrs:{left:""}},[t._v("mdi-plus-box-multiple")]),t._v(" Add User\n    ")],1)],1),t._v(" "),t.loading?e("p",{staticClass:"pa-4 text-center"},[t._v("Loading")]):t._e(),t._v(" "),e(r.a,{staticClass:"elevation-1",attrs:{"disable-sort":"","show-select":!1,"footer-props":{"disable-items-per-page":!0},headers:t.serviceHeaders,items:t.leads,itemsPerPage:t.per_page,page:t.current_page,"server-items-length":t.total,loading:t.loading},on:{input:function(e){return t.select(e)},"update:page":function(e){return t.updatePage(e)}},scopedSlots:t._u([{key:"item.sn",fn:function(e){var n=e.index;return[t._v(t._s(t.current_page*(n+1)))]}},{key:"item.status",fn:function(n){var o=n.item;return[e("td",{staticStyle:{"white-space":"nowrap"}},[e(h.a,{attrs:{"true-value":1,"false-value":0},model:{value:o.status,callback:function(e){t.$set(o,"status",e)},expression:"item.status"}})],1)]}},{key:"item.license.created_at",fn:function(n){var o=n.item;return[e("td",{staticStyle:{"white-space":"nowrap"}},[t._v("\n          "+t._s(o.license&&o.license.created_at?t.$luxon(o.license.created_at):"NA")+"\n\t\t\t\t")])]}},{key:"item.license.expires_on",fn:function(n){var o=n.item;return[e("td",{staticStyle:{"white-space":"nowrap"}},[t._v("\n          "+t._s(o.license&&o.license.expires_on?t.$luxon(o.license.expires_on):"NA")+"\n\t\t\t\t")])]}},{key:"item.actions",fn:function(n){var r=n.item;return[e("div",{staticClass:"row"},[e(o.a,{attrs:{to:"/superadmin/users/editor?id="+r.id,color:"blue",icon:"",small:""}},[e(c.a,[t._v(" mdi-pencil-box-multiple ")])],1),t._v(" "),e(o.a,{attrs:{color:"error",icon:"",small:""},on:{click:function(e){return t.deleteUser(r.id)}}},[e(c.a,[t._v("\n          mdi-delete\n        ")])],1)],1)]}}]),model:{value:t.tableSelected,callback:function(e){t.tableSelected=e},expression:"tableSelected"}})],1)}),[],!1,null,null,null);e.default=component.exports},528:function(t,e,n){"use strict";var o=n(4),r=n(127).findIndex,c=n(125),l="findIndex",h=!0;l in[]&&Array(1)[l]((function(){h=!1})),o({target:"Array",proto:!0,forced:h},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},531:function(t,e,n){"use strict";var o=n(34),r=n(125),c=n(55),l=n(62),h=n(103);o&&(h(Array.prototype,"lastItem",{configurable:!0,get:function(){var t=c(this),e=l(t);return 0==e?void 0:t[e-1]},set:function(t){var e=c(this),n=l(e);return e[0==n?0:n-1]=t}}),r("lastItem"))},557:function(t,e,n){var content=n(558);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("ae7a972c",content,!0,{sourceMap:!1})},558:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,'.v-input--selection-controls{margin-top:16px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-bottom:0;margin-top:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:24px}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{cursor:pointer;height:100%;opacity:0;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;left:-12px;margin:7px;position:absolute;top:calc(50% - 24px);transition:inherit;width:34px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";left:0;opacity:.2;position:absolute;right:0;top:0;transform:scale(.2);transform-origin:center center;transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{height:28px;left:-9px;width:28px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),o.locals={},t.exports=o},559:function(t,e,n){"use strict";n(5),n(43),n(14);var o=n(80),r=n(149),c=n(1).default.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}}),l=n(529),h=n(16);function v(t){t.preventDefault()}e.a=Object(h.a)(o.a,c,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:v},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:v},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},584:function(t,e,n){"use strict";n(5),n(13);var o=n(2),r=function(t){var e=t.touchstartX,n=t.touchendX,o=t.touchstartY,r=t.touchendY;t.offsetX=n-e,t.offsetY=r-o,Math.abs(t.offsetY)<.5*Math.abs(t.offsetX)&&(t.left&&n<e-16&&t.left(t),t.right&&n>e+16&&t.right(t)),Math.abs(t.offsetX)<.5*Math.abs(t.offsetY)&&(t.up&&r<o-16&&t.up(t),t.down&&r>o+16&&t.down(t))};function c(t){var e={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:t.left,right:t.right,up:t.up,down:t.down,start:t.start,move:t.move,end:t.end};return{touchstart:function(t){return function(t,e){var n=t.changedTouches[0];e.touchstartX=n.clientX,e.touchstartY=n.clientY,e.start&&e.start(Object.assign(t,e))}(t,e)},touchend:function(t){return function(t,e){var n=t.changedTouches[0];e.touchendX=n.clientX,e.touchendY=n.clientY,e.end&&e.end(Object.assign(t,e)),r(e)}(t,e)},touchmove:function(t){return function(t,e){var n=t.changedTouches[0];e.touchmoveX=n.clientX,e.touchmoveY=n.clientY,e.move&&e.move(Object.assign(t,e))}(t,e)}}}var l={inserted:function(t,e,n){var r=e.value,l=r.parent?t.parentElement:t,h=r.options||{passive:!0};if(l){var v=c(e.value);l._touchHandlers=Object(l._touchHandlers),l._touchHandlers[n.context._uid]=v,Object(o.x)(v).forEach((function(t){l.addEventListener(t,v[t],h)}))}},unbind:function(t,e,n){var r=e.value.parent?t.parentElement:t;if(r&&r._touchHandlers){var c=r._touchHandlers[n.context._uid];Object(o.x)(c).forEach((function(t){r.removeEventListener(t,c[t])})),delete r._touchHandlers[n.context._uid]}}};e.a=l},753:function(t,e,n){var content=n(754);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(9).default)("59f225a8",content,!0,{sourceMap:!1})},754:function(t,e,n){var o=n(8)((function(i){return i[1]}));o.push([t.i,".theme--light.v-input--switch .v-input--switch__thumb{color:#fff}.theme--light.v-input--switch .v-input--switch__track{color:rgba(0,0,0,.38)}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#fafafa!important}.theme--light.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:rgba(0,0,0,.12)!important}.theme--dark.v-input--switch .v-input--switch__thumb{color:#bdbdbd}.theme--dark.v-input--switch .v-input--switch__track{color:hsla(0,0%,100%,.3)}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__thumb{color:#424242!important}.theme--dark.v-input--switch.v-input--is-disabled:not(.v-input--is-dirty) .v-input--switch__track{color:hsla(0,0%,100%,.1)!important}.v-input--switch__thumb,.v-input--switch__track{background-color:currentColor;pointer-events:none;transition:inherit}.v-input--switch__track{border-radius:8px;height:14px;left:2px;opacity:.6;position:absolute;right:2px;top:calc(50% - 7px);width:36px}.v-input--switch__thumb{align-items:center;border-radius:50%;display:flex;height:20px;justify-content:center;position:relative;top:calc(50% - 10px);transition:.3s cubic-bezier(.25,.8,.5,1);width:20px}.v-input--switch .v-input--selection-controls__input{transition:opacity .3s cubic-bezier(.25,.8,.5,1);width:38px}.v-input--switch .v-input--selection-controls__ripple{top:calc(50% - 24px)}.v-input--switch.v-input--dense .v-input--switch__thumb{height:18px;width:18px}.v-input--switch.v-input--dense .v-input--switch__track{height:12px;width:32px}.v-input--switch.v-input--dense.v-input--switch--inset .v-input--switch__track{height:22px;left:-3px;top:calc(50% - 12px);width:44px}.v-input--switch.v-input--dense .v-input--selection-controls__ripple{top:calc(50% - 22px)}.v-input--switch.v-input--is-dirty.v-input--is-disabled .v-input--selection-controls__input{opacity:.6}.v-application--is-ltr .v-input--switch .v-input--selection-controls__ripple{left:-14px}.v-application--is-ltr .v-input--switch.v-input--dense .v-input--selection-controls__ripple{left:-12px}.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)}.v-application--is-rtl .v-input--switch .v-input--selection-controls__ripple{right:-14px}.v-application--is-rtl .v-input--switch.v-input--dense .v-input--selection-controls__ripple{right:-12px}.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch.v-input--is-dirty .v-input--switch__thumb{transform:translate(-20px)}.v-input--switch:not(.v-input--switch--flat):not(.v-input--switch--inset) .v-input--switch__thumb{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-input--switch--inset .v-input--selection-controls__input,.v-input--switch--inset .v-input--switch__track{width:48px}.v-input--switch--inset .v-input--switch__track{border-radius:14px;height:28px;left:-4px;opacity:.32;top:calc(50% - 14px)}.v-application--is-ltr .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset .v-input--switch__thumb{transform:translate(0)!important}.v-application--is-rtl .v-input--switch--inset .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset .v-input--switch__thumb{transform:translate(-6px)!important}.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-ltr .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(20px)!important}.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--selection-controls__ripple,.v-application--is-rtl .v-input--switch--inset.v-input--is-dirty .v-input--switch__thumb{transform:translate(-26px)!important}",""]),o.locals={},t.exports=o},881:function(t,e,n){"use strict";n(15),n(10),n(14),n(5),n(21),n(13),n(22);var o=n(98),r=n(3),c=(n(189),n(190),n(557),n(753),n(559)),l=n(80),h=n(584),v=n(186),d=n(201),f=n(2),_=["title"];function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=c.a.extend({name:"v-switch",directives:{Touch:h.a},props:{inset:Boolean,loading:{type:[Boolean,String],default:!1},flat:{type:Boolean,default:!1}},computed:{classes:function(){return w(w({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls v-input--switch":!0,"v-input--switch--flat":this.flat,"v-input--switch--inset":this.inset})},attrs:function(){return{"aria-checked":String(this.isActive),"aria-disabled":String(this.isDisabled),role:"switch"}},validationState:function(){return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0},switchData:function(){return this.setTextColor(this.loading?void 0:this.validationState,{class:this.themeClasses})}},methods:{genDefaultSlot:function(){return[this.genSwitch(),this.genLabel()]},genSwitch:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,_));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.genInput("checkbox",w(w({},this.attrs),e)),this.genRipple(this.setTextColor(this.validationState,{directives:[{name:"touch",value:{left:this.onSwipeLeft,right:this.onSwipeRight}}]})),this.$createElement("div",w({staticClass:"v-input--switch__track"},this.switchData)),this.$createElement("div",w({staticClass:"v-input--switch__thumb"},this.switchData),[this.genProgress()])])},genProgress:function(){return this.$createElement(v.c,{},[!1===this.loading?null:this.$slots.progress||this.$createElement(d.a,{props:{color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,size:16,width:2,indeterminate:!0}})])},onSwipeLeft:function(){this.isActive&&this.onChange()},onSwipeRight:function(){this.isActive||this.onChange()},onKeydown:function(t){(t.keyCode===f.w.left&&this.isActive||t.keyCode===f.w.right&&!this.isActive)&&this.onChange()}}})}}]);