<template lang="html">
  <div :class="['page', $store.state.ww.size]">

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
.page{
  .card-container{
    margin: auto;
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-items: center;
    padding: 2em 0;

  }
  &.sm{
    .card-container{
      & > *{
        margin: 5%;
        width: 90%;
      }
    }
  }
  &.md{
    .card-container{
      width: 88%;
      & > *{
        margin: 1%;
        width: 48%;
      }
    }
  }
  &.lg, &.xl{
    .card-container{
      width: 1100px;
      & > *{
        margin: calc(7 / 6 * 1%);
        width: 31%;
      }
    }
  }
}
</style>
