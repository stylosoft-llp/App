(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{428:function(t,e,n){"use strict";n(196);var r=n(197);e.a=Object(r.a)("layout")},437:function(t,e,n){"use strict";var r=n(2),o=(n(438),n(18)),l=n(5);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(l.a)(o.a).extend({name:"v-subheader",props:{inset:Boolean},render:function(t){return t("div",{staticClass:"v-subheader",class:h({"v-subheader--inset":this.inset},this.themeClasses),attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},438:function(t,e,n){var content=n(439);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(8).default)("e8b41e5e",content,!0,{sourceMap:!1})},439:function(t,e,n){(e=n(7)(!1)).push([t.i,".theme--light.v-subheader{color:rgba(0,0,0,.6)}.theme--dark.v-subheader{color:hsla(0,0%,100%,.7)}.v-subheader{align-items:center;display:flex;height:48px;font-size:.875rem;font-weight:400;padding:0 16px}.v-subheader--inset{margin-left:56px}",""]),t.exports=e},540:function(t,e,n){"use strict";n.r(e);n(13),n(81);var r=n(2),o={layout:"adminDesktop",data:function(){var t;return t={gradient:["skyblue","purple","indigo"],labels:[],analytics:[{name:"New",value:45},{name:"Processing",value:30},{name:"Completed",value:50},{name:"Cancelled",value:5}]},Object(r.a)(t,"labels",["Mon","Tue","Wed","Thu","Fri","Sat","Sun","Mon","Tue"]),Object(r.a)(t,"values",[0,2,5,6,5,6,6,7,9]),Object(r.a)(t,"leadCount",[]),Object(r.a)(t,"colors",{New:"red",Processing:"orange",Cancelled:"blue-grey",Completed:"blue"}),Object(r.a)(t,"items",[{icon:"mdi-view-dashboard",title:"Dashboard",to:"/admin#dashboard"},{icon:"mdi-asterisk",title:"New Orders",to:"/admin/new"},{icon:"mdi-format-list-checks",title:"Processing",to:"/admin/processing"},{icon:"mdi-archive",title:"Completed",to:"/admin/completed"},{icon:"mdi-view-list",title:"Queries",to:"/admin/queries"},{icon:"mdi-home",title:"Home",to:"/"}]),t},mounted:function(){},methods:{analyze:function(){var t=this;this.$axios.get("auth/admin/analytics").then((function(e){t.labels=e.data.days,t.values=e.data.leads})),this.$axios.get("auth/admin/leadcount").then((function(e){t.leadCount=e.data}))}}},l=n(23),c=n(21),h=n.n(c),d=n(190),f=n(152),m=n(416),v=n(417),y=n(189),x=n(428),w=n(191),O=n(113),j=n(192),S=n(78),_=n(419),L=(n(20),n(275),n(33),n(49),n(80),n(16),n(79),n(12)),k=n(19),D=n(5),P=n(125);function C(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,c=t.length,h=Math.max.apply(Math,Object(P.a)(t)),d=Math.min.apply(Math,Object(P.a)(t)),f=(r-n)/(c-1),m=(l-o)/(h-d||1);return t.map((function(t,e){return{x:n+e*f,y:l-(t-d)*m,value:t}}))}function $(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,c=t.length,h=Math.max.apply(Math,Object(P.a)(t)),d=Math.min.apply(Math,Object(P.a)(t));d>0&&(d=0),h<0&&(h=0);var f=r/c,m=(l-o)/(h-d||1),v=l-Math.abs(d*m);return t.map((function(t,e){var r=Math.abs(m*t);return{x:n+e*f,y:v-r+ +(t<0)*r,height:r,value:t}}))}n(66);function V(t){return parseInt(t,10)}function M(t,e,n){return V(t.x+n.x)===V(2*e.x)&&V(t.y+n.y)===V(2*e.y)}function E(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function W(t,e,n){var r=t.x-e.x,o=t.y-e.y,l=Math.sqrt(r*r+o*o),c=r/l,h=o/l;return{x:e.x+c*n,y:e.y+h*n}}function z(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,o=t.shift(),l=t[t.length-1];return(n?"M".concat(o.x," ").concat(r-o.x+2," L").concat(o.x," ").concat(o.y):"M".concat(o.x," ").concat(o.y))+t.map((function(n,r){var l=t[r+1],c=t[r-1]||o,h=l&&M(l,n,c);if(!l||h)return"L".concat(n.x," ").concat(n.y);var d=Math.min(E(c,n),E(l,n)),f=d/2<e?d/2:e,m=W(c,n,f),v=W(l,n,f);return"L".concat(m.x," ").concat(m.y,"S").concat(n.x," ").concat(n.y," ").concat(v.x," ").concat(v.y)})).join("")+(n?"L".concat(l.x," ").concat(r-o.x+2," Z"):"")}function N(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function B(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?N(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):N(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var Y=Object(D.a)(k.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,i=0;t.length<n;i++){var r=e[i],o=this.labels[i];o||(o="object"===Object(L.a)(r)?r.value:r),t.push({x:r.x,value:String(o)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?C(this.normalizedValues,this.boundary):$(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),o=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},o)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=C(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:z(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,i){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,i)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=$(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var o=this,l="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return o.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:l,ry:l}},[o.autoDraw?o.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(o.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:B(B({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}}),H=n(437),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{container:"",column:""}},[n("v-row",t._l(t.analytics,(function(e,r){return n("v-col",{key:r},[n("v-card",{attrs:{dark:"",color:t.colors[e.name]}},[n("v-container",[t._v("\n\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t"),n("h1",{staticClass:"text-right"},[t._v(t._s(e.value))])])],1)],1)})),1),t._v(" "),n("v-row",[n("v-col",{attrs:{md:"6"}},[n("v-card",{attrs:{height:"400"}},[n("v-container",[n("v-card-subtitle",[t._v("\n\t\t\tOrders This Week\n\t\t\t")]),t._v(" "),n("v-sparkline",{staticClass:"font-weight-bold",attrs:{labels:t.labels,color:"blue",value:t.values,gradient:["cyan","blue","indigo"],smooth:10,padding:20,height:160,"line-width":2,"stroke-linecap":"round","gradient-direction":"right","auto-draw":""}})],1)],1)],1),t._v(" "),n("v-col",{attrs:{md:"6"}},[n("v-card",{staticClass:"pa-2"},[n("v-list",[n("v-subheader",[t._v("Quick Navigation")]),t._v(" "),t._l(t.items,(function(e,i){return n("v-list-item",{key:i,staticClass:"my-1",staticStyle:{border:"0.1px solid #ddd"},attrs:{to:e.to}},[n("v-list-item-action",[n("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)}))],2)],1)],1),t._v(" "),n("v-col",[n("v-card",{staticClass:"pa-2",staticStyle:{height:"350px",overflow:"scroll"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:d.a,VCardSubtitle:f.a,VCol:m.a,VContainer:v.a,VIcon:y.a,VLayout:x.a,VList:w.a,VListItem:O.a,VListItemAction:j.a,VListItemContent:S.a,VListItemTitle:S.c,VRow:_.a,VSparkline:Y,VSubheader:H.a})}}]);