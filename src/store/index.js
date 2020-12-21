import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseFileServer: '',
    basicInfo: {
      bannerUri: require('../assets/tmp/1.png')
    },
    loginUser: null
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
