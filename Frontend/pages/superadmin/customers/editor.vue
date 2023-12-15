<template>
  <v-layout container fill-height align-center justify-center>
    <v-card width="100%" max-width="600">
      <v-card-title>Add New Customer
        <v-spacer></v-spacer>
        <v-btn outlined small color="primary" to="/app/customers"><v-icon>mdi-arrow-left</v-icon></v-btn>
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
        <h3>Additional Details</h3>
        <v-text-field
          v-model="userDetail.designation"
          label="Designation"
          outlined
          dense
        />
        <v-text-field v-model="userDetail.zone" label="Zone" outlined dense />
        <v-text-field
          v-model="userDetail.address_1"
          label="Address 1"
          outlined
          dense
        />
        <v-text-field
          v-model="userDetail.address_2"
          label="Address 2"
          outlined
          dense
        />
        <v-text-field v-model="userDetail.city" label="City" outlined dense />
        <v-text-field
          v-model="userDetail.state"
          label="State"
          outlined
          dense
        />
        <v-text-field
          v-model="userDetail.country"
          label="Country"
          outlined
          dense
        />
        <v-text-field
          v-model="userDetail.pincode"
          label="Pincode"
          outlined
          dense
        />
        <h4 class="mb-2">Consent Authority 1</h4>
        <v-row dense>
          <v-col>
            <v-text-field
              v-model="userDetail.consent_auth_1"
              label="Name"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="userDetail.consent_auth_1_phone"
              label="Phone"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <h4 class="mb-2">Consent Authority 2</h4>
        <v-row dense>
          <v-col>
            <v-text-field
              v-model="userDetail.consent_auth_2"
              label="Name"
              outlined
              dense
            />
          </v-col>
          <v-col>
            <v-text-field
              v-model="userDetail.consent_auth_2_phone"
              label="Phone"
              outlined
              dense
            />
          </v-col>
        </v-row>
        <v-btn
          @click="addUser()"
          color="primary"
          type="submit"
          block
          :loading="registering"
          >Add User</v-btn
        >
      </v-container>
    </v-card>
  </v-layout>
</template>

<script>
export default {
  layout: "superDesktop",
  data: () => ({
    user: {},
    show1: false,
    registering: false,
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    passwordRules: [(v) => !!v || "Password is required"],
    userDetail: {
      designation: "",
      zone: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      country: "",
      pincode: "",
      consent_auth_1: "",
      consent_auth_1_phone: "",
      consent_auth_2: "",
      consent_auth_2_phone: "",
    },
  }),
  beforeMount() {
    this.getUser();
  },
  methods: {
    getUser() {
      this.$axios
        .get("/auth/customers/" + (this.$route.query.id || null))
        .then((res) => {
          this.user = res.data;
          res.data.userDetail ? this.userDetail=res.data.userDetail:'';
        });
    },
    addUser() {
      let user = this.user;
      user.userDetail = this.userDetail;
      this.$axios
        .put("/auth/customers/" + (this.$route.query.id || null), user)
        .then((res) => {
          this.$toast.success("User Created");
        });
    },
  },
};
</script>

<style>
</style>