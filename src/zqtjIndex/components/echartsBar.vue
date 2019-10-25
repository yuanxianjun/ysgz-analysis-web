<template>
  <div id="histogram" ref="lineDiv" style="width:100%;height:100%;"></div>
</template>
<script>
import echarts from "echarts";
export default {
  name: "histogramCom",
  data() {
    return {
      data: []
    };
  },
  created() {},
  mounted() {
    this.initChart();
  },
  methods: {
    //折线图
    initChart() {
      var _this = this,
        dataFire = [
          "设备故障救人",
          "生产事故救人",
          "跳楼营救",
          "水上营救",
          "其它"
        ],
        dataTraffic = ["乡村道路", "城市道路", "高速", "省道", "国道"],
        dataNature = ["地震", "水灾", "风灾", "山体滑坡", "旱灾", "其它"],
        dataFire_y = [
          {
            name: "设备故障",
            value: "970",
            itemStyle: {
              color: "red"
            }
          },
          {
            name: "生产事故救人",
            value: "25",
            itemStyle: {
              color: "orange"
            }
          },
          {
            name: "跳楼营救",
            value: "901",
            itemStyle: {
              color: "#ffcc66"
            }
          },
          {
            name: "水上营救",
            value: "582",
            itemStyle: {
              color: "#FB9A99"
            }
          },
          {
            name: "其它",
            value: "608",
            itemStyle: {
              color: "#33A02C"
            }
          }
        ],
        dataTraffic_y = [
          {
            name: "乡村道路",
            value: "364",
            itemStyle: {
              color: "red"
            }
          },
          {
            name: "城市交通",
            value: "337",
            itemStyle: {
              color: "orange"
            }
          },
          {
            name: "高速",
            value: "246",
            itemStyle: {
              color: "#ffcc66"
            }
          },
          {
            name: "省道",
            value: "117",
            itemStyle: {
              color: "#FB9A99"
            }
          },
          {
            name: "国道",
            value: "68",
            itemStyle: {
              color: "#33A02C"
            }
          }
        ],
        dataNature_y = [
          {
            name: "地震",
            value: "1",
            itemStyle: {
              color: "red"
            }
          },
          {
            name: "水灾",
            value: "278",
            itemStyle: {
              color: "orange"
            }
          },
          {
            name: "风灾",
            value: "3",
            itemStyle: {
              color: "#ffcc66"
            }
          },
          {
            name: "山体滑坡",
            value: "33",
            itemStyle: {
              color: "#FB9A99"
            }
          },
          {
            name: "旱灾",
            value: "0",
            itemStyle: {
              color: "#FB9A99"
            }
          },

          {
            name: "其它",
            value: "28",
            itemStyle: {
              color: "#33A02C"
            }
          }
        ],
        xData,
        yData,
        titleName = window.localStorage.getItem("dataName");
      if (titleName == "交通事故") {
        xData = dataTraffic;
        yData = dataTraffic_y;
      } else if (titleName == "救人") {
        xData = dataFire;
        yData = dataFire_y;
      } else if (titleName == "自然灾害") {
        xData = dataNature;
        yData = dataNature_y;
      }
      //找到dom
      let pieOne = this.$refs.lineDiv;
      this.myChart = echarts.init(pieOne);
      var option = {
        title: {
          text: "",
          bottom: 10,
          left: "center",
          textStyle: {
            fontSize: 28
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          textStyle: {
            fontSize: 36,
            color: "#ffffff"
          }
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "5%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            axisTick: {
              show: false,
              color: "#707070"
            },
            axisLabel: {
              textStyle: {
                fontSize: 28,
                color: "#ffffff"
              }
            },
            axisLine: {
              lineStyle: {
                color: "#707070"
              }
            },
            data: xData
          }
        ],
        yAxis: {
          type: "value",
          name: "(人)",
          nameTextStyle: {
            fontSize: 28,
            color: "#ffffff"
          },
          axisLabel: {
            textStyle: {
              fontSize: 28,
              color: "#ffffff"
            }
          },
          axisLine: {
            lineStyle: {
              color: "#707070"
            }
          }
        },
        series: [
          {
            name: "",
            type: "bar",
            barWidth: "60%",
            data: yData
          }
        ]
      };

      this.myChart.setOption(option);
    }
  }
};
</script>
<style lang="scss">
</style>
