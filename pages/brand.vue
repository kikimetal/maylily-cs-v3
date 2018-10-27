<template>
  <div :class="['page', $store.state.ww.size]">

    <HeroImage pos="-2%" :word="['Presents', 'from Us']" />

    <Heading
    type="three-way"
    align="left"
    :title="['Fragrance', 'with', 'Fashion']"
    subtitle="GARMENT"
    :message="[
      'ガーメントはトータルファッションクリエイター 山下 武尊（やました たける）のフレグランスブランドです。',
      'カメラにレンズフィルターを装着すると表現が多彩になっていくことにインスピレーションを受け、「フレグランスフィルタリング」の哲学を提唱しています。',
      'ベースフレグランスに、香りの質感を変化させるフレグランスフィルターを重ねることで、その日の気分、シーンに合わせて自由に香りをコーディネートすることができます。',
      'ガーメントはこだわりを香りで多彩に表現できる、自由で贅沢なファッションスタイルを提案します。',
    ]"
    :styleOverride="{paddingBottom: '2em'}"
    />
    <section>
     <a href="https://www.takeruyamashita.com">
        <LazyLoadImg class="img" imgsrc="garment-colorful.jpg" :imgstyle="{borderRadius: '12px', paddingTop: $store.state.ww.size === 'sm' ? '83%' : '57%'}" />
        <div class="btn">
          <ArrowRight class="arrow"/>
        </div>
      </a>
    </section>

    <Heading
    type="three-way"
    align="left"
    :title="['Bulgarian', 'Rosa Damascena']"
    :subtitle="['Rose Darena']"
    message="
ローズダレーナは、ブルガリアンローズのビューティー＆ヘルスケアブランドです。
ブルガリア〈バラの谷〉にある自社指定農場で有機栽培された香り高いダマスクローズ。
そのダマスクローズから抽出される上質なローズオイル、ローズウォーターを贅沢に使用。
ブルガリアンローズの香りと力を、日本の技術で最大限に活かした製品づくりを心がけています。
信頼ある日本製品として、食品の一部は日本農林規格（JAS規格）の厳しい生産基準をクリアし、有機JAS認定を取得。
ローズダレーナとは、ブルガリア語で「天から与えられたバラの豊かな恵み」を意味します。
健康で美しく、心豊かなライフスタイルを願う方々のために、こだわりのブルガリアンローズをお届けします。

"
    :styleOverride="{paddingBottom: '2em'}"
    />
    <section>
      <a href="https://www.rosedarena.com">
        <LazyLoadImg class="img" imgsrc="rosedarena-ec-top.jpg" :imgstyle="{borderRadius: '12px', paddingTop: $store.state.ww.size === 'sm' ? '83%' : '57%'}" />
        <div class="btn">
          <ArrowRight class="arrow"/>
        </div>
      </a>
    </section>


    <Footer />
  </div>
</template>

<script>
import HEADS from '~/assets/heads.js'

import Heading from '~/components/Heading.vue'
import HeroImage from '~/components/HeroImage.vue'
import ImageSet from '~/components/ImageSet.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import Footer from '~/components/Footer.vue'
import ArrowRight from '~/components/svg/ArrowRight.vue'
export default {
  components: {
    Heading,
    HeroImage,
    ImageSet,
    LazyLoadImg,
    Footer,
    ArrowRight,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.img:hover{
  @include touchme;
}
.btn{
  font-size: 28rem;
  margin: 2em auto;
  &.left{
    margin-left: 0.5em;
  }
  width: 13.5em;
  max-width: 90%;
  height: 1.9em;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3em;
  background: $white;
  border: 2px solid rgba($grey-3, 0.3);
  transition: all 0.6s ease 0.1s;
  .arrow{
    fill: $grey-3;
    transition: all 0.3s ease;
  }
  &:hover{
    border-color: rgba($grey-3, 0.6);
    .arrow{
      fill: $grey-5;
    }
  }
}
</style>
