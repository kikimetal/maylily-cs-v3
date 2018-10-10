<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="pale"
      :title="['Contact Us']"
      subtitle="気軽にお問い合わせください"
      :styleOverride="{paddingTop: '7em'}"
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
