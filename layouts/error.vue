<template lang="html">
  <div class="error-page">
    <div v-if="error.statusCode === 404">
      <Heading
      :title="['ページが見つかりません']"
      :subtitle="['page not found.']"/>
    </div>
    <div v-else>
      <Heading
      :title="['エラーが発生しました']"
      :subtitle="['page not found.']"/>
    </div>
    <nuxt-link to="/" class="btn">トップページへ</nuxt-link>
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading,
  },
  props: ['error'],
  layout: 'default' // エラーページ用のカスタムレイアウトを指定できます
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.error-page{
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;

  .btn{
    @include btn;
    @include hover-touchme;
    max-width: 400px;
  }
}
</style>
