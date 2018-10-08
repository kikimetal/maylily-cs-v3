<template lang="html">
  <transition :name="$store.state.ww.size === 'sm' ? 'container-sm' : 'container-md'">
    <nav
    :class="['Nav', $store.state.ww.size]" role="navigation"
    v-if="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)">

      <ArrowRight class="arrow" />

      <router-link
        class="link"
        v-for="(route, index) in routes" :key="'route-' + index"
        data-aos="fade-left"
        data-aos-offset="0"
        :data-aos-delay="50 * index"
        :data-aos-duration="700 + 50 * index"
        :to="route.path"
        :exact="route.exact">
        <span class="subtitle">{{ route.subtitle }}</span>
        <span class="title">{{ route.title }}</span>
      </router-link>

    </nav>
  </transition>
</template>

<script>
import GlobalRoutes from '~/assets/routes/global.js'
import ArrowRight from '~/components/svg/ArrowRight.vue'
export default {
  components: {
    ArrowRight,
  },
  props: {
    routes: { default: () => GlobalRoutes }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.Nav{
  font-size: 8.8vw;
  position: fixed;
  top: 0;
  left: auto;
  right: 0;
  bottom: 0;
  padding: 0 0 0 5vw;
  width: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;

  background: $white;
  color: $grey-7;
  z-index: 999;

  .arrow{
    position: absolute;
    top: 7vw;
    right: 7vw;
    transform: scale(1.6);
    fill: $grey-2;
    pointer-events: none;
    z-index: -1;
  }

  .link{
    margin-bottom: 0.5em;
    width: 90vw;
    text-transform: uppercase;
    border-bottom: 1px solid rgba($grey-7, 0.2);
    line-height: 1.1;
    user-select: none;
    cursor: pointer;
    pointer-events: auto;
    &:hover{
      color: $grey-9;
    }
    .subtitle{
      display: block;
      font-size: 0.36em;
      transition: all 0.3s ease 0s;
      opacity: 0.8;
    }
    .title{
      display: block;
      font-weight: bold;
      @include hover-touchme(0.96);
      width: max-content;
      word-wrap: break-word;
      font-family: FuturaBold;
      letter-spacing: -1px;
      transition: color 0.6s ease 0s;
    }
  }

  &.md, &.lg, &.xl{
    font-size: 4.2vw;
    padding: 0;
    padding-left: 10vw;
    padding-top: calc(1em + 8vh);
    padding-bottom: 100px;
    // width: 68%;
    width: 58%;
    justify-content: flex-start;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    box-shadow: $shadow-set;

    .arrow{
      top: 2vw;
      left: 2.2vw;
    }

    .link{
      width: 76%;
      margin-bottom: calc(0.5em + 1.6vh);
    }
  }
  &.lg, &.xl{
    font-size: 36rem;
  }
}

// transition setting sm
.container-sm-enter-active {
  transition:
    opacity ease-out .5s,
    transform $ease-out .3s;
}
.container-sm-enter{
  opacity: 0;
}
.container-sm-leave-active {
  transition:
    opacity $ease-out .4s .2s,
    transform $ease-out .6s;
}
.container-sm-leave-to {
  opacity: 0;
  transform: scale(1.06);
}
// transition setting over md
.container-md-enter-active {
  transition:
    opacity ease-out .9s,
    transform $ease-out .9s;
}
.container-md-enter{
  opacity: 0;
  transform: translateX(20vw);
}
.container-md-leave-active {
  transition:
    opacity 0.7s $ease-out 0.1s,
    transform 0.7s $ease-out 0.1s;
}
.container-md-leave-to {
  opacity: 0;
  transform: translateX(18vw);
  // transform: translateX(5vw);
}
</style>
