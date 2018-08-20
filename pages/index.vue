<template lang="html">
  <div class="page">

      <Logotype fill="rgb(230, 80, 147)"/>

      <h1 data-aos="zoom-in" class="hero-title">Enrich your life from Fragrance</h1>

      <HeroImage data-aos="fade-up" v-if="$store.state.ww.md" />

      <div class="card-container">
        <Card data-aos="fade-up" to="/website" />
        <Card data-aos="fade-up" to="/website" />
        <Card data-aos="fade-up" to="/website" />
        <Card data-aos="fade-up" to="/website" />
      </div>

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

.hero-title{
  padding: 1em 20px;
  color: $general;
  font-size: 40px;
  font-family: FuturaBold;
}

.card-container{
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 2em 0;

  & > *{
    margin: 4%;
    width: 96%;
  }
}
</style>
