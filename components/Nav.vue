<template lang="html">
  <transition :name="$store.state.ww.size === 'sm' ? 'container-sm' : 'container-md'">
    <nav
    :class="['Nav', $store.state.ww.size]" role="navigation"
    v-if="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)">
    <!-- @mouseleave="$store.commit('toggleNav', false)" -->

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
export default {
  components: {
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
  // left: 0;
  right: 0;
  bottom: 0;
  padding: 0 0 0 5vw;
  width: 100%;

  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;

  background: $white;
  // background: rgba($white, 0.6);
  color: $primary;
  z-index: 999;

  .link{
    margin-bottom: 0.5em;
    width: 90vw;
    text-transform: uppercase;
    border-bottom: 1px solid rgba($primary, 0.2);
    line-height: 1.1;
    user-select: none;
    cursor: pointer;
    pointer-events: auto;

    &:hover{
      color: $general;
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
    font-size: 42rem;
    padding: 0;
    padding-left: 7vw;
    padding-top: calc(0.6em + 1vh);
    width: 16em;
    justify-content: flex-start;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    border-left: 0.36em solid rgba($primary, 0.8);
    box-shadow: $shadow-set;
    .link{
      width: 10em;
      margin-bottom: calc(0.5em + 1vh);
    }
  }
  &.md{
    font-size: 38rem;
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
