<template>

  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="逻辑确认"></el-step>
      <el-step title="渠道选择"></el-step>
      <el-step title="一健跑批"></el-step>
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
        <el-form-item  v-if="active===1" label="渠道选择">
          <el-select v-model="form.region" placeholder="请选择渠道">
            <el-option label="email" value="email"></el-option>
            <el-option label="push" value="push"></el-option>
            <el-option label="短信" value="短信"></el-option>
            <el-option label="微信" value="微信"></el-option>
            <el-option label="ob" value="ob"></el-option>
          </el-select>
          <el-button  type="primary" plain @click="step2" style="margin-left: 10px">确 定</el-button>
        </el-form-item>
        <!-- 一健跑批 -->
        <el-form-item v-if="active===2" label="一键跑批">
          <el-button  type="warning" plain @click="step3">一健跑批</el-button>
          <div class="tableau" style="margin-top: 20px">一键跑批录屏</div>
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
      form: {
          region: '',
        },
       active: 0
    }
  },
   methods: {
      step1() {
        // if (this.active++ > 2) this.active = 1;
        this.active = 1;
      },
      step2() {
        this.active = 2;
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