import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    basicInfo: {
      bannerUri: require('../assets/tmp/1.png')
    },
    loginStates: {
      login: 1,
      userHead: require('../assets/tmp/3.webp'),
      userName: 'zhengyi59',
      filterR18: false
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
