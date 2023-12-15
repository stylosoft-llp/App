<template>
  <v-layout column align-center justify-center fill-height>
    <v-card max-width="600" width="100%">
      <v-card-text>
        <div class="d-flex flex-row my-2">
          <v-btn to="/app/products" outlined
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <h2>Product Editor</h2>
        </div>
        <v-text-field outlined v-model="product.name" label="Product Name" />
        <v-text-field
          outlined
          v-model="product.s_desc"
          label="Short Description"
        />
        <v-select
          outlined
          v-model="product.status"
          :items="['Active', 'Inactive']"
          label="Product Status"
        />
        <v-textarea
          :rows="3"
          outlined
          v-model="product.l_desc"
          label="Long Description"
        />
        <v-row>
          <v-checkbox
            class="mx-4"
            :true-value="1"
            :false-value="0"
            v-model="product.installation"
            label="Installation"
          />
          <v-checkbox
            class="mx-4"
            :true-value="1"
            :false-value="0"
            v-model="product.replacement"
            label="Replacement"
          />
        </v-row>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="updateProduct()"
          color="primary"
          class="spl-btn mx-auto"
          large
          :loading="loading"
          type="submit"
          block
          >Save Product</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  layout: "appDesktop",
  data: () => ({
    product: {
      name: "",
      s_desc: "",
      l_desc: "",
      status: "Active",
      installation: 0,
      replacement: 0,
      status: "",
    },
    loading: false,
  }),
  mounted() {
    if (this.$route.query.id) {
      this.fetchProduct();
    }
  },
  methods: {
    fetchProduct() {
      this.$axios.get("auth/products/" + this.$route.query.id).then((res) => {
        this.product = res.data;
      });
    },
    updateProduct() {
      let id = this.$route.query.id || null;
      this.$axios.put("auth/products/" + id, this.product).then(
        (res) => {
          this.$toast.success("Product Saved", { icon: "mdi-check-circle" });
          if (!this.$route.query.id) {
            this.$router.replace({
              query: { ...this.$route.query, id: res.data.id },
            });
          }
        },
        (err) => {}
      );
    },
  },
};
</script>

<style>
</style>