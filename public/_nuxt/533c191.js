(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{886:function(t,e,r){"use strict";r.r(e);var c=r(3);r(6),r(36),r(37),r(29),r(52),r(15),r(12),r(11),r(26),r(14),r(27);function n(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function o(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?n(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):n(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var l={layout:"appDesktop",data:function(){return{loading:!1,service:{},serviceFormData:[]}},components:{serviceForm:function(){return Promise.all([r.e(1),r.e(58)]).then(r.bind(null,898))}},mounted:function(){this.$route.query.id&&this.fetchService()},methods:{changeValue:function(t){var e=this.serviceFormData;e[t[1]]=t[0],this.serviceFormData=e},fetchService:function(){var t=this;this.$axios.get("auth/services/"+this.$route.query.id).then((function(e){t.service=e.data,t.serviceFormData=e.data.form||[]}))},updateService:function(){var t=this,e=this.$route.query.id||null;this.$axios.put("auth/tasks/"+e,{form:this.serviceFormData}).then((function(e){t.$toast.success("Service Saved",{icon:"mdi-check-circle"}),t.$route.query.id||t.$router.replace({query:o(o({},t.$route.query),{},{id:e.data.id})})}),(function(t){}))}}},v=r(28),d=r(31),f=r.n(d),h=r(454),m=r(199),y=r(169),O=r(514),w=r(455),j=r(500),D=r(465),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:"","align-center":"","justify-center":"","fill-height":""}},[r("v-card",{attrs:{"max-width":"600",width:"100%"}},[r("v-card-text",[r("div",{staticClass:"d-flex flex-row my-2"},[r("v-btn",{attrs:{small:"",color:"primary",to:"/app/services",outlined:""}},[r("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),r("v-spacer"),t._v(" "),r("h2",{staticClass:"black--text"},[t._v("Service Editor")])],1),t._v(" "),r("serviceForm",{attrs:{formData:t.serviceFormData},on:{changeValue:function(e){return t.changeValue(e)}}})],1),t._v(" "),r("v-card-actions",[r("v-btn",{staticClass:"spl-btn mx-auto",attrs:{color:"primary",large:"",loading:t.loading,type:"submit",block:""},on:{click:function(e){return t.updateService()}}},[t._v(" Save Service")])],1)],1),t._v(" "),r("v-dialog")],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{VBtn:h.a,VCard:m.a,VCardActions:y.a,VCardText:y.c,VDialog:O.a,VIcon:w.a,VLayout:j.a,VSpacer:D.a})}}]);