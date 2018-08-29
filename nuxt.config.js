module.exports = {

  mode: "spa",
  /*
  ** Headers of the page
  */
  head: {
    title: '有限会社メイリリィ',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, viewport-fit=cover' },
      { hid: 'description', name: 'description', content: 'kikimetal.com ver2 with Nuxt' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
    ],
    link: [
      { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon.png' },
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: {
    color: 'rgba(109, 198, 209, 0.7)',
    height: '8px',
  },
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
    'assets/css/myreset.scss',
    'assets/css/common.scss',
  ],

  router: {
    base: '/'
  },

}
