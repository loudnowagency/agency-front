module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Loud Now Agency',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'We help forward-thinking companies to build digital experiences.' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: '#191919',
  },

  render: {
    resourceHints: false,
  },
  /*
  ** Build configuration
  */
  build: {
    extend (config, { isDev, isClient, loaders: { vue } }) {
      /*
      ** Run ESLint on save
      */
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
      /*
      ** Images lazy load
      */
      if (isClient) {
        vue.transformAssetUrls.img = ['data-src', 'src']
        vue.transformAssetUrls.source = ['data-srcset', 'srcset']
      }
    }
  },
  server: {
    host: '0.0.0.0',
  },
  buildModules: [
    '@nuxtjs/pwa',
  ],
  /*
  ** Global scss modules, mixins, functions etc
  */
  modules: [
    '@nuxtjs/style-resources',
  ],

  plugins: [
    '@/plugins/analytics.js',
    '@/plugins/directives.js',
    '@/plugins/route.js',
    '@/plugins/vue-lazysizes.client.js',
  ],

  styleResources: {
    scss: [
      '@/assets/styles/variables.scss',
      '@/assets/styles/mixins.scss',
      '@/assets/styles/functions.scss',
    ],
  },

  pwa: {
    manifest: {
      display: 'browser',
    },
  },

  router: {
    scrollBehavior(to, from, savedPosition) {
      // Avoid strange scroll behaviour when navigating back
      if (process.browser) {
        window.history.scrollRestoration = "manual"
      }

      if (to.hash) {
        return { selector: to.hash }
      } else {
        return { x: 0, y: 0 }
      }
    }
  },
}
