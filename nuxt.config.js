export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head () {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('title').toString(),
      htmlAttrs: {
        myAttribute: 'My Value',
        ...i18nHead.htmlAttrs
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$t('description').toString()
        },
        ...i18nHead.meta
      ],
      link: [
        {
          hid: 'apple-touch-icon',
          rel: 'apple-touch-icon',
          sizes: '180x180',
          href: '/apple-touch-icon.png'
        },
        ...i18nHead.link
      ]
    }
  },

  generate: {
    dir: 'dist',
    subFolders: false
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/scss/base/settings.scss',
    '~assets/scss/base/mixins.scss',
    '~assets/scss/base/normalize.scss',
    '~assets/scss/base/global.scss',
    '~assets/scss/base/fonts.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    cssSourceMap: true,
  },

  styleResources: {
    scss: ['./assets/scss/*.scss']
  },

  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.js', dir: 'ltr' },
      { code: 'ar', iso: 'ar-EG', file: 'ar.js', dir: 'rtl' },
      { code: 'fr', iso: 'fr-FR', file: 'fr.js' },
      { code: 'de', iso: 'de-DE', file: 'de.js' },
      { code: 'pl', iso: 'pl-PL', file: 'pl.js' },
      { code: 'ru', iso: 'ru-RU', file: 'ru.js' },
      { code: 'tr', iso: 'tr-TR', file: 'tr.js' },
      { code: 'es', iso: 'es-ES', file: 'es.js' },
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: './assets/lang/'
  }
}
