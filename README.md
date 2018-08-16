# kikimetal-v2
2018/08/01
Nuxt + Firebase でやる！

## システム

- [x] firebase deploy
- [x] firebase hosting / functions の利用
- [x] firebase functions で npm モジュールを使う
- [ ] functions から他のサーバーへリクエスト... うまくいかない...
- [x] firebase カスタムドメイン設定
- [x] FetchAsGoogle でレンダリング大丈夫そうか確認
- [ ] 実機IEで表示確認
- [ ] ソフト404回避

## Nuxt/Vueの学び

- [x] ページ間のtransition
- [x] 基本的な Component の書き方
- [x] 画像の読み込み待機のための汎用コンポーネント作成
- [x] 非同期で Sheet API 使えるようにする
- [x] コンポーネント同士のtransition
- [x] ポリフィル挿入
- [x] 外部モジュールの入れ方確認
- [x] Vuex Store の利用
- [ ] Store へ Nuxtのコンポーネントの fetch で設定
- [ ] [リンスとレンダリングの際の注意](https://jp.vuejs.org/v2/guide/list.html)
- [ ] [トランジションについて学ぶ](https://jp.vuejs.org/v2/guide/transitions.html)
- [ ] [Nuxtのページコンポーネントの属性を学ぶ](https://ja.nuxtjs.org/guide/views#%E3%83%9A%E3%83%BC%E3%82%B8)
- [ ] 処理しないものについて /static 配下に favicon など試す
- [ ] OGP メタタグ追加 https://ja.nuxtjs.org/api/configuration-head
```js
// nuxt.config.js
meta: [
    // { charset: 'utf-8' },
    // { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    // { hid: 'description', name: 'description', content: 'meta description' },
    { name: 'fb:admins', content: 'admin id' },
    { name: 'og:type', content: 'website' },
    { name: 'og:url', content: 'url' },
    { name: 'og:title', content: 'og page title' },
    { name: 'og:site_name', content: 'og site name' },
    { name: 'og:description', content: 'og description' },
    { name: 'og:image', content: 'og image' } // など...
  ],
```
- [ ] google-analytics 設定

## CSS

- [ ] CSS perspective でパララックス表現を [参考記事](https://techblog.kayac.com/2016/12/23/233000)


## デザイン

- [x] 暫定的にロゴタイプをSVGで
- [ ] ロゴマーク
- [ ] グローバルなびの見た目
- [ ] テーマカラーの設定
- [ ] ページネーションを決める
