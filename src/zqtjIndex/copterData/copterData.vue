<!--
 * @Author: your name
 * @Date: 2019-10-25 20:40:24
 * @LastEditTime: 2019-10-29 17:05:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ysgz_webc:\developer\ysgz-analysis-web\src\zqtjIndex\copterData\copterData.vue
 -->
<template>
  <div id="copterData">
    <com-header></com-header>
    <div id="main">
      <div id="map"></div>
      <div id="words">
        <h1>直升机数据</h1>
        <p>贵州省消防救援总队共有可调度直升机8架，分别为贵阳上海通用金汇航空公司1架、黔南剑江红都通用航空公司3架、六盘水盘州通用航空公司2架、黔西南四川中蓝通用航空公司2架。目前，四家公司全部与消防队伍签订了协议，遇突发事件后，在可飞行的天气情况下向南部战区空军司令部申请航线，救援队伍在乘机点乘机，第一时间赶赴事发地就近的起降点，改乘其他交通工具抵达现场。现目前我省境内共有起降点128个，其余未设置起降点地区在避开本地区机场航线的前提下，临时申请起飞。</p>
        <ul>
          <li class="planeLi">
            <div class="planeImg">
              <img :src="plane1" />
            </div>
            <div class="planeP">
              <!-- <span class="pHeader">1.贵阳上海金汇航空公司</span> -->
              <p class="pLeft">
                飞机名称：AW119Kx
                <br />产地：意大利
                <br />机身长度：12.96m
                <br />机身宽度：1.61m
                <br />机身高度:3.6m
                <br />机身离地间隙：0.63m
                <br />发动机功率：684kw
              </p>
              <p class="pRight">
                发动机型号：PT6B-37A
                <br />最大巡航速度：256Km/h
                <br />最大航程：550Km
                <br />实用升限：4572m
                <br />爬升速率：9.1m/s
                <br />最大载客数：6人
                <br />最大荷载量：1275kg
              </p>
            </div>
          </li>
          <li class="planeLi">
            <div class="planeImg">
              <img :src="plane2" />
            </div>
            <div class="planeP">
              <!-- <span class="pHeader">2.黔南剑江红都通用航空公司</span> -->
              <p class="pLeft">
                飞机名称：AS350 B3e
                <br />产地：法国
                <br />机身长度：10.93m
                <br />机身宽度：1.65m
                <br />机身高度:3.14m
                <br />机身离地间隙：0.63m
                <br />发动机型号：Arriel2D
              </p>
              <p class="pRight">
                发动机功率：632kw
                <br />最大巡航速度：226Km/h
                <br />最大航程：665Km
                <br />实用升限：4600m
                <br />爬升速率：8.5m/s
                <br />最大载客数：6人
                <br />最大荷载量：1035kg
              </p>
            </div>
          </li>
          <!-- H1235 -->
          <li class="planeLi">
            <div class="planeImg">
              <img :src="plane3" />
            </div>
            <div class="planeP">
              <!-- <span class="pHeader">3.黔西南四川中蓝通用航空有限公司</span> -->
              <p class="pLeft">
                飞机名称：H125
                <br />产地：法国
                <br />机身长度：12.94m
                <br />机身宽度：2.17m
                <br />机身高度:3.14m
                <br />发动机型号：ARRIEL 2D
              </p>
              <p class="pRight">
                发动机功率：632kw
                <br />最大巡航速度：251Km/h
                <br />最大航程：631Km
                <br />实用升限：5044m
                <br />最大载客数：6人
                <br />最大荷载量：1001kg
              </p>
            </div>
          </li>
          <!--罗宾逊R44  -->
          <li class="planeLi">
            <div class="planeImg">
              <img :src="plane4" />
            </div>
            <div class="planeP">
              <!-- <span class="pHeader">4.黔西南四川中蓝通用航空有限公司</span> -->
              <p class="pLeft">
                飞机名称：罗宾逊R44
                <br />产地：美国
                <br />机身长度：11.76m
                <br />机身高度:3.3m
                <br />发动机型号：IQ-540
                <br />发动机动力：290马力
              </p>
              <p class="pRight">
                最大巡航速度：210Km/h
                <br />最大航程：654Km
                <br />实用升限：4270m
                <br />爬升速率：5.1m/s
                <br />最大载客数：4人
                <br />最大荷载量：370kg
              </p>
            </div>
          </li>
        </ul>
        <div class="company">
          <p class="companyTitle">联系方式</p>
          <p class="companyP">
            <span class="title">贵阳上海金汇通航</span>
            <br />值班电话️：4009 120 999
            <br />联系人：郝杰
            <br />联系电话：18984087827
          </p>
          <p class="companyP">
            <span class="title">六盘水盘州通用航空公司</span>
            <br />值班电话️：4000858138
            <br />联系人：蒋媛
            <br />联系电话：15585804127
          </p>
          <p class="companyP">
            <span class="title">黔南剑江红都通用航空公司</span>
            <br />联系人：刘宏
            <br />联系电话：18808545808
          </p>

          <p class="companyP">
            <span class="title">黔西南四川中蓝航空公司</span>
            <br />联系人：蒋总经理
            <br />联系电话：18080906937
          </p>
          <p class="companyP">
            <span class="title">中国南方航空股份有限公司贵阳分公司</span>
            <br />联系人：张雪秋
            <br />联系电话：13639084770
          </p>
          <p class="companyP">
            <span class="title">中国国际航空股份有限公司贵阳分公司</span>
            <br />联系人：袁海
            <br />联系电话：13639076765
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import echarts from "echarts";

// 引入飞机图片
import plane1 from "./assets/images/aircraft1.png";
import plane2 from "./assets/images/plane2.jpg";
import plane3 from "./assets/images/aircraft3.png";
import plane4 from "./assets/images/aircraft4.png";

// 引入地图json
import a520000 from "./assets/geoJson/520000.json";
import a520100 from "./assets/geoJson/520100.json";
import a520200 from "./assets/geoJson/520200.json";
import a520300 from "./assets/geoJson/520300.json";
import a520400 from "./assets/geoJson/520400.json";
import a520500 from "./assets/geoJson/520500.json";
import a520600 from "./assets/geoJson/520600.json";
import a522300 from "./assets/geoJson/522300.json";
import a522600 from "./assets/geoJson/522600.json";
import a522700 from "./assets/geoJson/522700.json";
import helicopter from "./assets/images/helicopter.png";
import landing from "./assets/images/landing.png";
export default {
  name: "copterData",
  data() {
    return {
      plane1,
      plane2,
      plane3,
      plane4,
      landing: landing,
      helicopter: helicopter,
      mapData: [
        a520000,
        a520100,
        a520200,
        a520300,
        a520400,
        a520500,
        a520600,
        a522300,
        a522600,
        a522700
      ]
    };
  },
  components: {
    comHeader
  },
  methods: {
    copterFun() {
      Promise.all(this.mapData).then(responses => {
        let allFeatures = [];
        for (let item of responses) {
          allFeatures.push(...item.features);
        }
        // console.log(allFeatures);
        let allDistricts = { features: allFeatures };
        const geoCoordMap = {
          '道真县民族体育馆': [107.615163, 28.869317],
          '德江南收费站右侧': [108.085216, 28.215968],
          '德江收费站出口': [108.091897, 28.214087],
          '都匀匀东厦前广场': [107.524254, 26.263396],
          '梵净山金佛寺广场': [108.780482, 27.825566],
          '凤冈县第五中学': [107.720442, 27.926918],
          '凤冈县湿地公园广场起降点': [107.712583, 27.901603],
          '黄果树瀑布风景区': [105.679142, 25.985778],
          '汇川体育场': [106.926334, 27.721504],
          '凯里市交通局': [107.931507, 26.542542],
          '凯里万国城': [107.885883, 26.521515],
          '湄潭救援点': [107.471591, 27.734102],
          '湄潭县人民医院': [107.477889, 27.764721],
          '湄潭县人民政府办公大楼广场': [107.471929, 27.754695],
          '湄潭县中国茶城广场': [107.469431, 27.750955],
          '盘州市红果体育馆': [104.470929, 25.704917],
          '仁怀市茅台集团包装车间广场': [106.373049, 27.844562],
          '仁怀市茅台镇1915广场': [106.383857, 27.861616],
          '仁怀市楠竹林公园广场': [106.416097, 27.799454],
          '仁怀市人民医院': [106.362647, 27.76484],
          '仁怀市人民政府门前广场': [106.407616, 27.798373],
          '榕江县常驰广场东侧': [108.53196, 25.935944],
          '泗渡镇光明村迎春桥': [106.556233, 27.085742],
          '天柱县金凤广场': [109.216035, 26.921929],
          '桐梓县化工厂': [106.834525, 28.199251],
          '铜仁大沙坝服务区': [108.219368, 27.675409],
          '铜仁江口梵净山金佛寺酒店前': [108.841379, 27.707406],
          '务川县人民政府': [107.905336, 28.569128],
          '玉屏县政府广场': [108.912984, 27.24149],
          '云山屯古建筑群景区': [106.095299, 26.295005],
          "遵义牡丹园（泗渡镇）": [106.962058, 27.919395],
          '遵义人民广场': [106.933203, 27.72937],
          '遵义第一人民医院': [106.921354, 27.706024],
          '楠木渡收费站附近学校': [107.013452, 27.296094],
          "龙坪收费站+草地 可以紧急救援": [107.033933, 27.558708],
          '都匀市足球小镇': [107.61194444444445, 26.168055555555554],
          '荔波大小七孔游客集散中心东门': [107.77527777777777,25.283055555555556],
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
          '沿河起降场': [108.4888888888889, 28.54138888888889],
          '贵阳支队培训基地': [106.332618, 26.351701],
          '贵阳支队经开大队金戈路中队': [106.414, 26.2925],
          '贵阳支队息烽大队虎成大道中队': [106.4429, 27.313],
          '贵阳支队开阳大队麦肖路中队': [106.5853, 27.326],
          '贵阳支队特勤二中队': [106.332618, 26.351701],
          '遵义支队余庆大队余庆中队': [107.5230, 27.1321],
          '遵义支队道真大队道真中队': [107.292871, 28.461841],
          '安顺支队平坝大队平坝中队': [106.269349, 26.425046],
          '安顺支队普定大队普定中队': [105.7344402, 26.2885441],
          '安顺支队紫云大队紫云中队': [106.08723, 25.76701],
          '黔南州应急救援培训基地': [107.599147, 26.2592021],
          '黔南支队贵定县大队': [107.135366, 26.341024],
          '黔南支队独山县大队': [107.3243652, 25.511424],
          '黔南支队惠水县大队': [106.66722, 26.14404],
          '黔南支队瓮安县大队': [107.476063, 27.0872017],
          '黔南支队福泉市大队': [107.52129, 26.62806],
          '黔南支队龙里县大队': [106.99229, 26.44361],
          '黔南支队平塘县大队': [107.32085, 25.82454],
          '黔南支队荔波县大队': [107.874219, 25.4068643],
          '黔南支队三都县大队': [107.854765, 25.970700],
          '黔东南支队机关': [107.964402, 26.571903],
          '黔东南支队特勤中队': [107.964402, 26.571903],
          '黔东南支队从江大队从江中队': [108.922354, 25.764968],
          '黔东南支队天柱大队天柱中队 ': [109.221355, 26.902382],
          '黔东南支队开发区大队开发区中队': [107.682054, 26.523436],
          '黔东南支队岑巩大队岑巩中队': [108.821311, 27.185815],
          '黔东南支队剑河大队剑河中队': [108.438253, 26.725631],
          '铜仁支队培训基地（在建）': [109.172595, 27.66838],
          '铜仁支队松桃大队松桃中队': [109.185344, 28.166690],
          '铜仁支队玉屏大队玉屏中队': [108.938, 27.246],
          '铜仁支队思南消防大队': [108.247875, 27.903016],
          '毕节支队七星关大队南环东路中队': [105.293254, 27.295222],
          '毕节支队黔西大队黔西中队': [106.039608, 27.013405],
          '毕节支队金沙大队黄山路中队': [106.236168, 27.497137],
          '毕节支队金沙大队长江大道中队': [106.239281, 27.471319],
          '毕节支队赫章大队赫章中队': [104.6857842, 27.1061292],
          '六盘水支队机关': [104.890830, 26.562928],
          '六盘水支队红桥大队红桥中队': [104.918908, 26.534108],
          '六盘水支队水城大队水城中队': [104.955214, 26.550230],
          '六盘水支队盘州大队红果中队': [104.467286,25.698296],
          '黔西南支队兴仁大队兴仁体育路中队': [105.1235, 252552],
          '黔西南支队望谟大队望谟中队': [106.094692, 25.174786],
          '黔西南支队晴隆大队晴隆中队': [105.225163, 25.849260],
          '黔西南支队顶效大队顶效中队': [105.121822, 25.166144],
          '黔西南支队战勤保障大队': [104.571, 245818],
        };
        const convertData = function(data) {
          let res = [];
          for (let i = 0; i < data.length; i++) {
            let geoCoord = geoCoordMap[data[i].name];
            if (geoCoord) {
              res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
              }); // 除了坐标，值也加进去了。
            }
          }
          return res;
        };

        // 使用echarts，画地图
        echarts.registerMap("贵州", responses[0]);
        // 基于准备好的dom，初始化echarts实例
        let chart = echarts.init(document.getElementById("map"), "light");
        chart.setOption({
          backgroundColor: "transparent",
          legend: {
            itemWidth: 30,
            itemHeight: 30,
            itemGap: 30,
            textStyle: {
              color: "#fff",
              fontSize: 24
            },
            inactiveColor: "#666"
          },
          tooltip: {
            trigger: "item",
            triggerOn: "click"
          },
          geo: {
            map: "贵州",
            roam: true,
            label: {
              show: false,
              fontSize: 24,
              color: "#ccc"
            },
            emphasis: {
              label: {
                fontSize: 20,
                color: "#fff"
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
                color: "#fff"
              }
            }
          },
          series: [
            {
              id: "landing",
              name: "起降机场",
              type: "scatter",
              coordinateSystem: "geo",
              symbol: `image://${landing}`,
              symbolSize: 24,
              tooltip: {
                formatter: "{a}：{b}",
                textStyle: {
                  fontSize: 24
                }
              },
              data: convertData([
                { name: "都匀市足球小镇", value: 1 },
                { name: "荔波大小七孔游客集散中心东门", value: 1 },
                { name: "瓮安草塘", value: 1 },
                { name: "贵定县金海雪山景区", value: 1 },
                { name: "福泉市体育场", value: 1 },
                { name: "麻江县卡乌", value: 1 },
                { name: "三都县体育场", value: 1 },
                { name: "惠水县体育场", value: 1 },
                { name: "独山三井村", value: 1 },
                { name: "长顺深泉谷", value: 1 },
                { name: "平塘县体育场", value: 1 },
                { name: "龙里县体育场", value: 1 },
                { name: "凯里市体育场", value: 1 },
                { name: "西江千户苗寨", value: 1 },
                { name: "丹寨万达小镇", value: 1 },
                { name: "安顺黄果树", value: 1 },
                { name: "贵阳观山湖", value: 1 },
                { name: "贵阳花溪", value: 1 },
                { name: "铜仁梵净山", value: 1 },
                { name: "纳雍猫场起降场", value: 1 },
                { name: "纳雍起降场", value: 1 },
                { name: "金沙新化起降场", value: 1 },
                { name: "织金起降场", value: 1 },
                { name: "望谟起降场", value: 1 },
                { name: "册亨起降场", value: 1 },
                { name: "开阳金中起降场", value: 1 },
                { name: "黄平起降场", value: 1 },
                { name: "思南起降场", value: 1 },
                { name: "安顺龙宫起降场", value: 1 },
                { name: "仁怀二合镇起降场", value: 1 },
                { name: "仁怀山盆起降场", value: 1 },
                { name: "沿河起降场", value: 1 },
                { name: "道真县民族体育馆", value: 1 },
                { name: "德江南收费站右侧", value: 1 },
                { name: "德江收费站出口", value: 1 },
                { name: "都匀匀东厦前广场", value: 1 },
                { name: "梵净山金佛寺广场", value: 1 },
                { name: "凤冈县第五中学", value: 1 },
                { name: "凤冈县湿地公园广场起降点", value: 1 },
                { name: "黄果树瀑布风景区", value: 1 },
                { name: "汇川体育场", value: 1 },
                { name: "凯里市交通局", value: 1 },
                { name: "凯里万国城", value: 1 },
                { name: "湄潭县人民医院", value: 1 },
                { name: "湄潭救援点", value: 1 },
                { name: "湄潭县人民政府办公大楼广场", value: 1 },
                { name: "湄潭县中国茶城广场", value: 1 },
                { name: "盘州市红果体育馆", value: 1 },
                { name: "仁怀市茅台集团包装车间广场", value: 1 },
                { name: "仁怀市茅台镇1915广场", value: 1 },
                { name: "仁怀市楠竹林公园广场", value: 1 },
                { name: "仁怀市人民政府门前广场", value: 1 },
                { name: "仁怀市人民医院", value: 1 },
                { name: "榕江县常驰广场东侧", value: 1 },
                { name: "泗渡镇光明村迎春桥", value: 1 },
                { name: "桐梓县化工厂", value: 1 },
                { name: "天柱县金凤广场", value: 1 },
                { name: "铜仁大沙坝服务区", value: 1 },
                { name: "铜仁江口梵净山金佛寺酒店前", value: 1 },
                { name: "务川县人民政府", value: 1 },
                { name: "玉屏县政府广场", value: 1 },
                { name: "云山屯古建筑群景区", value: 1 },
                { name: "遵义牡丹园（泗渡镇）", value: 1 },
                { name: "遵义人民广场", value: 1 },
                { name: "遵义第一人民医院", value: 1 },
                { name: "楠木渡收费站附近学校", value: 1 },
                { name: "龙坪收费站+草地 可以紧急救援", value: 1 },
                { name: "贵阳支队培训基地", value: 1000},
                { name: "贵阳支队经开大队金戈路中队", value: 1},
                { name: "贵阳支队息烽大队虎成大道中队", value: 1},
                { name: "贵阳支队开阳大队麦肖路中队", value: 1},
                { name: "贵阳支队特勤二中队", value: 1},
                { name: "遵义支队余庆大队余庆中队", value: 1},
                { name: "遵义支队道真大队道真中队", value: 1},
                { name: "安顺支队平坝大队平坝中队", value: 1},
                { name: "安顺支队普定大队普定中队", value: 1},
                { name: "安顺支队紫云大队紫云中队", value: 1},
                { name: "黔南州应急救援培训基地", value: 1},
                { name: "黔南支队贵定县大队", value: 1},
                { name: "黔南支队独山县大队", value: 1},
                { name: "黔南支队惠水县大队", value: 1},
                { name: "黔南支队瓮安县大队", value: 1},
                { name: "黔南支队福泉市大队", value: 1},
                { name: "黔南支队龙里县大队", value: 1},
                { name: "黔南支队平塘县大队", value: 1},
                { name: "黔南支队荔波县大队", value: 1},
                { name: "黔南支队三都县大队", value: 1},
                { name: "黔东南支队机关", value: 1},
                { name: "黔东南支队特勤中队", value: 1},
                { name: "黔东南支队从江大队从江中队", value: 1},
                { name: "黔东南支队天柱大队天柱中队 ", value: 1},
                { name: "黔东南支队开发区大队开发区中队", value: 1},
                { name: "黔东南支队岑巩大队岑巩中队", value: 1},
                { name: "黔东南支队剑河大队剑河中队", value: 1},
                { name: "铜仁支队培训基地（在建）", value: 1},
                { name: "铜仁支队松桃大队松桃中队", value: 1},
                { name: "铜仁支队玉屏大队玉屏中队", value: 1},
                { name: "铜仁支队思南消防大队", value: 1},
                { name: "毕节支队七星关大队南环东路中队", value: 1},
                { name: "毕节支队黔西大队黔西中队", value: 1},
                { name: "毕节支队金沙大队黄山路中队", value: 1},
                { name: "毕节支队金沙大队长江大道中队", value: 1},
                { name: "毕节支队赫章大队赫章中队", value: 1},
                { name: "六盘水支队机关", value: 1},
                { name: "六盘水支队红桥大队红桥中队", value: 1},
                { name: "六盘水支队水城大队水城中队", value: 1},
                { name: "六盘水支队盘州大队红果中队", value: 1},
                { name: "黔西南支队兴仁大队兴仁体育路中队", value: 1},
                { name: "黔西南支队望谟大队望谟中队", value: 1},
                { name: "黔西南支队晴隆大队晴隆中队", value: 1},
                { name: "黔西南支队顶效大队顶效中队", value: 1},
                { name: "黔西南支队战勤保障大队", value: 1},
              ]),
              label: {
                color: "#fff"
              },
              itemStyle: {
                color: "#fff"
              }
            },
            {
              id: "helicopter",
              name: "直升机",
              type: "scatter",
              coordinateSystem: "geo",
              symbol: `image://${helicopter}`,
              symbolSize: 50,
              tooltip: {
                formatter: function(params, ticket, callback) {
                  let strHTML = `${params.name}<br/>${params.value[2]}`;
                  return strHTML;
                },
                textStyle: {
                  fontSize: 24
                }
              },
              data: [
                {
                  name: "贵阳上海金汇通用航空公司",
                  value: [
                    106.606658,
                    26.626219,
                    `总数量：1<br/>型号：阿古斯特AW139<br/>最大载客：10人<br/>最大航程：568km<br/>联系人：郝杰<br/>联系电话：18984087827`
                  ]
                },
                {
                  name: "黔南剑江红都通用航空公司",
                  value: [
                    107.512186,
                    26.265859,
                    `总数量：3<br/>型号：法国空客AS350B3<br/>数量：1<br/>最大载客：6（含1名飞行员）<br/>
                    最大航程：645km
                    <br/>型号：美国罗宾逊R44<br/>数量：2<br/>最大载客：4（含1名飞行员）<br/>最大航程645km<br/>
                    联系人：刘宏<br/>
                    联系电话：  18808545808`
                  ]
                },
                {
                  name: "六盘水盘州通用航空公司",
                  value: [
                    104.48012,
                    25.707355,
                    `总数量：2<br/>型号：AW119KX<br/>最大载客：6（含1名飞行员）<br/>最大航速：256km/h<br/>
                    联系人：蒋媛<br/>
                    联系电话：  15585804127`
                  ]
                },
                {
                  name: "黔西南四川中蓝通用航空有限公司",
                  value: [
                    104.865095,
                    25.154381,
                    `总数量：2<br/>型号：法国空客H125<br/>数量：1<br/>最大载客：6（含1名飞行员）<br/>最大航程：660km<br/>
                    型号：美国罗宾逊R44<br/>数量：1<br/>最大载客：4（含1名飞行员）<br/>最大航程：545km<br/>
                    联系人：蒋总经理<br/>
                    联系电话：  18080906937`
                  ]
                }
              ]
            }
          ]
        });
        let windowRes = null;
        window.addEventListener(
          "resize",
          (windowRes = function() {
            chart.resize();
          })
        );
      });
    }
  },
  mounted() {
    this.copterFun();
  }
};
</script>
<style lang="scss" scoped>
.company {
  padding: 20px;
  margin-top: 40px;
  .companyTitle {
    text-align: left;
    font-size: 24px;
  }
  .companyP {
    margin-top: 20px;
    float: left;
    width: 50%;
    font-size: 20px;
    font-weight: normal;
    line-height: 30px;
    .title {
      font-size: 20px;
      // font-weight: bold;
    }
  }
}
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
#words > h1 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
}
#words > p {
  text-indent: 2em;
  line-height: 50px;
  font-size: 24px;
}
.planeLi {
  margin-top: 10px;
  overflow: auto;
  .planeImg {
    padding: 10px;
    img {
      width: 100%;
      height: 300px;
    }
  }
  .planeP {
    font-size: 20px;
    padding-left: 20px;
    .pHeader {
      font-size: 20px;
      font-weight: bold;
    }
    .pLeft {
      width: 50%;
      float: left;
    }
    .pRight {
      width: 50%;
      float: left;
    }
    span {
      display: block;
      width: 100%;
    }
  }
}
</style>