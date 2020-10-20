import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    modelList: [],
    compareList: []
  },
  mutations: {
    setModel(state) {
      const data = [
        { value: '0', label: '模型1' },
        { value: '1', label: '模型2' },
        { value: '2', label: '模型3' },
        { value: '4', label: '模型4' },
        { value: '3', label: '模型5' },
      ]
      state.modelList = data
    },
    setCompare(state) {
      const data = [
        { value: '0', label: '对比组1' },
        { value: '1', label: '对比组2' },
        { value: '2', label: '对比组2' },
        { value: '4', label: '对比组3' },
        { value: '3', label: '对比组4' },
      ]
      state.compareList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
