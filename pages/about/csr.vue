<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['CSR']"
      subtitle="社会貢献活動"
      />

      <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Heading,
    Footer,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

</style>
