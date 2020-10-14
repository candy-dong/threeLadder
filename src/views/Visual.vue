<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="选择活动"></el-step>
      <el-step :title="step2"></el-step>
      <el-step :title="step3"></el-step>
    </el-steps>
    <div v-if="active === 0" style="padding-top: 30px;">
      <span>请选择活动：</span>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span style="padding-left: 50px;">请选择活动内容：</span>
      <el-select v-model="value1" placeholder="请选择">
        <el-option
          v-for="item in options1"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click="next1" style="margin-left: 50px;">下一步</el-button>
    </div>
    <div v-if="active === 1 && value1 == '1'" style="padding-top: 30px;">
      ssdds
    </div>
    <div v-if="active === 1 && value1 == '2'" style="padding-top: 30px;">
      外部数据上传
    </div>
  </div>
</template>

<script>
export default {
  name: 'Visual',
  data() {
    return {
      active: 0,
      step2: '',
      step3: '',
      options: [{
        value: '1',
        label: '活动1'
      }, {
        value: '2',
        label: '活动2'
      }, {
        value: '3',
        label: '活动3'
      }, {
        value: '4',
        label: '活动4'
      }, {
        value: '5',
        label: '活动5'
      }],
      value: '',
      options1: [
        { value: '1', label: '活动跟踪' },
        { value: '2', label: '活动分析' }
      ],
      value1: ''
    }
  },
  methods: {
    next1() {
      if (this.value && this.value1) {
        if (this.value1 === '1') {
          this.step2 = '选择指标'
        } else {
          this.step2 = '外部数据上传'
        }
        this.active++
      } else {
        this.$message.error('请确保您已选择活动和活动内容')
      }
    }
  }
}
</script>