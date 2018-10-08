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
  overflow: visible;

  &.sm{
    & > *{
      $width: 88%;
      width: $width;
      margin: (100% - $width) / 2;
      margin-bottom: 70px;
      &:last-child{
        margin-bottom: 60px;
      }
    }
  }

  // &.md{
  &.md, &.lg, &.xl{
    width: 78%;
    justify-content: center;
    & > *{
      // 横に2個
      $width: 48%;
      width: $width;
      margin: 0 (100% - $width * 2) / 4;
      margin-bottom: 12%;
      &:nth-last-child(1),
      &:nth-last-child(2):nth-child(odd){
        margin-bottom: 0;
      }
    }
    // センター寄せしつつ最後のカードは左寄せ
    & > *:last-child:nth-child(n+3){
      margin-right: auto;
    }
  }
  &.lg{
    width: 70%;
  }
  &.xl{
    width: 60%;
  }
  // &.lg, &.xl{
  //   width: 96%;
  //   max-width: 1200px;
  //   & > *{
  //     // 横に3個
  //     $width: 30%;
  //     width: $width;
  //     margin: (100% - $width * 3) / 6;
  //     margin-bottom: 3%;
  //   }
  // }
}
</style>
