<template>
	<v-layout row container>
		<v-col cols="12" md="3">
			<v-list v-show="$vuetify.breakpoint.mdAndUp || showUsers" style="background:#f9fbfc;" :style="$vuetify.breakpoint.mdAndUp&&'height:100vh'" >
				<v-list-item :class="current_room==conv.id&&'white'" @click="current_room=conv.id" v-for="(conv,convi) in conversations" :key="convi">
					<v-list-item-icon>
						<v-icon large>mdi-account-circle</v-icon>
					</v-list-item-icon>
					<v-list-item-content>
						<v-list-item-title v-if="conv.receiver && conv.sender">
							{{conv.sender.id == $auth.user.id ? conv.receiver.name: conv.sender.name}}
						</v-list-item-title>
							<v-list-item-subtitle>
								{{conv.last_message}}
							</v-list-item-subtitle>
					</v-list-item-content>
				</v-list-item>
			</v-list> 
			<v-btn outlined style="float:right" v-show="$vuetify.breakpoint.smAndDown" @click="showUsers=!showUsers">
				<v-icon>mdi-account-multiple</v-icon>
			</v-btn>
		</v-col>
		<v-col cols="12" md="9">
			<v-autocomplete
				:items="users"
				outlined
				dense
				item-text="name"
				item-value="id"
				:loading="loadingUsers"
				:search-input.sync="keyword"
				hide-no-data
				v-model="newUser"
				label="Search User For New Chat"
			></v-autocomplete>
			<chat-window v-if="current_room" :key="current_room" :current_room="current_room"/>
		</v-col>
	</v-layout>
</template>

<script>
export default {
	layout:'superDesktop',
	data:()=>({
		conversations:[],
		selectedConversation:null,
		newUser:null,
		keyword:"",
		users:[],
		loadingUsers:false,
		messages:[],
		current_room:null
	}),
	components:{
		ChatWindow:()=>import('~/components/native/chatWindow.vue')
	},
	mounted(){
		this.fetchConversations();
	},
	watch:{
		keyword(val){
			if(val&&val.length>=2){
				this.loadingUsers=true;
				this.fetchUsers();
			}
		},
		newUser(val){
			if(val){
				this.withUser=val;
				this.startConversation();
			}
		},
	},
	computed:{
		withUser:{
			get(){
				return this.$route.query.withUser;
			}, set(){
				this.$router.push({
					query:{
						withUser:this.newUser.id
					}
				});
			}
		},
	},
	methods:{
		fetchConversations(){
			this.$axios.get('/auth/conversations')
			.then((res)=>{
				this.conversations = res.data;
			})
		},
		fetchUsers(){
			this.loadingUsers=true;
			this.$axios.get('/auth/users/filter?name'+this.keyword)
			.then((res)=>{
				this.loadingUsers=false;
				this.users = res.data;
			})
		},
		startConversation(){
			this.$axios.post('/auth/conversations',{
				user_id:this.newUser
			})
			.then((res)=>{
				this.conversations.push(res.data);
				this.newUser=null;
				this.selectedConversation=res.data.id;
			})
		}
	}
}
</script>

<style>

</style>