<template>
  <v-app>
    <!-- 🔥 MAIN RENDER -->
    <v-main style="background-size:cover;background-attachment:fixed;background-position:center center;">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
import { mapMutations } from "vuex";
import Footer from '../components/LayoutComponents/footer.vue';
export default {
  name: "landingPage",
  data: () => ({
    location: "",
    searchterm: "",
    drawer: null,
    login: false,
    more: false,
    menus: [
      { name: "Product", link: "/", icon: "mdi-briefcase-outline" },
      { name: "Pricing", link: "/pricing", icon: "mdi-account-tie-outline" },
    ],
  }),
  created() {
    this.drawer = this.$vuetify.breakpoint.mdAndUp ? true : false;
    this.$route.query.auth ? (this.login = true) : "";
  },

  methods: {},
  watch: {
    location: function (val) {
      this.$store.commit("add", val);
      localStorage.setItem("location", val);
    },
  },
  components: {
    adminNavDrawer: () => import("~/components/LayoutComponents/navDrawer.vue"),
    Footer,
  }, //components
  computed: {
    locations() {
      return this.$store.state.locations;
    },
  }, //computed
};
</script>

<style>
.v-text-field.shrink {
  max-width: 200px !important;
}
</style>
