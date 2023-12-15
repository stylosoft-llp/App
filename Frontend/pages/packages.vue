<template>
<v-layout column align-center justify-center>
			<div class="my-16">
			<h1 class="display-1 font-weight-black text-center">SELECT FROM THE PLANS BELOW</h1>
			<v-row class="container" style="width:100%;margin:auto;">
				<v-col v-for="(pr,pri) in pricing" :key="pri">
					<v-card style="box-shadow:0 5px 10px #e7e7e7;" class="rounded-xl ma-1 pa-2">
						<v-card flat>
						<v-img :src="pr.image" width="100" height="100" class="mx-auto"/>
						<h2 class="text-center">{{pr.title}}</h2>
						<p class="mt-2 body-2 text-center">{{pr.desc}}</p>
						</v-card>
						<v-list dense>
							<v-list-item v-for="(f,fi) in pr.features" :key="fi">
								<v-list-item-icon v-if="f"> <v-icon right color="green accent-4">mdi-check-circle</v-icon></v-list-item-icon>
								<v-list-item-title>{{f}}</v-list-item-title>
							</v-list-item>
							<v-subheader>Licenses</v-subheader>
							<v-list-item>
								<v-list-item-title>Super Admin</v-list-item-title>
								<v-list-item-subtitle>{{pr.super_admin}}</v-list-item-subtitle>
							</v-list-item>
							<v-list-item>
								<v-list-item-title>Admin</v-list-item-title>
								<v-list-item-subtitle>{{pr.admin}}</v-list-item-subtitle>
							</v-list-item>
							<v-list-item>
								<v-list-item-title>Service Engineers</v-list-item-title>
								<v-list-item-subtitle>{{pr.service_engineers}}</v-list-item-subtitle>
							</v-list-item>
						</v-list>
						<v-btn rounded :loading="loading" @click="purchaseLicense(pr.id)" class="spl-btn" color="primary" x-large block>Buy Plan</v-btn>
					</v-card>
				</v-col>
			</v-row>
		</div>
		<v-dialog max-width="400" v-model="purchased">
			<v-card>
				<v-card-title>
					<span class="headline">Thank you for your purchase</span>
				</v-card-title>
				<v-card-text>
					<p>Let's Start with the first step: Creating Your Company</p>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="primary" to="/onboarding">Go Ahead</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
</v-layout>
</template>

<script>
export default {
	data:()=>({
		loading:false,
		purchased:false,
				pricing:[
			{id:1,image:'/silver.png',title:'StyloDesk - SILVER', desc:'StyloDesk Silver is best suitable for small scale business with all the required only features.',features:[
				'Business flow management','Ticket management','Stylo Servicedesk Support',''
			],super_admin:1, admin: 1, service_engineers:8},
			{
				id:2,image:'/gold.png',title:'StyloDesk - GOLD', desc: 'StyloDesk Silver is best suitable for small scale business with all the required only features.', features:[
					'Business flow management','Ticket management','Stylo Servicedesk support','Payments and  more'
				], super_admin:1, admin: 2, service_engineers:16
			},
			{
				id:3,image:'/platinum.png',title:'StyloDesk - PLATINUM', desc:'StyloDesk Silver is best suitable for small scale business with all the required only features.',features:[
					'Business flow management','Ticket management','Stylo Servicedesk support','Payments and  more'
				], super_admin:1, admin: 4, service_engineers:40
			}
		],
		package:null
	}),
	methods:{
		purchaseLicense(e)
		{
			this.loading = true;
			this.$axios.post('/auth/licenses',{package_id:e})
			.then((res)=>{
				this.$auth.fetchUser();
				this.loading=false;
				this.purchased = true;
				//this.$router.push('/onboarding');
			})
		}
	}
}
</script>

<style>

</style>