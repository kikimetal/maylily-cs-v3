module.exports = {

  mode: "spa",
  /*
  ** Headers of the page
  */
  head: {
    title: 'kikimetal-v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'kikimetal.com ver2 with Nuxt' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#dd408b' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    /**
    * add 2018.8.9. kikimetal
    * IE11 のためのポリフィル
    */
    babel: {
      presets: [
        [
          'vue-app',
          {
            targets:  { ie: 11 },
            useBuiltIns: true
          }
        ]
      ]
    },
    /**
     * グローバルにモジュールをインポートするにはここ vv
     */
    vendor: [
      'babel-polyfill',
      'axios',
    ],
  },

  css: [
    'assets/myreset.scss',
    'assets/common.scss',
  ],

  router: {
    base: '/'
  },

}
