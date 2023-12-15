<template>
  <v-navigation-drawer
    left
    width="200"
    :value="value"
    floating
    dark
    color="primary"
    @input="$emit('input', $event)"
    app
    :permanent="$vuetify.breakpoint.mdAndUp"
  >
  <v-list nav>
      <v-list-item
        v-for="(item, key) in items"
        :key="key"
        :to="item.to"
        router
        exact
      >
      <v-list-item-icon>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title>
          {{item.title}} 
        </v-list-item-title>
      </v-list-item-content>
      </v-list-item>
      <v-list-item v-if="$auth.loggedIn" @click="$auth.logout();$router.push('/login')">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item v-else to="/login">
        <v-list-item-icon>
          <v-icon>mdi-login</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Login</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
  </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    items: [
      {
        icon: "mdi-home",
        title: "Home",
        to: "/",
        },
      {
        icon: "mdi-information",
        title: "About Us",
        to: "/about-us",
      },
      {
        icon: "mdi-contacts",
        title: "Contact Us",
        to: "/contact-us",
      },
    ],
  }),
};
</script>

<style>
.v-navigation-drawer--temporary.v-navigation-drawer--clipped {
  z-index: 3;
  padding-top: 64px;
}
.menu-item::after{min-height:0 !important;}
</style>