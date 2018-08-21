<template lang="html">
  <div :class="['HeroImage', $store.state.ww.size]">

    <img class="logo" src="~/assets/img/logo.png" />
    <div class="background">
      <span />
      <span />
      <span />
      <span />
    </div>

    <div class="heading">
      <h1 class="main">
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="300" data-aos-duration="500">Enrich</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="400" data-aos-duration="800">your life</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="500" data-aos-duration="1200">from</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1600">Fragrance</span>
      </h1>
      <h2 class="sub" data-aos="fade-up" data-aos-offset="0" data-aos-delay="1700" data-aos-duration="700">
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
  font-size: 45rem;
  width: 100%;
  height: 88vh;

  .logo{
    position: absolute;
    top: 5vh;
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
    margin: auto;
    width: 90vw;
    height: 90vw;
    background: url('~/assets/img/adobe-stock__rose-aroma.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    // border-radius: $border-radius;
    box-shadow: 0 20px 70px 0 rgba($pinkgrey, 0.3);
    z-index: 1;

    & > span{
      position: absolute;
      display: block;
      border-radius: 4px;
      background: $lightgrey;
      box-shadow: 0 20px 70px 0 rgba($pinkgrey, 0.8);

      $weight: 3px;
      $length: 62px;
      $pos: 10px;

      &:nth-child(1){
        top: $pos;
        left: -$pos;
        width: $length;
        height: $weight;
      }
      &:nth-child(2){
        top: -$pos;
        left: $pos;
        width: $weight;
        height: $length;
      }
      &:nth-child(3){
        right: -$pos;
        bottom: $pos;
        width: $length;
        height: $weight;
      }
      &:nth-child(4){
        right: $pos;
        bottom: -$pos;
        width: $weight;
        height: $length;
      }
    }
  }

  .heading{
    overflow: visible;
    .main{
      overflow: visible;
      position: absolute;
      top: 10vh;
      left: 0;
      right: 0;
      bottom: 0;
      margin: auto;
      width: max-content;
      height: max-content;
      max-width: 86%;
      text-align: left;
      color: $lightgrey;
      word-wrap: break-word;
      font-size: 1em;
      font-weight: bold;
      font-family: FuturaBold;
      text-shadow: 0 3px 9px $shadow;
      z-index: 3;
      span{
        display: inline-block;
        padding: 0 0.2em;
        padding-bottom: 0.2em;
      }
    }
    .sub{
      position: absolute;
      top: auto;
      left: 0;
      right: 0;
      bottom: 1vh;
      text-align: center;
      font-size: 14rem;
      line-height: 2;
      color: $grey;
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
    margin-bottom: 10vw;

    .heading{
      .sub{
        margin: auto;
        padding: 1em 0;
        width: 90%;
        background: $white;
        box-shadow: 0 10px 40px 0 $shadow;
      }
    }
  }

  &.md, &.lg, &.xl{ // .HeroImage
    font-size: 60rem;
    height: 90vh;

    .logo{
      top: 8vh;
      left: 5vw;
      width: calc(86px + 3vw);
    }

    .background{
      height: 60%;
    }

    .heading{
      .main{
        top: auto;
        bottom: calc(15vh + 0.7em);
        text-align: right;
      }
      .sub{
        bottom: 5vh;
        font-size: 24rem;
      }
    }
  }
  &.lg, &.xl{
    font-size: 80rem;
    .heading{
      .main{
        bottom: calc(10vh + 0.7em);
      }
    }
  }
}
</style>
