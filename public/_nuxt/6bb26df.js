(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{1052:function(e,t,n){"use strict";n.r(t);var o=n(219),c=n(124),_=n(524),l=n(566),v=n(511),r=n(530),d=n(764),h=n(745),f=n(527),m=n(561),y=n(520),x=n(509),k=(n(25),{layout:"superDesktop",data:function(){return{month:"",amount:"",licenses:[],status:"",changingStatus:!1,loading:!1}},mounted:function(){this.getLicenses()},methods:{getLicenses:function(){var e=this;this.loading=!0,this.$axios.get("/super/licenses",{params:{date:this.month}}).then((function(t){e.licenses=t.data.licenses,e.amount=t.data.sum,e.loading=!1}))}}}),w=n(26),component=Object(w.a)(k,(function(){var e=this,t=e._self._c;return t(r.a,{attrs:{column:"",container:""}},[t("div",{staticClass:"d-flex pa-2"},[t(x.a,{attrs:{loading:e.loading,outlined:"",label:"Filter By Month",type:"month"},on:{change:function(t){return e.getLicenses()}},model:{value:e.month,callback:function(t){e.month=t},expression:"month"}}),e._v(" "),t(y.a),e._v(" "),t("h2",[e._v("Total: "+e._s(e.amount))])],1),e._v(" "),t(o.a,[e.loading?t("p",{staticClass:"pa-4 text-center"},[e._v("Loading")]):t(m.a,{attrs:{grow:"","fixed-header":""},scopedSlots:e._u([{key:"default",fn:function(){return[t("thead",[t("tr",[t("th",[e._v("License Id")]),e._v(" "),t("th",[e._v("License Name")]),e._v(" "),t("th",[e._v("Date")]),e._v(" "),t("th",[e._v("Amount")])])]),e._v(" "),t("tbody",e._l(e.licenses,(function(n,o){return t("tr",{key:o},[t("td",[t("div",[e._v("\n                "+e._s(n.id)+"\n              ")])]),e._v(" "),t("td",{staticClass:"py-1 body-1"},[e._v("\n                "+e._s(n.name)+"\n            ")]),e._v(" "),t("td",{staticClass:"py-1 body-1"},[e._v("\n                "+e._s(n.created_at?e.$luxon(n.created_at):"")+"\n              ")]),e._v(" "),t("td",[e._v("\n              "+e._s(n.package&&n.package.sale_price)+"\n            ")])])})),0)]},proxy:!0}])})],1),e._v(" "),e.licenses[e.focus]?t(l.a,{attrs:{"max-width":"600"},model:{value:e.userToggle,callback:function(t){e.userToggle=t},expression:"userToggle"}},[e.licenses[e.focus]?t(o.a,[t(_.a,[t(c.d,[e._v("User Details")]),e._v(" "),e.licenses[e.focus]?t(d.a,{attrs:{"two-line":""}},[t(h.a,[t(f.a,[t(f.b,[e._v("User Name:")]),e._v(" "),t(f.c,[e._v(e._s(e.licenses[e.focus].name))])],1)],1),e._v(" "),t(h.a,[t(f.a,[t(f.b,[e._v("User E-Mail:")]),e._v(" "),t(f.c,[e._v(e._s(e.licenses[e.focus].email))])],1)],1),e._v(" "),t(h.a,[t(f.a,[t(f.b,[e._v("User Phone:")]),e._v(" "),t(f.c,[e._v(e._s(e.licenses[e.focus].phone))])],1)],1),e._v(" "),t(h.a,[t(f.a,[t(f.b,[e._v("Enquiry Date:")]),e._v(" "),t(f.c,[e._v(e._s(e.licenses[e.focus].created_at?e.$luxon(e.licenses[e.focus].created_at):""))])],1)],1)],1):e._e(),e._v(" "),t(v.a),e._v(" "),t("p",{staticClass:"body-1 ma-2"},[e._v("Message: "+e._s(e.licenses[e.focus].message))])],1)],1):e._e()],1):e._e()],1)}),[],!1,null,null,null);t.default=component.exports}}]);