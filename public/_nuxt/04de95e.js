(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{1010:function(e,t,o){"use strict";o.r(t);var n=o(589),l=o(220),d=o(552),r=o(509),c=(o(61),o(343),o(5),o(13),{props:["value"],data:function(){return{}},methods:{addRow:function(){this.value.data.push(this.value.header.map((function(){return""})))},removeRow:function(e){this.value.data.splice(e,1)},removeColumn:function(e){this.value.data.map((function(t,o){t.splice(e,1)})),this.value.header.splice(e,1)},addColumn:function(){this.value.header.push({type:"",val:"header"}),this.value.data.forEach((function(e){return e.push("")}))}}}),v=(o(754),o(26)),component=Object(v.a)(c,(function(){var e=this,t=e._self._c;return e.value?t("table",{staticStyle:{"box-shadow":"none"}},[t("thead",{staticStyle:{"border-bottom":"1px solid grey"}},[e._l(e.value.header,(function(o,n){return t("th",{key:n},[e.value.header[n]?t("td",[t(r.a,{attrs:{"append-icon":"mdi-minus",solo:"","hide-details":"",dense:""},on:{"click:append":function(t){return e.removeColumn(n)}},model:{value:e.value.header[n].val,callback:function(t){e.$set(e.value.header[n],"val",t)},expression:"value.header[hdi].val"}}),e._v(" "),t("br"),e._v(" "),t(d.a,{staticClass:"font-weight-regular text-capitalize",attrs:{"hide-details":"",dense:"",items:["text","checkbox"]},model:{value:e.value.header[n].type,callback:function(t){e.$set(e.value.header[n],"type",t)},expression:"value.header[hdi].type"}})],1):e._e()])})),e._v(" "),t("td",[t(l.a,{on:{click:function(t){return e.addColumn()}}},[e._v("mdi-plus-circle")])],1)],2),e._v(" "),t("tbody",[e._l(e.value.data,(function(o,d){return t("tr",{key:d},[e._l(o,(function(o,l){return t("td",{key:l},[e.value.header[l]&&"checkbox"==e.value.header[l].type?t(n.a,{attrs:{"hide-details":"","true-value":"yes","false-value":"no"},model:{value:e.value.data[d][l],callback:function(t){e.$set(e.value.data[d],l,t)},expression:"value.data[vdi][vdci]"}}):t("div",{staticClass:"body-1",attrs:{contenteditable:!0},on:{input:function(t){e.value.data[d][l]=t.target.innerText}}},[e._v(e._s(o))])],1)})),e._v(" "),t("td",{on:{click:function(t){return e.removeRow(d)}}},[t(l.a,[e._v("mdi-minus")])],1)],2)})),e._v(" "),t("tr",[t("td",{staticClass:"d-flex justify-center"},[t(l.a,{on:{click:function(t){return e.addRow()}}},[e._v("mdi-plus-circle")])],1)])],2)]):e._e()}),[],!1,null,"20cb262c",null);t.default=component.exports},599:function(e,t,o){var content=o(755);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(9).default)("5b02f5bd",content,!0,{sourceMap:!1})},754:function(e,t,o){"use strict";o(599)},755:function(e,t,o){var n=o(8)((function(i){return i[1]}));n.push([e.i,"table[data-v-20cb262c]{border-collapse:collapse;box-shadow:0 0 2px rgba(0,0,0,.15);font-family:sans-serif;font-size:.9em;margin:25px 0;min-width:400px}thead tr[data-v-20cb262c]{background-color:#009879;color:#fff}td[data-v-20cb262c],th[data-v-20cb262c]{padding:8px 12px}tbody tr[data-v-20cb262c]{border-bottom:1px solid #ddd}tbody tr[data-v-20cb262c]:nth-of-type(2n){background-color:#f3f3f3}tbody tr[data-v-20cb262c]:last-of-type{border-bottom:2px solid var(--v-primary-base)}",""]),n.locals={},e.exports=n}}]);