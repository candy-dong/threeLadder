<template>
  <div>
    <img :src="step31" style="width: 100%;">
    <img :src="step32" style="width: 100%;">
    <img :src="step33" style="width: 100%;">
    <img v-if="$store.state.flag" :src="step34" style="width: 100%;">
    <div style="display: flex; justify-content: flex-end;">
      <el-button type="primary" plain @click="step3">一键跑批</el-button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'yijianpaopi',
  data: {
    step31: require('../assets/step3-1.png'),
    step32: require('../assets/step3-2.png'),
    step33: require('../assets/step3-3.png'),
    step34: require('../assets/step3-4.png'),
  },
  methods: {
    step3() {
      this.$emit('handle')
    }
  }
}
</script>