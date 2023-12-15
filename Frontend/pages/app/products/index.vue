<template>
  <v-layout column class="pa-2">
      <div class="my-2 d-flex flex-row align-start justify-center">
        <v-text-field
          label="Search Product"
          append-icon="mdi-magnify"
          hint="Search By Tracking No, Name or Phone"
          @keydown.enter="fetchProducts()"
          outlined
          class="mx-1"
          dense
          v-model="search_keywords"
        >
        </v-text-field>
        <v-combobox outlined v-model="category" dense hide-details :search-input.sync="cat_search" :items="cats" label="Product Category" />
        <!--       <v-select
    outlined
    class="mx-1"
    dense
    :items="$store.state.statuses"
    v-model="search_status"
    label="Search By Status"
  >
  </v-select> -->
        <!--                 <v-menu
          ref="datemenu"
          v-model="datemenu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
            outlined
            dense
            clearable
            multiple
            chips small-chips
              v-model="date"
              label="Date (read only text field)"
              hint="Choose date(s) YY-MM-DD"
              persistent-hint
              prepend-inner-icon="mdi-calendar"
              readonly
              @focus="$emit('on',true)"
              v-bind="attrs"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            range
          ></v-date-picker>
        </v-menu> -->
        <v-btn @click="fetchProducts()" class="mx-1" color="accent">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn to="/app/products/editor" color="primary" class="mx-1">
          <v-icon left>mdi-plus-box-multiple</v-icon> Add Product
        </v-btn>
      </div>
      <v-data-table
        :show-select="false"
        :footer-props="{
          'disable-items-per-page': true,
        }"
        disable-sort
        v-model="tableSelected"
        @input="select($event)"
        :headers="productHeaders"
        :items="leads"
        :itemsPerPage="per_page"
        :page="current_page"
        :server-items-length="total"
        :loading="loading"
        class="elevation-1"
        @update:page="updatePage($event)"
      >
        <!-- eslint-disable-next-line -->
        <template v-slot:item.replacement="{ item }">
          <td style="white-space: nowrap">
            <v-icon>{{ item.replacement ? "mdi-check" : "mdi-close" }}</v-icon>
          </td>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.installation="{ item }">
          <td style="white-space: nowrap">
            <v-icon>{{ item.installation ? "mdi-check" : "mdi-close" }}</v-icon>
          </td>
        </template>
        <!-- Actions Editable -->
        <!-- eslint-disable-next-line -->
        <template v-slot:item.actions="{ item }">
          <div class="row">
            <v-btn
              :to="'/app/products/editor?id=' + item.id"
              color="blue"
              icon
              small
            >
              <v-icon> mdi-pencil-box-multiple </v-icon>
            </v-btn>
            <v-btn @click="deleteItem(item.id)" color="error" icon small>
              <v-icon> mdi-delete </v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
      <div class="my-1">
        <input
          type="file"
          hidden
          @input="csvProducts($event)"
          ref="fileInput"
          label="Upload CSV"
        />
        <v-btn @click="$refs['fileInput'].click()" color="primary">
          <v-icon left>mdi-file-table</v-icon> Import</v-btn
        >
        <v-btn @click="exportCsv()" color="primary">
          <v-icon left>mdi-file-table</v-icon> Export</v-btn
        >
        <v-btn to="/app/products/categories" color="primary">Categories</v-btn>
      </div>
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  /* Copyright (C) Spotverge | All Rights Reserved!*/
  layout: "appDesktop",
  data: () => ({
    productHeaders: [
      { text: "Product Code", value: "slug" },
      { text: "Product Name", value: "name" },
      { text: "Category", value: "category" },
      { text: "Status", value: "status" },
      { text: "Actions", value: "actions" },
    ],
    date: [],
    leadFile: null,
    datemenu: false,
    tableSelected: [],
    leads: [],
    total: null,
    current_page: 1,
    loading: false,
    per_page: 100,
    editedIndex: null,
    editedItem: {},
    closeDialog: 0,
    search_keywords: "",
    search_status: "",
    leadFile: null,
    cat_search:"",
    cats:[],
    category:""
  }),
  created() {
    this.fetchProducts();
  },
  mounted() {
    this.getCategories()
    //if (!this.$auth.loggedIn){this.$router.push('/admin/login')}
  },
  watch:{
    cat_search(val){val ? val.length>=3 && this.getCategories(): this.getCategories()}
  },
  methods: {
    getCategories(){
			this.$axios.get('auth/categories/list?keyword='+(this.cat_search||'')).then(res=>
				this.cats = res.data
			)
			.catch(error=>{
				this.$toast.error("Failure Loading Categories")
			})
		},
    csvProducts(e) {
      let formdata = new FormData();
      formdata.append("csv", e.target.files[0]);
      this.$axios
        .post("admin/products/csv", formdata, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then(
          (res) => {
            this.fetchProducts();
            alert("Upload Successful. Fetching Products...");
            this.$refs['fileInput'].value = "";
          },
          (err) => {
            if (err.response.status === 406) {
              alert("Upload Failed! Please recheck CSV File & try again.");
            }
            this.$refs['fileInput'].value = "";
          }
        );
    },
    updatePage(e) {
      this.current_page = e;
      this.fetchProducts();
    },

    async fetchProducts() {
      this.loading = true;
      await this.$axios
        .get("auth/products", {
          params: {
            page: this.current_page,
            per_page: this.per_page,
            search: this.search_keywords,
            status: this.search_status,
            category: this.category
            //date: this.date
          },
        })
        .then(
          (res) => {
            this.leads = res.data.data;
            this.total = res.data.total;
            this.current_page = res.data.current_page;
            this.per_page = +res.data.per_page;
            this.loading = false;
          },
          (err) => {}
        );
    },
    async save(e) {
      this.loading = true;
      let editedItem = e;
      await this.$axios.put(`auth/leads/${editedItem.id}`, editedItem).then(
        (res) => {
          this.closeDialog += 1;
          this.fetchProducts();
        },
        (err) => {
          this.loading = false;
        }
      );
    },
    async deleteItem(e) {
      if (!window.confirm("Are you sure to this product?")) {
        return;
      }
      this.loading = true;
      this.$axios.delete(`auth/products/${e}`).then(
        (res) => {
          this.fetchProducts();
        },
        (err) => {
          this.loading = false;
        }
      );
    },
    async exportCsv(e){
      this.loading = true;
      await this.$axios.get(`admin/products/exportcsv`).then(
        (response) => {
          let blob = new Blob([response.data], { type: "text/csv" });
          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.target = "_blank";
          link.download = 'Products Export';
          link.click();
          this.loading=false;
        },(err)=>{})
    }
  }, //METHODS
};
</script>
<style lang="scss">
.v-data-footer__select {
  visibility: hidden;
}
</style>