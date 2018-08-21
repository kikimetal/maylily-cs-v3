import Vuex from 'vuex'

const store = () => new Vuex.Store({

  state: {
    counter: 0,
    ww: {
      value: 1000,
      sm: true,
      md: false,
      lg: false,
      xl: false,
      sizes: ['sm'],
    },
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    setww (state) {
      const ww = window.innerWidth
      state.ww.value = ww
      state.ww.md = ww > 768
      state.ww.lg = ww > 1024
      state.ww.xl = ww > 1600
      const sizes = ['sm']
      state.ww.md && sizes.push('md')
      state.ww.lg && sizes.push('lg')
      state.ww.xl && sizes.push('xl')
      state.ww.sizes = sizes
    }
  }
})

export default store
