<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['Contact']"
      subtitle="お問い合わせ"
      />

    <MailForm />

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
import MailForm from '~/components/MailForm.vue'
export default {
  components: {
    Heading,
    Footer,
    MailForm,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';

</style>
