<template lang="html">
  <div :class="['page', $store.state.ww.size]">

    <HeroImage />

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
      v-for="(row, i) in $store.state.sheets.news.data"
      v-if="row.pickup"
      :key="'card-in-news-' + i"
      :title="row.title"
      :subtitle="row.subtitle"
      :align="row.align"
      :imgsrc="row.imgsrc"
      :type="row.type"
      :to="row.linkto"
      :modal="row.modal"
      :exact="true"
      :imgTransparent="true"
      :imgstyle="{backgroundSize: 'contain'}"
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
      v-for="(row, i) in $store.state.sheets.news.data"
      v-if="row.topnews"
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
  async fetch ({ store, param }) {
    store.commit('setNewsSheet')
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
