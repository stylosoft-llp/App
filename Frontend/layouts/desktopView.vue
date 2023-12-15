<template>
<v-app>
    <!-- 🔥 MAIN RENDER -->
        <v-app-bar
      light
      color="white"
      class="appbar"
      height="90"
    >
      <!-- title #00CCCC -->
      <nuxt-link to="/">
        <img height="50" class="ml-4" contain src="/logo.png" />
      </nuxt-link>
      <!-- 
        *** 💻 DESKTOP VIEW ITEMS ***
      -->
      <v-spacer></v-spacer>
      <div class="d-flex flex-row">

      <v-btn text active-class="secondary--text" color="primary" class="font-weight-black" :to="item.link" v-for="(item,ii) in items" :key="ii">
        <v-icon left>{{item.ic}}</v-icon> {{item.name}}
      </v-btn>
      </div>
      <v-divider vertical class="mx-1"></v-divider>
      <v-btn to="/login" color="primary">
        <v-icon left>mdi-account</v-icon> Login
      </v-btn>
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <Footer/>
</v-app>
</template>

<script>
import { mapMutations } from "vuex";
import Footer from '~/components/LayoutComponents/footer.vue';
export default {
  name: "desktopView",
  data: () => ({
    msgSnack: false,
    msgNotification: {},
    location: "",
    searchterm: "",
    more:false,
    items:[
      {name:'Home',link:'/',ic:'mdi-home'},
      {name:'About Us',link:'/about-us',ic:'mdi-information'},
      {name:'Support',link:'#',ic:'mdi-headphones'},
      {name:'Contact Us',link:'/contact-us',ic:'mdi-contacts'}
    ]
  }),
  created(){
  },
    mounted() {
/*     this.$echo.channel("chat").listen("MessageCreated", (e) => {
      let msgNotification = {
        name: e.message.user_name,
        message: e.message.message,
      };
      if (this.$nuxt.$route.path.match(/forum/i) === null) {
        let snd = new Audio("/message.mp3"); // buffers automatically when created
        snd.play();
        this.msgSnack = true;
        this.msgNotification = msgNotification;
      } else {
        this.$nuxt.$emit("new-message", e);
      }
    }); */
  },
  methods:{
  },
  watch:{
    location: function(val){
      this.$store.commit('add', val);
      localStorage.setItem("location",val);
    }
  },
  components: {
    Footer
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
.toolbar{
  top:80px !important;
  width:90%;
}
</style>
