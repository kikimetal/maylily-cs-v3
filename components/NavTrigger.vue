<template lang="html">
  <transition name="trigger">
    <img
    :class="['NavTrigger', $store.state.ww.size]"
    src="~/assets/img/bars.svg"
    alt="メニューボタン"
    v-show="!$store.state.isShowNav"
    @click="$store.commit('toggleNav')"
    />
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.NavTrigger{
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
// transition setting
.trigger-enter-active {
  transition:
    opacity ease-out .5s,
    transform $ease-out .6s;
}
.trigger-leave-active {
  transition:
    opacity ease-out .3s,
    transform $ease-out .3s;
}
.trigger-leave-to {
  opacity: 0;
  transform: scale(1.3);
}
.trigger-enter{
  opacity: 0;
}
</style>
