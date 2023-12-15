(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{1067:function(t,e,r){"use strict";r.r(e);var o=r(510),c=r(219),n=r(124),l=r(594),v=r(524),d=r(218),_=r(530),m=r(561),h=r(520),f=r(574),y=(r(25),r(32),r(15),r(10),r(14),r(21),r(13),r(22),r(3));r(5),r(33),r(35);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var w={layout:"appDesktop",data:function(){return{loading:!1,service:{},serviceFormData:[],signatureToggle:!1,geoLocating:!1}},components:{serviceForm:function(){return r.e(16).then(r.bind(null,1092))},signature:function(){return Promise.all([r.e(14),r.e(15),r.e(22)]).then(r.bind(null,1093))}},mounted:function(){this.$route.query.id&&this.fetchService()},methods:{changeValue:function(t){var e=this.serviceFormData;e[t[1]]=t[0],this.serviceFormData=e},fetchService:function(){var t=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(e){var r,o;t.service=e.data,t.serviceFormData=(null===(r=e.data)||void 0===r||null===(o=r.form)||void 0===o?void 0:o.data)||[]}))},updateService:function(){var t=this;this.loading=!0;var e=this.$route.query.id||null,r=this.service;r.form=this.serviceFormData,this.$axios.put("auth/tasks/"+e,r).then((function(e){t.$toast.success("Service Saved",{icon:"mdi-check-circle"}),t.$route.query.id||t.$router.push("/app/services")}),(function(e){t.$toast.error("Something Went Wrong",{icon:"mdi-alert"})})).finally((function(){t.loading=!1}))},addRecord:function(t){var e=this;this.geoLocating=!0,navigator.geolocation?navigator.geolocation.getCurrentPosition((function(t){var r=t.coords;e.$toast.success("Time and Location Fetched");var o={accuracy:r.accuracy,latitude:r.latitude,longitude:r.longitude},time=(new Date).toISOString(),c=e.service.time_location||{};c.start&&c.start.time?(c.end={time:time,coordinates:o},e.$toast.show("Activity Finished"),e.service.ticket_status="Validation"):(c.start={time:time,coordinates:o},e.$toast.show("Activity Started")),e.service.time_location=function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},c),e.geoLocating=!1,e.updateService()}),(function(t){e.$toast.error(t.message),e.geoLocating=!1})):this.geoLocating=!1},geoCode:function(t,e){this.longitude=t,this.latitude=e}}},S=w,O=r(26),component=Object(O.a)(S,(function(){var t,e,r=this,y=r._self._c;return y(_.a,{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[y(c.a,{attrs:{width:"100%"}},[y(n.c,[y("div",{staticClass:"d-flex flex-row my-2"},[y(o.a,{attrs:{small:"",color:"primary",outlined:""},on:{click:function(t){return r.$router.back()}}},[y(d.a,[r._v("mdi-arrow-left")])],1),y(h.a),r._v(" "),y("h2",{staticClass:"black--text"},[r._v(r._s(r.service.name||"Task Activity"))])],1),r._v(" "),y(v.a,[r.service?y("div",{staticClass:"my-6"},[r.service.customer?y("div",[y("p",{staticClass:"font-weight-bold mb-1"},[r._v("Customer: "+r._s(r.service.customer.name)+" • "+r._s((null===(t=r.service.customer)||void 0===t||null===(e=t.user_detail)||void 0===e?void 0:e.company_name)||""))]),r._v(" "),r.service.customer.user_detail?y("div",[r._v("\n            "+r._s(r.service.customer.user_detail.address_1)+" "+r._s(r.service.customer.user_detail.address_2)),y("br"),r._v("\n            "+r._s(r.service.customer.user_detail.city)+" "+r._s(r.service.customer.user_detail.state)+" "+r._s(r.service.customer.user_detail.country)+" "),y("br"),r._v(r._s(r.service.customer.phone)+"\n          ")]):r._e()]):r._e(),r._v(" "),r.service.zone?y("p",{staticClass:"font-weight-bold mb-1"},[r._v("Zone: "+r._s(r.service.zone.zone))]):r._e(),r._v(" "),r.service.zone?y("p",[r._v(r._s(r.service.zone.address))]):r._e(),r._v(" "),r.service.time_location&&r.service.time_location.start?r._e():y(o.a,{attrs:{color:"primary",loading:r.geoLocating},on:{click:function(t){return r.addRecord()}}},[y(d.a,{attrs:{left:""}},[r._v("mdi-clock-fast")]),r._v(" Start Activity")],1),r._v(" "),y(f.a,{staticClass:"my-2",attrs:{outlined:"",label:"Activity Remarks",rows:"2"},model:{value:r.service.remarks,callback:function(t){r.$set(r.service,"remarks",t)},expression:"service.remarks"}}),r._v(" "),y(m.a,[y("thead",[y("tr",[y("th",[r._v("Activity")]),r._v(" "),y("th",[r._v("Date/Time")]),r._v(" "),y("th",[r._v("Location")])])]),r._v(" "),r.service.time_location?y("tbody",[r.service.time_location.start?y("tr",[y("td",[r._v("Start")]),r._v(" "),y("td",[r._v(r._s(r.service.time_location.start.time&&r.$luxon(r.service.time_location.start.time,"meds")))]),r._v(" "),r.service.time_location.start.coordinates?y("td",[y("a",{attrs:{target:"_blank",href:"https://maps.google.com/?q=".concat(r.service.time_location.start.coordinates.latitude,",").concat(r.service.time_location.start.coordinates.longitude)}},[r._v(r._s("Latitude: "+r.service.time_location.start.coordinates.latitude)+" "),y("br"),r._v(" "+r._s("Longitude: "+r.service.time_location.start.coordinates.longitude))])]):r._e()]):r._e(),r._v(" "),r.service.time_location.end?y("tr",[y("td",[r._v("Finish")]),r._v(" "),y("td",[r._v(r._s(r.service.time_location.end.time&&r.$luxon(r.service.time_location.end.time,"meds")))]),r._v(" "),y("td",[y("a",{attrs:{target:"_blank",href:"https://maps.google.com/?q=".concat(r.service.time_location.end.coordinates.latitude,",").concat(r.service.time_location.end.coordinates.longitude)}},[r._v(r._s(r.service.time_location.end.coordinates&&"Latitude:"+r.service.time_location.end.coordinates.latitude)+" "),y("br"),r._v(" "+r._s("Longitude: "+r.service.time_location.end.coordinates.longitude)+"\n              ")])])]):r._e()]):y("div",{staticClass:"amber--text text--darken-3 font-weight-bold"},[r._v("No Time/Location Added")])])],1):r._e(),r._v(" "),y(c.a,{staticClass:"container",attrs:{outlined:""}},[y(l.a,{staticStyle:{top:"-25px"},attrs:{color:"primary",label:""}},[r._v("Form")]),r._v(" "),y("serviceForm",{attrs:{formData:r.serviceFormData},on:{changeValue:function(t){return r.changeValue(t)}}})],1),r._v(" "),r.service.signature?y("img",{staticStyle:{width:"100px",height:"100px"},attrs:{src:"".concat(r.$config.media_url,"/").concat(r.service.signature)}}):r._e(),r._v(" "),y("br"),r._v(" "),y(o.a,{attrs:{outlined:"",color:"primary"},on:{click:function(t){r.signatureToggle=!0}}},[y(d.a,{attrs:{left:""}},[r._v("mdi-signature-freehand")]),r._v("Add Signature")],1),r._v(" "),r.service.time_location&&r.service.time_location.start&&!r.service.time_location.end?y(o.a,{attrs:{loading:r.geoLocating,color:"accent"},on:{click:function(t){return r.addRecord()}}},[y(d.a,{attrs:{left:""}},[r._v("mdi-check-bold")]),r._v(" Finish Activity")],1):r._e()],1)],1),r._v(" "),y(n.a,[y(o.a,{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:r.loading,type:"submit",block:""},on:{click:function(t){return r.updateService()}}},[r._v("\n        Save Service")])],1)],1),r._v(" "),r.signatureToggle?y("signature",{on:{saveSignature:function(t){r.service.signature=t,r.updateService()}},model:{value:r.signatureToggle,callback:function(t){r.signatureToggle=t},expression:"signatureToggle"}}):r._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);