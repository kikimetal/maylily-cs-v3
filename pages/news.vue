<template>
  <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['News', 'Release']"
      subtitle="ニュースリリース"
      />

    <transition name="page">
      <div
        class="FetchinLoader"
        :style="{textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color: 'grey'}"
        v-if="$store.state.sheets.news.status === 'pending'"
        >
        <h1>LOADING...</h1>
        <h2>最新の情報を読み込んでいます✨</h2>
      </div>
    </transition>

    <CardContainer>
      <Card
        v-for="(row, i) in $store.state.sheets.news.data"
        :key="'card-in-news-' + i"
        :type="row.type"
        :date="row.date"
        :title="row.title"
        :subtitle="row.subtitle"
        :align="row.align"
        :imgsrc="row.imgsrc"
        :modal="row.modal"
        :exact="true"
        data-aos="fade-up"
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
export default {
  components: {
    Heading,
    Footer,
    Card,
    CardContainer,
  },
  async fetch ({ store, param }) {
    store.commit('setNewsSheet')
  },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
