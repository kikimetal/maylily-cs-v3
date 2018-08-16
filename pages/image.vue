<template>
  <section class="page-container">
    <div>
      <Heading title="Image" subtitle="kikimetal.com ver2 with Nuxt." />

      <div v-for="(site, index) in sites" :key="index + site.date">
        <Heading :title="site.title" :subtitle="index" />
      </div>

    </div>
  </section>
</template>

<script>
import Btn from '~/components/Btn.vue'
import Heading from '~/components/Heading.vue'

import sites from '~/assets/websites.json'

export default {
  components: {
    Btn,
    Heading,
  },
  data () {
    return { sites }
  },
  methods: {
  },
  created () {
    if (process.browser) {
      // console.log(this.sites)
    }
  },
}
</script>

<style>

</style>
