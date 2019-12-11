<template>
  <div id="calledAna">
    <!-- 公共的头部组件 -->
    <!-- v-if="oneDayData.nowTime" -->
    <comHeader :serveTime="oneDayData.nowTime"></comHeader>
    <backHome></backHome>
    <div class="header">
      <div class="header_left">
        <!-- 退出按钮  -->
        
      </div>
      <div class="header_right">
        <el-button
          class="buttonPos detailButton"
          @click="toNext"
          v-if="dataJson.orgTreeId.length<=24"
        >
          <img src="./assets/detail.png" />
        </el-button>
        <!-- 分析按钮 -->
        <el-button class="buttonPos" @click="showGif">
          <img src="../../common/images/anaButton.png" />
        </el-button>
      </div>
    </div>
    <div class="content-wrapper1">
      <table-com></table-com>
    </div>
    <boll-search v-if="showBoll"></boll-search>
    <mask-box v-if="showBigModel" @closeMaskBox="closeMaskBox"></mask-box>
  </div>
</template>
<script>
// 引入头部的组件
import comHeader from "../components/comHeader";
import backHome from "../components/toHome";

import bollSearch from "../../zqtjIndex/components/doScheduling";
import tableCom from "../components/tableCom";
import maskBox from "../components/maskBox";
export default {
  name: "calledAna",
  data() {
    return {
      dataJson: JSON.parse(window.localStorage.getItem("dataJson")),
      // 一日一更新的数据e
      oneDayData: { zbzq: "", nowTime: "" },
      showBigModel: false,
      showBoll: false
    };
  },
  created() {},
  mounted() {},
  methods: {
    toNext() {
      window.location.href = "detailAna.html";
      var getPageLink = [];
      getPageLink = JSON.parse(window.localStorage.getItem("linkPageObj"));
      getPageLink.push({ link: "", name: "详情列表" });
      window.localStorage.setItem("linkPageObj", JSON.stringify(getPageLink));
    },
    showGif() {
      this.showBoll = true;
      setTimeout(() => {
        this.showBoll = false;
        this.showBigModel = true;
      }, 2000);
    },
    closeMaskBox() {
      this.showBigModel = false;
    }
  },
  computed: {},
  components: {
    comHeader,
   
    backHome,
    bollSearch,
    maskBox,
    tableCom
  }
};
</script>


<style lang="scss" scoped>
</style>
