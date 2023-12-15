<template>
  <v-navigation-drawer
    left
    width="220"
    style="box-shadow: 2px 0 5px #00000055"
    floating
    :value="value"
    :mini-variant="$vuetify.breakpoint.mdAndUp && !value"
    light
    @input="$vuetify.breakpoint.smAndDown && $emit('input', $event)"
    app
    :permanent="$vuetify.breakpoint.mdAndUp"
  >
    <v-card flat light class="ma-2 pa-2 rounded-lg">
      <div>
        <input hidden type="file" @change="addLogo($event)" ref="logoInput" />
        <v-img
          v-if="$auth.user && $auth.user.company && $auth.user.company.logo_url"
          @click="$refs['logoInput'].click()"
          contain
          style="background-color: white; max-height: 50px !important"
          class="pa-2"
          alt="Join Us Now"
          :src="`${$config.media_url}/${$auth.user.company.logo_url}`"
        />
        <v-btn
          v-else
          @click="$refs['logoInput'].click()"
          block
          outlined
          style="border: 1px dashed black"
        >
          <v-icon>mdi-plus</v-icon>Add Logo
        </v-btn>
      </div>
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
          <v-icon color="primary">{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.title }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
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
      <v-card flat light class="mx-2 mt-auto pa-2 rounded-lg">
        <img
          style="
            background-color: white;
            max-height: 50px !important;
            width: 100% !important;
          "
          v-if="!value"
          alt="StyloDesk"
          src="/favicon.png"
        />
        <img
          contain
          v-else
          style="
            background-color: white;
            max-height: 50px !important;
            width: 100% !important;
          "
          alt="StyloDesk"
          src="/logo.png"
        />
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
    adminItems: [
      {
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        to: "/app#dashboard",
      },
      {
        icon: "mdi-account-group",
        title: "Users",
        to: "/app/users",
      },
      {
        icon: "mdi-hammer-wrench",
        title: "Services",
        to: "/app/services",
      },
      {
        icon: "mdi-chat",
        title: "Messages",
        to: "/app/chat",
      },
      {
        icon: "mdi-account-multiple",
        title: "Customer Data",
        to: "/app/customers",
      },
      {
        icon: "mdi-package-variant",
        title: "Products",
        to: "/app/products",
      },
      {
        icon: "mdi-home",
        title: "Home",
        to: "/",
      },
    ],
    subAdminItems: [
      {
        icon: "mdi-view-dashboard",
        title: "Dashboard",
        to: "/app#dashboard",
      },
      {
        icon: "mdi-hammer-wrench",
        title: "Services",
        to: "/app/services",
      },
      {
        icon: "mdi-format-list-checkbox",
        title: "My Tasks",
        to: "/app/tasks",
      },
      {
        icon: "mdi-chat",
        title: "Messages",
        to: "/app/chat",
      },
      {
        icon: "mdi-account-multiple",
        title: "Customer Data",
        to: "/app/customers",
      },
      {
        icon: "mdi-package-variant",
        title: "Products",
        to: "/app/products",
      },
      {
        icon: "mdi-home",
        title: "Home",
        to: "/",
      },
    ],
  }),
  computed: {
    items() {
      let role = this.$auth.user.company?.pivot?.role;
      role = role?.toLowerCase();
      if (role == "admin"||role=="super"||this.superAdmin) {
        return this.adminItems;
      } else if (role == "subadmin") {
        return this.subAdminItems;
      }
    },
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
  methods: {
    addLogo(v) {
      let formdata = new FormData();
      formdata.append("file", v.target.files[0]);
      this.$axios.post("/auth/logo", formdata).then((res) => {
        this.$nuxt.$auth.fetchUser();
      });
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
  div,
  i::before {
    color: #ffffffff !important;
    font-weight: bold;
  }
}
.v-navigation-drawer--mini-variant {
  ::-webkit-scrollbar {
    display: none !important;
  }
  div {
    -ms-overflow-style: none !important;
    scrollbar-width: none !important; /* Firefox */
    overflow-y: scroll;
  }
}
</style>