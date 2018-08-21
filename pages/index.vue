<template lang="html">
  <div class="page">

    <HeroImage />

    <Heading data-aos="fade-up" title="News Release" subtitle="最新の情報をお届けします✨" />

    <div :class="['card-container', ...$store.state.ww.sizes]">
      <Card data-aos="fade-up" to="/website" />
      <Card data-aos="fade-up" to="/website" />
      <Card data-aos="fade-up" to="/website" />
      <Card data-aos="fade-up" to="/website" />
    </div>

  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Btn.vue'
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import Logotype from '~/components/Logotype.vue'
import Card from '~/components/Card.vue'
import HeroImage from '~/components/HeroImage.vue'
// import Converter from '~/components/Converter.vue'

export default {
  components: {
    Heading,
    Btn,
    LazyLoadImg,
    Logotype,
    Card,
    HeroImage,
    // Converter,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

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
  &.md > *{
    margin: 1%;
    width: 47%;
  }
  &.lg > *{
    margin: 1%;
    width: 31%;
  }
}
</style>
