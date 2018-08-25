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
  align-items: center;
  // padding: 2em 0;
  overflow: visible;

  &.sm{
    & > *{
      margin: 5%;
      width: 90%;
    }
  }
  &.md{
    width: 88%;
    & > *{
      margin: 1%;
      width: 48%;
    }
  }
  &.lg, &.xl{
    width: 1100px;
    & > *{
      margin: calc(7 / 6 * 1%);
      width: 31%;
    }
  }

  // センター寄せしつつ最後のカードは左寄せの場合
  // &.md, &.lg, &.xl{
  // justify-content: center;
  //   & > *:last-child:nth-child(n+3){
  //     margin-right: auto;
  //   }
  // }
}
</style>
