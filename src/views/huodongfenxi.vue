<template>
  <div style="position:relative; top: -15px;">
    <el-row>
      <el-col :span="4" style="border-right: 1px solid #ddd;">
        <div class="title">
          <span>维度</span>
          <el-input
            style="width: 150px;"
            size="mini"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input2">
          </el-input>
        </div>
        <draggable
          class="draggable"
          v-model="weidu"
          :clone="cloneWd"
          :group="{ name: 'weidu', pull: 'clone', put: false }"
          @change="logWd"
        >
          <span class="list-group-item" v-for="element in weidu" :key="element.id">
            {{ element.name }}
          </span>
        </draggable>
        <div style="margin-top: 30px;">
          <span class="title">度量
            <el-input
            style="width: 150px;"
            size="mini"
            placeholder="请输入内容"
            prefix-icon="el-icon-search"
            v-model="input1">
          </el-input>
          </span>
          <draggable
            class="draggable"
            v-model="duliang"
            :clone="cloneDl"
            :group="{ name: 'duliang', pull: 'clone', put: false }"
            @change="logDl"
          >
            <div class="list-group-item" v-for="element in duliang" :key="element.id">
              {{ element.name }}
            </div>
          </draggable>
        </div>
      </el-col>
      <el-col :span="16" class="centerCon">
        <div class="hang">
          <span>列：</span>
          <draggable
            class="dragArea list-group"
            :list="lie"
            group="duliang"
            @change="log"
          >
            <div class="list-group-item" style="margin-right: 10px;" v-for="element in lie" :key="element.id">
              {{ element.name }} <i class="el-icon-close" style="padding-right: 8px;" @click="lieClose(element.id)"></i>
            </div>
          </draggable>
        </div>
        <div class="hang">
          <span>行：</span>
          <draggable
            class="dragArea list-group"
            :list="hang"
            group="weidu"
            @change="log"
          >
            <div class="list-group-item" style="margin-right: 10px;" v-for="element in hang" :key="element.id">
              {{ element.name }} <i class="el-icon-close" style="padding-right: 8px;" @click="hangClose(element.id)"></i>
            </div>
          </draggable>
        </div>
        <div v-show="index <= 0">
          <el-table border stripe :data="tableData" fit highlight-current-row style="width: 100%" :header-cell-style="{'text-align':'center', 'background': '#f8f8f9', 'color': '#515a6e'}">
            <el-table-column v-for="item in formThead" :key="item.value" :label="item.name" align="center">
              <template slot-scope="scope">
                {{scope.row[item.value]}}
              </template>
            </el-table-column>
          </el-table>
        </div>
        <div v-if="index > 0">
          <Chart :chartData="chartData" :chartType="index"></Chart>
        </div>
      </el-col>
      <el-col :span="4" class="right">
        <img src="../assets/IMG_8810.png" alt="" @click="imgClick(1)" :class="{active: index === 1}">
        <img src="../assets/IMG_8811.png" alt="" @click="imgClick(2)" :class="{active: index === 2}">
        <img src="../assets/IMG_8812.png" alt="" @click="imgClick(3)" :class="{active: index === 3}">
        <img src="../assets/IMG_8813.png" alt="" @click="imgClick(4)" :class="{active: index === 4}">
        <img src="../assets/IMG_8814.png" alt="" @click="imgClick(5)" :class="{active: index === 5}">
        <img src="../assets/IMG_8815.png" alt="" @click="imgClick(6)" :class="{active: index === 6}">
        <img src="../assets/IMG_8816.png" alt="" @click="imgClick(7)" :class="{active: index === 7}">
        <img src="../assets/IMG_8817.png" alt="" @click="imgClick(8)" :class="{active: index === 8}">
      </el-col>
    </el-row>
  </div>
</template>

<script>
import tabledata from './index2'
import draggable from 'vuedraggable'
import Chart from './Chart'
let idGlobal = 30
export default {
  name: 'huodongfenxi',
  components: {
    draggable,
    Chart
  },
  data() {
    return {
      weidu: [
        {name: '学历', id: 1, value: 'xl'},
        {name: '卡等级', id: 2, value: 'kdj'},
        {name: '客户价值', id: 3, value: 'khjz'},
        {name: '进系统月份', id: 22, value: 'jxtyf'},
        {name: '进件类型', id: 23, value: 'jjlx'},
        {name: '最终审批结果', id: 24, value: 'zzspjg'},
        {name: '首次开卡卡片发卡城市', id: 4, value: 'sckkkpfkcs'},
        {name: '最近开卡直属分行', id: 5, value: 'zjkkzsfh'},
        {name: '客户常驻城市', id: 6, value: 'khczcs'},
        {name: '已持有在册卡数量', id: 7, value: 'ycyzcksl'},
        {name: '是否三个月活户', id: 8, value: 'sfsgyhh'},
        {name: '客户餐饮品牌偏好', id: 9, value: 'khcyppph'},
        {name: '当前是否订购用卡无忧', id: 10, value: 'dqsfdgykwy'},
      ],
      weiduList: [
        {name: '学历', id: 1, value: 'xl'},
        {name: '卡等级', id: 2, value: 'kdj'},
        {name: '客户价值', id: 3, value: 'khjz'},
        {name: '进系统月份', id: 22, value: 'jxtyf'},
        {name: '进件类型', id: 23, value: 'jjlx'},
        {name: '最终审批结果', id: 24, value: 'zzspjg'},
        {name: '首次开卡卡片发卡城市', id: 4, value: 'sckkkpfkcs'},
        {name: '最近开卡直属分行', id: 5, value: 'zjkkzsfh'},
        {name: '客户常驻城市', id: 6, value: 'khczcs'},
        {name: '已持有在册卡数量', id: 7, value: 'ycyzcksl'},
        {name: '是否三个月活户', id: 8, value: 'sfsgyhh'},
        {name: '客户餐饮品牌偏好', id: 9, value: 'khcyppph'},
        {name: '当前是否订购用卡无忧', id: 10, value: 'dqsfdgykwy'},
        {name: '销户距今月份', id: 11, value: 'xhjjyf'},
        {name: '最大可用额度', id: 12, value: 'zdkyed'},
        {name: '最后登录APP日期', id: 13, value: 'zhdlapprq'},
        {name: '开户日期', id: 14, value: 'khrq'},
        {name: '纯EMV卡客户', id: 15, value: 'cemvkkh'}
      ],
      duliang: [
        {name: '数量', id: 22, value: 'sl'},
        {name: '客户数', id: 16, value: 'khs'},
        {name: '近30天消费笔数', id: 17,value: 'j30txfbs'},
        {name: '近30天消费金额', id: 18, value: 'j30txfje'},
        {name: '近90天消费笔数', id: 19, value: 'j90txfbs'},
        {name: '近90天消费金额', id: 20, value: 'j90txfje'},
        {name: '可用积分_标准积分账户', id: 21, value: 'kyjf'},
      ],
      duliangList: [
        {name: '数量', id: 22, value: 'sl'},
        {name: '客户数', id: 16, value: 'khs'},
        {name: '近30天消费笔数', id: 17,value: 'j30txfbs'},
        {name: '近30天消费金额', id: 18, value: 'j30txfje'},
        {name: '近90天消费笔数', id: 19, value: 'j90txfbs'},
        {name: '近90天消费金额', id: 20, value: 'j90txfje'},
        {name: '可用积分_标准积分账户', id: 21, value: 'kyjf'},
      ],
      input1: '',
      input2: '',
      index: 0,
      hang: [],
      lie: [],
      chartData: {}
    }
  },
  watch: {
    input1(val) {
      if (val !== '') {
        this.duliang = this.duliangList.filter(item => item.name.includes(val))
      } else {
        this.duliang = this.duliangList.slice(0, 10)
      }
    },
    input2(val) {
      if (val !== '') {
        this.weidu = this.weiduList.filter(item => item.name.includes(val))
      } else {
        this.weidu = this.weiduList.slice(0, 10)
      }
    }
  },
  computed: {
    formThead() {
      return [...this.hang, ...this.lie]
    },
    tableData() {
      let str1 = ''
      let str2 = ''
      for(let obj of this.hang) {
        str1 = str1 + obj.value
      }
      for(let obj of this.lie) {
        str2 = str2 + obj.value
      }
      if (tabledata[str1+str2] && tabledata[str1+str2].length > 0) {
        const slList = []
        const namelist = []
        tabledata[str1+str2].forEach(item => {
          let name = ''
          for (let value of Object.values(item)) {
            if (value !== item[str2]) {
              name = name + value
            }
          }
          namelist.push(name)
          slList.push(item.sl)
        })
        this.chartData = {
          name: namelist,
          sl: slList
        }
      }
      return tabledata[str1+str2]
    }
  },
  methods: {
    imgClick(index) {
      if (this.index === index) {
        this.index = 0
      } else {
        this.index = index
      }
    },
    cloneWd(obj) {
      return {
        id: idGlobal++,
        name: obj.name,
        value: obj.value
      };
    },
    logWd(evt) {
      console.log(evt)
    },
    log(evt) {
      console.log(evt)
    },
    cloneDl(obj) {
      return {
        id: idGlobal++,
        name: obj.name,
        value: obj.value
      };
    },
    logDl(evt) {
      console.log(evt)
    },
    lieClose(id) {
      this.lie.splice(this.lie.findIndex(item => item.id === id), 1)
    },
    hangClose(id) {
      this.hang.splice(this.hang.findIndex(item => item.id === id), 1)
    }
  }
}
</script>

<style scoped>
.draggable {
  display: flex;
  flex-direction: column;
}
.list-group-item {
  line-height: 28px;
  cursor: pointer;
  border: 1px solid rgb(104, 159, 223);
  border-radius: 14px;
  display: inline;
  margin-top: 2px;
  box-sizing: border-box;
  padding-left: 10px;
}
.title {
  font-size: 18px;
  font-weight: bolder;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
}
.right img {
  width: 60px;
  margin-right: 20px;
  margin-bottom: 20px;
  border: 1px solid #f2f2f2;
}
.right .active {
  border: 1px solid red;
}
.centerCon {
  padding-left: 20px;
  display: flex;
  flex-direction: column;
}
.hang {
  display: flex;
  flex-direction: row;
}
.dragArea {
  width: 100%;
  min-height: 40px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid #eee;
  margin-bottom: 20px;
}
</style>