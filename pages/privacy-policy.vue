<template>
   <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['Privacy', 'policy']"
      subtitle="個人情報保護方針"
      />

      <section>
        <p>
          有限会社メイリリィ及びその関連会社（以下、「当社」といいます）は、メイリリィウェブサイト （以下、「本ウェブサイト」といいます）を訪れる全てのお客様の個人情報の保護に努めます。
        </p>

        <h2>
          １．個人情報の定義
        </h2>
        <p>
          個人情報とは当社が本ウェブサイトを通じてお客様から提供を受ける住所、氏名、年齢、電話番号、メールアドレス、その他の個人を識別できる情報をいいます。
        </p>

        <h2>
          ２．個人情報の収集
        </h2>
        <p>
          お客様が本ウェブサイトにアクセスする際にお客様の個人情報をご提供いただく必要はありません。ただし、特定のキャンペーンにご参加される場合には、個人情報が提供されないと当該キャンペーンに参加できないことがありますので、あらかじめご了承ください。
        </p>

        <h2>
          ３．個人情報の利用目的
        </h2>
        <p>
          お客様の個人情報は、当社のマーケティング活動のため、より良い商品、サービスをご提供するために利用させていただきます。また、会社や商品、サービスに関するお問い合わせ、およびご応募などをいただく際に登録されている方が本人であるか否かを確認するための情報としても使用いたします。
        </p>

        <p>
          <ol>
            <li>
              １）当社が提供するサービス（各種キャンペーン、イベント等）についてのご案内
            </li>
            <li>
              ２）当社が行う調査、アンケートなどに関するご連絡
            </li>
            <li>
              ３）当社へ寄せられたお問い合わせ、ご相談等への適切な対応および記録、整理
            </li>
            <li>
              ４）商品、サービスの研究、開発のための分析
            </li>
          </ol>
        </p>

        <h2>
          ４．個人情報の管理
        </h2>
        <p>
          当社は、保有する個人情報を正確かつ最新の状態に保ち、また、個人情報への不正アクセス、紛失、破損、改ざん、漏洩などを防止するため、セキュリティシステムの維持、管理体制の整備、社員教育の徹底等の必要な措置を講じ、個人情報の厳重な管理を行ないます。
        </p>

        <h2>
          ５．個人情報の第三者への提供
        </h2>
        <p>
          当社は、本ウェブサイトにおいてお客様より個人情報をご提供いただいた場合には、次の場合を除き、個人情報を第三者に提供することはありません。
        </p>
        <p>
          <ol>
            <li>
              １）法令にもとづく個人情報の開示請求がなされた場合
            </li>
            <li>
              ２）お客様もしくは一般公衆または当社従業員の生命、身体または財産等の保護あるいは防御のため必要のある場合
            </li>
            <li>
              ３）キャンペーンの実施のため、機密保持契約を締結した協力会社、提携会社および業務委託会社に開示する必要がある場合
            </li>
          </ol>
        </p>

        <h2>
          ６．個人情報の開示、訂正、利用停止、削除など
        </h2>
        <p>
          ご提供いただいた個人情報の内容に関して、開示、訂正、利用停止、削除などをご希望される場合は、当社のお問い合わせ窓口までご連絡下さい。ご要望いただいた方がご本人であることが確認された後、誠実かつ合理的な期間内に対応させていただきます。
        </p>

        <h2>
          ７．法令遵守
        </h2>
        <p>
          当社は、個人情報の取り扱いにおいて個人情報の保護に関する法律及び関連する政省令並びにその他のガイドラインを遵守します。
        </p>
        <h2>
          ８．個人情報に関するお問い合わせ窓口
        </h2>
        <p>
          当社の個人情報の取り扱いに関するお問い合わせについては、こちらからお願い致します。
          <router-link to="/contact" class="btn">お問い合わせへ移動する</router-link>
        </p>

      </section>

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
  head () { return this.$store.state.heads[this.$route.path] },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';
section h2{
  font-weight: 700;
  font-size: 1.2em;
  padding-top: 1.7em;
  line-height: 1.5;
}
.btn{
  @include btn;
  padding: 0.5em 1em;
  margin: 0 auto;
  margin-top: 1em;
}
</style>
