<template>
  <div :class="['page', $store.state.ww.size]">

    <HeroImage pos="102%" :word="['Queen of', 'Fragrance']" />

    <Heading
    type="three-way"
    align="left"
    :title="['Bulgarian', 'Rose']"
    :subtitle="['花香の女王', 'ブルガリアンローズ']"
    :message="['メイリリィは、ブルガリアから最高品質のローズオイル・ローズウォーターを輸入し、販売しております。']"
    :styleOverride="{paddingBottom: '2em'}"
    />

    <section>
      <!-- <ImageSet :imgsrcs="['stock01.jpg', 'stock02.jpg', 'stock03.jpg']" /> -->
      <p :style="{marginBottom: '3em'}">
        <LazyLoadImg :style="{paddingTop: '50%'}"/>
      </p>
      <p>
        2万種以上あると言われるバラのなかで、ローズオイルを抽出できるバラはわずか数種類しか存在しません。そのなかでも、ダマスクローズは最も香り高い品種として知られています。特に、<b>ブルガリア「バラの谷」で採れるダマスクローズは、高い採油率と上質な香りから世界最高品質と評され、「花香の女王 ブルガリアンローズ」</b>と呼ばれています。
      </p>
      <h2 class="section-heading">ブルガリア バラの谷</h2>
      <p>
        ダマスクローズの栽培は、ブルガリア中央にある「バラの谷」と呼ばれる地域で行われています。バルカン山脈とスレドナ・ゴラ山脈に挟まれたこの平原地帯は、広大な山脈が冷たい風を遮るため、気候は温暖で、植物が生育しやすい環境にあります。
      </p>
      <p>
        また、酸性度が低くて水はけの良い土壌、豊富な雨量、朝夕の寒暖差など、ダマスクローズの栽培に最適な条件が整っています。そのため、<b>香油成分を豊かに蓄えたダマスクローズが育ち、最高品質のローズオイルが生産されます。</b>ここで生産されるローズオイルは世界生産量の約7割を占め、ブルガリアはローズオイルの産地として最も高く評価されています。
      </p>
      <p :style="{marginTop: '3em', marginBottom: '3em'}">
        <LazyLoadImg
        imgsrc="http://www.eniobonchev.com/media/1572/bgr_sample_185.jpg"
        alt="バラの農場の写真 by Enio Boncev Website"
        :style="{paddingTop: '50%'}"/>
        <span>引用: バラの農場の写真 by <a href="http://www.eniobonchev.com/about-us/our-fields/">Enio Boncev Website</a></span>
      </p>
    </section>

    <section>
      <Heading
      type="three-way"
      :title="['Rosa', 'Damascena', 'Oil']"
      :subtitle="['貴重なローズオイル']"
      message="ローズオイル1kgを抽出するには、3.5～4トンものバラを必要とします。"
      :styleOverride="{paddingBottom: '2em'}"
      />
      <p>
        5月下旬になると、「バラの谷」はピンクのバラが咲き乱れ、かぐわしい香りに包まれます。年に一度、わずか3週間しか咲かないダマスクローズを、薄暗い早朝からひとつひとつ手で丁寧に摘みとり、すぐに水蒸気蒸留法でローズオイルを抽出します。
      </p>
      <p>
        水蒸気蒸留法とは、花と水のみを使用する抽出法です。蒸留釜に花と水を入れて加熱し、香気成分が気化した水蒸気を冷やして蒸留水を採取します。この蒸留水は油層と水層に分離し、油層である黄金色の上澄み部分がローズオイル、無色透明な水層部分がローズウォーターです。この方法により抽出されたローズオイルは「ローズオットー」と呼ばれ、肌に塗っても口に入れても安全です。
      </p>
      <p>
        水蒸気蒸留法によってローズオイル1kgを抽出するためには、3.5～4トンものバラを必要とします。その貴重さゆえ、ローズオイルは金よりも高価と言われています。また、ローズオイルは合成香料では代替できないため、貴重な天然香料として大切にされ、高級ブランドの香水の原料として用いられます。
      </p>
      <p :style="{marginTop: '3em', marginBottom: '3em'}">
        <LazyLoadImg
          imgsrc="http://www.eniobonchev.com/media/1648/eb-rosober_05-2015-16.jpg"
          alt="バラの農場の写真 by Enio Boncev Website"
          :style="{paddingTop: '50%'}"/>
        <span>引用: 蒸留中の写真 by <a href="http://www.eniobonchev.com/about-us/our-distilleries/disitillery-2/">Enio Boncev Website</a></span>
      </p>
    </section>

    <Heading
    type="pale"
    :title="['Enio', 'Boncev']"
    :subtitle="['契約農場', 'エニオボンチェフ社']"
    />
    <section>
      <h2 class="section-heading">エニオボンチェフ社と約20年にわたって信頼関係を築いています。</h2>
      <p>
        メイリリィ契約農場のエニオボンチェフ社は、創業100年の歴史と伝統を誇る、ブルガリアで最初のローズオイル蒸留所のひとつです。栽培から製造にいたるまで一貫して管理しており、最高品質のローズオイル・ローズウォーターを製造できるトップメーカーです。その質の高さから、1964年の精油に関する国際会議で、ユネスコから金メダルを受賞しています。
      </p>
      <p>
        同社は無農薬有機農法でバラを栽培し、バルカン山脈にある盆地の自然の湧き水を使用して、自社のオーガニック専用蒸留所で有機ローズオイル・有機ローズウォーターを抽出します。ここで作られた製品は、ブルガリアの有機認証機関バルカン・ビオツエルトでオーガニック認証を取得しています。
      </p>
      <p>
        メイリリィはブルガリアとブルガリアンローズに対する社会貢献活動を通じ、エニオボンチェフ社と約20年にわたって長期的な信頼関係を築いています。また、定期的に現地視察を行い、継続的な品質管理に努めています。
      </p>
      <p :style="{marginTop: '3em', marginBottom: '3em'}">
        <LazyLoadImg
          imgsrc="http://www.eniobonchev.com/media/1671/12.jpg"
          alt="バラの農場の写真 by Enio Boncev Website"
          :style="{paddingTop: '50%'}"/>
        <span>引用: 昔のエニオボンチェフの写真 by <a href="http://www.eniobonchev.com/about-us/our-history/">Enio Boncev Website</a></span>
      </p>
    </section>

    <Heading
    type="pale"
    :title="['Double', 'Distillation']"
    :subtitle="['独自のダブル蒸留法']"
    />
    <section>
      <h1 class="section-heading">こだわりの製法 "ダブル蒸留法"</h1>
      <p>
        ダマスクローズを水蒸気蒸留して採取される、ローズオイルが溶け込んだ蒸留水をローズウォーターと呼びます。ローズウォーターは、一般的にはローズオイルを抽出する際の副産物とされています。最終工程で蒸留水の水面に浮くローズオイルと分離されてしまうからです。
      </p>
      <p>
        弊社製品はローズウォーター抽出のための専用釜を使用し、独自のダブル蒸留法により採取されます。そのため、通常は分離されるローズオイルが100%残留し、その含有量はブルガリア国家基準（0.02～0.04%）の2~6倍に値します。高濃度のローズオイルが含まれているので、とても強いバラの香りがします。また、ローズオイルの効果の一つである殺菌作用が働くので、防腐剤なしでも常温で5年以上腐敗しないことが確認されています。
      </p>
    </section>

    <Heading
    type="pale"
    :title="['Rose', 'Water']"
    :subtitle="['調味料としての', 'ローズウォーター']"
    />
    <section>
      <h1 class="section-heading">調味料としてのローズウォーター</h1>
      <p>
        弊社のローズウォーターは<b>“食品原料”</b>です。ローズウォーターには<b>素材の味を活かし、味をまろやかにし、コクや深みを与える</b>など、香り付けだけではなく調味料としての優れた力があります。
      </p>
      <p>
        一般的なローズウォーターは化粧品原料として輸入されるため、食品に配合する場合は“食品添加物”となり、製品には「香料」と表示されます。弊社は“食品原料”として輸入しており、原材料名に「ダマスクローズウォーター」と表示することが可能です。また、輸入業者の<b>有機JAS認定を取得しておりますので、有機JAS規格製品も提供できます。</b>
      </p>
      <p>
        ※ 化粧品原料としても使用できます。<br/>
        ※ 有機JAS規格製品をご使用の場合は、<b>原材料名に「有機ダマスクローズウォーター」と表示できます。</b>
      </p>
      
      <h1 class="section-heading">取扱製品</h1>
      <p class="section-grid">
        <span>製品名</span><span>ダマスクローズウォーター</span>
        <span>出荷単位</span><span>210kg・10kg・5kg・2kg</span>
        <span>有機認証</span><span>バルカン・ビオツェルト／有機JAS<br/>※有機認証は210kg単位のみ適応</span>
        <span>使用用途</span><span>食品原料・化粧品原料・香料</span>
        <span>備考</span><span>※食品として輸入しておりますので、原材料名に「ダマスクローズウォーター」と表示可能です。</span>
      </p>
      <p class="grid">
        <span>製品名</span><span>ダマスクローズオイル</span>
        <span>出荷単位</span><span>1kg・100g・小分け充填可</span>
        <span>有機認証</span><span>バルカン・ビオツェルト<br/>※有機認証は100g単位のみ適応</span>
        <span>使用用途</span><span>食品原料・化粧品原料・香料</span>
        <span>備考</span><span>なし</span>
      </p>
    </section>

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import HeroImage from '~/components/HeroImage.vue'
import ImageSet from '~/components/ImageSet.vue'
export default {
  components: {
    Heading,
    Footer,
    LazyLoadImg,
    HeroImage,
    ImageSet,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
