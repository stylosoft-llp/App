(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{122:function(t,e,n){"use strict";var r=n(405);e.a=r.a},443:function(t,e,n){"use strict";var r=n(199),o=n(126),c=n(198),l=n(0),d=n(5),h=Object(d.a)(r.a,Object(o.a)("windowGroup","v-window-item","v-window"));e.a=h.extend().extend().extend({name:"v-window-item",directives:{Touch:c.a},props:{disabled:Boolean,reverseTransition:{type:[Boolean,String],default:void 0},transition:{type:[Boolean,String],default:void 0},value:{required:!1}},data:function(){return{isActive:!1,inTransition:!1}},computed:{classes:function(){return this.groupClasses},computedTransition:function(){return this.windowGroup.internalReverse?void 0!==this.reverseTransition?this.reverseTransition||"":this.windowGroup.computedTransition:void 0!==this.transition?this.transition||"":this.windowGroup.computedTransition}},methods:{genDefaultSlot:function(){return this.$slots.default},genWindowItem:function(){return this.$createElement("div",{staticClass:"v-window-item",class:this.classes,directives:[{name:"show",value:this.isActive}],on:this.$listeners},this.genDefaultSlot())},onAfterTransition:function(){this.inTransition&&(this.inTransition=!1,this.windowGroup.transitionCount>0&&(this.windowGroup.transitionCount--,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=void 0)))},onBeforeTransition:function(){this.inTransition||(this.inTransition=!0,0===this.windowGroup.transitionCount&&(this.windowGroup.transitionHeight=Object(l.g)(this.windowGroup.$el.clientHeight)),this.windowGroup.transitionCount++)},onTransitionCancelled:function(){this.onAfterTransition()},onEnter:function(t){var e=this;this.inTransition&&this.$nextTick((function(){e.computedTransition&&e.inTransition&&(e.windowGroup.transitionHeight=Object(l.g)(t.clientHeight))}))}},render:function(t){var e=this;return t("transition",{props:{name:this.computedTransition},on:{beforeEnter:this.onBeforeTransition,afterEnter:this.onAfterTransition,enterCancelled:this.onTransitionCancelled,beforeLeave:this.onBeforeTransition,afterLeave:this.onAfterTransition,leaveCancelled:this.onTransitionCancelled,enter:this.onEnter}},this.showLazyContent((function(){return[e.genWindowItem()]})))}})},444:function(t,e,n){"use strict";n(20),n(123),n(195);var r=n(2),o=(n(445),n(198)),c=n(122),l=n(85),d=n(128);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-window",directives:{Touch:o.a},provide:function(){return{windowGroup:this}},props:{activeClass:{type:String,default:"v-window-item--active"},continuous:Boolean,mandatory:{type:Boolean,default:!0},nextIcon:{type:[Boolean,String],default:"$next"},prevIcon:{type:[Boolean,String],default:"$prev"},reverse:Boolean,showArrows:Boolean,showArrowsOnHover:Boolean,touch:Object,touchless:Boolean,value:{required:!1},vertical:Boolean},data:function(){return{changedByDelimiters:!1,internalHeight:void 0,transitionHeight:void 0,transitionCount:0,isBooted:!1,isReverse:!1}},computed:{isActive:function(){return this.transitionCount>0},classes:function(){return v(v({},d.a.options.computed.classes.call(this)),{},{"v-window--show-arrows-on-hover":this.showArrowsOnHover})},computedTransition:function(){if(!this.isBooted)return"";var t=this.vertical?"y":"x",e=(this.internalReverse?!this.isReverse:this.isReverse)?"-reverse":"";return"v-window-".concat(t).concat(e,"-transition")},hasActiveItems:function(){return Boolean(this.items.find((function(t){return!t.disabled})))},hasNext:function(){return this.continuous||this.internalIndex<this.items.length-1},hasPrev:function(){return this.continuous||this.internalIndex>0},internalIndex:function(){var t=this;return this.items.findIndex((function(e,i){return t.internalValue===t.getValue(e,i)}))},internalReverse:function(){return this.$vuetify.rtl?!this.reverse:this.reverse}},watch:{internalIndex:function(t,e){this.isReverse=this.updateReverse(t,e)}},mounted:function(){var t=this;window.requestAnimationFrame((function(){return t.isBooted=!0}))},methods:{genContainer:function(){var t=[this.$slots.default];return this.showArrows&&t.push(this.genControlIcons()),this.$createElement("div",{staticClass:"v-window__container",class:{"v-window__container--is-active":this.isActive},style:{height:this.internalHeight||this.transitionHeight}},t)},genIcon:function(t,e,n){var r,o=this,d={click:function(t){t.stopPropagation(),o.changedByDelimiters=!0,n()}},h={"aria-label":this.$vuetify.lang.t("$vuetify.carousel.".concat(t))},v=null!=(r=null==this.$scopedSlots[t]?void 0:this.$scopedSlots[t]({on:d,attrs:h}))?r:[this.$createElement(c.a,{props:{icon:!0},attrs:h,on:d},[this.$createElement(l.a,{props:{large:!0}},e)])];return this.$createElement("div",{staticClass:"v-window__".concat(t)},v)},genControlIcons:function(){var t=[],e=this.$vuetify.rtl?this.nextIcon:this.prevIcon;if(this.hasPrev&&e&&"string"==typeof e){var n=this.genIcon("prev",e,this.prev);n&&t.push(n)}var r=this.$vuetify.rtl?this.prevIcon:this.nextIcon;if(this.hasNext&&r&&"string"==typeof r){var o=this.genIcon("next",r,this.next);o&&t.push(o)}return t},getNextIndex:function(t){var e=(t+1)%this.items.length;return this.items[e].disabled?this.getNextIndex(e):e},getPrevIndex:function(t){var e=(t+this.items.length-1)%this.items.length;return this.items[e].disabled?this.getPrevIndex(e):e},next:function(){if(this.hasActiveItems&&this.hasNext){var t=this.getNextIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},prev:function(){if(this.hasActiveItems&&this.hasPrev){var t=this.getPrevIndex(this.internalIndex),e=this.items[t];this.internalValue=this.getValue(e,t)}},updateReverse:function(t,e){var n=this.items.length,r=n-1;return n<=2?t<e:t===r&&0===e||(0!==t||e!==r)&&t<e}},render:function(t){var e=this,data={staticClass:"v-window",class:this.classes,directives:[]};if(!this.touchless){var n=this.touch||{left:function(){e.$vuetify.rtl?e.prev():e.next()},right:function(){e.$vuetify.rtl?e.next():e.prev()},end:function(t){t.stopPropagation()},start:function(t){t.stopPropagation()}};data.directives.push({name:"touch",value:n})}return t("div",data,[this.genContainer()])}})},445:function(t,e,n){var content=n(446);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("0d135400",content,!0,{sourceMap:!1})},446:function(t,e,n){(e=n(7)(!1)).push([t.i,".v-window{overflow:hidden}.v-window__container{height:inherit;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window__container--is-active{overflow:hidden}.v-window__next,.v-window__prev{background:rgba(0,0,0,.3);border-radius:50%;position:absolute;margin:0 16px;top:calc(50% - 20px);z-index:1}.v-window__next .v-btn:hover,.v-window__prev .v-btn:hover{background:none}.v-application--is-ltr .v-window__prev{left:0}.v-application--is-ltr .v-window__next,.v-application--is-rtl .v-window__prev{right:0}.v-application--is-rtl .v-window__next{left:0}.v-window--show-arrows-on-hover{overflow:hidden}.v-window--show-arrows-on-hover .v-window__next,.v-window--show-arrows-on-hover .v-window__prev{transition:transform .2s cubic-bezier(.25,.8,.5,1)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(-200%)}.v-application--is-ltr .v-window--show-arrows-on-hover .v-window__next,.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__prev{transform:translateX(200%)}.v-application--is-rtl .v-window--show-arrows-on-hover .v-window__next{transform:translateX(-200%)}.v-window--show-arrows-on-hover:hover .v-window__next,.v-window--show-arrows-on-hover:hover .v-window__prev{transform:translateX(0)}.v-window-x-reverse-transition-enter-active,.v-window-x-reverse-transition-leave-active,.v-window-x-transition-enter-active,.v-window-x-transition-leave-active,.v-window-y-reverse-transition-enter-active,.v-window-y-reverse-transition-leave-active,.v-window-y-transition-enter-active,.v-window-y-transition-leave-active{transition:.3s cubic-bezier(.25,.8,.5,1)}.v-window-x-reverse-transition-leave,.v-window-x-reverse-transition-leave-to,.v-window-x-transition-leave,.v-window-x-transition-leave-to,.v-window-y-reverse-transition-leave,.v-window-y-reverse-transition-leave-to,.v-window-y-transition-leave,.v-window-y-transition-leave-to{position:absolute!important;top:0;width:100%}.v-window-x-transition-enter{transform:translateX(100%)}.v-window-x-reverse-transition-enter,.v-window-x-transition-leave-to{transform:translateX(-100%)}.v-window-x-reverse-transition-leave-to{transform:translateX(100%)}.v-window-y-transition-enter{transform:translateY(100%)}.v-window-y-reverse-transition-enter,.v-window-y-transition-leave-to{transform:translateY(-100%)}.v-window-y-reverse-transition-leave-to{transform:translateY(100%)}",""]),t.exports=e},526:function(t,e,n){var content=n(527);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("2d62e390",content,!0,{sourceMap:!1})},527:function(t,e,n){(e=n(7)(!1)).push([t.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),t.exports=e},543:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{id:"",images:["/banner1.jpeg","/banner2.jpeg"],int_partners:[{name:"dhl",src:"/partners/international/dhl.jpeg"},{name:"fedex",src:"/partners/international/fedex.jpeg"},{name:"ups",src:"/partners/international/ups.jpeg"},{name:"aramex",src:"/partners/international/aramex.jpeg"},{name:"tnt",src:"/partners/international/tnt.jpeg"}],dom_partners:[{name:"3",src:"/partners/domestic/3.jpeg"},{name:"delhivery",src:"/partners/domestic/delhivery.jpeg"},{name:"ecom",src:"/partners/domestic/ecom.jpeg"},{name:"icl",src:"/partners/domestic/icl.jpeg"},{name:"xpressbees",src:"/partners/domestic/xpressbees.jpeg"},{name:"amazon",src:"/partners/domestic/amazon.jpeg"},{name:"dotzot",src:"/partners/domestic/dotzot.jpeg"},{name:"ekart",src:"/partners/domestic/ekart.jpeg"},{name:"shadowfox",src:"/partners/domestic/shadowfox.jpeg"},{name:"bluedart",src:"/partners/domestic/bluedart.jpeg"},{name:"dtdc",src:"/partners/domestic/dtdc.jpeg"},{name:"fedex",src:"/partners/domestic/fedex.jpeg"},{name:"trackon",src:"/partners/domestic/trackon.jpeg"}],b2b_partners:[{name:"delhivery",src:"/partners/b2b/delhivery.jpeg"},{name:"fedex",src:"/partners/b2b/fedex.jpeg"},{name:"xpressbees",src:"/partners/b2b/xpressbees.jpeg"},{name:"gati",src:"/partners/b2b/gati.jpeg"},{name:"amazon",src:"/partners/b2b/amazon.jpeg"},{name:"safexpress",src:"/partners/b2b/safexpress.jpeg"}]}},mounted:function(){},methods:{}},o=n(23),c=n(21),l=n.n(c),d=n(405),h=n(190),v=(n(16),n(50),n(2)),w=(n(526),n(444)),m=n(122),f=n(85),y=n(259),x=n(128),_=x.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return x.a.options.computed.classes.call(this)}},methods:{genData:x.a.options.methods.genData}}),j=n(0),O=n(6);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function T(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var k=w.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(t){return t>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return T(T({},w.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(t,e){t!==e&&t&&(this.internalHeight=t)},cycle:function(t){t?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(O.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:w.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var t=this,e=this.items.length,n=[],i=0;i<e;i++){var r=this.$createElement(m.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,e)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(f.a,{props:{size:18}},this.delimiterIcon)]);n.push(r)}return this.$createElement(_,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(e){t.internalValue=e}}},n)},genProgress:function(){return this.$createElement(y.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(t){var e=w.a.options.render.call(this,t);return e.data.style="height: ".concat(Object(j.g)(this.height),";"),this.hideDelimiters||e.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&e.children.push(this.genProgress()),e}}),I=n(443),P=n(150),$=n(5),B=n(56);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=Object($.a)(I.a,B.a).extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(P.a,{staticClass:"v-carousel__item",props:S(S({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(j.r)(this))]},genWindowItem:function(){var t=this.generateRouteLink(),e=t.tag,data=t.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(e,data,this.genDefaultSlot())}}}),E=n(416),V=n(417),H=n(428),G=n(419),z=n(452),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[n("v-carousel",{attrs:{"hide-delimiter-background":"","hide-delimiters":"",height:"100%"}},t._l(t.images,(function(img,t){return n("v-carousel-item",{key:t,attrs:{src:img,contain:""}})})),1),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],staticClass:"my-8"}),t._v(" "),n("v-container",{staticClass:"my-4"},[n("v-row",[n("v-col",{attrs:{md:"6"}},[n("h1",{staticClass:"primary--text font-weight-black"},[t._v("About FirstStar")]),t._v(" "),n("p",{staticClass:"blue-grey--text"},[t._v("\n          We are the fastest Courier service in Hyderabad. We are in courier services since 2000. FirstStar is arguably the best international courier service in Hyderabad.We are quoting with competative price. We have professional team and we do with world wide channel partners.\n          "),n("br"),n("br"),t._v("\n          First Star is one of the leading courier services company in Hyderabad. All over India, we are proud to offer professional service to our clients. We offer door to door service. We have a shipping-focused approach, offering shipping delivery. \n          "),n("v-btn",{attrs:{text:"",color:"secondary",to:"/about-us"}},[t._v("Learn More...")])],1)]),t._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-img",{attrs:{src:"/about.jpeg"}})],1)],1)],1),t._v(" "),n("v-card",{staticStyle:{"background-image":"url('/courier-background.jpeg')",width:"100%","background-size":"cover","background-position":"bottom center","box-shadow":"inset #00000aa6 0px 1px 200px 180px !important"},attrs:{tile:"",flat:"",dark:""}},[n("v-container",{staticClass:"text-center py-16 d-flex flex-column align-center"},[n("h1",[t._v("Track Your Shipment")]),t._v(" "),n("p",[t._v("Seamlessly track your shipment with FirstStar smart tracking solution")]),t._v(" "),n("div",{staticClass:"d-flex flex-row align-center"},[n("v-text-field",{staticClass:"mr-1",staticStyle:{"max-width":"500px"},attrs:{"append-icon":"mdi-magnify","hide-details":"","solo-inverted":"",label:"Tracking Id"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.$router.push("track-ship/?id="+t.id)}},model:{value:t.id,callback:function(e){t.id=e},expression:"id"}}),t._v(" "),n("v-btn",{attrs:{large:"",to:"track-ship?id="+t.id,color:"secondary"}},[t._v("TRACK NOW")])],1)])],1),t._v(" "),n("v-container",{staticClass:"text-center"},[n("h1",{staticClass:"font-weight-bold primary--text"},[t._v("International Channel Partners")]),t._v(" "),n("div",{staticClass:"d-flex flex-wrap justify-center"},t._l(t.int_partners,(function(p,i){return n("div",{key:i},[n("v-img",{staticClass:"ma-4",attrs:{width:"80",height:"80","max-height":"80",contain:"",src:p.src,alt:p.name}})],1)})),0)]),t._v(" "),n("v-container",{staticClass:"text-center"},[n("h1",{staticClass:"font-weight-bold primary--text"},[t._v("Domestic Channel Partners")]),t._v(" "),n("div",{staticClass:"d-flex flex-wrap justify-center"},t._l(t.dom_partners,(function(t,e){return n("div",{key:e},[n("v-img",{staticClass:"ma-4",attrs:{width:"80",height:"80","max-height":"80",contain:"",src:t.src,alt:t.name}})],1)})),0)]),t._v(" "),n("v-container",{staticClass:"text-center"},[n("h1",{staticClass:"font-weight-bold primary--text"},[t._v("B2B Channel Partners")]),t._v(" "),n("div",{staticClass:"d-flex flex-wrap justify-center"},t._l(t.b2b_partners,(function(t,e){return n("div",{key:e},[n("v-img",{staticClass:"ma-4",attrs:{width:"80",height:"80","max-height":"80",contain:"",src:t.src,alt:t.name}})],1)})),0)])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCarousel:k,VCarouselItem:A,VCol:E.a,VContainer:V.a,VImg:P.a,VLayout:H.a,VRow:G.a,VTextField:z.a})}}]);