<template>
	  <v-layout align-center justify-center>
    <v-card class="elevation-6 my-6 rounded-lg" width="600">
      <h2 align="center" class="mt-2 primary--text font-weight-black">
        Create Your Company
      </h2>
      <!-- Tab-Item :: REGISTER -->
      <v-container>
        <!--  FORM -->
        <v-form
          ref="form"
          method="post"
					@submit="registerCompany()"
          :lazy-validation="true"
        >
          <!-- 🅰 FULL NAME -->
          <v-text-field
            outlined
            validate-on-blur
            dense
            v-model="company.name"
            :rules="[(v) => !!v || 'Company Name is Required']"
            label="Company Name *"
          ></v-text-field>
          <!-- ✉ Location -->
          <v-text-field
            outlined
            validate-on-blur
            dense
            v-model="company.address_1"
            label="Address Field 1 *"
          ></v-text-field>
          <v-text-field
            outlined
            validate-on-blur
            dense
            v-model="company.address_2"
            label="Address Field 1 *"
          ></v-text-field>
          <v-text-field
            outlined
            validate-on-blur
            dense
            v-model="company.phone"
            label="Phone *"
          ></v-text-field>
          <v-text-field
            outlined
            validate-on-blur
            dense
            v-model="company.city"
            label="City*"
          ></v-text-field>
          <v-text-field
            outlined
            validate-on-blur
            dense
            v-model="company.state"
            label="State *"
          ></v-text-field>
          <v-text-field
            outlined
            validate-on-blur
            dense
            v-model="company.country"
            label="Country *"
          ></v-text-field>
          <v-text-field
            outlined
            validate-on-blur
            dense
            v-model="company.pincode"
            label="Pin Code *"
          ></v-text-field>
          <!-- ❕ ACTION -->
          <v-btn color="primary" @click="registerCompany()" block :loading="loading"
            >Add Company</v-btn
          >
        </v-form>
        <!-- 📓 NOTES -->
        <p class="mt-1  body-2">
          By registering with us, you agree to our Terms & Conditions and
          Privacy Policy
        </p>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
export default {
	data:()=>({
		company:{
		},
    loading:false
	}),
	methods:{
		registerCompany(){
      this.loading=true
			this.$axios.post('auth/companies',this.company)
			.then((res)=>{
        this.$auth.fetchUser().then((res)=>{
        this.loading=false;
				this.$router.push('/app');
        });
			},(err)=>{
        if(err?.response?.status==409){
          this.$router.push('/app');
        }
      })
		}
	}
}
</script>

<style>

</style>