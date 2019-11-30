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
import { areaFire } from "../../requestUrl";
export default {
  name: "annularCom",
  props: ["userInfo"],
  data() {
    return {
      dutyData: [
        { typeId: "01000000", name: "城市市区", value: "0" },
        { typeId: "02000000", name: "县城火灾", value: "0" },
        { typeId: "03000000", name: "集镇区域", value: "0" },
        { typeId: "04000000", name: "农村", value: "0" },
        { typeId: "05000000", name: "开发区、旅游区", value: "0" },
        { typeId: "06000000", name: "其它", value: "0" }
      ]
      // userInfo: JSON.parse(window.localStorage.getItem("userInfo"))
    };
  },
  watch: {},
  created() {},
  mounted() {
    // this.pieData();
    this.getData();
  },
  updated: function() {},
  methods: {
    getData() {
      var params = this.userInfo.orgTree;
      this.axios({
        method: "get",
        url: areaFire + params
      }).then(res => {
        var data = res.data.result;
        this.pieData(data);
      });
    },
    pieData(val) {
      let pieOne = this.$refs.annular;
      let keyUnitChart = echarts.init(pieOne);
      keyUnitChart.clear();

      let option,
        _this = this,
        allNum = 0;
      for (let i = 0; i < val.length; i++) {
        if (val[i].name == "01000000") {
          this.dutyData[0].value = val[i].num - 0;
          allNum += val[i].num * 1;
        } else if (val[i].name == "02000000") {
          this.dutyData[1].value = val[i].num - 0;
          allNum += val[i].num * 1;
        } else if (val[i].name == "03000000") {
          this.dutyData[2].value = val[i].num - 0;
          allNum += val[i].num * 1;
        } else if (val[i].name == "04000000") {
          this.dutyData[3].value = val[i].num - 0;
          allNum += val[i].num * 1;
        } else if (val[i].name == "05000000") {
          this.dutyData[4].value = val[i].num - 0;
          allNum += val[i].num * 1;
        }
      }
      this.dutyData[5].value = (100 - allNum).toFixed(2);

      var pieData = this.dutyData;

      option = {
        color: [
          "#00FFFF",
          "#e4007f",
          "#00a0e0",
          "#45ffac",
          "#fff100",
          "#f29b76"
        ],
        grid: {
          //   top: 0,
          //   bottom: 0
          right: 10
        },
        series: [
          // 主要展示层的
          {
            radius: ["45%", "50%"],
            center: ["49%", "50%"],
            type: "pie",
            itemStyle: {
              shadowBlur: 30,
              shadowColor: "#00ccff"
            },
            label: {
              normal: {
                show: true,
                formatter: "{b}" + "\n" + "{c}%",
                textStyle: {
                  fontSize: 18
                },
                position: "outside"
              },
              emphasis: {
                // show: true,
                formatter: function(params) {
                  // console.log(params.data, "params");
                  return params.data.name + "\n" + params.data.value + "%";
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 25,
                length2: 20,
                lineStyle: {
                  color: "#00ccff"
                }
              },
              emphasis: {
                show: true
              }
            },
            name: "区域火灾情况",
            data: pieData
          },
          // 边框的设置
          {
            radius: ["37%", "38%"],
            center: ["49%", "50%"],
            type: "pie",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              show: true,
              formatter: function(params) {
                console.log(params, "params");
              }
            },
            data: [
              {
                value: 1,
                itemStyle: {
                  borderWidth: 1,
                  color: "#00ccff"
                }
              }
            ]
          },
          {
            name: "外边框",
            type: "pie",
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ["49%", "50%"],
            radius: ["58%", "59%"],
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 9,
                name: "",
                itemStyle: {
                  normal: {
                    borderWidth: 1,
                    borderColor: "#00ccff"
                  }
                }
              }
            ]
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
