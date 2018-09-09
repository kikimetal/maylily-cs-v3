<template lang="html">
  <div id="layout-default" @touchstart="()=>{}">

    <Nav />
    <NavTrigger />
    <transition name="nav-background">
      <div
      class="nav-background"
      v-if="$store.state.isShowNav"
      @click="$store.commit('toggleNav', false)"/>
    </transition>

    <div :class="['page-container', $store.state.ww.size]" role="main">
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
        once: true,
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

  // section layout
  .page > section{
    font-size: 15rem;
    padding: 2em 1.4em;
    color: $general;
    & > p{
      padding: 1em 0 0.7em;
      line-height: 1.7;
      color: rgba($general, 0.7);
      a{
        text-decoration: underline;
        color: $secondary;
        cursor: pointer;
        pointer-events: auto;
      }
    }
    & > h1{
      font-size: 1.6em;
      padding: 1em 0 0.3em;
      line-height: 1.5;
      font-weight: bold;
    }
    & > h2{
      font-size: 1.3em;
      padding: 1em 0 0em;
      line-height: 1.5;
      font-weight: bold;
      color: rgba($general, 0.9);
    }
    & > img{
      margin: 0 auto;
      max-width: 100%;
      height: auto;
      padding-right: 10%;
    }

    & > .grid{
      display: flex;
      flex-flow: column;
      line-height: 1.4;
      color: rgba($general, 0.6);
      & > *{
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: flex-start;
        background: rgba($grey, 0.12);
        border: 1px solid $white;
        padding: 0.8em 1em 0.6em;
        font-weight: bold;
        &:nth-child(even){
          background: rgba($pinkgrey, 0.14);
          font-weight: normal;
          // font-size: 0.9em;
          color: rgba($general, 0.9);
        }
      }
    }

    & > .half{
      & > div > h2{
        line-height: 1;
        font-size: 1.3em;
        padding-bottom: 1em;
        font-weight: bold;
      }
      & > div > p{
        line-height: 1.6;
        color: rgba($general, 0.7);
        padding-bottom: 3em;
      }
    }
  }

  &.md, &.lg, &.xl{
    .page > section{
      padding: 2.4em 1.4em;
      font-size: 17rem;
      max-width: 950px;
      margin: 0 auto;
      & > h1{
        padding: 1.7em 0 0;
      }
      & > h2{
        padding: 1em 0 0.6em;
      }
      & > p{
        line-height: 2;
        padding: 1.1em 0 1.3em;
      }

      & > .grid{
        display: flex;
        flex-flow: row wrap;
        line-height: 1.6;
        & > *{
          width: 20%;
          &:nth-child(even){
            width: 80%;
          }
        }
      }

      & > .half{
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
        align-items: flex-start;
        & > div{
          padding: 1em;
        }
        & > *{
          width: 49.8%;
          &:nth-child(even) *{
            transition-delay: 0.2s;
          }
        }
      }
    }
  }
}

.nav-background{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: block;
  background: rgba($grey, 0.5);
  z-index: 99;
  user-select: none;
  pointer-events: auto;
  cursor: e-resize;
}
.nav-background-enter-active {
  transition:
    opacity 0.8s ease 0.1s,
    transform 0.8s $ease-out 0.1s;
}
.nav-background-leave-active {
  transition:
    opacity 0.9s ease-out 0.2s,
    transform 0.9s $ease-out 0.2s;
}
.nav-background-leave-to {
  opacity: 0;
  transform: translateY(-60vh);
}
.nav-background-enter{
  opacity: 0;
  transform: translateY(-60vh);
}
</style>
