<template>
  <div>
    <v-data-table
      show-select
      :footer-props="{
        'disable-items-per-page': true,
      }"
      disable-sort
      v-model="tableSelected"
      @input="select($event)"
      :headers="leadsHeaders"
      :items="leads"
      :itemsPerPage="per_page"
      :page="current_page"
      :server-items-length="total"
      :loading="loading"
      class="elevation-1"
      @update:page="updatePage($event)"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>{{title}}</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <span class="d-flex flex-row align-center" v-if="selected.length">
            <v-btn
              color="black"
							@click="multipleDeleteConfirm(selected)"
              dark
              depressed
              class="mx-1"
            >
              <v-icon left>mdi-delete</v-icon> Delete
            </v-btn>
            <v-btn
              color="green"
              v-show="($nuxt.$route.path.match(/admin\/trash/i) !== null)"
							@click="$emit('restore', selected)"
              dark
              depressed
              class="mx-1"
            >
              <v-icon left>mdi-restore</v-icon> Restore
            </v-btn>
            <v-select
							class="mx-1"
              dense
							hide-details
              solo
              color="primary"
              :items="$store.state.statuses"
              @input="changeMultiStatus($event)"
              label="Change Status"
            ></v-select>
          </span>
        </v-toolbar>
      </template>
      <!-- Customized Columns -->
      <!-- eslint-disable-next-line -->
      <template v-slot:item.status="{ item }">
				<td class="text-center" style="white-space:nowrap">
        <span class="font-weight-bold" :class="
				`${statusColors[item.status]}--text`">{{ item.status }}</span>
				</td>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.replacement="{item}">
        <td style="white-space:nowrap">
        <v-icon>{{item.replacement ? 'mdi-check':'mdi-close' }}</v-icon>
				</td>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.installation="{item}">
        <td style="white-space:nowrap">
        <v-icon>{{item.installation ? 'mdi-check':'mdi-close' }}</v-icon>
				</td>
      </template>
      <!-- Actions Editable -->
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <div class="row">
        <v-btn :to="'/admin/editor?id='+item.id" color="blue" icon x-small>
        <v-icon small> mdi-pencil </v-icon>
        </v-btn>
        <v-btn @click="deleteConfirm(item.id)" color="black" icon x-small>
        <v-icon small>
          mdi-delete
        </v-icon>
        </v-btn>
        </div>
      </template>
    </v-data-table>
  </div>
</template>

<script>
export default {
  props: [
    "leads",
    "leadsHeaders",
    "total",
    "current_page",
    "per_page",
    "loading",
    "closeDialog",
    "admin",
    "title"
  ],
  data: () => ({
    leadFile:null,
    statusColors: {
      'New': "red",
      'Preparing': "deep-orange",
			'Dispatching': "orange",
			'Out for Delivery':"cyan",
      'Arriving':"teal",
      'Shipped':'green'
    },
    tableSelected:[],
    editedItem: {},
    editedIndex: null,
    editDialog: false,
    dialogDelete: false,
    options: false,
    selected: [],
    upload:null,
    sending: false,
    //Employees
    assignDialog:false,
    assignee:null,
    assignee_search:"",
    assignees:[],
    loadingAssignees:false,
  }),
  watch: {
    closeDialog() {
      this.close();
    },
    assignee_search(){
      this.searchAssignees();
    }
  },
  methods: {
    deleteItem() {
      this.dialogDelete = true;
    },
    editItem(item) {
      this.editedIndex = this.leads.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.editDialog = true;
    },
    updatePage(e) {
      this.$emit("page-changed", e);
    },
    deleteConfirm(id){
      if(window.confirm('Sure to Delete?')){
        this.$emit('deleteItem', [id])
      }
    },
    multipleDeleteConfirm(selected){
      if(window.confirm('Delete Selected Lead(s)?')){
      this.$emit('deleteMultiple',selected);
      }
    },
    changeMultiStatus(e){
      this.$emit('changeStatuses',{status:e,selected:this.selected});
      this.$nextTick(()=>{
        this.selected = [];
        this.tableSelected = [];
        this.assignee = "";
        })
    },
    close() {
      this.editDialog = false;
      this.assignDialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },
        uploadFile(fileid) {
          this.sending = true;
      var app = this;
      let formData = new FormData();
      formData.append("file", app.upload);
      formData.append("id", fileid);
      this.$axios
        .post("auth/file", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(
          (res) => {
            this.editedItem=res.data;
            window.alert('Upload Successful!');
            this.sending = false;
          },
          () => {
            this.sending = false;
            window.alert('ERROR: Upload Failed');
          }
        );
      //this.$router.push({ name: 'home' })
    },
    async save() {
      let editedItem = this.editedItem;
      this.$emit("update", editedItem);
      //await this.$axios.put(`auth/leads/${editedItem.id}`, editedItem)
      //.then((res)=>{this.close();this.fetchLeads();},(err)=>{});
    },
    select(e) {
      this.selected = e;
    },
  }, //METHODS
};
</script>

<style>
</style>