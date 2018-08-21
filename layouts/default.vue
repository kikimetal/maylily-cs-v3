<template lang="html">
  <div id="layout-default" @touchstart="()=>{}">
    <!-- <nav class="global">
      <Btn :to="{ path: '/', params: {} }" exact text="home" :overrideStyle="{color: 'inherit'}" />
      <Btn :to="{ path: '/image', params: {} }" exact text="image" :overrideStyle="{color: 'inherit'}" />
      <Btn :to="{ path: '/website', params: {} }" exact text="website" :overrideStyle="{color: 'inherit'}" />
    </nav> -->
    <img :class="['bars', $store.state.ww.size]" src="~/assets/img/bars.svg" alt="メニューボタン">
    <div class="page-container">
      <nuxt/>
    </div>
  </div>
</template>

<script>
import AOS from 'aos'
import Btn from '~/components/Btn.vue'

export default {
  components: {
    Btn,
  },
  data () {
    return {}
  },
  methods: {
    setPropertyScrollY () {
      (document.body || document.documentElement).style.setProperty('--scrollY', `${window.scrollY}px`)
    },
    setWindowWidthToStore () {
      this.$store.commit('setww')
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
// AOS のスタイルをインポート
@import '~/node_modules/aos/dist/aos.css';
@import '~/assets/css/myset.scss';

#layout-default{
  background: $white;
  overflow-x: hidden;
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

.bars{
  position: fixed;
  top: 5vh;
  right: 5vw;
  width: calc(30px);
  height: auto;
  z-index: 9999;

  &.md, &.lg, &.xl{
    top: 8vh;
    right: 5vw;
    width: calc(20px + 1.6vw);
  }
}

/* page transition のための設定 */
.page-container > div{
  width: 100%;
  min-height: 100vh;
  transform-origin: 50% calc(50vh + var(--scrollY));
}
</style>
