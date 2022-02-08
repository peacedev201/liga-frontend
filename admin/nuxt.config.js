import dotenv from "dotenv";
dotenv.config();

export default {
  // Define the source directory of application (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir)
  srcDir: __dirname,

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: {
    host: process.env.APP_HOST || 'localhost',
    port: process.env.APP_PORT || 3001,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Liga SH',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      {
        rel: "stylesheet",
        href:
          "https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Poppins&display=swap",
      },
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#fff",
    height: "3px",
    continuous: true,
    throttle: 0,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/app.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios',
    '@/plugins/lodash',
    '@/plugins/moment',
    '@/plugins/editor',
    '@/plugins/timeago',
    '@/plugins/components',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org
    '@nuxtjs/auth',
    'bootstrap-vue/nuxt',
    'nuxt-validate',
    'nuxt-socket-io',
  ],

  io: {
    // module options
    sockets: [{
      name: 'main',
      url: process.env.APP_SOCKET
    }]
  },

  /*
     ** NuxtValidate module configuration
     */
  nuxtValidate: {
    lang: 'es',
    fieldsBagName: 'veeFields',
    inject: false
  },

  /*
     ** Auth module configuration
     */
  auth: {
    // See https://github.com/nuxt-community/auth-module#options
    redirect: {
      login: '/login',
      logout: '/login',
      home: '/admin'
    },
    resetOnError: true,
    watchLoggedIn: true,
    strategies: {
      local: {
        _scheme: 'local',
        autoFetchUser: false,
        endpoints: {
          login: {
            url: '/login',
            method: 'post',
            propertyName: 'data'
          },
          logout: {
            url: '/logout',
            method: 'post'
          },
          user: {
            url: '/authenticate',
            method: 'get',
            propertyName: 'data'
          }
        },
      },
    },
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    //http://127.0.0.1:8000/api/v1/employee
    baseURL: process.env.NODE_ENV == 'development' ? process.env.LOCAL_API_BASE_URL : process.env.LIVE_API_BASE_URL,
    progress: true,
  },

  /*
   ** Auth module configuration
   */
  auth: {
    // See https://github.com/nuxt-community/auth-module#options
    redirect: {
      login: "/",
      logout: "/",
      home: "/admin",
    },
    resetOnError: true,
    watchLoggedIn: true,
    strategies: {
      local: {
        _scheme: "local",
        autoFetchUser: false,
        endpoints: {
          login: {
            url: "/login",
            method: "post",
            propertyName: "token",
          },
          logout: {
            url: "/logout",
            method: "post",
          },
          user: {
            url: "/authenticate",
            method: "get",
            propertyName: "data",
          },
        },
      },
    },
  },

  /*
   ** Router configuration
   */
  router: {
    middleware: ["auth"],
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
      ** You can extend webpack config here
      */
    extractCSS: true,
  }
}
