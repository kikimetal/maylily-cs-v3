<template lang="html">
  <footer :class="['Footer', $store.state.ww.size]" role="footer">
    <h1 class="heading"
    data-aos="zoom-out"
    data-aos-duration="1600"
    data-aos-once="true">
      Upgrade<br v-if="$store.state.ww.size === 'sm'" /> your lifestyle<br v-if="$store.state.ww.size === 'sm'" /> now.
    </h1>

    <nav class="global" role="navigation">
      <router-link
      class="link"
      v-for="(route, index) in globalNavs" :key="'g-route-' + index"
      :to="route.path"
      :exact="route.exact">
      <span class="title">{{ route.subtitle }}</span>
      <span class="slash" />
      <span class="subtitle">{{ route.title }}</span>
      </router-link>
    </nav>

    <nav class="footer" role="navigation">
      <router-link
      class="link"
      v-for="(route, index) in footerNavs" :key="'f-route-' + index"
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
  font-size: 16rem;
  position: relative;
  margin-top: 6em;
  padding: 1.5em 2em;
  padding-bottom: 6em;
  min-height: 40em;
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  align-items: center;
  background: $grey-1;
  color: $grey-10;
  box-shadow: 0 0 70px rgba($grey-5, 0.15) inset;

  @media screen and (max-width: 350px){
    font-size: 15rem;
  }

  .heading{
    $slide: 0.25em;
    position: relative;
    left: $slide;
    margin-bottom: 0.4em;
    width: 80%;
    width: max-content;
    // color: $white;
    color: $grey-1;
    font-size: 1.3em;
    letter-spacing: 0.1em;
    line-height: 1.3;
    font-family: FuturaBold;
    overflow: visible;
    text-shadow:
      0 3px 9px $shadow,
      0 0 4px $shadow;
    z-index: 2;

    &::before{
      content: "";
      position: absolute;
      top: 0.9em;
      left: 0.8em - $slide;
      right: 0.8em + $slide;
      bottom: -0.6em;
      display: block;
      background: rgba($grey-3, 0.6);
      box-shadow: $shadow-set;
      z-index: -1;
    }
  }

  nav{
    overflow: visible;
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
      border-bottom: 1px solid rgba($grey-9, 0.16);
      opacity: 0.8;
      pointer-events: auto;
      cursor: pointer;

      &:hover{
        transition: all 0.3s ease;
        opacity: 1;
      }
      &.nuxt-link-exact-active{
        cursor: default;
        color: $grey-6;
        border-bottom-width: 5px;
        margin-bottom: -4px;
      }

      .slash{
        display: inline-block;
        margin-left: 0.7em;
        margin-right: 0.5em;
        width: 1px;
        height: 1em;
        border-radius: 2px;
        transform: rotate(40deg) translateY(0.1em);
        background: $grey-3;
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
    bottom: 2em;
    line-height: 4;
    font-size: 12rem;
    color: $grey-9;
    opacity: 0.4;
    text-align: center;
  }

  &.sm{
    nav{
      .link{
        line-height: 1.6;
      }
    }
  }
  &.md, &.lg, &.xl{
    font-size: 17rem;
    padding: 3.6em;
    min-height: 35em;
  }
  &.lg, &.xl{
    max-height: 100vh;
    display: block;
    $padding: 11vw;
    .heading{
      font-size: 1.5em;
      position: absolute;
      top: 3.4em;
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
      bottom: 7em;
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
      bottom: 3.6vw;
      line-height: 1;
      text-align: right;
      padding-right: $padding * 1.04;
    }
  }
}
</style>
