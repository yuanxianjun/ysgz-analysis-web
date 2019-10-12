<template>
  <div id="zqtjIndex">
    <com-header></com-header>
    <el-row>
      <el-col class="header_mb">
        <back-home :localPage="linkPageObj"></back-home>
      </el-col>
    </el-row>
    <comOut></comOut>
    <!-- 分析按钮 -->
    <el-button class="buttonPos" @click="showGif">
      <img src="../../common/images/anaButton.png" alt />
    </el-button>
    <div class="detailContent">
      <div class="tableBox">
        <table class="titleTable" border="1">
          <thead>
            <tr class="trTitle titleWidth">
              <td colspan="2">地区</td>
              <td>总计</td>
              <td>高速</td>
              <td>国道</td>
              <td>省道</td>
              <td>乡村</td>
              <td>城市</td>
            </tr>
          </thead>
          <tbody ref="tbodyBox"></tbody>
        </table>
      </div>
    </div>
    <bollSearch v-if="showBoll"></bollSearch>
    <div class="outBigModal" v-if="showBigModel">
      <!-- 立功受奖弹窗 -->
      <div class="big_modal">
        <div class="modalTitle">分析研判</div>
        <div class="showMoreDiv">
          <div class="nei">
            <div class="itemTable">
              <div v-for="itemCon in mockData2">
                <p class="label">{{itemCon.label}}</p>
                <p class="number">{{itemCon.con}}</p>
              </div>
            </div>
            <div class="contextAna">加强该区域辖区中队的道路抢险救援装备实力。</div>
          </div>
          <div class="closeImg" @click="showBigModel = false;">
            <img src="../../common/images/bubble_close.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";
import comOut from "@/zqtjIndex/components/comOut";
import detailData from "../../common/json/qu";
import bollSearch from "../../zqtjIndex/components/doScheduling";
export default {
  name: "zqtjIndex",
  data() {
    return {
      showBigModel: false,
      showBoll: false,
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
      ],
      linkPageObj: [
        {
          link: "calledAna.html",
          name: "交通事故"
        },
        {
          link: "",
          name: "详情列表"
        }
      ],
      localPage: "",
      detailData
    };
  },
  components: {
    comHeader,
    backHome,
    comOut,
    bollSearch
  },
  created() {
    this.localInfo_gd();
  },
  mounted() {
    this.createTable("tbodyBox", this.detailData);
  },
  methods: {
    showGif() {
      this.showBoll = true;
      setTimeout(() => {
        this.showBoll = false;
        this.showBigModel = true;
      }, 2000);
    },
    // 获取登陆人的姓名
    // 根据userId 查询
    localInfo_gd() {
      var hytoken = window.localStorage.getItem("hytoken");
      this.axios({
        method: "post",
        url: "/user/userInfo/?hytoken=" + hytoken
      }).then(res => {
        if (res.data && res.data.code === "success") {
          var data = res.data.result || {};
          if (data) {
            this.resetSetItem("userInfo", JSON.stringify(data));
          }
        } else if (res.data.code == 500) {
          this.$message({
            message: res.data.msg,
            center: true,
            type: "error"
          });
        }
      });
    },

    // 创建table内容
    createTable(ref, data) {
      let table = this.$refs[ref];
      var tableContent = `<tr class='titleWidth'><td colspan="2">${data.area}</td>
      <td class='trColor'>${data.all}</td>
      <td class='trColor'>${data.speed}</td>
      <td class='trColor'>${data.nation}</td>
      <td class='trColor'>${data.province}</td>
      <td class='trColor'>${data.country}</td>
      <td class='trColor'>${data.city}</td></tr>`;
      data.cityList.forEach((item, i) => {
        // tableContent+=`<tr><td rowspan=${item.districtList.length?item.districtList.length:'1'}>${item.title}</td>`
        item.districtList.forEach((disItem, k) => {
          tableContent += `<tr>`;
          if (k == 0) {
            tableContent += `<td style='width:calc(188px / 14);' rowspan=${
              item.districtList.length ? item.districtList.length : "1"
            }>${item.area}</td>`;
          }
          tableContent += `<td style='width:calc(188px / 14);'>${disItem.area}</td>
          <td class='trColor'>${disItem.all}</td>
          <td class='trColor'>${disItem.speed}</td>
          <td class='trColor'>${disItem.nation}</td>
          <td class='trColor'>${disItem.province}</td>
          <td class='trColor'>${disItem.country}</td>
          <td class='trColor'>${disItem.city}</td></tr>`;
        });
      });
      table.innerHTML = tableContent;
    }
  },
  destroyed() {}
};
</script>


<style lang="scss">
@font-face {
  font-family: "numberFont"; //数组字体
  src: url("../../common/fonts/290-CAI978.TTF");
}
#zqtjIndex {
  position: relative;
  color: white;
  padding-bottom: 21px;
  width: 1920px;
  height: 1080px;
  //   overflow: hidden;
  background-image: url(../../common/images/background.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  .detailContent {
    width: 100%;
    padding: 30px 20px;
    .tableBox {
      width: 100%;
      height: 850px;
      overflow-y: auto;
    }
    table {
      word-break: break-all;
      border-collapse: collapse;
      width: 100%;
      text-align: center;
      tr,
      td {
        border: 1px solid #006d94;
      }
      td {
        font-family: numberFont;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 24px;
        height: 64px;
      }
      tbody {
        width: 100%;
      }
      .trTitle {
        background-image: url(../../common/images/titleBg.png);
      }
      .titleWidth td {
        width: calc(100% / 7);
      }
      .trColor {
        font-size: 48px !important;
        background-image: -webkit-linear-gradient(
          90deg,
          #00ff1d 0%,
          #00fff5 100%
        );
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
}
@media screen and (width: 1920px) {
  html {
    overflow-x: hidden !important;
  }
}
.buttonPos {
  position: absolute;
  top: 130px;
  right: 40px;
  width: 150px;
  height: 45px;
  background: transparent;
  border: none;
  padding: 0;
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
  width: 991px;
  height: 602px;
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
  height: 570px;
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
    overflow-y: auto;
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
          background: url(../../common/images/title_bg.png);
        }
        .number {
          font-size: 24px;
          height: 70px;
          line-height: 70px;
          background-image: linear-gradient(90deg, #00ff1d 0%, #00fff5 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .contextAna {
      width: 930px;
      height: 117px;
      background: url("../../common/images/context.png") no-repeat center center;
      background-size: 100% 100%;
      text-align: center;
      line-height: 1;
      font-size: 24px;
      line-height: 117px;
      background-image: linear-gradient(90deg, #00ff1d 0%, #00fff5 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      position: absolute;
      bottom: 30px;
      right: 10px;
    }
  }
  .closeImg {
    position: absolute;
    right: 10px;
    top: 50px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>