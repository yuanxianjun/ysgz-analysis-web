<template>
  <div style="width:100%;height:100%;">
    <div id="annular" ref="annular" :style="{height:'100%',width:'100%'}"></div>
  </div>
</template>
<script>
import echarts from "echarts";
import { emergencyRescue } from "../../requestUrl";
export default {
  name: "emergencyCom",
  props: ["userInfo"],
  data() {
    return {
      dutyData: [
        { typeId: "020100000000", name: "化学危险品事故", value: 0 },
        { typeId: "020300000000", name: "道路交通事故", value: 0 },
        { typeId: "020401000000", name: "地震及次生灾害", value: 0 },
        { typeId: "020200000000", name: "建筑物坍塌事故", value: 0 },
        { typeId: "020505000000", name: "重大安全生产事故", value: 0 },
        { typeId: "020508000000", name: "空难", value: 0 },
        { typeId: "020509000000", name: "爆炸及恐怖事件", value: 0 },
        { typeId: "020600000000", name: "群众遇险", value: 0 },
        { typeId: "020403000000", name: "气象灾害", value: 0 },
        { typeId: "020404000000", name: "地质灾害", value: 0 },
        { typeId: "020801000000", name: "森林火灾", value: 0 },
        { typeId: "020802000000", name: "草原火灾", value: 0 },
        { typeId: "020803000000", name: "矿山事故", value: 0 },
        { typeId: "020604000000", name: "水上事故", value: 0 },
        { typeId: "020503000000", name: "重大污染事件", value: 0 },
        { typeId: "020507000000", name: "核与辐射事件", value: 0 },
        { typeId: "020504000000", name: "公共卫生事件", value: 0 },
        { typeId: "020402000000", name: "水旱灾害", value: 0 }
      ],
      titleName: "公共卫生事件",
      titleNum: 30
      // userInfo: JSON.parse(window.localStorage.getItem("userInfo"))
    };
  },
  watch: {},
  created() {},
  mounted() {
    this.getData();
    // 记得注释掉
    // this.pieData();
  },
  updated: function() {},
  methods: {
    getData() {
      var params = this.userInfo.orgTree;
      this.axios({
        method: "get",
        url: emergencyRescue + params
      }).then(res => {
        var data = res.data.result;
        this.pieData(data);
      });
    },
    pieData(val) {
      let index = 0,
        pieOne = this.$refs.annular,
        option,
        _this = this,
        keyUnitChart = echarts.init(pieOne),
        data = [];
      keyUnitChart.clear();
      this.dutyData[17].value = 0;
      val.forEach(item => {
        for (let i = 0; i < this.dutyData.length; i++) {
          if (this.dutyData[i].typeId == item.name) {
            this.dutyData[i].value = item.num * 1;
          }
        }
      });
      // console.log(this.dutyData);

      option = {
        color: [
          "#ff7ca9",
          "#f87be2",
          "#e75fc3",
          "#5085f2",
          "#8d7fec",
          "#96bfff",
          "#8738ea",
          "#9d96f5",
          "#ef9ef1",
          "#57e7ec",
          "#fdb322",
          "#f59a8f",
          "#fca4bb",
          "#f2719a",
          "#f87be2",
          "#e75fc3",
          "#5085f2",
          "#8d7fec"
        ],
        grid: {
          right: 10
        },
        series: [
          // 主要展示层的
          {
            radius: ["50%", "75%"],
            center: ["50%", "50%"],
            type: "pie",
            avoidLabelOverlap: false,
            minAngle: 5,
            itemStyle: {
              // shadowBlur: 30,
              // shadowColor: "#00ccff"
              borderWidth: 1.5,
              borderType: "solid",
              borderColor: "#fff"
            },
            label: {
              normal: {
                show: false,
                position: "center",
                formatter: "{text|{b}}\n{c}%",
                rich: {
                  text: {
                    color: "#ffffff",
                    fontSize: 18,
                    align: "center",
                    lineHeight: 30,
                    verticalAlign: "middle"
                  },
                  value: {
                    color: "#00ffd5",
                    fontSize: 36,
                    align: "center",
                    verticalAlign: "middle"
                  }
                }
              },
              emphasis: {
                show: true,
                textStyle: {
                  fontSize: 24
                }
              }
            },
            name: "",
            data: _this.dutyData,
            hoverOffset: 20
          }
        ]
      };

      keyUnitChart.setOption(option);
      keyUnitChart.dispatchAction({
        type: "highlight",
        seriesIndex: 0,
        dataIndex: 0
      }); //设置默认选中高亮部分
      var timer = null,
        timer2 = null,
        autoPlay = true;
      function setInter() {
        clearTimeout(timer);
        clearTimeout(timer2);
        if (!autoPlay) {
          return;
        }
        timer = setTimeout(() => {
          keyUnitChart.dispatchAction({
            type: "downplay",
            // seriesIndex: index,
            dataIndex: index
          });
          index++;
          if (index > 17) {
            index = 0;
          }

          keyUnitChart.dispatchAction({
            type: "highlight",
            // seriesIndex: index,
            dataIndex: index
          }); //设置默认选中高亮部分
          timer2 = setTimeout(() => {
            setInter();
          }, 60000);
        }, 6000);
      }
      setInter();

      keyUnitChart.on("mouseover", function(e) {
        autoPlay = false;

        if (e.dataIndex !== index) {
          // console.log(index);
          keyUnitChart.dispatchAction({
            type: "downplay",
            // seriesIndex: index,
            dataIndex: index
          });
        }
        index = e.dataIndex;
        setInter();
      });
      keyUnitChart.on("mouseout", function(e) {
        autoPlay = true;
        keyUnitChart.dispatchAction({
          type: "highlight",
          // seriesIndex: e.dataIndex,
          dataIndex: e.dataIndex
        });
        index = e.dataIndex;
        setInter();
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
