<template>
   <div :class="['page', $store.state.ww.size]">

    <HeroImage pos="-2%" :word="['About', 'Maylily']" />

    <Heading
      type="three-way"
      align="left"
      :title="['Made', 'with', 'Fun']"
      :subtitle="['私たちもお客様も', '楽しい! 面白い! と感じるものを']"
      :message="[
        '香りのプロフェッショナルという強みを活かし、既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。',
        '既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。'
      ]"
    />

    <CardContainer>
      <Card
      class="link"
      v-for="(link, i) in linksInAbout"
      :key="'link-in-about-' + i"
      :title="link.title"
      :subtitle="link.subtitle"
      :to="link.to"
      :exact="link.exact"
      :imgsrc="link.imgsrc"
      align="center"
      data-aos="fade-up"
      :data-aos-offset="0"
      :data-aos-delay="getCardAosDelay(i, $store.state.ww.size)"
      />
    </CardContainer>

    <Footer />
  </div>
</template>

<script>
import getCardAosDelay from '~/assets/getCardAosDelay.js'

import Heading from '~/components/Heading.vue'
import Card from '~/components/Card.vue'
import CardContainer from '~/components/CardContainer.vue'
import Footer from '~/components/Footer.vue'
import HeroImage from '~/components/HeroImage.vue'

export default {
  components: {
    Heading,
    Card,
    CardContainer,
    Footer,
    HeroImage,
  },
  methods: {
    getCardAosDelay,
  },
  data () {
    return {
      linksInAbout: [
        {
          title: 'Vision',
          subtitle: '社会貢献活動。香りのプロフェッショナルという強みを活かし、既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。',
          to: '/about/vision',
          imgsrc: 'stock01.jpg',
          exact: true,
        },
        {
          title: '代表挨拶',
          subtitle: '社会貢献活動。香りのプロフェッショナルという強みを活かし、既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。',
          to: '/about/message',
          imgsrc: 'stock02.jpg',
          exact: true,
        },
        {
          title: '会社概要',
          subtitle: '会社概要。香りのプロフェッショナルという強みを活かし、既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。',
          to: '/about/company',
          imgsrc: 'stock03.jpg',
          exact: true,
        },
        {
          title: '社会貢献活動',
          subtitle: '社会貢献活動。香りのプロフェッショナルという強みを活かし、既存の枠にとらわれない新しいライフスタイルやプロダクトを提案いたします。',
          to: '/about/csr',
          imgsrc: 'stock01.jpg',
          exact: true,
        },
      ]
    }
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.page{
  .local-nav-container{
    font-size: 22rem;
    margin: auto;
    width: 90%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;

    .link{
      padding: 0.3em;
    }
  }
}
</style>
