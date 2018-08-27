<template lang="html">
  <transition name="page">
    <div
      class="FetchLoader"
      :style="{textAlign: 'center', fontWeight: 'bold', fontSize: '20px', color: 'grey'}"
      v-if="$store.state.sheets.news.status === 'pending'"
      >
      <h1>LOADING...</h1>
      <h2>最新の情報を読み込んでいます✨</h2>
    </div>
  </transition>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
.FetchLoader{
  font-size: 22rem;
  text-align: center;
  font-weight: bold;
  background: $primary;
  color: $white;
}
</style>
