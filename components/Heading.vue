<template lang="html">
  <div :class="['Heading-container', {paddingCutTop}, {paddingCutBottom}]">

    <!-- type photogenic -->
    <div v-if="type === 'photogenic'" :class="['Heading', 'photogenic', align, $store.state.wwsize]" :style="styleOverride">
      <LazyLoadImg
        class="img"
        :imgsrc="imgsrc"
        :imgstyle="{paddingTop: $store.state.ww.size === 'sm' ? '80%' : '36%'}"
        :alt="alt"
        />
      <div class="title-container">
        <h1 class="title">
          <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
        </h1>
        <h2 class="subtitle">
          <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
        </h2>
      </div>
    </div>

    <!-- type image-only -->
    <div v-else-if="type === 'image-only'" :class="['Heading', 'image-only', align, $store.state.wwsize]" :style="styleOverride">
      <LazyLoadImg
      :imgsrc="imgsrc"
      :imgstyle="{paddingTop: $store.state.ww.size === 'sm' ? '90%' : '30%'}"
      :alt="alt"
      data-aos="zoom-out"
      data-aos-easing="ease-out-quart"
      data-aos-duration="2000"
      data-aos-delay="100"
      />
    </div>

    <!-- type three-way -->
    <div v-else-if="type === 'three-way'" :class="['Heading', 'three-way', align, { pagetop: pagetop }, $store.state.wwsize]" :style="styleOverride">
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

    <!-- type pale -->
    <div v-else-if="type === 'pale'" :class="['Heading', 'pale', align, { pagetop: pagetop }, $store.state.wwsize]" :style="styleOverride">
      <Rose class="rose"/>
      <h1 class="title">
        <span v-for="(word, i) in titleArray" :key="'title-word-' + i">{{ word }}</span>
      </h1>
      <h2 class="subtitle">
        <span v-for="(word, i) in subtitleArray" :key="'subtitle-word-' + i">{{ word }}</span>
      </h2>
    </div>

    <!-- type basic -->
    <div v-else :class="['Heading', 'basic', align, { pagetop: pagetop }, $store.state.wwsize]" :style="styleOverride">
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
import Rose from '~/components/svg/Rose.vue'

export default {
  components: {
    LazyLoadImg,
    Rose,
  },
  props: {
    type: { type: String, default: 'basic' },
    pagetop: { type: Boolean, default: false },
    imgsrc: { type: String, default: 'rose-aroma.jpg' },
    imgstyle: { type: Object, default: () => {} },
    alt: { type: String, default: '画像です' },
    title: { type: [String, Number, Array], default: 'insert title...' },
    subtitle: { type: [String, Number, Array], default: 'insert sub title...' },
    message: { type: [String, Number, Array], default: 'insert message...' },
    align: { type: String, default: 'center' },
    paddingCutTop: { type: Boolean, default: false },
    paddingCutBottom: { type: Boolean, default: false },
    styleOverride: {type: Object, default: () => {} },
  },
  data () {
    return {
      titleArray: typeof this.title === 'object' ? this.title : new Array(this.title),
      subtitleArray: typeof this.subtitle === 'object' ? this.subtitle : new Array(this.subtitle),
      messageArray: typeof this.message === 'object' ? this.message : new Array(this.message),
      imgPaddingTop: '',
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Heading-container{
  overflow: visible;
  &.paddingCutTop{
    .Heading{
      padding-top: 0 !important;
    }
  }
  &.paddingCutBottom{
    .Heading{
      padding-bottom: 0 !important;
    }
  }
}

.Heading{
  span{
    display: inline-block;
    // padding: 0 0.15em;
    padding: 0;
  }
  .title{
    font-family: FuturaBold;
    span + span{
      margin-left: 0.3em;
    }
  }
  &.center{ text-align: center; }
  &.left{ text-align: left; }
  &.right{ text-align: right; }
}

.Heading.image-only{
  overflow: hidden;
  margin-bottom: -5vw;
}

.Heading.photogenic{
  position: relative;
  font-size: 24rem;
  width: 100%;
  overflow: visible;
  .title-container{
    position: relative;
    margin: 0 auto;
    padding: 0.65em 0.6em 2em;
    width: 86%;
    overflow: visible;
    .title{
      font-size: 30rem;
      font-weight: bold;
      color: $grey-9;
    }
    .subtitle{
      font-size: 15rem;
      padding-top: 0.5em;
      color: $grey-9;
      opacity: 0.4;
    }
  }
}

.Heading.three-way{
  font-size: 20rem;
  padding: 4.2em 1em 4em;
  color: $grey-9;
  .title{
    font-size: 1em;
    font-family: FuturaBold;
    color: $grey-green;
    line-height: 1.4;
  }
  .subtitle{
    padding: 0.37em 0 0.39em;
    font-size: 1.5em;
    font-weight: bold;
    font-weight: 800;
    line-height: 1.4;
  }
  .message{
    font-size: 0.8em;
    line-height: 1.6;
    opacity: 0.5;
    span + span{
      margin-top: 0.5em;
    }
  }
  &.md, &.lg, &.xl{
    padding: 4.9em 8vw 4.7em;
    font-size: 2.3vw;
    box-sizing: content-box;
    max-width: 1000px;
    margin: 0 auto;
  }
  &.lg, &.xl{
    font-size: 29rem;
  }
  &.pagetop{
    padding-top: 8em;
  }
}

.Heading.pale{
  position: relative;
  font-size: 22px;
  padding: 4.5em 1.2em 3.6em;
  color: $grey-7;
  .rose{
    width: 3.4em;
    padding-bottom: 0.2em;
  }
  .title{
    line-height: 1.8;
  }
  .subtitle{
    font-size: 0.82em;
    font-weight: 500;
    line-height: 1.32;
    opacity: 0.6;
  }

  &.md, &.lg, &.xl{
    font-size: 2.4vw;
  }
}

.Heading.basic{
  font-size: 20rem;
  padding: 4.2em 1em 4em;
  color: $grey-9;
  .title{
    font-size: 1em;
    font-family: FuturaBold;
    color: $grey-green;
    line-height: 1.4;
  }
  .subtitle{
    padding: 0.37em 0 0.39em;
    font-size: 1.5em;
    font-weight: bold;
    font-weight: 800;
    line-height: 1.4;
  }
  &.md, &.lg, &.xl{
    padding: 4.9em 8vw 4.7em;
    font-size: 2.3vw;
    box-sizing: content-box;
    max-width: 1000px;
    margin: 0 auto;
  }
  &.xl{
    font-size: 29rem;
  }
}

.Heading.basic.pagetop{
  padding-top: 8.2em;
}

</style>
