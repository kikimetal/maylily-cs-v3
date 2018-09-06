<template>
  <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['News', 'Release']"
      subtitle="ニュースリリース"
      />

    <FetchLoader />

    <CardContainer>
      <Card
        v-for="(row, i) in $store.state.sheets.news.data"
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
        data-aos="zoom-in-up"
        :data-aos-delay="i * 100" />
    </CardContainer>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'

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
  async fetch ({ store, param }) {
    store.commit('setNewsSheet')
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
