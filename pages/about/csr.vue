<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading title="CSR" subtitle="社会貢献活動" />

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
