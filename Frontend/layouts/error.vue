<template>
  <v-app dark>
    <div
      v-if="error.statusCode === 404"
      align="center"
      style="margin: auto; align-text: center"
    >
      <h1 class="display-4 font-weight-black grey--text">😕 404</h1>
      <p class="display-1">
        Looks like You're Lost, Let's go <NuxtLink to="/">Home</NuxtLink>
      </p>
    </div>
    <div
      v-else-if="error.statusCode === 403"
      align="center"
      style="margin: auto; align-text: center"
    >
      <h1 class="display-4 font-weight-black grey--text">FORBIDDEN</h1>
      <p class="display-1">
        You Are Not Allowed To Visit This Page <br/><NuxtLink style="color:var(--v-primary-base)!important" to="/">Home</NuxtLink>
      </p>
    </div>
    <div v-else align="center" style="margin: auto; align-text: center">
      <h1 class="display-4 font-weight-black grey--text">🤕 Oh No!</h1>
      <p class="display-1">
        Something Went Wrong! But Don't Worry, Help's on the way!
      </p>
      <p>
        <NuxtLink to="/">Home</NuxtLink>
      </p>
    </div>
  </v-app>
</template>

<script>
export default {
  layout: "empty",
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: "404 Not Found",
      otherError: "An error occurred",
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title,
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
