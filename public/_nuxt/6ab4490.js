(window.webpackJsonp=window.webpackJsonp||[]).push([[46,8],{1020:function(e,t,n){"use strict";n.r(t);n(6),n(32),n(34),n(710);var r={layout:"custDesktop",data:function(){return{conversations:[],selectedConversation:null,newUser:null,keyword:"",users:[],loadingUsers:!1,messages:[],current_room:null}},components:{ChatWindow:function(){return Promise.resolve().then(n.bind(null,710))}},mounted:function(){this.fetchConversations()},watch:{keyword:function(e){e&&e.length>=2&&(this.loadingUsers=!0,this.fetchUsers())},newUser:function(e){e&&(this.withUser=e,this.startConversation())}},computed:{withUser:{get:function(){return this.$route.query.withUser},set:function(){this.$router.push({query:{withUser:this.newUser.id}})}}},methods:{fetchConversations:function(){var e=this;this.$axios.get("/auth/conversations").then((function(t){e.conversations=t.data}))},fetchUsers:function(){var e=this;this.loadingUsers=!0,this.$axios.get("/auth/users/filter?name"+this.keyword).then((function(t){e.loadingUsers=!1,e.users=t.data}))},startConversation:function(){var e=this;this.$axios.post("/auth/conversations",{user_id:this.newUser}).then((function(t){e.fetchConversations(),e.newUser=null,e.selectedConversation=t.data.id}))}}},o=n(27),l=n(31),d=n.n(l),v=n(502),x=n(210),f=n(510),c=n(734),h=n(714),_=n(508),m=n(715),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",container:""}},[n("v-col",{attrs:{md:"2.5"}},[n("v-list",{staticStyle:{background:"#f9fbfc",height:"100vh"}},e._l(e.conversations,(function(t,r){return n("v-list-item",{key:r,class:e.current_room==t.id&&"white",on:{click:function(n){e.current_room=t.id}}},[n("v-list-item-icon",[n("v-icon",{attrs:{large:""}},[e._v("mdi-account-circle")])],1),e._v(" "),n("v-list-item-content",[t.receiver&&t.sender?n("v-list-item-title",[e._v("\n\t\t\t\t\t\t"+e._s(t.sender.id==e.$auth.user.id?t.receiver.name:t.sender.name)+"\n\t\t\t\t\t")]):e._e(),e._v(" "),n("v-list-item-subtitle",[e._v("\n\t\t\t\t\t\t\t"+e._s(t.last_message)+"\n\t\t\t\t\t\t")])],1)],1)})),1)],1),e._v(" "),n("v-col",{attrs:{md:"9"}},[e.current_room?n("chat-window",{key:e.current_room,attrs:{current_room:e.current_room}}):e._e()],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{VCol:v.a,VIcon:x.a,VLayout:f.a,VList:c.a,VListItem:h.a,VListItemContent:_.a,VListItemIcon:m.a,VListItemSubtitle:_.b,VListItemTitle:_.c})},509:function(e,t,n){"use strict";var r=n(1),o=n(2);t.a=r.default.extend({name:"comparable",props:{valueComparator:{type:Function,default:o.j}}})},510:function(e,t,n){"use strict";n(221);var r=n(222);t.a=Object(r.a)("layout")},523:function(e,t,n){var content=n(524);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(10).default)("5c8fbe94",content,!0,{sourceMap:!1})},524:function(e,t,n){var r=n(9)(!1);r.push([e.i,".theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:#fff}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.5)}.theme--light.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:hsla(0,0%,100%,.5)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea{color:rgba(0,0,0,.87)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::-moz-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea:-ms-input-placeholder{color:rgba(0,0,0,.38)}.theme--dark.v-textarea.v-text-field--solo-inverted.v-input--is-focused textarea::placeholder{color:rgba(0,0,0,.38)}.v-textarea textarea{align-self:stretch;flex:1 1 auto;line-height:1.75rem;max-width:100%;min-height:32px;outline:none;padding:0;width:100%}.v-textarea .v-text-field__prefix,.v-textarea .v-text-field__suffix{padding-top:2px;align-self:start}.v-textarea.v-text-field--box .v-text-field__prefix,.v-textarea.v-text-field--box textarea,.v-textarea.v-text-field--enclosed .v-text-field__prefix,.v-textarea.v-text-field--enclosed textarea{margin-top:24px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) textarea{margin-top:10px}.v-textarea.v-text-field--box.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--box.v-text-field--single-line:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--outlined:not(.v-input--dense) .v-label,.v-textarea.v-text-field--enclosed.v-text-field--single-line:not(.v-input--dense) .v-label{top:18px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense textarea,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__prefix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-text-field__suffix,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense textarea{margin-top:6px}.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--box.v-text-field--single-line.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--outlined.v-input--dense .v-input__prepend-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__append-outer,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-inner,.v-textarea.v-text-field--enclosed.v-text-field--single-line.v-input--dense .v-input__prepend-outer{align-self:flex-start;margin-top:8px}.v-textarea.v-text-field--solo{align-items:flex-start}.v-textarea.v-text-field--solo .v-input__control textarea{caret-color:auto}.v-textarea.v-text-field--solo .v-input__append-inner,.v-textarea.v-text-field--solo .v-input__append-outer,.v-textarea.v-text-field--solo .v-input__prepend-inner,.v-textarea.v-text-field--solo .v-input__prepend-outer{align-self:flex-start;margin-top:12px}.v-application--is-ltr .v-textarea.v-text-field--solo .v-input__append-inner{padding-left:12px}.v-application--is-rtl .v-textarea.v-text-field--solo .v-input__append-inner{padding-right:12px}.v-textarea--auto-grow textarea{overflow:hidden}.v-textarea--no-resize textarea{resize:none}.v-textarea.v-text-field--enclosed .v-text-field__slot{align-self:stretch}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-right:-12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot{margin-left:-12px}.v-application--is-ltr .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-right:12px}.v-application--is-rtl .v-textarea.v-text-field--enclosed .v-text-field__slot textarea{padding-left:12px}",""]),e.exports=r},550:function(e,t,n){"use strict";n(17),n(11),n(13),n(6),n(23),n(16),n(24);var r=n(3),o=(n(35),n(79),n(523),n(490)),l=n(14);function d(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}var v=Object(l.a)(o.a);t.a=v.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:function(e){return!isNaN(parseFloat(e))}},rows:{type:[Number,String],default:5,validator:function(e){return!isNaN(parseInt(e,10))}}},computed:{classes:function(){return function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}({"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle},o.a.options.computed.classes.call(this))},noResizeHandle:function(){return this.noResize||this.autoGrow}},watch:{autoGrow:function(e){var t=this;this.$nextTick((function(){var n;e?t.calculateInputHeight():null==(n=t.$refs.input)||n.style.removeProperty("height")}))},lazyValue:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight:function(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted:function(){var e=this;setTimeout((function(){e.autoGrow&&e.calculateInputHeight()}),0)},methods:{calculateInputHeight:function(){var input=this.$refs.input;if(input){input.style.height="0";var e=input.scrollHeight,t=parseInt(this.rows,10)*parseFloat(this.rowHeight);input.style.height=Math.max(t,e)+"px"}},genInput:function(){var input=o.a.options.methods.genInput.call(this);return input.tag="textarea",delete input.data.attrs.type,input.data.attrs.rows=this.rows,input},onInput:function(e){o.a.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown:function(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},710:function(e,t,n){"use strict";n.r(t);n(79),n(87),n(28),n(71);var r={props:["current_room"],data:function(){return{message:"",messages:[],currentUserId:1234}},mounted:function(){var e=this;this.getMessages(),setInterval((function(){e.getMessages()}),5e3)},methods:{getMessages:function(){var e=this;this.$axios.get("auth/conversations/".concat(this.current_room,"/messages")).then((function(t){e.$nextTick((function(){e.messages=t.data.data}))}))},sendMessage:function(){var e=this;this.$axios.post("auth/conversations/".concat(this.current_room,"/messages"),{message:this.stringified}).then((function(t){var n=e.messages;n.unshift(t.data),e.messages=n,e.message=""}),(function(e){}))},multiline:function(e){return e?e.split("\n").join("<br/>"):""}},computed:{stringified:function(){return JSON.parse(JSON.stringify(this.message))}}},o=n(27),l=n(31),d=n.n(l),v=n(491),x=n(211),f=n(510),c=n(501),h=n(550),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{column:""}},[n("div",{staticClass:"px-2",attrs:{id:"chatBody"}},[n("div",{staticClass:"d-flex flex-row justify-top"},[n("v-textarea",{staticClass:"ma-2",attrs:{rows:"3","auto-grow":"",filled:"",color:"black","background-color":"amber lighten-4",label:"Your Message"},scopedSlots:e._u([{key:"append",fn:function(){return[n("v-btn",{staticClass:"ma-2",attrs:{large:"",color:"primary darken-2"},on:{click:function(t){return e.sendMessage()}}},[e._v("Send")])]},proxy:!0}]),model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),e._v(" "),e._l(e.messages,(function(t,r){return n("v-card",{key:r,staticClass:"my-2 pa-2",class:t.from===e.$auth.user.id?"ml-auto teal lighten-4":"mr-auto ",staticStyle:{"max-width":"60%"}},[n("p",{domProps:{innerHTML:e._s(e.multiline(t.body))}}),e._v(" "),n("div",{staticClass:"d-flex font-italic body-2"},[n("b",[e._v(e._s(t.from===e.$auth.user.id?"Me":t.user_name))]),e._v(" "),n("v-spacer"),e._v(" "),n("span",{},[e._v(e._s(t.created_at&&new Date(t.created_at).toDateString()))])],1)])}))],2)])}),[],!1,null,null,null);t.default=component.exports;d()(component,{VBtn:v.a,VCard:x.a,VLayout:f.a,VSpacer:c.a,VTextarea:h.a})}}]);