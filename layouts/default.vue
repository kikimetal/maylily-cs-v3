<template lang="html">
  <div id="layout-default" @touchstart="()=>{}">

    <Nav />
    <NavTrigger />

    <div :class="['page-container', {blur: $store.state.isShowNav}]">
      <nuxt/>
    </div>

  </div>
</template>

<script>
import AOS from 'aos'
import Nav from '~/components/Nav.vue'
import NavTrigger from '~/components/NavTrigger.vue'

export default {
  components: {
    Nav,
    NavTrigger,
  },
  methods: {
    setPropertyScrollY () {
      (document.body || document.documentElement).style.setProperty('--scrollY', `${window.scrollY}px`)
    },
    setWindowWidthToStore () {
      this.$store.commit('setWindowWidth')
    },
    handleScroll () {
      this.setPropertyScrollY()
    },
    handleResize () {
      this.setWindowWidthToStore()
    },
  },
  created () {
    if (process.browser) {
      this.setWindowWidthToStore()
      this.setPropertyScrollY()
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
      AOS.init({
        offset: 200,
        easing: 'ease-out-cubic',
        duration: 600,
        delay: 0,
      })
    }
  },
  destroyed () {
    if (process.browser) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
  }
}
</script>

<style lang="scss">
@import '~/assets/css/myset.scss';
// AOS のスタイルをインポート
@import '~/node_modules/aos/dist/aos.css';

#layout-default{
  background: $white;
  overflow-x: hidden;
}

.page-container{
  /* page transition のための設定 */
  & > div{
    width: 100%;
    min-height: 100vh;
    transform-origin: 50% calc(50vh + var(--scrollY));
  }

  /* Nav が見えている時の背景エフェクト */
  &.blur{
    filter: blur(40px);
  }
}
</style>
