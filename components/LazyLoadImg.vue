<template lang="html">
  <div :class="['LazyLoadImg', $store.state.ww.size]" :style="imgstyleOverride">
    <div class="placeholder" :class="{loaded: isLoaded}">
      <img class="loader-gif" src="~/assets/img/loading.svg" alt="" />
      <span class="loader-text">LOADING</span>
    </div>
    <img class="fake" :src="fixedImgsrc" :alt="alt" @load="loaded"/>
  </div>
</template>

<script>
export default {
  props: {
    imgsrc: { type: String, default: 'rose-aroma.jpg' },
    imgstyle: { type: Object, default: null },
    alt: { type: String, default: '' },
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
  // $delay: 0.9s;
  $delay: 0s;

  position: relative;
  width: 100%;
  padding-top: 96%;
  height: 0;
  overflow: hidden;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 12px;

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
    background: $grey-1;
    user-select: none;
    pointer-events: none;
    box-shadow: 0 0 50px 0 rgba($grey-2, 0.1) inset;
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
      margin-top: -0.5em;
      color: $grey-3;
      font-weight: 200;
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
