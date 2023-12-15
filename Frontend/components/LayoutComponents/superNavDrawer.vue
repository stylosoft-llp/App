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
    <v-card flat light class="ma-2 pa-2 rounded-lg">
        <img
          style="background-color: white; max-height:50px!important; width:100% !important"
          v-if="!value"
          alt="StyloDesk"
          src="/favicon.png"
        />
        <img
          contain
          v-else
          style="background-color: white; max-height:50px!important; width:100% !important"
          alt="StyloDesk"
          src="/logo.png"
        />
    </v-card>
    <v-list nav>
      <v-list-item
        v-for="(item, key) in items"
        :key="key"
        :to="item.to"
        router
        active-class="activeItem"
      >
        <v-list-item-icon>
          <v-icon color="secondary">{{ item.icon }}</v-icon>
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

        dense
        style="background-color: var(--v-info-base)"
        @click="$auth.logout()"
      >
        <v-list-item-icon>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        to: "/superadmin#dashboard",
      },
      {
        icon: "mdi-account-group",
        title: "Customers",
        to: "/superadmin/users",
      },
      {
        icon: "mdi-cash-multiple",
        title: "Revenue",
        to: "/superadmin/revenue",
      },
/*       {
        icon: "mdi-chat",
        title: "Messages",
        to: "/superadmin/chat",
      }, */
      {
        icon: "mdi-account-multiple",
        title: "Service Desk",
        to: "/superadmin/desk",
      },
      {
        icon: "mdi-email-newsletter",
        title: "App Queries",
        to: "/superadmin/queries",
      },
      {
        icon: "mdi-shape-plus",
        title: "Packages",
        to: "/superadmin/packages",
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
  div,i::before {
    color: #ffffffff !important;
    font-weight: bold;
  }
}
.v-navigation-drawer--mini-variant{
  ::-webkit-scrollbar{display:none !important;}
  div{
    -ms-overflow-style: none !important;
  scrollbar-width: none !important; /* Firefox */
  overflow-y: scroll;
  }
}
</style>