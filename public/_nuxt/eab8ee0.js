(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{1056:function(e,t,n){"use strict";n.r(t);var r=n(510),o=n(1016),c=n(523),l=n(218),v=n(764),d=n(744),f=n(527),h=n(816),y=n(522),_=n(77),k=n(520),m=n(76),w=n(567),x=n(17),D=(n(69),{layout:"userDesktop",data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"]}},mounted:function(){this.$refs.calendar.checkChange(),this.fetchServices()},methods:{viewDay:function(e){var t=e.date;this.focus=t,this.type="day"},getEventColor:function(e){return e.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(e){var t=e.nativeEvent,n=e.event;t.stopPropagation,this.$router.push("/app/services/editor?id="+n.id)},fetchServices:function(){var e=this;return Object(x.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.loading=!0,t.next=3,e.$axios.get("auth/servicesByDate").then((function(t){e.events=t.data}),(function(e){}));case 3:case"end":return t.stop()}}),t)})))()}}}),E=n(26),component=Object(E.a)(D,(function(){var e=this,t=e._self._c;return t(y.a,{staticClass:"container fill-height"},[t(c.a,[t(_.a,{attrs:{height:"64"}},[t(m.a,{attrs:{flat:""}},[t(r.a,{staticClass:"mr-4",attrs:{outlined:"",color:"primary"},on:{click:e.setToday}},[e._v("\n            Today\n          ")]),e._v(" "),t(r.a,{attrs:{fab:"",text:"",small:"",color:" grey darken-2"},on:{click:e.prev}},[t(l.a,{attrs:{small:""}},[e._v("\n              mdi-chevron-left\n            ")])],1),e._v(" "),t(r.a,{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:e.next}},[t(l.a,{attrs:{small:""}},[e._v("\n              mdi-chevron-right\n            ")])],1),e._v(" "),e.$refs.calendar?t(w.a,[e._v("\n            "+e._s(e.$refs.calendar.title)+"\n          ")]):e._e(),e._v(" "),t(k.a),e._v(" "),t(h.a,{attrs:{bottom:"",right:""},scopedSlots:e._u([{key:"activator",fn:function(n){var o=n.on,c=n.attrs;return[t(r.a,e._g(e._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",c,!1),o),[t("span",[e._v(e._s(e.typeToLabel[e.type]))]),e._v(" "),t(l.a,{attrs:{right:""}},[e._v("\n                  mdi-menu-down\n                ")])],1)]}}])},[e._v(" "),t(v.a,[t(d.a,{on:{click:function(t){e.type="day"}}},[t(f.c,[e._v("Day")])],1),e._v(" "),t(d.a,{on:{click:function(t){e.type="week"}}},[t(f.c,[e._v("Week")])],1),e._v(" "),t(d.a,{on:{click:function(t){e.type="month"}}},[t(f.c,[e._v("Month")])],1)],1)],1)],1)],1),e._v(" "),t(_.a,{attrs:{height:"600"}},[t(o.a,{ref:"calendar",attrs:{color:"primary",events:e.events,"event-color":e.getEventColor,type:e.type},on:{"click:event":e.showEvent,"click:more":e.viewDay,"click:date":e.viewDay},model:{value:e.focus,callback:function(t){e.focus=t},expression:"focus"}})],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);