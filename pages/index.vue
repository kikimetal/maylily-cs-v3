<template lang="html">
  <div :class="['page', $store.state.ww.size]">

    <HeroImage />

    <Heading
      type="basic"
      data-aos="fade-up"
      :title="['News', 'Release']"
      subtitle="最新の情報をお届けします✨" />

    <CardContainer>
      <Card
      class="link"
      v-for="(link, i) in linksInNews"
      :key="'link-in-about-' + i"
      :date="link.date"
      :title="link.title"
      :subtitle="link.subtitle"
      :to="link.to"
      :exact="link.exact"
      :imgsrc="link.imgsrc"
      data-aos="fade-up"
      :data-aos-delay="i * 100"
      />
    </CardContainer>

    <Heading
      type="basic"
      data-aos="fade-up"
      :title="['Pick', 'Up']"
      subtitle="注目の情報です✨" />

    <CardContainer>
      <Card
      class="link"
      v-for="(link, i) in linksInPickUp"
      :key="'link-in-about-' + i"
      :title="link.title"
      :subtitle="link.subtitle"
      :to="link.to"
      :exact="link.exact"
      :imgsrc="link.imgsrc"
      data-aos="fade-up"
      :data-aos-delay="i * 100"
      />
    </CardContainer>

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Btn from '~/components/Btn.vue'
import Logotype from '~/components/Logotype.vue'
import Card from '~/components/Card.vue'
import CardContainer from '~/components/CardContainer.vue'
import HeroImage from '~/components/HeroImage.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Heading,
    Btn,
    Logotype,
    Card,
    CardContainer,
    HeroImage,
    Footer,
  },
  data () {
    return {
      linksInNews: [
        {
          date: '2018.08.03',
          title: ['Webサイトを', 'リニューアル', 'しました'],
          subtitle: '有限会社メイリリィは、ウェブサイトをリニューアルいたしましたのでお知らせします。',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
        {
          date: '2018.08.03',
          title: ['ベースフレグランス', '"ネイビー"'],
          subtitle: '香水ブランド「GARMENT」は、新しくベースフレグランス「ネイビー」を発表しました。',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
        {
          date: '2018.08.03',
          title: ['ベースフレグランス', '"ネイビー"'],
          subtitle: '香水ブランド「GARMENT」は、新しくベースフレグランス「ネイビー」を発表しました。',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
        {
          date: '2018.08.03',
          title: ['ベースフレグランス', '"ネイビー"'],
          subtitle: '香水ブランド「GARMENT」は、新しくベースフレグランス「ネイビー」を発表しました。',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
        {
          date: '2018.08.03',
          title: ['ベースフレグランス', '"ネイビー"'],
          subtitle: '香水ブランド「GARMENT」は、新しくベースフレグランス「ネイビー」を発表しました。',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
        {
          date: '2018.08.03',
          title: ['Webサイトを', 'リニューアル', 'しました'],
          subtitle: '有限会社メイリリィは、ウェブサイトをリニューアルいたしましたのでお知らせします。',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
        {
          date: '2018.08.03',
          title: ['Webサイトを', 'リニューアル', 'しました'],
          subtitle: '有限会社メイリリィは、ウェブサイトをリニューアルいたしましたのでお知らせします。',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
        {
          date: '2018.08.03',
          title: ['ベースフレグランス', '"ネイビー"'],
          subtitle: '香水ブランド「GARMENT」は、新しくベースフレグランス「ネイビー」を発表しました。',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
      ],
      linksInPickUp: [
        {
          title: '新しくしました！',
          subtitle: 'ホームページをリニューアルしました',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
        {
          title: 'ガーメント新作',
          subtitle: 'ベースフレグランス「ネイビー」を発表',
          to: '/news',
          imgsrc: 'rose-aroma.jpg',
          exact: true,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
// @import '~/assets/css/myset.scss';
</style>
