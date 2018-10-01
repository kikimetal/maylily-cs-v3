<template lang="html">
  <div class="Heading-container">

    <!-- type photogenic -->
    <div v-if="type === 'photogenic'" :class="['Heading', 'photogenic', align, $store.state.wwsize]">
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

    <!-- type graffical -->
    <div v-else-if="type === 'graffical'" :class="['Heading', 'graffical', align, $store.state.wwsize]">
      <h1>graffical</h1>
      <h1 class="title">
        <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
      </h1>
      <h2 class="subtitle">
        <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
      </h2>
    </div>

    <!-- type three-way -->
    <div v-else-if="type === 'three-way'" :class="['Heading', 'three-way', align, { pagetop: pagetop }, $store.state.wwsize]">
      <h1 class="title">
        <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
      </h1>
      <h2 class="subtitle">
        <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
      </h2>
      <h3 class="message">
        <span v-for="(word, i) in messageArray" :key="'subtitle-word-' + i">{{ word }}</span>
      </h3>
    </div>

    <!-- type basic -->
    <div v-else :class="['Heading', 'basic', align, { pagetop: pagetop }, $store.state.wwsize]">
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
    type: { type: String, default: 'basic' },
    pagetop: { type: Boolean, default: false },
    imgsrc: { type: String, default: 'kikigirl.jpg' },
    imgstyle: { type: Object, default: () => {} },
    alt: { type: String, default: '画像です' },
    title: { type: [String, Number, Array], default: 'insert title...' },
    subtitle: { type: [String, Number, Array], default: 'insert sub title...' },
    message: { type: [String, Number, Array], default: 'insert message...' },
    align: { type: String, default: 'center' },
  },
  data () {
    return {
      titleArray: typeof this.title === 'object' ? this.title : new Array(this.title),
      subtitleArray: typeof this.subtitle === 'object' ? this.subtitle : new Array(this.subtitle),
      messageArray: typeof this.message === 'object' ? this.message : new Array(this.message),
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
  .title{ font-family: FuturaBold; }
  span{
    display: inline-block;
    padding: 0.1em 0.12em;
  }
  &.center{ text-align: center; }
  &.left{ text-align: left; }
  &.right{ text-align: right; }
}

.Heading.graffical{
  background: pink;
}

.Heading.photogenic{
  font-size: 24rem;
  width: 100%;
  overflow: visible;
  padding-bottom: 1em;
  .title-container{
    position: relative;
    top: -1em;
    margin: 0 auto;
    padding: 1em 0.6em 0.8em;
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

.Heading.three-way{
  font-size: 20rem;
  padding: 3.7em 1em 2.1em;
  color: $general;
  .title{
    font-size: 1em;
    // color: $primary;
    color: $secondary;
  }
  .subtitle{
    padding: 0.6em 0 0.5em;
    font-size: 1.5em;
    font-weight: bold;
    font-weight: 800;
    line-height: 1.15;
  }
  .message{
    font-size: 0.8em;
    line-height: 1.5;
    opacity: 0.5;
  }
  &.md, &.lg, &.xl{
    padding: 2.7em 5vw 2em;
    font-size: 2.3vw;
  }
  &.xl{
    padding: 2.7em 6vw 2em;
    font-size: 31rem;
  }
}

.Heading.basic{
  font-size: 24rem;
  padding: 3.7em 0.6em 2.1em;
  color: $general;
  .title{
    position: relative;
    font-size: 1.6em;
    padding: 0 0 0.4em;
    color: $primary;
    font-weight: bold;
    word-wrap: break-word;
    letter-spacing: 1px;
    text-shadow: 0 1px 5px rgba($primary, 0.2);
    &::before{
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0.22em;
      width: 300px;
      height: 2px;
      margin: 0 auto;
      display: block;
      background: rgba($primary, 0.24);
      z-index: -1;
    }
  }
  .subtitle{
    font-size: 0.6em;
    padding: 0;
    padding-top: 0.1em;
    font-weight: 400;
    // opacity: 0.6;
    // span{
    //   background: $general;
    //   background-clip: text;
    //   -webkit-background-clip: text;
    //   -webkit-text-fill-color: transparent;
    // }
  }

  &.md, &.lg, &.xl{
    padding: 8vw 5vw 7vw;
    font-size: 3.3vw;
  }
  &.lg, &.xl{
    font-size: 34rem;
  }
}

.Heading.basic.pagetop{
  padding: 6em 0 4em;
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

</style>
