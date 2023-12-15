<template>
  <v-layout column align-center justify-center fill-height>
    <v-card max-width="600" width="100%">
      <v-card-text>
        <div class="d-flex flex-row my-2">
          <v-btn color="primary" to="/app/products" outlined
            ><v-icon>mdi-arrow-left</v-icon></v-btn
          >
          <v-spacer></v-spacer>
          <h2 class="black--text">Product Editor</h2>
        </div>
        <v-text-field outlined v-model="product.name" label="Product Name" />
        <v-text-field outlined v-model="product.slug" label="Product Code" />
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
          <v-col>
            <v-checkbox
              class="mx-4"
              :true-value="1"
              :false-value="0"
              v-model="product.installation"
              label="Installation"
            />
            <div v-if="product.installation">
              <div v-if="product.installation_form">
                <v-btn
                  :to="`/app/products/form?type=installation&pid=${product.id}`"
                >
                  Edit Form</v-btn
                >
                <v-btn color="error">Delete</v-btn>
              </div>
              <div v-else>
                <v-btn
                  color="secondary"
                  @click="addForm('installation')"
                >
                  Add Form</v-btn
                >
              </div>
            </div>
          </v-col>
          <v-col>
            <v-checkbox
              class="mx-4"
              :true-value="1"
              :false-value="0"
              v-model="product.replacement"
              label="Replacement"
            />
            <div v-if="product.replacement">
              <div v-if="product.replacement_form">
                <v-btn
                  color="secondary"
                  @click="addForm('replacement')"
                >
                  Edit Form</v-btn
                >
                <v-btn color="error">Delete</v-btn>
              </div>
              <div v-else>
                <v-btn
                  color="secondary"
                  :to="`/app/products/form?type=installation&pid=${product.id}`"
                >
                  Add Form</v-btn
                >
              </div>
            </div>
          </v-col>
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
  components: { productForm: () => import("~/components/app/productForm.vue") },
  layout: "superDesktop",
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
    productForm: [],
  }),
  mounted() {
    if (this.$route.query.id) {
      this.fetchProduct();
    }
  },
  methods: {
    addField(e) {
      this.productForm &&
        this.productForm.push({
          field_name: e.field_name,
          field_type: e.field_type,
        });
    },
    fetchProduct() {
      this.$axios.get("auth/products/" + this.$route.query.id).then((res) => {
        this.product = res.data;
        this.productForm =
          res.data.form_template == null ? [] : res.data.form_template;
      });
    },
    updateProduct() {
      let id = this.$route.query.id || null;
      let product = this.product;
      product.form_template = this.productForm;
      this.$axios.put("auth/products/" + id, product).then(
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
    addForm(v){
      if(this.$route.query.id){
        this.$router.push(`/app/products/form?type=${v}&pid=${this.$route.query.id}`)
      } else {
        this.$toast.show('You Must Save Product First Before Adding Form');
      }
    }
  },
};
</script>

<style>
</style>