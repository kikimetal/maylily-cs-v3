<template>
   <div :class="['page', $store.state.ww.size]">

     <Heading
       type="basic"
       pagetop
       :title="['Brand']"
       subtitle="ブランド事業"
       />

     <Footer />
  </div>
</template>

<script>
import HEADS from '~/assets/heads.js'

import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
export default {
  components: {
    Heading,
    Footer,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

</style>
