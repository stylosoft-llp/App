<template>
<v-app>
    <!-- 🔥 MAIN RENDER -->
    <v-main>
      <nuxt />
    </v-main>
    <userNavDrawer v-model="drawer" />
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
      <v-text-field solo-inverted dense hide-details color="primary" label="Search By Ticket No" @click:append="$router.push('/user/tasks/editor?id='+$event.target.value)" @keydown.enter="$router.push('/user/tasks/editor?id='+$event.target.value)" append-icon="mdi-card-search"></v-text-field>
            <v-btn icon color="white" to="/user/calendar-view">
      <v-icon>mdi-calendar</v-icon>
      </v-btn>
    </v-app-bar>
</v-app>
</template>

<script>
//this.$nuxt.$route.path.match(/forua/i)
import { mapMutations } from "vuex";
export default {
  name: "userDesktop",
  middleware:'isUser',
  data: () => ({
    location: "",
    searchterm: "",
    msgNotification:{
    },
    msgSnack:false,
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
    userNavDrawer:()=>import("~/components/LayoutComponents/userNavDrawer.vue"),
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
