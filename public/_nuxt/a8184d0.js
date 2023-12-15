(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{1063:function(e,t,r){"use strict";r.r(t);r(15),r(11),r(14),r(23),r(13),r(24);var o=r(3);r(6),r(33),r(34),r(28),r(57),r(32);function n(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(t){Object(o.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var l={layout:"userDesktop",data:function(){return{loading:!1,service:{},serviceFormData:[],signatureToggle:!1,geoUndefined:!1}},components:{serviceForm:function(){return r.e(16).then(r.bind(null,1075))},signature:function(){return Promise.all([r.e(14),r.e(15),r.e(22)]).then(r.bind(null,1076))}},mounted:function(){this.$route.query.id&&this.fetchService()},methods:{changeValue:function(e){var t=this.serviceFormData;t[e[1]]=e[0],this.serviceFormData=t},fetchService:function(){var e=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(t){var r,o;e.service=t.data,e.serviceFormData=(null===(r=t.data)||void 0===r||null===(o=r.form)||void 0===o?void 0:o.data)||[]}))},updateService:function(){var e=this,t=this.$route.query.id||null,r=this.service;r.form=this.serviceFormData,this.$axios.put("auth/tasks/"+t,r).then((function(t){e.$toast.success("Service Saved",{icon:"mdi-check-circle"}),e.$route.query.id||e.$router.replace({query:c(c({},e.$route.query),{},{id:t.data.id})})}),(function(e){}))},addRecord:function(e){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition((function(e){var r=e.coords,o={accuracy:r.accuracy,latitude:r.latitude,longitude:r.longitude},time=(new Date).toISOString(),n=t.service.time_location||{};n.start&&n.start.time?(n.end={time:time,coordinates:o},t.$toast.show("Activity Finished")):(n.start={time:time,coordinates:o},t.$toast.show("Activity Started")),t.service.time_location=c({},n),t.updateService()}),(function(e){t.$toast.error(e.message)})):geoUndefined=!0},geoCode:function(e,t){var r=this;this.longitude=e,this.latitude=t,this.$axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/".concat(e,",").concat(t,".json?types=locality,place,region&access_token=pk.eyJ1Ijoib3duZWFyIiwiYSI6ImNqenljaGZwdjA1NzgzbnFoNXJucDN0cWkifQ.-tT0ZJBV0V0cVrncpFKimw")).then((function(e){var t=e.data.features;r.location=t[0].place_name,r.$emit("set-location",[r.coordinates,r.location]),r.manual=!1}),(function(e){r.$emit("unable")}))}}},v=r(27),d=r(31),m=r.n(d),_=r(802),f=r(494),h=r(211),y=r(177),k=r(579),w=r(506),S=r(210),x=r(515),$=r(546),O=r(504),j=r(554),component=Object(v.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[r("v-card",{attrs:{width:"100%"}},[r("v-card-text",[r("div",{staticClass:"d-flex flex-row my-2"},[r("v-btn",{attrs:{small:"",color:"primary",outlined:""},on:{click:function(t){return e.$router.back()}}},[r("v-icon",[e._v("mdi-arrow-left")])],1),r("v-spacer"),e._v(" "),r("h2",{staticClass:"black--text"},[e._v(e._s(e.service.name||"Task Activity"))])],1),e._v(" "),r("v-container",[e.service?r("div",{staticClass:"my-6"},[e.service.customer?r("p",{staticClass:"font-weight-bold mb-1"},[e._v("Customer: "+e._s(e.service.customer.name))]):e._e(),e._v(" "),e.service.zone?r("p",{staticClass:"font-weight-bold mb-1"},[e._v("Zone: "+e._s(e.service.zone.zone))]):e._e(),e._v(" "),e.service.zone?r("p",[e._v(e._s(e.service.zone.address))]):e._e(),e._v(" "),e.service.time_location&&e.service.time_location.start?e.service.time_location&&e.service.time_location.start&&!e.service.time_location.end?r("v-btn",{attrs:{color:"accent"},on:{click:function(t){return e.addRecord()}}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-check-bold")]),e._v(" Finish Activity")],1):e._e():r("v-btn",{attrs:{color:"primary"},on:{click:function(t){return e.addRecord()}}},[r("v-alert",{model:{value:e.geoUndefined,callback:function(t){e.geoUndefined=t},expression:"geoUndefined"}},[e._v("Geolocation Unavailable")]),e._v(" "),r("v-icon",{attrs:{left:""}},[e._v("mdi-clock-fast")]),e._v(" Start Activity")],1),e._v(" "),r("v-textarea",{staticClass:"my-2",attrs:{outlined:"",label:"Activity Remarks",rows:"2"},model:{value:e.service.remarks,callback:function(t){e.$set(e.service,"remarks",t)},expression:"service.remarks"}}),e._v(" "),r("v-simple-table",[r("thead",[r("tr",[r("th",[e._v("Activity")]),e._v(" "),r("th",[e._v("Date/Time")])])]),e._v(" "),e.service.time_location?r("tbody",[e.service.time_location.start?r("tr",[r("td",[e._v("Start")]),e._v(" "),r("td",[e._v(e._s(e.service.time_location.start.time&&e.$luxon(e.service.time_location.start.time,"meds")))])]):e._e(),e._v(" "),e.service.time_location.end?r("tr",[r("td",[e._v("Finish")]),e._v(" "),r("td",[e._v(e._s(e.service.time_location.end.time&&e.$luxon(e.service.time_location.end.time,"meds")))])]):e._e()]):e._e()])],1):e._e(),e._v(" "),r("v-card",{staticClass:"container",attrs:{outlined:""}},[r("v-chip",{staticStyle:{top:"-25px"},attrs:{color:"primary",label:""}},[e._v("Form")]),e._v(" "),r("serviceForm",{attrs:{formData:e.serviceFormData},on:{changeValue:function(t){return e.changeValue(t)}}})],1),e._v(" "),e.service.signature?r("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:e.$config.media_url+"/"+e.service.signature}}):e._e(),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{outlined:"",color:"primary"},on:{click:function(t){e.signatureToggle=!0}}},[r("v-icon",{attrs:{left:""}},[e._v("mdi-signature-freehand")]),e._v("Add Signature")],1)],1)],1),e._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:e.loading,type:"submit",block:""},on:{click:function(t){return e.updateService()}}},[e._v("\n          Save Service")])],1)],1),e._v(" "),e.signatureToggle?r("signature",{on:{saveSignature:function(t){e.service.signature=t,e.updateService()}},model:{value:e.signatureToggle,callback:function(t){e.signatureToggle=t},expression:"signatureToggle"}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VAlert:_.a,VBtn:f.a,VCard:h.a,VCardActions:y.a,VCardText:y.c,VChip:k.a,VContainer:w.a,VIcon:S.a,VLayout:x.a,VSimpleTable:$.a,VSpacer:O.a,VTextarea:j.a})}}]);