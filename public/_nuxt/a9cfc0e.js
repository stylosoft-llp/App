(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{734:function(t,e,r){var content=r(805);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(10).default)("38f23b6b",content,!0,{sourceMap:!1})},804:function(t,e,r){"use strict";r(734)},805:function(t,e,r){var o=r(9)(!1);o.push([t.i,'.absCard{bottom:0;width:100%;border-radius:0;position:absolute;z-index:2;height:80px;background:#000;background:linear-gradient(270deg,rgba(0,0,0,.5),#000);background:-webkit-linear-gradient(270deg,rgba(0,0,0,.5),#000);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="#000000",endColorstr="#000000",GradientType=1)}',""]),t.exports=o},945:function(t,e,r){"use strict";r.r(e);var o={layout:"realestate",data:function(){return{projects:0,focus:null,completed:[{name:"Villa Palazzo",photos:["/rs-assets/projects/villa-palazzo/1.jpg","/rs-assets/projects/villa-palazzo/10.jpeg","/rs-assets/projects/villa-palazzo/11.jpeg","/rs-assets/projects/villa-palazzo/2.jpeg","/rs-assets/projects/villa-palazzo/3.jpg","/rs-assets/projects/villa-palazzo/4.jpg","/rs-assets/projects/villa-palazzo/5.jpg","/rs-assets/projects/villa-palazzo/6.jpg","/rs-assets/projects/villa-palazzo/7.jpg","/rs-assets/projects/villa-palazzo/8.jpg","/rs-assets/projects/villa-palazzo/9.jpeg"]},{name:"Sunyuga Vista",photos:["/rs-assets/projects/vista/1.jpg","/rs-assets/projects/vista/2.jpg","/rs-assets/projects/vista/3.jpg","/rs-assets/projects/vista/4.jpg","/rs-assets/projects/vista/5.jpg"]},{name:"Elegance",photos:["/rs-assets/projects/elegance/1.jpg","/rs-assets/projects/elegance/2.jpg","/rs-assets/projects/elegance/3.jpg","/rs-assets/projects/elegance/4.jpg","/rs-assets/projects/elegance/5.jpg","/rs-assets/projects/elegance/6.jpg","/rs-assets/projects/elegance/7.jpg"]}]}}},c=(r(804),r(27)),l=r(31),n=r.n(l),v=r(487),d=r(210),j=r(177),f=r(498),m=r(499),h=r(209),z=r(306),x=r(507),_=r(501),k=r(497),w=r(934),C=r(1011),y=r(1010),V=r(931),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-layout",{attrs:{column:""}},[r("v-card",{staticClass:"parallax d-flex flex-column justify-center",staticStyle:{"background-image":"url('/rs-assets/about2.jpg')"},attrs:{height:"280px",dark:"",flat:"",width:"100%"}},[r("v-card",{staticClass:"\n          d-flex\n          flex-column\n          align-center\n          justify-center\n          text-shadow\n          pa-2\n          text-center\n        ",attrs:{dark:"",color:"#00000088",tile:"",width:"100%",height:"100%"}},[r("h1",{staticClass:"display-2 font-weight-black",attrs:{align:"center"}},[t._v("OUR PROJECTS")])])],1),t._v(" "),r("v-tabs",{staticClass:"projects my-4",attrs:{centered:"",color:"orange","icons-and-text":""},model:{value:t.projects,callback:function(e){t.projects=e},expression:"projects"}},[r("v-tab",[t._v("\n        Completed\n        "),r("v-icon",[t._v("mdi-check-circle")])],1),t._v(" "),r("v-tab",[t._v("\n        On Going\n        "),r("v-icon",[t._v("mdi-refresh")])],1),t._v(" "),r("v-tab",[t._v("\n        Upcoming\n        "),r("v-icon",[t._v("mdi-calendar")])],1)],1),t._v(" "),r("v-tabs-items",{model:{value:t.projects,callback:function(e){t.projects=e},expression:"projects"}},[r("v-tab-item",[r("v-container",[null===t.focus?r("v-row",t._l(t.completed,(function(e,o){return r("v-col",{key:o,attrs:{md:"4"}},[r("v-card",{staticClass:"my-12",staticStyle:{position:"relative"},attrs:{width:"400px",height:"400px",flat:""},on:{click:function(e){t.focus=o}}},[r("div",{staticClass:"text-center title font-weight-black text-uppercase white--text absCard pa-2"},[t._v("\n\t\t\t\t\t\t\t"+t._s(e.name)+"\n\t\t\t\t\t\t")]),t._v(" "),r("v-img",{attrs:{width:"100%",height:"100%",cover:"",src:e.photos[0]}})],1)],1)})),1):r("div",{staticClass:"text-center"},[r("v-card-title",[t._v("\n\t\t\t\t\t\t"+t._s(t.completed[t.focus].name)+"\n\t\t\t\t\t\t"),r("v-spacer"),t._v(" "),r("v-btn",{staticClass:"my-2 mx-auto",attrs:{color:"orange"},on:{click:function(e){t.focus=null}}},[t._v("Back")])],1),t._v(" "),r("MazGallery",{attrs:{images:t.completed[t.focus].photos,height:"600px"}})],1)],1)],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;n()(component,{VBtn:v.a,VCard:d.a,VCardTitle:j.d,VCol:f.a,VContainer:m.a,VIcon:h.a,VImg:z.a,VLayout:x.a,VRow:_.a,VSpacer:k.a,VTab:w.a,VTabItem:C.a,VTabs:y.a,VTabsItems:V.a})}}]);