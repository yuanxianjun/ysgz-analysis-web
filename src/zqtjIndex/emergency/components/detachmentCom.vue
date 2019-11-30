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
  name: "detachmentCom",
  props: ["statisData"],
  data() {
    return {};
  },
  watch: {},
  created() {},
  mounted() {
    if (this.statisData) {
      this.pieData(this.statisData);
    }
  },
  updated: function() {},
  methods: {
    pieData(val) {
      var index = 0; //默认选中高亮模块索引
      let pieOne = this.$refs.annular,
        _ = this,
        xData,
        yData,
        yData2;
      let keyUnitChart = echarts.init(pieOne);
      keyUnitChart.clear();
      yData = val.map(res => {
        return {
          value: res.num,
          code: res.code
        };
      });
      yData2 = val.map(res => {
        return {
          value: 1000000000,
          trueValue: res.num,
          code: res.code,
          bool: true
        };
      });
      xData = val.map(res => {
        return res.name;
      });
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
              // rotate: -36,
              interval: "0",
              color: "rgb(170,170,170)",
              fontSize: 16
            }
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "起",
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
                // 可以自定义主抓
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "DarkOrange"
                  },
                  // {
                  //   offset: 0.5,
                  //   color: "#133a55"
                  // },
                  {
                    offset: 1,
                    color: "orange"
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
            data: yData2,
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
      keyUnitChart.on("click", function(params) {
        if (params.data.bool && params.data.trueValue < 1) {
          return;
        } else {
          _.$emit("refresh", params.data);
        }
      });
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
