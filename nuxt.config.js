export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'fff',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  axios: {
    baseUrl: process.env.API_URL || 'http://localhost:8000/api/v1/'
  },

  auth: {
    redirect: {
      login: '/login',
      logout: '/logout',
      home: '/'
    },
    strategies: {
      laravelJWT: {
        provider: 'laravel/jwt',
        url: process.env.API_URL || 'http://localhost:8000/api/v1/',
        endpoints: {
          login: { url: 'login', method: 'post', propertyName: 'data.token' },
          user: { url: 'user', method: 'get', propertyName: 'data' },
          refresh: { url: 'refresh', method: 'post' },
          logout: {
            url: 'logout',
            method: 'post'
          }
        },
        token: {
          property: 'access_token',
          maxAge: 60 * 60
        },
        refreshToken: {
          maxAge: 20160 * 60
        }
      }
    }
  },

  router: {
    middleware: ['auth']
  },

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/auth-next'
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
