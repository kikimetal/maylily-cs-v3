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

      <!-- <div class="title-container" :style="{ textAlign: align }"> -->
      <div class="title-container">
        <span class="date" v-if="date">{{ date }}</span>
        <h1 class="title">
          <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
        </h1>
        <!-- <h2 class="subtitle" :style="{ textAlign: align }"> -->
        <h2 class="subtitle">
          <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
        </h2>
      </div>

      <!-- <div :class="['btn', {left: align === 'left'}]"> -->
      <div class="btn">
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
  font-size: 28rem;
  position: relative;
  text-align: center;
  color: $grey-9;
  overflow: visible;
  cursor: pointer;
  transform-origin: center;

  .card-img{
    margin: 0 auto;
    width: 100%;
    padding-top: 96%;
    z-index: 2;
    transition: all 1.2s ease;
    &.transparent{
      border-radius: 0 !important;
      box-shadow: none !important;
    }
  }
  &:nth-of-type(3n+1) .card-img{
    border-radius: 52% 48% 57% 43% / 54% 55% 45% 46% ;
  }
  &:nth-of-type(3n+2) .card-img{
    border-radius: 57% 43% 47% 53% / 48% 54% 46% 52% ;
  }
  &:nth-of-type(3n) .card-img{
    border-radius: 41% 59% 59% 41% / 49% 50% 50% 51%;
  }
  &:hover{
    .card-img{
      @include touchme(0.94);
      border-radius: 50% 50% 48% 52% / 51% 48% 52% 49%;
    }
  }
  &.md, &.lg, &.xl{
    .card-img{
      width: 78%;
      padding-top: 76%;
    }
  }

  .title-container{
    position: relative;
    padding: 0.2em 0.6em 0.9em;
    z-index: 3;
    text-align: center;
    line-height: 1;
    color: $grey-9;
    transition: all 0.6s $ease-out;

    .date{
      font-size: 0.55em;
      padding-top: 0.7em;
      margin-bottom: -0.5em;
      display: block;
      font-weight: 300;
      line-height: 1;
      opacity: 0.3;
    }

    .title, .subtitle{
      span{
        display: inline-block;
        padding: 0 0.06em;
        text-decoration: inherit;
      }
    }
    .title{
      font-weight: 800;
      text-transform: uppercase;
      line-height: 1.5;
      padding: 1.2em 0 0.5em;
      color: $grey-6;
    }
    .subtitle{
      padding-left: 0.1em;
      line-height: 1.5;
      font-size: 0.55em;
      font-weight: 400;
      opacity: 0.4;
      transition: all 0.6s $ease-out;
    }
  }
  &:hover{
    .title-container{
      .subtitle{
        opacity: 0.5;
        text-decoration: underline;
      }
    }
  }

  .btn{
    &.left{
      margin-left: 0.5em;
    }
    margin: 0 auto;
    margin-bottom: 0.5em;
    width: 6em;
    height: 1.6em;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3em;
    background: $white;
    border: 2px solid rgba($grey-3, 0.3);
    transition: all 0.6s ease 0.1s;
    .arrow{
      fill: $grey-3;
      transition: all 0.3s ease;
    }
    &:hover{
      border-color: rgba($grey-3, 0.6);
      .arrow{
        fill: $grey-5;
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
