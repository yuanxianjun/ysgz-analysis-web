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
          <img src="./assets/anaButton.png" alt />
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
// 引入头部的组件
import comHeader from "../components/comHeader";
import backHome from "../components/toHome";
import comOut from "../components/comOut";
import bollSearch from "../../zqtjIndex/components/doScheduling";
import mockData from "../../common/json/zhidui";
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
      mockData,
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
    }
  },
  computed: {},
  components: {
    comHeader,
    comOut,
    backHome,
    bollSearch
  }
};
</script>


<style>
</style>
