<template lang="html">
  <div id="layout-default" @touchstart="()=>{}">

    <router-link to="/">
      <Logotype :class="['logo', {hide: !$store.state.isScrollTop}]" />
    </router-link>

    <Nav />
    <NavTrigger />
    <transition name="nav-background">
      <div
      class="nav-background"
      v-if="$store.state.isShowNav && $store.state.ww.size !== 'sm'"
      @click="$store.commit('toggleNav', false)"/>
    </transition>

    <div :class="['page-container', $store.state.ww.size]" role="main">
      <nuxt/>
    </div>

    <!-- 読み込んでおきたい画像 -->
    <!-- TODO: 非同期読み込みで画像のURLにアクセスするだけみたいな処理へ -->
    <img src="~/assets/img/rose01.jpg" :style="{display: 'none'}" alt="">

    <Modal />

  </div>
</template>

<script>
import AOS from 'aos'
import Nav from '~/components/Nav.vue'
import NavTrigger from '~/components/NavTrigger.vue'
import Modal from '~/components/Modal.vue'
import Logotype from '~/components/Logotype.vue'

export default {
  components: {
    Nav,
    NavTrigger,
    Modal,
    Logotype,
  },
  methods: {
    setPropertyScrollY () {
      (document.body || document.documentElement).style.setProperty('--scrollY', `${window.scrollY}px`)
      this.$store.commit('setIsScrollTop')
      // const exist = window.scrollY < 100
      // if (this.isScrollTop === exist) return
      // this.isScrollTop = exist
    },
    setWindowSize () {
      this.$store.commit('setWindowWidth')
      this.$store.commit('setWindowHeight')
    },
    handleScroll () {
      this.setPropertyScrollY()
    },
    handleResize () {
      this.setWindowSize()
      AOS.refresh()
    },
  },

  created () {
    if (process.browser) {
      this.setWindowSize()
      this.setPropertyScrollY()
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
      AOS.init({
        offset: 200,
        easing: 'ease-out-cubic',
        duration: 600,
        delay: 0,
        // once: true,
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

.logo{
  position: fixed;
  top: 5.7vw;
  left: 5.7vw;
  width: calc(104px + 1vw);
  height: auto;
  fill: $grey-7;
  z-index: 2;
  cursor: pointer;
  transition: all 1.2s $ease-out;
  &.hide{
    opacity: 0;
    pointer-events: none;
    visibility: hidden;
  }
}

.page-container{
  /* page transition のための設定 */
  & > div{
    width: 100%;
    min-height: 100vh;
    transform-origin: 50% calc(50vh + var(--scrollY));
  }

  // section layout
  section{
    overflow: visible;
    font-size: 15rem;
    padding: 0 1.4em;
    color: $grey-9;
    p{
      padding: 0.7em 0;
      line-height: 1.8;
      color: $grey-6;
      a{
        text-decoration: underline;
        color: $grey-green;
        cursor: pointer;
        pointer-events: auto;
      }
    }
    .section-heading{
      font-size: 1.2em;
      line-height: 1.7;
      font-weight: 600;
    }
    p + .section-heading{
      padding-top: 2em;
    }
    .section-sub-heading{
      font-size: 1.1em;
      line-height: 1.6;
      font-weight: 600;
    }

    .section-grid{
      display: flex;
      flex-flow: column;
      line-height: 1.4;
      color: $grey-6 !important;
      & > *{
        font-size: 1em;
        width: 100%;
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: stretch;
        background: rgba($grey-5, 0.1);
        border: 1px solid $white;
        padding: 18px;
        font-weight: 600;
        &:nth-child(even){
          font-size: 0.9em;
          background: rgba($pinkgrey, 0.1);
          color: $grey-7;
          font-weight: 300;
        }
      }
      &.inner{
        padding: 0;
        border: 0;
        background: none;
      }
    }

    .flex3 > *{
      padding-bottom: 4em;
    }
  }

  &.md, &.lg, &.xl{
    section{
      padding: 0.5em 8vw;
      font-size: 17rem;
      box-sizing: content-box;
      max-width: 1000px;
      margin: 0 auto;

      .section-grid{
        display: flex;
        flex-flow: row wrap;
        line-height: 1.6;
        & > *{
          width: 20%;
          &:nth-child(even){
            width: 80%;
          }
        }
        &.inner{
          & > *{
            width: 26%;
            &:nth-child(even){
              width: 74%;
            }
          }
        }
      }

      .flex3{
        display: flex;
        flex-flow: row wrap;
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

  &.lg, &.xl{
    section{
      .flex3{
        display: flex;
        flex-flow: row wrap;
        // justify-content: space-between;
        align-items: flex-start;
        & > div{
          padding: 1em;
        }
        & > *{
          padding: 1em;
          width: 33.3%;
          &:nth-child(3n + 2) *{
            transition-delay: 0.2s;
          }
          &:nth-child(3n + 3) *{
            transition-delay: 0.4s;
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
  background: rgba($grey-5, 0.5);
  z-index: 99;
  user-select: none;
  pointer-events: auto;
  cursor: pointer;
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
