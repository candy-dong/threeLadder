
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
      <el-select v-model="eventValue" placeholder="请选择">
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
       <span>请选择目标变量：</span>
      <el-select v-model="targetValue" placeholder="请选择">
        <el-option
          v-for="item in targetOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <span style="padding-left: 50px;">请选择模型：</span>
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
    <div v-if="active === 2" style="padding-top: 30px;">
      <el-table
        stripe border max-height="500"
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
      <!-- <el-button  @click="next2" style="margin-left: 50px;">一键生成模型</el-button> -->
      <el-button type="primary" plain @click="diolog" style="margin-top:30px">一键生成模型</el-button>
    </div>
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
      eventValue: '',
      // 选择目标变量
      targetOptions: [
        { value: '1', label: '默认', default: true },
        { value: '2', label: '变量1' },
        { value: '3', label: '变量2' },
        { value: '4', label: '变量3' }
      ],
      targetValue: '1',
      // 选择模型
      modelOptions: [
        { value: '1', label: '模型1' },
        { value: '2', label: '模型2' },
        { value: '3', label: '模型3' },
        { value: '4', label: '模型4' }
      ],
      modelValue: '',
      // 模型训练 表格
      tableColum: [{
            value: 'date',
            label: '日期'
          },{
            value: 'name',
            label: '姓名'
          },{
            value: 'address',
            label: '地址'
          }],
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄',
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
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
        const loading = this.$loading({
          lock: true,
          text: '等待中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
          this.active++;
        }, 1000)
      } else {
        this.$message.error('请确保您已选择变量和模型')
      }
    },
    //点击某一行
    rowClick(row, column, event) {
        this.$alert(row.name, {
          confirmButtonText: '确定',
        });
    },
    diolog(){
      let loading = this.$loading({
            lock: true,
            text: '模型训练背景',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
      });
      setTimeout(() => {
          loading.close();
          this.active++;
      }, 1000)
    }
  }
}
</script>