<template lang="html">
  <div
  :class="['Modal', $store.state.ww.size]"
  @click="$store.commit('hideModal')">

    <transition name="background">
      <div class="background" v-show="$store.state.modal.isShow" />
    </transition>

    <transition name="content">
      <div class="content" v-show="$store.state.modal.isShow">
        <h1 class="title">
          <span v-for="(span, i) in $store.state.modal.content.title" :key="'modal-title-span-' + i">{{ span }}</span>
        </h1>
        <h2 class="subtitle">
          <span v-for="(span, i) in $store.state.modal.content.subtitle" :key="'modal-subtitle-span-' + i">{{ span }}</span>
        </h2>
        <div class="text">
          <p v-for="(p, i) in $store.state.modal.content.text" :key="'modal-text-p-' + i">{{ p }}</p>
        </div>
        <div
          class="links"
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
    </transition>

  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Modal{
  position: relative;
  font-size: 20rem;
  z-index: 9999999;
  overflow: visible;

  .background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: rgba(darken(desaturate($primary, 10%), 10%), 0.88);
    background: rgba(desaturate($primary, 25%), 0.3);
    cursor: pointer;
  }

  .content{
    -webkit-overflow-scrolling: touch;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 92vmin;
    height: 95%;
    padding: 1em;
    margin: auto;

    background: $white;
    color: $general;
    font-weight: bold;
    box-shadow: $shadow-set;
    overflow-x: hidden;
    overflow-y: scroll;
    border-radius: 8px;

    line-height: 2; // TODO: remove this

    .title{
      font-size: 1.3em;
    }
    .title, .subtitle{
      span{
        padding: 0 0.1em;
      }
    }
    .text{
      padding: 1.3em 0;
      width: 100%;
      background: $shadow;
    }

    .links{
      .link{
        padding: 1em 2em;
        background: $primary;
        color: $white;
      }
    }
  }

  &.md{
    .content{
      width: 96vw;
      height: 92vmin;
    }
  }
  &.lg, &.xl{
    .content{
      width: 92vmin;
      min-width: 800px;
      height: 84vmin;
    }
  }
}

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
