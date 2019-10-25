<template>
  <div id="copterData">
    <com-header></com-header>
    <div id="main">
      <div id="map"></div>
      <div id="words">
        <h1>直升机数据</h1>
        <p>贵州省消防救援总队共有可调度直升机8架，分别为贵阳上海通用金汇航空公司1架、黔南剑江红都通用航空公司3架、六盘水盘州通用航空公司2架、黔西南四川中蓝通用航空公司2架。目前，四家公司全部与消防队伍签订了协议，遇突发事件后，在可飞行的天气情况下向南部战区空军司令部申请航线，救援队伍在乘机点乘机，第一时间赶赴事发地就近的起降点，改乘其他交通工具抵达现场。现目前我省境内共有起降点128个，其余未设置起降点地区在避开本地区机场航线的前提下，临时申请起飞。</p>
      </div>
    </div>
  </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import echarts from 'echarts'

import a520000 from "./assets/geoJson/520000.json"
import a520100 from "./assets/geoJson/520100.json"
import a520200 from "./assets/geoJson/520200.json"
import a520300 from "./assets/geoJson/520300.json"
import a520400 from "./assets/geoJson/520400.json"
import a520500 from "./assets/geoJson/520500.json"
import a520600 from "./assets/geoJson/520600.json"
import a522300 from "./assets/geoJson/522300.json"
import a522600 from "./assets/geoJson/522600.json"
import a522700 from "./assets/geoJson/522700.json"
import helicopter from  "./assets/images/helicopter.png";
import landing from  "./assets/images/landing.png";
export default {
  name: "copterData",
  data() {
    return {
      landing: landing,
      helicopter: helicopter,
      mapData :[
        a520000,
        a520100,
        a520200,
        a520300,
        a520400,
        a520500,
        a520600,
        a522300,
        a522600,
        a522700,
        
      ]
    }
  },
  components: {
    comHeader,
  },
  methods: {
    copterFun () {
      Promise.all(this.mapData).then(responses => {
          let allFeatures = [];
          for (let item of responses) {
              allFeatures.push(...item.features);
          }
          // console.log(allFeatures);
          let allDistricts = {features: allFeatures};

          const geoCoordMap = {
            '都匀市足球小镇': [107.61194444444445, 26.168055555555554],
            '荔波大小七孔游客集散中心东门': [107.77527777777777, 25.283055555555556],
            '瓮安草塘': [107.5675, 27.185277777777777],
            '贵定县金海雪山景区': [107.16305555555556, 26.458333333333332],
            '福泉市体育场': [107.50777777777778, 26.685277777777777],
            '麻江县卡乌': [107.79472222222222, 26.404444444444444],
            '三都县体育场': [107.86555555555556, 25.975],
            '惠水县体育场': [106.64833333333333, 26.140833333333333],
            '独山三井村': [107.51194444444444, 25.808888888888887],
            '长顺深泉谷': [106.51472222222222, 26.024722222222223],
            '平塘县体育场': [107.32194444444444, 25.823333333333334],
            '龙里县体育场': [106.98611111111111, 26.454444444444444],
            '凯里市体育场': [107.97888888888889, 26.566666666666666],
            '西江千户苗寨': [108.17805555555556, 26.494166666666665],
            '丹寨万达小镇': [107.81194444444445, 26.200833333333332],
            '安顺黄果树': [105.66694444444444, 25.98138888888889],
            '贵阳观山湖': [106.60972222222222, 26.61722222222222],
            '贵阳花溪': [106.66527777777777, 26.41111111111111],
            '铜仁梵净山': [108.77472222222222, 27.841666666666665],
            '纳雍猫场起降场': [105.34944444444444, 26.982777777777777],
            '纳雍起降场': [105.38638888888889, 26.786944444444444],
            '金沙新化起降场': [106.11805555555556, 27.397777777777776],
            '织金起降场': [105.70555555555555, 26.660833333333333],
            '望谟起降场': [106.10388888888889, 25.241944444444446],
            '册亨起降场': [105.81027777777778, 24.979444444444443],
            '开阳金中起降场': [106.85416666666667, 27.110555555555557],
            '黄平起降场': [107.955, 26.90361111111111],
            '思南起降场': [108.34083333333334, 27.980833333333333],
            '安顺龙宫起降场': [105.89694444444444, 26.120277777777776],
            '仁怀二合镇起降场': [106.35083333333333, 27.994166666666665],
            '仁怀山盆起降场': [106.67138888888888, 27.93027777777778],
            '沿河起降场': [108.4888888888889, 28.54138888888889]
          };

          const convertData = function (data) {
              let res = [];
              for (let i = 0; i < data.length; i++) {
                  let geoCoord = geoCoordMap[data[i].name];
                  if (geoCoord) {
                      res.push({name: data[i].name, value: geoCoord.concat(data[i].value)}); // 除了坐标，值也加进去了。
                  }
              }
              return res;
          };

          // 使用echarts，画地图
          echarts.registerMap('贵州', responses[0]);
          // 基于准备好的dom，初始化echarts实例
          let chart = echarts.init(document.getElementById('map'), 'light');
          chart.setOption({
              backgroundColor: 'transparent',
              legend: {
                  itemWidth: 30,
                  itemHeight: 30,
                  itemGap: 30,
                  textStyle: {
                    color: '#fff',
                    fontSize: 24
                  },
                  inactiveColor: '#666',
              },
              tooltip: {
                  trigger: 'item',
              },
              geo: {
                  map: '贵州',
                  roam: true,
                  label: {
                    show:false,
                      fontSize: 24,
                      color: '#ccc',
                     
                  },
                  emphasis: {
                    label:{
                      fontSize: 20,
                      color:'#fff'
                    }
                     
                    },
                  itemStyle: {
                      normal: {
                        borderColor: "rgba(147, 235, 248, 1)",
                        borderWidth: 1,
                        areaColor: {
                          type: "radial",
                          x: 0.5,
                          y: 0.5,
                          r: 0.8,
                          colorStops: [
                            {
                              offset: 0,
                              color: "rgba(147, 235, 248, 0)" // 0% 处的颜色
                            },
                            {
                              offset: 1,
                              color: "rgba(147, 235, 248, .2)" // 100% 处的颜色
                            }
                          ],
                          globalCoord: false // 缺省为 false
                        },
                        shadowColor: "rgba(128, 217, 248, 1)",
                        // shadowColor: 'rgba(255, 255, 255, 1)',
                        shadowOffsetX: -2,
                        shadowOffsetY: 2,
                        shadowBlur: 10
                      },
                    emphasis: {
                      areaColor: "#389BB7",
                      borderWidth: 0,
                      fontSize: 24,
                      color:'#fff'
                    }
                  }
              },
              series: [
                  {
                      id: 'landing',
                      name: '起降机场',
                      type: 'scatter',
                      coordinateSystem: 'geo',
                      symbol: `image://${landing}`,
                      symbolSize: 24,
                      tooltip: {
                          formatter: '{a}：{b}',
                          textStyle: {
                            fontSize: 24
                          },
                      },
                      data: convertData([
                          {name: '都匀市足球小镇', value: 1},
                          {name: '荔波大小七孔游客集散中心东门', value: 1},
                          {name: '瓮安草塘', value: 1},
                          {name: '贵定县金海雪山景区', value: 1},
                          {name: '福泉市体育场', value: 1},
                          {name: '麻江县卡乌', value: 1},
                          {name: '三都县体育场', value: 1},
                          {name: '惠水县体育场', value: 1},
                          {name: '独山三井村', value: 1},
                          {name: '长顺深泉谷', value: 1},
                          {name: '平塘县体育场', value: 1},
                          {name: '龙里县体育场', value: 1},
                          {name: '凯里市体育场', value: 1},
                          {name: '西江千户苗寨', value: 1},
                          {name: '丹寨万达小镇', value: 1},
                          {name: '安顺黄果树', value: 1},
                          {name: '贵阳观山湖', value: 1},
                          {name: '贵阳花溪', value: 1},
                          {name: '铜仁梵净山', value: 1},
                          {name: '纳雍猫场起降场', value: 1},
                          {name: '纳雍起降场', value: 1},
                          {name: '金沙新化起降场', value: 1},
                          {name: '织金起降场', value: 1},
                          {name: '望谟起降场', value: 1},
                          {name: '册亨起降场', value: 1},
                          {name: '开阳金中起降场', value: 1},
                          {name: '黄平起降场', value: 1},
                          {name: '思南起降场', value: 1},
                          {name: '安顺龙宫起降场', value: 1},
                          {name: '仁怀二合镇起降场', value: 1},
                          {name: '仁怀山盆起降场', value: 1},
                          {name: '沿河起降场', value: 1}
                      ]),
                      label: {
                        color: '#fff'
                      },
                      itemStyle: {
                        color: '#fff'
                      }
                  }
                  , {
                      id: 'helicopter',
                      name: '直升机',
                      type: 'scatter',
                      coordinateSystem: 'geo',
                      symbol: `image://${helicopter}`,
                      symbolSize: 24,
                      tooltip: {
                          formatter: function (params, ticket, callback) {
                              let strHTML = `${params.name}<br/>${params.value[2]}`
                              return strHTML;
                          },
                          textStyle: {
                            fontSize: 24
                          },

                      },
                      data: [
                          {name: "贵阳上海金汇通用航空公司", value: [106.606658, 26.626219, '总数量：1<br/>型号：阿古斯特AW139<br/>最大载客：10人<br/>最大航程：568km']},
                          {name: "黔南剑江红都通用航空公司", value: [107.512186, 26.265859, '总数量：3<br/>型号：法国空客AS350B3<br/>数量：1<br/>最大载客：6（含1名飞行员）<br/>最大航程：645km<br/>型号：美国罗宾逊R44<br/>数量：2<br/>最大载客：4（含1名飞行员）<br/>最大航程645km']},
                          {name: "六盘水盘州通用航空公司", value: [104.48012, 25.707355, '总数量：2<br/>型号：AW119KX<br/>最大载客：6（含1名飞行员）<br/>最大航速：256km/h']},
                          {name: "黔西南四川中蓝通用航空有限公司", value: [104.865095, 25.154381, '总数量：2<br/>型号：法国空客H125<br/>数量：1<br/>最大载客：6（含1名飞行员）<br/>最大航程：660km<br/>型号：美国罗宾逊R44<br/>数量：1<br/>最大载客：4（含1名飞行员）<br/>最大航程：545km']}
                      ]
                  }
              ]
          });

          let windowRes = null;
          window.addEventListener('resize', windowRes = function () {
              chart.resize();
          });
      });
    }
  },
  mounted () {
    this.copterFun();
  }
};
</script>
<style lang="scss">
@font-face {
  font-family: "numberFont"; //数组字体
  src: url("../../common/fonts/290-CAI978.TTF");
}
#copterData {
  position: relative;
  color: white;
  // padding-bottom: 21px;
  width: 1920px;
  height: 1080px;
  //   overflow: hidden;
  background-image: url(../../common/images/background.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
}
@media screen and (width: 1920px) {
  html {
    overflow-x: hidden !important;
  }
}
#main {
    box-sizing: border-box;
    height: 950px;
    margin: 20px;
    // margin-bottom: 0px;
    display: flex;
}
#main > #map {
    flex: 2;
    height: 100%;
}
#main > #words {
    flex: 1;
    padding-top: 40px;
    padding-right: 20px; 
    overflow-y: auto;
}
#words > h1{
    text-align: center;
    font-size: 40px;
    margin-bottom: 20px;
}
#words > p {
    text-indent: 2em;
    line-height: 50px;
    font-size: 24px;
}
</style>