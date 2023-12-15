<template>
<v-app>
    <!-- 🔥 MAIN RENDER -->
    <v-main>
      <nuxt />
    </v-main>
    <superNavDrawer v-model="drawer" />
        <v-app-bar
      app
      dense
			style="background:url(particles.jpeg); background-size: cover;"
      color="accent"
      dark
      flat
      clipped
    >
    <v-btn @click="drawer=!drawer" icon> <v-icon>mdi-menu</v-icon> </v-btn>
      <!-- title #00CCCC -->
      <h2 v-if="$vuetify.breakpoint.mdAndUp" class="font-weight-black">Hello {{$auth.user && $auth.user.name}}!</h2>
    </v-app-bar>
</v-app>
</template>

<script>
//this.$nuxt.$route.path.match(/forua/i)
import { mapMutations } from "vuex";
export default {
  name: "superDesktop",
  middleware:['isSuperAdmin'],
  data: () => ({
    location: "",
    searchterm: "",
    msgNotification:{
    },
    drawer:false,
    more:false,
    moreItems:[
      {name:'Jobs',link:'/business/jobs',icon:'mdi-briefcase-outline'},
      {name:'Freelancer',link:'/freelancer',icon:'mdi-account-tie-outline'},
      {name:'Close',link:'',icon:'mdi-close'},
    ]
  }),
  watch:{
    location: function(val){
      this.$store.commit('add', val);
      localStorage.setItem("location",val);
    }
  },
  components: {
    superNavDrawer:()=>import("~/components/LayoutComponents/superNavDrawer.vue"),
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
