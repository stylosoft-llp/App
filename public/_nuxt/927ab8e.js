(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{1014:function(t,e,n){"use strict";n.r(e);var o=n(20),r=(n(70),{layout:"appDesktop",data:function(){return{focus:"",type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],colors:["blue","indigo","deep-purple","cyan","green","orange","grey darken-1"]}},mounted:function(){this.$refs.calendar.checkChange(),this.fetchServices()},methods:{viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},getEventColor:function(t){return t.color},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},showEvent:function(t){var e=t.nativeEvent,n=t.event;e.stopPropagation,this.$router.push("/app/services/editor?id="+n.id)},fetchServices:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.loading=!0,e.next=3,t.$axios.get("auth/servicesByDate").then((function(e){t.events=e.data}),(function(t){}));case 3:case"end":return e.stop()}}),e)})))()}}}),c=n(27),l=n(31),v=n.n(l),d=n(491),f=n(996),h=n(502),m=n(210),y=n(744),_=n(724),k=n(508),w=n(796),V=n(505),x=n(77),T=n(501),D=n(76),E=n(550),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"container fill-height"},[n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"primary"},on:{click:t.setToday}},[t._v("\n            Today\n          ")]),t._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:" grey darken-2"},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v("\n              mdi-chevron-left\n            ")])],1),t._v(" "),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v("\n              mdi-chevron-right\n            ")])],1),t._v(" "),t.$refs.calendar?n("v-toolbar-title",[t._v("\n            "+t._s(t.$refs.calendar.title)+"\n          ")]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",r,!1),o),[n("span",[t._v(t._s(t.typeToLabel[t.type]))]),t._v(" "),n("v-icon",{attrs:{right:""}},[t._v("\n                  mdi-menu-down\n                ")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",[t._v("Day")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",[t._v("Week")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){t.type="month"}}},[n("v-list-item-title",[t._v("Month")])],1)],1)],1)],1)],1),t._v(" "),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay},model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VBtn:d.a,VCalendar:f.a,VCol:h.a,VIcon:m.a,VList:y.a,VListItem:_.a,VListItemTitle:k.c,VMenu:w.a,VRow:V.a,VSheet:x.a,VSpacer:T.a,VToolbar:D.a,VToolbarTitle:E.a})}}]);