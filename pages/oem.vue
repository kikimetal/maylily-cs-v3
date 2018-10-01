<template>
   <div :class="['page', $store.state.ww.size]">

    <!-- <Heading
    type="basic"
    pagetop
    :title="['Fragrance', 'OEM']"
    :subtitle="['フレグランス', 'OEM事業']"
    /> -->

    <section>
      <!-- <Heading
      type="photogenic"
      :title="['Fragrance', 'OEM']"
      :subtitle="['フレグランス', 'OEM事業']"
      imgsrc="Delicious.jpg"
      alt="ダブル蒸留法"
      /> -->
      <Heading
      type="three-way"
      :title="['Fragrance', 'OEM']"
      :subtitle="['フレグランス', 'OEM事業']"
      :message="['フレグランス', 'OEM事業']"
      imgsrc="Delicious.jpg"
      alt="ダブル蒸留法"
      />
      <p>
        メイリリィは、フレグランス関連製品の受託製造を行っております。弊社フレグランスデザイナーが、お客様のイメージに合わせた香りを提案いたします。
      </p>
      <p>
        自社工場ならではの迅速な対応で、多品種・小ロットにも対応可能です。今までに培った実績やノウハウをもとに、処方開発から生産、品質保証までサポートし、お客様のご要望に合わせたオリジナル製品を提供いたします。
      </p>
    </section>

    <section>
      <h1>
        メイリリィの強み
      </h1>
      <Heading
      type="photogenic"
      :title="['Point 1']"
      :subtitle="['香りのプロフェッショナル']"
      imgsrc="Delicious.jpg"
      alt="ダブル蒸留法"
      />
      <h1>私たちは香りのプロフェッショナルです。</h1>
      <p>
        フレグランスの香り創りでは、香料の化学的知識や技術だけでなく、抽象的なイメージを香りで表現する芸術的な感性が必要です。香料の特性を十分理解した熟練のフレグランスデザイナーが、お客様のご要望にお応えするオリジナルの香りを提案いたします。
      </p>
      <Heading
      type="photogenic"
      :title="['Point 2']"
      :subtitle="['自社工場 多品種・小ロット対応']"
      imgsrc="Delicious.jpg"
      alt="ダブル蒸留法"
      />
      <h1>
        自社工場のため、多品種・小ロットに対応できます。
      </h1>
      <p>
        化粧品製造業許可を取得した自社の化粧品工場で、受託製品を製造いたします。
        自社工場ならではの臨機応変な対応と、価格を抑えた製品提案が可能です。
        また、柔軟な製造体制を敷いているため、多品種、小ロットへの対応を得意としています。
      </p>
    </section>

    <section>
      <h1>製造品目</h1>
      <p>
        香水、ボディミスト、ハンドクリームなどの化粧品から、リードディフューザー、ファブリックミストなどの雑貨品まで幅広く承っております。また、化粧品、トイレタリーなどに用いられる調合香料（香粧品香料）も提供しております。その他、ローションやジェルなどのスキンケア・ボディケア用品の製造も可能です。
      </p>
      <div class="flex3">
        <Heading
        type="photogenic"
        :title="['Fragrance']"
        :subtitle="['香水']"
        imgsrc="stock01.jpg"
        alt="香水の画像"
        />
        <Heading
        type="photogenic"
        :title="['Reed', 'Diffuser']"
        :subtitle="['リードディフューザー']"
        imgsrc="stock02.jpg"
        alt="香水の画像"
        />
        <Heading
        type="photogenic"
        :title="['Room', 'Mist']"
        :subtitle="['ルームミスト']"
        imgsrc="stock03.jpg"
        alt="香水の画像"
        />
        <Heading
        type="photogenic"
        :title="['Fabric', 'Mist']"
        :subtitle="['ファブリックミスト']"
        imgsrc="stock01.jpg"
        alt="香水の画像"
        />
        <Heading
        type="photogenic"
        :title="['Fragrance', 'Oil']"
        :subtitle="['フレグランスオイル']"
        imgsrc="stock02.jpg"
        alt="香水の画像"
        />
        <Heading
        type="photogenic"
        :title="['Body', 'Mist']"
        :subtitle="['ボディミスト']"
        imgsrc="stock03.jpg"
        alt="香水の画像"
        />
        <Heading
        type="photogenic"
        :title="['Hand', 'Cream']"
        :subtitle="['ハンドクリーム']"
        imgsrc="stock01.jpg"
        alt="香水の画像"
        />
        <Heading
        type="photogenic"
        :title="['Cosmetics', 'Fragrance']"
        :subtitle="['香粧品香料']"
        imgsrc="stock02.jpg"
        alt="香水の画像"
        />
      </div>
    </section>

    <section>
      <h2>製作事例 オリジナル香水</h2>
      <p class="grid">
        <span>数量</span><span>100pcs</span>
        <span>単価</span><span>2,200円～</span>
        <span>納期</span><span>2ヶ月～</span>
        <span>仕様</span><span>弊社有り型ボトル・キャップ<br/>ボトル1色印刷／化粧箱1色印刷</span>
      </p>
      <h2>製作事例 ファブリックミスト50ml</h2>
      <p class="grid">
        <span>数量</span><span>1,000pcs</span>
        <span>単価</span><span>700円～</span>
        <span>納期</span><span>2ヶ月～</span>
        <span>仕様</span><span>弊社有り型ボトル・キャップ<br/>ボトル1色印刷／化粧箱1色印刷</span>
      </p>

      <h1>
        製造の流れ
      </h1>

      <div class="flex3">
        <div>
          <Heading
          type="photogenic"
          :title="['STEP 6']"
          :subtitle="['香粧品香料']"
          imgsrc="stock01.jpg"
          alt="香水の画像"
          />
          <h2>STEP１　ヒアリング</h2>
          <p>製品コンセプトや香りのイメージなど、お客様のご要望をお伺いいたします。</p>
        </div>

        <div>
          <Heading
          type="photogenic"
          :title="['STEP 6']"
          :subtitle="['香粧品香料']"
          imgsrc="stock02.jpg"
          alt="香水の画像"
          />
          <h2>STEP２　試作・仕様選定</h2>
          <p>ご要望に合わせた処方でサンプルを作成。容器・化粧箱の仕様やデザインの選定も行います。</p>
        </div>
        <div>
          <Heading
          type="photogenic"
          :title="['STEP 6']"
          :subtitle="['香粧品香料']"
          imgsrc="stock03.jpg"
          alt="香水の画像"
          />
          <h2>STEP３　見積・契約</h2>
          <p>製品仕様の確定後、御見積書を提出。正式にご契約・ご発注をいただきます。</p>
        </div>
        <div>
          <Heading
          type="photogenic"
          :title="['STEP 6']"
          :subtitle="['香粧品香料']"
          imgsrc="stock01.jpg"
          alt="香水の画像"
          />
          <h2>STEP４　薬事申請</h2>
          <p>薬事法に基づく販売名申請や、容器・包装資材表示の諸法令適合チェックを行います。</p>
        </div>
        <div>
          <Heading
          type="photogenic"
          :title="['STEP 6']"
          :subtitle="['香粧品香料']"
          imgsrc="stock02.jpg"
          alt="香水の画像"
          />
          <h2>STEP５　製造</h2>
          <p>自社工場にて徹底した品質管理のもと、安心安全な製品を製造いたします。</p>
        </div>
        <div>
          <Heading
          type="photogenic"
          :title="['STEP 6']"
          :subtitle="['香粧品香料']"
          imgsrc="stock03.jpg"
          alt="香水の画像"
          />
          <h2>STEP６　検査・出荷</h2>
          <p>検品後、完成した製品を国内ご指定先までお届けいたします。</p>
        </div>
      </div><!-- .flex3 -->

    </section>

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Heading,
    Footer,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';

</style>
