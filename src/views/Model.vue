
<template>
  <div>
    <el-steps :active="active" finish-status="success">
      <el-step title="选择活动"></el-step>
      <el-step title="模型选择"></el-step>
      <el-step title="模型训练"></el-step>
    </el-steps>
    <!-- 选择活动 -->
    <div v-if="active === 0" style="padding-top: 30px;">
      <span>请选择活动：</span>
      <el-select v-model="eventValue" filterable placeholder="请选择">
        <el-option
          v-for="item in eventOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-button @click="next1" style="margin-left: 50px;">下一步</el-button>
    </div>
    <!-- 模型选择 -->
    <div v-if="active === 1" style="padding-top: 30px;">
       <span>选择目标变量：</span>
      <el-select v-model="targetValue" placeholder="请选择">
        <el-option
          v-for="item in targetOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span style="padding-left: 50px;">选择模型：</span>
      <el-select v-model="modelValue" placeholder="请选择">
        <el-option
          v-for="item in modelOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          @click="handleClick(scope.row)">
        </el-option>
      </el-select>
      <el-button  @click="next2" style="margin-left: 50px;">下一步</el-button>
    </div>
    <!-- 模型建设 -->
    <div v-if="active === 2"  style="padding-top: 30px;">
      <h3 style="margin-top: 0">KS图：</h3>
      <div style="display: flex; justify-content: center;">
        <img src="../assets/ks.png" alt="ks图" style="width: 500px;height:auto">
      </div>
      <el-table
        stripe border
        :data="tableData"
        style="width: 100%"
        @row-click="rowClick">
          <el-table-column
            v-for="item in tableColum"
            :key="item.label"
            :prop="item.value"
            :label="item.label">
          </el-table-column>
      </el-table>
      <div style="display: flex; justify-content: center;">
        <el-button type="primary" plain @click="diolog" style="margin-top:30px; width: 180px; height: 50px; font-size: 20px;">一键生成模型</el-button>
      </div>
      
    </div>
    <div v-if="active === 3"  style="padding-top: 30px;"></div>
		<!-- 加载中 -->
		<div class="loading-bg" v-if="loading"><div class="loading-spinner">
			<img src="../assets/loading.gif" alt="正在加载" class="loading-img">	
		</div></div>
  </div>
</template>

<script>
export default {
  name: 'Model',
  data() {
    return {
      active: 0,
      step2: '',
      step3: '',
      // 选择活动
      eventOptions: [{
        value: '1',
        label: '12生肖促办卡'
      }, {
        value: '2',
        label: '互联网新户获客'
      }, {
        value: '3',
        label: '最红星期五预热'
      }, {
        value: '4',
        label: '他行户获客促动'
      }, {
        value: '5',
        label: 'MGM推荐办卡'
      }, {
        value: '6',
        label: '分行发卡营销'
      }, {
        value: '7',
        label: '预先反销卡活动'
      }],
      eventValue: '1',
      // 选择目标变量
      targetOptions: [
        { value: '1', label: 'target', default: true },
        { value: '2', label: '进件' },
        { value: '3', label: '发卡' },
        { value: '4', label: '激活' },
        { value: '5', label: '交易' }
      ],
      targetValue: '1',
      // 选择模型
      modelOptions: [
        { value: '1', label: '逻辑回归' },
        { value: '2', label: '线性回归' },
        { value: '3', label: '随机森林' },
        { value: '4', label: '支持向量机'},
        { value: '5', label: '神经网络'},
        { value: '6', label: 'LGB'},
        { value: '7', label: 'XGB'}
      ],
      modelValue: '1',
      // 模型训练 表格
      tableColum: [{
            value: 'date',
            label: '影响因素'
          },{
            value: 'name',
            label: 'IV值'
          }],
      tableData: [{
            date: '近3个月买单吧APP登陆天数最大值',
            name: '1.358985',
            data: '客户加办卡概率随近3个月买单吧APP登陆天数最大值的增加而增加',
          }, {
            date: '近三个月消息记录平均打开天数',
            name: '1.217111',
            data: '客户加办卡概率随近三个月消息记录平均打开天数的增加而增加'
          }, {
            date: '最近1个月打开买单吧APP天数',
            name: '1.067857',
            data: '客户加办卡概率随最近1个月打开买单吧APP天数的增加而减少'
          }, {
            date: '最近活户月距今月数',
            name: '0.990223',
            data: '客户加办卡概率随最近活户月距今月数的增加而增加'
					}, {
            date: '最近6个月积分奖励次数',
            name: '0.872185',
            data: '客户加办卡概率随最近6个月积分奖励次数的增加而增加'
          }, {
            date: '最近3个月消费次数',
            name: '0.864489',
            data: '客户加办卡概率随最近3个月消费次数的增加而增加'
          }, {
            date: '历史共绑卡数',
            name: '0.795255',
            data: '客户加办卡概率随历史共绑卡数的增加而增加'
          }, {
            date: '最近1个月还款金额/最近3个月平均还款金额',
            name: '0.785706',
            data: '客户加办卡概率随最近1个月还款金额/最近3个月平均还款金额的增加而增加'
          }, {
            date: 'APPSESSION次数',
            name: '0.761118',
            data: '客户加办卡概率随近APPSESSION次数的增加而增加'
          }, {
            date: '当月总额度使用率',
            name: '0.745075',
            data: '客户加办卡概率随当月总额度使用率的增加而增加'
          }, {
            date: '最近6个月所有类型活动达标次数',
            name: '0.738304',
            data: '客户加办卡概率随最近6个月所有类型活动达标次数的增加而增加'
          }],
					loading: false
    }
  },
  methods: {
    next1() {
      if (this.eventValue) {
        this.active++
      } else {
        this.$message.error('请确保您已选择活动和活动内容')
      }
    },
    next2() {
      if (this.targetValue && this.modelValue) {
        this.loading = true
        setTimeout(() => {
					this.loading = false
          this.active++;
        }, 1000)
      } else {
        this.$message.error('请确保您已选择变量和模型')
      }
    },
    //点击某一行
    rowClick(row, column, event) {
        this.$alert(row.data, {
          confirmButtonText: '确定',
        });
    },
    diolog(){
			this.active++;
			this.loading = true
      setTimeout(() => {
        this.loading = false
        this.$alert('模型已生成成功！', {
          confirmButtonText: '确定',
          type: 'success'
        })
        this.$store.commit('setModel')
        this.$store.commit('setCompare')
      }, 2000)
    }
  }
}
</script>
<style scoped>
.ks {
  width: 300px;
  height: 100px;
  margin-bottom: 30px;
  border: 1px solid red;
}
.loading-bg {
	position: fixed;
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