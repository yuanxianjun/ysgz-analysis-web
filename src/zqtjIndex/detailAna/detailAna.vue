<template>
  <div id="zqtjIndex">
    <com-header></com-header>
    <backHome></backHome>
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
      <el-table
        :data="detailData"
        border
        height="800"
        :span-method="arraySpanMethod"
        :header-cell-class-name="thHeader"
        style="width: 100%;"
      >
        <el-table-column
          v-for="(item,i) in headerData[detailsType]"
          :key="i"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
          align="center"
        ></el-table-column>
      </el-table>
    </div>
    <boll-search v-if="showBoll"></boll-search>
    <mask-box v-if="showBigModel" @closeMaskBox="closeMaskBox"></mask-box>
  </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";
import comOut from "@/zqtjIndex/components/comOut";
import quData from "../../common/json/qu";
import bollSearch from "../components/doScheduling";
import maskBox from "../components/maskBox";
export default {
  name: "zqtjIndex",
  data() {
    return {
      showBigModel: false,
      showBoll: false,
      detailData: [],
      detailsType: "",
      areaInterval: [],
      headerData: {
        boolTraffic: [
          {
            prop: "totalArea",
            label: "地",
            width: "180"
          },
          {
            prop: "area",
            label: "区",
            width: "180"
          },
          {
            prop: "all",
            label: "总计"
          },
          {
            prop: "speed",
            label: "高速"
          },
          {
            prop: "nation",
            label: "国道"
          },
          {
            prop: "province",
            label: "省道"
          },
          {
            prop: "country",
            label: "乡村"
          },
          {
            prop: "city",
            label: "城市"
          }
        ],
        boolPeople: [
          {
            prop: "totalArea",
            label: "地",
            width: "180"
          },
          {
            prop: "area",
            label: "区",
            width: "180"
          },
          {
            prop: "all",
            label: "总计"
          },
          {
            prop: "speed",
            label: "设备故障救人"
          },
          {
            prop: "nation",
            label: "生产事故救人"
          },
          {
            prop: "province",
            label: "跳楼营救"
          },
          {
            prop: "country",
            label: "水上营救"
          },
          {
            prop: "city",
            label: "其他"
          }
        ],
        boolDanger: [
          {
            prop: "totalArea",
            label: "地",
            width: "180"
          },
          {
            prop: "area",
            label: "区",
            width: "180"
          },
          {
            prop: "all",
            label: "总计"
          },
          {
            prop: "speed",
            label: "爆炸品"
          },
          {
            prop: "nation",
            label: "毒害品"
          },
          {
            prop: "province",
            label: "压缩气体和液化气体"
          },
          {
            prop: "country",
            label: "易燃液体"
          },
          {
            prop: "city",
            label: "易燃固体、自燃物品和遇湿易燃物品",
            width: 300
          },
          {
            prop: "fire",
            label: "腐蚀品"
          },
          {
            prop: "corrosives",
            label: "氧化剂和有机过氧化物"
          },
          {
            prop: "oxygen",
            label: "杂类"
          }
        ],
        boolNatrue: [
          {
            prop: "totalArea",
            label: "地",
            width: "180"
          },
          {
            prop: "area",
            label: "区",
            width: "180"
          },
          {
            prop: "all",
            label: "总计"
          },
          {
            prop: "speed",
            label: "地震"
          },
          {
            prop: "nation",
            label: "水灾"
          },
          {
            prop: "province",
            label: "风灾"
          },
          {
            prop: "country",
            label: "山体滑坡"
          },
          {
            prop: "city",
            label: "旱灾",
            width: 300
          },
          {
            prop: "fire",
            label: "其它"
          }
        ]
      }
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
    var dataName = window.localStorage.getItem("dataName");
    if (dataName == "交通事故") {
      this.detailsType = "boolTraffic";
      this.detailData = quData.trafficeData;
    } else if (dataName == "救人") {
      this.detailsType = "boolPeople";
      this.detailData = quData.savePeploeData;
    } else if (dataName == "危化品事故") {
      this.detailsType = "boolDanger";
      this.detailData = quData.dangerData;
    } else if (dataName == "自然灾害") {
      this.detailsType = "boolNatrue";
      this.detailData = quData.natureData;
    }
  },
  mounted() {
    this.createTable(this.detailData);
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
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        if (columnIndex === 0) {
          return [1, 2];
        } else if (columnIndex === 1) {
          return [0, 0];
        }
      } else {
        if (row.area == "小计" && columnIndex == 0) {
          for (let i = 0; this.areaInterval.length; i++) {
            if (row.totalArea == this.areaInterval[i].name) {
              return {
                rowspan: this.areaInterval[i].index,
                colspan: 1
              };
              break;
            }
          }
        } else if (row.area !== "小计" && columnIndex == 0) {
          return {
            rowspan: 0,
            colspan: 0
          };
        }
      }
    },
    thHeader({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        return "rightHeader";
      } else if (columnIndex === 1) {
        return "leftHeader";
      }
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
    createTable(data) {
      let arr = [];
      data.forEach((item, i) => {
        if (item.area == "小计") {
          arr.push({
            name: item.totalArea,
            index: i
          });
        }
      });
      this.areaInterval = [];

      arr.push({
        index: data.length
      });
      for (let i = arr.length - 1; i > 0; i--) {
        this.areaInterval.push({
          name: arr[i - 1].name,
          index: arr[i].index - arr[i - 1].index
        });
      }
      this.areaInterval.reverse();
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
    overflow: auto;
    .el-table--border::after,
    .el-table--group::after,
    .el-table::before {
      background-color: #006d94;
    }
    .el-table,
    .el-table__expanded-cell,
    .el-table th,
    .el-table tr {
      background-color: transparent !important;
    }
    .el-table--border,
    .el-table--group {
      border-color: #006d94;
    }
    td {
      border-color: #006d94;
    }
    .el-table__header-wrapper {
      .el-table__header {
        font-size: 24px;

        height: 64px;
        line-height: 64px;
        tr {
          color: #ffffff !important;
        }
        th {
          padding: 0px !important;
          border-color: #006d94;
          background: url(../../common/images/title_bg.png) no-repeat center
            center;
          background-size: 100% 100%;
        }
      }
    }
    .el-table__body {
      .el-table__row {
        height: 64px;
        line-height: 64px;
        font-size: 48px !important;
        color: #ffffff !important;
        text-align: center;
        td {
          font-family: ROME;
          background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          border-color: #006d94;
          border-top: none;
        }
        td:first-of-type,
        .el-table_1_column_2,
        .el-table_1_column_1 {
          color: #ffffff;
          font-size: 24px;
          background: none;
          -webkit-text-fill-color: #ffffff;
        }
      }
    }
    .rightHeader {
      text-align: right;
      border-right: 0px !important;
      // padding: 0;
      .cell {
        padding-right: 0;
      }
    }
    .leftHeader {
      text-align: left;
      .cell {
        padding-left: 0;
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
  border: none !important;
  padding: 0 !important;
  position: absolute;
  // top: 130px;
  right: 0px;
}
.header {
  width: 100%;
  height: 110px;
  padding: 0px 40px;
  padding-left: 0px;
  box-sizing: border-box;
  position: relative;
  top: 40px;
  .header_left {
    float: left;
  }
  .header_right {
    float: right;
    position: absolute;
    right: 40px;
    top: 30px;
    .detailButton {
      margin-right: 40px;
    }
    .buttonPos {
      width: 150px;
      height: 45px;
      background: transparent;
      border: none;
      padding: 0;
    }
  }
}
</style>