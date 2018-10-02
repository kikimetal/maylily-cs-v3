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
      margin: 5%;
      width: 90%;
    }
  }
  &.md{
    width: 86%;
    & > *{
      // 横に2個
      $width: 45%;
      width: $width;
      margin: (100% - $width * 2) / 4;
      margin-bottom: 4%;
    }
  }
  &.lg, &.xl{
    width: 96%;
    max-width: 1200px;
    & > *{
      // 横に3個
      $width: 30%;
      width: $width;
      margin: (100% - $width * 3) / 6;
      margin-bottom: 3%;
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
