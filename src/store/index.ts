import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: null
  },
  getters: {
    isLogin(state) {
      return state.userInfo !== null
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
