<template>
  <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['News', 'Release']"
      subtitle="ニュースリリース"
      />

    <!-- <CardContainer>
      <Card
        class="link"
        v-for="(link, i) in sheet"
        :key="'link-in-about-' + i"
        :date="link.date"
        :title="link['main-title-01']"
        :subtitle="link['sub-title']"
        :to="link['link-href']"
        :exact="true"
        :imgsrc="link['img-src']"
        data-aos="fade-up"
        :data-aos-delay="i * 100" />
    </CardContainer> -->
    <CardContainer>
      <Card
        v-for="(link, i) in sheet"
        :key="'card-in-news-' + i"
        type="modal"
        :date="link.date"
        :title="link['main-title-01']"
        :subtitle="link['sub-title']"
        :modal="{
          title: link['main-title-01'],
          text: [
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
            '詳細テキストです。', '詳細テキストです。', '詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。詳細テキストです。',
          ],
          links: [{}, {}],
        }"
        data-aos="fade-up"
        :data-aos-delay="i * 100" />
    </CardContainer>

    <Footer />
  </div>
</template>

<script>
import axios from 'axios'

import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
import Card from '~/components/Card.vue'
import CardContainer from '~/components/CardContainer.vue'
export default {
  components: {
    Heading,
    Footer,
    Card,
    CardContainer,
  },
  data () {
    return {
      sheet: [],
      linksInNews: [
        {
          title: 'vision',
          subtitle: '社会貢献活動',
          to: '/about/vision',
          imgsrc: 'OurMission.jpg',
          exact: true,
        },
        {
          title: 'message',
          subtitle: '社会貢献活動',
          to: '/about/message',
          imgsrc: 'OurMission.jpg',
          exact: true,
        },
        {
          title: 'outline',
          subtitle: '社会貢献活動',
          to: '/about/outline',
          imgsrc: 'OurMission.jpg',
          exact: true,
        },
        {
          title: 'csr',
          subtitle: '社会貢献活動',
          to: '/about/csr',
          imgsrc: 'OurMission.jpg',
          exact: true,
        },
      ],
    }
  },
  methods: {
    async fetchSheet () {
      const url = "https://www.maylily.co.jp/v2/assets/gss-api.php?sheetName=news&date&main-title-01&main-title-02&sub-title&description&img-src&img-alt&link-flg&link-text&link-href"
      let res = await axios.get(url)
      if (!res.status === 200) {
        throw new Error(res.statusText)
      }
      this.sheet = res.data
      console.log(this.sheet)
    },
  },
  created () {
    if (process.browser) {
      this.fetchSheet()
    }
  },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
