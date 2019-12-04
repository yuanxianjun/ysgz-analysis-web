<template>
    <div id="emergenciesYear">
        <div class="echart" v-for="(item,index) in data">
            <div :id="'echarts'+index"></div>
            <p>{{item.name}}</p>
        </div>
    </div>
</template>
<script>
import echarts from "echarts";
import "echarts-liquidfill";
export default {
    name: "emergenciesYear",
    props: [""],
    data() {
        return {
            option: null,
            colors: ["#b627d6", "#ff9700", "#00baff", "#d4d500"],
            data: [
                {
                    name: "火灾扑救",
                    num: 150,
                    dw: "起",
                    value: 0.25,
                    percent: "15%",
                    type: "rise"
                },
                {
                    name: "应急救援",
                    num: 8000,
                    dw: "人",
                    value: 0.7,
                    percent: "17%",
                    type: "rise"
                },
                {
                    name: "社会救助",
                    num: 1500,
                    dw: "人",
                    value: 10,
                    percent: "21%",
                    type: "rise"
                },
                {
                    name: "公务执勤",
                    num: 5400,
                    dw: "万元",
                    value: 0.45,
                    percent: "4.5%",
                    type: "decline"
                }
            ]
        };
    },
    mounted() {
        for (var i = 0; i < this.data.length; i++) {
            this.draw(this.data[i], i);
        }
    },
    methods: {
        draw: function(data, index) {
            this.option = {
                title: {
                    top: "30%",
                    left: "center",
                    text: data.num + "{a| " + data.dw + "}",
                    textStyle: {
                        color: "#fff",
                        fontStyle: "normal",
                        fontWeight: "normal",
                        fontSize: 24,
                        fontFamily: "ROME",
                        rich: {
                            a: {
                                fontSize: 14
                            }
                        }
                    },
                    subtextStyle: {
                        color: "#fff",
                        fontSize: 18,
                        fontFamily: "ROME",
                        rich: {
                            rise: {
                                color: "#00ff00",
                                fontSize: 18
                            },
                            decline: {
                                color: "#ff0000",
                                fontSize: 18
                            },
                            green: {
                                color: "#00ff00",
                                fontFamily: "ROME",
                                fontSize: 20
                            },
                            red: {
                                color: "#ff0000",
                                fontFamily: "customNumber",
                                fontSize: 20
                            }
                        }
                    }
                },
                series: [
                    {
                        type: "pie",
                        zlevel: 4,
                        silent: true,
                        radius: ["84%", "83%"],
                        label: {
                            normal: {
                                show: false
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data: this.draw_pie(this.colors[index])
                    },
                    {
                        type: "liquidFill",
                        name: "faa",
                        center: ["50%", "50%"],
                        radius: "70%",
                        data: [0.4],
                        color: [this.colors[index]],
                        backgroundStyle: {
                            borderWidth: 3,
                            borderColor: this.colors[index],
                            color: "transparent"
                        },
                        label: {
                            normal: {
                                formatter: "",
                                fontFamily: "ROME",
                                textStyle: {
                                    fontSize: 12
                                }
                            }
                        },
                        outline: {
                            itemStyle: {
                                borderWidth: 0
                            }
                        }
                    }
                ]
            };
            if ("rise" == data.type) {
                this.option.title.subtext =
                    "{rise|占比:}{green|" + data.percent + " }";
            } else {
                this.option.title.subtext =
                    "{decline|占比:}{red|" + data.percent + " }";
            }

            //初始化echarts实例
            var myChart = echarts.init(
                document.getElementById("echarts" + index)
            );

            //使用制定的配置项和数据显示图表
            myChart.setOption(this.option);
        },
        draw_pie: function(color) {
            let dataArr = [];
            for (var i = 0; i < 200; i++) {
                if (i % 2 === 0) {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: 25,
                        itemStyle: {
                            normal: {
                                color: color,
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)"
                            }
                        }
                    });
                } else {
                    dataArr.push({
                        name: (i + 1).toString(),
                        value: 20,
                        itemStyle: {
                            normal: {
                                color: "rgba(0,0,0,0)",
                                borderWidth: 0,
                                borderColor: "rgba(0,0,0,0)"
                            }
                        }
                    });
                }
            }
            return dataArr;
        }
    }
};
</script>
<style>
#emergenciesYear {
    width: 100%;
    height: 200px;
}
.echart {
    width: 25%;
    height: 100%;
    float: left;
}
.echart > div {
    width: 196px;
    height: 180px;
    margin: 0 auto;
}
.echart > p {
    width: 100%;
    text-align: center;
    height: 50px;
    font-size: 24px;
}
.echart:nth-child(1) > p {
    color: #b627d6;
    background: url(../assets/img/emergencies-year-total.png) no-repeat center
        bottom;
}
.echart:nth-child(2) > p {
    color: #ff9700;
    background: url(../assets/img/emergencies-year-death.png) no-repeat center
        bottom;
}
.echart:nth-child(3) > p {
    color: #00baff;
    background: url(../assets/img/emergencies-year-injured.png) no-repeat center
        bottom;
}
.echart:nth-child(4) > p {
    color: #d4d500;
    background: url(../assets/img/emergencies-year-property.png) no-repeat
        center bottom;
}
</style>