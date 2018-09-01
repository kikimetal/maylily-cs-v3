<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['CSR']"
      subtitle="社会貢献活動"
    />

    <section>
      <Heading
      type="photogenic"
      :title="['CSR']"
      subtitle="社会貢献活動"
      imgsrc="naming.jpg"
      alt="企業理念のイメージ画像"
      />
      <p>
        メイリリィは、本業を通じた社会貢献に加え、文化・芸術・教育・福祉の分野を中心に、会社の強みや技術、人材といった経営資源を活用して、積極的な社会貢献活動に取り組んでいます。
      </p>
      <p>
        特に、ブルガリアンローズの普及、及び新しいブルガリアンローズ文化の創造・発信を目的に活動している、一般社団法人ブルガリアンローズ文化協会への全面的な支援を継続的に実施しております。
      </p>
    </section>

    <section>
      <Heading
      type="photogenic"
      :title="['Rose', 'Water']"
      :subtitle="['ローズウォーター', 'レシピアワード']"
      imgsrc="naming.jpg"
      alt="企業理念のイメージ画像"
      />
      <h1>
        「ローズウォーターレシピアワード」へ協賛
      </h1>
      <p>
        ブルガリアンローズ文化協会のローズウォーター調味料の普及活動に賛同し、当協会が主催する「ローズウォーターレシピアワード」に、弊社製品を協賛しております。
      </p>
      <p>
        当イベントでは、ローズウォーターを広く知っていただくために、全国の調理製菓専門学校の学生を対象に、ローズウォーターを使った独創的なレシピを募集し、競い合います。
      </p>
      <p>
        ファイナリスト6名が参加する最終実技審査では、駐日ブルガリア大使、片岡護シェフ、土屋公二シェフによる厳しい審査が行われます。
      </p>
      <p>
        これから社会人となる子どもたちは、食のプロである有名シェフの指導を通じて、プロフェッショナルとしての心構えや創意工夫の大切さを学びます。
      </p>
      <Btn
      text="一般社団法人ブルガリアンローズ文化協会 公式サイト"
      to="http://www.bulgarian-rose.or.jp/"
      type="external"
      data-aos="zoom-out"
      data-aos-once="true"
      />
    </section>

    <section>
      <Heading
      type="photogenic"
      :title="['香楽', 'KOUGAKU']"
      :subtitle="['香り創りによる', '情操教育を実施']"
      imgsrc="naming.jpg"
      alt="企業理念のイメージ画像"
      />
      <p>
        「香楽KOUGAKU」とは、癒し（フレグランスセラピー）と教育（フレグランスアート）をテーマにして、代表・山下文江が考案した独自の香り創りメソッドです。
      </p>
      <p>
        誰にでも楽しめる香り創りの香楽メソッドによって、嗅覚を使った情操教育を実践しています。
      </p>
      <p>
        2011年より神奈川県立藤沢総合高校で、「香りを通して心を開く」というテーマの特別講座を行っております。
      </p>
      <p>
        5日間の香楽メソッドプログラムを通じて、子どもたちがそれぞれの個性を発見し、多様な価値観を認め、豊かな感性を育んでいます。
      </p>
      <p>
        <LazyLoadImg
        imgsrc="OurVision.jpg"
        />
      </p>
      <p>
        <LazyLoadImg
        imgsrc="OurVision.jpg"
        />
      </p>
    </section>


    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
import Btn from '~/components/Btn.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    Heading,
    Footer,
    Btn,
    LazyLoadImg,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

</style>
