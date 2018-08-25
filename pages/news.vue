<template>
   <div :class="['page', $store.state.ww.size]">

     <Heading
       type="basic"
       pagetop
       :title="['News', 'Release']"
       subtitle="社会貢献活動"
       />

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
  data () {
    return {
      sheet: [],
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
    // if (process.browser) {
    //   setTimeout(() =>
    //     this.getSheet(),
    //     1000
    //   )
    // }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

</style>
