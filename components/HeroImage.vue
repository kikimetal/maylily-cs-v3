<template lang="html">
  <!-- <div :class="['HeroImage', $store.state.ww.size]" :style="{height: $store.state.wh.value + 'px'}"> -->
  <div :class="['HeroImage', $store.state.ww.size]">

    <img class="logo" src="~/assets/img/logo.svg" alt="メイリリィのロゴ" />
    <div class="background" />
    <!-- <LazyLoadImg class="bg" imgsrc="rose01.jpg" :imgstyle="$store.state.wwsize === 'sm' ? {paddingTop: '92%'} : {paddingTop: '36%', transform: 'scale(1.4)'}" /> -->

    <div class="heading">
      <h1 class="big">
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="300" data-aos-duration="800">Life</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="400" data-aos-duration="1100">with</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="500" data-aos-duration="1500">Fragrance</span>
      </h1>
      <h2 class="main" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1350" data-aos-duration="900">
        香りと共に生きるあなたへ</h2>
      <h2 class="sub" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1550" data-aos-duration="1200">
        <span>私たちはライフスタイルの創造を通じて</span><span v-if="$store.state.wwsize !== 'sm'">、</span>
        <span>心豊かな社会の実現に貢献します</span><span v-if="$store.state.wwsize !== 'sm'">。</span>
      </h2>
    </div>

  </div>
</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    LazyLoadImg,
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
  height: 100vh;
  margin-bottom: -5rem;

  .logo{
    position: absolute;
    top: 5%;
    left: 5vw;
    width: calc(120px);
    height: auto;
    z-index: 2;
  }

  .background{
    overflow: visible;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 53%;
    background: url('~/assets/img/rose01.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    z-index: 1;
  }

  .bg{
    position: relative;
    top: 2%;
    box-shadow: 0 0 30px 0 $white inset;
  }

  .heading{
    overflow: visible;
    .big{
      overflow: visible;
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      width: max-content;
      height: max-content;
      max-width: 86%;
      text-align: center;
      color: $lightgrey;
      word-wrap: break-word;
      font-size: 1.3em;
      font-weight: bold;
      font-family: FuturaBold;
      // text-shadow: 0 3px 9px $shadow;
      // text-shadow: 0 4px 12px rgba($shadow, 0.2);
      text-shadow: 0 4px 12px rgba($shadow, 0.2);
      line-height: 0.9;
      z-index: 3;
      span{
        overflow: visible;
        display: inline-block;
        padding: 0 0.2em;
        padding-bottom: 0.2em;
      }
    }
    $main-pos: 68%;
    .main{
      position: absolute;
      // top: 52%;
      top: $main-pos;
      left: 0;
      right: 0;
      // background: pink;
      color: darken($primary, 14%);
      text-align: center;
      font-size: 24rem;
      font-weight: bold;
      -webkit-text-stroke: 0.6px;
      z-index: 4;
    }
    .sub{
      position: absolute;
      // top: 59%;
      top: $main-pos + 7%;
      left: 0;
      right: 0;
      bottom: auto;
      padding: 0 2em;
      text-align: center;
      font-size: 14rem;
      line-height: 1.8;
      font-weight: bold;
      // color: rgba($grey, 0.8);
      color: rgba(darken($primary, 24%), 0.5);
      border-radius: $border-radius;
      z-index: 4;

      span{
        overflow: visible;
        display: inline-block;
        padding-bottom: 0.2em;
        line-height: 1;
      }
    }
  }

  &.sm{
    // margin-bottom: 10vw;

    // .background{
    //   #wave{
    //     transform: scale(1.8);
    //   }
    // }

    // .heading{
    //   .sub{
    //     line-height: 1.7;
    //     margin: auto;
    //     padding: 1.3em 0;
    //     width: 90%;
    //     background: $white;
    //     box-shadow: $shadow-set-pale;
    //   }
    // }
  }

  &.md, &.lg, &.xl{ // .HeroImage
    font-size: 60rem;
    // height: 90vh;

    .logo{
      top: 8%;
      left: 5%;
      width: calc(86px + 3vw);
    }

    .background{
      // height: 80%;
    }

    .heading{
      .big{
        // top: auto;
        // bottom: calc(15vh + 0.7em);
        // text-align: right;
        font-size: 1.2em;
        line-height: 0.9;
        width: min-content;
      }
      .sub{
        // top: auto;
        // bottom: 5vh;
        // font-size: 18rem;
      }
    }
  }
  &.lg, &.xl{
    font-size: 80rem;
    .heading{
      .big{
        // font-size: 1.1em;
        // bottom: calc(10% + 0.7em);
      }
      .sub{
        font-size: 22rem;
      }
    }
  }
}
</style>
