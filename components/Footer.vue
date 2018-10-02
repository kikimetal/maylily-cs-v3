<template lang="html">
  <footer :class="['Footer', $store.state.ww.size]" role="footer">
    <h1 class="heading"
    data-aos="fade-up"
    data-aos-duration="1600"
    data-aos-once="true">
      Upgrade<br v-if="$store.state.ww.size === 'sm'" /> your lifestyle<br v-if="$store.state.ww.size === 'sm'" /> now.
    </h1>

    <nav class="global" role="navigation"
    data-aos="fade-up"
    data-aos-offset="100"
    data-aos-once="true"
    >
      <router-link
      class="link"
      v-for="(route, index) in globalNavs" :key="'g-route-' + index"
      data-aos="fade-left"
      data-aos-offset="100"
      data-aos-delay="0"
      data-aos-once="true"
      :data-aos-duration="500 + 100 * index"
      :to="route.path"
      :exact="route.exact">
      <span class="title">{{ route.subtitle }}</span>
      <span class="slash" />
      <span class="subtitle">{{ route.title }}</span>
      </router-link>
    </nav>

    <nav class="footer" role="navigation"
    data-aos="fade-up"
    data-aos-offset="-100"
    data-aos-once="true"
    >
      <router-link
      class="link"
      v-for="(route, index) in footerNavs" :key="'f-route-' + index"
      data-aos="fade-right"
      data-aos-offset="0"
      data-aos-delay="0"
      data-aos-once="true"
      :data-aos-duration="1000 + 100 * index"
      :to="route.path"
      :exact="route.exact">
      <span class="title">{{ route.subtitle }}</span>
      <span class="slash" />
      <span class="subtitle">{{ route.title }}</span>
      </router-link>
    </nav>

    <span class="copyright">&copy; copyright Maylily Co., Ltd. all rights reserved.</span>
  </footer>
</template>

<script>
import GlobalRoutes from '~/assets/routes/global.js'
import FooterRoutes from '~/assets/routes/footer.js'
export default {
  props: {
    globalNavs: { default: () => GlobalRoutes },
    footerNavs: { default: () => FooterRoutes },
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Footer{
  font-size: 20rem;
  position: relative;
  margin-top: 10vh;
  padding: 1.5em 1.3em;
  padding-bottom: 2.8em;
  // height: 100vh;
  min-height: 800px;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  background: $grey-5;
  color: $white;
  box-shadow: 0 0 70px rgba($primary, 0.4) inset;

  @media screen and (max-width: 350px){
    font-size: 17rem;
  }

  .heading{
    $slide: 0.25em;
    position: relative;
    left: $slide;
    margin-bottom: 0.4em;
    width: 80%;
    width: max-content;
    color: $white;
    font-size: 1.3em;
    letter-spacing: 0.1em;
    line-height: 1.3;
    font-family: FuturaBold;
    overflow: visible;
    text-shadow: 0 3px 9px $shadow;
    z-index: 2;

    &::before{
      content: "";
      position: absolute;
      top: 0.9em;
      left: 0.8em - $slide;
      right: 0.8em + $slide;
      bottom: -0.6em;
      display: block;
      background: rgba($white, 0.1);
      box-shadow: $shadow-set;
      z-index: -1;
    }
  }

  nav{
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    pointer-events: none;
    .link{
      padding: 0.58em 0.2em 0.2em 0.15em;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      align-items: flex-end;
      line-height: 1;
      font-weight: 700;
      border-bottom: 1px solid rgba($white, 0.2);
      opacity: 0.8;
      pointer-events: auto;
      cursor: pointer;
      &:hover{
        transition: all 0.3s ease;
        opacity: 1;
      }
      .slash{
        display: inline-block;
        margin-left: 0.7em;
        margin-right: 0.5em;
        // width: 2px;
        width: 1px;
        height: 1em;
        border-radius: 2px;
        transform: rotate(40deg) translateY(0.1em);
        background: $white;
        opacity: 0.3;
      }
      .subtitle{
        font-size: 0.8em;
        opacity: 0.4;
      }
    }
  }
  nav.global{}
  nav.footer{
    align-items: flex-end;
    .link{
      flex-flow: row-reverse wrap;
    }
  }
  .copyright{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    line-height: 4;
    font-size: 12rem;
    color: $white;
    opacity: 0.3;
    text-align: center;
  }

  &.md{
    font-size: 24rem;
    padding: 3.6em;
  }
  &.lg, &.xl{
    height: calc(700px + 6em);
    // height: calc(50vw + 6em);
    max-height: 100vh;
    display: block;
    $padding: 11vw;
    .heading{
      font-size: 1.5em;
      position: absolute;
      top: calc(3em - 2.6vw);
      left: $padding;
      &::before{
        top: 0.9em;
        left: 0.6em;
        right: -0.4em;
        bottom: -0.5em;
      }
    }
    nav{
      position: absolute;
      // bottom: calc(7vh + 3em);
      bottom: calc(5vw + 1em);
      .link{
        padding: 1.1em 0.2em 0.2em 0.15em;
      }
    }
    nav.global{
      left: $padding;
    }
    nav.footer{
      right: $padding;
    }
    .copyright{
      line-height: 7;
      text-align: right;
      padding-right: $padding * 1.04;
    }
  }
  &.lg{
    font-size: 24rem;
  }
  &.xl{
    font-size: 30rem;
  }
}
</style>
