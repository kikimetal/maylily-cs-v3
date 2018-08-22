<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading title="お問い合わ" subtitle="" />

  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
export default {
  components: {
    Heading,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

</style>
