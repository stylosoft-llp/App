<template>
<v-app>
    <!-- 🔥 MAIN RENDER -->
    <v-main>
      <nuxt />
    </v-main>
    <custNavDrawer v-model="drawer" />
        <v-app-bar
      app
      color="primary"
      dark
      flat
      clipped
    >
    <v-btn @click="drawer=!drawer" icon> <v-icon>mdi-menu</v-icon> </v-btn>
      <!-- title #00CCCC -->
      <h2 v-if="$vuetify.breakpoint.mdAndUp" class="font-weight-black">Hello {{$auth.user && $auth.user.name}}!</h2>
      <v-spacer></v-spacer>
    </v-app-bar>
</v-app>
</template>

<script>
//this.$nuxt.$route.path.match(/forua/i)
import { mapMutations } from "vuex";
export default {
  name: "custDesktop",
  middleware:['isCustomer'],
  data: () => ({
    location: "",
    searchterm: "",
    msgNotification:{
    },
    msgSnack:false,
    drawer:true,
    more:false,
    moreItems:[
      {name:'Jobs',link:'/business/jobs',icon:'mdi-briefcase-outline'},
      {name:'Freelancer',link:'/freelancer',icon:'mdi-account-tie-outline'},
      {name:'Close',link:'',icon:'mdi-close'},
    ]
  }),
  created(){
  },
  methods:{
  },
  mounted(){
  },
  watch:{
    location: function(val){
      this.$store.commit('add', val);
      localStorage.setItem("location",val);
    }
  },
  components: {
    custNavDrawer:()=>import("~/components/LayoutComponents/custNavDrawer.vue"),
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
