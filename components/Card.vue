<template lang="html">
  <div
  :class="['Card', $store.state.ww.size]"
  @click="handleClick">
    <router-link :to="this.type === 'modal' ? '' : to">

      <LazyLoadImg
      :class="['card-img', {transparent: imgTransparent}]"
      :imgsrc="imgsrc"
      :imgstyle="imgstyle"
      :alt="alt" />

      <div
      class="title-container"
      :style="{ textAlign: align }">
        <span class="date" v-if="date">{{ date }}</span>
        <h1 class="title">
          <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
        </h1>
        <h2 class="subtitle">
          <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
        </h2>
      </div>

      <div :class="['btn', {left: align === 'left'}]">
        <ArrowRight class="arrow"/>
      </div>

    </router-link>
  </div>
</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
import ArrowRight from '~/components/svg/ArrowRight.vue'

export default {
  components: {
    LazyLoadImg,
    ArrowRight,
  },
  props: {
    type: { type: String, default: 'link' },
    to: { type: [String, Object], default: '/' },
    imgsrc: { type: [String, Number], default: 'rose-aroma.jpg' },
    date: { type: String, default: '' },
    title: { type: [String, Number, Array], default: 'INSERT TITLE' },
    subtitle: { type: [String, Number, Array], default: 'subtitle subtitle.' },
    imgstyle: { type: Object, default: null },
    alt: { type: String, default: '画像です' },
    align: { type: String, default: 'left' },
    modal: { type: Object, default: null },
    imgTransparent: { type: Boolean, default: false },
  },
  data () {
    return {
      titleArray: typeof this.title === 'object' ? this.title : new Array(this.title),
      subtitleArray: typeof this.subtitle === 'object' ? this.subtitle : new Array(this.subtitle),
    }
  },
  methods: {
    handleClick (e) {
      const exist = this.type === 'modal' && this.modal
      if (!exist) return
      e.preventDefault()
      this.$store.commit('showModal', this.modal)
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Card{
  $card-border-radius: 24px;
  font-size: 28rem;
  position: relative;
  text-align: center;
  color: $general;
  overflow: visible;
  cursor: pointer;
  transform-origin: center;

  .card-img{
    padding-top: 98%;
    border-radius: $card-border-radius;
    box-shadow: $shadow-set-pale;
    z-index: 2;
    @include hover-touchme;

    &.transparent{
      border-radius: 0 !important;
      box-shadow: none !important;
    }
  }

  .title-container{
    position: relative;
    padding: 0.8em 0.6em 0.7em;
    z-index: 3;
    text-align: left;
    line-height: 1;
    color: $general;
    transition: all 0.6s $ease-out;

    .date{
      display: block;
      font-size: 14rem;
      font-weight: bold;
      opacity: 0.4;
    }
    .title, .subtitle{
      span{
        display: inline-block;
        padding: 0 0.06em;
      }
    }
    .title{
      font-weight: 800;
      text-transform: uppercase;
      line-height: 1.3;
      padding: 0.4em 0 0.45em;
    }
    .subtitle{
      line-height: 1.5;
      font-size: 0.55em;
      font-weight: 400;
      opacity: 0.4;
    }
    .date, .subtitle{
      padding-left: 0.1em;
    }
  }

  .btn{
    margin: 0 auto;
    margin-bottom: 1.3em;
    &.left{
      margin-left: 0.5em;
    }
    width: 3.5em;
    height: 2.2em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3em;
    background: $white;
    // box-shadow: $shadow-set;
    border: 2px solid rgba($lightgrey, 0.2);
    transition: all 0.5s $ease-out;
    .arrow{
      fill: $lightgrey;
    }
    &:hover{
      background: $lightgrey;
      transform: scale(1.2);
      .arrow{
        fill: $white;
      }
    }
  }

  &.md{
    font-size: 29rem;
  }
  &.lg{
    font-size: 31rem;
  }
  &.xl{
    font-size: 33rem;
  }
}
</style>
