<template>
  <div :class="className" :style="{height:height,width:width}" />
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons') // echarts theme
// import resize from './mixins/resize'

export default {
  // mixins: [resize],
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '400px'
    },
    autoResize: {
      type: Boolean,
      default: true
    },
    chartData: {
      type: Object,
      required: true
    },
    chartType: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    chartData: {
      deep: true,
      handler(val) {
        this.setOptions(val, this.chartType)
      }
    },
    chartType: {
      deep: true,
      handler(val) {
        this.setOptions(this.chartData, val)
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeDestroy() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$el, 'macarons')
      this.setOptions(this.chartData, this.chartType)
    },
    setOptions({ data, time, title } = {}, type = '') {
      if (type === '线性图') {
        this.chart.setOption({
          xAxis: {
            data: time,
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          legend: {
            data: [title]
          },
          series: [{
            name: title, itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: data,
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          }]
        })
      } else if (type === '柱状图') {
        this.chart.dispose()
        this.chart = null
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({
          tooltip: {
            trigger: 'axis',
            axisPointer: { // 坐标轴指示器，坐标轴触发有效
              type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            top: 10,
            left: '2%',
            right: '2%',
            bottom: '3%',
            containLabel: true
          },
          xAxis: [{
            type: 'category',
            data: time,
            axisTick: {
              alignWithLabel: true
            }
          }],
          yAxis: [{
            type: 'value',
            axisTick: {
              show: false
            }
          }],
          series: [{
            name: title,
            type: 'bar',
            // stack: 'vistors',
            // barWidth: '60%',
            data: data,
            animationDuration: 2000
          }]
        })
      } else if (type === '饼状图') {
        this.chart.dispose()
        this.chart = null
        this.chart = echarts.init(this.$el, 'macarons')
        this.chart.setOption({
          title: {
            text: title,
            left: 'center'
          },
          tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b} : {c} ({d}%)'
          },
          legend: {
            left: 'center',
            bottom: '10',
            data: time
          },
          series: [
            {
              name: title,
              type: 'pie',
              roseType: 'radius',
              radius: [15, 95],
              center: ['50%', '38%'],
              data: data.map((item, index) => {
                return { name: time[index], value: item }
              }),
              animationEasing: 'cubicInOut',
              animationDuration: 2600
            }
          ]
        })
      }
    }
  }
}
</script>
