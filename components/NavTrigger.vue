<template lang="html">
  <div
    :class="['NavTrigger', $store.state.ww.size]"
    @mouseover="$store.commit('toggleNav', true)"
    >
    <transition name="trigger">
      <svg v-show="!$store.state.isShowNav" class="bars" viewBox="0 0 53.529 51.852">
        <defs>
          <style>
            /* .cls-1, .cls-2 { fill: #bbcecd; } */
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
  font-size: 100rem;
  position: fixed;
  top: 4vw;
  right: 4vw;
  width: 1em;
  height: 1em;
  z-index: 9999;
  overflow: visible;
  cursor: pointer;
  user-select: none;

  &.md, &.lg, &.xl{
    top: 2.2vw;
    right: 2.4vw;
    width: 1.3em;
    height: 1.3em;
  }

  .bars{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    padding-bottom: 0.07em;
    width: 0.4em;
    height: 0.4em;
    z-index: 2;
    fill: $primary;
    transition: all 0.3s $ease-out;
  }
  .cls-1, .cls-2 { fill: inherit; }

  .circle{
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background: $white;
    width: 1em;
    height: 1em;
    border-radius: 50%;
    box-shadow: $shadow-set;
    z-index: 1;
    border: 0px solid $primary;
    transition: all 0.3s $ease-out;
  }
  &:hover{
    .bars{
      fill: $white;
    }
    .circle{
      border-width: 0.5em;
      // box-shadow: 0 2px 8px 0 rgba($shadow, 0.07);
      transform: scale(1.2);
    }
  }

  &.sm{
    .circle{
      display: none;
    }
    &:hover{
      .bars{
        fill: $secondary;
      }
    }
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
