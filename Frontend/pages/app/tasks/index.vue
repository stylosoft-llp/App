<template>
  <v-layout column class="pa-4">
      <v-row>
        <v-col v-for="(an,ani) in analytics" :key="ani">
          <v-btn
            @click="filterServices(ani)"
            depressed
            block
            :color="colors[ani]"
          >{{ani.toUpperCase()}}&emsp;{{ an }}</v-btn>
        </v-col>
      </v-row>
      <div class="my-2 d-flex flex-row align-start justify-center">
        <v-text-field
          label="Search Service"
          append-icon="mdi-magnify"
          hint="Search By Tracking No, Name or Phone"
          @keydown.enter="fetchServices()"
          outlined
          class="mx-1"
          dense
          v-model="search_keywords"
        ></v-text-field>
        <!--       <v-select
    outlined
    class="mx-1"
    dense
    :items="$store.state.statuses"
    v-model="search_status"
    label="Search By Status"
  >
        </v-select>-->
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
        </v-menu>-->
        <v-btn @click="fetchServices()" class="mx-1" color="accent">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn to="/app/services/editor" color="primary" class="mx-1">
          <v-icon left>mdi-plus-box-multiple</v-icon>Add Service
        </v-btn>
      </div>
      <v-data-table
        disable-sort
        :show-select="false"
        :footer-props="{
        'disable-items-per-page': true,
      }"
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
        <template v-slot:item.sn="{ index }">{{ current_page*(index + 1) }}</template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.ticket_status="{ item }">
          <td class="text-center" style="white-space:nowrap">
            <v-chip small label color="accent" class="font-weight-medium">{{ item.ticket_status }}</v-chip>
          </td>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.work_status="{ item }">
          <td class="text-center" style="white-space:nowrap">
            <v-chip small label color="accent" class="font-weight-medium">{{ item.work_status }}</v-chip>
          </td>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.form="{item}">
          <td v-if="item.form" style="white-space:nowrap">
            <v-btn color="primary" small :to="`/app/services/forms?id=${item.id}`">View</v-btn>
          </td>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.expected_date="{item}">
          <td style="white-space:nowrap">{{item.expected_date?$luxon(item.expected_date):'NA'}}</td>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.time_location="{item}">
          <td
            style="white-space:nowrap"
          >{{(item.time_location&&item.time_location.end&&item.time_location.end.time)?$luxon(item.time_location.end.time):'NA'}}</td>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.serviced_on="{item}">
          <td style="white-space:nowrap">{{item.serviced_on?$luxon(item.serviced_on):'NA'}}</td>
        </template>
        <!-- eslint-disable-next-line -->
        <template v-slot:item.created_at="{item}">
          <td style="white-space:nowrap">{{item.created_at?$luxon(item.created_at):'NA'}}</td>
        </template>
        <!-- Actions Editable -->
        <!-- eslint-disable-next-line -->
        <template v-slot:item.actions="{ item }">
          <div class="d-flex flex-row">
            <v-btn :to="'/app/services/editor?id='+item.id" color="blue" icon small>
              <v-icon>mdi-pencil-box-multiple</v-icon>
            </v-btn>
            <v-btn @click="deleteItem(item.id)" color="error" icon small>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </div>
        </template>
      </v-data-table>
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
    </v-file-input>-->
  </v-layout>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  layout: "appDesktop",
  data: () => ({
    serviceHeaders: [
      { text: "S No", value: "sn" },
      { text: "Ticket #", value: "id" },
      { text: "Customer Name", value: "customer.name" },
      { text: "Customer E-Mail", value: "customer.email" },
      { text: "Product", value: "product.name" },
      { text: "Expected Date", value: "expected_date" },
      { text: "Execution Date", value: "time_location" },
      { text: "Created At", value: "created_at" },
      { text: "Service Type", value: "type" },
      { text: "Form Filled", value: "form" },
      { text: "Ticket Status", value: "ticket_status" },
      { text: "Employee Name", value: "assignee.name" },
      /*       {text:'Assigned To', value:'assignee.id'}, */
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
    analytics: [],
    type: "",
    colors: {
      installation: "#a2cffe",
      replacement: "#edf1fe",
      repair: "#a6e7ff",
      completed: "#fae5bf",
    },
  }),
  beforeMount() {
    this.fetchServices();
  },
  mounted() {
    this.countServices();
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
            this.fetchServices();
          },
          (err) => {
            if (err.response.status === 406) {
              alert("Upload Failed! Please recheck CSV File & try again.");
            }
          }
        );
    },
    updatePage(e) {
      this.current_page = e;
      this.fetchServices();
    },

    async filterServices(v) {
      this.type = v;
      this.fetchServices();
    },

    async fetchServices() {
      this.loading = true;
      let id = this.$auth.user.id;
      await this.$axios
        .get("auth/services", {
          params: {
            page: this.current_page,
            per_page: this.per_page,
            search: this.search_keywords,
            status: this.search_status,
            assigned_to: id,
            type: this.type,
            notClosed: this.type!='closed'?1:0
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
    countServices() {
      this.$axios.get("/auth/analytics/service-count").then(
        (res) => {
          this.analytics = res.data;
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
          this.fetchServices();
        },
        (err) => {
          this.loading = false;
        }
      );
    },
    async deleteItem(e) {
      confirm("delete?");
      this.loading = true;
      this.$axios.delete(`auth/services/${e}`).then(
        (res) => {
          this.fetchServices();
        },
        (err) => {
          this.loading = false;
        }
      );
    },
  }, //METHODS
};
</script>
<style lang="scss">
.v-data-footer__select {
  visibility: hidden;
}
</style>