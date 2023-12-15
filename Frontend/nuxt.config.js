import colors from "vuetify/es5/util/colors";
export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,
  server: { port: 7700 },

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  generate: {
    fallback: true,
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - StyloDesk",
    title: "StyloDesk ",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "StyloDesk",
      },
      {
        hid: "og:description",
        name: "og:description",
        content: "StyloDesk",
      },
    ],
    link: [
      { rel: "icon", type: "image/png", href: "/icon.png" },
      {
        href: "https://fonts.googleapis.com/css2?family=Patua+One&display=swap",
        rel: "stylesheet",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["./assets/styles.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "./plugins/axios",
    /* "./plugins/maz-ui", */ "./plugins/vue-luxon",
    "./plugins/vuedraggable",
    "./plugins/vue-editable-grid",
  ],

  /**
   * Nuxt Loading Indicator
   */
  loadingIndicator: "./static/animation.html",
  loading: {
    color: "green",
  },

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
    /*     [
      "@nuxtjs/laravel-echo",
      {
        key: "e9809b9f2d68984fbebc",
        broadcaster: "pusher",
        disableStats: true,
        cluster: "ap2"
      }
    ] */
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //"nuxt-laravel",
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // https://go.nuxtjs.dev/pwa
    "@nuxtjs/pwa",
    "@nuxtjs/auth",
    "@nuxtjs/toast",
  ],
  laravel: {
    root: "../",
  },
  toast: {
    position: "bottom-right",
    iconPack: "mdi",
    duration: 5000,
  },
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: '//localhost:8000/api',
  },

  publicRuntimeConfig: {
    axios: {
      browserBaseURL: '//localhost:8000/api',
    },
    base_url: '//localhost:8000',
    api_url: '//localhost:8000/api',
    media_url: '//localhost:8000/storage',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    meta: {
      name: "Stylodesk",
      descripton:
        "Service Desk Solution for All Businesses",
      author: "Stylosoft LLP",
      theme_color: "#041222",
      nativeUI: true,
    },
    manifest: {
      lang: "en",
      name: "Stylodesk by Stylosoft LLP",
      descripton:
        "Service Desk Solution for All Businesses",
      short_name: "Stylodesk",
      display: "standalone",
      theme_color: "#041222",
    },
  },

  /**
   * Auth Module Configuration
   */
  auth: {
    strategies: {
      local: {
        endpoints: {
          login: {
            url: "/auth/login",
            method: "post",
            propertyName: "success.token",
          },
          logout: { url: "/auth/logout", method: "post" },
          user: { url: "/auth/user", method: "get", propertyName: "success" },
        },
      },
    },
  },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/variables.scss"],
    treeShake: true,
    theme: {
      options: {
        customProperties: true,
      },
      dark: false,
      themes: {
        light: {
          primary: "#0048BA",
          accent: "#4169e1",
          secondary: "#2974F6",
          info: "#e3e7f1",
          warning: "#e6c93a",
          error: "#fc3c3c",
          success: "#3ae6c9",
        },
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      cssModules: {
        modules: {
          localIdentName: "[hash:base64:4]",
        }, //** */
      },
      splitChunks: {
        layouts: true,
        pages: true,
        commons: true,
      },
    },
    babel: {
      plugins: [
        [
          "component",
          {
            libraryName: "maz-ui",
            styleLibraryName: "css",
          },
        ],
      ],
    },
  },
};
