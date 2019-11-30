<template>
  <div
    id="histogram"
    ref="lineDiv"
    v-loading="loadChart"
    element-loading-background="rgba(0, 0, 0, 0.6)"
    style="width:100%;height:100%;"
  ></div>
</template>
<script>
import echarts from "echarts";
import { rsa } from "../requestUrl";
export default {
  name: "histogramCom",
  data() {
    return {
      loadChart: true,
      dataJson: JSON.parse(window.localStorage.getItem("dataJson"))
    };
  },
  created() {},
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      var data = {
        endDate: this.dataJson.dateValue[1],
        startDate: this.dataJson.dateValue[0],
        typeId: this.dataJson.dataId,
        orgTreeId: this.dataJson.orgTreeId
      };
      this.axios({
        method: "post",
        url: rsa,
        data
      }).then(res => {
        var resTitleData = res.data.result.titleList;
        var headerData = resTitleData,
          allData = res.data.result.mapList;
        this.loadChart = false;
        this.processData(headerData, allData[0]);
      });
    },

    /**
     * 处理数据为可用数据
     *  [{name:"",vlaue:""}...]
     */
    processData(keys, nums) {
      var colors = [
        "red",
        "orange",
        "#ffcc66",
        "#FB9A99",
        "#FB9A95",
        "#33A02C",
        "#CD1076",
        "#DA70D6"
      ];
      var xData = [],
        yData = [];
      keys.map((item, index) => {
        if (item.name !== "地区" && item.name !== "总计") {
          yData.push({
            name: item.name,
            value: nums[item.code],
            itemStyle: {
              color: colors[index]
            }
          });
          xData.push(item.name);
        }
      });
      // console.log(xData, yData);
      this.initChart(xData, yData);
    },
    //折线图
    initChart(xData, yData) {
      var _this = this;

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
            barMaxWidth: "200",
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
