<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading title="お問い合わ" subtitle="" />
    <ContactForm />

  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import ContactForm from '~/components/ContactForm.vue'
export default {
  components: {
    Heading,
    ContactForm,
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

</style>
