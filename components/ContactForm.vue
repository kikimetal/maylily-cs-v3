<template>
<div :class="['MailForm', $store.state.ww.size]">
  <form>

    <section class="flex">
      <h1 class="heading">会社名 (任意)</h1>
      <label>
        <input
        type="text"
        name="company"
        placeholder="有限会社メイリリィ"
        v-model="company" />
        <div class="border" />
      </label>
    </section>

    <section class="flex">
      <h1 class="heading">お名前 (必須)</h1>
      <label>
        <input
        :class="{ error: hasError('name') }"
        type="text"
        name="name"
        placeholder="香咲 リリ子"
        v-model="name"
        v-validate="'required'" />
        <div class="border" />
        <transition name="page">
          <div class="error-message" v-show="hasError('name')">入力が正しくありません！</div>
        </transition>
      </label>
    </section>

    <section class="flex">
      <h1 class="heading">メールアドレス (必須)</h1>
      <label>
        <input
        :class="{ error: hasError('email') }"
        type="text"
        name="email"
        placeholder="example@maylily.co.jp"
        v-model="email"
        v-validate="'required|email'">
        <div class="border" />
        <transition name="page">
          <div class="error-message" v-show="hasError('email')">入力が正しくありません！</div>
        </transition>
      </label>
    </section>

    <section class="flex">
      <h1 class="heading">電話番号（必須）</h1>
      <label>
        <input
        :class="{ error: hasError('phone') }"
        type="text"
        name="phone"
        placeholder="03-1234-1234"
        v-model="phone"
        v-validate="'required|max:14'">
        <div class="border" />
        <transition name="page">
          <div class="error-message" v-show="hasError('phone')">入力が正しくありません！</div>
        </transition>
      </label>
    </section>

    <section class="flex">
      <h1 class="heading">郵便番号 (必須)</h1>
      <label>
        <input
        :class="{ error: hasError('zipcode') }"
        type="text"
        name="zipcode"
        placeholder="123-0001"
        v-model="zipcode"
        v-validate="'required|max:14'">
        <div class="border" />
        <transition name="page">
          <div class="error-message" v-show="hasError('zipcode')">入力が正しくありません！</div>
        </transition>
      </label>
    </section>

    <section class="flex">
      <h1 class="heading">住所 (必須)</h1>
      <label>
        <input
        :class="{ error: hasError('address') }"
        type="text"
        name="address"
        placeholder="神奈川県横浜市都筑区1-2-3"
        v-model="address"
        v-validate="'required|max:14'">
        <div class="border" />
        <transition name="page">
          <div class="error-message" v-show="hasError('address')">入力が正しくありません！</div>
        </transition>
      </label>
    </section>

    <div data-aos="zoom-out" data-aos-duration="1000" data-aos-offset="0" data-aos-once="false">
      <transition name="oem-exchange" mode="out-in">
        <div class="btn oem-exchange-btn oemTrue" v-if="contactTypeOEM" key="oemTrue" @click.prevent="contactTypeOEM = !contactTypeOEM">通常のお問い合わせはこちら</div>
        <div class="btn oem-exchange-btn oemFalse" v-else key="oemFalse" @click.prevent="contactTypeOEM = !contactTypeOEM">"OEM"のお問い合わせはこちら</div>
      </transition>
    </div>

    <transition name="oem-exchange" mode="out-in">
      <div v-if="contactTypeOEM" key="oemTrue">
        <section>
          <h1 class="heading">OEM製造品目（必須）</h1>
          <div class="checkbox-container">
            <label>
              <input type="checkbox" v-model="oemProductSelect" value="香水"/>
              <div class="lever"><span class="circle" />香水</div>
            </label>
            <label>
              <input type="checkbox" v-model="oemProductSelect" value="ルームディフューザー／ルームフレグランス"/>
              <div class="lever"><span class="circle" />ルームディフューザー／ルームフレグランス</div>
            </label>
            <label>
              <input type="checkbox" v-model="oemProductSelect" value="ファブリックミスト／ピローミスト"/>
              <div class="lever"><span class="circle" />ファブリックミスト／ピローミスト</div>
            </label>
            <label>
              <input type="checkbox" v-model="oemProductSelect" value="スキンケア製品"/>
              <div class="lever"><span class="circle" />スキンケア製品</div>
            </label>
            <label>
              <input type="checkbox" v-model="oemProductSelect" value="その他"/>
              <div class="lever"><span class="circle" />その他</div>
            </label>
          </div>
        </section>
        <section>
          <h1 class="heading">OEM製造目的（必須）</h1>
          <div class="checkbox-container">
            <label>
              <input type="checkbox" v-model="oemObjectSelect" value="販売"/>
              <div class="lever"><span class="circle" />販売</div>
            </label>
            <label>
              <input type="checkbox" v-model="oemObjectSelect" value="記念品・ノベルティ"/>
              <div class="lever"><span class="circle" />記念品・ノベルティ</div>
            </label>
            <label>
              <input type="checkbox" v-model="oemObjectSelect" value="その他"/>
              <div class="lever"><span class="circle" />その他</div>
            </label>
          </div>
        </section>
        <section class="flex">
          <h1 class="heading">OEMご希望数量（必須）</h1>
          <label>
            <input
            :class="{ error: hasError('oemNum') }"
            type="text"
            name="oemNum"
            placeholder="1000"
            v-model="oemNum"
            v-validate="'required|numeric'">
            <div class="border" />
            <transition name="page">
              <div class="error-message" v-show="hasError('oemNum')">入力が正しくありません！</div>
            </transition>
          </label>
        </section>
        <section class="flex">
          <h1 class="heading">OEM後希望納期（必須）</h1>
          <label>
            <input
            :class="{ error: hasError('oemDate') }"
            type="text"
            name="oemDate"
            placeholder="2019年3月"
            v-model="oemDate"
            v-validate="'required|numeric'">
            <div class="border" />
            <transition name="page">
              <div class="error-message" v-show="hasError('oemDate')">入力が正しくありません！</div>
            </transition>
          </label>
        </section>
      </div><!-- contactTypeOEM -->

      <div v-else key="oemFalse">
        <section>
          <h1 class="heading">お問い合わせ内容 (必須)</h1>
          <div class="checkbox-container">
            <label>
              <input type="checkbox" v-model="contactContentSelect" value="ROSE DARENA"/>
              <div class="lever"><span class="circle" />"ROSE DARENA"について</div>
            </label>
            <label>
              <input type="checkbox" v-model="contactContentSelect" value="GARMENT"/>
              <div class="lever"><span class="circle" />"GARMENT"について</div>
            </label>
            <label>
              <input type="checkbox" v-model="contactContentSelect" value="ローズ原料事業"/>
              <div class="lever"><span class="circle" />"ローズ原料事業"について</div>
            </label>
            <label>
              <input type="checkbox" v-model="contactContentSelect" value="その他"/>
              <div class="lever"><span class="circle" />その他のお問い合わせ</div>
            </label>
          </div>
        </section>
      </div>

    </transition><!-- contactTypeOEM transition -->

    <section>
      <h1 class="heading">メッセージ本文 (必須)</h1>
      <label>
        <textarea
        placeholder="お問い合わせ内容を入力してください。"
        v-model="message" />
      </label>
    </section>

    <br>
    <div class="btn submit" @click.prevent="handleCheckAll">CheckAll(開発用)</div>
    <div class="btn submit" @click.prevent="submit">送信する</div>

  </form>

  <p class="attention">個人情報の取り扱いについては「<router-link to="/privacy-policy">プライバシーポリシー</router-link>」をご覧ください。</p>
</div>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

export default {
  data () {
    return {
      // errors: [], // <- vee-validate injected
      company: null,
      name: '',
      email: '',
      phone: '',
      zipcode: '',
      address: '',
      contactTypeOEM: false, // OEM 分岐
      contactContentSelect: [],
      oemProductSelect: [],
      oemObjectSelect: [],
      oemNum: null,
      oemDate: null,
      message: '',
      checked: false, // エラーチェックが一度でも走ったかどうか
    }
  },
  methods: {
    async submit () {
      if (!this.handleCheckAll()) {
        document.body.scrollIntoView()
        return alert('情報の入力が不足しています！')
      }
      const apiUrl = 'https://www.maylily.co.jp/api/sendMail.php'
      const formData = this.getTarget(Object, false)
      // なにこの曲者...
      console.log('req data', formData) // TODO:remove
      let params = new URLSearchParams(formData)
      const res = await axios.post(apiUrl, params)
      if (res.data === true) {
        console.log('res success') // TODO:remove
        return alert('RES: OK!')
      } else {
        console.warn('res error: ', res.data) // TODO:remove
        return alert('RES: ERROR!')
      }
      // this.$router.push({path: '/contact/complete'})
    },

    handleCheckAll () {
      this.checked = true

      const target = this.getTarget(Array, true)
      const found = target.find(value => value === '' || value === null || value === [])
      const isInputAll = found === undefined
      const isValidAll = !this.errors.items.length

      console.log(this.errors)

      const exist = isInputAll && isValidAll
      console.log('checkAll Result: ', exist)
      return exist
    },

    hasError (name) {
      return this.errors.has(name) || this.checked && !this[name]
    },

    /**
     * contactTypeOEM の真偽値で分岐し、checkする適切なターゲットを返す
     * @param  {Object | Array} type :Object || Array で指定できる
     * @param  {Boolean} required    :true で必須項目のみ取得 false で全部
     * @return {Object | Array}      :指定した形でターゲットを返す
     */
    getTarget (type, required = false) {
      let target = [
        'name',
        'email',
        'phone',
        'zipcode',
        'address',
        'message',
        'contactTypeOEM',
      ]
      if (!required) {
        // 入力必須ではない項目を追加
        target = [
          ...target,
          'company'
        ]
      }
      if (this.contactTypeOEM) {
        target = [
          ...target,
          'oemProductSelect',
          'oemObjectSelect',
          'oemNum',
          'oemDate',
        ]
      } else {
        target = [
          ...target,
          'contactContentSelect'
        ]
      }

      if (type === Object) {
        const obj = {}
        target.map(t => Object.assign(obj, {[t]: this[t]}))
        return obj
      }

      if (type === Array) {
        const arr = target.map(t => this[t])
        return arr
      }

      throw new Error('Object か Array を引数に指定してください')
    },
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.MailForm{
  font-size: 17rem;
  margin: auto;
  padding: 1em;
  width: 100%;

  div, form, section{
    overflow: visible;
  }

  input, textarea, button{
    appearance: none;
    outline: none;
    border-radius: 0;
  }

  section{
    position: relative;
    display: block;
    padding: 2.1em 0 2em;

    .heading{
      font-size: 1.1em;
      font-weight: bold;
      line-height: 2.4;
      color: $primary;
    }

    input[type=text], textarea{
      position: relative;
      display: block;
      width: 100%;
      padding: 0.85em 1.1em 0.8em;
      color: $general;
      background: $white;
      border: none;
      border-bottom: 1px solid rgba($grey, 0.8);
      transition: all 0.5s ease;

      &::placeholder{
        color: rgba($grey, 0.5);
      }

      &:-webkit-autofill{
        -webkit-box-shadow: 0 0 0px 1000px $autofill inset !important;
      }

      &:hover{
        border-color: $general;
      }

      &:focus{
        border-color: transparent;
        box-shadow: $shadow-set;
      }
      & + .border{
        position: relative;
        top: -2px;
        background: $primary;
        width: 100%;
        height: 2px;
        transition: all 0.3s $ease-out;
        transform: scaleX(0);
      }
      &:focus + .border{
        transform: scaleX(1);
      }

      &.error{
        border-color: $error;
      }
      &.error + .border{
        background: $error;
      }
    }

    textarea{
      box-shadow: none;
      border: 1px solid rgba($grey, 0.8);
      overflow-y: scroll;
      line-height: 1.3;
      height: 400px;
    }
    textarea:focus{
      transition: box-shadow 0.3s $ease-out;
      outline: 2px solid $primary;
    }

    .error-message{
      position: absolute;
      top: auto;
      left: 0;
      right: 0;
      padding-left: 1.2em;
      bottom: 0.3em;
      font-size: 0.9em;
      font-weight: bold;
      color: rgba($error, 0.8);
    }
  }

  .btn{
    @include btn;
    &.oem-exchange-btn{
      transition-duration: 0.7s; // transition .oem-exchange を上書き
      &.oemTrue{
        @include btn($primary, $white);
      }
    }
    &:not(.oem-exchange-btn){
      @include hover-touchme;
    }
  }

  .checkbox-container{
    input[type="checkbox"]{
      display: none;
    }
    .lever{
      display: flex;
      flex-flow: row;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      margin: 0.5em auto;
      padding: 0.9em 0;
      padding-left: 1.2em;
      padding-right: 1em;
      font-weight: bold;
      color: $grey;
      border: 1px solid rgba($grey, 0.4);
      border-radius: 5em;
      cursor: pointer;
      transition: all 0.3s ease;

      .circle{
        display: inline-block;
        flex: 0 0 auto;
        width: 0.8em;
        height: 0.8em;
        margin-bottom: 0.05em;
        margin-right: 0.7em;
        border-radius: 50%;
        box-shadow: 0 0 0 1px $grey;
        transition: all 0.3s ease;
      }

      &:hover{
        background: rgba($secondary, 0.1);
        border-color: $secondary;
        color: $secondary;
        .circle{
          box-shadow: 0 0 0 1px $secondary;
        }
      }
    }

    input[type="checkbox"]:checked + .lever{
      color: $primary;
      border-color: $primary;
      .circle{
        box-shadow: 0 0 4px 1px $primary;
        border: 2px solid white;
        background: $primary;
      }
    }
  }

  &.sm{
    font-size: 16rem;
  }

  &.md, &.lg, &.xl{
    max-width: 710px;
    section.flex{
      display: flex;
      flex-flow: row;
      justify-content: space-between;
      align-items: flex-start;

      & > *:first-child{
        padding-top: 0.3em;
      }
      & > *:last-child{
        width: 25em;
        overflow: visible;
      }

      .error-message{
        text-align: center;
        padding-left: 0.9em;
      }
    }
  }

  .oem-exchange{
    position: relative;
    & > div{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
    }
  }
  .oem-exchange-enter-active {
    transition:
      opacity .4s ease,
      transform .4s $ease-out;
  }
  .oem-exchange-leave-active {
    transition:
      opacity .4s ease,
      transform .4s $ease-out;
  }
  .oem-exchange-leave-to {
    opacity: 0;
    transform: translateX(24px);
  }
  .oem-exchange-enter{
    opacity: 0;
    transform: translateX(-24px);
  }

  .attention{
    padding-top: 5em;
    color: $grey;
    text-align: center;
    a{
      color: $primary;
      text-decoration: underline;
    }
  }
  &.sm{
    .attention{
      text-align: left;
    }
  }
}
</style>
