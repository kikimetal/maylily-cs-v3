<template>
  <div class="error-page">
    <div v-if="error.statusCode === 404">
      <Heading title="ページが見つかりません。" />
    </div>
    <div v-else>
      <Heading title="エラーが発生しました。" />
    </div>
    <nuxt-link to="/"><Btn text="Home"></Btn></nuxt-link>
  </div>
</template>

<script>
import Btn from '~/components/Btn.vue'
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading,
    Btn,
  },
  props: ['error'],
  layout: 'default' // エラーページ用のカスタムレイアウトを指定できます
}
</script>

<style>
  .error-page{
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  }
</style>
