<template>
  <div :class="['page', $store.state.ww.size]">

    <Heading
    type="three-way"
    pagetop
    align="center"
    :title="['News', 'Release']"
    :subtitle="['最新情報']"
    :message="['メイリリィの最新情報をお届けします。']"
    />

    <FetchLoader />

    <CardContainer>
      <Card
      v-for="(row, i) in $store.state.sheets.news.data.filter(row => row.news)"
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
import Footer from '~/components/Footer.vue'
import Card from '~/components/Card.vue'
import CardContainer from '~/components/CardContainer.vue'
import FetchLoader from '~/components/FetchLoader.vue'
export default {
  components: {
    Heading,
    Footer,
    Card,
    CardContainer,
    FetchLoader,
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
