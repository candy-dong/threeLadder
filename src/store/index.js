import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    flag: false,
    modelList: [],
    compareList: [],
    options:[
      // {
    //   value: '1',
    //   label: '12生肖促办卡活动2'
    // }, 
    {
      value: '2',
      label: '12生肖促办卡活动1'
    }, {
      value: '3',
      label: '蜜卡促办卡活动'
    }, {
      value: '4',
      label: '不动户促活活动'
    }, {
      value: '5',
      label: '最红5积分活动'
    }, {
      value: '6',
      label: '移动支付活动'
    }, {
      value: '7',
      label: '销卡挽留活动'
    }, {
      value: '8',
      label: '信用就医活动'
    }]
  },
  mutations: {
    setModel(state) {
      const data = [
        { value: '0', label: '十二生肖加办卡模型' },
        { value: '1', label: '好享贷模型' },
        { value: '2', label: '商城分期场景模型' },
        { value: '3', label: '金升白金邀请反应率模型' },
        { value: '4', label: '不动户活动敏感预测模型' },
        { value: '5', label: '买单吧失活模型' }
      ]
      state.modelList = data
      state.flag = true
      state.options = [
      {
        value: '1',
        label: '12生肖促办卡活动2'
      }, 
      {
        value: '2',
        label: '12生肖促办卡活动1'
      }, {
        value: '3',
        label: '蜜卡促办卡活动'
      }, {
        value: '4',
        label: '不动户促活活动'
      }, {
        value: '5',
        label: '最红5积分活动'
      }, {
        value: '6',
        label: '移动支付活动'
      }, {
        value: '7',
        label: '销卡挽留活动'
      }, {
        value: '8',
        label: '信用就医活动'
      }]
    },
    setCompare(state) {
      const data = [
        { value: '0', label: '12生肖活动对比组' }
      ]
      state.compareList = data
    }
  },
  actions: {
  },
  modules: {
  }
})
