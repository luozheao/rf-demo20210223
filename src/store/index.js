import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    obj: {
      man: 0,
      woman: 0
    }
  },
  mutations: {
    commitArrMsg(state, preload) {
      state.obj = preload
    }
  },
  actions: {
  },
  modules: {
  }
})
