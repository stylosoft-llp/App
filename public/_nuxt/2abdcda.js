(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{1062:function(e,t,n){"use strict";n.r(t);var o=n(510),r=n(219),l=n(124),c=n(566),d=n(218),v=n(530),h=n(552),f=n(520),m=n(509),y=(n(25),n(3));n(5),n(33),n(35),n(30),n(48),n(15),n(10),n(14),n(21),n(13),n(22);function _(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function x(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(t){Object(y.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var w={layout:"appDesktop",data:function(){var e;return e={name:"",expected_date:"",service_type:null,status:"",loading:!1,assigned_to:null,assigned_name:"",customer_id:null,customer_name:"",product_id:null,product_name:""},Object(y.a)(e,"status",""),Object(y.a)(e,"statusItems",["New","Pending","Active","Completed","Cancelled"]),e},components:{userAssign:function(){return n.e(8).then(n.bind(null,813))},productAssign:function(){return n.e(6).then(n.bind(null,1008))}},mounted:function(){this.$route.query.id&&this.fetchService()},methods:{assignUser:function(e){e&&(this.assigned_to=e.id,this.assigned_name=e.name)},assignCustomer:function(e){e&&(this.customer_id=e.id,this.customer_name=e.name)},assignProduct:function(e){e&&(this.product_id=e.id,this.product_name=e.name)},fetchService:function(){var e=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(t){var n,o,r,l,c,d;e.name=t.data.name,e.status=t.data.status,e.expected_date=t.data.expected_date,e.service_type=t.data.service_type,e.customer_id=null===(n=t.data.customer)||void 0===n?void 0:n.id,e.customer_name=null===(o=t.data.customer)||void 0===o?void 0:o.name,e.assigned_to=null===(r=t.data.assignee)||void 0===r?void 0:r.id,e.assigned_name=null===(l=t.data.assignee)||void 0===l?void 0:l.name,e.product_id=null===(c=t.data.product)||void 0===c?void 0:c.id,e.product_name=null===(d=t.data.product)||void 0===d?void 0:d.name}))},updateService:function(){var e=this,t=this.$route.query.id||null;this.$axios.put("auth/services/"+t,{name:this.name,s_desc:this.s_desc,l_desc:this.l_desc,service_type:this.service_type,expected_date:this.expected_date,status:this.status,product_id:this.product_id,assigned_to:this.assigned_to,customer_id:this.customer_id}).then((function(t){e.$toast.success("Service Saved",{icon:"mdi-check-circle"}),e.$route.query.id||e.$router.replace({query:x(x({},e.$route.query),{},{id:t.data.id})})}),(function(e){}))}}},O=n(26),component=Object(O.a)(w,(function(){var e=this,t=this,n=t._self._c;return n(v.a,{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[n(r.a,{attrs:{"max-width":"600",width:"100%"}},[n(l.c,[n("div",{staticClass:"d-flex flex-row my-2"},[n(o.a,{attrs:{small:"",color:"primary",to:"/app/services",outlined:""}},[n(d.a,[t._v("mdi-arrow-left")])],1),t._v(" "),n(f.a),t._v(" "),n("h2",{staticClass:"black--text"},[t._v("Service Editor")])],1),t._v(" "),n(m.a,{attrs:{outlined:"",dense:"",label:"Name"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),n("userAssign",{attrs:{title:"Customer",id:t.assigned_to,name:t.assigned_name,permissions:"executive"},on:{assignTo:function(e){return t.assignUser(e)}}}),t._v(" "),n("userAssign",{attrs:{id:t.customer_id,name:t.customer_name,permissions:"customer"},on:{assignTo:function(e){return t.assignCustomer(e)}}}),t._v(" "),n("productAssign",{attrs:{id:t.product_id,name:t.product_name,title:"Product"},on:{assignTo:function(t){e.product_id=t.id,e.product_name=t.name}}}),t._v(" "),n(m.a,{attrs:{filled:"",type:"date",label:"Expected Date"},model:{value:t.expected_date,callback:function(e){t.expected_date=e},expression:"expected_date"}}),t._v(" "),n(h.a,{attrs:{outlined:"",items:["Installation","Replacement","Repair"],label:"Service Type"},model:{value:t.service_type,callback:function(e){t.service_type=e},expression:"service_type"}}),t._v(" "),n(h.a,{attrs:{outlined:"",items:t.statusItems,label:"Status"},model:{value:t.status,callback:function(e){t.status=e},expression:"status"}})],1),t._v(" "),n(l.a,[n(o.a,{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit",block:""},on:{click:function(e){return t.updateService()}}},[t._v(" Save Service")])],1)],1),t._v(" "),n(c.a)],1)}),[],!1,null,null,null);t.default=component.exports},528:function(e,t,n){"use strict";var o=n(4),r=n(126).findIndex,l=n(125),c="findIndex",d=!0;c in[]&&Array(1)[c]((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),l(c)},529:function(e,t,n){"use strict";var o=n(1),r=n(2);t.a=o.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.j}}})},530:function(e,t,n){"use strict";n(231);var o=n(232);t.a=Object(o.a)("layout")},531:function(e,t,n){"use strict";var o=n(34),r=n(125),l=n(54),c=n(61),d=n(103);o&&(d(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=l(this),t=c(e);return 0==t?void 0:e[t-1]},set:function(e){var t=l(this),n=c(t);return t[0==n?0:n-1]=e}}),r("lastItem"))},533:function(e,t,n){var content=n(534);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("661353df",content,!0,{sourceMap:!1})},534:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,".theme--light.v-overlay{color:rgba(0,0,0,.87)}.theme--dark.v-overlay{color:#fff}.v-overlay{align-items:center;border-radius:inherit;bottom:0;display:flex;justify-content:center;left:0;pointer-events:none;position:fixed;right:0;top:0;transition:.3s cubic-bezier(.25,.8,.5,1),z-index 1ms}.v-overlay__content{position:relative}.v-overlay__scrim{border-radius:inherit;bottom:0;height:100%;left:0;position:absolute;right:0;top:0;transition:inherit;width:100%;will-change:opacity}.v-overlay--absolute{position:absolute}.v-overlay--active{pointer-events:auto}",""]),o.locals={},e.exports=o},535:function(e,t,n){"use strict";n(31),n(42),n(53),n(15),n(10),n(14),n(5),n(21),n(13),n(22);var o=n(3),r=(n(533),n(47)),l=n(36),c=n(147),d=n(16);function v(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var h=Object(d.a)(r.a,l.a,c.a).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim:function(){var data=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",data)},classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive},this.themeClasses)},computedOpacity:function(){return Number(this.isActive?this.opacity:0)},styles:function(){return{zIndex:this.zIndex}}},methods:{genContent:function(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render:function(e){var t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),f=h,m=n(2),y=n(1);t.a=y.default.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data:function(){return{animationFrame:0,overlay:null}},watch:{hideOverlay:function(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy:function(){this.removeOverlay()},methods:{createOverlay:function(){var e=new f({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();var t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay:function(){var e=this;if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((function(){e.overlay&&(void 0!==e.activeZIndex?e.overlay.zIndex=String(e.activeZIndex-1):e.$el&&(e.overlay.zIndex=Object(m.t)(e.$el)),e.overlay.value=!0)})),!0},removeOverlay:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.overlay&&(Object(m.a)(this.overlay.$el,"transitionend",(function(){e.overlay&&e.overlay.$el&&e.overlay.$el.parentNode&&!e.overlay.value&&!e.isActive&&(e.overlay.$el.parentNode.removeChild(e.overlay.$el),e.overlay.$destroy(),e.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),t&&this.showScroll()},scrollListener:function(e){if("key"in e){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;var t=[m.w.up,m.w.pageup],n=[m.w.down,m.w.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar:function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var style=window.getComputedStyle(e);return(["auto","scroll"].includes(style.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(style.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll:function(e,t){if(e.hasAttribute("data-app"))return!1;var n,o,r=t.shiftKey||t.deltaX?"x":"y",l="y"===r?t.deltaY:t.deltaX||t.deltaY;return"y"===r?(n=0===e.scrollTop,o=e.scrollTop+e.clientHeight===e.scrollHeight):(n=0===e.scrollLeft,o=e.scrollLeft+e.clientWidth===e.scrollWidth),!(n||!(l<0))||(!(o||!(l>0))||!(!n&&!o)&&this.shouldScroll(e.parentNode,t))},isInside:function(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath:function(e){var path=Object(m.g)(e);if("keydown"===e.type&&path[0]===document.body){var dialog=this.$refs.dialog,t=window.getSelection().anchorNode;return!(dialog&&this.hasScrollbar(dialog)&&this.isInside(t,dialog))||!this.shouldScroll(dialog,e)}for(var n=0;n<path.length;n++){var o=path[n];if(o===document)return!0;if(o===document.documentElement)return!0;if(o===this.$refs.content)return!0;if(this.hasScrollbar(o))return!this.shouldScroll(o,e)}return!0},hideScroll:function(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):(Object(m.b)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll:function(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},539:function(e,t,n){var content=n(540);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("7901d559",content,!0,{sourceMap:!1})},540:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,".v-dialog{border-radius:4px;box-shadow:0 11px 15px -7px rgba(0,0,0,.2),0 24px 38px 3px rgba(0,0,0,.14),0 9px 46px 8px rgba(0,0,0,.12);margin:24px;outline:none;overflow-y:auto;pointer-events:auto;transition:.3s cubic-bezier(.25,.8,.25,1);width:100%;z-index:inherit}.v-dialog:not(.v-dialog--fullscreen){max-height:90%}.v-dialog>*{width:100%}.v-dialog>.v-card>.v-card__title{font-size:1.25rem;font-weight:500;letter-spacing:.0125em;padding:16px 24px 10px}.v-dialog>.v-card>.v-card__subtitle,.v-dialog>.v-card>.v-card__text{padding:0 24px 20px}.v-dialog>.v-card>.v-card__actions{padding:8px 16px}.v-dialog__content{align-items:center;display:flex;height:100%;justify-content:center;left:0;pointer-events:none;position:fixed;top:0;transition:.2s cubic-bezier(.25,.8,.25,1),z-index 1ms;width:100%;z-index:6}.v-dialog__container{display:none}.v-dialog__container--attached{display:inline}.v-dialog--animated{animation-duration:.15s;animation-name:animate-dialog;animation-timing-function:cubic-bezier(.25,.8,.25,1)}.v-dialog--fullscreen{border-radius:0;height:100%;left:0;margin:0;overflow-y:auto;position:fixed;top:0}.v-dialog--fullscreen>.v-card{margin:0!important;min-height:100%;min-width:100%;padding:0!important}.v-dialog--scrollable,.v-dialog--scrollable>form{display:flex}.v-dialog--scrollable>.v-card,.v-dialog--scrollable>form>.v-card{display:flex;flex:1 1 100%;flex-direction:column;max-height:100%;max-width:100%}.v-dialog--scrollable>.v-card>.v-card__actions,.v-dialog--scrollable>.v-card>.v-card__title,.v-dialog--scrollable>form>.v-card>.v-card__actions,.v-dialog--scrollable>form>.v-card>.v-card__title{flex:0 0 auto}.v-dialog--scrollable>.v-card>.v-card__text,.v-dialog--scrollable>form>.v-card>.v-card__text{backface-visibility:hidden;flex:1 1 auto;overflow-y:auto}@keyframes animate-dialog{0%{transform:scale(1)}50%{transform:scale(1.03)}to{transform:scale(1)}}",""]),o.locals={},e.exports=o},566:function(e,t,n){"use strict";var o=n(230),r=n(3),l=(n(31),n(97),n(78),n(42),n(53),n(5),n(182),n(15),n(10),n(14),n(21),n(13),n(22),n(539),n(578)),c=n(545),d=n(542),v=n(548),h=n(535),f=n(546),m=n(547),y=n(543),_=n(16),x=n(11),w=n(2);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function j(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var k=Object(_.a)(d.a,v.a,h.a,f.a,m.a,c.a);t.a=k.extend({name:"v-dialog",directives:{ClickOutside:y.a},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data:function(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes:function(){var e;return e={},Object(r.a)(e,"v-dialog ".concat(this.contentClass).trim(),!0),Object(r.a)(e,"v-dialog--active",this.isActive),Object(r.a)(e,"v-dialog--persistent",this.persistent),Object(r.a)(e,"v-dialog--fullscreen",this.fullscreen),Object(r.a)(e,"v-dialog--scrollable",this.scrollable),Object(r.a)(e,"v-dialog--animated",this.animate),e},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen:function(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created:function(){this.$attrs.hasOwnProperty("full-width")&&Object(x.e)("full-width",this)},beforeMount:function(){var e=this;this.$nextTick((function(){e.isBooted=e.isActive,e.isActive&&e.show()}))},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var e=this;this.animate=!1,this.$nextTick((function(){e.animate=!0,window.clearTimeout(e.animateTimeout),e.animateTimeout=window.setTimeout((function(){return e.animate=!1}),150)}))},closeConditional:function(e){var t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):h.a.options.methods.hideScroll.call(this)},show:function(){var e=this;!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((function(){e.$nextTick((function(){var t,n;(null===(t=e.$refs.dialog)||void 0===t?void 0:t.contains(document.activeElement))||(e.previousActiveElement=document.activeElement,null===(n=e.$refs.dialog)||void 0===n||n.focus()),e.bind()}))}))},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside:function(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown:function(e){if(e.keyCode===w.w.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var t=this.getActivator();this.$nextTick((function(){return t&&t.focus()}))}this.$emit("keydown",e)},onFocusin:function(e){if(e&&this.retainFocus){var t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((function(e){return e.contains(t)}))){var n=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),r=Object(o.a)(n).find((function(e){return!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')}));r&&r.focus()}}},genContent:function(){var e=this;return this.showLazyContent((function(){return[e.$createElement(l.a,{props:{root:!0,light:e.light,dark:e.dark}},[e.$createElement("div",{class:e.contentClasses,attrs:j({role:"dialog","aria-modal":e.hideOverlay?void 0:"true"},e.getScopeIdAttrs()),on:{keydown:e.onKeydown},style:{zIndex:e.activeZIndex},ref:"content"},[e.genTransition()])])]}))},genTransition:function(){var content=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[content]):content},genInnerContent:function(){var data={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(data.style=j(j({},data.style),{},{maxWidth:Object(w.h)(this.maxWidth),width:Object(w.h)(this.width)})),this.$createElement("div",data,this.getContentSlot())}},render:function(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})}}]);