<template>
  <div id="vision" :class="['page', $store.state.ww.size]">

    <HeroImage pos="-2%" :word="['Corporate', 'Philosophy']" />

    <Heading
    type="three-way"
    align="left"
    :title="['Our Mission']"
    :subtitle="['新しいライフスタイルで心豊かな毎日を']"
    message="「衣・食・住・健・美」の生活文化を事業領域に定め、今までにない新しい価値やライフスタイルの創造を通じて、世界中のあらゆる人々の生活に幸せと彩りを届け、心豊かな社会の実現に貢献します。"
    alt="企業理念のイメージ画像"
    paddingCutBottom
    />

    <Heading
    type="three-way"
    align="left"
    :title="['Our Vision']"
    :subtitle="['新しい生活文化を提案するオンリーワン企業をめざす']"
    message="香りのプロフェッショナルという強みを活かしながら、自由な発想と独自の技術で常識を打破し、感動ある商品を生み出すことで、既存の枠にとらわれない新しい生活文化を提案し、新たなマーケットを開拓し続けるオンリーワン企業をめざします。"
    alt="企業理念のイメージ画像"
    paddingCutBottom
    />

    <Heading
    type="pale"
    :title="['Our Value']"
    subtitle="私たちのが大切にしているもの"
    imgsrc="OurValue.jpg"
    alt="企業理念のイメージ画像"
    />

    <section class="value">
      <div class="item">
        <h2 class="title">Integrity / 誠実な行動</h2>
        <p>
          私たちは法令・社会規範を遵守し、あらゆる場面で、あらゆる人々に対して、誠実、親切、公正に接する。
        </p>
      </div>
      <div class="item">
        <h2 class="title">Creativity / 発想力と創造性</h2>
        <p>
          既成概念にとらわれない柔軟で豊かな発想力で、オリジナリティあふれる新しい価値を創造する。
        </p>
      </div>
      <div class="item">
        <h2 class="title">Challenge / 挑戦し続ける</h2>
        <p>
          困難なことにも強い意志と情熱を持って積極的に挑み、粘り強く新たな可能性を拓いていく。
        </p>
      </div>
      <div class="item">
        <h2 class="title">Fun / "楽しい"を探求</h2>
        <p>
          私たち自身が「楽しい」「面白い」と感じるものを。その「楽しい」がお客様の「感動」につながる。
        </p>
      </div>
      <div class="item">
        <h2 class="title">Harmony / 協調性と主体性</h2>
        <p>
          一人一人が個性と能力を活かし、互いにリスペクトし合いながら、自ら考え、自ら行動する。
        </p>
      </div>
    </section>

    <Heading
    type="pale"
    :title="'&quot;Maylily&quot;'"
    subtitle="社名の由来"
    imgsrc="naming.jpg"
    alt="企業理念のイメージ画像"
    />

    <section class="naming">
      <h2 class="section-heading">
  生命力あふれるスズラン</h2>
      <p>
社名の「May lily」は、英語でスズランを意味する言葉です。鮮やかな緑の葉の影に、鈴のような小さな白い花が重なって咲くスズランは、清楚で可憐な美しさがある花です。
        その控えめな姿とは裏腹に、寒さにとても強く、必ず春に花を咲かせるたくましい生命力を持つ花でもあります。
        地中を這うように茎を伸ばし、年を追うごとに驚くべき勢いで増え、いつしか一面を埋め尽くすようにスズランが咲き広がります。
      </p>
      <h2 class="section-heading">三大フローラルノート</h2>
      <p>
        スズランは香水の世界でも存在感があり、バラ、ジャスミンとともに「三大フローラルノート」と呼ばれ、調合には欠かせない重要な香りです。
        透明感のある清楚な香りは主役にもなりますが、調合した香りの調和を図り、香りに広がりやまろやかさを与えるハーモナイザーとしての役割があります。
      </p>
      <h2 class="section-heading">幸福をもたらす花</h2>
      <p>
        ヨーロッパでは、春の訪れを知らせるスズランは「幸福をもたらす花」として愛されてきました。
        結婚式で花嫁にスズランの花束を贈ったり、フランスでは、５月１日「スズランの日」に大切な人とスズランを贈り合い、幸福を祈ります。
      </p>

      <div class="list-of-thought-naming">
        <div class="item">心豊かな暮らしに役立つ製品を提供し、人々に幸せを届け、世界に幸せの輪を広げる</div>
        <div class="item">社会との調和をめざし、会社の強みや人材・リソースを活用して、社会貢献に取り組む</div>
        <div class="item">ベンチャー企業として常にチャレンジを行い、強くたくましく成長する企業をめざす</div>
      </div>

      <p :style="{textAlign: 'center'}">これがメイリリィという社名に込めた想いです。</p>
    </section>

    <Heading
      type="pale"
      :title="['Corporate', 'Symbol']"
      :subtitle="['シンボルマーク']"
      paddingCutBottom
    />

    <section>
      <p :style="{textAlign: 'center', padding: '4.2em 0 3em'}">
        <img src="~/assets/img/logo.svg"
        alt="メイリリィのロゴの画像"
        :style="{width: '50%', maxWidth: '300px'}">
      </p>
      <p>
        私たちは2018年7月より、この新しいシンボルマークを導入しました。
        4つの白い円は、スズランの花と新しい価値を創造する力を、
        緑の三角形は、先駆的な製品を開発し、事業を開拓していく企業姿勢を、
        青い扇形は、メイリリィが届ける幸せが世界に広がるようにとの願いを表現しています。
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
#vision{
  section.value{
    .item{
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      padding-bottom: 1em;
      &:last-child{
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .title{
        position: relative;
        padding-top: 1em;
        padding-bottom: 0.4em;
        font-size: 1.2em;
        line-height: 1.8;
        font-weight: 600;
        &::before{
          content: "";
          position: absolute;
          top: auto;
          left: -0.54em;
          right: auto;
          bottom: 0.2em;
          margin: 0 auto;
          width: 110%;
          height: 1em;
          background: rgba($grey-5, 0.3);
          transform: rotate(-2deg);
          z-index: -1;
        }
      } // title
      p{
        opacity: 0.7;
      }
    }

  }

  section.naming{
    p + .section-heading{
      padding-top: 2em;
    }
    .list-of-thought-naming{ // 込めた想い
      padding: 2em 0;
      display: flex;
      flex-flow: column;
      justify-content: flex-start;
      align-items: center;
      font-weight: 700;
      font-size: 1.9;
      overflow: visible;
      .item{
        position: relative;
        overflow: visible;
        padding: 1.3em 4vw;
        width: 100%;
        margin-bottom: 0.6em;
        line-height: 1.7;
        color: $grey-7;
        text-align: center;
        & + .item{
          margin-top: 0.6em;
        }
        &::before{
          content: "";
          position: absolute;
          top: 0.3em;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
          width: 100%;
          height: 86%;
          background: $white;
          box-shadow: $shadow-set;
          z-index: -1;
        }
      }
    }
  }
}

#vision.md, #vision.lg, #vision.xl{
  section.value{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 84%;
    .item{
      width: 47%;
      padding-bottom: 2.6em;
      &:last-child{
        margin-right: auto;
        margin-bottom: 0;
        padding-bottom: 0;
      }
      .title{
        line-height: 2.1;
        margin-bottom: 0.3em;
      }
    }
  }
}

</style>
