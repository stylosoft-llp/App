<template>
  <v-layout column>
    <v-container>
<!--       <v-card-title>
        Assigned To You
        <v-spacer></v-spacer>
        <v-btn class="spl-btn" rounded to="/app/add" color="primary">
          <v-icon left>mdi-plus</v-icon> Add Lead
        </v-btn>
      </v-card-title> -->
  <div class="my-2 d-flex flex-row align-start justify-center">
    <v-text-field label="Search Shipment"
    append-icon="mdi-magnify"
    hint="Search By Tracking No, Name or Phone"
    @keydown.enter="fetchLeads()"
    outlined
    class="mx-1"
    dense
    v-model="search_keywords"
    >
    </v-text-field>
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
    <v-btn @click="fetchLeads()" class="mx-1" color="secondary">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-btn to="/admin/editor" color="primary" class="mx-1">
    <v-icon left>mdi-map-plus</v-icon> Create
    </v-btn>
  </div>
  <lead-manager 
    :leads="leads"
    :leadsHeaders="leadsHeaders"
    :total="total"
    :current_page="current_page"
    :per_page="per_page"
    :closeDialog="closeDialog"
    :loading="loading"
    :admin="true"
    title="New Shipments"
    @assign="assignLead($event)"
    @changeStatuses="changeStatuses($event)"
    @deleteMultiple="deleteMultiple($event)"
    @page-changed="updatePage($event)"
    @deleteItem="deleteItem($event)"
    @update="save($event)"
   />
    </v-container>
<!-- <v-file-input
        dense
        class="ma-1"
        hide-details
        outlined
        prepend-icon=""
        prepend-inner-icon="mdi-file-table"
        v-model="leadFile"
        label="Upload CSV"
      >
        <template v-slot:append>
          <v-btn color="primary" small @click="csvLead()">
            <v-icon left>mdi-swap-horizontal-variant</v-icon> Parse</v-btn
          >
        </template>
      </v-file-input> -->
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";
import leadManager from '../../components/Sections/Admin/leadManager.vue';
export default {
  components: { leadManager },
  /* Copyright (C) Spotverge | All Rights Reserved!*/
  layout: "adminDesktop",
  data: () => ({
    leadsHeaders:[
      {text:'FirstStar Id', value:'tracking_id'},
      {text:'Consigner Name', value:'consigner_name'},
      {text:'Consigner Phone', value:'consigner_phone1'},
      {text:'Consignee Name', value:'consignee_name'},
      {text:'Consignee Phone', value:'consignee_phone1'},
      {text:'Destination', value:'destination'},
      {text:'Status', value:'status'},
      {text:'Booked On', value:'booked_on'},
      {text:'Actions', value:'actions'}
    ],
    date:[],
    leadFile:null,
    datemenu:false,
    leads: [],
    total:null,
    current_page:1,
    loading:false,
    per_page:100,
    editedIndex:null,
    editedItem:{},
    closeDialog:0,
    search_keywords:"",
    search_status:"New"
  }),
  created() {
    this.fetchLeads();
  },
  mounted() {
    //if (!this.$auth.loggedIn){this.$router.push('/admin/login')}
  },
  methods: {
        csvLead() {
      let formdata = new FormData();
      formdata.append("csv", this.leadFile);
      this.$axios
        .post("auth/admin/leads/csv", formdata, {
          headers: { "content-type": "multipart/form-data" },
        })
        .then(
          (res) => {
            this.leadFile = null;
            formdata = null;
            this.fetchLeads();
          },
          (err) => {
            if (err.response.status === 406) {
              alert("Upload Failed! Please recheck CSV File & try again.");
            }
          }
        );
    },
    updatePage(e){
      this.current_page=e;this.fetchLeads();
    },

    async fetchLeads() {
      this.loading=true;
      await this.$axios.get('auth/admin/couriers',{params:{
        page: this.current_page,
        per_page: this.per_page,
        search: this.search_keywords,
        status:this.search_status,
        date: this.date
      }}
      ).then(
        (res) => {
          this.leads = res.data.data;
          this.total = res.data.total;
          this.current_page = res.data.current_page;
          this.per_page = +res.data.per_page;
          this.loading=false;
        },
        (err) => {}
      );
    },
    async save(e) {
        this.loading=true;
      let editedItem = e;
      await this.$axios.put(`auth/leads/${editedItem.id}`, editedItem)
      .then((res)=>{this.closeDialog+=1;this.fetchLeads();
      },(err)=>{
        this.loading=false;
      });
    },
    async deleteItem(e){
      this.loading=true;
      let selected = [];
      e.forEach(e => {
        selected.push(e.id);
      });
      this.$axios.delete(`auth/admin/couriers/${e}`,{
        ids: selected
      })
      .then((res)=>{this.fetchLeads();},(err)=>{
        this.loading=false;
      })
    },
    deleteMultiple(e){
      this.loading=true;
      let selected = [];
      e.forEach(e => {
        selected.push(e.id);
      });
      this.$axios.post(`auth/admin/couriers-delete`,{
        ids: selected
      }).then((res)=>{
        this.fetchLeads();
      },(err)=>{this.loading=false;})
    },
    changeStatuses(e){
      this.loading=true;
      let status = e.status;
      let selected = [];
      e.selected.forEach(e => {
        selected.push(e.id);
      });
      this.$axios.post(`auth/admin/couriers-status`,{
        ids:selected,
        status: status
      }).then((res)=>{
        this.fetchLeads();
      },(err)=>{
        this.loading=false;
      });
    }
  }, //METHODS
};
</script>
<style lang="scss">
.v-data-footer__select{visibility:hidden;}
</style>