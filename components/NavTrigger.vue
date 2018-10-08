<template lang="html">
  <div
  :class="['NavTrigger', {hide: $store.state.isShowNav}, $store.state.ww.size]"
  @click="$store.commit('toggleNav', true)">
    <transition name="trigger">
      <svg
        v-show="!$store.state.isShowNav"
        :class="['bars', {top: $store.state.isScrollTop}]"
        viewBox="0 0 53.529 51.852"
        >
        <defs>
          <style>
            .cls-2 {
              font-size: 17px;
              font-weight: 500;
              letter-spacing: 0.007em;
            }
          </style>
        </defs>
        <g id="シンボル_12_2" data-name="シンボル 12 – 2" transform="translate(-1734 -110.942)">
          <rect id="長方形_9" data-name="長方形 9" class="cls-1" width="53.53" height="6" rx="3" transform="translate(1734 138.677)"/>
          <path id="パス_22" data-name="パス 22" class="cls-1" d="M3.824,0H49.706c2.112,0,3.824,1.343,3.824,3s-1.712,3-3.824,3H3.824C1.712,6,0,4.657,0,3S1.712,0,3.824,0Z" transform="translate(1734 156.794)"/>
          <g id="グループ化_16" data-name="グループ化 16" transform="translate(1737.563 110.942)">
            <text id="Menu" class="cls-2" transform="translate(0 17)"><tspan x="0" y="0">Menu</tspan></text>
          </g>
        </g>
      </svg>
    </transition>
    <transition name="trigger">
      <div v-show="!$store.state.isShowNav" class="circle" />
    </transition>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.NavTrigger{
  font-size: 40rem;
  position: fixed;
  top: 5.6vw;
  right: 5.8vw;
  width: 1em;
  height: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999999;
  overflow: visible;
  cursor: pointer;
  user-select: none;
  pointer-events: auto;

  &.hide{
    pointer-events: none;
  }

  .bars{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 0.1em;
    width: 0.96em;
    height: 0.96em;
    z-index: 2;
    fill: $grey-7;
    transition: all 0.3s $ease-out;
    &.top{
      fill: rgba($grey-7, 0.5);
    }
  }
  .cls-1, .cls-2 { fill: inherit; }

  $circle-size: 2.4em;
  .circle{
    flex: 0 0 auto;
    background: $white;
    width: $circle-size;
    height: $circle-size;
    border-radius: 50%;
    box-shadow: $shadow-set;
    z-index: 1;
    border: 0px solid $primary;
    transition: all 0.6s $ease-out;
  }
  &:hover{
    .bars{
      fill: $white;
      transform: scale(1.1);
    }
    .circle{
      border-width: $circle-size / 2;
      transform: scale(1.2);
    }
  }

  &.sm{
    .circle{
      display: none;
    }
    &:hover{
      .bars{
        fill: $grey-green;
      }
    }
  }
}
// transition setting
@keyframes trigger-fade{
  from{
    opacity: 0;
    transform: scale(1.2);
  }
  to{
    opacity: 1;
    transform: scale(1);
  }
}
.trigger-enter-active {
  animation: trigger-fade 0.9s ease both;
}
.trigger-leave-active {
  animation: trigger-fade 0.4s ease reverse both;
}
</style>
