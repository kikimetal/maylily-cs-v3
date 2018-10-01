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
      { hid: 'description', name: 'description', content: '有限会社メイリリィは、「衣・食・住・健・美」の生活文化を事業領域に定め、今までにない新しい価値やライフスタイルの創造を通じて、世界中のあらゆる人々の生活に幸せと彩りを届け、心豊かな社会の実現に貢献します。' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'default' },
    ],
    link: [
      { rel: 'icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/vnd.microsoft.icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/apple-touch-icon.png' },
      { rel: 'apple-touch-startup-image', href: '/apple-touch-icon.png' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/earlyaccess/notosansjapanese.css' },
      // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Noto+Serif+JP' },
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
