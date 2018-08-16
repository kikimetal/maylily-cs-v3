<template lang="html">
  <div class="Card">
    <h1>Card</h1>
    <LazyLoadImg :filename="imgfilename" />
  </div>

</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    LazyLoadImg,
  },
  props: {
    imgfilename: { type: String, default: 'kikigirl.jpg' },
  },
}
</script>

<style lang="scss" scoped>
.Card{
  text-align: center;
  color: #fff;
  width: 90%;
  background: thistle;
  margin: 0 auto;
  border-radius: 10px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>
