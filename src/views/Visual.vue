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
    <div v-if="active === 1 && value1 == '1'" style="padding-top: 50px; display: flex; align-items: center;">
      <span style="padding-right: 30px;">请选择指标：</span>
      <el-checkbox-group v-model="checkList">
        <el-checkbox label="进件量"></el-checkbox>
        <el-checkbox label="发卡量"></el-checkbox>
        <el-checkbox label="激活量"></el-checkbox>
        <el-checkbox label="首刷量"></el-checkbox>
      </el-checkbox-group>
      <el-button @click="next2" style="margin-left: 50px;">下一步</el-button>
    </div>
    <div v-if="active === 1 && value1 == '2'">
      <h3>外部数据上传</h3>
      <el-upload
        class="upload"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <!-- <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div> -->
      </el-upload>
      <!-- <el-button slot="trigger" size="small" type="primary" class="upConfirm">确 定</el-button> -->
      <el-table
        stripe border max-height="500"
        :data="tableData"
        style="width: 100%;margin-top:20px"
        @row-click="rowClick">
          <el-table-column
            v-for="item in tableColum"
            :key="item.label"
            :prop="item.value"
            :label="item.label">
          </el-table-column>
      </el-table>
    </div>
    <div v-if="active === 2 && value1 == '1'"  style="padding-top: 30px;">
      <el-row :gutter="32">
        <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <div class="selectCon">
            <el-select v-model="zhibiaoSelect" @change="selectChange" size="mini">
              <el-option
                v-for="item in optionsZhibiao"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>
            <el-select v-model="chartSelect" size="mini">
              <el-option
                v-for="item in optionsChart"
                :key="item.value"
                :label="item.label"
                :value="item.value">
                <img :src="item.img" alt="" width="30"><span style="padding-left: 10px;">{{item.label}}</span>
              </el-option>
            </el-select>
          </div>
          <chart :chart-data="chartData" :chart-type="chartSelect" />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="12">
        <div class="chart-wrapper">
          <div class="selectCon">
            <el-select v-model="zhibiaoSelect1" @change="selectChange1" size="mini">
              <el-option
                v-for="item in optionsZhibiao"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
            <el-select v-model="chartSelect1" size="mini">
              <el-option
                v-for="item in optionsChart"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
                <img :src="item.img" alt="" width="30"><span style="padding-left: 10px;">{{item.label}}</span>
              </el-option>
            </el-select>
          </div>
          <chart :chart-data="chartData1" :chart-type="chartSelect1"/>
        </div>
      </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import chart from './LineChart.vue'
const lineChartData = {
  newVisitis: {
    data: [100, 120, 161, 134, 105, 160, 165],
    time: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    title: '进件量'
  },
  messages: {
    data: [200, 192, 120, 144, 160, 130, 140],
    time: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    title: '发卡量'
  },
  purchases: {
    data: [80, 100, 121, 104, 105, 90, 100],
    time: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    title: '激活量'
  },
  shoppings: {
    data: [130, 140, 141, 142, 145, 150, 160],
    time: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
    title: '首刷量'
  }
}
export default {
  name: 'Visual',
  components: {
    chart
  },
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
      value1: '',
      checkList: ['进件量','激活量'],
      chartData: lineChartData.newVisitis,
      chartData1: lineChartData.purchases,
      zhibiaoSelect: 'newVisitis',
      zhibiaoSelect1: 'purchases',
      optionsZhibiao: [{
        value: 'newVisitis',
        label: '进件量'
      }, {
        value: 'messages',
        label: '发卡量'
      }, {
        value: 'purchases',
        label: '激活量'
      }, {
        value: 'shoppings',
        label: '首刷量'
      }],
      optionsChart: [{
        value: '线性图',
        label: '线性图',
        img: require('../assets/IMG_8815.png')
      }, {
        value: '柱状图',
        label: '柱状图',
        img: require('../assets/IMG_8814.png')
      }, {
        value: '饼状图',
        label: '饼状图',
        img: require('../assets/IMG_8812.png')
      }],
      chartSelect: '线性图',
      chartSelect1: '线性图',
         // 模型训练 表格
      tableColum: [{
            value: 'date',
            label: '日期'
          },{
            value: 'name',
            label: '姓名'
          },{
            value: 'sex',
            label: '性别'
          },{
            value: 'age',
            label: '年龄'
          },{
            value: 'remark',
            label: '职位'
          },{
            value: 'address',
            label: '地址'
          }],
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            sex: '男',
            age: '24',
            remark: '销售员',
            address: '上海市普陀区金沙江路 1518 弄',
          }, {
            date: '2016-05-04',
            name: '赵明明',
            sex: '男',
            age: '35',
            remark: '经理',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王凌凌',
            sex: '女',
            age: '20',
            remark: '实习生',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
           name: '杨霞',
            sex: '女',
            age: '42',
            remark: '总监',
            address: '上海市普陀区金沙江路 1516 弄'
          }, {
            date: '2016-05-23',
           name: '朱三',
            sex: '男',
            age: '36',
            remark: '总经理',
            address: '上海市普陀区金沙江路 1534 弄'
          }]
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
    },
    next2() {
      this.step3 = '图形展示'
      this.active++
    },
    selectChange() {
      this.chartData = lineChartData[this.zhibiaoSelect]
    },
    selectChange1() {
      this.chartData1 = lineChartData[this.zhibiaoSelect1]
    }
  }
}
</script>
<style scoped>
.chart-wrapper {
  background: rgb(255, 255, 255);
  padding: 16px 16px 0px;
}
.selectCon {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.upConfirm {
  margin: 20px 0;
}
.el-select-dropdown__item {
  display: flex;
  align-items: center;
}
</style>