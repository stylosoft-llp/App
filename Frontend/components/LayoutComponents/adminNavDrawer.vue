<template>
  <v-navigation-drawer
    left
    width="220"
    :value="value"
    floating
    dark
    :style="`background:linear-gradient(140deg,var(--v-primary-base),var(--v-secondary-base)) !important;`"
    @input="$emit('input', $event)"
    app
    :permanent="$vuetify.breakpoint.mdAndUp"
  >
    <v-card flat light class="ma-2 pa-2 rounded-lg">
        <v-img contain style="background-color:white;" class="pa-2" alt="Join Us Now" 
          src="/logo.png"/>
    </v-card>
  <v-list nav>
      <v-list-item
        v-for="(item, key) in items"
        :key="key"
        :to="item.to"
        router
        active-class="#00ACEE"
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
<!--       <v-list-item
        v-for="(item, key) in superItems"
        v-show="superAdmin"
        :key="key+10"
        :to="item.to"
        router
        active-class="#00ACEE"
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
      </v-list-item> -->
      <v-list-item @click="$auth.logout()">
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
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
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        to: "/admin#dashboard",
      },
      {
        icon: "mdi-package-variant",
        title: "Products",
        to: "/admin/products",
      },
      {
        icon: "mdi-hammer-wrench",
        title: "Services",
        to: "/admin/services",
      },
      {
        icon: "mdi-format-list-checkbox",
        title: "Assigned Tasks",
        to: "/admin/tasks",
      },
      {
        icon: "mdi-account-group",
        title: "Users",
        to: "/admin/users",
      },
      {
        icon: "mdi-home",
        title: "Home",
        to: "/",
      },
      /*       {
        icon: "mdi-cog-box",
        title: "Settings",
        to: "/admin/settings",
      }, */
    ],
  }),
  computed:{
    superAdmin(){
      if(this.$auth && this.$auth.loggedIn && this.$auth.user.role.includes('super')){
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style>
.v-navigation-drawer--temporary.v-navigation-drawer--clipped {
  z-index: 3;
  padding-top: 64px;
}
.menu-item::after{min-height:0 !important;}
</style>