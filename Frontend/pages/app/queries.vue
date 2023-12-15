<template>
  <v-layout column container>
    <p v-if="loading" class="pa-4 text-center">Loading</p>
    <v-simple-table v-else grow fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th>User Id</th>
            <th>User Name</th>
            <th>User E-Mail</th>
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
            <td>
              <v-btn color="primary" @click="focususer(key)" small>View</v-btn>
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
  layout: "adminDesktop",
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
      this.$axios.get(`auth/admin/queries`).then((res) => {
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