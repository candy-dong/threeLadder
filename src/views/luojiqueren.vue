<template>
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
        <!-- <el-input v-model="scope.row.input"  placeholder="请输入内容"></el-input> -->
        <el-select v-model="scope.row.value3" placeholder="请选择" style="margin-top: 5px">
          <el-option
            v-for="item in scope.row.filterOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <el-table-column
      label="操作"
      width="260px">
      <template slot-scope="scope">
        <el-button type="primary" @click="handleClick(scope.row)" size="small">WHERE预览</el-button>
        <el-button type="danger"  @click.native.prevent="deleteRow(scope.$index, tableData)" size="small">删除</el-button>
        <el-button type="success" @click="handleClick(scope.row)" size="small">提示</el-button>
        <!-- <el-button type="text" size="small">编辑</el-button> -->
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { log } from 'util';
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
        value2 = '0',
        filterOptions = [{
          value: '0',
          label: '是'
        },{
          value: '1',
          label: '否'
        }],
        value3 = '1',
        input = ''
  export default {
    name: 'luojiqueren',
    data() {
      return {
        tableData: [ {
          date: '13',
          city: '进系统月份',
          address: 'VARCHAR(1)',
          options,
          value1,
          value2,
          value3,
          varOptions,
          input,
          filterOptions
        }, {
          date: '869',
          city: '是否最新新户标识（含销户六个月）',
          address: 'VARCHAR(1)',
          options,
          value1,
          value2,
          value3,
          varOptions,
          input,
          filterOptions
        }, {
          date: '675',
          city: '发卡渠道大类',
          address: 'VARCHAR(1)',
          options,
          value1,
          value2,
          value3,
          varOptions,
          input,
          filterOptions
        }, {
          date: '23',
          city: '发卡量',
          address: 'BIGINT',
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
      deleteRow(index, rows) {
        if(rows[index].date == '13' || rows[index].date == '23') {
          rows.splice(index, 1);
        }
      }
    },

  }
</script>