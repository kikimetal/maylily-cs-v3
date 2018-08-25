<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading title="About Us" subtitle="企業情報" />

    <CardContainer>
      <Card
      class="link"
      v-for="(link, i) in linksInAbout"
      :key="'link-in-about-' + i"
      :title="link.title"
      :subtitle="link.subtitle"
      :to="link.to"
      :exact="link.exact"
      data-aos="fade-up"
      :data-aos-delay="i * 100"
      />
    </CardContainer>

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Card from '~/components/Card.vue'
import CardContainer from '~/components/CardContainer.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Heading,
    Card,
    CardContainer,
    Footer,
  },
  data () {
    return {
      linksInAbout: [
        {
          title: 'vision',
          subtitle: '社会貢献活動',
          to: '/about/vision',
          exact: true,
        },
        {
          title: 'message',
          subtitle: '社会貢献活動',
          to: '/about/message',
          exact: true,
        },
        {
          title: 'outline',
          subtitle: '社会貢献活動',
          to: '/about/outline',
          exact: true,
        },
        {
          title: 'csr',
          subtitle: '社会貢献活動',
          to: '/about/csr',
          exact: true,
        },
      ]
    }
  },
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
