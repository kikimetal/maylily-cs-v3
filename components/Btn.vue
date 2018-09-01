<template lang="html">

  <a v-if="type === 'external'"
    class="Btn"
    :href="to"
    :style="overrideStyle">
    {{ text }}
  </a>
  <router-link v-else
    class="Btn"
    :to="to"
    :exact="exact"
    :style="overrideStyle">
    {{ text }}
  </router-link>

</template>

<script>
export default {
  props: {
    type: { type: String, default: '' },
    to: { type: [Object, String], default: '/' },
    exact: { type: Boolean, default: true },
    text: { type: [String, Number], default: 'MyButton' },
    overrideStyle: { type: Object, default: null },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.Btn{
  // font-size: 20px;
  // padding: 0.5em 1.4em;
  //
  // background: rgba(255,255,255,0.2);
  // color: white;
  // border-radius: 0.3em;
  // box-shadow: 0 5px 15px 0 rgba(46,61,73,.1);
  // transition: all ease 0.2s;
  //
  // // ボタンのリンク先ページがアクティブの時
  // &.nuxt-link-exact-active{
  //   background: rgba(255,255,255,0.1);
  //   box-shadow: 0 2px 10px 0 rgba(168, 182, 193, 0.1);
  // }
  display: block;
  margin: 4em auto 1em;
  padding: 1em 3em;
  width: 96%;
  border: none;
  border-radius: 3em;
  background: $primary;
  color: white;
  font-weight: bold;
  text-align: center;
  box-shadow: $shadow-set;
  cursor: pointer;
  transition-duration: 0.7s; // transition .oem-exchange を上書き

  &.nuxt-link-exact-active{
    opacity: 0.7;
  }
}
</style>
