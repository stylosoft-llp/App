(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{1066:function(t,e,n){"use strict";n.r(e);n(28),n(71),n(941),n(6),n(943),n(949),n(951),n(952),n(953),n(956),n(957),n(958),n(959),n(960),n(961),n(962),n(963),n(965),n(966),n(967),n(968),n(969),n(970),n(971),n(972),n(973),n(974),n(975);var r={props:["value"],components:{vueSignature:n(978).a},methods:{saveSignature:function(){for(var t=this,e=this.$refs.signature.save("image/jpeg").split(","),n=e[0].indexOf("base64")>=0?atob(e[1]):decodeURI(e[1]),r=new Uint8Array(n.length),i=0;i<n.length;i++)r[i]=n.charCodeAt(i);var o=new Blob([r],{type:"jpeg"}),c=new FormData;c.append("image",o),c.append("path","/signatures"),this.$axios.post("auth/images",c,{headers:{"Content-type":"multipart/form-data"}}).then((function(e){t.$emit("saveSignature",e.data.image),t.$toast.success("Signature Saved"),t.$emit("input",!1)}))}}},o=n(27),c=n(31),v=n.n(c),l=n(491),d=n(211),f=n(177),m=n(547),h=n(501),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-dialog",{attrs:{value:t.value,"max-width":"400px"},on:{input:function(e){return t.$emit("input",e)}}},[n("v-card",[n("v-card-title",[t._v("Signature")]),t._v(" "),n("vueSignature",{ref:"signature",attrs:{w:"100%",h:"300px"}}),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{outlined:""},on:{click:function(e){return t.$emit("input",!1)}}},[t._v("Cancel")]),t._v(" "),n("v-btn",{attrs:{color:"secondary"},on:{click:function(e){return t.$refs.signature.clear()}}},[t._v("Clear")]),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.saveSignature()}}},[t._v("Save")])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:l.a,VCard:d.a,VCardActions:f.a,VCardTitle:f.d,VDialog:m.a,VSpacer:h.a})}}]);