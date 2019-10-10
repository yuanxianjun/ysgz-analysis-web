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
        <!-- 分析按钮 -->
        <el-button class="buttonPos" @click="showGif">
          <img src="./assets/anaButton.png" alt />
        </el-button>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="conItem" v-for=" item in mockData">
        <div class="itemHeader">
          <i></i>
          <span class="title">{{item.title}}</span>
          <span class="all">{{item.all}}</span>
        </div>
        <div class="itemTable">
          <div v-for="itemCon in item.data">
            <p class="label">{{itemCon.name}}</p>
            <p class="number">{{itemCon.value}}</p>
          </div>
        </div>
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
import moment from "moment";
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
          title: "贵阳支队",
          all: "267",
          data: [
            { name: "观山湖区大队", value: "49" },
            { name: "南明区大队", value: "34" },
            { name: "白云区大队", value: "30" },
            { name: "清镇市大队", value: "30" },
            { name: "乌当区大队", value: "29" },
            { name: "花溪区大队", value: "28" },
            { name: "云岩区大队", value: "21" },
            { name: "修文县大队", value: "20" },
            { name: "息烽县大队", value: "10" },
            { name: "经开区大队", value: "9" },
            { name: "开阳县大队", value: "7" }
          ]
        },
        {
          title: "安顺支队",
          all: 75,
          data: [
            { name: "西秀区大队", value: "35" },
            { name: "关岭县大队", value: "14" },
            { name: "紫云县大队", value: "11" },
            { name: "经济开发区大队", value: "7" },
            { name: "镇宁县大队", value: "7" },
            { name: "平坝区大队", value: "1" }
          ]
        },
        {
          title: "毕节支队",
          all: 109,
          data: [
            { name: "七星关区大队", value: "26" },
            { name: "黔西县大队", value: "20" },
            { name: "大方县大队", value: "16" },
            { name: "织金县大队", value: "12" },
            { name: "威宁县大队（威宁彝族回族苗族自治县大队）", value: "11" },
            { name: "赫章县大队", value: "10" },
            { name: "纳雍县大队", value: "9" },
            { name: "毕节市内", value: "3" },
            { name: "金沙县大队", value: "2" }
          ]
        },
        {
          title: "贵安支队",
          all: 15,
          data: []
        },
        {
          title: "六盘水支队",
          all: 96,
          data: [
            { name: "水城县大队", value: "41" },
            { name: "盘县（州）大队", value: "29" },
            { name: "钟山区大队", value: "13" },
            { name: "六枝特区大队", value: "8" },
            { name: "红桥新区大队", value: "5" }
          ]
        },
        {
          title: "黔东南",
          all: 48,
          data: [
            { name: "从江县大队", value: "7" },
            { name: "凯里市大队", value: "6" },
            { name: "丹寨县大队", value: "6" },
            { name: "黎平县大队", value: "6" },
            { name: "经济开发区大队", value: "5" },
            { name: "台江县大队", value: "4" },
            { name: "三穗县大队", value: "3" },
            { name: "镇远县大队", value: "3" },
            { name: "施秉县大队", value: "2" },
            { name: "剑河县大队", value: "1" },
            { name: "锦屏县大队", value: "1" },
            { name: "雷山县大队", value: "1" },
            { name: "麻江县大队", value: "1" },
            { name: "榕江县大队", value: "1" },
            { name: "天柱县大队", value: "1" }
          ]
        },
        {
          title: "黔南",
          all: 121,
          data: [
            { name: "都匀市大队", value: "19" },
            { name: "福泉市大队", value: "14" },
            { name: "平塘县大队", value: "13" },
            { name: "瓮安县大队", value: "13" },
            { name: "独山县大队", value: "10" },
            { name: "贵定县大队", value: "10" },
            { name: "荔波县大队", value: "10" },
            { name: "龙里县大队", value: "10" },
            { name: "三都县大队", value: "10" },
            { name: "惠水县大队", value: "4" },
            { name: "长顺县大队", value: "4" },
            { name: "开阳县大队", value: "2" },
            { name: "罗甸县大队", value: "2" }
          ]
        },
        {
          title: "黔西南",
          all: 68,
          data: [
            { name: "安龙县大队", value: "2" },
            { name: "册亨县大队", value: "1" },
            { name: "普安县大队", value: "6" },
            { name: "晴隆县大队", value: "10" },
            { name: "望谟县大队", value: "3" },
            { name: "兴仁县大队", value: "12" },
            { name: "兴义市大队", value: "20" },
            { name: "义龙新区顶效大队", value: "8" },
            { name: "贞丰县大队", value: "6" }
          ]
        },
        {
          title: "铜仁",
          all: 91,
          data: [
            { name: "松桃县大队", value: "17" },
            { name: "碧江区大队", value: "16" },
            { name: "石阡县大队", value: "9" },
            { name: "思南县大队", value: "9" },
            { name: "德江县大队", value: "8" },
            { name: "印江县大队", value: "8" },
            { name: "江口县大队", value: "7" },
            { name: "万山区大队", value: "7" },
            { name: "沿河县大队", value: "4" },
            { name: "玉屏县大队", value: "4" },
            { name: "岑巩县大队？", value: "1" },
            { name: "大龙经济开发区大队", value: "1" }
          ]
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
    this.localInfo_gd();
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
            var jgTree = data.orgTree || "";
            var stringTime = moment().format("YYYYMMDD");
            this.oneDay_gd(stringTime + jgTree);
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
    oneDay_gd(dataId) {
      this.axios({
        // headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "post",
        url: `/organization/homePageDataStatistic/${dataId}`
      }).then(res => {
        if (res.data && res.data.code === "success") {
          var data = res.data.result;
          this.oneDayData = data || {};
          // console.log(data, "data");
          this.personnelData = JSON.parse(data.rysj) || {};
          this.dutyStatisticData = JSON.parse(data.zbzq) || [];
          this.orgData = JSON.parse(data.jgyx) || [];
        } else if (res.data.code == 500) {
          this.$message({
            message: res.data.msg,
            center: true,
            type: "error"
          });
        }
      });
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
