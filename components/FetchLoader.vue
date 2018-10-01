<template lang="html">
  <transition name="page">
    <CardContainer v-if="$store.state.sheets.news.status !== 'fulfilled'">
      <Card
        class="FetchLoader"
        v-for="(row, i) in dummy[$store.state.sheets.news.status]"
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
        :data-aos-delay="i * 100" />
    </CardContainer>
  </transition>
</template>

<script>
import Card from '~/components/Card.vue'
import CardContainer from '~/components/CardContainer.vue'
export default {
  components: {
    Card,
    CardContainer,
  },
  data () {
    return {
      dummy: {
        pending: Array(3).fill({
          type: 'link',
          linkto: '',
          imgsrc: 'dummy.svg',
          title: 'Now loading',
          subtitle: '最新の情報を読み込んでいます✨',
        }),
        rejected: Array(3).fill({
          type: 'link',
          linkto: '',
          imgsrc: 'dummy.svg',
          title: 'Error',
          subtitle: '情報の読み込みに失敗しました。',
        }),
      }
    }
  }
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
