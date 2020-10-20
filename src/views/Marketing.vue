<template>

  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="数据探索"></el-step>
      <el-step title="逻辑确认"></el-step>
      <el-step title="一键跑批"></el-step>
      <el-step title="配置输出  "></el-step>
    </el-steps>
     <el-form ref="form" label-width="120px" style="margin-top: 30px">
        <!-- 逻辑确认 -->
        <el-form-item v-if="active===0" label="数据探索">
          <div class="tableau">tableau页面录屏</div>
        </el-form-item>
        <el-form-item v-if="active===0" label="生成沟通名单" >
          <el-button type="primary" plain @click="step1">确 定</el-button>
          <div class="clear"></div>
        </el-form-item>
        <!-- 渠道选择 -->
        <el-form-item  v-if="active===1" label="模型选择" class = "formItem">
          <el-select v-model="modelValue" placeholder="请选择模型">
            <el-option
              v-for="item in modelList"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item  v-if="active===1" label="对比组选择" class = "formItem">
          <el-select v-model="compareValue" placeholder="请选择对比组">
            <el-option
              v-for="item in compareList"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <el-button  type="primary" plain @click="step2" style="margin-left: 10px">确 定</el-button>
        </el-form-item>
        <!-- 一键跑批 -->
        <el-form-item  v-if="active===2" label="渠道选择">
          <el-select v-model="value" placeholder="请选择渠道">
            <el-option
              v-for="item in region"
              :key="item.value"
              :label="item.label"
              :value="item.value"></el-option>
          </el-select>
          <!-- <el-button  type="primary" plain @click="step2" style="margin-left: 10px">确 定</el-button> -->
        </el-form-item>
        <el-form-item v-if="active===2" label="一键跑批">

          <el-button  type="primary" plain @click="step3">确 定</el-button>
        </el-form-item>
        <el-form-item v-if="active===3" label="一键跑批录屏结果" label-width="140px">
          <div class="tableau">一键跑批录屏</div>
        </el-form-item>
      </el-form>
    <div class="clear"></div>
    	<!-- 加载中 -->
		<div class="loading-bg" v-if="loading"><div class="loading-spinner">
			<img src="../assets/loading.gif" alt="正在加载" class="loading-img">	
		</div></div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'Marketing',
  data(){
    return {
       // 模型选择
      modelList:  [
          { value: '0', label: '模型1' },
          { value: '1', label: '模型2' },
          { value: '2', label: '模型3' },
          { value: '4', label: '模型4' },
          { value: '3', label: '模型5' },
        ],
       modelValue: '',
       // 对比组选择
      compareList:  [
          { value: '0', label: '对比组1' },
          { value: '1', label: '对比组2' },
          { value: '2', label: '对比组2' },
          { value: '4', label: '对比组3' },
          { value: '3', label: '对比组4' },
        ],
      compareValue: '',
      // 渠道选择
      region:  [
          { value: '0', label: 'email' },
          { value: '1', label: 'push' },
          { value: '2', label: '短信' },
          { value: '4', label: '微信' },
          { value: '3', label: 'ob' },
        ],
      active: 0,
      value: '',
      loading: false
      }

  },
   methods: {
      step1() {
        this.active = 1;
      },
      step2() {
        if (this.modelValue && this.compareValue) {
         this.active = 2;
        }else {
          this.$message.error('请确保您已选择模型和对比组')
        }
      },
      step3() {
        if (this.value) {
          this.loading = true;
          setTimeout(() => {
            this.loading = false
            this.active = 3;
          }, 1000)

        }else {
          this.$message.error('请确保您已选择渠道')
        }
      }

      
    }
}
</script>
<style>
  .formItem {
    float: left;
  }
 .tableau {
    width: 100px;
    height: 100px;
    border: 1px solid red;
 }
 .loading-bg {
	position: absolute;
	z-index: 2000;
	background-color: hsla(0,0%,100%,.75);
	margin: 0;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	transition: opacity .3s;
	display: flex;
	justify-content: center;
	align-items: center;
}
.loading-img {
	width: 300px;
	height: 300px;
	border-radius: 50%;
}
</style>