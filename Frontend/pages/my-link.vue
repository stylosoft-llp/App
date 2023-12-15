<template>
  <div>
    <div style="width: 100%; margin: 20px">
      <div>Name: {{ name }}</div>
      <div>Company: {{ company }}</div>
      <div>Products:</div>
			<v-btn color="green" @click="fetchProducts()">Products</v-btn>
      <div v-for="(product, productIndex) in products" :key="productIndex">
        {{ product.name }} {{ product.id }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "Kiran",
      company: "Stylodesk",
      products: [],
    };
  },
  mounted() {
//		this.fetchProducts();
	},
  methods: {
    fetchProducts() {
      this.$axios.get("/auth/products").then((res) => {
        this.products = res.data.data;
      });
    },
  },
};
</script>
