<template lang="html">
  <div :class="['HeroImage', {isHome}, $store.state.ww.size]">

    <img src="~/assets/img/rose01.jpg" alt="トップページの背景画像" :style="{display: 'none'}" @load="bgLoaded">
    <div :class="['background']">
      <div :class="['image', {isBgLoaded}]" :style="{backgroundPosition: pos}" />
      <h1 v-if="isBgLoaded" class="power-word">
        <span v-if="word[0]" data-aos="fade-up" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1000">{{ word[0] }}</span>
        <span v-if="word[1]" data-aos="fade-up" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1800">{{ word[1] }}</span>
      </h1>
    </div>

    <div v-if="isHome" class="heading">
      <h2 class="main">
        香りと共に生きるあなたへ
      </h2>
      <h2 class="sub">
        <span>メイリリィはライフスタイルの創造を通じて<span v-if="$store.state.wwsize !== 'sm'">、</span></span>
        <span>幸せと彩りを届けるデザインカンパニーです<span v-if="$store.state.wwsize !== 'sm'">。</span></span>
      </h2>
    </div><!-- heading -->

  </div>
</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    LazyLoadImg,
  },
  props: {
    isHome: {default: false},
    pos: {default: 'center'},
    word: {type: Array, default: () => ['Life with', 'Fragrance']},
  },
  data () {
    return{
      isBgLoaded: false,
    }
  },
  methods: {
    bgLoaded () {
      this.isBgLoaded = true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.HeroImage{
  overflow: visible;
  position: relative;
  font-size: 40rem;
  width: 100%;
  z-index: -1;
  margin-bottom: -0.8em;
  &.isHome{
    margin-bottom: 0;
  }

  .background{
    overflow: visible;
    position: relative;
    margin-top: 2vw;
    width: 100vw;
    height: 86vw;
    .image.isBgLoaded{
      overflow: visible;
      display: block;
      width: 100%;
      height: 100%;
      background: pink;
      background: url('~/assets/img/rose01.jpg');
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      z-index: 1;
      animation:
        scale-in 12s $ease-out both 0.1s,
        opacity-in 1.5s ease both 0.1s;
      @keyframes scale-in{
        0%{ transform: scale(1.2); }
        100%{ transform: scale(1); }
      }
      @keyframes opacity-in{
        from{ opacity: 0; }
        to{ opacity: 1; }
      }
    }
  }

  .power-word{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 27%;
    margin: 0 auto;
    width: max-content;
    height: max-content;
    max-width: 86%;
    text-align: center;
    color: $grey-1;
    word-wrap: break-word;
    font-size: 12vw;
    line-height: 0.9;
    letter-spacing: 0.1em;
    font-family: FuturaBold;
    text-shadow:
      0 0 7px rgba($pinkgrey, 0.4),
      0 4px 12px rgba($shadow, 0.1);
    z-index: 3;
    opacity: 0.88;
    & > span{
      overflow: visible;
      // display: inline-block;
      display: block;
      padding: 0 0.2em;
      padding-bottom: 0.2em;
    }
  }

  .heading{
    overflow: visible;
    position: relative;
    z-index: 4;
    $heading-color: $grey-9;
    .main{
      color: $heading-color;
      text-align: center;
      font-size: 24rem;
      font-weight: bold;
      font-weight: 900;
      padding: 2.7em 0 0.7em;
      z-index: 4;
    }
    .sub{
      padding: 0 1em;
      text-align: center;
      font-size: 14rem;
      line-height: 1.8;
      font-weight: 400;
      color: $heading-color;
      opacity: 0.4;
      z-index: 4;
      line-height: 1.5;
      & > span{
        overflow: visible;
        display: inline-block;
        padding-bottom: 0.2em;
      }
    }
  }

  &.md, &.lg, &.xl{
    .logo{
      top: 8%;
      left: 5%;
      width: calc(86px + 3vw);
    }
    .background{
      // margin-top: -4vw;
      height: 44vw;
    }
    .power-word{
      bottom: 21%;
      font-size: 9vw;
      line-height: 0.8;
      // width: min-content;
    }
    .heading{
      padding: 1.2em 0 1em;
      .main{
        font-size: 4vw;
        padding: 1.8em 0 0.6em;
        -webkit-text-stroke: 1px;
      }
      .sub{
        font-size: 2.3vw;
      }
    }
  }

  &.lg{
    .heading{
      .main{
        font-size: 36rem;
      }
      .sub{
        font-size: 22rem;
      }
    }
  }
  &.xl{
    .background{
      // margin-top: 2vw;
      height: 36vw;
    }
    .power-word{
      font-size: 138rem;
    }
    .heading{
      .main{
        font-size: 44rem;
      }
      .sub{
        font-size: 26rem;
      }
    }
  }
}
</style>
