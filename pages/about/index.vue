<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading title="About Us" subtitle="企業情報" />

    <nav class="local-nav-container">
      <router-link
      class="link"
      v-for="(route, index) in routesInAbout"
      :key="'route-in-about-' + index"
      :to="route.path">
        <span>{{ route.title }}</span>
        <span>{{ route.subtitle }}</span>
      </router-link>
    </nav>


  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'

export default {
  components: {
    Heading,
  },
  data () {
    return {
      routesInAbout: [
        {
          title: 'vision',
          subtitle: '社会貢献活動',
          path: '/about/vision',
          exact: true,
        },
        {
          title: 'message',
          subtitle: '社会貢献活動',
          path: '/about/message',
          exact: true,
        },
        {
          title: 'outline',
          subtitle: '社会貢献活動',
          path: '/about/outline',
          exact: true,
        },
        {
          title: 'csr',
          subtitle: '社会貢献活動',
          path: '/about/csr',
          exact: true,
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.page{
  .local-nav-container{
    font-size: 22rem;
    margin: auto;
    width: 90%;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: flex-start;

    .link{
      padding: 0.3em;
    }
  }
}
</style>
