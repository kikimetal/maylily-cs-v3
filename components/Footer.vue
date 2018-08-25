<template lang="html">
  <div class="Footer">
    <h1 class="heading">有限会社メイリリィ</h1>

    <router-link
    class="link"
    v-for="(route, index) in routes" :key="'route-' + index"
    data-aos="fade-up"
    data-aos-offset="-100"
    :data-aos-delay="50 * index"
    :data-aos-duration="700 + 50 * index"
    :to="route.path"
    :exact="route.exact">
      <span class="subtitle">{{ route.subtitle }}</span>
      <span class="title"> / {{ route.title }}</span>
    </router-link>

    <span class="copyright">&copy; copyright Maylily Co., Ltd. all rights reserved.</span>
  </div>
</template>

<script>
import ROUTES from '~/assets/routes.js'
export default {
  props: {
    routes: { default: () => ROUTES },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.Footer{
  position: relative;
  margin-top: 5vh;
  padding: 15vh 0;
  height: 100vh;
  background: $grey;
  color: $white;
  text-align: center;
  font-size: 20rem;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  .heading{
    font-size: 1.3em;
    font-weight: bold;
  }
  .link{
    width: 80%;
    line-height: 1.4;
    border-bottom: 2px solid rgba($white, 0.2);
    .title{
      font-size: 0.8em;
      opacity: 0.7;
    }
  }
  .copyright{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 1em;
    font-size: 12rem;
    color: rgba($white, 0.6);
  }
}
</style>
