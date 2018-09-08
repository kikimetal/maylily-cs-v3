<template lang="html">
  <transition name="page">
    <CardContainer v-if="$store.state.sheets.news.status === 'pending'">
      <Card
        class="FetchLoader"
        v-for="(row, i) in dummy"
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
      dummy: Array(3).fill({
        type: 'link',
        linkto: '',
        imgsrc: 'dummy.svg',
        title: 'Now loading',
        subtitle: '最新の情報を読み込んでいます✨',
      }),
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.FetchLoader{
  // font-size: 22rem;
  // text-align: center;
  // font-weight: bold;
  // background: $primary;
  // color: $white;
  //
  // display: flex;
  // flex-flow: column;
  // justify-content: center;
  // align-items: center;
  // height: 100vh;
}
</style>
