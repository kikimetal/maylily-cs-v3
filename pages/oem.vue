<template>
  <div :class="['page', $store.state.ww.size]">

    <HeroImage pos="102%" :word="['Fragrance', 'for you']" />

    <Heading
    type="three-way"
    align="left"
    :title="['Made in you']"
    :subtitle="['あなたの香りを作る']"
    :message="['メイリリィは、フレグランス関連製品の受託製造を行っております。', '弊社フレグランスデザイナーが、お客様のイメージに合わせた香りを提案いたします。自社工場ならではの迅速な対応で、多品種・小ロットにも対応可能です。今までに培った実績やノウハウをもとに、処方開発から生産、品質保証までサポートし、お客様のご要望に合わせたオリジナル製品を提供いたします。']"
    paddingCutBottom
    />

    <section>
      <ImageSet :imgsrcs="['stock01.jpg', 'stock01.jpg', 'stock01.jpg']" />
    </section>

    <Heading
    type="three-way"
    align="left"
    :title="['Our strengths']"
    :subtitle="['選ばれる理由']"
    :message="['フレグランスの香り創りでは、香料の化学的知識や技術だけでなく、抽象的なイメージを香りで表現する芸術的な感性が必要です。香料の特性を十分理解した熟練のフレグランスデザイナーが、お客様のご要望にお応えするオリジナルの香りを提案いたします。']"
    :styleOverride="{paddingBottom: '3em'}"
    />

    <section>
      <h1 class="section-heading">香りのプロフェッショナル</h1>
      <p>
        フレグランスの香り創りでは、香料の化学的知識や技術だけでなく、抽象的なイメージを香りで表現する芸術的な感性が必要です。香料の特性を十分理解した熟練のフレグランスデザイナーが、お客様のご要望にお応えするオリジナルの香りを提案いたします。
      </p>
      <h1 class="section-heading">自社工場ならではの迅速な対応</h1>
      <p>
        化粧品製造業許可を取得した自社の化粧品工場で、受託製品を製造いたします。
        自社工場ならではの臨機応変な対応と、価格を抑えた製品提案が可能です。
        また、柔軟な製造体制を敷いているため、多品種、小ロットへの対応を得意としています。
      </p>
    </section>

    <heading
    type="pale"
    title="Products"
    subtitle="製造品目"
    :styleOverride="{paddingBottom: '2em'}"
    />

    <section>
      <p>
        香水、ボディミスト、ハンドクリームなどの化粧品から、リードディフューザー、ファブリックミストなどの雑貨品まで幅広く承っております。また、化粧品、トイレタリーなどに用いられる調合香料（香粧品香料）も提供しております。その他、ローションやジェルなどのスキンケア・ボディケア用品の製造も可能です。
      </p>
      <div class="products-container flex3">
        <div v-for="(names, i) in [
          ['Fragrance', '香水'],
          ['Reed Diffuser', 'リードディフューザー'],
          ['Room Mist', 'ルームミスト'],
          ['Fabric Mist', 'ファブリックミスト'],
          ['Fragrance Oil', 'フレグランスオイル'],
          ['Body Mist', 'ボディミスト'],
          ['Hand Cream', 'ハンドクリーム'],
          ['Cosmetics Fragrance', '香粧品香料'],
        ]" v-bind:key="i"
        class="product">
          <span class="en">{{ names[0] }}</span>
          <span class="ja">{{ names[1] }}</span>
        </div>
      </div>
    </section>

    <heading
    type="pale"
    title="Example"
    subtitle="製作事例"
    />

    <section>
      <h2 class="section-heading">オリジナル香水</h2>
      <p class="section-grid">
        <span>数量</span><span>100pcs</span>
        <span>単価</span><span>2,200円～</span>
        <span>納期</span><span>2ヶ月～</span>
        <span>仕様</span><span>弊社有り型ボトル・キャップ<br/>ボトル1色印刷／化粧箱1色印刷</span>
      </p>

      <h2 class="section-heading">ファブリックミスト50ml</h2>
      <p class="section-grid">
        <span>数量</span><span>1,000pcs</span>
        <span>単価</span><span>700円～</span>
        <span>納期</span><span>2ヶ月～</span>
        <span>仕様</span><span>弊社有り型ボトル・キャップ<br/>ボトル1色印刷／化粧箱1色印刷</span>
      </p>
    </section>

    <heading
    type="pale"
    title="Process"
    subtitle="製造の流れ"
    />
    <section>
      <div class="process-container flex3">
        <div>
          <LazyLoadImg imgsrc="stock02.jpg"/>
          <div class="step">step 01</div>
          <h2 class="process-title">ヒアリング</h2>
          <p>製品コンセプトや香りのイメージなど、お客様のご要望をお伺いいたします。</p>
        </div>
        <div>
          <LazyLoadImg imgsrc="stock02.jpg"/>
          <div class="step">step 02</div>
          <h2 class="process-title">試作・仕様選定</h2>
          <p>ご要望に合わせた処方でサンプルを作成。容器・化粧箱の仕様やデザインの選定も行います。</p>
        </div>
        <div>
          <LazyLoadImg imgsrc="stock02.jpg"/>
          <div class="step">step 03</div>
          <h2 class="process-title">見積・契約</h2>
          <p>製品仕様の確定後、御見積書を提出。正式にご契約・ご発注をいただきます。</p>
        </div>
        <div>
          <LazyLoadImg imgsrc="stock02.jpg"/>
          <div class="step">step 04</div>
          <h2 class="process-title">薬事申請</h2>
          <p>薬事法に基づく販売名申請や、容器・包装資材表示の諸法令適合チェックを行います。</p>
        </div>
        <div>
          <LazyLoadImg imgsrc="stock02.jpg"/>
          <div class="step">step 05</div>
          <h2 class="process-title">製造</h2>
          <p>自社工場にて徹底した品質管理のもと、安心安全な製品を製造いたします。</p>
        </div>
        <div>
          <LazyLoadImg imgsrc="stock02.jpg"/>
          <div class="step">step 06</div>
          <h2 class="process-title">検査・出荷</h2>
          <p>検品後、完成した製品を国内ご指定先までお届けいたします。</p>
        </div>
      </div><!-- .flex3 -->

    </section>

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import HeroImage from '~/components/HeroImage.vue'
import ImageSet from '~/components/ImageSet.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Heading,
    HeroImage,
    ImageSet,
    LazyLoadImg,
    Footer,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
section{
  .products-container{
    padding: 2em 0 4em;
    .product{
      padding: 0.5em 0;
      display: flex;
      flex-flow: column;
      justify-content: center;
      align-items: center;
      .en, .ja{
        line-height: 1.5;
      }
      .en{
        font-size: 0.9em;
        opacity: 0.5;
      }
      .ja{
        font-size: 1.2em;
        font-weight: 700;
        color: $grey-7;
      }
    }
  }

  .process-container{
    color: $grey-9;
    .step{
      padding-top: 1em;
      line-height: 1.3;
      opacity: 0.4;
      font-weight: 500;
    }
    .process-title{
      padding-top: 0.7em;
      padding-bottom: 0.2em;
      font-size: 1.5em;
      font-weight: 700;
    }
  }
}
</style>
