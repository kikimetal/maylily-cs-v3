<template>
   <div id="contact" :class="['page', $store.state.ww.size]">

    <Heading
      type="pale"
      :title="['Contact Us']"
      subtitle="お気軽にお問い合わせください"
      :styleOverride="{paddingTop: '7em'}"
      />

    <!-- <ContactForm /> -->

    <div class="link-container">
      <a class="link service" href="https://form.run/@maylily-contact1">
        <span class="title">
          製品・サービス
          <span class="small">に関するお問い合わせはこちら</span>
          <div class="btn"><ArrowRight class="arrow"/></div>
        </span>
      </a>
      <a class="link oem" href="https://form.run/@maylily-contact2">
        <span class="title">
          フレグランスOEM
          <span class="small">に関するお問い合わせはこちら</span>
          <div class="btn"><ArrowRight class="arrow"/></div>
        </span>
      </a>
    </div>

    <Footer />
  </div>
</template>

<script>
import Heading from '~/components/Heading.vue'
import Footer from '~/components/Footer.vue'
import ArrowRight from '~/components/svg/ArrowRight.vue'

export default {
  components: {
    Heading,
    Footer,
    ArrowRight,
  },
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

#contact{

  .link{
    position: relative;
    display: block;
    width: 90%;
    padding-top: 80%;
    margin: 0 auto;
    font-size: 1.5em;
    font-weight: 700;
    color: $white;
    margin-bottom: 1.6em;
    background: pink;
    border-radius: 0.5em;
    &.service{
      background-image:
      linear-gradient(180deg, rgba(76, 101, 48, 0.51), rgba(0,0,0,0)),
      url(~assets/img/about/csr.jpg);
    }
    &.oem{
      background-image:
      linear-gradient(180deg, rgba(102, 97, 67, 0.71), rgba(0,0,0,0)),
      url(~assets/img/oem/step05.jpg);
    }
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    &:hover{
      @include touchme;
    }

    .title{
      position: absolute;
      top: 1em;
      left: 1em;
      line-height: 1.5;
      text-shadow: 0 0 3px rgba(0,0,0,0.2);

      .small{
        display: block;
        font-size: 0.7em;
        opacity: 0.9;
        font-weight: 400;
      }

      .btn{
        margin-top: 0.7em;
        width: 7em;
        height: 1.6em;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 3em;
        border: 2px solid rgba($white, 0.8);
        transform-origin: left center;
        transform: scale(0.9);
        transition: all 0.6s ease 0.1s;
        .arrow{
          fill: $white;
          transition: all 0.3s ease;
        }
      }
    }

  }

  &.md, &.lg, &.xl{
    .link-container{
      padding: 0 6%;
      display: flex;
      flex-flow: row;
      justify-content: space-around;
    }
    .link{
      font-size: 1.6em;
      width: 45%;
      padding-top: 40%;
      margin: 0;
    }
  }

  &.lg, &.xl{
    .link-container{
      padding: 0 calc((100vw - 900px) / 2);
    }
  }
}
</style>
