<template>
  <div class="map_back">
    <div id="mapCity" style="width:100%;height:600px;"></div>
  </div>
</template> 
<script>
import echarts from "echarts";
import guizhou from "@/common/guizhouJson/guizhousheng.json";
import anshunshi from "@/common/guizhouJson/anshunshi.json";
import bijieshi from "@/common/guizhouJson/bijieshi.json";
import guiyangshi from "@/common/guizhouJson/guiyangshi.json";
import liupanshuishi from "@/common/guizhouJson/liupanshuishi.json";
import qiandongnan from "@/common/guizhouJson/qiandongnan.json";
import qiannanbu from "@/common/guizhouJson/qiannanbu.json";
import qianxinan from "@/common/guizhouJson/qianxinan.json";
import tongrenshi from "@/common/guizhouJson/tongrenshi.json";
import zunyishi from "@/common/guizhouJson/zunyishi.json";
import quJSON from "../../common/json/qu.js";
export default {
  data() {
    return {
      mapData: [],
      titleName: window.localStorage.getItem("dataName"),
      mapArr: [
        guizhou,
        guiyangshi,
        bijieshi,
        anshunshi,
        liupanshuishi,
        qiandongnan,
        qiannanbu,
        qianxinan,
        tongrenshi,
        zunyishi
      ],
      quJSON,
      nameData: [
        { name: "威宁彝族回族苗族自治县", value: 0, city: "毕节" },
        { name: "盘州市", value: 0, city: "六盘水" },
        { name: "兴仁市", value: 0, city: "黔西南" },
        { name: "关岭布依族苗族自治县", value: 0, city: "安顺" },
        { name: "镇宁布依族苗族自治县", value: 0, city: "安顺" },
        { name: "紫云苗族布依族自治县", value: 0, city: "安顺" },
        { name: "望谟县", value: 0, city: "黔西南" },
        { name: "平坝区", value: 0, city: "安顺" },
        { name: "三都水族自治县", value: 0, city: "黔南" },
        { name: "播州区", value: 0, city: "毕节" },
        { name: "赤水市", value: 0, city: "遵义" },
        { name: "道真仡佬族苗族自治县", value: 0, city: "遵义" },
        { name: "务川仡佬族苗族自治县", value: 0, city: "遵义" },
        { name: "沿河土家族自治县", value: 0, city: "铜仁" },
        { name: "印江土家族苗族自治县", value: 0, city: "铜仁" },
        { name: "松桃苗族自治县", value: 0, city: "铜仁" },
        { name: "碧江区", value: 0, city: "铜仁" },
        { name: "万山区", value: 0, city: "铜仁" },
        { name: "玉屏侗族自治县", value: 0, city: "铜仁" },
        { name: "观山湖区", value: 0, city: "贵阳" }
      ],
      allData: []
    };
  },
  created() {
    this.dealData();
  },
  mounted() {
    this.concatMapJson();
  },
  methods: {
    dealData() {
      if (this.titleName == "救人") {
        this.allData = quJSON.savePeploeData;
      } else if (this.titleName == "自然灾害") {
        this.allData = quJSON.natureData;
      }
      this.allData.forEach(item => {
        if (item.area !== "小计" && item.area !== "2019年全省合计") {
          this.nameData.push({
            city: item.totalArea,
            name: item.area,
            value: item.all
          });
        }
      });
    },
    concatMapJson() {
      for (var item of this.mapArr) {
        this.mapData.push(...item.features);
      }
      this.renderMap();
    },
    renderMap() {
      var _this = this,
        detailText;
      echarts.registerMap("贵州", { features: _this.mapData });
      var chart = echarts.init(document.getElementById("mapCity"));
      if (_this.titleName == "救人") {
        detailText = [
          "设备故障救人",
          "生产事故救人",
          "跳楼营救",
          "水上营救",
          "其它"
        ];
      } else {
        detailText = ["地震", "水灾", "风灾", "山体滑坡", "旱灾", "其它"];
      }

      var option = {
        tooltip: {
          show: true,
          trigger: "item",
          formatter: function(params) {
            var val = "";
            var quData = _this.allData;
            for (var i = 0, len = quData.length; i < len; i++) {
              if (params.name == quData[i].area) {
                val =
                  params.data.city +
                  params.name +
                  "</br>" +
                  detailText[0] +
                  " : " +
                  quData[i].speed +
                  "</br>" +
                  detailText[1] +
                  " : " +
                  quData[i].nation +
                  "</br>" +
                  detailText[2] +
                  " : " +
                  quData[i].province +
                  "</br>" +
                  detailText[3] +
                  " : " +
                  quData[i].country +
                  "</br>" +
                  detailText[4] +
                  " : " +
                  quData[i].city +
                  "</br>";

                break;
              } else {
                val =
                  params.data.city +
                  params.name +
                  "</br>" +
                  detailText[0] +
                  " : " +
                  0 +
                  "</br>" +
                  detailText[1] +
                  " : " +
                  0 +
                  "</br>" +
                  detailText[2] +
                  " : " +
                  0 +
                  "</br>" +
                  detailText[3] +
                  " : " +
                  0 +
                  "</br>" +
                  detailText[4] +
                  " : " +
                  0 +
                  "</br>";
              }
            }
            return val;
          }
        },
        roam: true,
        visualMap: {
          color: "#fff",
          show: true,
          type: "piecewise",
          pieces: [
            { min: 160 },
            { min: 120, max: 160 },
            { min: 80, max: 120 },
            { min: 40, max: 80 },
            { min: 0, max: 40 },
            { max: 1 }
          ],
          left: "left",
          top: "bottom",
          calculable: true,
          inRange: {
            color: ["#fff", "yellow", "yellow", "yellow", "red"]
          },
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            type: "map",
            mapType: "贵州", // 自定义扩展图表类型
            data: this.nameData,
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                width: 200,
                height: 60
              },
              itemStyle: {
                //选中省份的颜色
                borderColor: "red", // 地图边框颜色
                areaColor: "#87c3ea",
                shadowOffsetX: 0,
                shadowOffsetY: 0,
                shadowBlur: 0,
                borderWidth: 1,
                shadowColor: "#fff",
                oppcity: 0.5
              }
            }
          }
        ]
      };
      chart.setOption(option);
      const changeHighlight = function(params, whichAction) {
        var allData = _this.nameData;
        for (let i = 0, len = allData.length; i < len; i++) {
          if (allData[i].city == params.data.city) {
            chart.dispatchAction({
              type: whichAction,
              name: allData[i].name
            });
          } else {
            chart.dispatchAction({
              type: "downplay",
              name: allData[i].name
            });
          }
        }
      };
      chart.on("mouseover", function(params) {
        changeHighlight(params, "highlight");
      });
      chart.on("mouseout", function(params) {
        changeHighlight(params, "downplay");
      });
    }
  },
  computed: {},
  components: {}
};
</script>
<style lang="scss">
.map_back {
  width: 100%;
  height: 520px;
  background-repeat: no-repeat;
  background-size: 62% 100%;
  background-position: center;
  margin: 0 auto;
}
</style>
