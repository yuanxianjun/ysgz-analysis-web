<template>
  <div id="zqtjIndex">
    <com-header></com-header>
    <el-row>
      <el-col class="header_mb">
        <back-home :localPage="linkPageObj"></back-home>
      </el-col>
    </el-row>
    <div class="header">
      <div class="header_left">
        <!-- 退出按钮  -->
        <comOut></comOut>
      </div>
      <div class="header_right">
        <!-- 分析按钮 -->
        <el-button class="buttonPos" @click="showGif">
          <img src="../../common/images/anaButton.png" alt />
        </el-button>
      </div>
    </div>
    <div class="detailContent">
      <table class="titleTable" border="1">
        <thead>
          <tr class="trTitle">
            <td style="width:300px">地区</td>
            <td>总计</td>
            <td>高速</td>
            <td>国道</td>
            <td>省道</td>
            <td>乡村</td>
            <td>城市</td>
          </tr>
        </thead>
      </table>
      <div class="tableBox">
        <table border="1">
          <tbody ref="tbodyBox"></tbody>
        </table>
      </div>
    </div>
    <boll-search v-if="showBoll"></boll-search>
    <mask-box v-if="showBigModel" @closeMaskBox="closeMaskBox"></mask-box>
  </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";
import comOut from "@/zqtjIndex/components/comOut";
import detailData from "../../common/json/qu";
import bollSearch from "../components/doScheduling";
import maskBox from "../components/maskBox";
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
    bollSearch,
    maskBox
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
    closeMaskBox() {
      this.showBigModel = false;
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
      var tableContent = `<tr><td colspan="2" style='width:300px'>${data.area}</td>
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
            tableContent += `<td style='width:calc(1836px / 14);' rowspan=${
              item.districtList.length ? item.districtList.length : "1"
            }>${item.area}</td>`;
          }
          tableContent += `<td style='width:calc(1836px / 14);'>${disItem.area}</td>
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
    padding: 40px;
    .tableBox {
      width: 100%;
      height: 734px;
      overflow-y: auto;
    }
    .titleTable {
      width: calc(100% - 4px);
      tr,
      td {
        border-top: 1px solid #006d94;
      }
    }
    table {
      word-break: break-all;
      border-collapse: collapse;
      width: 100%;
      text-align: center;
      tr,
      td {
        border: 1px solid #006d94;
        border-top: 0;
      }
      td {
        font-family: numberFont;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 24px;
        height: 64px;
      }
      .trTitle {
        background-image: url(../../common/images/titleBg.png);
        td {
          width: calc(1536px / 6);
        }
      }
      .trColor {
        font-size: 48px !important;
        background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        width: calc(1536px / 6);
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
  width: 150px;
  height: 45px;
  background: transparent;
  border: none;
  padding: 0;
  position: absolute;
  top: 130px;
  right: 40px;
}
</style>