<template lang="html">
  <div class="page">

      <Logotype fill="rgb(230, 80, 147)"/>
      <HeroImage v-if="$store.state.ww.md" />

      <Card />

      <Heading data-aos="fade-up" title="LazyLoadImg" subtitle="LazyLoadImg" />
      <LazyLoadImg data-aos="fade-up" filename="kikigirl.jpg"/>
      <LazyLoadImg data-aos="fade-up" filename="kikigirl.jpg"/>
      <LazyLoadImg data-aos="fade-up" filename="kikigirl.jpg"/>

      <Converter data-aos="fade-up" />

  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Btn.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import Logotype from '~/components/Logotype.vue'
import Card from '~/components/Card.vue'
import HeroImage from '~/components/HeroImage.vue'
import Converter from '~/components/Converter.vue'

export default {
  components: {
    Heading,
    Btn,
    LazyLoadImg,
    Logotype,
    Card,
    HeroImage,
    Converter,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.page{

}
</style>
