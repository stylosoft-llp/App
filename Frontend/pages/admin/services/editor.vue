<template>
<v-layout column align-center justify-center fill-height>
	<v-card max-width="600" width="100%">
		<v-card-text>
			<div class="d-flex flex-row my-2">
				<v-btn small color="primary" to="/app/services" outlined><v-icon>mdi-arrow-left</v-icon></v-btn>
				<v-spacer></v-spacer>
			<h2 class="black--text">Service Editor</h2>
			</div>
	<v-text-field outlined dense v-model="name" label="Name" />
			<!-- Assign ServiceMan -->
			<userAssign
				title="Customer"
				:id="assigned_to"
				:name="assigned_name"
				@assignTo="assignUser($event)"
				permissions="executive"
			/>
			<!-- Assign Customer -->
			<userAssign
				:id="customer_id"
				:name="customer_name"
				@assignTo="assignCustomer($event)"
				permissions="customer"
			/>
			<!-- Assign Product -->
			<productAssign
				:id="product_id"
				:name="product_name"
				title="Product"
				@assignTo="(e)=>{this.product_id=e.id;this.product_name=e.name}"
			/>
		<v-text-field
		filled
		type="date"
		v-model="expected_date"
		label="Expected Date"
	/>
		<v-select outlined :items="['Installation','Replacement','Repair']" v-model="service_type" label="Service Type"></v-select>
		<v-select outlined :items="statusItems" v-model="status" label="Status"></v-select>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="updateService()"  color="primary" class="spl-btn mx-auto" large :loading="loading" type="submit" block> Save Service</v-btn>
		</v-card-actions>
	</v-card>
	<v-dialog>

	</v-dialog>
</v-layout>
</template>

<script>
export default {
	layout:'appDesktop',
	data:()=>({
		name:'',
		expected_date:'',
		service_type:null,
		status:'',
		loading:false,
		assigned_to:null,
		assigned_name: '',
		customer_id:null,
		customer_name: '',
		product_id:null,
		product_name: '',
		status:'',
		statusItems:[
			'New',
			'Pending',
			'Active',
			'Completed',
			'Cancelled'
		]
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
		assignUser(e){
			if(e){
				this.assigned_to=e.id;
			this.assigned_name=e.name;
			}
		},
		assignCustomer(e){
			if(e){
				this.customer_id=e.id;
			this.customer_name=e.name;
			}
		},
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
				this.expected_date=r.data.expected_date;
				this.service_type=r.data.service_type;
				this.customer_id=r.data.customer?.id;
				this.customer_name=r.data.customer?.name;
				this.assigned_to=r.data.assignee?.id;
				this.assigned_name=r.data.assignee?.name;
				this.product_id=r.data.product?.id;
				this.product_name=r.data.product?.name;
			})
		},
		updateService(){
			
			let id = this.$route.query.id || null;
			
			this.$axios.put('auth/services/'+id,{
				name:this.name,
				s_desc: this.s_desc,
				l_desc: this.l_desc,
				service_type: this.service_type,
				expected_date: this.expected_date,
				status: this.status,
				product_id: this.product_id,
				assigned_to: this.assigned_to,
				customer_id: this.customer_id,
				
			})
			.then((res)=>{
			this.$toast.success("Service Saved", { icon: "mdi-check-circle" });
		
				if(!this.$route.query.id){
					this.$router.replace({query: {...this.$route.query, id: res.data.id}})
				}
			
			},(err)=>{})
			
			this.$router.push('/app/services');
		}
	}
}	
</script>

<style>

</style>