<template lang="html">
  <div :class="['Modal', $store.state.ww.size]">

    <transition name="background">
      <div
      class="background"
      v-show="$store.state.modal.isShow"
      @click="$store.commit('hideModal')"/>
    </transition>

    <transition name="content">
      <div class="content" v-show="$store.state.modal.isShow">
        <h1 class="title">
          <span v-for="(span, i) in $store.state.modal.content.title" :key="'modal-title-span-' + i">{{ span }}</span>
        </h1>
        <h2 class="subtitle" v-if="$store.state.modal.content.subtitle[0]">
          <span v-for="(span, i) in $store.state.modal.content.subtitle" :key="'modal-subtitle-span-' + i">{{ span }}</span>
        </h2>
        <div class="text">
          <p v-for="(p, i) in $store.state.modal.content.text" :key="'modal-text-p-' + i">{{ p }}</p>
        </div>
        <div
          class="links"
          v-if="$store.state.modal.content.links[0].word && $store.state.modal.content.links[0].to">
          <div
          v-for="(link, i) in $store.state.modal.content.links"
          :key="'modal-link-' + i">
            <a
              v-if="link.external"
              class="link"
              :href="link.to">
              {{ link.word }}
            </a>
            <router-link
              v-else
              class="link"
              :to="link.to"
              exact>
              {{ link.word }}
            </router-link>
          </div>
        </div>
      </div>
    </transition>

  </div>
</template>

<script>
export default {
  methods: {
    log () {
      console.log(this.$store.state.modal)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Modal{
  position: relative;
  z-index: 9999999;
  overflow: visible;
  .background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: $grey-3;
    background-color: rgba(0,0,0,0.4);
    -webkit-backdrop-filter: saturate(90%) blur(25px);
    backdrop-filter: saturate(90%) blur(25px);
    cursor: pointer;

    &::before{
      content: '';
      display: block;
      position: absolute;
      top: 1.5%;
      right: calc((100vw - 90vmin) / 2);
      width: 1.3em;
      height: 1.3em;
      background-image: url(~assets/img/modal/close-white.svg);
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
    }
  }
  &.md, &.lg, &.xl{
    .background::before{
      top: 5%;
    }
  }

  /* ------ content ------ */
  .content{
    -webkit-overflow-scrolling: touch;
    position: fixed;
    top: 5.5%;
    left: 0;
    right: 0;
    bottom: 5%;
    width: 94vmin;
    height: max-content;
    max-height: 90%;
    padding: 2em 5%;
    margin: auto;

    background: $white;
    color: $grey-9;
    box-shadow: $shadow-set;
    overflow-x: hidden;
    overflow-y: scroll;
    border-radius: $border-radius;

    .title{
      padding-bottom: 0.3em;
      font-size: 1.4em;
      font-weight: 700;
      line-height: 1.4;
      color: $grey-7;
      span{
        display: block;
      }
    }
    .subtitle{
      font-weight: 500;
      line-height: 1.5;
      padding: 0.8em 0;
    }
    .title, .subtitle{
      span{
        padding: 0 0.1em;
      }
    }
    .text{
      padding: 0.5em 0;
      width: 100%;
      line-height: 1.6;
      opacity: 0.7;
      p{
        padding: 0.4em 0;
      }
    }

    .links{
      overflow: visible;
      *{
        overflow: visible;
      }
      padding: 0.7em 0;
      .link{
        margin: 0.6em 0;
        padding: 0.9em;
        display: block;
        font-size: 0.9em;
        font-weight: 600;
        color: $white;
        background: $primary;
        border-radius: 3em;
        text-align: center;
        box-shadow: $shadow-set;
        line-height: 1.4;
      }
    }
  }
  &.md{
    .content{
      padding: 3% 5%;
      width: 96vw;
      height: 92vmin;
    }
  }
  &.lg, &.xl{
    .content{
      padding: 4% 5%;
      width: 92vmin;
      min-width: 800px;
      height: 84vmin;
    }
  }
  /* ------ content ------ */
}

/* animation */
.background-enter{
  opacity: 0;
  transform: scaleY(0);
}
.background-enter-active {
  transition:
    opacity ease-out .9s,
    transform $ease-out .8s;
}
.background-leave-active{
  transition: all 1.1s $ease-out;
  pointer-events: none;
  user-select: none;
}
.background-leave-to{
  opacity: 0;
}

.content-enter-active {
  transition:
    opacity .7s ease .14s,
    transform .7s $ease-out .14s;
}
.content-leave-active {
  transition:
    opacity .3s ease-out .06s,
    transform .3s $ease-out .06s;
}
.content-leave-to {
  opacity: 0;
  transform: scale(0.96);
}
.content-enter{
  opacity: 0;
  transform: scale(1.08);
}
</style>
