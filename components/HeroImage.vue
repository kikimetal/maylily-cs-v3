<template lang="html">
  <div class="HeroImage">
    <div class="image" />
    <div class="mask" />
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.HeroImage{
  position: relative;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;
  max-height: 52vw;
  overflow: hidden;
  background: #fff;
  transform: translateX(-20vw);

  .image{
    position: absolute;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: url("~/assets/img/adobe-stock__rose-aroma.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    transform: translateX(-1px);
  }

  .mask{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('~/assets/img/heroimage-mask.png');
    // background-position: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    // transform: scale(1.01);
  }
}
</style>
