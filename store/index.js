import Vuex from 'vuex'
import axios from 'axios'
import heads from '~/assets/heads.js'

const store = () => new Vuex.Store({

  state: {

    heads: heads,

    wwsize: 'sm',
    ww: {
      value: 1000,
      sm: true,
      md: false,
      lg: false,
      xl: false,
      size: 'sm',
      sizes: ['sm'],
    },
    wh: {
      value: 0,
    },

    isScrollTop: true,
    isShowNav: false,

    modal: {
      isShow: false,
      content: {
        title: 'modal title',
        subtitle: 'modal subtitle',
        text: ['modal', 'modal', 'modal'],
        links: [{
          external: false,
          word: null,
          to : '/',
        }],
      },
    },

    sheets: {
      news: {
        status: 'pending',
        data: [],
      }
    },
  },
  mutations: {

    setWindowWidth (state) {
      const ww = window.innerWidth
      state.ww.value = ww
      state.ww.md = ww > 660
      state.ww.lg = ww > 960
      state.ww.xl = ww > 1600

      let size = 'sm'
      let sizes = ['sm']
      if (state.ww.md) {
        size = 'md'
        sizes.push('md')
      }
      if (state.ww.lg) {
        size = 'lg'
        sizes.push('lg')
      }
      if (state.ww.xl) {
        size = 'xl'
        sizes.push('xl')
      }
      state.wwsize = size
      state.ww.size = size
      state.ww.sizes = sizes
    },
    setWindowHeight (state) {
      state.wh.value = window.innerHeight
    },

    setIsScrollTop (state) {
      const isScrollTop = window.scrollY < 100
      if (state.isScrollTop === isScrollTop) return
      state.isScrollTop = isScrollTop
    },

    toggleNav (state, isShow) {
      if (isShow === undefined) {
        state.isShowNav = !state.isShowNav
      }else{
        state.isShowNav = isShow
      }
    },

    showModal (state, content) {
      const exist = !state.modal.isShow && content
      if (!exist) return
      state.modal.isShow = true
      state.modal.content = content
    },

    hideModal (state) {
      state.modal.isShow = false
    },

    async setNewsSheet (state) {

      const sheetName = 'news'

      // console.log('Store sheets status: ', state.sheets[sheetName].status) // TODO: remove

      const exist = state.sheets[sheetName].status === 'pending'
      if (!exist) return

      // console.log('Store sheets: ', 'fetching...') // TODO: remove

      const columns = [
        'separator',
        'brand',
        'pickup',
        'news',
        'date',
        'title',
        'subtitle',
        'align',
        'imgsrc',
        'type',
        'link-to',
        'modal-title',
        'modal-subtitle',
        'modal-text',
        'modal-links-word',
        'modal-links-url',
      ]
      const queryString = `?sheetName=${sheetName}&${columns.join('&')}`
      const apiUrl = 'https://maylily.co.jp/api/getSheet.php'
      const fetchUrl = apiUrl + queryString

      let res = await axios.get(fetchUrl).catch(err => {
        state.sheets[sheetName].status = 'rejected'
        console.error('fetch sheet API is rejected in Store: ', err)
      })

      const separator = res.data[0].separator.trim() || '<split>'
      const fixedData = res.data.map(row => fixRow(row, separator))

      // console.log('Store sheets data: ', fixedData) // TODO: remove

      state.sheets[sheetName].status = 'fulfilled'
      state.sheets[sheetName].data = fixedData

      // console.log('Store sheets status: ', state.sheets[sheetName].status) // TODO: remove

      /**
       * gss-apiから帰ってきた配列の1行分のデータを Card に対応するよう整形
       * @param  { Object } row       1行分のデータ=1つのカード分の情報
       * @param  { String } separator 文字列から配列に整形する際の区切る文字列
       * @return { Object }           Card へ最適化したオブジェクト
       */
      function fixRow (row, separator) {
        // generate object 'links'
        const words = row['modal-links-word'].split(separator)
        const urls = row['modal-links-url'].split(separator)
        const links = words.map((word, i) => ({
          word: word,
          to: urls[i].trim() || '/',
          external: urls[i].trim().indexOf('http') === 0
        }))
        // row の各値は全て String で帰ってくるため、必要に応じて .trim() で空白を削除
        return {
          brand: Number(row['brand'].trim()),
          pickup: Number(row['pickup'].trim()),
          news: Number(row['news'].trim()),
          date: row.date,
          title: row.title.split(separator),
          subtitle: row.subtitle.split(separator),
          align: row.align.trim() || 'left',
          imgsrc: row.imgsrc.trim(),
          type: row.type.trim() || 'link',
          linkto: row['link-to'].trim() || '/',
          modal: row.type.trim() !== 'modal' ? null : {
            title: row['modal-title'].split(separator),
            subtitle: row['modal-subtitle'].split(separator),
            text: row['modal-text'].split(separator),
            links: links,
          },
        }
      } // function fix

    },
  }
})

export default store
