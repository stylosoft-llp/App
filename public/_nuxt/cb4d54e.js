(window.webpackJsonp=window.webpackJsonp||[]).push([[105,107],{1009:function(e,t,n){"use strict";n.r(t);var o=n(589),r=n(218),d=n(552),l=n(509),c=(n(60),n(343),n(5),n(13),{props:["value"],data:function(){return{}},methods:{addRow:function(){this.value.data.push(this.value.header.map((function(){return""})))},removeRow:function(e){this.value.data.splice(e,1)},removeColumn:function(e){this.value.data.map((function(t,n){t.splice(e,1)})),this.value.header.splice(e,1)},addColumn:function(){this.value.header.push({type:"",val:"header"}),this.value.data.forEach((function(e){return e.push("")}))}}}),v=(n(754),n(26)),component=Object(v.a)(c,(function(){var e=this,t=e._self._c;return e.value?t("table",{staticStyle:{"box-shadow":"none"}},[t("thead",{staticStyle:{"border-bottom":"1px solid grey"}},[e._l(e.value.header,(function(n,o){return t("th",{key:o},[e.value.header[o]?t("td",[t(l.a,{attrs:{"append-icon":"mdi-minus",solo:"","hide-details":"",dense:""},on:{"click:append":function(t){return e.removeColumn(o)}},model:{value:e.value.header[o].val,callback:function(t){e.$set(e.value.header[o],"val",t)},expression:"value.header[hdi].val"}}),e._v(" "),t("br"),e._v(" "),t(d.a,{staticClass:"font-weight-regular text-capitalize",attrs:{"hide-details":"",dense:"",items:["text","checkbox"]},model:{value:e.value.header[o].type,callback:function(t){e.$set(e.value.header[o],"type",t)},expression:"value.header[hdi].type"}})],1):e._e()])})),e._v(" "),t("td",[t(r.a,{on:{click:function(t){return e.addColumn()}}},[e._v("mdi-plus-circle")])],1)],2),e._v(" "),t("tbody",[e._l(e.value.data,(function(n,d){return t("tr",{key:d},[e._l(n,(function(n,r){return t("td",{key:r},[e.value.header[r]&&"checkbox"==e.value.header[r].type?t(o.a,{attrs:{"hide-details":"","true-value":"yes","false-value":"no"},model:{value:e.value.data[d][r],callback:function(t){e.$set(e.value.data[d],r,t)},expression:"value.data[vdi][vdci]"}}):t("div",{staticClass:"body-1",attrs:{contenteditable:!0},on:{input:function(t){e.value.data[d][r]=t.target.innerText}}},[e._v(e._s(n))])],1)})),e._v(" "),t("td",{on:{click:function(t){return e.removeRow(d)}}},[t(r.a,[e._v("mdi-minus")])],1)],2)})),e._v(" "),t("tr",[t("td",{staticClass:"d-flex justify-center"},[t(r.a,{on:{click:function(t){return e.addRow()}}},[e._v("mdi-plus-circle")])],1)])],2)]):e._e()}),[],!1,null,"20cb262c",null);t.default=component.exports},528:function(e,t,n){"use strict";var o=n(4),r=n(126).findIndex,d=n(125),l="findIndex",c=!0;l in[]&&Array(1)[l]((function(){c=!1})),o({target:"Array",proto:!0,forced:c},{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),d(l)},531:function(e,t,n){"use strict";var o=n(34),r=n(125),d=n(54),l=n(61),c=n(103);o&&(c(Array.prototype,"lastItem",{configurable:!0,get:function(){var e=d(this),t=l(e);return 0==t?void 0:e[t-1]},set:function(e){var t=d(this),n=l(t);return t[0==n?0:n-1]=e}}),r("lastItem"))},599:function(e,t,n){var content=n(755);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(9).default)("ce44a408",content,!0,{sourceMap:!1})},754:function(e,t,n){"use strict";n(599)},755:function(e,t,n){var o=n(8)((function(i){return i[1]}));o.push([e.i,"table[data-v-20cb262c]{border-collapse:collapse;box-shadow:0 0 2px rgba(0,0,0,.15);font-family:sans-serif;font-size:.9em;margin:25px 0;min-width:400px}thead tr[data-v-20cb262c]{background-color:#009879;color:#fff}td[data-v-20cb262c],th[data-v-20cb262c]{padding:8px 12px}tbody tr[data-v-20cb262c]{border-bottom:1px solid #ddd}tbody tr[data-v-20cb262c]:nth-of-type(2n){background-color:#f3f3f3}tbody tr[data-v-20cb262c]:last-of-type{border-bottom:2px solid var(--v-primary-base)}",""]),o.locals={},e.exports=o}}]);