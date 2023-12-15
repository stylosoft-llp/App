<template>
  <v-navigation-drawer
    left
    width="220"
    style="box-shadow: 2px 0 5px #00000055"
    floating
    :value="value"
    :mini-variant="$vuetify.breakpoint.mdAndUp && !value"
    light
    @input="$vuetify.breakpoint.smAndDown&&$emit('input', $event)"
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
        active-class="activeItem"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
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
    </v-list>
    <template v-slot:append>
      <v-list-item
        dark
        dense
        style="background-color: grey"
        @click="$auth.logout()"
      >
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-card flat light class="mx-2 mt-auto pa-2 rounded-lg">
      <v-img
        v-if="value && $auth.user&&$auth.user.company&&$auth.user.company.logo_url"
        contain
        style="background-color: white"
        class="pa-2"
        alt="Join Us Now"
        :src="`${$config.media_url}/${$auth.user.company.logo_url}`"
      />
      <div v-else-if="value">
        <h3 class="text-center primary--text" v-if="$auth.user.company">{{$auth.user.company.name}}</h3>
      </div>
      </v-card>
    </template>
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
        icon: "mdi-format-list-checkbox",
        title: "Tickets",
        to: "/customer",
      },
      {
        icon: "mdi-comment-plus",
        title: "Raise Ticket",
        to: "/customer/newTicket",
      },
      {
        icon: "mdi-chat",
        title: "Messages",
        to: "/customer/chat",
      },
/*       {
        icon: "mdi-format-list-checks",
        title: "Completed Tasks",
        to: "/app/tasks",
      }, */
      /*       {
        icon: "mdi-archive",
        title: "Completed",
        to: "/app/completed",
      }, */
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
  computed: {
    superAdmin() {
      if (
        this.$auth &&
        this.$auth.loggedIn &&
        this.$auth.user.role.includes("super")
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="scss">
.v-navigation-drawer--temporary.v-navigation-drawer--clipped {
  z-index: 3;
  padding-top: 64px;
}
.menu-item::after {
  min-height: 0 !important;
}
.activeItem {
  background: var(--v-primary-base);
  box-shadow: 0 10px 10px -5px var(--v-primary-base);
  div {
    color: #ffffffff !important;
    font-weight: bold;
  }
}
</style>