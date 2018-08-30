<template lang="html">
  <div :class="['LazyLoadImg', $store.state.ww.size]" :style="imgstyleOverride">
    <div class="placeholder" :class="{loaded: isLoaded}">
      <img class="loader-gif" src="~/assets/img/loading.svg" alt="" />
      <span class="loader-text">LOADING</span>
    </div>
    <img class="fake" :src="fixedImgsrc" @load="loaded"/>
  </div>
</template>

<script>
export default {
  props: {
    imgsrc: { type: String, default: 'kikigirl.jpg' },
    imgstyle: { type: Object, default: null },
  },
  data () {

    const isExternal = this.imgsrc.indexOf('http') === 0
    const fixedImgsrc = isExternal ? this.imgsrc : require('~/assets/img/' + this.imgsrc)

    return {
      isLoaded: false,
      fixedImgsrc: fixedImgsrc,
      imgstyleOverride: {
        backgroundImage: 'url(' + fixedImgsrc + ')',
        ...this.imgstyle,
      },
    }
  },
  methods: {
    loaded () {
      this.isLoaded = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.LazyLoadImg{
  // 読み込み後の待機時間
  $delay: 0.4s;

  position: relative;
  width: 100%;
  padding-top: 90%;
  height: 0;
  overflow: hidden;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &.md, &.lg, &.xl{
    padding-top: 400px;
  }

  .placeholder{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    // $color01: rgb(255, 240, 245);
    $color02: rgb(202, 238, 242);
    // $stripe-size: 30px;
    // background: repeating-linear-gradient(90deg, $color01, $color01 $stripe-size, $color02 $stripe-size, $color02 $stripe-size*2);
    background: $color02;

    user-select: none;
    pointer-events: none;
    transition: opacity 0.5s ease-out $delay;

    &.loaded{
      opacity: 0;
    }

    .loader-gif{
      width: 60px;
      height: auto;
      transition: transform 0.5s ease-out ($delay + 0.3s);
    }
    .loader-text{
      font-size: 24rem;
      // font-weight: lighter;
      margin-top: -0.5em;
      color: $white;
      text-shadow: 0 2px 10px rgba(119, 92, 114, 0.45);
      transition: transform 0.5s ease-out 0.9s;
    }
    &.loaded{
      .loader-gif,
      .loader-text{
        transform: scale(0.8);
      }
    }
  }

  .fake{
    display: none;
  }

}
</style>
