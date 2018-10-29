<template lang="html">
  <div :class="['page', $store.state.ww.size]">

    <HeroImage :isHome="true" />

    <Heading
    type="pale"
    :title="['Our', 'Brands']"
    :subtitle="['あなたの暮らしに彩りを届ける贈りもの']"
    :message="['']"
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
      data-aos="fade-up"
      :data-aos-offset="0"
      :data-aos-delay="getCardAosDelay(i, $store.state.ww.size)"
      />
      <!-- :imgTransparent="true" -->
      <!-- :imgstyle="{backgroundSize: 'contain'}" -->
    </CardContainer>

    <Heading
    type="three-way"
    align="left"
    :title="['Business Activities']"
    :subtitle="['事業内容']"
    :message="['メイリリィは多角的な事業を展開しています。']"
    :styleOverride="{paddingLeft: '9%'}"
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
      data-aos="fade-up"
      :data-aos-offset="0"
      :data-aos-delay="getCardAosDelay(i, $store.state.ww.size)"
      />
    </CardContainer>

    <Heading
    type="three-way"
    align="left"
    :title="['News', 'Release']"
    :subtitle="['最新情報']"
    :message="['メイリリィの最新情報をお届けします。']"
    :styleOverride="{paddingLeft: '9%'}"
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
      data-aos="fade-up"
      :data-aos-offset="0"
      :data-aos-delay="getCardAosDelay(i, $store.state.ww.size)"
      />
    </CardContainer>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'
import getCardAosDelay from '~/assets/getCardAosDelay.js'

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
  methods: {
    getCardAosDelay,
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
