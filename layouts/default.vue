<template>
  <div id="layout-default">
    <nav class="global">
      <Btn :to="{ path: '/', params: {} }" exact text="home" :overrideStyle="{color: 'inherit'}" />
      <Btn :to="{ path: '/image', params: {} }" exact text="image" :overrideStyle="{color: 'inherit'}" />
      <Btn :to="{ path: '/website', params: {} }" exact text="website" :overrideStyle="{color: 'inherit'}" />
    </nav>
    <nuxt/>
  </div>
</template>

<style>
#layout-default{
  background: #fff;
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

/* page transition のための設定 */
.page-container {
  width: 100%;
  min-height: 100vh;
  transform-origin: 50% calc(50vh + var(--scrollY));
}
</style>

<script>
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
