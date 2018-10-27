<template>
   <div id="message" :class="['page', $store.state.ww.size]">

    <HeroImage pos="-2%" :word="['Message from', ' the President']" />
    <Heading
      type="basic"
      align="left"
      :title="['Message']"
      subtitle="代表挨拶"
      :styleOverride="{paddingBottom: '2em'}"
    />

    <section>
      <h1 class="section-heading">心豊かに生きるための香りを</h1>
      <p>
「香り」はただ静かに漂っているだけですが、意識しなければ存在していることすら気付かないときがあります。</p>
      <p>
無意識の一呼吸の中にある匂いが「香り」となって心に届いたとき、心は感じ、動きます。</p>
      <p>
好きな香り、安心する香り、元気が出る香り、幸せになる香り……それらは全て、心に届いた香りです。</p>
      <p>
香りの持つ恵みが体に届いたとき、香りは私達に想像を超えた大きな力を与えてくれます。</p>
      <p>
 心が動く香りを探し、見つけ、届けるために、そして香りの持つ恵みを届けるために、いくつもの＜香りの扉＞をご用意いたしました。</p>
      <p>
＜香りの扉＞から、皆様の心に、そして体に届く香りをお探しください。</p>
      <p>
メイリリィのご用意した香りの世界が、心豊かに美しく生きる毎日のためにお役に立ちますことを願っております。</p>
    </section>

    <section>
      <div class="fumie-katagaki">
        <div class="text">
          <span class="name">山下 文江</span>
          <span>代表取締役社長</span>
          <span>フレグランスデザイナー</span>
        </div>
        <div class="image-wrapper">
          <LazyLoadImg imgsrc="fumie.jpg" :imgstyle="{paddingTop: '66%'}"/>
        </div>
      </div>

      <h2 class="section-heading">経歴</h2>
      <p>
        調香・アロマテラピーを広く学んだ後、フランス グラースの調香専門学校 ASFO GRASSE へ留学。帰国後、フレグランスデザイナーとして活動をはじめ、企業・個人からの依頼でオリジナルの香りを制作する。
      </p>
      <p>
        また、癒し（フレグランスセラピー）と教育（フレグランスアート）をテーマにした、独自の香り創りメソッド「香楽KOUGAKU」を構築。誰にでも楽しめる香り創りによって、嗅覚を使った情操教育を実践。一般社団法人香楽メソッド普及協会を設立し、普及に努める。
      </p>
      <p>
        一方で、自らの経験を活かし、「ローズを食する」という新習慣を広めるために、2000年よりブルガリア産ローズオイル・ローズウォーターを使用した製品開発・普及活動を続ける。2016年、自社ブランドとして「ローズダレーナ」を立ち上げる。
      </p>
      <p>
        また、ブルガリア大使館からの後援を受け、一般社団法人ブルガリアンローズ文化協会を設立し、ブルガリアのバラを日本に広める活動を行う。活動の一環として、6月2日「ローズの日」の制定や、有名シェフらと「バラの騎士と女神の会」を結成し、ブルガリアンローズを食する文化を日本から世界へ発信する。
      </p>
      <h2 class="section-heading">著書</h2>
      <p>
        『命をつむぐバラ』『香楽』
        <span :style="{display: 'block', fontSize: '0.8em', opacity: '0.7'}">（ハースト婦人画報社）</span>
      </p>
      <p>
        『幸せを呼ぶ香りのセラピー』
        <span :style="{display: 'block', fontSize: '0.8em', opacity: '0.7'}">（ほんの木出版）</span>
      </p>
    </section>

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import HeroImage from '~/components/HeroImage.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Heading,
    HeroImage,
    LazyLoadImg,
    Footer,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

#message{
  .fumie-katagaki{
    margin: 5em 0;
    padding: 0;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    .text{
      padding: 1em 0;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      font-size: 0.9em;
      color: rgba($grey-7, 0.6);
      line-height: 1.5;
      .name{
        font-size: 1.3em;
        font-weight: 700;
        color: $grey-7;
        line-height: 2;
      }
    }
    .image-wrapper{
      margin: 0 auto;
      width: 90%;
      max-width: 500px;
      border-radius: 12px;
      overflow: hidden;
    }
  }
}
#message.md, #message.lg, #message.xl{
  .fumie-katagaki{
    flex-flow: row;
    justify-content: space-around;
    justify-content: space-evenly;
    .image-wrapper{
      margin: 0;
      width: 70%;
    }
  }
}
</style>
