<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading title="Message" subtitle="代表挨拶" />

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
