<template>
   <div id="csr" :class="['page', $store.state.ww.size]">

     <HeroImage pos="-2%" :word="['Social Contribution', 'Activities']" />

     <Heading
       type="three-way"
       align="left"
       :title="['Social', 'Contribution', ' Activities']"
       :subtitle="['社会貢献活動']"
       :message="[
         'メイリリィは、本業を通じた社会貢献に加え、文化・芸術・教育・福祉の分野を中心に、会社の強みや技術、人材といった経営資源を活用して、積極的な社会貢献活動に取り組んでいます。',
         '特に、ブルガリアンローズの普及、及び新しいブルガリアンローズ文化の創造・発信を目的に活動している、一般社団法人ブルガリアンローズ文化協会への全面的な支援を継続的に実施しております。'
       ]"
     />

     <Heading
     type="pale"
     :title="['Bulgarian', 'Rose']"
     :subtitle="['ローズウォーター普及活動']"
     :styleOverride="{padding: '2em 0'}"
     />
    <section class="award">

      <ImageSet reverse :imgsrcs="['stock01.jpg', 'stock02.jpg', 'stock03.jpg']" />
      <h1 class="section-heading">「ローズウォーターレシピアワード」へ協賛</h1>

      <p>
        ブルガリアンローズ文化協会のローズウォーター調味料の普及活動に賛同し、当協会が主催する「ローズウォーターレシピアワード」に、弊社製品を協賛しております。
      </p>
      <p>
        当イベントでは、ローズウォーターを広く知っていただくために、全国の調理製菓専門学校の学生を対象に、ローズウォーターを使った独創的なレシピを募集し、競い合います。ファイナリスト6名が参加する最終実技審査では、駐日ブルガリア大使、片岡護シェフ、土屋公二シェフによる厳しい審査が行われます。
      </p>
      <p>
        これから社会人となる子どもたちは、食のプロである有名シェフの指導を通じて、プロフェッショナルとしての心構えや創意工夫の大切さを学びます。
      </p>

      <a class="btn" href="http://www.bulgarian-rose.or.jp/">一般社団法人ブルガリアンローズ文化協会 公式サイトへ</a>
    </section>

    <Heading
    type="pale"
    title="KOUGAKU"
    :subtitle="['香り創りによる', '情操教育の実施']"
    />
    <section class="kougaku">
      <h1 class="section-heading">「香楽（こうがく）」</h1>
      <p>
        「香楽（こうがく）」とは、癒し（フレグランスセラピー）と教育（フレグランスアート）をテーマにして、代表・山下文江が考案した独自の香り創りメソッドです。
誰にでも楽しめる香り創りの香楽メソッドによって、嗅覚を使った情操教育を実践しています。
      </p>
      <p>
        2011年より神奈川県立藤沢総合高校で、「香りを通して心を開く」というテーマの特別講座を行っております。
        5日間の香楽メソッドプログラムを通じて、子どもたちがそれぞれの個性を発見し、多様な価値観を認め、豊かな感性を育んでいます。
      </p>

      <ImageSet :imgsrcs="['stock01.jpg', 'stock02.jpg', 'stock03.jpg']" />

    </section>


    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import HeroImage from '~/components/HeroImage.vue'
import Footer from '~/components/Footer.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import ImageSet from '~/components/ImageSet.vue'
export default {
  components: {
    Heading,
    HeroImage,
    Footer,
    LazyLoadImg,
    ImageSet,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.btn{
  @include btn;
  @include hover-touchme;
  font-size: inherit;
  width: 36em;
  max-width: 90%;
  line-height: 1.5;
  margin-top: 5em;
  margin-bottom: 6em;
}
</style>
