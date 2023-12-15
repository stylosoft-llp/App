<template>
	<v-layout column>
		<div style="height:100vh;min-height:500px;">
			<v-row class="my-auto;" style="height:100%">
				<v-col class="d-flex justify-center flex-column" md="7">
					<v-container>
					<v-card-title class="display-3 font-weight-black">Helpdesk Solution For<br>All Businesses</v-card-title>
					<v-card-subtitle class="mt-2 title font-weight-regular">StyloDesk is the service desk solution made for all types of businessess. It offers great flexibility to manage everyday business tasks.</v-card-subtitle>
					<v-card-actions>
					<v-btn x-large to="/register" class="spl-btn font-weight-bold" color="primary">&emsp;Try Now&emsp;</v-btn>
					</v-card-actions>
					</v-container>
				</v-col>
				<v-col class="d-flex align-center justify-center" md="5">
					<v-container>
					<v-img width="90%" src="/hero.png" />
					</v-container>
				</v-col>
			</v-row>
		</div>
		<v-card flat color="cyan lighten-" class="text-center py-16">
			<p class="display-1 font-weight-black">DESIGNED WITH YOU IN MIND</p>
			<p class="mt-2 title font-weight-regular">A Perfect And Powerful Desk Customizable For All Industries</p>
			<v-container>
			<v-row dense>
				<v-col v-for="(f,fi) in features" :key="fi" md="3">
			<v-card dark :style="`background:${f.background};`" class="d-flex rounded-xl align-center flex-column py-8 px-2 ma-2">
				<div class="iconic">
				<v-icon large color="black">{{f.icon}}</v-icon>
				</div>
				<h2 class="mt-2">{{f.title}}</h2>
				<p>{{f.text}}</p>
			</v-card>
				</v-col>
			</v-row>
			</v-container>
		</v-card>
				<div class="px-8" style="height:100vh;min-height:500px;background-color:var(--v-primary-base)">
			<v-row class="my-auto;" style="height:100%">
								<v-col class="d-flex align-center justify-center" md="5">
					<v-container>
					<v-img width="90%" style="border-radius:30px" src="/hero2.png" />
					</v-container>
				</v-col>
				<v-col class="d-flex justify-center text-right white--text flex-column" md="7">
					<v-container>
					<h1 class="display-3 font-weight-black">We offer the best<br> Service Desk</h1>
					<v-card-subtitle class="mt-2 title font-weight-regular">Add multiple user roles, create your own forms, assign to suitable engineers, chat with customers, and many more!</v-card-subtitle>
					</v-container>
				</v-col>
			</v-row>
		</div>
		<div class="my-16">
			<h1 class="display-1 font-weight-black text-center">SEE WHAT PACKAGE BEST SUITS YOU</h1>
			<v-row class="container" style="width:100%;margin:auto;">
				<v-col v-for="(pr,pri) in pricing" :key="pri">
					<v-card style="box-shadow:0 5px 10px #e7e7e7;" class="rounded-xl ma-1 pa-2">
						<v-img :src="pr.image" width="100" height="100" class="mx-auto"/>
						<h2 class="text-center">{{pr.title}}</h2>
						<p class="mt-2 body-2 text-center">{{pr.desc}}</p>
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
						<v-btn rounded :to="`/register?plan=`+(pri+1)" class="spl-btn" color="primary" x-large block>Buy Plan</v-btn>
					</v-card>
				</v-col>
			</v-row>
		</div>

	</v-layout>
</template>

<script>
export default {
	data:()=>({
		features:[
			{title:'Simple',icon: 'mdi-cards', text:'Simple and elegant dashboard for any user', background: 'linear-gradient(315deg, #045de9 0%, #09c6f9 74%)'},
			{title:'Customizable',icon: 'mdi-lead-pencil', text:'Create your own query forms to make it inclusive',background:'linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)'},
			{title:'Organized',icon: 'mdi-account-multiple', text:'Add your team and assign roles to each',background:'linear-gradient(315deg, #00bfb2 0%, #028090 74%)'},
			{title:'Best Support',icon: 'mdi-headphones', text:'Get instant responses for your queries',background:'linear-gradient(315deg, #7f53ac 0%, #647dee 74%)'},
		],
		pricing:[
			{image:'/silver.png',title:'StyloDesk - SILVER', desc:'StyloDesk Silver is best suitable for small scale business with all the required only features.',features:[
				'Business flow management','Ticket management','Stylo Servicedesk Support',''
			],super_admin:1, admin: 1, service_engineers:8},
			{
				image:'/gold.png',title:'StyloDesk - GOLD', desc: 'StyloDesk Silver is best suitable for small scale business with all the required only features.', features:[
					'Business flow management','Ticket management','Stylo Servicedesk support','Payments and  more'
				], super_admin:1, admin: 2, service_engineers:16
			},
			{
				image:'/platinum.png',title:'StyloDesk - PLATINUM', desc:'StyloDesk Silver is best suitable for small scale business with all the required only features.',features:[
					'Business flow management','Ticket management','Stylo Servicedesk support','Payments and  more'
				], super_admin:1, admin: 4, service_engineers:40
			}
		]
	}),
}
</script>

<style lang="scss">
.iconic{
	padding: 15px;
	border-radius: 10px !important;
	background:#fff;
	box-shadow: 0 5px 2px rgba(0, 0, 0, 0.481);
}

</style>