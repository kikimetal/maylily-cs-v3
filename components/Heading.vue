<template lang="html">
  <div class="Heading-container">

    <!-- type photogenic -->
    <div v-if="type === 'photogenic'" class="Heading photogenic">
      <LazyLoadImg
        :imgsrc="imgsrc"
        :imgstyle="imgstyle"
        :alt="alt" />
      <!-- <h1 class="title">{{ title }}</h1> -->
      <div class="title-container" data-aos="fade-up" data-aos-offset="0">
        <h1 class="title">
          <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
        </h1>
        <h2 class="subtitle">
          <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
        </h2>
      </div>
    </div>

    <!-- type big -->
    <div v-else-if="type === 'big'" class="Heading big">
      <h1>big</h1>
      <h1 class="title">
        <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
      </h1>
      <h2 class="subtitle">
        <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
      </h2>
    </div>

    <!-- type basic -->
    <div v-else class="Heading basic">
      <h1 class="title">
        <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
      </h1>
      <h2 class="subtitle">
        <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
      </h2>
    </div>

  </div>
</template>

<script>
import LazyLoadImg from '~/components/LazyLoadImg.vue'

export default {
  components: {
    LazyLoadImg,
  },
  props: {
    type: { type: String, default: '' },
    title: { type: [String, Number, Array], default: 'Heading...' },
    subtitle: { type: [String, Number, Array], default: 'sub heading...' },
    imgsrc: { type: String, default: 'kikigirl.jpg' },
    alt: { type: String, default: '画像です' },
    imgstyle: { type: Object, default: null },
  },
  data () {
    return {
      titleArray: typeof this.title === 'object' ? this.title : new Array(this.title),
      subtitleArray: typeof this.subtitle === 'object' ? this.subtitle : new Array(this.subtitle),
    }
  },
  created () {
    if (process.browser) {
      console.log(typeof this.imgsrc)
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Heading-container{
  overflow: visible;
}

.Heading{
  font-size: 24rem;
  color: $general;
  text-align: left;

  .title, .subtitle{
    span{
      display: inline-block;
      padding-right: 0.2em;
      &:last-child{
        padding-right: 0;
      }
    }
  }

  &.basic{
    padding: 8vw 0 4vw;
    .title{
      font-size: 2em;
      padding: 0.1em 0 0.2em;
      font-weight: bold;
      word-wrap: break-word;
    }
    .subtitle{
      font-size: 0.9em;
      padding: 0;
      font-weight: normal;
    }
    .title, .subtitle{
      span{
        background: $primary-gradient;
        background-clip: text;
        -webkit-background-clip: text;
        // -webkit-text-fill-color: transparent;
        color: transparent;
      }
    }
  }

  &.big{

  }

  &.photogenic{
    width: 100%;
    text-align: center;
    overflow: visible;
    padding-bottom: 1em;
    .title-container{
      position: relative;
      top: -1em;
      margin: 0 auto;
      padding: 1em 2em;
      // width: max-content;
      width: 80vw;
      background: $white;
      box-shadow: $shadow-set;
      overflow: visible;
    }
    .title{
      font-size: 30rem;
      font-weight: bold;
    }
    .subtitle{
      font-size: 15rem;
      padding-top: 0.5em;
    }
  }
}

</style>
