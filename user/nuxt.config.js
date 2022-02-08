export default {
  // Define the source directory of application (https://nuxtjs.org/docs/2.x/configuration-glossary/configuration-srcdir)
  srcDir: __dirname,

  // Disable server-side rendering (https://go.nuxtjs.dev/ssr-mode)
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  server: {
    host: process.env.APP_HOST || 'localhost',
    port: process.env.APP_PORT || 3000,
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Liga.sh',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
      {
        rel: "stylesheet",
        href:
          "https://cdn.materialdesignicons.com/5.3.45/css/materialdesignicons.min.css",
      },
    ],
    script: [
      {
        src: ""
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "white",
    height: "3px",
    continuous: true,
    throttle: 0,
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    "@/assets/scss/app.scss",
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/axios',
    '@/plugins/moment',
    '@/plugins/lodash',
    '@/plugins/vuetify',
    "@/plugins/validate.js",
    '@/plugins/cookiebot',
    '@/plugins/ga',
    '@/plugins/emoji',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/guest/',
        prefix: 'Guest'
      },
      {
        path: '~/components/club/',
        prefix: 'Club'
      },
      {
        path: '~/components/player/',
        prefix: 'Player'
      }
    ]
  },

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    "@nuxtjs/dotenv",
  ],
  fontawesome: {
    component: 'fa',
    icons: {
      solid: true,
      brands: true,
    }
  },
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // Doc: https://auth.nuxtjs.org
    '@nuxtjs/auth',
    // Doc: https://i18n.nuxtjs.org
    // 'nuxt-i18n',
    'bootstrap-vue/nuxt',
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
     ** i18n Multi Language module configuration
     */
  // i18n: {
  //   locales: [
  //     { code: 'en', file: 'en-US.js' },
  //     { code: 'fr', file: 'fr-FR.js' },
  //   ],
  //   lazy: true,
  //   defaultLocale: 'en',
  //   langDir: "assets/locales/",
  // },

  bootstrapVue: {
    icons: true // Install the IconsPlugin (in addition to BootStrapVue plugin
  },

  /*
     ** Auth module configuration
     */
  auth: {
    // See https://github.com/nuxt-community/auth-module#options
    redirect: {
      login: '/login',
      logout: '/',
      home: process.env.REDIRECT_AFTER_LOGIN
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
            propertyName: 'token'
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
    debug: true,
    progress: true
  },

  router: {
    middleware: ['auth']
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    /*
      ** You can extend webpack config here
      */
    extractCSS: true,
  }
}
