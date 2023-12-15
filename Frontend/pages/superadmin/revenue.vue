<template>
  <v-layout column container>
		<div class="d-flex pa-2">
			<v-text-field :loading="loading" @change="getLicenses()" outlined label="Filter By Month" v-model="month" type="month"/>
			<v-spacer></v-spacer>
			<h2>Total: {{amount}}</h2>
		</div>
    <v-card>
    <p v-if="loading" class="pa-4 text-center">Loading</p>
    <v-simple-table v-else grow fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th>License Id</th>
            <th>License Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(l, key) in licenses" :key="key">
            <td>
              <div>
                {{ l.id }}
              </div>
            </td>
            <td class="py-1 body-1">
                {{ l.name }}
            </td>
            <td class="py-1 body-1">
                {{ l.created_at ? $luxon(l.created_at): '' }}
              </td>
              <td>
              {{ l.package && l.package.sale_price }}
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-card>
    <v-dialog max-width="600" v-model="userToggle" v-if="licenses[focus]">
      <v-card v-if="licenses[focus]">
        <v-container>
          <v-card-title>User Details</v-card-title>
              <v-list two-line v-if="licenses[focus]">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>User Name:</v-list-item-subtitle>
                    <v-list-item-title>{{
                      licenses[focus].name
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>User E-Mail:</v-list-item-subtitle>
                    <v-list-item-title>{{
                      licenses[focus].email
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>User Phone:</v-list-item-subtitle>
                    <v-list-item-title>{{
                      licenses[focus].phone
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>Enquiry Date:</v-list-item-subtitle>
                    <v-list-item-title>{{
                      licenses[focus].created_at ? $luxon(licenses[focus].created_at) : ''
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
							<v-divider></v-divider>
							<p class="body-1 ma-2">Message: {{licenses[focus].message}}</p>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  layout: "superDesktop",
  data: () => ({
    month:"",
    amount:"",
    licenses: [],
    status: "",
    changingStatus: false,
    loading: false,
  }),
  mounted() {
    this.getLicenses();
  },
  methods: {
    getLicenses() {
      this.loading = true;
      this.$axios.get(`/super/licenses`,{params:{date:this.month}}).then((res) => {
        this.licenses = res.data.licenses;
        this.amount = res.data.sum;
        this.loading = false;
      });
    },
  },
};
</script>

<style>
</style>