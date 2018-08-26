<template>
  <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['News', 'Release']"
      subtitle="ニュースリリース"
      />

    <CardContainer>
      <Card
        v-for="(row, i) in newsSheet"
        :key="'card-in-news-' + i"
        :type="row.type"
        :date="row.date"
        :title="row.title"
        :subtitle="row.subtitle"
        :align="row.align"
        :imgsrc="row.imgsrc"
        :modal="row.modal"
        :exact="true"
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
      newsSheet: [],
    }
  },

  methods: {
    async fetchSheet () {

      const sheetName = 'news'
      const columns = [
        'separator',
        'date',
        'title',
        'subtitle',
        'align',
        'imgsrc',
        'type',
        'modal-title',
        'modal-subtitle',
        'modal-text',
        'modal-links-word',
        'modal-links-url',
      ]
      const queryString = `?sheetName=${sheetName}&${columns.join('&')}`
      const apiUrl = 'https://www.maylily.co.jp/v2/assets/gss-api.php'
      const fetchUrl = apiUrl + queryString

      let res = await axios.get(fetchUrl)

      if (!res.status === 200) {
        throw new Error(res.statusText)
      }

      const separator = res.data[0].separator
      const fixedData = res.data.map(row => fixRow(row, separator))
      this.newsSheet = fixedData
      // console.log('news fixed data: ', fixedData) // TODO: remove

      /**
       * gss-apiから帰ってきた配列の1行分のデータを Card に対応するよう整形
       * @param  { Object } row       1行分のデータ=1つのカード分の情報
       * @param  { String } separator 文字列から配列に整形する際の区切る文字列
       * @return { Object }           Card へ最適化したオブジェクト
       */
      function fixRow (row, separator) {
        // generate links object.
        const words = row['modal-links-word'].split(separator)
        const urls = row['modal-links-url'].split(separator)
        const links = words.map((word, i) => ({
          word: word.trim(),
          to: urls[i].trim() || '/',
          external: urls[i].trim().indexOf('http') === 0
        }))
        // fixed object for type=modal Card.
        return {
          date: row.date.trim(),
          title: row.title.trim().split(separator),
          subtitle: row.subtitle.trim().split(separator),
          align: row.align.trim() || 'left',
          imgsrc: row.imgsrc.trim(),
          // type は今は modal しかないけど、普通のリンクとかに拡張対応するときはここで変更
          type: row.type.trim() || 'modal',
          modal: {
            title: row['modal-title'].trim().split(separator),
            subtitle: row['modal-subtitle'].trim().split(separator),
            text: row['modal-text'].trim().split(separator),
            links: links,
          },
        }
      } // function fix

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
