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
        <v-btn to="/app/customers/editor" color="primary" class="mx-1">
    <v-icon left>mdi-plus-box-multiple</v-icon> Add
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
      <template v-slot:item.created_at="{item}">
        <td style="white-space:nowrap">
          {{item.created_at?$luxon(item.created_at):'NA'}}
				</td>
      </template>
      <!-- Actions Editable -->
      <!-- eslint-disable-next-line -->
      <template v-slot:item.actions="{ item }">
        <div class="row">
        <v-btn :to="'/app/customers/editor?id='+item.id" color="blue" icon small>
        <v-icon> mdi-pencil-box-multiple </v-icon>
        </v-btn>
        <v-btn @click="deleteItem(item.id)" color="error" icon small>
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
      {text:'Company Id', value:'company[0].id'},
      {text:'Company Name', value:'company[0].name'},
      {text:'Customer Name', value:'name'},
      {text:'E-Mail', value:'email'},
      {text:'Address', value:'user_detail.address_1'},
      {text:'Mobile', value:'phone'},
      {text:'Date', value:'created_at'},
      {text:'Consent Person', value:'user_detail.consent_auth_1'},
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
      await this.$axios.get('auth/customers',{params:{
        page: this.current_page,
        per_page: this.per_page,
        search: this.search_keywords,
        status:this.search_status
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
    focususer(value) {
      this.focus = value;
      this.userToggle = true;
    },
  },
};
</script>

<style>
</style>