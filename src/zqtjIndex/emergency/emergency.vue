<template>
  <div id="calledAna">
    <com-header></com-header>
    <backHome></backHome>
    <div class="content-wrapper">
      <div class="header">
        <div class="header_left">
          <!-- 退出按钮  -->
          <comOut></comOut>
        </div>
        <div class="header_middle">
          <div class="dateDiv">
            <el-date-picker
              v-model="dateValue"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              class="hy_date_picker"
              unlink-panels
              :clearable="false"
              @change="changeDate"
              value-format="yyyy-MM-dd"
            ></el-date-picker>
            <div class="timer">
              <img src="./assets/img/time.png" alt />
            </div>
          </div>

          <div class="orgDiv">
            <el-cascader
              ref="cascaderRef"
              popper-class="hy_cascader_custom"
              expand-trigger="click"
              :options="orgTreeData"
              :props="slectProps"
              :show-all-levels="false"
              v-model="selectedOptions"
              filterable
              clearable
              change-on-select
              @change="handleChange"
            ></el-cascader>
          </div>
        </div>
        <div class="header_right">
          <el-button class="customBtn" @click="rescue_get">查询</el-button>
          <el-button class="customBtn" @click="handleCancel">取消</el-button>
        </div>
      </div>
      <div class="tableDiv">
        <div class="table-title">
          <i class="title-i"></i>
          <label>分析列表(单位:起)</label>
        </div>
        <div class="tableBox" v-loading="bool" element-loading-background="rgba(0, 0, 0, 0.6)">
          <el-row class="rowDiv" v-if="!bool">
            <el-col :span="4" class="tableCol" v-for="(item,index) in limitData(0,6)" :key="index">
              <template>
                <div @click="toNext(item.name,item.id)">
                  <div class="title">{{item.name}}</div>
                  <div class="number">{{item.value}}</div>
                </div>
              </template>
            </el-col>
          </el-row>
          <el-row class="rowDiv" v-if="!bool">
            <el-col :span="4" class="tableCol" v-for="(item,index) in limitData(6,12)" :key="index">
              <template>
                <div @click="toNext(item.name,item.id)">
                  <div class="title">{{item.name}}</div>
                  <div class="number">{{item.value}}</div>
                </div>
              </template>
            </el-col>
          </el-row>
          <el-row class="rowDiv" v-if="!bool">
            <el-col
              :span="4"
              class="tableCol"
              v-for="(item,index) in limitData(12,18)"
              :key="index"
            >
              <template>
                <div @click="toNext(item.name,item.id)">
                  <div class="title">{{item.name}}</div>
                  <div class="number">{{item.value}}</div>
                </div>
              </template>
            </el-col>
          </el-row>
        </div>
      </div>
      <div class="chart" v-loading="bool" element-loading-background="rgba(0, 0, 0, 0.6)">
        <div class="rescueChartCon">
          <statistice-com v-if="!bool" :statisData="analysisList"></statistice-com>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";
import comOut from "@/zqtjIndex/components/comOut";
import { rescueAnalysis, orgTreeUrl } from "../requestUrl";
import statisticeCom from "./components/statisticeCom.vue";
// import func from "d:/commandrescue/vue-temp/vue-editor-bridge";
export default {
  name: "emergency",
  components: {
    comHeader,
    backHome,
    comOut,
    statisticeCom
  },
  data() {
    return {
      bool: true,
      userInfo: JSON.parse(window.localStorage.getItem("userInfo")),
      orgTreeId: "",
      dateValue: [],
      orgTreeData: [],
      slectProps: {
        label: "orgName",
        value: ["orgTreeId"],
        children: "orgTreeList"
      },
      selectedOptions: [],
      nameList: [],
      analysisList: [
        { name: "化学危险品事故", id: "020100000000", value: 0 },
        { name: "交通事故", id: "020300000000", value: 0 },
        { name: "地震及次生灾害", id: "020401000000", value: 0 },
        { name: "建筑物坍塌", id: "020200000000", value: 0 },
        { name: "重大安全生产事故", id: "020505000000", value: 0 },
        { name: "空难", id: "020508000000", value: 0 },
        { name: "爆炸及恐怖事件", id: "020509000000", value: 0 },
        { name: "群众遇险", id: "020600000000", value: 0 },
        { name: "水旱灾害", id: "水旱灾害", value: 0 },
        { name: "气象灾害", id: "020403000000", value: 0 },
        { name: "地质灾害", id: "020404000000", value: 0 },
        { name: "森林火灾", id: "020801000000", value: 0 },
        { name: "草原火灾", id: "020802000000", value: 0 },
        { name: "矿山事故", id: "020803000000", value: 0 },
        { name: "水上事故", id: "020604000000", value: 0 },
        { name: "重大污染事件", id: "020503000000", value: 0 },
        { name: "核与辐射事件", id: "020507000000", value: 0 },
        { name: "公共卫生事件", id: "020504000000", value: 0 }
      ]
    };
  },
  created() {
    this.orgTreeId = this.userInfo.orgTree;
    this.orgTree_gd(this.orgTreeId);
    this.dateDetail();
  },
  mounted() {
    // this.rescue_get();
  },

  methods: {
    toNext(name, id) {
      var jsonData = JSON.stringify([
        { link: "emergency.html", name: "应急救援数据" },
        { link: "calledAna.html", name: name }
      ]);
      window.localStorage.setItem("linkPageObj", jsonData);
      var dataJson = {
        dataName: name,
        dataId: id,
        dateValue: this.dateValue,
        orgTreeId: this.orgTreeId
      };
      window.localStorage.setItem("dataJson", JSON.stringify(dataJson));
      window.location.href = `calledAna.html`;
      // if (name == "交通事故") {
      //   window.location.href = `calledAna.html`;
      // }
      // if (name == "群众遇险") {
      //   window.location.href = `calledAna.html`;
      // }
      // if (name == "化学危险品事故") {
      //   window.location.href = `calledAna.html`;
      // }
      // if (name == "水旱灾害") {
      //   window.location.href = `calledAna.html`;
      // }
      // if (name == "公共卫生事件") {
      //   window.location.href = `calledAna.html`;
      // }
    },
    limitData(index, limit) {
      var data = this.analysisList;
      data = data.slice(index, limit);
      return data;
    },
    handleChange() {
      // console.log(this.selectedOptions);
    },
    orgTree_gd(id) {
      this.axios({
        method: "get",
        url: orgTreeUrl + id
      }).then(res => {
        this.orgTreeData = [];
        this.orgTreeData.push(res.data.result);

        this.selectedOptions[0] = this.orgTreeData[0].orgTreeId;
        this.rescue_get();
      });
    },
    // 取消选中条件
    handleCancel() {
      this.dateDetail();
      this.selectedOptions = [];
    },
    // 处理日期
    dateDetail() {
      var curTimeYear = new Date().getFullYear(),
        curTimeMonth =
          new Date().getMonth() + 1 < 10
            ? "0" + (new Date().getMonth() + 1)
            : new Date().getMonth() + 1,
        curTimeDay =
          new Date().getDate() < 10
            ? "0" + new Date().getDate()
            : new Date().getDate();
      var nowDay = curTimeYear + "-" + curTimeMonth + "-" + curTimeDay,
        startDay = curTimeYear + "-" + "01" + "-" + "01";
      this.dateValue = [startDay, nowDay];
    },
    changeDate() {
      // console.log(this.dateValue);
    },
    // 分析列表
    rescue_get() {
      var index = this.selectedOptions.length - 1;
      this.orgTreeId = this.selectedOptions[index];
      var data = {
        startDate: this.dateValue[0],
        endDate: this.dateValue[1],
        orgTreeId: this.selectedOptions[index]
      };
      this.bool = true;
      this.axios({
        method: "post",
        url: rescueAnalysis,
        data
      }).then(res => {
        var data = res.data.result;
        // this.analysisList = Object.assign({}, this.analysisList);
        this.analysisList = [
          { name: "化学危险品事故", id: "020100000000", value: 0 },
          { name: "交通事故", id: "020300000000", value: 0 },
          { name: "地震及次生灾害", id: "020401000000", value: 0 },
          { name: "建筑物坍塌", id: "020200000000", value: 0 },
          { name: "重大安全生产事故", id: "020505000000", value: 0 },
          { name: "空难", id: "020508000000", value: 0 },
          { name: "爆炸及恐怖事件", id: "020509000000", value: 0 },
          { name: "群众遇险", id: "020600000000", value: 0 },
          { name: "水旱灾害", id: "020402000000", value: 0 },
          { name: "气象灾害", id: "020403000000", value: 0 },
          { name: "地质灾害", id: "020404000000", value: 0 },
          { name: "森林火灾", id: "020801000000", value: 0 },
          { name: "草原火灾", id: "020802000000", value: 0 },
          { name: "矿山事故", id: "020803000000", value: 0 },
          { name: "水上事故", id: "020604000000", value: 0 },
          { name: "重大污染事件", id: "020503000000", value: 0 },
          { name: "核与辐射事件", id: "020507000000", value: 0 },
          { name: "公共卫生事件", id: "020504000000", value: 0 }
        ];
        var floodsNum = 0;
        data.forEach(ele => {
          for (let i = 0; i < 18; i++) {
            // if (ele.name == "020402000000") {
            //   floodsNum += ele.num;
            // }
            if (ele.name == this.analysisList[i].id) {
              this.analysisList[i].value = ele.num;
            }
          }
        });
        // this.analysisList[8].value = floodsNum;
        this.bool = false;
      });
    }
  },
  destroyed() {}
};
</script>
<style lang="scss" >
.el-input__inner {
  line-height: 0 !important;
}
.el-date-range-picker__header {
  color: #fff;
}
.hy_date_picker input::-webkit-input-placeholder {
  color: #00ccff !important;
  font-size: 24px;
  line-height: 30px;
}
.el-range-separator {
  color: #00ccff !important;
  font-size: 20px;
  line-height: 30px;
}
.hy_date_picker {
  font-family: "微软雅黑" !important;
  // background-color: #0a2d56 !important;
  background-color: transparent !important;
  color: white !important;
  // border: 1px solid #00b8ff !important;
  border: 1px solid transparent !important;
}
.el-date-editor .el-range__close-icon {
  font-size: 14px;
  color: #00ccff !important;
  width: 25px;
  display: inline-block;
  float: right;
  line-height: 30px;
}
.el-date-editor .el-range__icon {
  // font-size: 14px;
  // margin-left: -5px;
  // color: #00ccff !important;
  // float: left;
  // line-height: 30px;
  display: none;
}
.el-picker-panel {
  background-color: #041c3f !important;
  border: 1px solid #00b8ff !important;
  border: none !important;
  color: #fff;
  .el-date-range-picker .el-picker-panel__content {
    color: #fff;
  }
  .available {
    color: #fff;
  }
}
.el-year-table td .cell {
  width: 48px;
  height: 32px;
  display: block;
  line-height: 32px;
  color: #00ccff !important;
}
.el-month-table td .cell {
  width: 60px;
  height: 36px;
  display: block;
  line-height: 36px;
  color: #00ccff !important;
  margin: 0 auto;
  border-radius: 18px;
}
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
  background-color: #00ccff !important;
}
.el-date-range-picker__content.is-left {
  border-right: 1px solid #00b8ff !important;
}
.el-picker-panel__icon-btn {
  color: #fff !important;
}
.el-date-table th {
  color: #fff !important;
  border-bottom: solid 1px #00ccff !important;
}
/* 级联选择器的样式的样式 */
.hy_cascader_custom .el-cascader-menu .el-popper {
  border: none !important;
}
.hy_cascader_custom {
  border: none !important;
  font-family: "微软雅黑";
}
.el-cascader-menus {
  background: transparent !important;
}
.hy_cascader_custom .el-cascader-menu {
  display: inline-block;
  vertical-align: top;
  color: #fff;
  border-right: solid 1px #021739;
  background-color: #0a2d56;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  margin: 0;
  padding: 6px 0;
  min-width: 230px;
}
.el-cascader-node.is-selectable.in-active-path {
  color: #ffffff !important;
  background: rgba(0, 204, 255, 0.5);
}

.el-cascader-node:not(.is-disabled):hover {
  background: #00ccff !important;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
  background-color: rgba(0, 204, 255, 0.3) !important;
}
.hy_cascader_custom .el-cascader-menu__item:hover,
.el-cascader-menu__item:focus:not(:active) {
  background-color: rgba(0, 204, 255, 0.3) !important;
}
.hy_cascader_custom .el-cascader-menu__item {
  font-size: 18px !important;
  padding: 8px 20px;
  position: relative;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #00ccff;
  height: 34px;
  line-height: 1.5;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
}
/* 右箭头 */
.el-cascader-menu__item--extensible:after {
  font-family: "element-icons";
  content: "\E6E0";
  font-size: 18px !important;
  color: #bfcbd9;
  position: absolute;
  right: 15px;
}

.hy_cascader_custom .el-cascader-menu__item:hover,
.el-cascader-menu__item:focus:not(:active) {
  background-color: rgba(0, 204, 255, 0.3) !important;
}

.el-cascader-menu__item:hover,
.el-cascader-menu__item:focus:not(:active) {
  background-color: rgba(0, 204, 255, 0.3) !important;
}

.hy_cascader_custom .el-cascader__label {
  background: linear-gradient(to bottom, #02f4fb, #0f84d4);
  -webkit-background-clip: text;
  color: #fff;
  padding-left: 30px;
}

.el-cascader-menu__item--extensible:after {
  color: #00ccff !important;
}

.hy_cascader_custom .el-cascader-menu__item:hover,
.el-cascader-menu__item:focus:not(:active) {
  background-color: rgba(0, 204, 255, 0.2) !important;
}
.hy_cascader_custom .el-cascader-menu__item.is-active {
  color: #ffff !important;
}
.el-cascader-menu__item.is-disabled {
  color: #c0c4cc;
  background-color: none;
  cursor: not-allowed;
}
.hy_cascader_custom .el-cascader-menu__item.is-disabled:hover {
  background-color: rgba(0, 204, 255, 0.2) !important;
}

.el-cascader__label {
  background: linear-gradient(to bottom, #02f4fb, #0f84d4) !important;
  -webkit-background-clip: text !important;
  color: #fff !important;
  padding-left: 30px !important;
}
.el-cascader .el-input__suffix {
  position: absolute;
  height: 100%;
  right: 10px !important;
  top: 0px;
  text-align: center;
  color: #00ccff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  pointer-events: none;
}
</style>