(window.webpackJsonp=window.webpackJsonp||[]).push([[99,100],{568:function(e,t,o){var content=o(726);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(10).default)("0a7d3334",content,!0,{sourceMap:!1})},725:function(e,t,o){"use strict";o(568)},726:function(e,t,o){var n=o(9)(!1);n.push([e.i,"table[data-v-20cb262c]{border-collapse:collapse;margin:25px 0;font-size:.9em;font-family:sans-serif;min-width:400px;box-shadow:0 0 2px rgba(0,0,0,.15)}thead tr[data-v-20cb262c]{background-color:#009879;color:#fff}td[data-v-20cb262c],th[data-v-20cb262c]{padding:8px 12px}tbody tr[data-v-20cb262c]{border-bottom:1px solid #ddd}tbody tr[data-v-20cb262c]:nth-of-type(2n){background-color:#f3f3f3}tbody tr[data-v-20cb262c]:last-of-type{border-bottom:2px solid var(--v-primary-base)}",""]),e.exports=n},983:function(e,t,o){"use strict";o.r(t);o(62),o(327),o(6),o(16);var n={props:["value"],data:function(){return{}},methods:{addRow:function(){this.value.data.push(this.value.header.map((function(){return""})))},removeRow:function(e){this.value.data.splice(e,1)},removeColumn:function(e){this.value.data.map((function(t,o){t.splice(e,1)})),this.value.header.splice(e,1)},addColumn:function(){this.value.header.push({type:"",val:"header"}),this.value.data.forEach((function(e){return e.push("")}))}}},l=(o(725),o(27)),d=o(31),c=o.n(d),r=o(558),v=o(210),f=o(541),h=o(490),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.value?o("table",{staticStyle:{"box-shadow":"none"}},[o("thead",{staticStyle:{"border-bottom":"1px solid grey"}},[e._l(e.value.header,(function(t,n){return o("th",{key:n},[e.value.header[n]?o("td",[o("v-text-field",{attrs:{"append-icon":"mdi-minus",solo:"","hide-details":"",dense:""},on:{"click:append":function(t){return e.removeColumn(n)}},model:{value:e.value.header[n].val,callback:function(t){e.$set(e.value.header[n],"val",t)},expression:"value.header[hdi].val"}}),e._v(" "),o("br"),e._v(" "),o("v-select",{staticClass:"font-weight-regular text-capitalize",attrs:{"hide-details":"",dense:"",items:["text","checkbox"]},model:{value:e.value.header[n].type,callback:function(t){e.$set(e.value.header[n],"type",t)},expression:"value.header[hdi].type"}})],1):e._e()])})),e._v(" "),o("td",[o("v-icon",{on:{click:function(t){return e.addColumn()}}},[e._v("mdi-plus-circle")])],1)],2),e._v(" "),o("tbody",[e._l(e.value.data,(function(t,n){return o("tr",{key:n},[e._l(t,(function(t,l){return o("td",{key:l},[e.value.header[l]&&"checkbox"==e.value.header[l].type?o("v-checkbox",{attrs:{"hide-details":"","true-value":"yes","false-value":"no"},model:{value:e.value.data[n][l],callback:function(t){e.$set(e.value.data[n],l,t)},expression:"value.data[vdi][vdci]"}}):o("div",{staticClass:"body-1",attrs:{contenteditable:!0},on:{input:function(t){e.value.data[n][l]=t.target.innerText}}},[e._v(e._s(t))])],1)})),e._v(" "),o("td",{on:{click:function(t){return e.removeRow(n)}}},[o("v-icon",[e._v("mdi-minus")])],1)],2)})),e._v(" "),o("tr",[o("td",{staticClass:"d-flex justify-center"},[o("v-icon",{on:{click:function(t){return e.addRow()}}},[e._v("mdi-plus-circle")])],1)])],2)]):e._e()}),[],!1,null,"20cb262c",null);t.default=component.exports;c()(component,{VCheckbox:r.a,VIcon:v.a,VSelect:f.a,VTextField:h.a})}}]);