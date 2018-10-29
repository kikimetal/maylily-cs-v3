<template>
   <div :class="['page', $store.state.ww.size]">

    <HeroImage pos="-2%" :word="['Corporate', 'Profile']" />

    <Heading
      type="three-way"
      align="left"
      :title="['Create New Lifestyle']"
      :subtitle="['生活文化を創造する']"
      :message="[
        'メイリリィは「衣・食・住・健・美」を事業領域に定め、生活文化創造企業としてを事業を展開しています。',
        'あらゆる事業活動を通じて豊かな社会づくりに貢献し、すべてのステークホルダーから信頼される良き企業市民を目指しています。',
        'その礎となる企業理念をはじめ、その実現を支えるビジョン、価値観を紹介します。'
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
          title: '企業理念',
          subtitle: '当社の企業理念をご紹介します。',
          to: '/about/vision',
          imgsrc: 'about/vision.jpg',
          exact: true,
        },
        {
          title: '代表挨拶',
          subtitle: '代表取締役社長 山下文江から皆様にご挨拶申し上げます。',
          to: '/about/message',
          imgsrc: 'about/fumie.jpg',
          exact: true,
        },
        {
          title: '会社概要',
          subtitle: '当社の基本情報をご案内します。',
          to: '/about/company',
          imgsrc: 'about/company.jpg',
          exact: true,
        },
        {
          title: '社会貢献活動',
          subtitle: '積極的な社会貢献活動に取り組んでいます。',
          to: '/about/csr',
          imgsrc: 'about/csr.jpg',
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
