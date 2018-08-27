<template lang="html">
  <div :class="['page', $store.state.ww.size]">

    <HeroImage />

    <Heading
      type="basic"
      data-aos="fade-up"
      :title="['News', 'Release']"
      subtitle="最新の情報をお届けします✨" />

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
        v-if="row.showtop"
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
        :data-aos-delay="i * 100" />
    </CardContainer>

    <Heading
      type="basic"
      data-aos="fade-up"
      :title="['Pick', 'Up']"
      subtitle="注目の情報です✨" />

    <CardContainer>
      <Card
        v-for="(row, i) in $store.state.sheets.news.data"
        v-if="row.pickup"
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
        :data-aos-delay="i * 100" />
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
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Heading,
    Card,
    CardContainer,
    HeroImage,
    Footer,
  },
  async fetch ({ store, param }) {
    store.commit('setNewsSheet')
  },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
