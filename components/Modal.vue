<template lang="html">
  <div
  :class="['Modal', $store.state.ww.size]"
  @click="$store.commit('hideModal')">

    <transition name="background">
      <div class="background" v-show="$store.state.modal.isShow" />
    </transition>

    <transition name="content">
      <div class="content" v-show="$store.state.modal.isShow">
        <h1 class="title">{{ $store.state.modal.content.title }}</h1>
        <h2 class="subtitle">{{ $store.state.modal.content.subtitle }}</h2>
        <div class="text">
          <p v-for="(p, i) in $store.state.modal.content.text" :key="'modal-text-p-' + i">{{ p }}</p>
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
  cursor: pointer;
  overflow: visible;

  .background{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    // background: rgba(darken(desaturate($primary, 10%), 10%), 0.88);
    background: rgba(desaturate($primary, 25%), 0.3);
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

    line-height: 2;

    .title{
      font-size: 1.3em;
    }
    .text{
      padding: 1.3em 0;
      width: 100%;
      background: $shadow;
    }
  }

  &.md, &.lg, &.xl{
    width: 96vmin;
    height: 88vmin;
  }
}

.background-enter{
  opacity: 0;
  transform: scaleY(0);
}
.background-enter-active {
  transition:
    opacity ease-out 1s,
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
    opacity .8s ease .2s,
    transform .6s $ease-out .2s;
}
.content-leave-active {
  transition:
    opacity ease-out .3s,
    transform $ease-out .3s;
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
