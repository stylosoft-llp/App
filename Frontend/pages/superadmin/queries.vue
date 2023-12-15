<template>
  <v-layout column container>
    <v-card>
      <v-card-title>App Queries</v-card-title>
    <p v-if="loading" class="pa-4 text-center">Loading</p>
    <v-simple-table v-else grow fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User E-Mail</th>
            <th>User Phone</th>
            <th>Date</th>
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
                {{ user.created_at ? $luxon(user.created_at): '' }}
            </td>
            <td>
              <v-btn color="primary" @click="focususer(key)" small>View</v-btn>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    </v-card>
    <v-dialog max-width="600" v-model="userToggle" v-if="users[focus]">
      <v-card v-if="users[focus]">
        <v-container>
          <v-card-title>User Details</v-card-title>
              <v-list two-line v-if="users[focus]">
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>User Name:</v-list-item-subtitle>
                    <v-list-item-title>{{
                      users[focus].name
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>User E-Mail:</v-list-item-subtitle>
                    <v-list-item-title>{{
                      users[focus].email
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>User Phone:</v-list-item-subtitle>
                    <v-list-item-title>{{
                      users[focus].phone
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-subtitle>Enquiry Date:</v-list-item-subtitle>
                    <v-list-item-title>{{
                      users[focus].created_at ? $luxon(users[focus].created_at) : ''
                    }}</v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
							<v-divider></v-divider>
							<p class="body-1 ma-2">Message: {{users[focus].message}}</p>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  layout: "superDesktop",
  data: () => ({
    users: [],
    focus: 0,
    userToggle: false,
    status: "",
    changingStatus: false,
    loading: false,
  }),
  mounted() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.loading = true;
      this.$axios.get(`/admin/inquiries`).then((res) => {
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