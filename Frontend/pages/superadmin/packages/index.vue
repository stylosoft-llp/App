<template>
  <v-layout class="pa-4" justify-space-around>
    <v-card style="width:100%">
      <v-card-title>License Packages</v-card-title>
      <v-simple-table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Package Name</th>
            <th>Reg Price</th>
            <th>Sale Price</th>
            <th>Frequency</th>
            <th>Admins</th>
            <th>Sub Admins</th>
            <th>Users</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(pk,pki) in packages" :key="pki">
            <td>{{pk.id}}</td>
            <td>{{pk.name}}</td>
            <td>{{pk.reg_price}}</td>
            <td>{{pk.sale_price}}</td>
            <td>{{pk.frequency}}</td>
            <td>{{pk.admins}}</td>
            <td>{{pk.subadmins}}</td>
            <td>{{pk.engineers}}</td>
            <td>
              <v-btn :to="`/superadmin/packages/${pk.id}`" color="primary">Edit</v-btn>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  layout: "superDesktop",
	data:()=>({
		packages:[]
	}),
  mounted() {
    this.fetchPackages();
  },
  methods: {
    fetchPackages() {
      this.$axios.get("/super/packages").then((res) => {
        this.packages = res.data;
      });
    },
  },
};
</script>

<style>
</style>