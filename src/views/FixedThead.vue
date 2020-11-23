<template>
  <div class="app-container">
    <div class="menu">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          <i class="el-icon-menu"></i><i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item><el-checkbox v-model="checkboxVal.user_id">user_id</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.imei">imei</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.model">model</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.open_udid">open_udid</el-checkbox></el-dropdown-item>
          <el-dropdown-item><el-checkbox v-model="checkboxVal.keychain_uuid">keychain_uuid</el-checkbox></el-dropdown-item>
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
const defaultFormThead = ['user_id', 'imei', "model", "open_udid", "keychain_uuid"]

export default {
  name: 'FixedThead',
  data() {
    return {
      radioFlag: '',
      tableData: [
        {
          user_id: '123121***', imei: 'afj22******83218ask', model: '239f-******-fsad-lf', open_udid: '1290-******-ekff-3o', keychain_uuid: '1092-******-39al-ke'
        },
        {
          user_id: '980412***', imei: 'f2pos******aj389qcn', model: '2309-******-2980-fo', open_udid: '2309-******-slka-ei', keychain_uuid: '2390-******-f32l-3o'
        },
        {
          user_id: '391298***', imei: '12091******d389fds2', model: '0923-******-fjas-32', open_udid: '3290-******-na90-3k', keychain_uuid: '290v-******-sdlk-al'
        },
        {
          user_id: '198233***', imei: '2930d******w2cnaw83', model: '2908-******-klfv-92', open_udid: '2390-******-2398-23', keychain_uuid: '2980-******-90fv-ao'
        },
        {
          user_id: '290833***', imei: '1209a******qvj32c9f', model: '2039-******-2908-29', open_udid: '2309-******-jiwe-if', keychain_uuid: '2390-******-98vj-as'
        },
        {
          user_id: '290318***', imei: '12093******f9032esv', model: '2309-******-f230-82', open_udid: '2908-******-f322-08', keychain_uuid: '2093-******-jklf-29'
        },
        {
          user_id: '289391***', imei: '1209d******ealsdw28', model: '2901-******-dkf3-98', open_udid: '0298-******-3fas-kl', keychain_uuid: '2109-******-kjdf-o2'
        },
        {
          user_id: '209382***', imei: '23902******a3908dal', model: '2903-******-kdfi-p1', open_udid: '0293-******-lkf3-89', keychain_uuid: '2309-******-lf23-81'
        },
        {
          user_id: '219309***', imei: '0981f******tfop3a98', model: '2098-******-ldf2-98', open_udid: '2093-******-jf32-08', keychain_uuid: '2908-******-kf32-82'
        },
        {
          user_id: '923192***', imei: '1029t******39023t23', model: '2903-******-klf1-3k', open_udid: '2039-******-slk3-kj', keychain_uuid: '2039-******-lk09-23'
        },
      ],
      key: 1, // table key
      formTheadOptions: ['user_id', 'imei', "model", "open_udid", "keychain_uuid"],
      checkboxVal: {
        user_id: true,
        imei: true,
        model: true,
        open_udid: true,
        keychain_uuid: true
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
