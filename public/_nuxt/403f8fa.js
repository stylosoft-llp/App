(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{473:function(e,t,r){"use strict";r(213);var n=r(214);t.a=Object(n.a)("layout")},495:function(e,t,r){"use strict";var n=r(54);t.a=n.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return n.a.options.computed.classes.call(this)}},methods:{genData:n.a.options.methods.genData}})},561:function(e,t,r){var content=r(562);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(7).default)("2d62e390",content,!0,{sourceMap:!1})},562:function(e,t,r){(t=r(6)(!1)).push([e.i,".v-carousel{overflow:hidden;position:relative;width:100%}.v-carousel__controls{align-items:center;background:rgba(0,0,0,.3);bottom:0;display:flex;height:50px;justify-content:center;list-style-type:none;position:absolute;width:100%;z-index:1}.v-carousel__controls>.v-item-group{flex:0 1 auto}.v-carousel__controls__item{margin:0 8px}.v-carousel__controls__item .v-icon{opacity:.5}.v-carousel__controls__item--active .v-icon{opacity:1;vertical-align:middle}.v-carousel__controls__item:hover{background:none}.v-carousel__controls__item:hover .v-icon{opacity:.8}.v-carousel__progress{margin:0;position:absolute;bottom:0;left:0;right:0}.v-carousel .v-window-item{display:block;height:inherit;text-decoration:none}.v-carousel--hide-delimiter-background .v-carousel__controls{background:transparent}.v-carousel--vertical-delimiters .v-carousel__controls{height:100%!important;width:50px}",""]),e.exports=t},580:function(e,t,r){"use strict";r.r(t);var n={data:function(){return{id:"",images:["/banner1.jpeg","/banner2.jpeg"],int_partners:[{name:"dhl",src:"/partners/international/dhl.jpeg"},{name:"fedex",src:"/partners/international/fedex.jpeg"},{name:"ups",src:"/partners/international/ups.jpeg"},{name:"aramex",src:"/partners/international/aramex.jpeg"},{name:"tnt",src:"/partners/international/tnt.jpeg"}],dom_partners:[{name:"3",src:"/partners/domestic/3.jpeg"},{name:"delhivery",src:"/partners/domestic/delhivery.jpeg"},{name:"ecom",src:"/partners/domestic/ecom.jpeg"},{name:"icl",src:"/partners/domestic/icl.jpeg"},{name:"xpressbees",src:"/partners/domestic/xpressbees.jpeg"},{name:"amazon",src:"/partners/domestic/amazon.jpeg"},{name:"dotzot",src:"/partners/domestic/dotzot.jpeg"},{name:"ekart",src:"/partners/domestic/ekart.jpeg"},{name:"shadowfox",src:"/partners/domestic/shadowfox.jpeg"},{name:"bluedart",src:"/partners/domestic/bluedart.jpeg"},{name:"dtdc",src:"/partners/domestic/dtdc.jpeg"},{name:"fedex",src:"/partners/domestic/fedex.jpeg"},{name:"trackon",src:"/partners/domestic/trackon.jpeg"}],b2b_partners:[{name:"delhivery",src:"/partners/b2b/delhivery.jpeg"},{name:"fedex",src:"/partners/b2b/fedex.jpeg"},{name:"xpressbees",src:"/partners/b2b/xpressbees.jpeg"},{name:"gati",src:"/partners/b2b/gati.jpeg"},{name:"amazon",src:"/partners/b2b/amazon.jpeg"},{name:"safexpress",src:"/partners/b2b/safexpress.jpeg"}]}},mounted:function(){},methods:{}},o=r(22),c=r(21),l=r.n(c),d=r(201),h=r(203),m=(r(10),r(31),r(1)),v=(r(561),r(206)),f=r(58),y=r(37),_=r(275),w=r(495),x=r(0),j=r(5);function O(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function k(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?O(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):O(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var C=v.a.extend({name:"v-carousel",props:{continuous:{type:Boolean,default:!0},cycle:Boolean,delimiterIcon:{type:String,default:"$delimiter"},height:{type:[Number,String],default:500},hideDelimiters:Boolean,hideDelimiterBackground:Boolean,interval:{type:[Number,String],default:6e3,validator:function(e){return e>0}},mandatory:{type:Boolean,default:!0},progress:Boolean,progressColor:String,showArrows:{type:Boolean,default:!0},verticalDelimiters:{type:String,default:void 0}},data:function(){return{internalHeight:this.height,slideTimeout:void 0}},computed:{classes:function(){return k(k({},v.a.options.computed.classes.call(this)),{},{"v-carousel":!0,"v-carousel--hide-delimiter-background":this.hideDelimiterBackground,"v-carousel--vertical-delimiters":this.isVertical})},isDark:function(){return this.dark||!this.light},isVertical:function(){return null!=this.verticalDelimiters}},watch:{internalValue:"restartTimeout",interval:"restartTimeout",height:function(e,t){e!==t&&e&&(this.internalHeight=e)},cycle:function(e){e?this.restartTimeout():(clearTimeout(this.slideTimeout),this.slideTimeout=void 0)}},created:function(){this.$attrs.hasOwnProperty("hide-controls")&&Object(j.a)("hide-controls",':show-arrows="false"',this)},mounted:function(){this.startTimeout()},methods:{genControlIcons:function(){return this.isVertical?null:v.a.options.methods.genControlIcons.call(this)},genDelimiters:function(){return this.$createElement("div",{staticClass:"v-carousel__controls",style:{left:"left"===this.verticalDelimiters&&this.isVertical?0:"auto",right:"right"===this.verticalDelimiters?0:"auto"}},[this.genItems()])},genItems:function(){for(var e=this,t=this.items.length,r=[],i=0;i<t;i++){var n=this.$createElement(f.a,{staticClass:"v-carousel__controls__item",attrs:{"aria-label":this.$vuetify.lang.t("$vuetify.carousel.ariaLabel.delimiter",i+1,t)},props:{icon:!0,small:!0,value:this.getValue(this.items[i],i)}},[this.$createElement(y.a,{props:{size:18}},this.delimiterIcon)]);r.push(n)}return this.$createElement(w.a,{props:{value:this.internalValue,mandatory:this.mandatory},on:{change:function(t){e.internalValue=t}}},r)},genProgress:function(){return this.$createElement(_.a,{staticClass:"v-carousel__progress",props:{color:this.progressColor,value:(this.internalIndex+1)/this.items.length*100}})},restartTimeout:function(){this.slideTimeout&&clearTimeout(this.slideTimeout),this.slideTimeout=void 0,window.requestAnimationFrame(this.startTimeout)},startTimeout:function(){this.cycle&&(this.slideTimeout=window.setTimeout(this.next,+this.interval>0?+this.interval:6e3))}},render:function(e){var t=v.a.options.render.call(this,e);return t.data.style="height: ".concat(Object(x.g)(this.height),";"),this.hideDelimiters||t.children.push(this.genDelimiters()),(this.progress||this.progressColor)&&t.children.push(this.genProgress()),t}}),D=r(205),P=r(166),T=r(3),S=r(47);function V(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function $(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?V(Object(source),!0).forEach((function(t){Object(m.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):V(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var E=Object(T.a)(D.a,S.a).extend({name:"v-carousel-item",inheritAttrs:!1,methods:{genDefaultSlot:function(){return[this.$createElement(P.a,{staticClass:"v-carousel__item",props:$($({},this.$attrs),{},{height:this.windowGroup.internalHeight}),on:this.$listeners,scopedSlots:{placeholder:this.$scopedSlots.placeholder}},Object(x.s)(this))]},genWindowItem:function(){var e=this.generateRouteLink(),t=e.tag,data=e.data;return data.staticClass="v-window-item",data.directives.push({name:"show",value:this.isActive}),this.$createElement(t,data,this.genDefaultSlot())}}}),I=r(460),B=r(461),z=r(473),A=r(463),W=r(446),component=Object(o.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{"align-center":"",column:"","justify-center":""}},[r("v-carousel",{attrs:{"hide-delimiter-background":"","hide-delimiters":"",height:"100%"}},e._l(e.images,(function(img,e){return r("v-carousel-item",{key:e,attrs:{src:img,contain:""}})})),1),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.$vuetify.breakpoint.mdAndUp,expression:"$vuetify.breakpoint.mdAndUp"}],staticClass:"my-8"}),e._v(" "),r("v-container",{staticClass:"my-4"},[r("v-row",[r("v-col",{attrs:{md:"6"}},[r("h1",{staticClass:"primary--text font-weight-black"},[e._v("About FirstStar")]),e._v(" "),r("p",{staticClass:"blue-grey--text"},[e._v("\n          We are the fastest Courier service in Hyderabad. We are in courier services since 2000. FirstStar is arguably the best international courier service in Hyderabad.We are quoting with competative price. We have professional team and we do with world wide channel partners.\n          "),r("br"),r("br"),e._v("\n          First Star is one of the leading courier services company in Hyderabad. All over India, we are proud to offer professional service to our clients. We offer door to door service. We have a shipping-focused approach, offering shipping delivery. \n          "),r("v-btn",{attrs:{text:"",color:"secondary",to:"/about-us"}},[e._v("Learn More...")])],1)]),e._v(" "),r("v-col",{attrs:{md:"6"}},[r("v-img",{attrs:{src:"/about.jpeg"}})],1)],1)],1),e._v(" "),r("v-card",{staticStyle:{"background-image":"url('/courier-background.jpeg')",width:"100%","background-size":"cover","background-position":"bottom center","box-shadow":"inset #00000aa6 0px 1px 200px 180px !important"},attrs:{tile:"",flat:"",dark:""}},[r("v-container",{staticClass:"text-center py-16 d-flex flex-column align-center"},[r("h1",[e._v("Track Your Shipment")]),e._v(" "),r("p",[e._v("Seamlessly track your shipment with FirstStar smart tracking solution")]),e._v(" "),r("div",{staticClass:"d-flex flex-row align-center"},[r("v-text-field",{staticClass:"mr-1",staticStyle:{"max-width":"500px"},attrs:{"append-icon":"mdi-magnify","hide-details":"","solo-inverted":"",label:"Tracking Id"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.$router.push("track-ship/?id="+e.id)}},model:{value:e.id,callback:function(t){e.id=t},expression:"id"}}),e._v(" "),r("v-btn",{attrs:{large:"",to:"track-ship?id="+e.id,color:"secondary"}},[e._v("TRACK NOW")])],1)])],1),e._v(" "),r("v-container",{staticClass:"text-center"},[r("h1",{staticClass:"font-weight-bold primary--text"},[e._v("International Channel Partners")]),e._v(" "),r("div",{staticClass:"d-flex flex-wrap justify-center"},e._l(e.int_partners,(function(p,i){return r("div",{key:i},[r("v-img",{staticClass:"ma-4",attrs:{width:"80",height:"80","max-height":"80",contain:"",src:p.src,alt:p.name}})],1)})),0)]),e._v(" "),r("v-container",{staticClass:"text-center"},[r("h1",{staticClass:"font-weight-bold primary--text"},[e._v("Domestic Channel Partners")]),e._v(" "),r("div",{staticClass:"d-flex flex-wrap justify-center"},e._l(e.dom_partners,(function(e,t){return r("div",{key:t},[r("v-img",{staticClass:"ma-4",attrs:{width:"80",height:"80","max-height":"80",contain:"",src:e.src,alt:e.name}})],1)})),0)]),e._v(" "),r("v-container",{staticClass:"text-center"},[r("h1",{staticClass:"font-weight-bold primary--text"},[e._v("B2B Channel Partners")]),e._v(" "),r("div",{staticClass:"d-flex flex-wrap justify-center"},e._l(e.b2b_partners,(function(e,t){return r("div",{key:t},[r("v-img",{staticClass:"ma-4",attrs:{width:"80",height:"80","max-height":"80",contain:"",src:e.src,alt:e.name}})],1)})),0)])],1)}),[],!1,null,null,null);t.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCarousel:C,VCarouselItem:E,VCol:I.a,VContainer:B.a,VImg:P.a,VLayout:z.a,VRow:A.a,VTextField:W.a})}}]);