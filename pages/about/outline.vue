<template>
   <div :class="['page', $store.state.ww.size]">

     <Heading
       type="basic"
       pagetop
       :title="['Outline']"
       subtitle="会社概要"
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
