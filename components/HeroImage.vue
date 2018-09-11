<template lang="html">
  <!-- <div :class="['HeroImage', $store.state.ww.size]" :style="{height: $store.state.wh.value + 'px'}"> -->
  <div :class="['HeroImage', $store.state.ww.size]">

    <img class="logo" src="~/assets/img/logo.svg" alt="メイリリィのロゴ" />
    <div class="background">
      <!-- <svg viewBox="0 0 2231.619 339.122" id="wave">
        <path id="パス_36" data-name="パス 36" class="cls-1" d="M17018,8195.115s167.035-61.788,369.479-56.327,314.064,63.206,488.52,84.558,315.367-6.6,464.1-64.317,262.531-109.673,526.631-75.162,283.1-70.783,382.887-180.97v339.122H17018Z" transform="translate(-17018 -7902.896)"/>
      </svg> -->
    </div>


    <div class="heading">
      <h1 class="big">
        <!-- <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="400" data-aos-duration="500">Enrich</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="500" data-aos-duration="800">your life</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1100">from</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="700" data-aos-duration="1500">Fragrance</span> -->
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="500" data-aos-duration="800">Life</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1100">with</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="700" data-aos-duration="1500">Fragrance</span>
      </h1>
      <h2 class="main">香りと共に生きるあなたへ</h2>
      <h2 class="sub" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1850" data-aos-duration="700">
        <span>私たちはライフスタイルの創造を通じて、</span>
        <span>心豊かな社会の実現に貢献します。</span>
      </h2>
    </div>

  </div>
</template>

<script>
export default {
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
  // margin-bottom: -6rem;
  margin-bottom: -20rem;
  // height: [JS] window.innerHeight

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
    // margin: auto;
    width: 100vw;
    // height: 130vw;
    height: 46%;
    // height: 78vw;
    background: url('~/assets/img/rose-aroma.jpg');
    background-repeat: no-repeat;
    background-position: 10% center;
    background-size: cover;
    // border-radius: $border-radius;
    // border-radius: 0 0 $border-radius $border-radius;
    // box-shadow: 0 20px 70px 0 rgba($pinkgrey, 0.3);
    z-index: 1;

    #wave{
      // fill: pink;
      fill: $white;
      position: absolute;
      top: auto;
      left: 0;
      right: 0;
      bottom: -1px;
      width: 100%;
      transform-origin: 80% 100%;
      transform: scale(1.4, 0.8);
    }
  }

  .heading{
    overflow: visible;
    .big{
      overflow: visible;
      position: absolute;
      // top: 86vw;
      // top: 54%;
      // top: 20%;
      top: 24%;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0 auto;
      width: max-content;
      height: max-content;
      max-width: 86%;
      // text-align: left;
      text-align: center;
      color: $lightgrey;
      // color: $primary;
      // color: rgba($general, 0.9);
      // color: $general;
      word-wrap: break-word;
      font-size: 1.3em;
      font-weight: bold;
      font-family: FuturaBold;
      text-shadow: 0 3px 9px $shadow;
      line-height: 1.04;
      z-index: 3;
      span{
        overflow: visible;
        display: inline-block;
        padding: 0 0.2em;
        padding-bottom: 0.2em;
      }
    }
    .main{
      position: absolute;
      // top: 56%;
      top: 52%;
      left: 0;
      right: 0;
      // color: $general;
      color: $primary;
      text-align: center;
      font-size: 24rem;
      // font-weight: bold;
      font-weight: 900;
      font-family: 'ヒラギノ角ゴ Std W8';
    }
    .sub{
      position: absolute;
      // top: 75vh;
      // top: 83vh;
      // top: 64%;
      top: 59%;
      left: 0;
      right: 0;
      bottom: auto;
      padding: 0 2em;
      text-align: center;
      font-size: 14rem;
      line-height: 2;
      // color: rgba($grey, 0.8);
      color: rgba($primary, 0.6);
      z-index: 4;
      border-radius: $border-radius;
      font-weight: bold;

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

    .background{
      #wave{
        transform: scale(1.8);
      }
    }

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
