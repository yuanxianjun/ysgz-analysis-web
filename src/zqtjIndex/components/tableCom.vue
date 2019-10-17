<template>
  <el-table :data="mockData" style="width: 100%" height="790">
    <template v-if="boolTraffic">
      <el-table-column prop="area" label="地区" width="450"></el-table-column>
      <el-table-column prop="all" label="总计"></el-table-column>
      <el-table-column prop="speed" label="高速"></el-table-column>
      <el-table-column prop="nation" label="国道"></el-table-column>
      <el-table-column prop="province" label="省道"></el-table-column>
      <el-table-column prop="country" label="乡村"></el-table-column>
      <el-table-column prop="city" label="城市"></el-table-column>
    </template>
    <template v-else-if="boolPeople">
      <el-table-column prop="area" label="地区" width="450"></el-table-column>
      <el-table-column prop="all" label="总计"></el-table-column>
      <el-table-column prop="speed" label="设备故障救人"></el-table-column>
      <el-table-column prop="nation" label="生产事故救人"></el-table-column>
      <el-table-column prop="province" label="跳楼营救"></el-table-column>
      <el-table-column prop="country" label="水上营救"></el-table-column>
      <el-table-column prop="city" label="其他"></el-table-column>
    </template>
    <template v-else-if="boolDanger">
      <el-table-column prop="area" label="地区" width="200"></el-table-column>
      <el-table-column prop="all" label="总计"></el-table-column>
      <el-table-column prop="speed" label="爆炸品"></el-table-column>
      <el-table-column prop="nation" label="毒害品"></el-table-column>
      <el-table-column prop="province" label="压缩气体和液化气体" width="220"></el-table-column>
      <el-table-column prop="country" label="易燃液体"></el-table-column>
      <el-table-column prop="city" label="易燃固体、自燃物品和遇湿易燃物品" width="400"></el-table-column>
      <el-table-column prop="fire" label="腐蚀品"></el-table-column>
      <el-table-column prop="corrosives" label="氧化剂和有机过氧化物" width="250"></el-table-column>
      <el-table-column prop="oxygen" label="杂类"></el-table-column>
    </template>
    <template v-else-if="boolNature">
      <el-table-column prop="area" label="地区" width="200"></el-table-column>
      <el-table-column prop="all" label="总计"></el-table-column>
      <el-table-column prop="speed" label="地震"></el-table-column>
      <el-table-column prop="nation" label="水灾"></el-table-column>
      <el-table-column prop="province" label="风灾"></el-table-column>
      <el-table-column prop="country" label="山体滑坡"></el-table-column>
      <el-table-column prop="city" label="旱灾"></el-table-column>
      <el-table-column prop="fire" label="其它"></el-table-column>
    </template>
  </el-table>
</template>
<script>
import allData from "../../common/json/zhidui";
export default {
  name: "tableCom",
  data() {
    return {
      boolTraffic: false,
      boolPeople: false,
      boolNature: false,
      boolDanger: false,
      mockData: []
    };
  },
  created() {
    var dataName = window.localStorage.getItem("dataName");
    if (dataName == "交通事故") {
      this.boolTraffic = true;
      this.boolPeople = false;
      this.boolDanger = false;
      this.mockData = allData.trafficData;
    } else if (dataName == "救人") {
      this.boolPeople = true;
      this.boolTraffic = false;
      this.boolDanger = false;
      this.mockData = allData.savePeploeData;
    } else if (dataName == "危化品事故") {
      this.boolPeople = false;
      this.boolTraffic = false;
      this.boolDanger = true;
      this.mockData = allData.dangerData;
    } else if (dataName == "自然灾害") {
      this.boolPeople = false;
      this.boolTraffic = false;
      this.boolDanger = false;
      this.boolNature = true;
      this.mockData = allData.naturalData;
    }
  },
  methods: {}
};
</script>
<style lang="scss">
.el-table {
  overflow-y: auto;
  overflow-x: hidden;
}
.el-table__header-wrapper {
  // border:1px solid #006d94;
  .el-table__header {
    font-size: 24px;
    color: #ffffff;
    height: 64px;
    line-height: 64px;
    th {
      border: 1px solid #006d94;
      background: url(../../common/images/title_bg.png) no-repeat center center;
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
      border: 1px solid #006d94;
      border-top: none;
    }
    td:first-of-type {
      color: #ffffff;
      font-size: 24px;
      background: none;
      -webkit-text-fill-color: #ffffff;
    }
    .el-table_1_column_1 {
      color: #ffffff;
      font-size: 24px;
      background: none;
      -webkit-text-fill-color: #ffffff;
    }
  }
}
</style>
