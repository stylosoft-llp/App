(window.webpackJsonp=window.webpackJsonp||[]).push([[103],{1067:function(t,e,l){"use strict";l.r(e);var n=l(220),o=(l(33),l(6),l(32),l(34),{props:["value","formData"],data:function(){return{version:1}},methods:{getPrint:function(){for(var t=document.getElementById("printable").innerHTML,e="",l=0,o=Object(n.a)(document.querySelectorAll('link[rel="stylesheet"], style'));l<o.length;l++){e+=o[l].outerHTML}var r=window.open("","","left=0,top=0,width=800,height=900,toolbar=0,scrollbars=0,status=0");r.document.write("<!DOCTYPE html>\n<html><head>".concat(e,"</head>\n  <body><div>").concat(t,"</div></body></html>")),r.document.close(),r.focus(),r.print(),r.close()}},components:{FormTable:function(){return l.e(15).then(l.bind(null,981))}}}),r=l(27),c=l(31),d=l.n(c),v=l(491),m=l(211),h=l(177),_=l(556),f=l(503),y=l(547),C=l(714),k=l(508),x=l(501),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("v-dialog",{attrs:{"max-width":"800px",value:t.value},on:{input:function(e){return t.$emit("input",e)}}},[l("v-card",{staticClass:"container"},[l("v-card-title",[t._v("Form Preview  \n\t\t\t\t"),l("v-spacer"),t._v(" "),l("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.getPrint()}}},[t._v("Print")])],1),t._v(" "),l("v-card",{attrs:{id:"printable"}},[l("v-container",[l("div",{key:t.version,staticClass:"row"},t._l(t.formData,(function(del,e){return l("div",{key:e,staticClass:"col cols-12",class:{"col-md-6":"md"==del.size,"col-md-12":"lg"==del.size},staticStyle:{height:"100%"}},["heading"==del.title?l("h1",{attrs:{align:"center"}},[t._v(t._s(del.value))]):"table"==del.title?l("formTable",{model:{value:del.value,callback:function(e){t.$set(del,"value",e)},expression:"del.value"}}):"spacer"==del.title?l("div",{staticClass:"ma-auto"}):"text"==del.title?l("p",{staticClass:"body-1",domProps:{textContent:t._s(del.value)}}):"checkbox"==del.title?l("v-checkbox",{attrs:{readonly:"",value:del.value,label:del.name}}):"textarea"==del.title?l("div",[l("p",{staticClass:"title"},[t._v(t._s(del.name))]),t._v(" "),l("p",{staticClass:"body-1"},[t._v(t._s(del.value))])]):"textbox"==del.title?l("v-list-item",[l("v-list-item-content",[l("v-list-item-subtitle",[t._v(t._s(del.name))]),t._v(" "),l("v-list-item-title",[t._v(t._s(del.value))])],1)],1):"image upload"==del.title?l("div",{staticClass:"d-flex align-center justify-center",staticStyle:{"background-color":"#e9eef0","background-image":"url('/image-placeholder.jpg')","background-size":"contain","background-position":"center center",height:"300px"}}):"Line"==del.title?l("hr"):t._e()],1)})),0)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;d()(component,{VBtn:v.a,VCard:m.a,VCardTitle:h.d,VCheckbox:_.a,VContainer:f.a,VDialog:y.a,VListItem:C.a,VListItemContent:k.a,VListItemSubtitle:k.b,VListItemTitle:k.c,VSpacer:x.a})}}]);