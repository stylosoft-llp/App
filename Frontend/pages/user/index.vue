<template>
  <v-layout column>
    <v-container>
  <div class="my-2 d-flex flex-row align-start justify-center">
    <v-text-field label="Search Service"
    append-icon="mdi-magnify"
    hint="Search By Tracking No, Name or Phone"
    @keydown.enter="fetchServices()"
    outlined
    class="mx-1"
    dense
    v-model="search_keywords"
    >
    </v-text-field>
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
    <v-btn @click="fetchServices()" class="mx-1" color="accent">
      <v-icon>mdi-magnify</v-icon>
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
      :headers="serviceHeaders"
      :items="leads"
      :itemsPerPage="per_page"
      :page="current_page"
      :server-items-length="total"
      :loading="loading"
      class="elevation-1"
      @update:page="updatePage($event)"
    >
          <!-- eslint-disable-next-line -->
      <template v-slot:item.status="{ item }">
				<td class="text-center" style="white-space:nowrap">
        <span class="font-weight-bold" :class="
				`${statusColors[item.status]}--text`">{{ item.status }}</span>
				</td>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.expected_date="{item}">
        <td style="white-space:nowrap">
          {{item.expected_date?$luxon(item.expected_date):'NA'}}
				</td>
      </template>
                <!-- eslint-disable-next-line -->
      <template v-slot:item.ticket_status="{ item }">
				<td class="text-center" style="white-space:nowrap">
        <v-chip outlined label color="accent" class="font-weight-medium">{{ item.ticket_status }}</v-chip>
				</td>
      </template>
          <!-- eslint-disable-next-line -->
      <template v-slot:item.work_status="{ item }">
				<td class="text-center" style="white-space:nowrap">
        <v-chip outlined label color="accent" class="font-weight-medium">{{ item.work_status }}</v-chip>
				</td>
      </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.created_at="{item}">
          <td style="white-space:nowrap">{{item.created_at?$luxon(item.created_at,{output:'med'}):'NA'}}</td>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.form="{item}">
          <td style="white-space:nowrap" class="text-center">
            <v-btn v-if="item.form" color="primary" small :to="'/user/tasks/editor?id='+item.id">{{item.service_type}}</v-btn>
            <v-chip outlined label v-else>
              {{item.service_type}}
            </v-chip>
          </td>
        </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.serviced_on="{item}">
        <td style="white-space:nowrap">
          {{item.serviced_on?$luxon(item.serviced_on):'NA'}}
				</td>
      </template>
      <!-- Actions Editable -->
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <div>
        <v-btn :to="'/user/tasks/editor?id='+item.id" color="blue" outlined small>
        <v-icon left> mdi-pencil-box-multiple </v-icon> Fill
        </v-btn>
        </div>
      </template>
    </v-data-table>
    <v-btn small v-show="!$auth.user.present" @click="markPresent()" color="primary" class="my-1">Mark Present</v-btn>
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
export default {
  /* Copyright (C) Spotverge | All Rights Reserved!*/
  layout: "userDesktop",
  data: () => ({
    serviceHeaders:[
      {text:'Ticket #', value:'id'},
      {text:'Client', value:'customer.name'},
      {text:'Client Company', value:'customer.user_detail.company_name'},
      {text:'Product', value:'product.name'},
      {text:'E-Mail', value:'customer.email'},
      {text:'Address', value:'customer.user_detail.address_1'},
      {text:'Address L2', value:'customer.user_detail.address_2'},
      {text:'City', value:'customer.user_detail.city'},
      {text:'Mobile', value:'customer.phone'},
      {text:'Service Type', value:'type'},
      {text:'Payment Charges', value:''},
      {text:'Payment Mode', value:''},
      {text:'Ticket Status', value:'ticket_status'},
      {text:'Raised Date', value:'created_at'},
//      {text:'Form', value:'form'},
      {text:'Actions', value:'actions'}
    ],
    date:[],
    leadFile:null,
    datemenu:false,
    tableSelected:[],
    leads: [],
    total:null,
    current_page:1,
    loading:false,
    per_page:100,
    editedIndex:null,
    editedItem:{},
    closeDialog:0,
    search_keywords:"",
    search_status:"",
    formNames: {
      "Installation":"Installation",
      "Replacement":"Replacement/Repair",
      "Repair":"Delivery"
    }
  }),
  created() {
    this.fetchServices();
  },
  mounted() {
    //if (!this.$auth.loggedIn){this.$router.push('/admin/login')}
  },
  methods: {
    updatePage(e){
      this.current_page=e;this.fetchServices();
    },

    async fetchServices() {
      this.loading=true;
      await this.$axios.get('auth/tasks',{params:{
        page: this.current_page,
        per_page: this.per_page,
        search: this.search_keywords,
        status:this.search_status,
        type: 'pending'
        //date: this.date
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
    async markPresent() {
      this.loading=true;
      await this.$axios.post('auth/present',).then(
        (res) => {
          this.$toast.success("You're marked as present");
        },
        (err) => {}
      );
    },
  }, //METHODS
};
</script>
<style lang="scss">
.v-data-footer__select{visibility:hidden;}
</style>