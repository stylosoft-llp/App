<template>
  <v-layout column align-center justify-center fill-height>
    <v-card max-width="600" width="100%">
      <v-card-text>
        <div class="d-flex flex-row my-2">
          <h2 class="black--text">Raise Ticket</h2>
        </div>
        <user-assign
          :id="customer_id"
          :name="customer_name"
          @assignTo="assignCustomer($event)"
          permissions="Customer"
					:allowNew="false"
          title="Customer"
        />
        <zoneAssign
          v-if="customer_id"
          :id="customer_id"
          title="Zone"
          ref="zoneAssign"
          v-model="zone"
          />
        <v-text-field outlined dense v-model="name" label="Subject" />
        <!-- Assign Product -->
        <productAssign
          :id="product_id"
          :name="product_name"
          :addNew="false"
          title="Product"
          @assignTo="(e)=>{e&&(this.product_id=e.id,this.product_name=e.name)}"
        />
        <v-combobox
          outlined
          :items="['New Installation','Old Installation','Replacement','Repair','Delivery']"
          v-model="type"
          label="Service Type"
        />
        <v-select
          outlined
          :items="serviceForms"
          v-model="service_type"
          label="Service Form"
          prepend-inner-icon="mdi-form-select"
        ></v-select>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="updateService()"
          color="primary"
          class="spl-btn mx-auto"
          large
          :loading="loading"
          type="submit"
          block
        >Save Service</v-btn>
      </v-card-actions>
    </v-card>
    <v-dialog></v-dialog>
  </v-layout>
</template>

<script>
import ZoneAssign from '../../components/app/zoneAssign.vue';
export default {
	layout:'userDesktop',
	data:()=>({
		name:'',
    type:null,
		service_type:null,
		loading:false,
		product_id:null,
		product_name: '',
		customer_id:"",
		customer_name:"",
		zone:{},
    serviceForms:[
      {text:'1. Installation',value:'Installation'},
      {text:'2. Replacement',value:'Replacement'},
      {text:'3. Repair',value:'Repair'}
    ]
	}),
	components:{
		userAssign:()=>import('~/components/app/userAssign.vue'),
		productAssign:()=>import('~/components/app/productAssign.vue'),
ZoneAssign,
	},
	mounted(){
	},
	methods:{
		assignProduct(e){
			if(e){
				this.product_id=e.id;
				this.product_name=e.name;
			}
		},
		assignCustomer(e){
				this.customer_id=e.id;
				this.customer_name=e.name
		},
		updateService(){
			let id = this.$route.query.id || null;
			this.$axios.post('auth/tickets',{
				name:this.name,
				service_type: this.service_type,
				type: this.type,
				status: this.status,
				product_id: this.product_id,
				customer_id: this.customer_id,
				zone:this.zone
			})
			.then((res)=>{
			this.$toast.success("Ticket Saved", { icon: "mdi-check-circle" });
				this.$router.push("/user/#");
			},(err)=>{
				this.$toast.error("An Error Occured While Saving",{icon:"mdi-alert"})
			})
		}
	}
}	
</script>

<style>
</style>