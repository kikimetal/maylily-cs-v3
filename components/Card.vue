<template lang="html">
  <router-link
  class="Card"
  :to="to">
    <div class="shadow" />
    <h1 class="title">{{ title }}</h1>
    <h2 class="subtitle">{{ subtitle }}</h2>
    <LazyLoadImg class="img" :imgsrc="imgsrc"/>
  </router-link>
</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    LazyLoadImg,
  },
  props: {
    to: { type: [String, Object], default: '/' },
    imgsrc: { type: [String, Number], default: 'rose-aroma.jpg' },
    title: { type: [String, Number], default: 'INSERT TITLE' },
    subtitle: { type: [String, Number], default: 'subtitle subtitle.' },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Card{
  font-size: 26rem;
  position: relative;
  text-align: center;
  color: $primary;
  overflow: visible;
  cursor: pointer;

  transform-origin: center;
  transition: all 0.3s $ease-out;
  &:hover{
    animation: touchme 0.9s $ease-out;
    @keyframes touchme{
      0%{ transform: scale(1); }
      18%{ transform: scale(0.98); }
      100%{ transform: scale(1); }
    }
  }

  .shadow{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: $white;
    border-radius: $border-radius;
    box-shadow: $shadow-set;
    z-index: -1;
  }
  .title{
    line-height: 2;
    z-index: 2;
  }
  .subtitle{
    font-size: 0.4em;
    line-height: 1.4;
    z-index: 2;
  }
  .img{
    border-bottom-left-radius: $border-radius;
    border-bottom-right-radius: $border-radius;
    z-index: 3;
  }
}
</style>
