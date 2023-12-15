<template>
<v-layout column align-center justify-center fill-height>
	<v-card max-width="600" width="100%">
		<v-card-text>
			<div class="d-flex flex-row my-2">
				<v-btn small color="primary" @click="$router.back()" outlined><v-icon>mdi-arrow-left</v-icon></v-btn>
				<v-spacer></v-spacer>
			<h2 class="black--text">Raise Ticket</h2>
			</div>
	<v-text-field outlined dense v-model="name" label="Subject" />
			<!-- Assign Product -->
			<productAssign
				:id="product_id"
				:name="product_name"
				:addNew="false"
				title="Product"
				@assignTo="(e)=>{e&&(this.product_id=e.id,this.product_name=e.name)}"
			/>
		<v-select outlined :items="['Installation','Replacement','Repair']" v-model="service_type" label="Service Type"></v-select>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="updateService()" color="primary" class="spl-btn mx-auto" large :loading="loading" type="submit" block> Save Service</v-btn>
		</v-card-actions>
	</v-card>
	<v-dialog>

	</v-dialog>
</v-layout>
</template>

<script>
export default {
	layout:'custDesktop',
	data:()=>({
		name:'',
		service_type:null,
		loading:false,
		product_id:null,
		product_name: '',
	}),
	components:{
		userAssign:()=>import('~/components/app/userAssign.vue'),
		productAssign:()=>import('~/components/app/productAssign.vue')
	},
	mounted(){
		if(this.$route.query.id){
			this.fetchService();
		}
	},
	methods:{
		assignProduct(e){
			if(e){
				this.product_id=e.id;
			this.product_name=e.name;
			}
		},
		fetchService(){
			this.$axios.get('auth/services/'+this.$route.query.id)
			.then((r)=>{
				this.name=r.data.name;
				this.status=r.data.status;
				this.service_type=r.data.service_type;
				this.product_id=r.data.product?.id;
				this.product_name=r.data.product?.name;
			})
		},
		updateService(){
			let id = this.$route.query.id || null;
			this.$axios.post('auth/tickets',{
				name:this.name,
				service_type: this.service_type,
				status: this.status,
				product_id: this.product_id,
			})
			.then((res)=>{
			this.$toast.success("Ticket Saved", { icon: "mdi-check-circle" });
				if(!this.$route.query.id){
					this.$router.replace({query: {...this.$route.query, id: res.data.id}})
				}
			},(err)=>{})
		}
	}
}	
</script>

<style>

</style>