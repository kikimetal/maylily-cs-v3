<template lang="html">
  <div :class="['page', $store.state.ww.size]">

    <HeroImage />

    <!-- <Heading
    type="three-way"
    align="left"
    :title="['Made', 'with', 'Fun']"
    :subtitle="['私たちもお客様も', '楽しい! 面白い! と感じるものを']"
    :message="['香りのプロフェッショナルという強みを活かし、既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。']"
    /> -->
    <Heading
    type="pale"
    :title="['Our', 'Brands']"
    :subtitle="['あなたの個性を際立たせる', '私たちからの贈りもの']"
    :message="['香りのプロフェッショナルという強みを活かし、既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。']"
    />

    <FetchLoader />

    <CardContainer>
      <Card
      v-for="(row, i) in $store.state.sheets.news.data.filter(row => row.brand)"
      :key="'card-in-news-' + i"
      :title="row.title"
      :subtitle="row.subtitle"
      :align="row.align"
      :imgsrc="row.imgsrc"
      :type="row.type"
      :to="row.linkto"
      :modal="row.modal"
      :exact="true"
      />
      <!-- :imgTransparent="true" -->
      <!-- :imgstyle="{backgroundSize: 'contain'}" -->
    </CardContainer>

    <Heading
    type="three-way"
    align="left"
    :title="['Made', 'with', 'Fun']"
    :subtitle="['私たちもお客様も', '楽しい! 面白い! と感じるものを']"
    :message="['香りのプロフェッショナルという強みを活かし、既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。']"
    />

    <FetchLoader />

    <CardContainer>
      <Card
      v-for="(row, i) in $store.state.sheets.news.data.filter(row => row.pickup)"
      :key="'card-in-news-' + i"
      :date="row.date"
      :title="row.title"
      :subtitle="row.subtitle"
      :align="row.align"
      :imgsrc="row.imgsrc"
      :type="row.type"
      :to="row.linkto"
      :modal="row.modal"
      :exact="true"
      />
    </CardContainer>

    <Heading
    type="three-way"
    align="center"
    :title="['News', 'Release']"
    :subtitle="['最新情報']"
    :message="['メイリリィの最新の情報をお届けします✨']"
    />

    <FetchLoader />

    <CardContainer>
      <Card
      v-for="(row, i) in $store.state.sheets.news.data.filter(row => row.news)"
      v-if="i < 2"
      :key="'card-in-news-' + i"
      :date="row.date"
      :title="row.title"
      :subtitle="row.subtitle"
      :align="row.align"
      :imgsrc="row.imgsrc"
      :type="row.type"
      :to="row.linkto"
      :modal="row.modal"
      :exact="true"
      />
    </CardContainer>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'

import Heading from '~/components/Heading.vue'
import Card from '~/components/Card.vue'
import CardContainer from '~/components/CardContainer.vue'
import HeroImage from '~/components/HeroImage.vue'
import FetchLoader from '~/components/FetchLoader.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Heading,
    Card,
    CardContainer,
    HeroImage,
    FetchLoader,
    Footer,
  },
//   data () {
//     return {
// $store.state.sheets.news.data.filter(row => row.news)
//     }
//   },
  async fetch ({ store, param }) {
    store.commit('setNewsSheet')
  },
  // created(){
  //   if(process.browser){
  //     console.log('created', this.$store.state.sheets.news.data)
  //   }
  // },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
