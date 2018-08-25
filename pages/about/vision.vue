<template>
  <div :class="['page', $store.state.ww.size]">

    <Heading
      type="basic"
      pagetop
      :title="['Vision', '/', 'Mission']"
      subtitle="企業理念"
      />

    <section>
      <Heading
        type="photogenic"
        :title="['Our', 'Vision']"
        subtitle="私たちが目指すもの"
        imgsrc="OurVision.jpg"
        alt="企業理念のイメージ画像"
        />
      <p>
        香りのプロフェッショナルという強みを活かしながら、自由な発想と独自の技術で常識を打破し、感動ある商品を生み出すことで、既存の枠にとらわれない新しい生活文化を提案し、新たなマーケットを開拓し続けるオンリーワン企業をめざします。
      </p>
    </section>

    <section>
      <Heading
        type="photogenic"
        :title="['Our', 'Mission']"
        subtitle="今、私たちの臨むもの"
        imgsrc="OurMission.jpg"
        alt="企業理念のイメージ画像"
        />
      <p>
        「衣・食・住・健・美」の生活文化を事業領域に定め、今までにない新しい価値やライフスタイルの創造を通じて、世界中のあらゆる人々の生活に幸せと彩りを届け、心豊かな社会の実現に貢献します。
      </p>
    </section>

    <section>
      <Heading
        type="photogenic"
        :title="['Our', 'Value']"
        subtitle="私たちの価値観"
        imgsrc="OurValue.jpg"
        alt="企業理念のイメージ画像"
        />
      <h3>Integrity：誠実な行動</h3>
      <p>
        私たちは法令・社会規範を遵守し、あらゆる場面で、あらゆる人々に対して、誠実、親切、公正に接する。
      </p>
      <h3>Creativity：発想力と創造性</h3>
      <p>
        既成概念にとらわれない柔軟で豊かな発想力で、オリジナリティあふれる新しい価値を創造する。
      </p>
      <h3>Challenge：挑戦し続ける</h3>
      <p>
        困難なことにも強い意志と情熱を持って積極的に挑み、粘り強く新たな可能性を拓いていく。
      </p>
      <h3>Fun：「楽しい」を探求</h3>
      <p>
        私たち自身が「楽しい」「面白い」と感じるものを。その「楽しい」がお客様の「感動」につながる。
      </p>
      <h3>Harmony：協調性と主体性</h3>
      <p>
        一人一人が個性と能力を活かし、互いにリスペクトし合いながら、自ら考え、自ら行動する。
      </p>
    </section>

    <section>
      <Heading
        type="photogenic"
        :title="'&quot;Maylily&quot;'"
        subtitle="社名の由来"
        imgsrc="naming.jpg"
        alt="企業理念のイメージ画像"
        />

      <p>社名の「May lily」は、英語でスズランを意味する言葉です。</p>
      <p>
        鮮やかな緑の葉の影に、鈴のような小さな白い花が重なって咲くスズランは、清楚で可憐な美しさがある花です。
        その控えめな姿とは裏腹に、寒さにとても強く、必ず春に花を咲かせるたくましい生命力を持つ花でもあります。
        地中を這うように茎を伸ばし、年を追うごとに驚くべき勢いでに増え、いつしか一面を埋め尽くすようにスズランが咲き広がります。
      </p>
      <p>
        スズランは香水の世界でも存在感があり、バラ、ジャスミンとともに「三大フローラルノート」と呼ばれ、調合には欠かせない重要な香りです。
        透明感のある清楚な香りは主役にもなりますが、調合した香りの調和を図り、香りに広がりやまろやかさを与えるハーモナイザーとしての役割があります。
      </p>
      <p>
        また、ヨーロッパでは、春の訪れを知らせるスズランは「幸福をもたらす花」として愛されてきました。
        結婚式で花嫁にスズランの花束を贈ったり、フランスでは、５月１日「スズランの日」に大切な人とスズランを贈り合い、幸福を祈ります。
      </p>

      <h3>“心豊かな暮らしに役立つ製品を提供し、人々に幸せを届け、世界に幸せの輪を広げる”</h3>
      <h3>“社会との調和をめざし、会社の強みや人材・リソースを活用して、社会貢献に取り組む”</h3>
      <h3>“ベンチャー企業として常にチャレンジを行い、強くたくましく成長する企業をめざす”</h3>

      <p>これがメイリリィという社名に込めた想いです。</p>
    </section>

    <section>
      <Heading
        type="photogenic"
        :title="['Our', 'Mark']"
        subtitle="ロゴマークについて"
        imgsrc="OurMark.jpg"
        alt="ロゴマークの画像"
        :imgstyle="{boxShadow: '0 0 50px 0 rgba(93, 126, 157, 0.06) inset'}"
        />
      <p>
        私たちは2018年7月より、この新しいシンボルマークを導入しました。
        4つの白い円は、スズランの花と新しい価値を創造する力を、
        緑の三角形は、先駆的な製品を開発し、事業を開拓していく企業姿勢を、
        青い扇形は、メイリリィが届ける幸せが世界に広がるようにとの願いを表現しています。
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
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

</style>
