(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{1056:function(t,e,n){"use strict";n.r(e);var o=n(220),r=(n(32),n(6),n(33),n(34),{layout:"appDesktop",data:function(){return{version:1,formData:{}}},beforeMount:function(){this.fetchService()},methods:{getPrint:function(){for(var t=document.getElementById("printable").innerHTML,e="",n=0,r=Object(o.a)(document.querySelectorAll('link[rel="stylesheet"], style'));n<r.length;n++){e+=r[n].outerHTML}var l=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");l.document.write("<!DOCTYPE html>\n<html><head>".concat(e,"<style>\n</style></head>\n  <body><div>").concat(t,"</div></body></html>")),l.document.close(),l.focus(),l.print(),l.close()},fetchService:function(){var t=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(e){var n,o;t.service=e.data,t.formData=(null===(n=e.data)||void 0===n||null===(o=n.form)||void 0===o?void 0:o.data)||[]}))}},components:{FormTable:function(){return n.e(102).then(n.bind(null,989))}}}),l=(n(882),n(27)),c=n(31),d=n.n(c),v=n(491),f=n(177),m=n(503),h=n(210),y=n(512),x=n(724),_=n(508),w=n(501),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{container:"",column:"","align-center":"","justify-center":""}},[n("div",[n("v-card-title",[t._v("Form Preview  \n\t\t\t\t"),n("v-spacer"),t._v(" "),n("v-btn",{staticClass:"ml-1",attrs:{color:"primary"},on:{click:function(e){return t.getPrint()}}},[t._v("Print")]),t._v(" "),n("v-btn",{staticClass:"ml-1",attrs:{color:"secondary",outlined:""},on:{click:function(e){return t.$router.back()}}},[n("v-icon",[t._v("mdi-arrow-left")])],1)],1),t._v(" "),n("div",{staticStyle:{border:"0.5px solid grey"},attrs:{id:"printable"}},[n("v-container",[n("div",{key:t.version,staticClass:"d-flex flex-wrap"},t._l(t.formData,(function(del,e){return n("div",{key:e,class:{cmd6:"md"==del.size,cmd12:"lg"==del.size},staticStyle:{height:"100%",display:"inline-block","flex-direction":"row"}},["heading"==del.title?n("h1",{attrs:{align:"center"}},[t._v(t._s(del.value))]):"table"==del.title?n("formTable",{model:{value:del.value,callback:function(e){t.$set(del,"value",e)},expression:"del.value"}}):"spacer"==del.title?n("div",{staticClass:"ma-auto"}):"text"==del.title?n("p",{staticClass:"body-1",domProps:{textContent:t._s(del.value)}}):"checkbox"==del.title?n("div",[n("v-btn",{attrs:{depressed:""}},[t._v("\n            "+t._s(del.value?"✔":"✘")+" "+t._s(del.name)+"\n          ")])],1):"textarea"==del.title?n("div",[n("p",{staticClass:"title"},[t._v(t._s(del.name))]),t._v(" "),n("p",{staticClass:"body-1"},[t._v(t._s(del.value))])]):"textbox"==del.title?n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v(t._s(del.name))]),t._v(" "),n("v-list-item-title",[t._v(t._s(del.value))])],1)],1):"image upload"==del.title?n("div",{staticClass:"d-flex align-center justify-center",staticStyle:{"background-color":"#e9eef0","background-image":"url('/image-placeholder.jpg')","background-size":"contain","background-position":"center center",height:"300px"}}):t._e()],1)})),0)])],1)],1)])}),[],!1,null,"702ab7e5",null);e.default=component.exports;d()(component,{VBtn:v.a,VCardTitle:f.d,VContainer:m.a,VIcon:h.a,VLayout:y.a,VListItem:x.a,VListItemContent:_.a,VListItemSubtitle:_.b,VListItemTitle:_.c,VSpacer:w.a})},509:function(t,e,n){"use strict";var o=n(5),r=n(123).findIndex,l=n(122),c="findIndex",d=!0;c in[]&&Array(1).findIndex((function(){d=!1})),o({target:"Array",proto:!0,forced:d},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),l(c)},511:function(t,e,n){"use strict";var o=n(1),r=n(2);e.a=o.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:r.j}}})},512:function(t,e,n){"use strict";n(221);var o=n(222);e.a=Object(o.a)("layout")},770:function(t,e,n){var content=n(883);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(10).default)("1cea61da",content,!0,{sourceMap:!1})},882:function(t,e,n){"use strict";n(770)},883:function(t,e,n){var o=n(9)(!1);o.push([t.i,".cmd6[data-v-702ab7e5]{width:49%}.cmd12[data-v-702ab7e5]{width:100%!important}table[data-v-702ab7e5]{border-collapse:collapse;margin:25px 0;font-size:.9em;font-family:sans-serif;min-width:400px;box-shadow:0 0 2px rgba(0,0,0,.15)}th[data-v-702ab7e5],thead tr[data-v-702ab7e5]{border:1px solid #000}th[data-v-702ab7e5]{padding:8px 12px}tbody tr td[data-v-702ab7e5]{border:1px solid #000}tbody tr[data-v-702ab7e5]:nth-of-type(2n){background-color:#f3f3f3}tbody tr[data-v-702ab7e5]:last-of-type{border-bottom:2px solid var(--v-primary-base)}",""]),t.exports=o}}]);