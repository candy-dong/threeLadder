<template>
  <div>
    <!-- 文件分包设置 -->
    <h3 style="margin-top: 0;">文件分包设置</h3>
    <el-form ref="form" :model="form" label-width="180px" style="width:1300px;">
      <el-form-item label="前置文件名：" style="">
        <el-input v-model="form.name" style="width: 500px;"></el-input>
      </el-form-item>
      <el-form-item label="文件分包方式："  style="">
        <el-select v-model="form.region" placeholder="请选择">
          <el-option label="常规分包" value="1"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="分包百分比设置（%）：">
        <span>控制组：</span><el-input v-model="form.name" style="width: 300px"></el-input> % 
        <span>对比组：</span><el-input v-model="form.name" style="width: 300px"></el-input> %
      </el-form-item>
      <el-form-item label="HIVE跑批总行数：">
        <span>3118368</span>
      </el-form-item>
      <el-form-item label="数据输出数量：">
        <el-input v-model="form.nameData" style="width: 300px"></el-input><span> *设置输出数据总量</span>
      </el-form-item>
      <el-form-item label="分包输出数：">
        <el-input v-model="form.nameData" style="width: 300px"></el-input><span> *设置单个文件所含数据量</span>
      </el-form-item>
      <el-form-item label="分包操作：">
        <el-button type="primary">保存设置</el-button>
        <el-button @click="onSubmit">数据生成并归档</el-button>
      </el-form-item>
    </el-form>
    <!-- 显示字段顺序 -->
    <h3 style="">显示字段顺序</h3>
    <!-- <video src="../assets/shuchu.mp4" autoplay="autoplay" style="width: 100%;"></video> -->
     <el-table
    :data="tableData"
    border
    style="width: 100%;margin-top:30px;" :header-cell-style="{'text-align':'center'}">
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
      width="260px">
      <template slot-scope="scope">
        <el-button type="primary" @click="handleClick(scope.row)" size="small">WHERE预览</el-button>
        <el-button type="danger" size="small">删除</el-button>
        <el-button type="success" @click="handleClick(scope.row)" size="small">提示</el-button>
        <!-- <el-button type="text" size="small">编辑</el-button> -->
      </template>
    </el-table-column>
  </el-table>
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
  name: 'peizhishuchu',
  data() {
    return {
        // 表单
         form: {
          name: '',
          region: '',
          nameData: 3118368
        },
      // 表格
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
      handleClick(row) {
        console.log(row);
      },
       onSubmit() {
         this.$alert('操作成功', '提示', {
          confirmButtonText: '确定',
        });
      }

  },
}
</script>
<style scoped>
.el-form .el-form-item {
  margin-bottom: 22px;
}
</style>