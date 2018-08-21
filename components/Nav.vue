<template lang="html">
  <transition name="container">
    <nav
    class="Nav"
    v-if="$store.state.isShowNav"
    @click="$store.commit('toggleNav', false)"
    >
      <router-link
      class="link"
      v-for="(link, index) in links" :key="'link-' + index"
      data-aos="fade-left"
      data-aos-offset="0"
      :data-aos-delay="50 * index"
      :data-aos-duration="700 + 50 * index"
      :to="link.to"
      :exact="link.exact">
        {{ link.name }}
      </router-link>

    </nav>
  </transition>
</template>

<script>
import Btn from '~/components/Btn.vue'

export default {
  components: {
    Btn,
  },
  data () {
    return {
      links: [
        {
          name: 'Home',
          to: { path: '/', params: {} },
          exact: true,
        },{
          name: 'News',
          to: { path: '/image', params: {} },
          exact: true,
        },{
          name: 'Company',
          to: { path: '/website', params: {} },
          exact: true,
        },{
          name: 'Brand',
          to: { path: '/website', params: {} },
          exact: true,
        },{
          name: 'Bulgarian Rose',
          to: { path: '/website', params: {} },
          exact: true,
        },{
          name: 'OEM',
          to: { path: '/website', params: {} },
          exact: true,
        },{
          name: 'Contact',
          to: { path: '/website', params: {} },
          exact: true,
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.Nav{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding-left: 5vw;

  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: flex-start;

  background: $white;
  color: $primary;
  z-index: 999;

  .link{
    margin-bottom: 5vw;
    width: 90vw;
    font-size: 10vw;
    line-height: 1.2;
    text-transform: uppercase;
    border-bottom: 1px solid rgba($primary, 0.5);
  }
}

// transition setting
.container-enter-active {
  transition:
    opacity ease-out .5s,
    transform $ease-out .6s;
}
.container-leave-active {
  transition:
    opacity ease-out .3s,
    transform $ease-out .3s;
}
.container-leave-to {
  opacity: 0;
  transform: scale(1.3);
}
.container-enter{
  opacity: 0;
}
</style>
