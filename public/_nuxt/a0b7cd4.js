(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{1039:function(t,e,n){"use strict";n.r(e);var o=n(510),r=n(219),_=n(524),c=n(566),l=n(511),v=n(530),d=n(764),f=n(745),h=n(527),m=n(561),y=(n(25),{layout:"adminDesktop",data:function(){return{users:[],focus:0,userToggle:!1,status:"",changingStatus:!1,loading:!1}},mounted:function(){this.getUsers()},methods:{getUsers:function(){var t=this;this.loading=!0,this.$axios.get("auth/admin/queries").then((function(e){t.users=e.data,t.loading=!1}))},focususer:function(t){this.focus=t,this.userToggle=!0}}}),w=n(26),component=Object(w.a)(y,(function(){var t=this,e=t._self._c;return e(v.a,{attrs:{column:"",container:""}},[t.loading?e("p",{staticClass:"pa-4 text-center"},[t._v("Loading")]):e(m.a,{attrs:{grow:"","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[e("thead",[e("tr",[e("th",[t._v("User Id")]),t._v(" "),e("th",[t._v("User Name")]),t._v(" "),e("th",[t._v("User E-Mail")]),t._v(" "),e("th",[t._v("Actions")])])]),t._v(" "),e("tbody",t._l(t.users,(function(n,r){return e("tr",{key:r},[e("td",[e("div",[t._v("\n                "+t._s(n.id)+"\n              ")])]),t._v(" "),e("td",{staticClass:"py-1 body-1"},[t._v("\n                "+t._s(n.name)+"\n            ")]),t._v(" "),e("td",{staticClass:"py-1 body-2"},[t._v("\n                "+t._s(n.email)+"\n            ")]),t._v(" "),e("td",{staticClass:"py-1 body-1"},[t._v("\n                "+t._s(n.phone)+"\n            ")]),t._v(" "),e("td",[e(o.a,{attrs:{color:"primary",small:""},on:{click:function(e){return t.focususer(r)}}},[t._v("View")])],1)])})),0)]},proxy:!0}])}),t._v(" "),t.users[t.focus]?e(c.a,{attrs:{"max-width":"600"},model:{value:t.userToggle,callback:function(e){t.userToggle=e},expression:"userToggle"}},[t.users[t.focus]?e(r.a,[e(_.a,[e("h4",[t._v("user Details")]),t._v(" "),t.users[t.focus]?e(d.a,{attrs:{"two-line":""}},[e(f.a,[e(h.a,[e(h.c,[t._v("User Name:")]),t._v(" "),e(h.b,[t._v(t._s(t.users[t.focus].name))])],1)],1),t._v(" "),e(f.a,[e(h.a,[e(h.c,[t._v("User E-Mail:")]),t._v(" "),e(h.b,[t._v(t._s(t.users[t.focus].email))])],1)],1),t._v(" "),e(f.a,[e(h.a,[e(h.c,[t._v("User Phone:")]),t._v(" "),e(h.b,[t._v(t._s(t.users[t.focus].phone))])],1)],1)],1):t._e(),t._v(" "),e(l.a),t._v(" "),e("p",{staticClass:"body-2"},[t._v(t._s(t.users[t.focus].message))])],1)],1):t._e()],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports}}]);