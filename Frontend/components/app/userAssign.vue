<template>
  <div>
    <p>{{title}} <v-chip class="font-weight-medium" label>{{ name || 'None' }} </v-chip></p>
    <div v-if="customer_detail">
      <div v-if="customer_detail.user_detail">
        {{ customer_detail.user_detail.address_1 }} {{ customer_detail.user_detail.address_2 }}<br/>
        {{ customer_detail.user_detail.city }} {{ customer_detail.user_detail.state }} {{ customer_detail.user_detail.country }} <br/>{{ customer_detail.phone }}
      </div>
    </div>
    <div class="d-flex flex-row" dense>
        <v-autocomplete
          dense
          outlined
          class="mr-1"
          @focus="searchAssignees()"
          clearable
          @input="$event?$emit('assignTo',$event):null"
          :loading="loadingAssignees"
          :search-input.sync="assignee_search"
          :label="'Search '+title"
          item-text="name"
          return-object
          prepend-inner-icon="mdi-magnify"
          :items="assignees"
        >
        <template v-slot:item="{item}">
          <v-list-item-content>
            <v-list-item-title style="white-space:normal;">
              {{ item.name }}
            </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon small v-if="item.present" color="green">mdi-circle</v-icon>
          </v-list-item-action>
        </template>
        </v-autocomplete>
        <v-btn class="ml-1" @click="addDialog()" v-if="allowNew">
          <v-icon left>mdi-plus</v-icon>New</v-btn
        >
    </div>
    <v-dialog max-width="600" v-model="createDialog">
      <v-card>
        <v-card-title>Add New User</v-card-title>
        <v-container>
          <!-- 🅰 FULL NAME -->
          <v-text-field
            prepend-inner-icon="mdi-account-outline"
            outlined
            validate-on-blur
            dense
            v-model="user.name"
            :rules="[(v) => !!v || 'Full Name is Required']"
            label="Full Name *"
          ></v-text-field>
          <!-- ✉ EMAIL -->
          <v-text-field
            prepend-inner-icon="mdi-email-outline"
            outlined
            validate-on-blur
            dense
            v-model="user.email"
            :rules="emailRules"
            label="E-mail *"
          ></v-text-field>
          <!-- 🔑 PASSWORD -->
          <v-text-field
            prepend-inner-icon="mdi-lock-outline"
            outlined
            validate-on-blur
            dense
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'"
            v-model="user.password"
            label="Password *"
            :rules="passwordRules"
          ></v-text-field>
          <!-- 📞 PHONE -->
          <v-text-field
            prepend-inner-icon="mdi-phone-outline"
            :rules="[(v) => !!v || 'Phone No. is Required']"
            outlined
            validate-on-blur
            hint="Enter Phone No. without country code Eg. 8123456789"
            dense
            counter
            maxlength="10"
            v-model="user.phone"
            label="Phone No. *"
          ></v-text-field>
          <v-btn
            @click="addUser()"
            color="primary"
            type="submit"
            block
            :loading="registering"
            >Register Now</v-btn
          >
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props:{
    permissions:{
    default:null
  },
  allowNew:{default:true},
  title:{default:'Assignee'},
  id:{default:null},name:{default:null},
  customer_detail:{default:null,required:false}
  },
  data: () => ({
    createDialog: false,
    user: {},
    assignee: {},
    assignee_search: "",
    assignees: [],
    loadingAssignees: false,
    show1: false,
    registering:false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  watch:{
    assignee_search(v){
      if(v&&v.length > 2){
        this.searchAssignees()
      }
    }
  },
  methods: {
    addDialog(){
      if(this.permissions=='Customer'){
        this.$router.push('/app/customers/editor')
      }else{
        this.createDialog=true;
      }
    },
    addUser() {
      let user = this.user;
      this.$axios.put("/auth/users", user).then((res) => {
        this.$toast.success(this.permissions+" Added Successfully!")
      });
    },
    searchAssignees() {
      if (this.assignee_search?.length <= 2) {
        return;
      }
      this.loadingAssignees = true;
      this.$axios
        .get(`/auth/users/filter`, {
          params: {
            name: this.assignee_search,
            is: this.permissions
          },
        })
        .then(
          (res) => {
            let assignees = res.data;
            assignees.forEach(ass => {
              if(ass.user_detail){
                ass.name = ass.name + ' ('+ass.user_detail.company_name+')';
              }
            });
            this.assignees = assignees;
            this.loadingAssignees = false;
          },
          (err) => {
            this.loadingAssignees = false;
          }
        );
    },
  },
};
</script>

<style>
</style>