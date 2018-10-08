<template lang="html">
  <div v-if="reverse" class="image-set">
    <LazyLoadImg
    :imgsrc="imgsrcs[0]"
    :imgstyle="{width: '100%', paddingTop: '55%'}"
    />
    <LazyLoadImg
    :imgsrc="imgsrcs[1]"
    :imgstyle="{width: '50%', paddingTop: '30%'}"
    />
    <LazyLoadImg
    :imgsrc="imgsrcs[2]"
    :imgstyle="{width: '50%', paddingTop: '30%'}"
    />
  </div>
  <div v-else class="image-set">
    <LazyLoadImg
    :imgsrc="imgsrcs[0]"
    :imgstyle="{width: '50%', paddingTop: '30%'}"
    />
    <LazyLoadImg
    :imgsrc="imgsrcs[1]"
    :imgstyle="{width: '50%', paddingTop: '30%'}"
    />
    <LazyLoadImg
    :imgsrc="imgsrcs[2]"
    :imgstyle="{width: '100%', paddingTop: '55%'}"
    />
  </div>
</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    LazyLoadImg,
  },
  props: {
    reverse: { type: Boolean, default: false },
    imgsrcs: { type: Array, default: () => ['stock01.jpg', 'stock02.jpg', 'stock03.jpg'] },
  }
}
</script>

<style lang="scss" scoped>
.image-set{
  margin: 2em 0 3em;
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  border-radius: 12px;
}
</style>
