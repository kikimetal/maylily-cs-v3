<template lang="html">
  <div class="Heading">
    <h1 class="Heading__title">{{ title }}</h1>
    <h2 class="Heading__subtitle">{{ subtitle }}</h2>
  </div>
</template>

<script>
export default {
  props: {
    title: { type: [String, Number], default: 'Heading...' },
    subtitle: { type: [String, Number], default: 'sub heading...' },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.Heading{
  font-size: 44rem;
  padding: 8vw 4vw 4vw;
  color: #333;
  text-align: left;

  &__title{
    font-size: 44rem;
    padding: 0.1em 0 0.2em;
    font-weight: bold;
    word-wrap: break-word;
  }
  &__subtitle{
    font-size: 20rem;
    padding: 0;
    font-weight: normal;
  }

  &__title, &__subtitle{
    // text-transform: uppercase;
    // background: $pink-gradient;
    background: $primary-gradient;
    width: max-content;
    background-clip: text;
    -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    color: transparent;
  }
}

</style>
