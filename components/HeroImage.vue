<template lang="html">
  <div
  :class="['HeroImage', ...$store.state.ww.sizes]">
    <h1
    class="heading">
      <span :style="{display: 'inline-block'}" data-aos="fade-up" data-aos-delay="100" data-aos-duration="300">Enrich</span>
      <span :style="{display: 'inline-block'}" data-aos="fade-up" data-aos-delay="200" data-aos-duration="600">your life</span>
      <span :style="{display: 'inline-block'}" data-aos="fade-up" data-aos-delay="300" data-aos-duration="1200">from</span>
      <span :style="{display: 'inline-block'}" data-aos="fade-up" data-aos-delay="400" data-aos-duration="2000">Fragrance</span>
    </h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.HeroImage{
  font-size: 40rem;
  position: relative;
  width: 100%;
  height: 100vh; // override js
  background: $grey-gradient;

  .heading{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: max-content;
    max-width: 100%;
    height: min-content;
    padding: 1em 0;
    font-family: FuturaBold;
    color: $general;
    line-height: 1.2;
  }

  &.md{
    font-size: 5vw;
  }
}
</style>
