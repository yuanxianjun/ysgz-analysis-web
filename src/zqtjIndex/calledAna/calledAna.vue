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
        </div>
        <div class="itemTable">
          <div v-for="itemCon in item.data">
            <p class="label">花溪区大队</p>
            <p class="number">800</p>
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
          data: [
            {
              name: "南明区大队",
              value: "100"
            },
            {
              name: "花溪区区大队",
              value: "100"
            },
            {
              name: "花溪区区大队",
              value: "100"
            },
            {
              name: "花溪区区大队",
              value: "100"
            },
            {
              name: "花溪区区大队",
              value: "100"
            },
            {
              name: "花溪区区大队",
              value: "100"
            }
          ]
        },
        {
          title: "遵义支队",
          data: [
            {
              name: "南明区大队",
              value: "100"
            },
            {
              name: "花溪区大队",
              value: "100"
            },
            {
              name: "小河区大队",
              value: "100"
            },
            {
              name: "乌丹区大队",
              value: "100"
            },
            {
              name: "观山湖区大队",
              value: "100"
            },
            {
              name: "白云区大队",
              value: "100"
            }
          ]
        },
        {
          title: "六盘水支队",
          data: [
            {
              name: "南明区大队",
              value: "100"
            },
            {
              name: "花溪区大队",
              value: "100"
            },
            {
              name: "小河区大队",
              value: "100"
            },
            {
              name: "乌丹区大队",
              value: "100"
            },
            {
              name: "观山湖区大队",
              value: "100"
            },
            {
              name: "白云区大队",
              value: "100"
            }
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
