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
          <a href>
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
import bollSearch from "./components/doScheduling";
export default {
  name: "calledAna",
  data() {
    return {
      linkPageObj: [
        {
          link: "",
          name: "警情名字"
        }
      ],
      // 一日一更新的数据
      oneDayData: { zbzq: "", nowTime: "" },
      showBigModel: false,
      showBoll: false,
      mockData: [
        {
          area: "2019年全省合计 ",
          all: "1132",
          speed: "246",
          nation: "68",
          province: "117",
          country: "364",
          city: "337"
        },
        {
          area: "贵阳",
          all: " 271",
          speed: "57",
          nation: "12",
          province: "13",
          country: "62",
          city: "127"
        },
        {
          area: "遵义",
          all: "237",
          speed: "42",
          nation: "16",
          province: "28",
          country: "88",
          city: "63"
        },
        {
          area: "安顺",
          all: "237",
          all: "75",
          speed: "23",
          nation: "2",
          province: "9",
          country: "23",
          city: "18"
        },
        {
          area: "黔南",
          all: "121",
          speed: "33",
          nation: "8",
          province: "12",
          country: "46",
          city: "22"
        },
        {
          area: "黔东南",
          all: "49",
          speed: "10",
          nation: "7",
          province: "6",
          country: "14",
          city: "12"
        },
        {
          area: "铜仁",
          all: "91",
          speed: "27",
          nation: "6",
          province: "11",
          country: "29",
          city: "18"
        },
        {
          area: "毕节",
          all: "109",
          speed: "19",
          nation: "7",
          province: "1",
          country: "50",
          city: "32"
        },
        {
          area: "六盘水",
          all: "96",
          speed: "22",
          nation: "4",
          province: "29",
          country: "18",
          city: "23"
        },
        {
          area: "黔西南",
          all: "68",
          speed: "12",
          nation: "6",
          province: "8",
          country: "32",
          city: "10"
        },
        {
          area: "贵安",
          all: "15",
          speed: "1",
          nation: "0",
          province: "0",
          country: "2",
          city: "12"
        }
      ],
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
        name: title
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
