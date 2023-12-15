<template>
<v-layout column align-center justify-center fill-height>
	<v-card max-width="700" width="100%">
		<v-card-text>
			<div class="d-flex flex-row my-2">
				<v-btn small color="primary" to="/app/services" outlined><v-icon>mdi-arrow-left</v-icon></v-btn>
				<v-spacer></v-spacer>
			<h2 class="black--text">Service Editor</h2>
			</div>
			<div class="statusBar my-2 row align-center">
				<v-card class="col font-weight-bold text-center" :class="statusItems && statusItems.indexOf(ticket_status)>=sii ? 'primary white--text':'info'" flat tile v-for="(si,sii) in statusItems" :key="sii">
				<div>
					{{si}}
				</div>
				</v-card>
			</div>
	<v-text-field outlined dense v-model="name" label="Name" />
			<!-- Assign ServiceMan -->
			<userAssign
				:id="assigned_to"
				:name="assigned_name"
				@assignTo="assignUser($event)"
				permissions="executive"
			/>
			<!-- Assign Customer -->
			<userAssign
				title="Customer"
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
		<v-text-field
		outlined
		v-model="initial_inspection"
		label="Initial Inspection"
	/>
		<v-select outlined :items="['Installation','Replacement','Repair']" v-model="service_type" label="Service Type"></v-select>
		<v-select outlined :items="statusItems" v-model="ticket_status" label="Ticket Status"></v-select>
		<v-select outlined v-show="false" :items="statusItems" v-model="work_status" label="Work Status"></v-select>
		<!-- Requirements -->
		<p>Requirements&emsp;<v-btn outlined small @click="requirements.push('')">Add</v-btn> </p>
		<v-text-field solo dense :placeholder="`requirement ${reqi+1}`" v-for="(req,reqi) in requirements" :key="reqi" v-model="requirements[reqi]" append-icon="mdi-delete" @click:append="requirements.splice(reqi,1)"></v-text-field>
		<!-- Remarks -->
		<v-textarea outlined rows="3" v-model="remarks" label="Remarks"></v-textarea>
		</v-card-text>
		<v-card-actions>
			<v-btn @click="updateService()" color="primary" class="spl-btn mx-auto" large :loading="loading" type="submit" block> Save Service</v-btn>
		</v-card-actions>
	</v-card>
</v-layout>
</template>

<script>
export default {
	layout:'appDesktop',
	data:()=>({
		//System
		loading:false,
		statusItems:[
			'Ticket Raised',
			'Assigned',
			'In Progress',
			'Validation',
			'Closed'
		],
		//Backend
		name:'',
		expected_date:'',
		service_type:null,
		ticket_status:'',
		assigned_to:null,
		assigned_name: '',
		customer_id:null,
		customer_name: '',
		product_id:null,
		product_name: '',
		work_status:'',
		remarks:'',
		requirements:[],
		initial_inspection:'',
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
				this.work_status=r.data.work_status;
				this.remarks=r.data.remarks;
				this.requirements=r.data.requirements;
				this.initial_inspection=r.data.initial_inspection;
				this.ticket_status=r.data.ticket_status;
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
				work_status: this.work_status,
				remarks: this.remarks,
				requirements: this.requirements,
				initial_inspection: this.initial_inspection,
				ticket_status: this.ticket_status
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
.statusBar{
	border:1px solid var(--v-primary-base);
}
</style>