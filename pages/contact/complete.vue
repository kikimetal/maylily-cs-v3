<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="pale"
      pagetop
      align="left"
      :title="['Contact Us']"
      subtitle="お問い合わせありがとうございました。"
      :styleOverride="{paddingBottom: '2em'}"
      />

    <section class="message">
      <p>お送りいただきました内容を確認の上、担当者より折り返しご連絡させていただきます。</p>
    </section>

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
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.page{
  section.message{
    padding-bottom: 2em;
    p{
      padding: 0;
      color: $grey-5;
      font-weight: 600;
      line-height: 2;
    }
  }
}

</style>
