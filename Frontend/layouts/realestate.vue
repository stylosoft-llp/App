<template>
<v-app>
    <!-- 🔥 MAIN RENDER -->
        <v-app-bar
      dark
      :color="$route.name=='realestate'?'#000000aa':'black'"
      class="appbar"
      height="80"
      style="z-index:8"
    >
      <!-- title #00CCCC -->
      <nuxt-link to="/">
        <img height="50" class="ml-4" contain src="/rs-assets/logo-dark.png" />
      </nuxt-link>
      <!-- 
        *** 💻 DESKTOP VIEW ITEMS ***
      -->
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.mdAndUp" class="d-flex flex-row">

      <v-btn text active-class="orange--text" class="font-weight-regular" :to="item.link" v-for="(item,ii) in items" :key="ii">
        {{item.name}}
      </v-btn>
      </div>
      <v-icon v-else>mdi-menu</v-icon>
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
    location: "",
    searchterm: "",
    more:false,
    items:[
      {name:'Home',link:'/realestate'},
      {name:'About Us',link:'/about-us'},
      {name:'Our Projects',link:'/portfolio'},
      {name:'Contact Us',link:'/contact-us'}
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
