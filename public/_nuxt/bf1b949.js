(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{565:function(e,t,n){var content=n(724);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("19efecfe",content,!0,{sourceMap:!1})},723:function(e,t,n){"use strict";n(565)},724:function(e,t,n){var l=n(9)(!1);l.push([e.i,"td[data-v-60eaf72c],th[data-v-60eaf72c]{padding:5px;text-align:left;border:.5px solid grey}",""]),e.exports=l},977:function(e,t,n){"use strict";n.r(t);var l={props:["value"],data:function(){return{}},mounted:function(){}},o=(n(723),n(27)),r=n(31),c=n.n(r),d=n(554),component=Object(o.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.value?n("table",{staticStyle:{width:"100%"}},[n("thead",[n("tr",e._l(e.value.header,(function(t,l){return n("th",{key:l},[e._v("\n\t\t\t"+e._s(t.val)+"\n\t\t")])})),0)]),e._v(" "),n("tbody",e._l(e.value.data,(function(t,l){return n("tr",{key:l},e._l(t,(function(t,o){return n("td",{key:o},["checkbox"!=e.value.header[o].type?n("div",{attrs:{contenteditable:!0},on:{input:function(t){e.value.data[l][o]=t.target.innerText}}},[e._v(e._s(t))]):n("v-checkbox",{attrs:{"hide-details":"","true-value":"yes","false-value":"no"},model:{value:e.value.data[l][o],callback:function(t){e.$set(e.value.data[l],o,t)},expression:"value.data[vdi][vdci]"}})],1)})),0)})),0)]):e._e()}),[],!1,null,"60eaf72c",null);t.default=component.exports;c()(component,{VCheckbox:d.a})}}]);