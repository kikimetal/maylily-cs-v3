<template lang="html">
  <!-- <div :class="['HeroImage', $store.state.ww.size]" :style="{height: $store.state.wh.value + 'px'}"> -->
  <div :class="['HeroImage', $store.state.ww.size]">

    <!-- <transition> -->
    <div :class="['background', {show: isBgLoaded}]">
      <h1 class="power-word" v-if="isBgLoaded">
        <!-- <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="1100" data-aos-duration="900">Life</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="1200" data-aos-duration="1300">with</span> -->
        <span data-aos="fade-down" data-aos-offset="0" data-aos-delay="800" data-aos-duration="1300">Life with</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="1100" data-aos-duration="2100">Fragrance</span>
      </h1>
    </div>
    <!-- </transition> -->
    <img src="~/assets/img/rose01.jpg" alt="トップページの背景画像" :style="{display: 'none'}" @load="bgLoaded">
    <!-- <LazyLoadImg class="bg" imgsrc="rose01.jpg" :imgstyle="$store.state.wwsize === 'sm' ? {paddingTop: '92%'} : {paddingTop: '36%', transform: 'scale(1.4)'}" /> -->

    <div class="heading">
      <!-- <h2 class="main" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1550" data-aos-duration="900"> -->
      <h2 class="main">
        香りと共に生きるあなたへ</h2>
      <!-- <h2 class="sub" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1600" data-aos-duration="1200"> -->
      <h2 class="sub">
        <!-- <span>私たちはライフスタイルの創造を通じて</span><span v-if="$store.state.wwsize !== 'sm'">、</span> -->
        <!-- <span>心豊かな社会の実現に貢献します</span><span v-if="$store.state.wwsize !== 'sm'">。</span> -->
        <span>メイリリィはライフスタイルの創造を通じて<span v-if="$store.state.wwsize !== 'sm'">、</span></span>
        <span>幸せと彩りを届けるデザインカンパニーです<span v-if="$store.state.wwsize !== 'sm'">。</span></span>
      </h2>
    </div>

  </div>
</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    LazyLoadImg,
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
  // overflow: visible;
  position: relative;
  font-size: 40rem;
  // padding-bottom: 10vw;
  width: 100%;

  .background{
    position: relative;
    // margin-top: 16vw;
    margin-top: -2vw;
    width: 100vw;
    height: 86vw;
    overflow: hidden;
    &.show::before{
      content: "";
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
        scale-in 11s $ease-out both 0.6s,
        opacity-in 3.4s ease both 0.6s;
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
    // bottom: 24%;
    bottom: 29%;
    margin: 0 auto;
    width: max-content;
    height: max-content;
    max-width: 86%;
    text-align: center;
    color: $whitegrey;
    opacity: 0.7;
    word-wrap: break-word;
    font-size: 12vw;
    line-height: 0.9;
    letter-spacing: 0.1em;
    font-family: FuturaBold;
    text-shadow:
      0 0 5px rgba($pinkgrey, 0.5),
      0 4px 12px rgba($shadow, 0.2);
    z-index: 3;
    & > span{
      overflow: visible;
      display: inline-block;
      padding: 0 0.2em;
      padding-bottom: 0.2em;
    }
  }

  .heading{
    overflow: visible;
    position: relative;
    // padding: 0.5em 0;
    z-index: 4;
    $heading-color: $general;
    // $heading-color: $grey;
    .main{
      color: $heading-color;
      text-align: center;
      font-size: 24rem;
      font-weight: bold;
      font-weight: 900;
      padding: 2.5em 0 0.7em;
      z-index: 4;
    }
    .sub{
      padding: 0 2em 2em;
      text-align: center;
      font-size: 14rem;
      line-height: 1.8;
      font-weight: 400;
      color: $heading-color;
      border-radius: $border-radius;
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
      margin-top: -4vw;
      height: 44vw;
    }
    .power-word{
      bottom: 21%;
      font-size: 9vw;
      line-height: 0.8;
      width: min-content;
    }
    .heading{
      padding: 2em 0;
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
