<template lang="html">
  <div class="Heading">
    <h1 class="Heading__title">
      {{ title }}
    </h1>
    <h2 class="Heading__subtitle">
      {{ subtitle }}
    </h2>
  </div>
</template>

<script>
export default {
  props: [
    "title", "subtitle",
  ],
}
</script>

<style lang="scss">
.Heading{
  font-size: 44rem;

  padding: 0.9em 0.5em 0em;
  text-align: left;
  color: #333;

  &__title{
    font-size: 44rem;
    line-height: 1.1;
    font-weight: bold;
    word-wrap: break-word;
  }
  &__subtitle{
    font-size: 20rem;
    line-height: 1.5;
    font-weight: normal;
  }

  &__title, &__subtitle{
    text-transform: uppercase;
    background: linear-gradient(90deg, rgb(255, 172, 190) 0%, rgb(226, 171, 255) 100%);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

</style>
