<template>
  <div>
    <p>{{title}} <v-chip label>{{ name || 'None' }}</v-chip></p>
    <div class="d-flex flex-row">
        <v-autocomplete
          dense
          outlined
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
        </v-autocomplete>
        <v-btn v-if="addNew" class="ml-2" to="/admin/products/editor">
          <v-icon left>mdi-plus</v-icon>New</v-btn
        >
    </div>
  </div>
</template>

<script>
export default {
  props:{
    permissions:{
    default:null
  },
  title:{default:'Assignee'},
  id:{default:null},name:{default:null},
  addNew:{default:true}
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
    assignee_search(){this.searchAssignees()}
  },
  methods: {
    addUser() {
      this.$axios.put("/app/users", this.user).then((res) => {});
    },
    searchAssignees() {
      if (this.assignee_search?.length <= 2) {
        return;
      }
      this.loadingAssignees = true;
      this.$axios
        .get(`/auth/products/filter`, {
          params: {
            name: this.assignee_search,
            is: this.permissions
          },
        })
        .then(
          (res) => {
            this.assignees = res.data;
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