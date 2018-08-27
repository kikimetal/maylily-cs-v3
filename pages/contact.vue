<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['Contact']"
      subtitle="お問い合わせ"
      />

    <ContactForm />

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
import ContactForm from '~/components/ContactForm.vue'
export default {
  components: {
    Heading,
    Footer,
    ContactForm,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';

</style>
