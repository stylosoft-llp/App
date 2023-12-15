<template>
  <v-app>
    <v-app-bar height="80" app color="white">
      <!-- Site Title -->
        <img height="70px" @click="$router.push('/')" contain src="/logo.png" />
      <v-spacer></v-spacer>
      <!-- NavBar Button -->
      <v-btn color="black" icon @click.stop="drawer = !drawer">
        <v-icon>mdi-menu</v-icon>
      </v-btn>
    </v-app-bar>
    <!-- 🔥 MAIN RENDER -->
    <v-main>
      <nuxt />
    </v-main>
    <navDrawer v-model="drawer" />
    <Footer/>
  </v-app>
</template>

<script>
export default {
  name: "mobileView",
  data: () => ({
    drawer: false,
    title: "Ownear.dev",
  }), //DATA
  components: {
    navDrawer: ()=>import("../components/LayoutComponents/navDrawer.vue"),
    Footer: ()=>import("../components/LayoutComponents/footer.vue")
  },
};
</script>

<style>
</style>