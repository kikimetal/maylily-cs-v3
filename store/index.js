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

  },
  mutations: {

    setWindowWidth (state) {
      const ww = window.innerWidth
      state.ww.value = ww
      state.ww.md = ww > 768
      state.ww.lg = ww > 1024
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

    toggleNav(state, isShow){
      if (isShow === undefined) {
        state.isShowNav = !state.isShowNav
      }else{
        state.isShowNav = isShow
      }
    }
  }
})

export default store
