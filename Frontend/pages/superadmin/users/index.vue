<template>
  <v-layout column container>
      <div class="my-2 d-flex flex-row align-start justify-center">
    <v-text-field label="Search User"
    append-icon="mdi-magnify"
    hint="Search By Name or Email"
    @keydown.enter="getUsers()"
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
    <v-btn @click="getUsers()" class="mx-1" color="accent">
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
        <v-btn to="/superadmin/users/editor" color="primary" class="mx-1">
    <v-icon left>mdi-plus-box-multiple</v-icon> Add User
    </v-btn>
  </div>
    <p v-if="loading" class="pa-4 text-center">Loading</p>
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
      <template v-slot:item.status="{item}">
        <td style="white-space:nowrap">
          <v-switch v-model="item.status" :true-value="1" :false-value="0"></v-switch>
				</td>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.license.created_at="{item}">
        <td style="white-space:nowrap">
          {{item.license && item.license.created_at?$luxon(item.license.created_at):'NA'}}
				</td>
      </template>
      <!-- eslint-disable-next-line -->
      <template v-slot:item.license.expires_on="{item}">
        <td style="white-space:nowrap">
          {{item.license && item.license.expires_on ? $luxon(item.license.expires_on) : 'NA'}}
				</td>
      </template>
      <!-- Actions Editable -->
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <div class="row">
        <v-btn :to="'/superadmin/users/editor?id='+item.id" color="blue" icon small>
        <v-icon> mdi-pencil-box-multiple </v-icon>
        </v-btn>
        <v-btn @click="deleteUser(item.id)" color="error" icon small>
        <v-icon>
          mdi-delete
        </v-icon>
        </v-btn>
        </div>
      </template>
    </v-data-table>
  </v-layout>
</template>

<script>
export default {
  layout: "superDesktop",
  data: () => ({
        serviceHeaders:[
      {text:'S.No', value:'sn'},
      {text:'Id', value:'id'},
      {text:'User Name', value:'name'},
      {text:'E-Mail', value:'email'},
      {text:'Role', value:'company[0].pivot.role'},
      {text:'Mobile', value:'phone'},
      {text:'License Start', value:'license.created_at'},
      {text:'License Expiry', value:'license.expires_on'},
      {text:'License', value:'license.name'},
      {text:'Admins', value:'license.admins'},
      {text:'Subadmins', value:'license.subadmins'},
      {text:'Engineers', value:'license.engineers'},
      {text:'Actions', value:'actions'}
    ],
    leadFile:null,
    datemenu:false,
    tableSelected:[],
    total:null,
    current_page:1,
    loading:false,
    per_page:100,
    editedIndex:null,
    editedItem:{},
    leads: [],
    date:[],
    users: [],
    focus: 0,
    userToggle: false,
    status: "",
    changingStatus: false,
    loading: false,
    search_keywords:''
  }),
  mounted() {
    this.getUsers();
  },
  methods: {
    async getUsers() {
      this.loading=true;
      await this.$axios.get('super/users',{params:{
        page: this.current_page,
        per_page: this.per_page,
        search: this.search_keywords,
        status:this.search_status,
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
    deleteUser(id){
      if(!window.confirm('Are you sure you want to delete this user?')){
        return;
      }
      this.$axios.delete('super/users/'+id)
      .then((res)=>{
        this.$toast.info("User Deleted!");
        this.getUsers();
      },(err)=>{
        this.$toast.error("An Error Occured While Deleting!");
      })
    },
    focususer(value) {
      this.focus = value;
      this.userToggle = true;
    },
  },
};
</script>

<style>
</style>