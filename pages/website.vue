<template>
  <section class="page-container">
    <div>
      <Heading title="WEBSITE" subtitle="kikimetal.com ver2 with Nuxt." />


      <div class="transition-container">
        <transition name="slide-fade">
          <div v-if="!sheet.length" key="pending" class="transition-item pending">
            <Btn to="/" exact text="GETT!!!!" :overrideStyle="{background: 'lavender', fontSize: '40px', color: 'white'}" />
          </div>
          <div v-else key="fulfilled" class="transition-item fulfilled">
            <div v-for="(row, index) in sheet" :key="index + row.date">
              <Heading :title="row.date" :subtitle="row['main-title-01']" />
            </div>
          </div>
        </transition>
      </div>

      <div v-for="(site, index) in sites" :key="index + site.date">
        <Heading :title="site.title" :subtitle="index" />
      </div>

    </div>
  </section>
</template>

<script>
// module
import axios from "axios"

import Btn from '~/components/Btn.vue'
import Heading from '~/components/Heading.vue'

import sites from '~/assets/websites.json'


export default {
  components: {
    Btn,
    Heading,
  },
  data () {
    return {
      sites,
      sheet: [],
      url: "https://www.maylily.co.jp/v2/assets/gss-api.php?sheetName=news&date&main-title-01&main-title-02&sub-title&description&img-src&img-alt&link-flg&link-text&link-href",
    }
  },
  methods: {
    async getSheet () {
      let res = await axios.get("https://www.maylily.co.jp/v2/assets/gss-api.php?sheetName=news&date&main-title-01&main-title-02&sub-title&description&img-src&img-alt&link-flg&link-text&link-href")
      if (!res.status === 200) {
        throw new Error(res.statusText)
      }
      this.sheet = res.data
    },
  },
  created () {
    if (process.browser) {
      setTimeout(() =>
        this.getSheet(),
        1000
      )
    }
  },
}
</script>

<style lang="scss">
.transition-container{
  position: relative;
  .transition-item{
    width: 100%;
  }
}
.slide-fade-enter-active {
  transition: all .9s ease;
}
.slide-fade-leave-active {
  /* transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0); */
  transition: all .9s ease;
  position: absolute;
  top: 0;
  left: 0;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(30px);
  opacity: 0;
}
</style>
