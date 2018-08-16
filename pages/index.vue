<template>
  <section class="page-container">
    <div>

      <Logotype fill="rgb(230, 80, 147)"/>
      <HeroImage v-if="$store.state.ww.md" />

      <Card />

      <Heading title="LazyLoadImg" subtitle="LazyLoadImg" />
      <LazyLoadImg filename="kikigirl.jpg"/>
      <LazyLoadImg filename="kikigirl.jpg"/>
      <LazyLoadImg filename="kikigirl.jpg"/>

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

export default {
  components: {
    Heading,
    Btn,
    LazyLoadImg,
    Logotype,
    Card,
    HeroImage,
  }
}
</script>

<style>
</style>
