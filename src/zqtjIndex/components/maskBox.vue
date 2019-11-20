<template>
  <div class="outBigModal">
    <!-- 立功受奖弹窗 -->
    <div class="big_modal">
      <div class="modalTitle">分析研判</div>
      <div class="showMoreDiv">
        <div class="nei">
          <div class="header">{{title}}分析</div>
          <!-- 交通事故 -->
          <div v-if="title =='交通事故'" class="content">
            <p class="title">(一)道路类型分析</p>
            <div class="ecartsDiv">
              <histogramCom></histogramCom>
            </div>
            <p
              class="content_item"
            >由于贵州道路弯多路陡，乡村道路、城市交通道路的交通事故救援占62.1%；其次是高速交通事故救援占22.5%，事故性质以追尾居多，各路段发生交通事故的概率比较平均。</p>
            <p class="content_item">
              <span class="yellowFont">从高速路分析，</span>全省有沪昆、兰海、杭瑞、厦蓉、蓉遵、汕昆、都香等高速公路，全长6453公里。据消防出警救援显示，
              <span
                class="redFont"
              >沪昆高速、杭瑞高速、兰海高速、夏蓉高速</span>是消防救援的重点。
            </p>
            <p class="content_item">
              <span class="yellowFont">沪昆高速</span>贵州境内全长约587公里，消防救援主要发生在沿线的
              <span class="redFont">盘州市、西秀区、关岭县、晴隆县、观山湖区，</span>事故主要以追尾、侧翻为主。
            </p>
            <p class="content_item">
              <span class="yellowFont">杭瑞高速</span>贵州境内全长约626公里，消防救援主要发生在
              <span class="redFont">湄潭县、水城县、碧江区、江口县、大方县，</span>事故主要以追尾、侧翻为主。
            </p>
            <p class="content_item">
              <span class="yellowFont">兰海高速</span>贵州境内全长约480公里，消防救援主要发生在沿线的
              <span class="redFont">独山县、汇川区、播州区、桐梓县、开阳县，</span>事故主要以追尾、侧翻为主。
            </p>
            <p class="content_item">
              <span class="yellowFont">厦蓉高速</span>贵州境内全长约665公里，消防救援主要发生在沿线的
              <span class="redFont">清镇县、都匀市、龙里县、三都县，</span>事故主要以追尾、侧翻为主。
            </p>
            <p class="title">(二)区县境内分析</p>
            <tableCom></tableCom>
            <div class="content_item">
              <ul>
                <li>交通事故救援排名前三的支队有贵阳支队、遵义支队、黔南支队。</li>
                <li>交通事故救援排名前10的大队有观山湖大队、水城县大队、西秀大队、南明大队、播州大队、清镇县大队、白云大队、盘州县大队、乌当大队、花溪大队。</li>
              </ul>
            </div>
            <p class="title">(三)事故性质分析</p>
            <div class="content_item">
              交通事故的事故性质繁多，但有三种事故类型占到交通事故接警总量的84.49%，这三种事故类型分别是追尾，占交通事故接警总量的42.1%；侧翻，占交通事故接警总量的28.39%，车辆自燃、起火，占交通事故接警总量的14%。
              <ul>
                <li>重点关注类型化危车辆处置，占比0.97%。</li>
                <li>1、2019年3月2日，沪昆高速鲁屯段，化危车辆处置，泄漏汽油3吨。</li>
                <li>2、2019年4月17日，碧江区川硐镇天生桥景区路段，化危车辆处置，运输雷管、炸药车辆翻车。</li>
                <li>3、2019年8月8日，安江高速江口路段，化危车辆处置，泄露溶剂油30kg。</li>
                <li>4、2019年8月9日，安江高速江口路段，危化车辆处置，汽油泄露10kg。</li>
                <li>5、2019年8月14日，汕昆高速顶效二号隧道段，化危车辆处置，泄漏柴油2.5吨。</li>
                <li>6、2019年8月22日，万山区下溪乡路段，化危车辆处理，泄漏30吨硫酸。</li>
                <li>7、2019年9月26日，道安高速湄潭县西河收费站旁边，化危车辆处置，罐车侧翻后，因罐车装载的为液化石油气，需要将罐体运输到安全地段，中队现场进行安保。</li>
              </ul>
            </div>
          </div>

          <!-- 救人 -->
          <div v-if="title == '群众遇险'" class="content">
            <p class="title">(一)事故类型分析</p>
            <div class="ecartsDiv">
              <histogramCom></histogramCom>
            </div>
            <p class="content_item">设备故障救人占比31.43%。跳楼救人占比29.19%。水上营救占比18.86%。其他类型救人占比 19.7%。</p>
            <p class="content_item">在设备故障救人中，主要以电梯故障为主，占设备故障救人的91.34%，占全省救人出警的38.71%。</p>
            <p class="content_item">在水上营救中，主要以打捞为主，占水上营救的63.23%，占全省救人出警的11.92%。</p>
            <p class="content_item">其他类型中，以社会救助为主，占其他类型救人的71.54%，占全省救人出警的14.09%。</p>
            <p class="title">(二)区县境内分析</p>
            <!-- 插入地图 -->
            <div class="map">
              <map-com></map-com>
            </div>
            <p class="content_item">
              救人救援排名前3的支队有
              <span class="redFont">贵阳支队、遵义支队、六盘水支队。</span>其中贵阳支队的救人接警数量占全省救人接警的47.27%。
            </p>
            <p class="content_item">
              救人救援排名前10的大队有
              <span
                class="redFont"
              >南明大队、云岩大队、观山湖大队、红花冈大队、清镇市大队、花溪大队、乌当大队、白云大队、经开大队、汇川大队。</span>
            </p>
            <p class="content_item">
              跳楼救人排名前10的大队有
              <span
                class="redFont"
              >南明大队、云岩大队、观山湖大队、白云大队、红花冈大队、花溪大队、清镇市大队、钟山区大队、汇川区大队、仁怀市大队。</span>
              其中南明区的花果园社区跳楼营救接警数量占全省跳楼营救的12.98%，是跳楼最高发的社区。
            </p>
          </div>
          <!-- 水旱灾害 -->
          <div v-if="title == '水旱灾害'" class="content">
            <p class="title">(一)灾害类型分析</p>
            <div class="ecartsDiv">
              <histogramCom></histogramCom>
            </div>
            <p
              class="content_item"
            >贵州河流处在长江和珠江两大水系上游交错地带，苗岭是长江和珠江两流域的分水岭，以北属长江流域，流域面积115747平方千米，占全省国土面积约65%，主要河流有乌江、赤水河、清水江、洪州河、舞阳河、锦江、松桃河、松坎河、牛栏江、横江等。苗岭以南属珠江流域，流域面积60420平方千米，占全省国土面积约35%，主要河流有南盘江、北盘江、红水河、都柳江、打狗河等。</p>
            <p
              class="content_item"
            >贵州境内山脉众多，重峦叠嶂，绵延纵横，山高谷深。其中92.5%的面积为山地和丘陵。北部有大娄山，自西向东北斜贯北境，川黔要隘娄山关高1444米；中南部苗岭横亘，主峰雷公山高2178米；东北境有武陵山，由湘蜿蜒入黔，主峰梵净山高2572米；西部高耸乌蒙山，属此山脉的赫章县珠市乡韭菜坪海拔2900.6米，为贵州境内最高点。</p>
            <p class="content_item">贵州省河流众多且地处山区，全年降水量大，容易发生水灾及山体滑坡事故。</p>
            <p class="content_item">水灾事故占自然灾害事故的81%，是贵州省自然灾害事故抢险救援的重中之重。</p>
            <p class="title">(二)区县境内分析</p>
            <!-- 插入地图 -->
            <div class="map">
              <map-com></map-com>
            </div>
            <p class="content_item">
              自然灾害事故救援排名前3的支队有
              <span class="redFont">贵阳支队、黔西南支队、毕节支队。</span>其中贵阳支队的自然灾害接警数量占全省自然灾害接警的47.8%。
            </p>
            <p class="content_item">
              自然灾害事故救援排名前10的大队有
              <span
                class="redFont"
              >云岩大队、南明大队、金阳大队、清镇大队、七星关大队、乌当大队、花溪大队、贞丰县大队、安龙县大队、兴义市大队。</span>
            </p>
            <p class="content_item">
              水灾事故救援排名前10的大队有
              <span class="redFont">云岩大队、南明大队、金阳大队、清镇大队、乌当大队、花溪大队、贞丰县大队、汇川大队、兴义市大队。</span>
            </p>
            <p class="content_item">
              山体滑坡事故救援排名前4的大队有
              <span class="redFont">云岩大队、水城县大队、罗甸县大队、赫章县大队。</span>
            </p>
            <!-- <p class="title">(三)事故性质分析</p> -->
          </div>
          <div v-if="title == '化学危险品事故'" class="content">
            <p class="title">(一)事故类型分析</p>
            <div class="ecartsDiv">
              <histogramCom></histogramCom>
            </div>
            <p
              class="content_item"
            >压缩气体和液化气体接警占比70.13%。易燃液体接警占比20.36%。杂类接警占比4.52%。爆炸品接警占比 1.8%。易燃固体、自燃物品和遇湿易燃物品接警占比1.3%。腐蚀品接警占比0.9%。毒害品接警占比0.45%。氧化剂和有机过氧化物接警0.45%。</p>
            <p
              class="content_item"
            >化学危险品事故接警中，压缩气体和液化气体的接警数量占比超过70%。在压缩气体和液化气体接警中，主要是天然气管道泄漏，煤气管道泄漏，液化气罐泄漏、起火。 在易燃液体接警中，主要是汽油、柴油泄漏。</p>

            <p class="title">(二)区县境内分析</p>
            <!-- 插入地图 -->
            <div class="map">
              <map-com></map-com>
            </div>
            <p class="content_item">
              化学危险品事故救援排名前3的支队有
              <span class="redFont">贵阳支队、六盘水支队、遵义支队。</span>其中贵阳支队的救人接警数量占全省救人接警的62.89%，六盘水支队占11.76%，遵义支队占10.4%。
            </p>
            <p class="content_item">
              化学危险品事故救援排名前10的大队有
              <span
                class="redFont"
              >南明大队、云岩大队、白云大队、观山湖大队、花溪大队、红花冈大队、钟山大队、经开大队、水城县大队、清镇市大队。</span>
            </p>
            <p class="content_item">
              压缩气体和液化气体救援排名前10的大队有
              <span
                class="redFont"
              >南明大队、云岩大队、观山湖大队、红花冈大队、钟山大队、白云大队、水城县大队、清镇市大队、经开大队、花溪大队。</span>
              南明区人口密集，燃气、液化气罐使用量大，容易发生燃气管道、液化气罐泄漏。
            </p>
          </div>
        </div>
        <div class="closeImg" @click="closeAll">
          <img src="../../common/images/bubble_close.png" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tableCom from "./tableCom";
import histogramCom from "./echartsBar";
import mapCom from "./map";
export default {
  name: "maskBox",
  data() {
    return {
      dataJson: JSON.parse(window.localStorage.getItem("dataJson")),
      title: ""
    };
  },
  components: {
    tableCom,
    histogramCom,
    mapCom
  },
  created() {
    this.title = this.dataJson.dataName;
  },
  mounted() {},
  methods: {
    closeAll() {
      this.$emit("closeMaskBox");
    }
  }
};
</script>
<style lang="scss">
.map {
  width: 100%;
  height: 600px;
}
.title {
  font-size: 26px;
  font-weight: bold;
}
.ecartsDiv {
  width: 1470px;
  height: 800px;
}
.yellowFont {
  color: yellow;
  font-size: 32px;
}
.redFont {
  color: #ff86ce;
}
.outBigModal {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  z-index: 9999;
  .big_modal_unit {
    width: 714px;
  }
  .big_modal_person {
    width: 1071px;
  }
}
.big_modal {
  width: 1556px;
  height: 930px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .modalTitle {
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    color: #fff;
  }
}
// 弹出框
.showMoreDiv {
  width: 100%;
  height: 890px;
  background: url(../../common/images/content.png) no-repeat center center;
  background-size: 100% 100%;
  z-index: 9999;
  padding: 20px;
  padding-bottom: 40px;
  overflow: hidden;
  .nei {
    width: 100%;
    height: 100%;
    position: relative;
    top: 20px;
    overflow-x: hidden;
    overflow-y: hidden;
    .header {
      width: 100%;
      font-size: 36px;
      line-height: 40px;
      text-align: center;
      background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .content {
      height: 760px;
      line-height: 96px;
      font-size: 28px;
      color: #ffffff;
      padding: 20px;
      overflow-y: auto;
      letter-spacing: 5px;
      .content_item {
        text-indent: 56px;
      }
    }
    .itemTable {
      width: 100%;
      height: 192px;
      div {
        display: block;
        border: 1px solid #003e70;
        text-align: center;
        width: 235px;
        float: left;
        .label {
          font-size: 24px;
          height: 43px;
          line-height: 43px;
          color: #ffffff;
          background: url(../../common/images/title_bg.png) no-repeat center
            center;
          background-size: 100% 100%;
        }
        .number {
          font-size: 24px;
          height: 70px;
          line-height: 70px;
          background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
  }
  .closeImg {
    position: absolute;
    right: 16px;
    top: 60px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
