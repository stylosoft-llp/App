(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1053:function(e,t,n){"use strict";n.r(t);var o=n(510),r=n(221),_=n(124),c=n(524),v=n(566),l=n(511),d=n(530),f=n(764),h=n(745),m=n(527),y=n(561),w=(n(25),{layout:"superDesktop",data:function(){return{users:[],focus:0,userToggle:!1,status:"",changingStatus:!1,loading:!1}},mounted:function(){this.getUsers()},methods:{getUsers:function(){var e=this;this.loading=!0,this.$axios.get("/admin/inquiries").then((function(t){e.users=t.data,e.loading=!1}))},focususer:function(e){this.focus=e,this.userToggle=!0}}}),U=n(26),component=Object(U.a)(w,(function(){var e=this,t=e._self._c;return t(d.a,{attrs:{column:"",container:""}},[t(r.a,[t(_.d,[e._v("App Queries")]),e._v(" "),e.loading?t("p",{staticClass:"pa-4 text-center"},[e._v("Loading")]):t(y.a,{attrs:{grow:"","fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",[e._v("User Id")]),e._v(" "),t("th",[e._v("User Name")]),e._v(" "),t("th",[e._v("User E-Mail")]),e._v(" "),t("th",[e._v("User Phone")]),e._v(" "),t("th",[e._v("Date")]),e._v(" "),t("th",[e._v("Actions")])])]),e._v(" "),t("tbody",e._l(e.users,(function(n,r){return t("tr",{key:r},[t("td",[t("div",[e._v("\n                "+e._s(n.id)+"\n              ")])]),e._v(" "),t("td",{staticClass:"py-1 body-1"},[e._v("\n                "+e._s(n.name)+"\n            ")]),e._v(" "),t("td",{staticClass:"py-1 body-2"},[e._v("\n                "+e._s(n.email)+"\n            ")]),e._v(" "),t("td",{staticClass:"py-1 body-1"},[e._v("\n                "+e._s(n.phone)+"\n            ")]),e._v(" "),t("td",{staticClass:"py-1 body-1"},[e._v("\n                "+e._s(n.created_at?e.$luxon(n.created_at):"")+"\n            ")]),e._v(" "),t("td",[t(o.a,{attrs:{color:"primary",small:""},on:{click:function(t){return e.focususer(r)}}},[e._v("View")])],1)])})),0)]},proxy:!0}])})],1),e._v(" "),e.users[e.focus]?t(v.a,{attrs:{"max-width":"600"},model:{value:e.userToggle,callback:function(t){e.userToggle=t},expression:"userToggle"}},[e.users[e.focus]?t(r.a,[t(c.a,[t(_.d,[e._v("User Details")]),e._v(" "),e.users[e.focus]?t(f.a,{attrs:{"two-line":""}},[t(h.a,[t(m.a,[t(m.b,[e._v("User Name:")]),e._v(" "),t(m.c,[e._v(e._s(e.users[e.focus].name))])],1)],1),e._v(" "),t(h.a,[t(m.a,[t(m.b,[e._v("User E-Mail:")]),e._v(" "),t(m.c,[e._v(e._s(e.users[e.focus].email))])],1)],1),e._v(" "),t(h.a,[t(m.a,[t(m.b,[e._v("User Phone:")]),e._v(" "),t(m.c,[e._v(e._s(e.users[e.focus].phone))])],1)],1),e._v(" "),t(h.a,[t(m.a,[t(m.b,[e._v("Enquiry Date:")]),e._v(" "),t(m.c,[e._v(e._s(e.users[e.focus].created_at?e.$luxon(e.users[e.focus].created_at):""))])],1)],1)],1):e._e(),e._v(" "),t(l.a),e._v(" "),t("p",{staticClass:"body-1 ma-2"},[e._v("Message: "+e._s(e.users[e.focus].message))])],1)],1):e._e()],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);