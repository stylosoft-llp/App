(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{1035:function(t,e,n){"use strict";n.r(e);var o=n(218),l=(n(32),n(6),n(35),n(36),{layout:"appDesktop",data:function(){return{version:1,formData:{}}},beforeMount:function(){this.fetchService()},methods:{getPrint:function(){for(var t=document.getElementById("printable").innerHTML,e="",n=0,l=Object(o.a)(document.querySelectorAll('link[rel="stylesheet"], style'));n<l.length;n++){e+=l[n].outerHTML}var r=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");r.document.write("<!DOCTYPE html>\n<html><head>".concat(e,"<style>\n</style></head>\n  <body><div>").concat(t,"</div></body></html>")),r.document.close(),r.focus(),r.print(),r.close()},fetchService:function(){var t=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(e){var n,o;t.service=e.data,t.formData=(null===(n=e.data)||void 0===n||null===(o=n.form)||void 0===o?void 0:o.data)||[]}))}},components:{FormTable:function(){return n.e(97).then(n.bind(null,1059))}}}),r=(n(864),n(27)),c=n(31),d=n.n(c),v=n(488),f=n(177),m=n(499),h=n(209),y=n(506),_=n(710),x=n(504),w=n(497),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{container:"",column:"","align-center":"","justify-center":""}},[n("div",[n("v-card-title",[t._v("Form Preview  \n\t\t\t\t"),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"ml-1",attrs:{color:"primary"},on:{click:function(e){return t.getPrint()}}},[t._v("Print")]),t._v(" "),n("v-btn",{staticClass:"ml-1",attrs:{color:"secondary",outlined:""},on:{click:function(e){return t.$router.back()}}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v(" "),n("div",{staticStyle:{width:"600px",border:"1px solid black"},attrs:{id:"printable"}},[n("v-container",[n("div",{key:t.version,staticClass:"d-flex flex-wrap"},t._l(t.formData,(function(del,e){return n("div",{key:e,class:{cmd6:"md"==del.size,cmd12:"lg"==del.size},staticStyle:{height:"100%",display:"inline-block","flex-direction":"row"}},["heading"==del.title?n("h2",{staticClass:"my-4",staticStyle:{"text-align":"center"}},[t._v(t._s(del.value))]):"table"==del.title?n("formTable",{model:{value:del.value,callback:function(e){t.$set(del,"value",e)},expression:"del.value"}}):"spacer"==del.title?n("div",{staticClass:"ma-auto"}):"text"==del.title?n("p",{staticClass:"body-1",domProps:{textContent:t._s(del.value)}}):"checkbox"==del.title?n("div",[n("v-btn",{attrs:{depressed:""}},[t._v("\n            "+t._s(del.value?"✓":"✘")+" "+t._s(del.name)+"\n          ")])],1):"textarea"==del.title?n("div",[n("p",{staticClass:"title"},[t._v(t._s(del.name))]),t._v(" "),n("p",{staticClass:"body-1"},[t._v(t._s(del.value))])]):"textbox"==del.title?n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v(t._s(del.name))]),t._v(" "),n("v-list-item-title",[t._v(t._s(del.value))])],1)],1):"image upload"==del.title?n("img",{staticStyle:{width:"100%"},attrs:{src:t.$config.media_url+"/"+del.value}}):"logo"==del.title?n("div",{style:"background:#fff url("+t.$config.media_url+"/"+del.value+") no-repeat center center;min-height:80px;background-size:contain !important;"}):"Line"==del.title?n("hr"):t._e()],1)})),0)])],1)],1)])}),[],!1,null,"6bfce434",null);e.default=component.exports;d()(component,{VBtn:v.a,VCardTitle:f.d,VContainer:m.a,VIcon:h.a,VLayout:y.a,VListItem:_.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VSpacer:w.a})},505:function(t,e,n){"use strict";var o=n(1),l=n(2);e.a=o.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:l.j}}})},506:function(t,e,n){"use strict";n(219);var o=n(220);e.a=Object(o.a)("layout")},750:function(t,e,n){var content=n(865);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("0193ad56",content,!0,{sourceMap:!1})},864:function(t,e,n){"use strict";n(750)},865:function(t,e,n){var o=n(9)(!1);o.push([t.i,".cmd6[data-v-6bfce434]{width:49%}.cmd12[data-v-6bfce434]{width:100%!important}table[data-v-6bfce434]{border-collapse:collapse;margin:25px 0;font-size:.9em;font-family:sans-serif;min-width:400px;box-shadow:0 0 2px rgba(0,0,0,.15)}th[data-v-6bfce434],thead tr[data-v-6bfce434]{border:1px solid #000}th[data-v-6bfce434]{padding:8px 12px}tbody tr td[data-v-6bfce434]{border:1px solid #000}tbody tr[data-v-6bfce434]:nth-of-type(2n){background-color:#f3f3f3}tbody tr[data-v-6bfce434]:last-of-type{border-bottom:2px solid var(--v-primary-base)}",""]),t.exports=o}}]);