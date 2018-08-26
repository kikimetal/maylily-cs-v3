import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    ww: {
      value: 1000,
      sm: true,
      md: false,
      lg: false,
      xl: false,
      size: 'sm',
      sizes: ['sm'],
    },
    isShowNav: false,
    modal: {
      isShow: false,
      content: {
        title: 'modal title',
        subtitle: 'modal subtitle',
        text: ['modal', 'modal', 'modal'],
        links: [{
          external: false,
          word: 'top',
          to : '/',
        }],
      },
    }
  },
  mutations: {

    setWindowWidth (state) {
      const ww = window.innerWidth
      state.ww.value = ww
      state.ww.md = ww > 600
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
      state.ww.size = size
      state.ww.sizes = sizes
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
      // console.log('store', content) // TODO: remove
    },

    hideModal (state) {
      state.modal.isShow = false
    }
  }
})

export default store
