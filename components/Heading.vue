<template lang="html">
  <div class="Heading-container">

    <!-- type photogenic -->
    <div v-if="type === 'photogenic'" class="Heading photogenic">
      <LazyLoadImg
        :imgsrc="imgsrc"
        :imgstyle="imgstyle"
        :alt="alt" />
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
    <div v-else :class="['Heading', 'basic', { pagetop: pagetop }, $store.state.ww.size]">
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

// const imgOverrideStyleWhenMdOverSize = {
//   paddingTop: '400px',
// }

export default {
  components: {
    LazyLoadImg,
  },
  props: {
    type: { type: String, default: 'basic' },
    pagetop: { type: Boolean, default: false },
    title: { type: [String, Number, Array], default: 'Heading...' },
    subtitle: { type: [String, Number, Array], default: 'sub heading...' },
    imgsrc: { type: String, default: 'kikigirl.jpg' },
    alt: { type: String, default: '画像です' },
    imgstyle: { type: Object, default: () => {} },
  },
  data () {
    return {
      titleArray: typeof this.title === 'object' ? this.title : new Array(this.title),
      subtitleArray: typeof this.subtitle === 'object' ? this.subtitle : new Array(this.subtitle),
      // imgstyleFixedMdOver: this.$store.state.ww.size === 'sm' ? this.imgstyle : {
      //   ...this.imgstyle,
      //   ...imgOverrideStyleWhenMdOverSize,
      // },
    }
  },
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

  .title{
    font-family: FuturaBold;
  }
  .subtitle{
    opacity: 0.7;
  }
  .title, .subtitle{
    span{
      display: inline-block;
      // padding-right: 0.2em;
      // padding-bottom: 0.2em;
      padding: 0.1em 0.15em;
      &:last-child{
        padding-right: 0;
      }
    }
  }

  &.basic{
    padding: 3em 0 2.5em;
    text-align: center;
    .title{
      font-size: 1.6em;
      padding: 0.1em 0;
      font-weight: bold;
      word-wrap: break-word;
    }
    .subtitle{
      font-size: 0.7em;
      padding: 0;
      // font-weight: normal;
      font-weight: bold;
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
      // padding: 1em 2em;
      padding: 1em 0.6em 0.8em;
      // width: max-content;
      width: 86%;
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

  &.basic.pagetop{
    padding: 4em 0 2em;
    font-size: 30rem;
    text-transform: uppercase;
    &.md{
      font-size: 34rem;
    }
    &.lg{
      font-size: 38rem;
    }
    &.xl{
      font-size: 42rem;
    }
  }
}

</style>
