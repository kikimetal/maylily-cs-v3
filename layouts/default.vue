<template lang="html">
  <div id="layout-default" @touchstart="()=>{}">

    <Nav />
    <NavTrigger />

    <div :class="['page-container', {blur: $store.state.isShowNav}]">
      <nuxt/>
    </div>

    <img src="~/assets/img/rose-aroma.jpg" :style="{display: 'none'}" alt="">

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
  padding: 1.5em 1.4em;
  line-height: 1.7;
  color: $general;
  p{
    // padding: 0.4em 0 1.6em;
    padding-top: 0.4em;
  }
  h1{
    // font-family: FuturaBold;
    margin-bottom: 0.5em;
    font-size: 2.1em;
    font-weight: bold;
    line-height: 1.2;
    // color: rgba($general, 0.3);
    color: $primary;
    text-transform: uppercase;
    border-bottom: 1px solid rgba($general, 0.2);
  }
  h2{
    font-size: 1.2em;
    line-height: 2;
    font-weight: bold;
    // color: $primary;
  }
  img{
    margin: 0 auto;
    max-width: 100%;
    height: auto;
    padding-right: 10%;
  }
}

</style>
