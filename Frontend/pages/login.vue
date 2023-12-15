<template>
  <v-layout column align-center justify-center fill-height>
    <v-card
      flat
      class="pa-2 elevation-6 rounded-lg"
      width="100%"
      style="background: url('/login.png'); background-size: cover"
      max-width="600"
    >
      <v-container>
        <!-- Tab-item :: LOGIN  -->
        <v-form ref="form" @submit.prevent="login" method="post">
          <v-alert type="error" v-if="errors">{{ errors }}</v-alert>
          <v-card-title class="flex-column justify-center">
            <v-img alt="Join Us Now" contain max-width="300" src="/logo.png" />
          </v-card-title>
          <h2 align="center" class="my-2 primary--text font-weight-black">
            Welcome Back
          </h2>
          <!-- ✉ E-MAIL -->
          <v-text-field
            v-model="user_name"
            label="E-Mail"
            prepend-inner-icon="mdi-email-outline"
            solo
          ></v-text-field>
          <!-- 🔑 PASSWORD -->
          <v-text-field
            v-model="password"
            label="Password"
            :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="show1 = !show1"
            :type="show1 ? 'text' : 'password'"
            prepend-inner-icon="mdi-lock-outline"
            solo
          ></v-text-field>
          <!-- ❕ ACTIONS -->
          <v-btn
            color="primary"
            class="spl-btn mx-auto"
            large
            :loading="loading"
            type="submit"
            block
            >Login</v-btn
          >
          <!-- ! SIDE ACTIONS -->
          <v-btn
            color="primary"
            to="/register"
            text
            large
            class="text-center my-2"
            style="text-transform: capitalize"
            >New User? Register Here.</v-btn
          >
        </v-form>
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  layout: "landingPage",
  data() {
    return {
      show1: false,
      user_name: null,
      password: null,
      success: false,
      loading: false,
      errors: "",
    };
  }, //DATA
  mounted() {
    if (this.$auth.loggedIn) {
      this.staffRedirect();
    }
  },
  methods: {
    staffRedirect() {
      let role = this.$auth.user.role;
      if (role.includes("super")||role.includes("admin")) {
        this.$router.push("/superadmin");
      } else {
        if (!this.$auth.user.company) {
          if (!this.$auth.user.license) {
            this.$router.push('/packages');
          } else if (!this.$auth.user.company){
            this.$router.push('/onboarding');
          }
        }
        let role = this.$auth?.user?.company?.pivot?.role;
        switch(role){
          case 'Admin': this.$router.push("/app")
          break;
          case 'Subadmin': this.$router.push("/app")
          break;
          case 'Engineer': this.$router.push("/user")
          break;
          case 'Customer': this.$router.push("/customer");
        }
      }
    },
    async login() {
      this.loading = true;
      try {
        await this.$auth.loginWith("local", {
          data: {
            email: this.user_name,
            password: this.password,
          },
        });
        this.staffRedirect();
      } catch (error) {
        this.errors = error?.response?.data?.error;
        this.loading = false;
      }
    }, //Login()
  }, //Methods
}; //EXPORT
</script>