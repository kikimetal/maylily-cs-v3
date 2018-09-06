<template lang="html">
  <div
  :class="['Card', $store.state.ww.size]"
  @click="handleClick">

    <router-link :to="this.type === 'modal' ? '' : to">

      <div class="shadow" />

      <LazyLoadImg
        class="card-img"
        :imgsrc="imgsrc"
        :imgstyle="imgstyle"
        :alt="alt" />

      <div class="title-container" :style="{ textAlign: align }">
        <span class="date" v-if="date">{{ date }}</span>
        <h1 class="title">
          <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
        </h1>
        <h2 class="subtitle">
          <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
        </h2>
      </div>

    </router-link>

  </div>
</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'
export default {
  components: {
    LazyLoadImg,
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
  $card-border-radius: $border-radius;
  font-size: 28rem;
  position: relative;
  text-align: center;
  color: $general;
  overflow: visible;
  cursor: pointer;
  transform-origin: center;

  @include hover-touchme;

  .shadow{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    background: $white;
    border-radius: $card-border-radius;
    box-shadow: $shadow-set;
    z-index: -1;
  }

  .title-container{
    position: relative;
    padding: 0.8em 0.6em 0.9em;
    z-index: 3;
    text-align: left;
    line-height: 1;

    .date{
      padding-bottom: 1.1em;
      display: block;
      font-size: 14rem;
      font-weight: bold;
      color: rgba($general, 0.4);
    }
    .title, .subtitle{
      span{
        display: inline-block;
        padding: 0 0.05em;
        &:last-child{
          padding-right: 0;
        }
      }
    }
    .title{
      font-weight: bold;
      text-transform: uppercase;
      line-height: 1.1;
    }
    .subtitle{
      padding: 0.4em 0 0;
      line-height: 1.3;
      font-size: 15rem;
      font-weight: bold;
      color: rgba($general, 0.6);
    }
    .date, .subtitle{
      padding-left: 0.1em;
    }
    .date + .title{
      padding-bottom: 0.1em;
    }
  }

  .card-img{
    border-top-left-radius: $card-border-radius;
    border-top-right-radius: $card-border-radius;
    z-index: 2;
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
