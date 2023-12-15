<template>
	  <v-layout column container align-center justify-center fill-height>
    <v-card max-width="600" width="100%">
      <v-card-text >
        <div class="d-flex flex-row my-2">
          <v-btn color="primary" to="/superadmin/packages" outlined
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <h2 class="black--text">Product Editor</h2>
        </div>
        <v-text-field outlined v-model="pack.name" label="Package Name" />
        <v-text-field outlined v-model="pack.s_desc" label="Package Description" />
        <v-text-field outlined v-model="pack.reg_price" label="Reg Price" />
        <v-text-field outlined v-model="pack.sale_price" label="Sale Price" />
        <v-text-field outlined v-model="pack.admins" label="Admins Allowed" />
        <v-text-field outlined v-model="pack.subadmins" label="Sub Admins Allowed" />
        <v-text-field outlined v-model="pack.engineers" label="Users Allowed" />
        <v-select
          outlined
          v-model="pack.frequency"
          :items="['Monthly', 'Yearly']"
          label="Frequency"
        />
        <v-select
          outlined
          v-model="pack.status"
          item-text="name"
          item-value="id"
          :items="[{name:'Active',id:1}, {name:'Inactive',id:0}]"
          label="Product Status"
        />
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="updatePackage()"
          color="primary"
          class="spl-btn mx-auto"
          large
          :loading="loading"
          type="submit"
          block
          >Save Package</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  layout: "superDesktop",
  data: () => ({
    pack: {
      id: "",
      name: "",
      s_desc:"",
      reg_price: "",
      sale_price: "",
      admin: "",
      sub_admin: "",
      users: "",
      frequency: "",
      status: "",
    },
    loading: false,
  }),
  mounted() {
    this.fetchPackage();
  },
  methods:{
    fetchPackage(){
      this.$axios.get("/super/packages/"+this.$route.params.id).then((res) => {
        this.pack = res.data;
      });
    },
    updatePackage(){
      this.loading = true;
      this.$axios.put("/super/packages/"+this.$route.params.id, this.pack).then((res) => {
        this.loading = false;
        this.$toast.success("Saved");
        this.$router.push("/superadmin/packages");
      });
    }
  },
}
</script>

<style>

</style>