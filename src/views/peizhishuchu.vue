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
      prop=""
      type="index"
      label="序列号"
      width="80px"
      align="center">
    </el-table-column>

    <el-table-column
      prop="zbId"
      label="指标ID"
      width="80px"
      align="center">
    </el-table-column>
    
    <!-- <el-table-column
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
    </el-table-column> -->
    <!-- <el-table-column
      prop="name"
      label="带括号"
      width="80px"
      align="center">
      <template slot-scope="scope">
       <el-checkbox v-model="scope.row.checked"></el-checkbox>
      </template>
    </el-table-column> -->
     <el-table-column
      prop="zbBh"
      label="指标编号"
      width=""
      align="center">
    </el-table-column>
    <el-table-column
      prop="city"
      label="指标名"
      width="220px">
    </el-table-column>
    <!-- <el-table-column
      prop="address"
      label="数据类型"
      width="">
    </el-table-column> -->
    <el-table-column
      prop="fieldName"
      label="字段名"
      width="">
    </el-table-column>
     <el-table-column
      label="是否显示"
      width="">
      <template  slot-scope="scope">
        <el-select v-model="scope.row.value4" placeholder="请选择" style="margin-top: 5px">
          <el-option
            v-for="item in scope.row.isDisplay"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
     <el-table-column
      label="排序方式"
      width="">
      <template  slot-scope="scope">
        <el-select v-model="scope.row.value5" placeholder="请选择" style="margin-top: 5px">
          <el-option
            v-for="item in scope.row.isSort"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column>
    <!-- <el-table-column
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
    </el-table-column> -->
    <!-- <el-table-column
      label="指标条件"
      width="">
      <template  slot-scope="scope">
        <el-input v-model="scope.row.input"  placeholder="请输入内容"></el-input>
        <el-select v-model="scope.row.value3" placeholder="请选择" style="margin-top: 5px">
          <el-option
            v-for="item in scope.row.filterOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </template>
    </el-table-column> -->
     <el-table-column
      label="备注"
      width="">
      <template  slot-scope="scope">
        <el-select v-model="scope.row.value6" placeholder="请选择" style="margin-top: 5px">
          <el-option
            v-for="item in scope.row.remark"
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
        <el-button type="primary" @click="moveUp(scope.$index,scope.row)" size="small">上移</el-button>
        <el-button type="success" @click="moveDown(scope.$index,scope.row)" size="small">下移</el-button>
        <el-button type="danger" size="small" @click.native.prevent="deleteRow(scope.$index, tableData)">删除</el-button>
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
input = '',
isDisplay = [{
  value: '0',
  label: '显示'
},{
  value: '1',
  label: '不显示'
}],
value4 = '',
isSort = [{
  value: '0',
  label: '排序'
},{
  value: '1',
  label: '不排序'
}],
value5 = '1',
remark = [{
  value: '0',
  label: '标引号'
},{
  value: '1',
  label: '不标引号'
}],
value6 = '1' 

export default {
  name: 'peizhishuchu',
  props: {
    value: String
  },
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
        zbId: '4',
        zbBh: 'CSRA0004',
        city: '近30天消费笔数',
        fieldName: 'cnt_lst_90',
        address: 'BIGINT',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }, {
        zbId: '23',
        zbBh: 'CSRC0007',
        city: '开户日期',
        fieldName: 'ope_dte_csr',
        address: 'DATE',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      },{
        zbId: '869',
        zbBh: 'SLTB0015',
        city: '是否最新新户标识（含销户六个月）',
        fieldName: 'slf_if_newest-new_act_ind',
        address: 'BIGINT',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }, {
        zbId: '675',
        zbBh: 'CSRA0008',
        city: '发卡渠道大类',
        fieldName: 'slt_ise_cnl_scf_des',
        address: 'DATE',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }],
       tableDataCopy: [{
        zbId: '4',
        zbBh: 'CSRA0004',
        city: '近30天消费笔数',
        fieldName: 'cnt_lst_90',
        address: 'BIGINT',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }, {
        zbId: '23',
        zbBh: 'CSRC0007',
        city: '开户日期',
        fieldName: 'ope_dte_csr',
        address: 'DATE',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      },{
        zbId: '869',
        zbBh: 'SLTB0015',
        city: '是否最新新户标识（含销户六个月）',
        fieldName: 'slf_if_newest-new_act_ind',
        address: 'BIGINT',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }, {
        zbId: '675',
        zbBh: 'CSRA0008',
        city: '发卡渠道大类',
        fieldName: 'slt_ise_cnl_scf_des',
        address: 'DATE',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }],
      duanxinData: [{
        zbId: '47',
        zbBh: 'CSRE0008',
        city: '常规性沟通屏蔽客户（顶层）',
        fieldName: 'com_blk_top_ind',
        address: 'BIGINT',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }, {
        zbId: '48',
        zbBh: 'CSRE0009',
        city: '常规性沟通屏蔽客户（入账层）',
        fieldName: 'com_blk_ptg_ind',
        address: 'DATE',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      },{
        zbId: '49',
        zbBh: 'CSRE0010',
        city: '电话错误客户',
        fieldName: 'non_tel_csr_ind',
        address: 'BIGINT',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }, {
        zbId: '50',
        zbBh: 'CSRE0011',
        city: '短信屏蔽客户',
        fieldName: 'non_sms_csr_ind',
        address: 'DATE',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }],
      pushData: [{
        zbId: '69',
        zbBh: 'MDBA0003',
        city: '是否可推送',
        fieldName: 'psh_wht_usr',
        address: 'BIGINT',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }, {
        zbId: '1018',
        zbBh: 'MDBE00001',
        city: '买单吧注销用户',
        fieldName: 'mdb_ccl_ind',
        address: 'DATE',
        options,
        value1,
        value2,
        value3,
        value4: '0',
        value5,
        value6,
        varOptions,
        input,
        filterOptions,
        isDisplay,
        isSort,
        remark
      }]
    }
  },
  watch: {
    value: {
      handler(val) {
          if (val === '1') {
          this.tableData = [...this.tableDataCopy, ...this.pushData]
        } else if (val === '2') {
          this.tableData = [...this.tableDataCopy, ...this.duanxinData]
        }else{
          this.tableData = this.tableDataCopy
        }
      },
      immediate: true
    }
  },
  methods: {
       onSubmit() {
        this.$alert('操作成功', '提示', {
          confirmButtonText: '确定',
        }).then(() => {
          this.$router.push('/index')
        })
      },
       deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      //上移
			moveUp(index, row) {
				var that = this;
				if (index > 0) {
					let upDate = that.tableData[index - 1];
					that.tableData.splice(index - 1, 1);
					that.tableData.splice(index, 0, upDate);
				} else {
					this.$alert('已经是第一条，不可上移');
				}
			},

			//下移
			moveDown(index, row) {
				var that = this;
				console.log('下移', index, row);
				if ((index + 1) === that.tableData.length) {
					this.$alert('已经是最后一条，不可下移');
				} else {
					// 保存下一条数据
					let downDate = that.tableData[index + 1];
					// 删除下一条数据
					that.tableData.splice(index + 1, 1);
					// 增添被删除的那一条数据
					that.tableData.splice(index, 0, downDate);
				}
			}
  },
}
</script>
<style scoped>
.el-form .el-form-item {
  margin-bottom: 22px;
}
</style>