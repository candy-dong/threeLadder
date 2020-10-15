<template>

  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="逻辑确认"></el-step>
      <el-step title="渠道选择"></el-step>
      <el-step title="一键跑批"></el-step>
    </el-steps>
     <el-form ref="form" label-width="80px" style="margin-top: 30px">
        <!-- 逻辑确认 -->
        <el-form-item v-if="active===0" label="数据探索">
          <div class="tableau">tableau页面录屏</div>
        </el-form-item>
        <el-form-item v-if="active===0" label="逻辑确认">
          <el-button type="success" plain @click="step1">生成沟通名单</el-button>
          <div class="clear"></div>
        </el-form-item>
        <!-- 渠道选择 -->
        <el-form-item  v-if="active===1" v-model="value" label="渠道选择">
          <el-select v-model="value" placeholder="请选择渠道">
            <el-option
              v-for="item in region"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <el-button  type="primary" plain @click="step2" style="margin-left: 10px">确 定</el-button>
        </el-form-item>
        <!-- 一键跑批 -->
        <el-form-item v-if="active===2" label="一键跑批">
          <el-button  type="warning" plain @click="step3">一键跑批</el-button>
        </el-form-item>
        <el-form-item v-if="active===3" label="一键跑批录屏结果" label-width="140px">
          <div class="tableau">一键跑批录屏</div>
        </el-form-item>
      </el-form>
    <div class="clear"></div>
  </div>
</template>

<script>
export default {
  name: 'Marketing',
  data(){
    return {
      region:  [
          { value: '0', label: 'email' },
          { value: '1', label: 'push' },
          { value: '2', label: '短信' },
          { value: '4', label: '微信' },
          { value: '3', label: 'ob' },
        ],
       active: 0,
       value: ''
      }

  },
   methods: {
      step1() {
        this.active = 1;
      },
      step2() {
        if (this.value) {
         this.active = 2;
        }else {
          this.$message.error('请确保您已选择渠道')
        }
      },
      step3() {
        this.active = 3;
      }
    }
}
</script>
<style>
 .tableau {
    width: 100px;
    height: 100px;
    border: 1px solid red;
 }
</style>