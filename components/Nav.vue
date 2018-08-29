<template lang="html">
  <transition name="container">
    <nav
    :class="['Nav', $store.state.ww.size]"
    v-if="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)"
    >
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
import ROUTES from '~/assets/routes.js'
export default {
  components: {
  },
  props: {
    routes: { default: () => ROUTES }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.Nav{
  font-size: 9.2vw;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0 0 0 5vw;

  display: flex;
  flex-flow: column wrap;
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

    .subtitle{
      display: block;
      font-size: 0.36em;
    }
    .title{
      display: block;
      font-weight: bold;
    }
  }

  &.md, &.lg, &.xl{
    font-size: 46rem;
    padding: 0;
    align-items: center;
    .link{
      width: 9em;
    }
  }
}

// transition setting
.container-enter-active {
  transition:
    opacity ease-out .5s,
    transform $ease-out .3s;
}
.container-enter{
  opacity: 0;
  // transform: scale(1.2);
}
.container-leave-active {
  transition:
    opacity ease-out .4s .2s,
    transform $ease-out .6s;
}
.container-leave-to {
  opacity: 0;
  transform: scale(1.06);
  // transform: translateX(5vw);
}
</style>
