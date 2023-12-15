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
    <!-- search the based on filters -->
      <div class="my-2 d-flex flex-row align-start justify-center">
        <v-text-field
          label="Search Service"
          append-icon="mdi-magnify"
          hint="Search By Customer username or Company Name or Employee Name"
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
    :items="$store.state.status"
    v-model="search_status"
    label="Search By Status"
  >
        </v-select>-->
        
        
        <v-menu
  ref="dateRangeMenu"
  v-model="dateRangeMenu"
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
      v-model="dateRange"
      label="Date Range"
      persistent-hint
      prepend-inner-icon="mdi-calendar-range"
      readonly
      @focus="$emit('on', true)"
      v-bind="attrs"
      v-on="on"
    ></v-text-field>
  </template>
  <v-date-picker
    v-model="dateRange"
    no-title
    range
  ></v-date-picker>
</v-menu>
<v-btn @click="fetchServices()" class="mx-1" color="accent">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        
        <!-- <v-btn @click="fetchServices()" class="mx-1" color="accent">
          <v-icon>mdi-magnify</v-icon>
        </v-btn> -->
        <!-- we can add the service using below button -->
        <v-btn to="/app/services/editor" color="primary" class="mx-1">
          <v-icon left>mdi-plus-box-multiple</v-icon>Add Service
        </v-btn>
         <!-- Add a button to open the filter options dialog -->
    <v-btn @click="openFilterDialog" color="primary" class="mx-1">
      <v-icon left>mdi-filter</v-icon> Apply Filters
    </v-btn>

    <!-- Create a dialog for filter options -->
    <v-dialog v-model="filterDialog" max-width="600">
      <v-card>
        <v-card-title>Filter Options</v-card-title>
        <v-card-text>
          <!-- Generate filter options based on serviceHeaders -->
          <v-select
            v-for="(header, index) in serviceHeaders"
            :key="index"
            :items="getFilterOptions(header.value)"
            v-model="selectedFilterOptions[header.value]"
            :label="header.text"
          ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="applyFilters" color="primary">
            <v-icon left>mdi-check</v-icon> Apply
          </v-btn>
          <v-btn @click="closeFilterDialog" color="primary">
            <v-icon left>mdi-close</v-icon> Cancel
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
        <!-- <v-btn @click="exportCsv()" color="primary">
          <v-icon left>mdi-file-table</v-icon> Export</v-btn
        > -->
  
        <!-- select required fields to export the data -->

        <div>
    <v-btn @click="openFieldSelectionDialog" color="primary"><v-icon left>mdi-file-table</v-icon>Select Fields</v-btn>
    <v-dialog v-model="fieldSelectionDialog" max-width="600">
      <v-card>
        <v-card-title>Field Selection</v-card-title>
        <v-card-text>
          <div>
            <label>Select Required Fields to Export:</label>
            <v-checkbox
              v-model="selectAllFields"
              :label="'Select All'"
              @change="selectAllFieldsChanged"
            ></v-checkbox>
            <div v-for="(header, index) in serviceHeaders" :key="index">
              <v-checkbox
                v-model="selectedFields"
                :label="header.text"
                :value="header.value"
              ></v-checkbox>
            </div>
          </div>
        </v-card-text>
        <!-- export the data based on selected fields  -->
        <v-card-actions>
          <v-btn @click="exportCsv()" color="primary"><v-icon left>mdi-file-table</v-icon>Export</v-btn>
          <v-btn @click="closeFieldSelectionDialog" color="primary">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
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
          <td style="white-space:nowrap" class="text-center">
            <v-btn v-if="item.form" color="primary" small :to="`/app/services/forms?id=${item.id}`">{{item.service_type}}</v-btn>
            <v-chip outlined label v-else>
              {{item.service_type}}
            </v-chip>
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
          <td style="white-space:nowrap">{{item.created_at?$luxon(item.created_at,{output:'med'}):'NA'}}</td>
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
        <template v-slot:item.time_location.start.time="{item}">
          <td
            style="white-space:nowrap"
          >{{(item.time_location&&item.time_location.start&&item.time_location.start.time)?$luxon(item.time_location.start.time):'NA'}}</td>
        </template>
        <template v-slot:item.time_location.end.time="{item}">
          <td
            style="white-space:nowrap"
          >{{(item.time_location&&item.time_location.end&&item.time_location.end.time)?$luxon(item.time_location.end.time):'NA'}}</td>
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
     
      { text: "Customer #", value: "customer.id" },
      { text: "Customer Name", value: "customer.name" },
      { text: "Company Name", value: "customer.user_detail.company_name" },
      { text: "Address", value: "customer.user_detail.address_1" },
      { text: "Address L2", value: "customer.user_detail.address_2" },
      { text: "City", value: "customer.user_detail.city" },
      { text: "Customer E-Mail", value: "customer.email" },
      { text: "Product", value: "product.name" },
      { text: "Expected Date", value: "expected_date" },
      
      { text: "Created At", value: "created_at" },
      { text: "Service Type", value: "type" },
      { text: "Form Filled", value: "form" },
      { text: "Ticket Status", value: "ticket_status" },
      { text: "Employee Name", value: "assignee.name" },
      /* {text:'Assigned To', value:'assignee.id'}, */
      { text: "Actions", value: "actions" },
      { text: "Start Time", value: "time_location.start.time" },
  { text: "End Time", value: "time_location.end.time" },
    ],
    leads: [], // Your dataset
    date: [],
    dateRangeMenu: false,
  dateRange: [],
    filterDialog: false,
    selectedFilterOptions: {},
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
    search_keywords: localStorage.getItem("search_keywords") || "",
    formData: {},
    search_status: "",
    analytics: [],
    type: "",
    fieldSelectionDialog: false, // Dialog control
    selectedFields: [], // To store selected field values
    selectAllFields: false,
    colors: {
      installation: "#a2cffe",
      replacement: "#edf1fe",
      repair: "#a6e7ff",
      completed: "#fae5bf",
      rescheduled: "#e5bffa"
    },
    formNames: {
      "Installation":"Installation",
      "Replacement":"Replacement/Repair",
      "Repair":"Delivery"
    }
  }),
  beforeMount() {
    this.fetchServices();
  },
  mounted() {
    this.countServices();
    //if (!this.$auth.loggedIn){this.$router.push('/admin/login')}
  },
  methods: {
    openFilterDialog() {
      this.filterDialog = true; // Open the filter options dialog
    },
    closeFilterDialog() {
      this.filterDialog = false; // Close the filter options dialog
    },
    applyFilters() {
      // You can add your filter logic here
      // For example, you can call the fetchServices() function to apply filters
      this.serviceHeaders;
      this.fetchServices();
      this.filterDialog = false;

    },
    getFilterOptions(headerValue) {
      if (this.leads.length === 0) {
        return [];
      }
      const values = this.leads.map((lead) => lead[headerValue]);
      return Array.from(new Set(values)); // Extract unique values
    },
    
    openFieldSelectionDialog() {
      this.fieldSelectionDialog = true;
    },
    closeFieldSelectionDialog() {
      this.fieldSelectionDialog = false;
    },
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
       window.location.reload();
    },

    async filterServices(v) {
      this.type = v;
      this.fetchServices();
    },

    async fetchServices() {
      this.loading = true;
      await this.$axios
        .get("auth/services", {
          params: {
            page: this.current_page,
            per_page: this.per_page,
            search: this.search_keywords,
            status: this.search_status,
            type: this.type,
            notClosed: this.type!='closed'?1:0,
            date_start: this.dateRange[0], // Start date of the range
        date_end: this.dateRange[1],   // End date of the range
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
            localStorage.setItem("search_keywords", this.search_keywords);
            
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
      if(!window.confirm("Delete?")){
        return;
      }
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
    selectAllFieldsChanged() {
      if (this.selectAllFields) {
        // Select all fields
        this.selectedFields = this.serviceHeaders.map((header) => header.value);
      } else {
        // Deselect all fields
        this.selectedFields = [];
      }
    },
    // the exportcsv method stores the data gets exported in products export file
    async exportCsv(e){
      const selectedData = this.leads.map((lead) => {
        const selectedLead = {};
        this.selectedFields.forEach((field) => {
          selectedLead[field] = lead[field];
        });
        return selectedLead;
      });
      const csvData = this.convertToCsv(selectedData);
      this.loading = true;
      await this.$axios.get(`admin/services/exportcsv`, {
        params: {
          search: this.search_keywords, // Include the search query for export
          date_start: this.dateRange[0], // Start date of the range
        date_end: this.dateRange[1],   // End date of the range
        },
      }).then(
        (response) => {

          let blob = new Blob([response.data], { type: "text/csv" });
          let link = document.createElement("a");
          link.href = window.URL.createObjectURL(blob);
          link.target = "_blank";
          link.download = 'Products Export';
          link.click();
          this.loading=false;
          this.closeFieldSelectionDialog();
          window.location.reload();

        },(err)=>{})
    },
    convertToCsv(data) {
  // Check if the data array is empty
  if (data.length === 0) {
    return '';
  }

  // Extract the headers (assuming they are the keys of the first object)
  const headers = Object.keys(data[0]);

  // Create an array to hold the CSV lines
  const csv = [];

  // Add the headers as the first line of the CSV
  csv.push(headers.join(','));

  // Iterate over each data object
  data.forEach((row) => {
    // Extract values from the row object based on the headers
    const values = headers.map((header) => {
      // Ensure that values are properly formatted for CSV
      let value = row[header];

      // Handle special characters and ensure escaping
      if (typeof value === 'string') {
        value = `"${value.replace(/"/g, '""')}"`; // Double-quote and escape double quotes within the value
      }

      return value;
    });

    // Add the formatted row to the CSV
    csv.push(values.join(','));
  });

  // Join all lines with line breaks to create the complete CSV content
  return csv.join('\n');
}
    
  }, //METHODS
};
</script>
<style lang="scss">
.v-data-footer__select {
  visibility: hidden;
}
</style>