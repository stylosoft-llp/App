(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{1044:function(t,e,n){"use strict";n.r(e);var r=n(510),o=n(523),c=n(218),d=n(530),h=n(764),l=n(745),v=n(527),f=n(746),w=(n(25),n(5),n(33),n(35),{layout:"custDesktop",data:function(){return{conversations:[],selectedConversation:null,newUser:null,keyword:"",users:[],loadingUsers:!1,messages:[],current_room:null}},components:{ChatWindow:function(){return n.e(7).then(n.bind(null,1091))}},mounted:function(){this.fetchConversations()},watch:{keyword:function(t){t&&t.length>=2&&(this.loadingUsers=!0,this.fetchUsers())},newUser:function(t){t&&(this.withUser=t,this.startConversation())}},computed:{withUser:{get:function(){return this.$route.query.withUser},set:function(){this.$router.push({query:{withUser:this.newUser.id}})}}},methods:{fetchConversations:function(){var t=this;this.$axios.get("/auth/conversations").then((function(e){t.conversations=e.data}))},fetchUsers:function(){var t=this;this.loadingUsers=!0,this.$axios.get("/auth/users/filter?name"+this.keyword).then((function(e){t.loadingUsers=!1,t.users=e.data}))},startConversation:function(){var t=this;this.$axios.post("/auth/conversations",{user_id:this.newUser}).then((function(e){t.fetchConversations(),t.newUser=null,t.selectedConversation=e.data.id}))}}}),m=n(26),component=Object(m.a)(w,(function(){var t=this,e=t._self._c;return e(d.a,{attrs:{row:"",container:""}},[e(o.a,{attrs:{cols:"12",md:"3"}},[e(h.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.mdAndUp||t.showUsers,expression:"$vuetify.breakpoint.mdAndUp || showUsers"}],staticStyle:{background:"#f9fbfc"},style:t.$vuetify.breakpoint.mdAndUp&&"height:100vh"},t._l(t.conversations,(function(n,r){return e(l.a,{key:r,class:t.current_room==n.id&&"white",on:{click:function(e){t.current_room=n.id}}},[e(f.a,[e(c.a,{attrs:{large:""}},[t._v("mdi-account-circle")])],1),t._v(" "),e(v.a,[n.receiver&&n.sender?e(v.c,[t._v("\n\t\t\t\t\t\t"+t._s(n.sender.id==t.$auth.user.id?n.receiver.name:n.sender.name)+"\n\t\t\t\t\t")]):t._e(),t._v(" "),e(v.b,[t._v("\n\t\t\t\t\t\t\t"+t._s(n.last_message)+"\n\t\t\t\t\t\t")])],1)],1)})),1),t._v(" "),e(r.a,{directives:[{name:"show",rawName:"v-show",value:t.$vuetify.breakpoint.smAndDown,expression:"$vuetify.breakpoint.smAndDown"}],staticStyle:{float:"right"},attrs:{outlined:""},on:{click:function(e){t.showUsers=!t.showUsers}}},[e(c.a,[t._v("mdi-account-multiple")])],1)],1),t._v(" "),e(o.a,{attrs:{cols:"12",md:"9"}},[t.current_room?e("chat-window",{key:t.current_room,attrs:{current_room:t.current_room}}):e("div",[t._v("Select Conversation From The Left Pane. If Conversation is unavailable, Contact the service engineer or administrator to start in-app conversation.")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},528:function(t,e,n){"use strict";var r=n(4),o=n(126).findIndex,c=n(125),d="findIndex",h=!0;d in[]&&Array(1)[d]((function(){h=!1})),r({target:"Array",proto:!0,forced:h},{findIndex:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(d)},529:function(t,e,n){"use strict";var r=n(1),o=n(2);e.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.j}}})},530:function(t,e,n){"use strict";n(231);var r=n(232);e.a=Object(r.a)("layout")}}]);