<template>
  <v-layout container align-center justify-center>
    <v-card width="100%" max-width="600">
      <v-card-title>Add/Edit User
        <v-spacer></v-spacer>
        <v-btn small to="/superadmin/users" outlined color="primary">
          <v-icon>mdi-arrow-left</v-icon>
        </v-btn>
      </v-card-title>
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
        <p v-if="user && user.company && user.company[0] && user.company[0].license">License: <b>{{user.company[0].license.name}}</b></p>
        <v-select
          :items="licenses"
          label="Change License"
          v-model="user.license"
          outlined
          dense
          item-text="name"
          item-value="id"
        ></v-select>
        <v-btn
          @click="addUser()"
          color="primary"
          type="submit"
          block
          :loading="registering"
          >Save User</v-btn
        >
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
export default {
	layout:'superDesktop',
  data: () => ({
    user: {},
    show1: false,
    registering: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
      licenses: [
    {id: 1, name: 'StyloDesk - Silver'},
    {id: 2, name: 'StyloDesk - Gold'},
    {id: 3, name: 'StyloDesk - Platinum'},
  ],
  }),
  beforeMount(){this.getUser()},
  methods: {
    getUser() {
      this.$axios.get("/super/users/"+(this.$route.query.id||null))
      .then((res)=>{
        this.user=res.data;
      })
    },
    addUser() {
      this.$axios.put("/super/users/"+(this.$route.query.id||null), this.user).then((res) => {
        this.$toast.success('User Created');
      });
    },
  },
};
</script>

<style>
</style>