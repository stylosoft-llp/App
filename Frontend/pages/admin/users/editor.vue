<template>
  <v-layout container align-center justify-center>
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
  </v-layout>
</template>

<script>
export default {
	layout:'appDesktop',
  data: () => ({
    user: {},
    show1: false,
    registering: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
  }),
  methods: {
    addUser() {
      this.$axios.put("/app/users", user).then((res) => {});
    },
  },
};
</script>

<style>
</style>