(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{1057:function(e,t,l){"use strict";l.r(t);l(62),l(6),l(16);var d={props:["value"],data:function(){return{}},methods:{addRow:function(){this.value.data.push(this.value.header.map((function(){return""})))},addColumn:function(){this.value.header.push({type:"",val:"header"}),this.value.data.forEach((function(e){return e.push("")}))}}},n=(l(933),l(27)),o=l(31),r=l.n(o),c=l(552),v=l(209),f=l(550),h=l(487),component=Object(n.a)(d,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return e.value?l("table",[l("thead",[e._l(e.value.header,(function(t,d){return l("th",{key:d},[e.value.header[d]?l("td",[l("v-text-field",{attrs:{solo:"","hide-details":"",dense:""},model:{value:e.value.header[d].val,callback:function(t){e.$set(e.value.header[d],"val",t)},expression:"value.header[hdi].val"}}),e._v(" "),l("br"),e._v(" "),l("v-select",{attrs:{small:"","hide-details":"",dense:"",items:["text","checkbox"]},model:{value:e.value.header[d].type,callback:function(t){e.$set(e.value.header[d],"type",t)},expression:"value.header[hdi].type"}})],1):e._e()])})),e._v(" "),l("td",[l("v-icon",{on:{click:function(t){return e.addColumn()}}},[e._v("mdi-plus")])],1)],2),e._v(" "),l("tbody",[e._l(e.value.data,(function(t,d){return l("tr",{key:d},e._l(t,(function(t,n){return l("td",{key:n},["checkbox"==e.value.header[n].type?l("v-checkbox",{attrs:{"hide-details":"","true-value":"yes","false-value":"no"},model:{value:e.value.data[d][n],callback:function(t){e.$set(e.value.data[d],n,t)},expression:"value.data[vdi][vdci]"}}):l("div",{attrs:{contenteditable:!0},on:{input:function(t){e.value.data[d][n]=t.target.innerText}}},[e._v(e._s(t))])],1)})),0)})),e._v(" "),l("tr",[l("td",{staticClass:"d-flex justify-center"},[l("v-icon",{on:{click:function(t){return e.addRow()}}},[e._v("mdi-plus")])],1)])],2)]):e._e()}),[],!1,null,"74ba56cc",null);t.default=component.exports;r()(component,{VCheckbox:c.a,VIcon:v.a,VSelect:f.a,VTextField:h.a})},765:function(e,t,l){var content=l(934);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,l(10).default)("8256576e",content,!0,{sourceMap:!1})},933:function(e,t,l){"use strict";l(765)},934:function(e,t,l){var d=l(9)(!1);d.push([e.i,"table[data-v-74ba56cc]{border-collapse:collapse;margin:25px 0;font-size:.9em;font-family:sans-serif;min-width:400px;box-shadow:0 0 2px rgba(0,0,0,.15)}thead tr[data-v-74ba56cc]{background-color:#009879;color:#fff;text-align:left}td[data-v-74ba56cc],th[data-v-74ba56cc]{padding:8px 12px}tbody tr[data-v-74ba56cc]{border-bottom:1px solid #ddd}tbody tr[data-v-74ba56cc]:nth-of-type(2n){background-color:#f3f3f3}tbody tr[data-v-74ba56cc]:last-of-type{border-bottom:2px solid var(--v-primary-base)}",""]),e.exports=d}}]);