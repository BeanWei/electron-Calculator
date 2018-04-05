/* eslint-disable */
import Vue from 'vue'
import Vuex from 'vuex'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  strict: process.env.NODE_ENV !== 'production',
  state: {
    result: '',
    enter: '',
    prevval: ''
  },
  mutations: {
    calculate (state, value) {
      if (state.enter === '') {
        if (value === '=' || value === '-' || value === '+' || value === '*' || value === '/') return
      }
      // if (value === '=' || value === '-' || value === '+' || value === '*' || value === '/') {
      //   if (state.prevval === '=' || state.prevval === '-' || state.prevval === '+' || state.prevval === '*' || state.prevval === '/') return
      // }
      state.prevval = value
      if (value === '=') {
        state.result = eval(state.enter)
        state.enter += value.replace('=', '')
        // state.enter = ''
      } else if (value === 'CE') {
        state.result = state.enter = ''
      } else {
        state.enter += value
      }
    }
  }
})
