<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['Contact']"
      subtitle="お問い合わせ"
      />

    <section>
      <h3>問い合わせありがとうございます✨</h3>
      <p>3営業日以内を目処に、入力されたメールアドレス宛にご返信いたします。</p>
    </section>

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
.page{
  text-align: center;
  section{
    min-height: 40vh;
    padding-bottom: 10vh;
    display: flex;
    flex-flow: column;
    justify-content: center;
  }
}

</style>
