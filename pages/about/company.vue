<template>
   <div :class="['page', $store.state.ww.size]">

     <Heading
       type="basic"
       pagetop
       align="left"
       title="Company"
       subtitle="会社概要"
       :styleOverride="{paddingBottom: '1em'}"
       />
      <section>
        <div class="section-grid">
          <span>社名</span><span>有限会社メイリリィ</span>
          <span>代表者</span><span>代表取締役社長  山下文江</span>
          <span>設立</span><span>1999年1月18日</span>
          <span>所在地</span>
          <div class="section-grid inner">
            <span>[本社]</span><span>〒224-0032 神奈川県横浜市都筑区茅ヶ崎中央3-1 ユニゾセンター南ビル1F TEL 045-530-4872（代表） FAX 045-530-4873</span>
            <span>[化粧品工場]</span><span>〒223-0057 神奈川県横浜市港北区新羽町1381</span>
          </div>
          <span>事業内容</span>
          <div class="section-grid inner">
            <span>オリジナルブランド事業</span><span>
              ローズダレーナ（化粧品・健康食品・飲料）製造、販売<br/>
              ガーメント（化粧品）製造、販売</span>
            <span>ブルガリアンローズ原料事業</span><span>
              ダマスクローズウォーター・ローズオイルの輸入、販売</span>
            <span>フレグランス受託製造事業</span><span>
              化粧品・フレグランス関連製品の受託製造<br/>
            	フレグランスデザイン及び調合香料の販売</span>
            <span>アカデミー事業</span><span>
              山下文江フレグランスアート＆セラピーアカデミーの運営</span>
          </div>
        </div>
      </section>

      <section>
        <h1 class="section-heading" :style="{padding: '4em 1em 1em'}">沿革</h1>
        <div class="section-grid">
          <span>1996年</span><span>サロン・ド・メイリリィ主宰</span>
          <span>1999年1月</span><span>有限会社メイリリィ設立</span>
          <span>2004年4月</span><span>化粧品製造業許可取得</span>
          <span>2004年4月</span><span>化粧品製造販売業許可取得</span>
          <span>2016年5月</span><span>有機JAS認定取得（輸入業者）</span>
          <span>2016年6月</span><span>Rose Darena発売</span>
          <span>2016年11月</span><span>GARMENT発売</span>
        </div>
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
@import '~/assets/css/myset.scss';

</style>
