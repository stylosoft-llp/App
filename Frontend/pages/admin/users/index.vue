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
        <v-btn to="/app/users/editor" color="primary" class="mx-1">
    <v-icon left>mdi-plus-box-multiple</v-icon> Add User
    </v-btn>
  </div>
    <p v-if="loading" class="pa-4 text-center">Loading</p>
    <v-simple-table v-else grow fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User E-Mail</th>
            <th>User Phone</th>
            <th>User Roles</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, key) in users" :key="key">
            <td>
              <div>
                {{ user.id }}
              </div>
            </td>
            <td class="py-1 body-1">
                {{ user.name }}
            </td>
            <td class="py-1 body-2">
                {{ user.email }}
            </td>
            <td class="py-1 body-1">
                {{ user.phone }}
            </td>
            <td class="py-1 body-1">
                <v-chip label small v-for="(r,ri) in user.role" :key="ri">{{r.name}}</v-chip>
            </td>
            <td>
              <v-btn color="primary" @click="focususer(key)" small>View</v-btn>
              <v-btn color="secondary" :to="`/app/users/editor?id=${user.id}`" small>Edit</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-dialog max-width="600" v-model="userToggle" v-if="users[focus]">
      <v-card v-if="users[focus]">
        <v-container>
          <h4>user Details</h4>
              <v-list two-line v-if="users[focus]">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>User Name:</v-list-item-title>
                    <v-list-item-subtitle>{{
                      users[focus].name
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>User E-Mail:</v-list-item-title>
                    <v-list-item-subtitle>{{
                      users[focus].email
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>User Phone:</v-list-item-title>
                    <v-list-item-subtitle>{{
                      users[focus].phone
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
							<v-divider></v-divider>
							<p class="body-2">{{users[focus].message}}</p>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  layout: "appDesktop",
  data: () => ({
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
    getUsers() {
      this.loading = true;
      this.$axios.get(`auth/users`,{params:{
        name: this.search_keywords
      }}).then((res) => {
        this.users = res.data;
        this.loading = false;
      });
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