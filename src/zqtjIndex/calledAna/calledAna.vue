<template>
  <div id="calledAna">
    <!-- 公共的头部组件 -->
    <!-- v-if="oneDayData.nowTime" -->
    <comHeader :serveTime="oneDayData.nowTime"></comHeader>
    <backHome :localPage="linkPageObj"></backHome>
    <div class="header">
      <div class="header_left">
        <!-- 退出按钮  -->
        <comOut></comOut>
      </div>
      <div class="header_right">
        <el-button class="buttonPos detailButton">
          <a href="./detailAna.html">
            <img src="./assets/detail.png" alt />
          </a>
        </el-button>
        <!-- 分析按钮 -->
        <el-button class="buttonPos" @click="showGif">
          <img src="../../common/images/anaButton.png" alt />
        </el-button>
      </div>
    </div>
    <!-- area: "2019年全省统计",
          all: "1132",
          speed: "55",
          nation: "444",
          province: "33",
          country: "1",
    city: "0"-->
    <div class="content-wrapper">
      <el-table :data="mockData" style="width: 100%" height="790">
        <el-table-column prop="area" label="地区" width="450"></el-table-column>
        <el-table-column prop="all" label="总计"></el-table-column>
        <el-table-column prop="speed" label="高速"></el-table-column>
        <el-table-column prop="nation" label="国道"></el-table-column>
        <el-table-column prop="province" label="省道"></el-table-column>
        <el-table-column prop="country" label="乡村"></el-table-column>
        <el-table-column prop="city" label="城市"></el-table-column>
      </el-table>
    </div>
    <boll-search v-if="showBoll"></boll-search>
    <mask-box v-if="showBigModel" @closeMaskBox="closeMaskBox"></mask-box>
  </div>
</template>
<script>
// 引入头部的组件
import comHeader from "../components/comHeader";
import backHome from "../components/toHome";
import comOut from "../components/comOut";
import bollSearch from "../../zqtjIndex/components/doScheduling";
import mockData from "../../common/json/zhidui";
import maskBox from "../components/maskBox";
export default {
  name: "calledAna",
  data() {
    return {
      linkPageObj: [
        {
          link: "",
          name: ""
        }
      ],
      // 一日一更新的数据
      oneDayData: { zbzq: "", nowTime: "" },
      showBigModel: false,
      showBoll: false,
      mockData
    };
  },
  created() {
    var t = GetQueryString("name"); //获取地址栏参数
    var title = decodeURI(t); //只需要转一次码
    // 利用正则表达式方式，获取地址栏中的的参数值
    function GetQueryString(name) {
      var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
      var r = window.location.search.substr(1).match(reg);
      if (r != null) return unescape(r[2]);
      return null;
    }
    this.linkPageObj = [
      {
        link: "",
        name: "交通事故"
      }
    ];
  },
  mounted() {},
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
    }
  },
  computed: {},
  components: {
    comHeader,
    comOut,
    backHome,
    bollSearch,
    maskBox
  }
};
</script>


<style>
</style>
