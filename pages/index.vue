<template lang="html">
  <section class="page-container">
    <div>

      <Logotype data-aos="fade-up" fill="rgb(230, 80, 147)"/>
      <HeroImage data-aos="fade-up" v-if="$store.state.ww.md" />

      <Card data-aos="fade-up" />

      <h1 data-aos="fade-up" :style="{fontSize: '70px', padding: '100px 0'}">HELLO</h1>

      <Heading data-aos="fade-up" title="LazyLoadImg" subtitle="LazyLoadImg" />
      <LazyLoadImg data-aos="fade-up" filename="kikigirl.jpg"/>
      <LazyLoadImg filename="kikigirl.jpg"/>
      <LazyLoadImg filename="kikigirl.jpg"/>

      <Converter data-aos="fade-up" />

    </div>
  </section>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Btn.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import Logotype from '~/components/Logotype.vue'
import Card from '~/components/Card.vue'
import HeroImage from '~/components/HeroImage.vue'
import Converter from '~/components/Converter.vue'

import AOS from 'aos'

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
.content{
  white-space: pre-line;
}
</style>
