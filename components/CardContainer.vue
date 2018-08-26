<template lang="html">
  <div :class="['CardContainer', $store.state.ww.size]">
    <slot></slot>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.CardContainer{
  margin: auto;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-start;
  // padding: 2em 0;
  overflow: visible;

  &.sm{
    & > *{
      margin: 5%;
      width: 90%;
    }
  }
  &.md{
    width: 86%;
    & > *{
      // 横に2個
      margin: 1%;
      margin-bottom: 4%;
      width: 48%;
    }
  }
  &.lg, &.xl{
    width: 96%;
    max-width: 1200px;
    & > *{
      // 横に3個
      margin: calc(7 / 6 * 1%);
      margin-bottom: 3%;
      width: 31%;
    }
  }

  // センター寄せしつつ最後のカードは左寄せの場合
  &.md, &.lg, &.xl{
  justify-content: center;
    & > *:last-child:nth-child(n+3){
      margin-right: auto;
    }
  }
}
</style>
