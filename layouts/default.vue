<template lang="html">
  <div id="layout-default" @touchstart="()=>{}">

    <Nav />
    <NavTrigger />

    <div class="page-container">
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
/* page transition のための設定 */
.page-container > div{
  width: 100%;
  min-height: 100vh;
  transform-origin: 50% calc(50vh + var(--scrollY));
}

nav.global{
  font-size: 20rem;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  width: 100%;
  height: 50px;
  padding: 0 .2em;

  display: flex;
  flex-flow: row;
  justify-content: space-around;
  align-items: center;

  color: rgb(109, 98, 119);
  background: rgba(255, 255, 255, 0.3);
  z-index: 999;
}
</style>
