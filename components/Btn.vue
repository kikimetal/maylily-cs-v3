<template lang="html">

  <router-link v-if="type === 'link'"
    class="Btn"
    :to="to"
    :exact="exact"
    :style="overrideStyle">
    {{ text }}
  </router-link>

  <div v-else
    class="Btn"
    :style="overrideStyle">
    {{ text }}
  </div>

</template>

<script>
export default {
  props: {
    type: { type: String, default: "link" },
    to: { type: [Object, String], default: '/' },
    exact: { type: Boolean, default: true },
    text: { type: [String, Number], default: 'MyButton' },
    overrideStyle: { type: Object, default: null },
  },
}
</script>

<style lang="scss">
.Btn{
  font-size: 20px;
  padding: 0.5em 1.4em;

  background: rgba(255,255,255,0.2);
  color: white;
  border-radius: 0.3em;
  box-shadow: 0 5px 15px 0 rgba(46,61,73,.1);
  transition: all ease 0.2s;

  // ボタンのリンク先ページがアクティブの時
  &.nuxt-link-exact-active{
    background: rgba(255,255,255,0.1);
    box-shadow: 0 2px 10px 0 rgba(168, 182, 193, 0.1);
  }
}
</style>
