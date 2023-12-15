(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{1032:function(t,e,n){"use strict";n.r(e);var l={layout:"superDesktop",data:function(){return{month:"",amount:"",licenses:[],status:"",changingStatus:!1,loading:!1}},mounted:function(){this.getLicenses()},methods:{getLicenses:function(){var t=this;this.loading=!0,this.$axios.get("/super/licenses",{params:{date:this.month}}).then((function(e){t.licenses=e.data.licenses,t.amount=e.data.sum,t.loading=!1}))}}},o=n(27),c=n(31),v=n.n(c),_=n(211),r=n(177),d=n(503),m=n(545),h=n(492),f=n(512),y=n(744),V=n(724),x=n(508),L=n(544),k=n(501),w=n(490),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-layout",{attrs:{column:"",container:""}},[n("div",{staticClass:"d-flex pa-2"},[n("v-text-field",{attrs:{loading:t.loading,outlined:"",label:"Filter By Month",type:"month"},on:{change:function(e){return t.getLicenses()}},model:{value:t.month,callback:function(e){t.month=e},expression:"month"}}),t._v(" "),n("v-spacer"),t._v(" "),n("h2",[t._v("Total: "+t._s(t.amount))])],1),t._v(" "),n("v-card",[t.loading?n("p",{staticClass:"pa-4 text-center"},[t._v("Loading")]):n("v-simple-table",{attrs:{grow:"","fixed-header":""},scopedSlots:t._u([{key:"default",fn:function(){return[n("thead",[n("tr",[n("th",[t._v("License Id")]),t._v(" "),n("th",[t._v("License Name")]),t._v(" "),n("th",[t._v("Date")]),t._v(" "),n("th",[t._v("Amount")])])]),t._v(" "),n("tbody",t._l(t.licenses,(function(e,l){return n("tr",{key:l},[n("td",[n("div",[t._v("\n                "+t._s(e.id)+"\n              ")])]),t._v(" "),n("td",{staticClass:"py-1 body-1"},[t._v("\n                "+t._s(e.name)+"\n            ")]),t._v(" "),n("td",{staticClass:"py-1 body-1"},[t._v("\n                "+t._s(e.created_at?t.$luxon(e.created_at):"")+"\n              ")]),t._v(" "),n("td",[t._v("\n              "+t._s(e.package&&e.package.sale_price)+"\n            ")])])})),0)]},proxy:!0}])})],1),t._v(" "),t.licenses[t.focus]?n("v-dialog",{attrs:{"max-width":"600"},model:{value:t.userToggle,callback:function(e){t.userToggle=e},expression:"userToggle"}},[t.licenses[t.focus]?n("v-card",[n("v-container",[n("v-card-title",[t._v("User Details")]),t._v(" "),t.licenses[t.focus]?n("v-list",{attrs:{"two-line":""}},[n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v("User Name:")]),t._v(" "),n("v-list-item-title",[t._v(t._s(t.licenses[t.focus].name))])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v("User E-Mail:")]),t._v(" "),n("v-list-item-title",[t._v(t._s(t.licenses[t.focus].email))])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v("User Phone:")]),t._v(" "),n("v-list-item-title",[t._v(t._s(t.licenses[t.focus].phone))])],1)],1),t._v(" "),n("v-list-item",[n("v-list-item-content",[n("v-list-item-subtitle",[t._v("Enquiry Date:")]),t._v(" "),n("v-list-item-title",[t._v(t._s(t.licenses[t.focus].created_at?t.$luxon(t.licenses[t.focus].created_at):""))])],1)],1)],1):t._e(),t._v(" "),n("v-divider"),t._v(" "),n("p",{staticClass:"body-1 ma-2"},[t._v("Message: "+t._s(t.licenses[t.focus].message))])],1)],1):t._e()],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:_.a,VCardTitle:r.d,VContainer:d.a,VDialog:m.a,VDivider:h.a,VLayout:f.a,VList:y.a,VListItem:V.a,VListItemContent:x.a,VListItemSubtitle:x.b,VListItemTitle:x.c,VSimpleTable:L.a,VSpacer:k.a,VTextField:w.a})}}]);