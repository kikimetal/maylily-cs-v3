<template>
   <div id="message" :class="['page', $store.state.ww.size]">

    <HeroImage pos="-2%" :word="['Voice of', 'Maylily']" />
    <Heading
      type="basic"
      align="left"
      :title="['Message']"
      subtitle="代表挨拶"
      :styleOverride="{paddingBottom: '2em'}"
    />

    <section>
      <h1 class="section-heading">ローズを飲まないなんて、あまりにもったいない</h1>
      <p>
      30代半ば、自律神経失調症で体調を崩し苦しんでいたとき、「香りを創る」楽しさに触れて心は少しずつ元気になりましたが、症状はなかなか改善されませんでした。 2000年、株式会社ソフィア・エコ・プランの「ローズドリナ」※と出会います。ブルガリア産ローズオイル配合カプセル「ローズドリナ」を初めて飲んだとき、数年間にわたる睡眠障害などが改善され、元気を取り戻すことができたのです。ローズの素晴らしさを実感した私は、ローズの力を活かし、広めるべく、15年にわたり同社と共同でブルガリアンローズの商品開発、普及活動に努めてきました。
      </p>
      <p>
      香水の世界でローズは「香りの女王」と呼ばれ、主役となる香りですが、それ以上に優れた力をもっています。香水にローズオイルをほんの少し加えると、まるで命が吹き込まれたかのように、その香りが生き生きとするのです。私がローズオイルを内服したとき、香水創りでローズオイルが発揮する力と同じものを感じました。ローズには、人が本来持っている“元の気”に戻してくれる力があります。そのような力をもつローズを内服せず、香りを楽しむだけではあまりにもったいないと思うのです。
      </p>
      <p>
      ブルガリアンローズの恵みを届けたいという想いから、2016年春、「ローズダレーナ」ブランドを立ち上げました。「ローズダレーナ」とは、ブルガリア語で「天から与えられたバラの豊かな恵み」を意味します。ローズの恵みが凝縮されたローズオイルとローズウォーターは、まさに天からの尊い贈り物です。そのブルガリアンローズの恵みを最大限に生かした製品を、未だ解明されていない大きな力と可能性を秘めるローズに敬意を表しながら、心をこめて創りました。
      </p>
      <p>
      永い時を越えて咲き続けるローズは生命にみずみずしいエネルギーを与え、その芳しい香りと美しい姿は人々の心に幸せをもたらしてくれます。ローズを愛し、その恵みを大切に使ってくださる皆様のライフスタイルを、「ローズダレーナ」がさらに豊かなものにしてくれたら、この上なく幸せです。
      </p>
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
