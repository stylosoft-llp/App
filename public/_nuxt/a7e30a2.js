(window.webpackJsonp=window.webpackJsonp||[]).push([[113],{1093:function(e,t,n){"use strict";n.r(t);var r=n(509),o=n(220),c=n(124),f=n(565),l=n(510),v=n(519),d=(n(25),n(17)),h=(n(69),n(30),n(48),n(5),n(33),n(35),n(60),{props:["value","service_id"],data:function(){return{history:""}},mounted:function(){this.fetchHistory()},filters:{properForm:function(e){return e.replace(/_/g," ").replace(/\b\w/g,(function(e){return e.toUpperCase()}))}},methods:{fetchHistory:function(){var e=this;return Object(d.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$axios.get("/auth/services/".concat(e.service_id,"/history")).then(function(){var t=Object(d.a)(regeneratorRuntime.mark((function t(n){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,Promise.all(n.data.map(function(){var t=Object(d.a)(regeneratorRuntime.mark((function t(n){var o,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===(o=n.changes)||void 0===o||!o.assigned_to){t.next=7;break}return t.next=3,e.getAssignedUser(n.changes.assigned_to);case 3:c=t.sent,console.log(c),n.changes.assigned_to=c,r.push(n);case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 3:e.history=r;case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 2:case"end":return t.stop()}}),t)})))()},getAssignedUser:function(e){var t=this;return Object(d.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$axios.get("/auth/users/".concat(e)).then((function(e){return e.data.name}),(function(t){return e}));case 2:return n.abrupt("return",n.sent);case 3:case"end":return n.stop()}}),n)})))()}}}),_=h,m=n(26),component=Object(m.a)(_,(function(){var e=this,t=e._self._c;return t(f.a,{attrs:{value:e.value,"max-width":"400px"},on:{input:function(t){return e.$emit("input",t)}}},[t(o.a,[t(c.d,[e._v("Activity History")]),e._v(" "),t(c.c,e._l(e.history,(function(n,r){return t("div",{key:r},[t(l.a,{staticClass:"my-2"}),e._v(" "),t("p",{staticClass:"font-weight-bold"},[e._v(e._s(n.user&&n.user.name)+" ("+e._s(n.created_at)+")")]),e._v(" "),e._l(n.changes,(function(n,r){return t("tr",{key:r},[t("td",{staticClass:"font-weight-medium"},[e._v(e._s(e._f("properForm")(r))+" ")]),e._v(" "),t("td",[e._v(e._s("expected_date"==r?e.$luxon(n):n))])])}))],2)})),0),e._v(" "),t(c.a,[t(v.a),e._v(" "),t(r.a,{attrs:{outlined:"",color:"primary"},on:{click:function(t){return e.$emit("input",!1)}}},[e._v("Close")])],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports}}]);