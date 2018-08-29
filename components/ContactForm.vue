<template>
  <form ref="form" :class="['MailForm', $store.state.ww.size]">

    <section class="flex">
      <h1 class="heading">会社名 (任意)</h1>
      <label>
        <input
        type="text"
        name="company"
        placeholder="名前を入力してください"
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
        placeholder="名前を入力してください"
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
        placeholder="example@maylily.com"
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
        placeholder="03-1234-1234"
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
        placeholder="03-1234-1234"
        v-model="address"
        v-validate="'required|max:14'">
        <div class="border" />
        <transition name="page">
          <div class="error-message" v-show="hasError('address')">入力が正しくありません！</div>
        </transition>
      </label>
    </section>

    <section>
      <h1 class="heading">お問い合わせ内容 (必須)</h1>
      <div class="checkbox-container">
        <label>
          <input type="checkbox" v-model="contactTypeSelect" value="ROSE DARENA"/>
          <div class="lever"><span class="circle" />"ROSE DARENA"について</div>
        </label>
        <label>
          <input type="checkbox" v-model="contactTypeSelect" value="GARMENT"/>
          <div class="lever"><span class="circle" />"GARMENT"について</div>
        </label>
        <label>
          <input type="checkbox" v-model="contactTypeSelect" value="ローズ原料事業"/>
          <div class="lever"><span class="circle" />"ローズ原料事業"について</div>
        </label>
        <label>
          <input type="checkbox" v-model="contactTypeSelect" value="その他"/>
          <div class="lever"><span class="circle" />その他のお問い合わせ</div>
        </label>
      </div>
    </section>

    <section>
      <h1 class="heading">メッセージ本文 (必須)</h1>
      <label>
        <textarea
        placeholder="お問い合わせ内容を入力してください"
        v-model="message" />
      </label>
    </section>

    <br>
    <button class="submit" @click.prevent="handleCheckAll">CHECK</button>
    <button class="submit" @click.prevent="submit">SEND</button>

  </form>
</template>

<script>
import axios from 'axios'
import Vue from 'vue'
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

export default {
  data () {
    return {
      title: 'コンタクトフォームからのお問い合わせです。',
      company: '',
      name: '',
      phone: '',
      zipcode: '',
      email: '',
      address: '',
      contactTypeSelect: [],
      message: "",
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
      const formData = {
        title: this.title,
        name: this.name,
        email: this.email,
        contactTypeSelect: this.contactTypeSelect,
        message: this.message,
      }
      // なにこの曲者...
      let params = new URLSearchParams(formData)
      const res = await axios.post(apiUrl, params)
      console.log(res)
      this.$router.push({path: '/contact/complete'})
      // return alert('OK, SEND')
    },

    handleCheckAll () {
      this.checked = true

      const target = [
        this.title,
        this.name,
        this.email,
      ]
      const found = target.find(value => value === '' || value === null)
      const isInputAll = found === undefined
      const isValidAll = !this.errors.items.length

      if (isInputAll && isValidAll) return true
      else return false
    },

    hasError (name) {
      return this.errors.has(name) || this.checked && !this[name]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '~/assets/css/myset.scss';

.MailForm{
  font-size: 17rem;
  margin: auto;
  padding: 2em;
  width: 100%;
  overflow: visible;

  input, textarea, button{
    appearance: none;
    outline: none;
    border-radius: 0;
  }

  section{
    position: relative;
    display: block;
    padding: 2.1em 0 2em;
    overflow: visible;

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

  .submit{
    padding: 1em 3em;
    border: none;
    border-radius: 3em;
    background: $primary;
    color: white;
    font-weight: bold;
    box-shadow: $shadow-set;
    cursor: pointer;
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
      padding: 0.9em 1.3em;
      font-weight: bold;
      color: $grey;
      border: 1px solid rgba($grey, 0.4);
      border-radius: 5em;
      cursor: pointer;
      transition: all 0.3s ease;

      .circle{
        display: inline-block;
        width: 0.8em;
        height: 0.8em;
        margin-bottom: 0.05em;
        margin-right: 0.75em;
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
}
</style>
