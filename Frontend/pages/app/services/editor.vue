<template>
  <v-layout column align-center justify-center fill-height>
    <v-card max-width="700" width="100%">
      <v-card-text>
        <div class="d-flex flex-row my-2">
          <v-btn small color="primary" to="/app/services" outlined>
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <h2 class="black--text">Service Editor <v-icon v-if="loading">mdi-hexagon mdi-spin</v-icon></h2>
        </div>
        <div class="statusBar px-1 my-2" style="max-width:100%;overflow-x:scroll">
          <div style="width:680px;overflow-x:scroll" class="ma-2 row align-center">
            <v-card
              class="col font-weight-bold text-center"
              :class="statusItems && statusItems.indexOf(work_status)>=sii ? 'primary white--text':'info'"
              flat
              tile
              v-for="(si,sii) in statusItems"
              :key="sii"
            >
              <div>{{si}}</div>
            </v-card>
          </div>
        </div>
        <!-- Assign ServiceMan -->
        <userAssign
          :id="assigned_to"
          :name="assigned_name"
          @assignTo="assignUser($event)"
          permissions="Employee"
        />
        <!-- Assign Customer -->
        <userAssign
          title="Customer"
          :id="customer_id"
          :name="customer_name"
          :customer_detail="customer_detail"
          @assignTo="assignCustomer($event)"
          permissions="Customer"
        />
      
        <zoneAssign
          v-if="customer_id"
          :id="customer_id"
          title="Zone"
          ref="zoneAssign"
          v-model="zone"
          />
        <!-- Assign Product -->
        <productAssign
          :id="product_id"
          :name="product_name"
          title="Product"
          @assignTo="(e)=>{this.product_id=e.id;this.product_name=e.name}"
        />
       
        Expected Date: {{expected_date?$luxon(expected_date):'Not Set'}}
        <v-text-field outlined v-model="initial_inspection" label="Initial Remarks" />
        <v-combobox
          outlined
          :items="['New Installation','Old Installation','Replacement','Repair','Delivery']"
          v-model="type"
          label="Service Type"
        />
        <v-select
          outlined
          :items="serviceForms"
          v-model="service_type"
          label="Service Form"
          prepend-inner-icon="mdi-form-select"
        ></v-select>
        <v-text-field
          filled
          readonly
          :disabled="role=='Subadmin'"
          :items="statusItems"
          v-model="ticket_status"
          label="Ticket Status"
        ></v-text-field>
        <v-select
          outlined
          v-show="false"
          :disabled="role=='Subadmin'"
          :items="statusItems"
          v-model="work_status"
          label="Work Status"
        ></v-select>
        <div>
          <v-btn @click="closeTicket()"  v-show="ticket_status=='Validation'||(time_location&&time_location.end)" color="indigo" dark :disabled="isButtonDisabled">Close Ticket</v-btn>
          <v-icon small >mdi-information-outline</v-icon> Marks Ticket as Closed
          <p></p>
          <v-btn @click="rescheduler=true" color="indigo" dark>Reschedule Ticket</v-btn>
        </div>
        <!-- Requirements -->
        <!-- 		<p>Requirements&emsp;<v-btn outlined small @click="requirements.push('')">Add</v-btn> </p>
        <v-text-field solo dense :placeholder="`requirement ${reqi+1}`" v-for="(req,reqi) in requirements" :key="reqi" v-model="requirements[reqi]" append-icon="mdi-delete" @click:append="requirements.splice(reqi,1)"></v-text-field>-->
        <!-- Remarks -->
        <!-- 		<v-textarea outlined rows="3" v-model="remarks" label="Additional Comments"></v-textarea> -->
      </v-card-text>
      <v-card-actions>
        <v-btn
          outlined
          v-if="form_id"
          :to="`/app/services/forms?id=${$route.query.id}`"
          color="primary"
        >View Form</v-btn>
        <v-btn outlined @click="viewHistory=true" v-if="$route.query.id" color="primary">View Activity</v-btn>
        <div>
    
    <v-list>
      <!-- Existing subtask display code -->

      <!-- Button to add a new subtask -->
      <v-btn @click="openSubtaskPopup">Add Subtask</v-btn>
    </v-list>

    <!-- Subtask Popup -->
    <v-dialog v-model="subtaskPopup" max-width="500">
      <v-card>
        <v-card-title>Add Subtask</v-card-title>
        <v-card-text>
          <!-- Form fields for subtask details -->
          <div class="statusBar px-1 my-2" style="max-width:100%;overflow-x:scroll">
          <div style="width:680px;overflow-x:scroll" class="ma-2 row align-center">
            <v-card
              class="col font-weight-bold text-center"
              :class="statusItems && statusItems.indexOf(newSubtask.work_status)>=sii ? 'primary white--text':'info'"
              flat
              tile
              v-for="(si,sii) in statusItems"
              :key="sii"
            >
              <div>{{si}}</div>
            </v-card>
          </div>
        </div>
        <userAssign
          :id="assigned_to"
          :name="assigned_name"
          @assignTo="assignUser($event)"
          permissions="Employee"
        />
          <!-- Assign Customer -->
          <userAssign
          title="Customer"
          :id="customer_id"
          :name="customer_name"
          :customer_detail="customer_detail"
          @assignTo="assignCustomer($event)"
          permissions="Customer"
        />
        <zoneAssign
          v-if="newSubtask.customer_id"
          :id="newSubtask.customer_id"
          title="Zone"
          ref="zoneAssign"
          v-model="newSubtask.zone"
          />
        <!-- Assign Product -->
        <productAssign
          :id="newSubtask.product_id"
          :name="newSubtask.product_name"
          title="Product"
          @assignTo="(e)=>{this.product_id=e.id;this.product_name=e.name}"
        />
       
        Expected Date: {{newSubtask.expected_date?$luxon(newSubtask.expected_date):'Not Set'}}
        <v-text-field outlined v-model="newSubtask.initial_inspection" label="Initial Remarks" />
        <v-combobox
          outlined
          :items="['New Installation','Old Installation','Replacement','Repair','Delivery']"
          v-model="newSubtask.type"
          label="Service Type"
        />
        <v-select
          outlined
          :items="newSubtask.serviceForms"
          v-model="newSubtask.service_type"
          label="Service Form"
          prepend-inner-icon="mdi-form-select"
        ></v-select>
        <v-text-field
          filled
          readonly
          :disabled="role=='Subadmin'"
          :items="statusItems"
          v-model="newSubtask.ticket_status"
          label="Ticket Status"
        ></v-text-field>
        <v-select
          outlined
          v-show="false"
          :disabled="role=='Subadmin'"
          :items="statusItems"
          v-model="newSubtask.work_status"
          label="Work Status"
        ></v-select>
          <!-- <v-text-field v-model="newSubtask.name" label="Name"></v-text-field>
          <v-text-field v-model="newSubtask.status" label="Status"></v-text-field> -->
          <!-- Add more fields as needed -->
        </v-card-text>
        <v-card-actions>
          <v-btn @click="updateService()" color="primary">Add Subtask</v-btn>
          <v-btn @click="closeSubtaskPopup" color="error">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
        <v-spacer></v-spacer>
        
        <v-btn
          @click="updateService()"
          color="primary"
          class="spl-btn mx-auto"
          large
          :loading="loading"
         
          type="submit"
        
        >Save Service</v-btn>
      </v-card-actions>
      <history
        v-if="$route.query.id && viewHistory"
        :service_id="$route.query.id"
        v-model="viewHistory"
      />
    </v-card>
    <v-dialog max-width="400" v-model="rescheduler">
      <v-card>
        <v-card-title>Reschedule Service</v-card-title>
        <v-card-text>
        Expected Date: {{expected_date?$luxon(expected_date):'Not Set'}}
        <v-text-field
          filled
          type="date"
          v-model="expected_date"
          @change="updateTicketStatus()"
          :label="product_id?'Reschedule':'Set Date'"
        />
        </v-card-text>
        <v-card-actions>
        <v-btn
          @click="updateService()"
          color="primary"
          class="spl-btn"
          large
          :loading="loading"
          type="submit"
        >Save</v-btn>
        <v-btn @click="rescheduler=false" outlined color="primary">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
import ZoneAssign from '../../../components/app/zoneAssign.vue';
export default {
  layout: "appDesktop",
  data: () => ({
    //System
    loading: false,
    viewHistory: false,
    rescheduler:false,
    isButtonDisabled: false,
    statusItems: [
      "Ticket Raised",
      "Assigned",
      "In Progress",
      "Rescheduled",
      "Validation",
      "Closed",
    ],
    subtaskPopup: false,
    newSubtask: {
      assigned_to: null,
      assigned_name: "",
      customer_id: null,
      customer_name: "",
      work_status: "",
      product_id: null,
      product_name: "",
      expected_date: "",
      service_type: null,
      zone:{},
      type: "",
      remarks: "",
      initial_inspection: "",
      form_id: null,
      time_location:null,
    serviceForms:[
      {text:'1. Installation',value:'Installation'},
      {text:'2. Replacement/Repair',value:'Replacement'},
      {text:'3. Delivery',value:'Repair'}
    ],
      name: '',
      status: 'Pending',
      
      // Add more fields as needed
    },
    //Backend
    expected_date: "",
    service_type: null,
    ticket_status: "",
    assigned_to: null,
    assigned_name: "",
    customer_id: null,
    customer_name: "",
    customer_detail: "",
    product_id: null,
    product_name: "",
    work_status: "",
    remarks: "",
    requirements: [],
    initial_inspection: "",
    form_id: null,
    type: "",
    zone:{},
    time_location:null,
    serviceForms:[
      {text:'1. Installation',value:'Installation'},
      {text:'2. Replacement/Repair',value:'Replacement'},
      {text:'3. Delivery',value:'Repair'}
    ]

  }),
  components: {
    userAssign: () => import("~/components/app/userAssign.vue"),
    productAssign: () => import("~/components/app/productAssign.vue"),
    history: () => import("~/components/app/history.vue"),
    ZoneAssign,
  },
  mounted() {
    if (this.$route.query.id) {
      this.fetchService();
    } else {
      this.ticket_status = 'Ticket Raised';
    }
  },
  computed: {
    role() {
      if (this.$auth.user?.role?.includes("super")) {
        return "super";
      } else {
        return this.$auth.user?.company?.pivot?.role || "";
      }
    },
    id() {
      return this.$route.query.id;
    }
  },
  watch:{
    id(){
      this.fetchService();
    }
  },
  methods: {
      // Method to open the subtask popup
      openSubtaskPopup() {
      this.subtaskPopup = true;
    },
    closeSubtaskPopup() {
      this.subtaskPopup = false;
      // Optionally, reset the newSubtask object
      this.newSubtask = {
        name: '',
        status: 'Pending',
        // Reset other fields as needed
      };
    },
    addSubtask() {
      // Validate subtask details if needed

      // Push the new subtask to the subtasks array
      this.subtasks.push({ ...this.newSubtask });

      // Close the subtask popup
      this.closeSubtaskPopup();
    },
    closeTicket(){
      if(window.confirm('Warning! You are marking ticket as "closed"! Do you want to continue?')){
        this.ticket_status = "closed";
        this.work_status = "closed";
        this.updateService();
      }
      
      this.isButtonDisabled = true;
      //window.history.back();
      this.$router.push('/app/services');
    },
    openServiceEditorForm() {
      // Use Vue Router to navigate to the ServiceEditor route.
      this.$router.push('/app/services/editor');
    },
    assignUser(e) {
      if (e) {
        this.assigned_to = e.id;
        this.assigned_name = `${e.name} ${e.user_detail?.company_name||''}`;
        if (this.ticket_status == "Ticket Raised") {
          this.ticket_status = "Assigned";
        }
      }
    },
    updateTicketStatus() {
      if (this.$route.query.id) {
        this.ticket_status = "Rescheduled";
      }
    },
    assignCustomer(e) {
      if (e) {
        this.customer_id = e.id;
        this.customer_name = e.name;
        this.customer_detail = e;
      }
      this.$refs['zoneAssign']?.searchZones();
    },
    assignProduct(e) {
      if (e) {
        this.product_id = e.id;
        this.product_name = e.name;
      }
    },
    fetchService() {
      this.loading=true;
      this.$axios.get("auth/services/" + this.$route.query.id).then((r) => {
        this.name = r.data.name;
        this.status = r.data.status;
        this.expected_date = r.data.expected_date;
        this.type = r.data.type;
        //service_type is service_form
        this.service_type = r.data.service_type;
        this.customer_id = r.data.customer?.id;
        this.customer_name = r.data.customer?.name;
        this.customer_detail = r.data.customer;
        this.assigned_to = r.data.assignee?.id;
        this.assigned_name = r.data.assignee?.name;
        this.product_id = r.data.product?.id;
        this.product_name = r.data.product?.name;
        this.work_status = r.data.work_status;
        this.remarks = r.data.remarks;
        this.requirements = r.data.requirements || [];
        this.initial_inspection = r.data.initial_inspection;
        this.ticket_status = r.data.ticket_status;
        this.form_id = r.data.form?.id;
        this.zone = r.data.zone?r.data.zone:{};
        this.time_location = r.data.time_location;
        this.loading=false;
      },(err)=>{
        this.$toast.error("An Error Occured, Please Refresh!");
      });
    },
    updateService() {
      if(!this.customer_id){
        this.$toast.error("Please Assign Customer");return;
      }
      if(!this.product_id){
        this.$toast.error("Please Assign Product");return;
      }
      if(!this.type){
        this.$toast.error("Please Assign Service Type");return;
      }
      let id = this.$route.query.id || null;
      this.$axios
        .put("auth/services/" + id, {
          name: this.name,
          s_desc: this.s_desc,
          l_desc: this.l_desc,
          type: this.type,
          service_type: this.service_type,
          expected_date: this.expected_date,
          status: this.status,
          product_id: this.product_id,
          assigned_to: this.assigned_to,
          customer_id: this.customer_id,
          work_status: this.work_status,
          remarks: this.remarks,
          requirements: this.requirements,
          initial_inspection: this.initial_inspection,
          ticket_status: this.ticket_status,
          zone: this.zone
        })
        .then(
          (res) => {
            this.$toast.success("Service Saved", { icon: "mdi-check-circle" });
            if (!this.$route.query.id) {
              this.$router.replace({
                query: { ...this.$route.query, id: res.data.id },
              });
            }
            this.rescheduler=false;
            this.$router.push('/app/services');
          },
          (err) => {}
        );
    
    },
  },
};
</script>

<style>
.statusBar {
  border: 1px solid var(--v-primary-base);
}
</style>