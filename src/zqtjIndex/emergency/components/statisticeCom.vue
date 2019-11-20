<template>
  <div style="width:100%;height:100%;">
    <div id="annular" ref="annular" :style="{height:'100%',width:'100%'}"></div>
    <!-- <div v-show="showNoData" class="noData">
      <p class="noDataP">暂无数据</p>
    </div>-->
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "emergencyCom",
  props: ["statisData"],
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {
    this.pieData(this.statisData);
  },
  updated: function() {},
  methods: {
    pieData(val) {
      var index = 0; //默认选中高亮模块索引
      let pieOne = this.$refs.annular;
      let keyUnitChart = echarts.init(pieOne);
      keyUnitChart.clear();

      var xData = [
        "化学危险品事故",
        "交通事故",
        "地震及次生灾害",
        "建筑物坍塌",
        "重大安全生产事故",
        "空难",
        "爆炸及恐怖事件",
        "群众遇险",
        "水旱灾害",
        "气象灾害",
        "地质灾害",
        "森林火灾",
        "草原火灾",
        "矿山事故",
        "水上事故",
        "重大污染事件",
        "核与辐射事件",
        "公共卫生事件"
      ];
      if (val) {
        var yData = val;
      }
      var option = {
        backgroundColor: "transparent",
        color: ["#3398DB"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              opacity: 0
            }
          },
          formatter: function(prams) {
            return "发生：" + prams[0].value;
          }
        },
        legend: {
          data: ["直接访问", "背景"],
          show: false
        },
        grid: {
          left: "50",
          right: "5%",
          bottom: "7%",
          top: "10%",
          height: "85%",
          containLabel: true,
          z: 22
        },
        xAxis: [
          {
            type: "category",
            gridIndex: 0,
            data: xData,
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              lineStyle: {
                color: "#0c3b71"
              }
            },
            axisLabel: {
              show: true,
              rotate: -36,
              interval: "0",
              color: "rgb(170,170,170)",
              fontSize: 16
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "/起",
            nameLocation: "end",
            nameTextStyle: {
              color: "rgb(170,170,170)",
              verticalAlign: "bottom"
            },
            gridIndex: 0,
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },

            // max: 100,
            axisLine: {
              lineStyle: {
                color: "#0c3b71"
              }
            },
            axisLabel: {
              color: "rgb(170,170,170)",
              formatter: "{value}"
            }
          },
          {
            type: "value",
            gridIndex: 0,
            // max: 100,
            splitNumber: 12,
            splitLine: {
              show: false
            },
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              show: false
            },
            splitArea: {
              show: true,
              areaStyle: {
                color: ["rgba(250,250,250,0.0)", "rgba(250,250,250,0.05)"]
              }
            }
          }
        ],
        series: [
          {
            name: "发生了",
            type: "bar",
            barWidth: "50%",
            xAxisIndex: 0,
            yAxisIndex: 0,
            itemStyle: {
              normal: {
                barBorderRadius: 0,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#0bc0c8"
                  },
                  {
                    offset: 0.5,
                    color: "#133a55"
                  },
                  {
                    offset: 1,
                    color: "#14233d"
                  }
                ])
              }
            },
            data: yData,
            zlevel: 11
          },
          {
            name: "背景",
            type: "bar",
            barWidth: "50%",
            xAxisIndex: 0,
            yAxisIndex: 1,
            barGap: "-100%",
            data: [
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100,
              100
            ],
            itemStyle: {
              normal: {
                color: "rgba(255,255,255,0.1)"
              }
            },
            zlevel: 9
          }
        ]
      };
      keyUnitChart.setOption(option);
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
