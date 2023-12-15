<template>
<v-app>
    <!-- 🔥 MAIN RENDER -->
    <v-main>
      <nuxt />
    </v-main>
    <appNavDrawer v-model="drawer" />
        <v-app-bar
      app
      dense
      color="primary"
      dark
      flat
      clipped
    >
    <v-btn @click="drawer=!drawer" icon> <v-icon>mdi-menu</v-icon> </v-btn>
      <!-- title #00CCCC -->
      <h2 v-if="$vuetify.breakpoint.mdAndUp" class="font-weight-black">Hello {{$auth.user && $auth.user.name}}!</h2>
      <v-spacer></v-spacer>
    <!--<v-text-field solo-inverted dense hide-details color="primary" label="Search By Ticket No" @click:append="$router.push('/app/services/editor?id='+$event.target.value)" @keydown.enter="$router.push('/app/services/editor?id='+$event.target.value)" append-icon="mdi-card-search"></v-text-field>-->
      <v-btn icon color="white" to="/app/calendar-view">
      <v-icon>mdi-calendar</v-icon>
      </v-btn>
      <v-btn icon color="white" @click="openDefaultEmailApp">
      <v-icon>mdi-email</v-icon>
      </v-btn>
    </v-app-bar>
</v-app>
</template>

<script>
//this.$nuxt.$route.path.match(/forua/i)
import { mapMutations } from "vuex";
export default {
  name: "appDesktop",
  middleware:['isAdmin'],
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
    appNavDrawer:()=>import("~/components/LayoutComponents/appNavDrawer.vue"),
  }, //components
  computed: {
    locations() {
      return this.$store.state.locations;
    },
  }, //computed
  
  methods: {
    openDefaultEmailApp() {
      // Replace this with the logic to open the default email application
      // For example, you can use the 'mailto' link to compose a new email
      window.location.href = "mailto:kiranmayi.d@stylosoftllp.com";
    }
}

};
</script>

<style>
.v-text-field.shrink {
  max-width: 200px !important;
}

</style>
