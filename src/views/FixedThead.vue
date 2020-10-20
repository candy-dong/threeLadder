<template>
  <div class="app-container">
    <div class="menu">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          <i class="el-icon-menu"></i><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><el-checkbox v-model="checkboxVal.A">A</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.B">B</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.C">C</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.D">D</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.E">E</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.F">F</el-checkbox></el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <el-table :key="key" :data="tableData" stripe fit highlight-current-row style="width: 100%" @header-click="headerClick">
      <el-table-column v-for="fruit in formThead" :key="fruit" :label="fruit" align='center'>
        <template slot="header" slot-scope="{column}">
          <!-- <div class="wrapper">
            <span class="radio" :class="{active: radioFlag == column.label}"></span><span class="text">{{column.label}}</span>
          </div> -->
          <el-radio v-model="radioFlag" :label="column.label">{{column.label}}</el-radio>
        </template>
        <template slot-scope="scope">
          {{ scope.row[fruit] }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
const defaultFormThead = ['A', 'B', "C", "D", "E", "F"]

export default {
  name: 'FixedThead',
  data() {
    return {
      radioFlag: '',
      tableData: [
        {
          A: 'XX', B: 'XX', C: 'XX', D: 'XX', E: 'XX', F: 'XX'
        },
        {
          A: 'XX', B: 'XX', C: 'XX', D: 'XX', E: 'XX', F: 'XX'
        },
        {
          A: 'XX', B: 'XX', C: 'XX', D: 'XX', E: 'XX', F: 'XX'
        },
        {
          A: 'XX', B: 'XX', C: 'XX', D: 'XX', E: 'XX', F: 'XX'
        },
        {
          A: 'XX', B: 'XX', C: 'XX', D: 'XX', E: 'XX', F: 'XX'
        },
        {
          A: 'XX', B: 'XX', C: 'XX', D: 'XX', E: 'XX', F: 'XX'
        },
      ],
      key: 1, // table key
      formTheadOptions: ['A', 'B', "C", "D", "E", "F"],
      checkboxVal: {
        A: true,
        B: true,
        C: true,
        D: true,
        E: true,
        F: true
      }, // checkboxVal
      formThead: defaultFormThead // 默认表头 Default header
    }
  },
  watch: {
    checkboxVal: {
      handler(valArr) {
        console.log(valArr)
        const arr = []
        for (let key of Object.keys(valArr)) {
          if (valArr[key]) {
            arr.push(key)
          }
        }
        this.formThead = this.formTheadOptions.filter(i => arr.indexOf(i) >= 0)
        this.key = this.key + 1// 为了保证table 每次都会重渲 In order to ensure the table will be re-rendered each time
      },
      deep: true
    }
  },
  methods: {
    headerClick(column, event) {
      this.radioFlag = column.label
    }
  }
}
</script>

<style scoped>
.el-dropdown-link {
    cursor: pointer;
    color: #409EFF;
  }
  .el-icon-arrow-down {
    font-size: 12px;
  }
  .menu {
    display: flex;
    flex-direction: row-reverse;
  }
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .radio {
    display: inline-block;
    border: 1px solid #DCDFE6;
    border-radius: 100%;
    width: 14px;
    height: 14px;
    cursor: pointer;
    box-sizing: border-box;
  }
  .active {
    background-color: #409eff;
  }
  .text {
    line-height: 1;
    padding-left: 10px;
  }
</style>
