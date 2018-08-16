<template lang="html">
  <div class="LazyLoadImg" :style="{ backgroundImage: 'url(' + require('~/assets/img/' + filename) + ')' }">
    <div class="LazyLoadImg__placeholder" :class="{loaded: isLoaded}">
      <img class="LazyLoadImg__placeholder__loader-gif" src="~/assets/img/loading.svg" alt="" />
      <span class="LazyLoadImg__placeholder__loader-text">LOADING</span>
    </div>
    <img class="LazyLoadImg__fake" :src="require('~/assets/img/' + filename)" @load="loaded"/>
  </div>
</template>

<script>
export default {
  props: {
    filename: { type: String, default: 'kikigirl.jpg' },
  },
  data () {
    return {
      isLoaded: false,
    }
  },
  methods: {
    loaded () {
      this.isLoaded = true
    }
  }
}
</script>

<style lang="scss" scoped>
.LazyLoadImg{
  position: relative;
  width: 100%;
  padding-top: 100%;
  height: 0;
  overflow: hidden;

  background-color: grey;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  &__placeholder{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    --stripe-color-01: rgb(255, 240, 245);
    --stripe-color-02: rgb(202, 238, 242);
    $stripe-size: 30px;
    background: repeating-linear-gradient(90deg, var(--stripe-color-01), var(--stripe-color-01) $stripe-size, var(--stripe-color-02) $stripe-size, var(--stripe-color-02) $stripe-size*2);

    user-select: none;
    pointer-events: none;
    transition: opacity 0.5s ease-out 0.9s;

    &.loaded{
      opacity: 0;
    }

    .LazyLoadImg__placeholder__loader-gif{
      width: 210px;
      height: auto;
      transition: transform 0.5s ease-out 0.9s;
    }
    .LazyLoadImg__placeholder__loader-text{
      font-size: 24rem;
      // font-weight: lighter;
      margin-top: -0.5em;
      color: #fff;
      text-shadow: 0 2px 10px rgba(119, 92, 114, 0.45);
      transition: transform 0.5s ease-out 0.9s;
    }
    &.loaded{
      .LazyLoadImg__placeholder__loader-gif,
      .LazyLoadImg__placeholder__loader-text{
        transform: scale(0.8);
      }
    }
  }

  &__fake{
    display: none;
  }

}
</style>
