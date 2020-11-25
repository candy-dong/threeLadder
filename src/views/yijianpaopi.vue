<template>
  <div>
    <!-- <img :src="step31" style="width: 100%;"> -->
    <!-- <img :src="step32" style="width: 100%;"> -->
    <!-- <img :src="step33" style="width: 100%;"> -->
     <el-table
    :data="tableData"
    border
    style="width: 100%;" :header-cell-style="{'text-align':'center'}">
    <el-table-column
      prop="date"
      label="指标ID"
      width="80px"
      align="center">
    </el-table-column>
    
    <el-table-column
      label="逻辑运算"
      width="">
       <template slot-scope="scope">
        <el-select v-model="scope.row.value1" placeholder="请选择">
          <el-option
            v-for="item in scope.row.options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="带括号"
      width="80px"
      align="center">
      <template slot-scope="scope">
       <el-checkbox v-model="scope.row.checked"></el-checkbox>
      </template>
    </el-table-column>
    <el-table-column
      prop="city"
      label="指标名"
      width="220px">
    </el-table-column>
    <el-table-column
      prop="address"
      label="数据类型"
      width="">
    </el-table-column>
    <el-table-column
      label="操作符"
      width="">
       <template  slot-scope="scope">
        <el-select v-model="scope.row.value2" placeholder="请选择">
          <el-option
            v-for="item in scope.row.varOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column
      label="指标条件"
      width="">
      <template  slot-scope="scope">
        <el-input v-model="scope.row.input"  placeholder="请输入内容"></el-input>
        <!-- <el-select v-model="scope.row.value3" placeholder="请选择" style="margin-top: 5px">
          <el-option
            v-for="item in scope.row.filterOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select> -->
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="186px">
      <template slot-scope="scope">
        <el-button type="primary" @click="handleClick(scope.row)" size="small">WHERE预览</el-button>
        <el-button type="danger" size="small">删除</el-button>
        <el-button @click="handleClick(scope.row)" size="small" style="margin-top: 5px; display:block; float:right;">提示</el-button>
        <!-- <el-button type="text" size="small">编辑</el-button> -->
      </template>
    </el-table-column>
  </el-table>
    <!-- <img v-if="$store.state.flag" :src="step34" style="width: 100%;"> -->
    <div style="display: flex; justify-content: flex-end;">
      <el-button type="primary" plain @click="step3" style="margin-top: 10px;">一键跑批</el-button>
    </div>
  </div>
</template>
<script>
let checked = true,
        options = [{
          value: '0',
          label: 'AND'
        }, {
          value: '1',
          label: 'OR'
        }],
        value1 = '0',
        varOptions = [{
          value: '0',
          label: '='
        }, {
          value: '1',
          label: '!='
        },{
          value: '2',
          label: '>'
        },{
          value: '3',
          label: '<'
        },{
          value: '4',
          label: '>='
        },{
          value: '5',
          label: '<='
        }, {
          value: '6',
          label: '类似于'
        }, {
          value: '7',
          label: '包含'
        }, {
          value: '8',
          label: '不包含'
        }],
        value2 = '',
        filterOptions = [{
          value: '0',
          label: '是'
        },{
          value: '1',
          label: '否'
        }],
        value3 = '',
        input = ''
export default {
  name: 'yijianpaopi',
     data() {
      return {
    step31: require('../assets/step3-1.png'),
    step32: require('../assets/step3-2.png'),
    step33: require('../assets/step3-3.png'),
    step34: require('../assets/step3-4.png'),
    tableData: [{
          date: '28',
          name: '王小虎',
          province: '上海',
          city: '近30天消费笔数',
          address: 'BIGINT',
          zip: 200333,
          options,
          value1,
          value2,
          value3,
          varOptions,
          input,
          filterOptions
        }, {
          date: '23',
          name: '王小虎',
          province: '上海',
          city: '开户日期',
          address: 'DATE',
          zip: 200333,
          options,
          value1,
          value2,
          value3,
          varOptions,
          input,
          filterOptions
        }, {
          date: '13',
          name: '王小虎',
          province: '上海',
          city: '纯MV卡客户',
          address: 'VARCHAR(1)',
          zip: 200333,
          options,
          value1,
          value2,
          value3,
          varOptions,
          input,
          filterOptions
        }, {
          date: '941',
          name: '王小虎',
          province: '上海',
          city: '仅持有附属卡客户（AD0198）',
          address: 'VARCHAR(1)',
          zip: 200333,
          options,
          value1,
          value2,
          value3,
          varOptions,
          input,
          filterOptions
        }]
     }
  },
  methods: {
    step3() {
      this.$emit('handle')
    },
     handleClick(row) {
        console.log(row);
      }
  }
}
</script>