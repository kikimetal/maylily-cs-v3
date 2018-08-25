<template lang="html">
  <router-link
  class="Card"
  :to="to">

    <div class="shadow" />
    <LazyLoadImg
      class="img"
      :imgsrc="imgsrc"
      :imgstyle="imgstyle"
      :alt="alt" />
    <span class="date" v-if="date">{{ date }}</span>
    <div class="title-container">
      <h1 class="title">
        <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
      </h1>
      <h2 class="subtitle">
        <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
      </h2>
    </div>

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
    date: { type: String, default: '' },
    title: { type: [String, Number, Array], default: 'INSERT TITLE' },
    subtitle: { type: [String, Number, Array], default: 'subtitle subtitle.' },
    imgstyle: { type: Object, default: null },
    alt: { type: String, default: '画像です' },
  },
  data () {
    return {
      titleArray: typeof this.title === 'object' ? this.title : new Array(this.title),
      subtitleArray: typeof this.subtitle === 'object' ? this.subtitle : new Array(this.subtitle),
    }
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
    // border-radius: $border-radius;
    box-shadow: $shadow-set;
    z-index: -1;
  }

  .date{
    font-size: 0.8em;
    position: absolute;
    top: 0.3em;
    left: 0.3em;
    background: rgba($white, 0.3);
    padding: 0.2em 0.7em;
    color: $grey;
    z-index: 3;
  }

  .title-container{
    position: relative;
    top: -1em;
    padding: 0.6em;
    // background: $white;
    z-index: 3;
  }

  .title, .subtitle{
    line-height: 1.2;
    span{
      display: inline-block;
      padding-right: 0.2em;
      &:last-child{
        padding-right: 0;
      }
    }
  }
  .subtitle{
    font-size: 0.4em;
  }

  .img{
    // border-bottom-left-radius: $border-radius;
    // border-bottom-right-radius: $border-radius;
    z-index: 2;
  }
}
</style>
