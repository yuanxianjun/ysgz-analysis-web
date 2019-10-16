<template>
  <div class="outBigModal">
    <!-- 立功受奖弹窗 -->
    <div class="big_modal">
      <div class="modalTitle">分析研判</div>
      <div class="showMoreDiv">
        <div class="nei">
          <!-- <div class="itemTable">
            <div v-for="itemCon in mockData2">
              <p class="label">{{itemCon.label}}</p>
              <p class="number">{{itemCon.con}}</p>
            </div>
          </div>
          <div class="contextAna">
            <p>加强该区域辖区中队的道路抢险救援装备实力。</p>
          </div>-->
          <div class="header">交通事故分析</div>
          <div class="content">
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
        </div>
        <div class="closeImg" @click="closeAll">
          <img src="../../common/images/bubble_close.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import tableCom from "./tableCom";
import histogramCom from "./echartsBar";
export default {
  name: "maskBox",
  data() {
    return {
      mockData2: [
        {
          label: "高发季度",
          con: "第一季度"
        },
        {
          label: "高发月份",
          con: "二月份"
        },
        {
          label: "高发时间",
          con: "凌晨两点"
        },
        {
          label: "高发类型",
          con: "追尾"
        },
        {
          label: "高发路段",
          con: "京贵高速"
        },
        {
          label: "所辖区中队",
          con: ""
        }
      ]
    };
  },
  components: {
    tableCom,
    histogramCom
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
.title {
  font-size: 26px;
  font-weight: bold;
}
.ecartsDiv {
  width: 1470px;
  height: 600px;
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
  opacity: 60%;
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
    .contextAna {
      width: 930px;
      height: 117px;
      background: url(../../common/images/context.png) no-repeat center center;
      background-size: 100% 100%;
      text-align: center;
      line-height: 1;
      p {
        width: 100%;
        height: 100%;
        font-size: 24px;
        line-height: 117px;
        background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      position: absolute;
      bottom: 30px;
      right: 10px;
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
