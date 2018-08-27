<template lang="html">
  <div id="layout-default" @touchstart="()=>{}">

    <Nav />
    <NavTrigger />

    <div :class="['page-container', {blur: $store.state.isShowNav}]">
      <nuxt/>
    </div>

    <img src="~/assets/img/rose-aroma.jpg" :style="{display: 'none'}" alt="">

    <Modal />

  </div>
</template>

<script>
import AOS from 'aos'
import Nav from '~/components/Nav.vue'
import NavTrigger from '~/components/NavTrigger.vue'
import Modal from '~/components/Modal.vue'

export default {
  components: {
    Nav,
    NavTrigger,
    Modal,
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
      AOS.refresh()
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
  },
}
</script>

<style lang="scss">
@import '~/assets/css/myset.scss';
// AOS のスタイルをインポート
@import '~/node_modules/aos/dist/aos.css';

.page-container{
  /* page transition のための設定 */
  & > div{
    width: 100%;
    min-height: 100vh;
    transform-origin: 50% calc(50vh + var(--scrollY));
  }
}

// section layout
.page-container .page section{
  font-size: 15rem;
  padding: 2.2em 1.4em;
  color: $general;
  & > p{
    padding: 0.6em 0 0.7em;
    line-height: 1.7;
    opacity: 0.8;
  }
  & > h3{
    font-size: 1.1em;
    padding: 0.7em 0;
    line-height: 1.5;
    font-weight: bold;
  }
  & > img{
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    padding-right: 10%;
  }
}
</style>
