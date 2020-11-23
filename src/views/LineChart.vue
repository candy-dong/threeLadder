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
        this.chart.dispose()
        this.chart = null
        this.chart = echarts.init(this.$el, 'macarons')
        if (this.$store.state.flag) {
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
            data: ['对比组','模型组']
          },
          series: [{
            name: '对比组', itemStyle: {
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
            data: [1247,2139,1725,1933,1832,1663,1879,1576,2145,1968],
            animationDuration: 2000,
            animationEasing: 'cubicInOut'
          },{
            name: '模型组', itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: [1945,2230,2105,2474,1920,2572,2491,2176,2439,2178],
            animationDuration: 2000,
            animationEasing: 'cubicInOut'
          }]
        })
          return
        }
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
            animationDuration: 2000,
            animationEasing: 'cubicInOut'
          }]
        })
      } else if (type === '柱状图') {
        this.chart.dispose()
        this.chart = null
        this.chart = echarts.init(this.$el, 'macarons')
        if (this.$store.state.flag) {
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
              data: ["银联个普","水晶蜜卡","长三角主题","12生肖卡","饿了么卡"],
              axisTick: {
                alignWithLabel: true
              }
            }],
            yAxis: [{
              type: 'value',
              axisTick: {
                show: true
              }
            }],
            series: [{
              name: title,
              type: 'bar',
              // stack: 'vistors',
              // barWidth: '60%',
              data: [45494,28877,27093,{
                value: 19098,
                itemStyle: {
                  color: 'rgba(230,27,27,1)'
                }
              },17760],
              animationDuration: 2000
            }]
          })
          return
        }
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
            data: [48494, 29877, 28093, 18760, {
              value:12098, 
              itemStyle: {
                color: 'rgba(230,27,27,1)'
              }}
            ],
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
