(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1003:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(78),n(6),n(33),n(34),{transition:{name:"home"},layout:"appDesktop",data:function(){var t;return t={labels:[],deleting:!1,time:"",analytics:[]},Object(r.a)(t,"labels",["Mon","Tue","Wed","Thu","Fri","Sat","sun"]),Object(r.a)(t,"values",[0,0,10,0,0,0,10]),Object(r.a)(t,"stats",[]),Object(r.a)(t,"colors",{Products:{color:"green darken-1",icon:"mdi-account-hard-hat"},Services:{color:"indigo darken-1",icon:"mdi-account-tie"},Customers:{color:"red darken-1",icon:"mdi-account-tie"},Users:{color:"orange darken-1",icon:"mdi-account-tie"}}),Object(r.a)(t,"chartData",{labels:["Active","Inactive"],datasets:[{backgroundColor:["blue","#00acee"],data:[3,1]}]}),Object(r.a)(t,"chart2Data",{labels:["Completed","Pending","Cancelled","unassigned"],datasets:[{backgroundColor:["#32cd32","#FFBF00","grey","red"],data:[7,2,6,3]}]}),t},mounted:function(){setInterval(this.updateTime,1),this.analyze()},components:{Doughnut:function(){return Promise.all([n.e(5),n.e(10)]).then(n.bind(null,1072))},Polar:function(){return Promise.all([n.e(5),n.e(11)]).then(n.bind(null,1073))}},methods:{updateTime:function(){var t=new Date,time=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds()+":"+t.getMilliseconds().toLocaleString("en-us",{minimumIntegerDigits:3});this.time=time},analyze:function(){var t=this;this.$axios.get("admin/analytics").then((function(t){})),this.$axios.get("admin/stats").then((function(e){t.stats=e.data}))},removeOldShippings:function(){var t=this;window.confirm("Confirm Deleting Shippings Older Than 90 Days?")&&(this.deleting=!0,this.$axios.post("auth/admin/destroy-old").then((function(e){t.$toast.success("Deleted Successfully",{icon:"mdi-check-circle"}),t.deleting=!1}),(function(t){})))}}}),l=(n(806),n(27)),c=n(31),h=n.n(c),d=n(211),f=n(177),m=n(505),v=n(506),y=n(210),x=n(515),w=n(508),_=n(798),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{staticClass:" py-2",attrs:{column:"","align-center":""}},[n("v-row",[n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"pa-2 rounded-lg",attrs:{color:"#ffffff88",height:t.$vuetify.breakpoint.xl?"500":"260"}},[n("p",{staticClass:"my-0 font-weight-bold"},[t._v("Statistics")]),t._v(" "),n("v-row",{staticStyle:{height:"100%"},attrs:{dense:""}},t._l(t.stats,(function(e,r){return n("v-col",{key:r,attrs:{width:"100%",height:"100%",cols:"6",md:"6"}},[t.colors[r]?n("v-card",{staticClass:"rounded-lg py-6 white--text",attrs:{to:"/app/"+r,height:"100%",elevation:6,dark:"",color:t.colors[r].color}},[n("v-row",[n("v-col",{staticClass:"d-flex align-center justify-end",attrs:{cols:"3"}},[n("v-card",{staticClass:"pa-2",staticStyle:{"box-shadow":"2px 2px 4px 0px #00000055"},attrs:{outlined:"",light:""}},[n("v-icon",{attrs:{color:t.colors[r].color,size:t.$vuetify.breakpoint.xl?"100":"24"}},[t._v(t._s(t.colors[r].icon))])],1)],1),t._v(" "),n("v-col",{class:t.$vuetify.breakpoint.xl&&"d-flex flex-column",attrs:{cols:"9"}},[n("p",{staticClass:"my-0",style:t.$vuetify.breakpoint.xl&&"font-size:40px !important;"},[t._v(t._s(r))]),t._v(" "),n("h2",{staticClass:"my-0",style:t.$vuetify.breakpoint.xl&&"font-size:60px;"},[t._v(t._s(e))])])],1)],1):t._e()],1)})),1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"rounded-lg",attrs:{color:"#ffffff88",height:t.$vuetify.breakpoint.xl?"500":"260"}},[n("v-container",[n("v-card-subtitle",[t._v(" Tickets Of This Week ")]),t._v(" "),n("v-sparkline",{staticClass:"font-weight-bold",attrs:{labels:t.labels,color:"blue",value:t.values,gradient:["red","purple","blue"],smooth:10,padding:20,height:80,"line-width":2,"stroke-linecap":"round","gradient-direction":"bottom","auto-draw":""}})],1)],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"pa-2 rounded-lg",attrs:{color:"#ffffff88"}},[n("v-card-title",[t._v("Tasks List")]),t._v(" "),n("Polar",{attrs:{chartdata:t.chart2Data,options:{responsive:!0,width:400,height:300}}})],1)],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"6"}},[n("v-card",{staticClass:"pa-2 rounded-lg",attrs:{color:"#ffffff88"}},[n("v-card-title",[t._v("Users")]),t._v(" "),n("Doughnut",{attrs:{chartdata:t.chartData,options:{responsive:!0,width:400,height:300}}})],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VCard:d.a,VCardSubtitle:f.b,VCardTitle:f.d,VCol:m.a,VContainer:v.a,VIcon:y.a,VLayout:x.a,VRow:w.a,VSparkline:_.a})},515:function(t,e,n){"use strict";n(222);var r=n(223);e.a=Object(r.a)("layout")},748:function(t,e,n){var content=n(807);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("274f6afe",content,!0,{sourceMap:!1})},798:function(t,e,n){"use strict";var r=n(3),o=n(19),l=(n(35),n(43),n(63),n(332),n(6),n(86),n(32),n(49),n(15),n(11),n(14),n(23),n(13),n(24),n(52)),c=n(16),h=n(221);function d(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,c=t.length,d=Math.max.apply(Math,Object(h.a)(t)),f=Math.min.apply(Math,Object(h.a)(t)),m=(r-n)/(c-1),v=(l-o)/(d-f||1);return t.map((function(t,e){return{x:n+e*m,y:l-(t-f)*v,value:t}}))}function f(t,e){var n=e.minX,r=e.maxX,o=e.minY,l=e.maxY,c=t.length,d=Math.max.apply(Math,Object(h.a)(t)),f=Math.min.apply(Math,Object(h.a)(t));f>0&&(f=0),d<0&&(d=0);var m=r/c,v=(l-o)/(d-f||1),y=l-Math.abs(f*v);return t.map((function(t,e){var r=Math.abs(v*t);return{x:n+e*m,y:y-r+ +(t<0)*r,height:r,value:t}}))}n(87);function m(t){return parseInt(t,10)}function v(t,e,n){return m(t.x+n.x)===m(2*e.x)&&m(t.y+n.y)===m(2*e.y)}function y(t,e){return Math.sqrt(Math.pow(e.x-t.x,2)+Math.pow(e.y-t.y,2))}function x(t,e,n){var r=t.x-e.x,o=t.y-e.y,l=Math.sqrt(r*r+o*o),c=r/l,h=o/l;return{x:e.x+c*n,y:e.y+h*n}}function w(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:75,o=t.shift(),l=t[t.length-1];return(n?"M".concat(o.x," ").concat(r-o.x+2," L").concat(o.x," ").concat(o.y):"M".concat(o.x," ").concat(o.y))+t.map((function(n,r){var l=t[r+1],c=t[r-1]||o,h=l&&v(l,n,c);if(!l||h)return"L".concat(n.x," ").concat(n.y);var d=Math.min(y(c,n),y(l,n)),f=d/2<e?d/2:e,m=x(c,n,f),w=x(l,n,f);return"L".concat(m.x," ").concat(m.y,"S").concat(n.x," ").concat(n.y," ").concat(w.x," ").concat(w.y)})).join("")+(n?"L".concat(l.x," ").concat(r-o.x+2," Z"):"")}function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(l.a).extend({name:"VSparkline",inheritAttrs:!1,props:{autoDraw:Boolean,autoDrawDuration:{type:Number,default:2e3},autoDrawEasing:{type:String,default:"ease"},autoLineWidth:{type:Boolean,default:!1},color:{type:String,default:"primary"},fill:{type:Boolean,default:!1},gradient:{type:Array,default:function(){return[]}},gradientDirection:{type:String,validator:function(t){return["top","bottom","left","right"].includes(t)},default:"top"},height:{type:[String,Number],default:75},labels:{type:Array,default:function(){return[]}},labelSize:{type:[Number,String],default:7},lineWidth:{type:[String,Number],default:4},padding:{type:[String,Number],default:8},showLabels:Boolean,smooth:{type:[Boolean,Number,String],default:!1},type:{type:String,default:"trend",validator:function(t){return["trend","bar"].includes(t)}},value:{type:Array,default:function(){return[]}},width:{type:[Number,String],default:300}},data:function(){return{lastLength:0}},computed:{parsedPadding:function(){return Number(this.padding)},parsedWidth:function(){return Number(this.width)},parsedHeight:function(){return parseInt(this.height,10)},parsedLabelSize:function(){return parseInt(this.labelSize,10)||7},totalHeight:function(){var t=this.parsedHeight;return this.hasLabels&&(t+=1.5*parseInt(this.labelSize,10)),t},totalWidth:function(){var t=this.parsedWidth;return"bar"===this.type&&(t=Math.max(this.value.length*this._lineWidth,t)),t},totalValues:function(){return this.value.length},_lineWidth:function(){if(this.autoLineWidth&&"trend"!==this.type){var t=this.parsedPadding*(this.totalValues+1);return(this.parsedWidth-t)/this.totalValues}return parseFloat(this.lineWidth)||4},boundary:function(){if("bar"===this.type)return{minX:0,maxX:this.totalWidth,minY:0,maxY:this.parsedHeight};var t=this.parsedPadding;return{minX:t,maxX:this.totalWidth-t,minY:t,maxY:this.parsedHeight-t}},hasLabels:function(){return Boolean(this.showLabels||this.labels.length>0||this.$scopedSlots.label)},parsedLabels:function(){for(var t=[],e=this._values,n=e.length,i=0;t.length<n;i++){var r=e[i],l=this.labels[i];l||(l="object"===Object(o.a)(r)?r.value:r),t.push({x:r.x,value:String(l)})}return t},normalizedValues:function(){return this.value.map((function(t){return"number"==typeof t?t:t.value}))},_values:function(){return"trend"===this.type?d(this.normalizedValues,this.boundary):f(this.normalizedValues,this.boundary)},textY:function(){var t=this.parsedHeight;return"trend"===this.type&&(t-=4),t},_radius:function(){return!0===this.smooth?8:Number(this.smooth)}},watch:{value:{immediate:!0,handler:function(){var t=this;this.$nextTick((function(){if(t.autoDraw&&"bar"!==t.type&&t.$refs.path){var path=t.$refs.path,e=path.getTotalLength();t.fill?(path.style.transformOrigin="bottom center",path.style.transition="none",path.style.transform="scaleY(0)",path.getBoundingClientRect(),path.style.transition="transform ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.transform="scaleY(1)"):(path.style.transition="none",path.style.strokeDasharray=e+" "+e,path.style.strokeDashoffset=Math.abs(e-(t.lastLength||0)).toString(),path.getBoundingClientRect(),path.style.transition="stroke-dashoffset ".concat(t.autoDrawDuration,"ms ").concat(t.autoDrawEasing),path.style.strokeDashoffset="0"),t.lastLength=e}}))}}},methods:{genGradient:function(){var t=this,e=this.gradientDirection,n=this.gradient.slice();n.length||n.push("");var r=Math.max(n.length-1,1),o=n.reverse().map((function(e,n){return t.$createElement("stop",{attrs:{offset:n/r,"stop-color":e||"currentColor"}})}));return this.$createElement("defs",[this.$createElement("linearGradient",{attrs:{id:this._uid,gradientUnits:"userSpaceOnUse",x1:"left"===e?"100%":"0",y1:"top"===e?"100%":"0",x2:"right"===e?"100%":"0",y2:"bottom"===e?"100%":"0"}},o)])},genG:function(t){return this.$createElement("g",{style:{fontSize:"8",textAnchor:"middle",dominantBaseline:"mathematical",fill:"currentColor"}},t)},genPath:function(){var t=d(this.normalizedValues,this.boundary);return this.$createElement("path",{attrs:{d:w(t,this._radius,this.fill,this.parsedHeight),fill:this.fill?"url(#".concat(this._uid,")"):"none",stroke:this.fill?"none":"url(#".concat(this._uid,")")},ref:"path"})},genLabels:function(t){var e=this,n=this.parsedLabels.map((function(n,i){return e.$createElement("text",{attrs:{x:n.x+t+e._lineWidth/2,y:e.textY+.75*e.parsedLabelSize,"font-size":Number(e.labelSize)||7}},[e.genLabel(n,i)])}));return this.genG(n)},genLabel:function(t,e){return this.$scopedSlots.label?this.$scopedSlots.label({index:e,value:t.value}):t.value},genBars:function(){if(this.value&&!(this.totalValues<2)){var t=f(this.normalizedValues,this.boundary),e=(Math.abs(t[0].x-t[1].x)-this._lineWidth)/2;return this.$createElement("svg",{attrs:{display:"block",viewBox:"0 0 ".concat(this.totalWidth," ").concat(this.totalHeight)}},[this.genGradient(),this.genClipPath(t,e,this._lineWidth,"sparkline-bar-"+this._uid),this.hasLabels?this.genLabels(e):void 0,this.$createElement("g",{attrs:{"clip-path":"url(#sparkline-bar-".concat(this._uid,"-clip)"),fill:"url(#".concat(this._uid,")")}},[this.$createElement("rect",{attrs:{x:0,y:0,width:this.totalWidth,height:this.height}})])])}},genClipPath:function(t,e,n,r){var o=this,l="number"==typeof this.smooth?this.smooth:this.smooth?2:0;return this.$createElement("clipPath",{attrs:{id:"".concat(r,"-clip")}},t.map((function(t){return o.$createElement("rect",{attrs:{x:t.x+e,y:t.y,width:n,height:t.height,rx:l,ry:l}},[o.autoDraw?o.$createElement("animate",{attrs:{attributeName:"height",from:0,to:t.height,dur:"".concat(o.autoDrawDuration,"ms"),fill:"freeze"}}):void 0])})))},genTrend:function(){return this.$createElement("svg",this.setTextColor(this.color,{attrs:S(S({},this.$attrs),{},{display:"block","stroke-width":this._lineWidth||1,viewBox:"0 0 ".concat(this.width," ").concat(this.totalHeight)})}),[this.genGradient(),this.hasLabels&&this.genLabels(-this._lineWidth/2),this.genPath()])}},render:function(t){if(!(this.totalValues<2))return"trend"===this.type?this.genTrend():this.genBars()}})},806:function(t,e,n){"use strict";n(748)},807:function(t,e,n){var r=n(9)(!1);r.push([t.i,".home-enter-active,.home-leave-active{transition:all .5s;transform:scale(1)}.home-enter,.home-leave-active{all:0;transform:scale(.9)}",""]),t.exports=r}}]);