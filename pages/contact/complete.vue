<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="pale"
      pagetop
      :title="['Contact Us']"
      subtitle="問い合わせありがとうございます！"
      :styleOverride="{paddingBottom: '2em'}"
      />

    <section>
      <p class="message">3営業日目処に、入力されたメールアドレス宛にご返信いたします。</p>
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
  text-align: center;
  section{
    p.message{
      padding-bottom: 2em;
      display: flex;
      flex-flow: column;
      justify-content: center;
      color: $grey-5;
      font-weight: 600;
    }
  }
}

</style>
