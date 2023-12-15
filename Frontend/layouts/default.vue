<template>
  <v-app>
    <!-- Dynamic component based on device breakpoint -->
    <!-- If you don't need separate layouts for desktop & mobile, simply replace the below tag with your desired layout -->
    <component :is="currentComponent"></component>
<!--       <div style="position:fixed;bottom:20px;right:20px;">
      <a href="https://wa.me/919391689442" target="_blank">
      <img width="64" height="64" src="/whatsapp-min.png"></a>
    </div> -->
  </v-app>
</template>

<script>
export default {
  components: {
    desktopView: () => import("./desktopView.vue"),
    mobileView: () => import("./mobileView.vue"),
  },
  data() {
    return {
      update: false,
    };
  }, //data
  methods: {
    async checkPWAUpdate() {
      const workbox = await window.$workbox;
      if (workbox) {
        workbox.addEventListener("installed", (event) => {
          console.log("installed", event);
          if (event.isUpdate) {
            this.update = true;
            console.log("update needed");
          }
        });
      }
    },
    reloadWindow() {
      window.location.reload(true);
    },
  }, //METHODS
  computed: {
    currentComponent() {
      //Returns components based on device breakpoint
      return this.$vuetify.breakpoint.mdAndUp ? "desktopView" : "mobileView";
    },
  },
};
</script>
