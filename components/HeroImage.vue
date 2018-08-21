<template lang="html">
  <div :class="['HeroImage', $store.state.ww.size]">

    <img class="logo" src="~/assets/img/logo.png" />
    <div class="background blur" />
    <div class="background" />

    <div class="heading">
      <h1 class="main">
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="300" data-aos-duration="500">Enrich</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="400" data-aos-duration="800">your life</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="500" data-aos-duration="1200">from</span>
        <span data-aos="fade-up" data-aos-offset="0" data-aos-delay="600" data-aos-duration="1600">Fragrance</span>
      </h1>
      <h2 class="sub">
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
  height: 95vh;

  .logo{
    position: absolute;
    top: 8vh;
    left: 5vw;
    width: calc(86px + 3vw);
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
    width: 90%;
    height: 60%;
    background: url('~/assets/img/adobe-stock__rose-aroma.jpg');
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: $border-radius;
    z-index: 1;

    &.blur{
      transform: translateY(1vh);
      filter: blur(5vw);
      opacity: 0.8;
      z-index: 1;
    }
  }
  .heading{
    overflow: visible;
    .main{
      overflow: visible;
      position: absolute;
      top: auto;
      left: 0;
      right: 0;
      bottom: calc(15vh + 0.7em);
      margin: auto;
      width: max-content;
      max-width: 86%;
      text-align: right;
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
      bottom: 7vh;
      text-align: center;
      font-size: 0.25em;
      line-height: 2;
      color: $grey;
      z-index: 3;
      span{
        display: inline-block;
        padding-bottom: 0.2em;
        line-height: 1;
      }
    }
  }

  &.md{
    font-size: 60rem;
    .heading{
      .main{
        bottom: calc(15vh + 0.7em);
      }
    }
  }
  &.lg,
  &.xl{
    font-size: 80rem;
    .heading{
      .main{
        bottom: calc(10vh + 0.7em);
      }
    }
  }
}
</style>
