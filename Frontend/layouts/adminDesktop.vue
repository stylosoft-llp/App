<template>
<v-app>
    <!-- 🔥 MAIN RENDER -->
    <v-main>
      <nuxt />
    </v-main>
    <adminNavDrawer v-model="drawer" />
</v-app>
</template>

<script>
//this.$nuxt.$route.path.match(/forua/i)
import { mapMutations } from "vuex";
export default {
  name: "adminDesktop",
  middleware:['isAdmin'],
  data: () => ({
    location: "",
    searchterm: "",
    msgNotification:{
    },
    drawer:null,
    more:false,
    moreItems:[
      {name:'Jobs',link:'/business/jobs',icon:'mdi-briefcase-outline'},
      {name:'Freelancer',link:'/freelancer',icon:'mdi-account-tie-outline'},
      {name:'Close',link:'',icon:'mdi-close'},
    ]
  }),
  created(){
    this.drawer = this.$vuetify.breakpoint.mdAndUp ? true:false;
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
    adminNavDrawer:()=>import("~/components/LayoutComponents/adminNavDrawer.vue"),
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
