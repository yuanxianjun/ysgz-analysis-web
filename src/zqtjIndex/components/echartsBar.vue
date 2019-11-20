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
        dataChemistry = [
          "爆炸品",
          "毒害品",
          "压缩气体和液化气体",
          "易燃液体",
          "易燃固体、自燃物品和遇湿易燃物品",
          "腐蚀品",
          "氧化剂和有机过氧化物",
          "杂类"
        ],
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
        dataChemistry_y = [
          {
            name: "爆炸品",
            value: "4",
            itemStyle: {
              color: "red"
            }
          },
          {
            name: "毒害品",
            value: "1",
            itemStyle: {
              color: "orange"
            }
          },
          {
            name: "压缩气体和液化气体",
            value: "155",
            itemStyle: {
              color: "#ffcc66"
            }
          },
          {
            name: "易燃液体",
            value: "45",
            itemStyle: {
              color: "#FB9A99"
            }
          },
          {
            name: "易燃固体、自燃物品和遇湿易燃物品",
            value: "3",
            itemStyle: {
              color: "#FB9A99"
            }
          },
          {
            name: "腐蚀品",
            value: "2",
            itemStyle: {
              color: "#33A02C"
            }
          },
          {
            name: "氧化剂和有机过氧化物",
            value: "1",
            itemStyle: {
              color: "#DA70D6"
            }
          },
          {
            name: "杂类",
            value: "10",
            itemStyle: {
              color: "#CD1076"
            }
          }
        ],
        xData,
        yData;
      var dataJson = JSON.parse(window.localStorage.getItem("dataJson"));
      var titleName = dataJson.dataName;
      if (titleName == "交通事故") {
        xData = dataTraffic;
        yData = dataTraffic_y;
      } else if (titleName == "群众遇险") {
        xData = dataFire;
        yData = dataFire_y;
      } else if (titleName == "水旱灾害") {
        xData = dataNature;
        yData = dataNature_y;
      } else if (titleName == "化学危险品事故") {
        xData = dataChemistry;
        yData = dataChemistry_y;
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
              interval: 0,
              rotate: -45, //标签旋转角度，对于长文本标签设置旋转可避免文本重叠
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
          name: "(起)",
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
