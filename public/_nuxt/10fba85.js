(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{1009:function(e,n,t){"use strict";t.r(n);var r=t(568),l=t(510),o=t(594),c=t(220),d=(t(25),t(30),{props:{permissions:{default:null},title:{default:"Assignee"},id:{default:null},name:{default:null},addNew:{default:!0}},data:function(){return{createDialog:!1,user:{},assignee:{},assignee_search:"",assignees:[],loadingAssignees:!1,show1:!1,registering:!1,emailRules:[function(e){return!!e||"E-mail is required"},function(e){return/.+@.+\..+/.test(e)||"E-mail must be valid"}],passwordRules:[function(e){return!!e||"Password is required"}]}},watch:{assignee_search:function(){this.searchAssignees()}},methods:{addUser:function(){this.$axios.put("/app/users",this.user).then((function(e){}))},searchAssignees:function(){var e,n=this;(null===(e=this.assignee_search)||void 0===e?void 0:e.length)<=2||(this.loadingAssignees=!0,this.$axios.get("/auth/products/filter",{params:{name:this.assignee_search,is:this.permissions}}).then((function(e){n.assignees=e.data,n.loadingAssignees=!1}),(function(e){n.loadingAssignees=!1})))}}}),h=t(26),component=Object(h.a)(d,(function(){var e=this,n=e._self._c;return n("div",[n("p",[e._v(e._s(e.title)+" "),n(o.a,{attrs:{label:""}},[e._v(e._s(e.name||"None"))])],1),e._v(" "),n("div",{staticClass:"d-flex flex-row"},[n(r.a,{attrs:{dense:"",outlined:"",clearable:"",loading:e.loadingAssignees,"search-input":e.assignee_search,label:"Search "+e.title,"item-text":"name","return-object":"","prepend-inner-icon":"mdi-magnify",items:e.assignees},on:{focus:function(n){return e.searchAssignees()},input:function(n){n&&e.$emit("assignTo",n)},"update:searchInput":function(n){e.assignee_search=n},"update:search-input":function(n){e.assignee_search=n}}}),e._v(" "),e.addNew?n(l.a,{staticClass:"ml-2",attrs:{to:"/admin/products/editor"}},[n(c.a,{attrs:{left:""}},[e._v("mdi-plus")]),e._v("New")],1):e._e()],1)])}),[],!1,null,null,null);n.default=component.exports}}]);