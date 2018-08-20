<template lang="html">
  <div class="Card">
    <h1 class="title">{{ title }}</h1>
    <LazyLoadImg class="img" :filename="imgfilename" />
  </div>

</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    LazyLoadImg,
  },
  props: {
    imgfilename: { type: [String, Number], default: 'adobe-stock__rose-aroma.jpg' },
    title: { type: [String, Number], default: 'INSERT TITLE...' },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Card{
  font-family: FuturaBold;
  text-align: center;
  color: white;
  width: 90%;
  background: $primary;
  margin: 0 auto;
  border-radius: $border-radius;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .title{
    line-height: 2.2;
  }
  .img{

  }
}
</style>
