<!-- Objectの配列を受け取り要素の連続を返す -->
<template lang="html">
  <div class="Converter">
    <div
    class="Converter__inner"
    v-for="(row, index) in contents"
    :key="'content-' + index">
      <div v-if="!row.el || row.el === 'div'">{{ row.value }}</div>
      <p v-if="row.el === 'p'">{{ row.value }}</p>
      <h1 v-if="row.el === 'h1'">{{ row.value }}</h1>
    </div>
  </div>
</template>

<script>
const defaultArray = [{
  el: "h1",
  value: "HELOOOOOOO",
},{
  el: "p",
  value: "HELOOOOOOO",
}]
export default {
  props: {
    contents: { type: [String, Object, Array], default: () => defaultArray },
  }
}
</script>

<style lang="scss" scoped>
.Converter{
  color: purple;
}
</style>
