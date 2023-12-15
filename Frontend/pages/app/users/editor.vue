<template>
  <v-layout container align-center justify-center>
    <v-card width="100%" max-width="600">
      <v-card-title>{{$route.query.id?'Edit':'Add'}} User
        <v-spacer></v-spacer>
        <v-btn outlined small color="primary" @click="$router.back()">
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
          label="User E-mail *"
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
        <v-select
        outlined dense
        label="Role"
        v-model="user.role"
        :items="$store.state.roles"
        >
        </v-select>
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
  beforeMount(){this.$route.query.id&&this.getUser()},
  methods: {
    getUser() {
      this.$axios.get("/admin/users/"+(this.$route.query.id||null))
      .then((res)=>{
        this.user=res.data;
        this.user.role = res.data.user_company?.role;
      })
    },
    addUser() {
      this.registering=true;
      let user = this.user;
      //Did this because middleware merges to requesting user's role
      user.user_role = user.role;
      this.$axios.put("/admin/users/"+(this.$route.query.id||null), this.user).then((res) => {
        this.$toast.success('User Saved');
        this.$router.push("/app/users")
      })
      .finally(()=>{this.registering=false});
    },
  },
};
</script>

<style>
</style>