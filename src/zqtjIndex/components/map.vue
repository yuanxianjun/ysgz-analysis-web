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
import { rsaa, disasterAnalysisArea } from "../requestUrl";
export default {
    data() {
        return {
            mapData: [],
            dataJson: JSON.parse(window.localStorage.getItem("dataJson")),
            titleName: "",
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
            allData: [],
            dataJson: JSON.parse(window.localStorage.getItem("dataJson"))
        };
    },
    created() {},
    mounted() {
        this.judgeType();
        this.getData();
        this.concatMapJson();
    },
    methods: {
        // 判断是否是哪个类型的数据
        judgeType() {
            var type = this.dataJson.typeName,
                url,
                data;
            data = {
                endDate: this.dataJson.dateValue[1],
                startDate: this.dataJson.dateValue[0],
                typeId: this.dataJson.dataId,
                orgTreeId: this.dataJson.orgTreeId
            };
            if (type == "抢险救援") {
                url = rsaa;
            } else if (type == "社会救助") {
                url = disasterAnalysisArea;
            }
            this.getData(url, data);
        },
        // 获取大队数据
        getData(url, data) {
            this.axios({
                method: "post",
                url,
                data
            }).then(res => {
                this.loadTable = false;
                var data = res.data.result;
                this.allData = data.mapList || [];
                this.dealData(data.titleList);
            });
        },
        // 处理数据
        dealData(val) {
            this.allData.forEach(item => {
                if (item.area !== "小计" && item.area !== "2019年全省合计") {
                    this.nameData.push({
                        city: item.city,
                        name: item.area,
                        value: item.total
                    });
                }
            });
            this.detailText = val.filter(item => {
                if (item.code[0] == "0") {
                    return item;
                }
            });
            this.renderMap();
        },
        // 拼接数据
        concatMapJson() {
            for (var item of this.mapArr) {
                this.mapData.push(...item.features);
            }
        },
        renderMap() {
            var _this = this;
            echarts.registerMap("贵州", { features: _this.mapData });
            var chart = echarts.init(document.getElementById("mapCity"));
            var option = {
                tooltip: {
                    show: true,
                    trigger: "item",
                    formatter: function(params) {
                        var quData = _this.allData;
                        for (let i = 0, len = quData.length; i < len; i++) {
                            if (params.name == quData[i].area) {
                                var val =
                                    params.data.city + params.name + "</br>";
                                _this.detailText.forEach(item => {
                                    val +=
                                        item.name +
                                        " : " +
                                        quData[i][item.code] +
                                        "</br>";
                                });
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
                        { min: 100 },
                        { min: 60, max: 100 },
                        { min: 30, max: 60 },
                        { min: 10, max: 20 },
                        { min: 1, max: 10 },
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
