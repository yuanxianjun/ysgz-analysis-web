<template>
  <div class="myTable" v-loading="loadTable" element-loading-background="rgba(0, 0, 0, 0.6)">
    <el-table
      highlight-current-row
      id="jtTable"
      border
      :data="mockData"
      style="width: 100%;"
      height="770"
      v-if="!loadTable"
    >
      <el-table-column
        v-for="(item,i) in headerData"
        :key="i"
        :label="item.name"
        :prop="item.code"
        align="center"
      ></el-table-column>
      <template v-if="boolTraffic">
        <el-table-column align="center" prop="area" label="地区" width="250"></el-table-column>
        <el-table-column align="center" prop="all" label="总计"></el-table-column>
        <el-table-column align="center" prop="speed" label="高速"></el-table-column>
        <el-table-column align="center" prop="nation" label="国道"></el-table-column>
        <el-table-column align="center" prop="province" label="省道"></el-table-column>
        <el-table-column align="center" prop="country" label="乡村"></el-table-column>
        <el-table-column align="center" prop="city" label="城市"></el-table-column>
      </template>
      <template v-else-if="boolPeople">
        <el-table-column align="center" prop="area" label="地区" width="300"></el-table-column>
        <el-table-column align="center" prop="all" label="总计"></el-table-column>
        <el-table-column align="center" prop="speed" label="设备故障救人"></el-table-column>
        <el-table-column align="center" prop="nation" label="生产事故救人"></el-table-column>
        <el-table-column align="center" prop="province" label="跳楼营救"></el-table-column>
        <el-table-column align="center" prop="country" label="水上营救"></el-table-column>
        <el-table-column align="center" prop="city" label="其他"></el-table-column>
      </template>
      <template v-else-if="boolDanger">
        <el-table-column align="center" prop="area" label="地区" width="200"></el-table-column>
        <el-table-column align="center" prop="all" label="总计"></el-table-column>
        <el-table-column align="center" prop="speed" label="爆炸品"></el-table-column>
        <el-table-column align="center" prop="nation" label="毒害品"></el-table-column>
        <el-table-column align="center" prop="province" label="压缩气体和液化气体" width="250"></el-table-column>
        <el-table-column align="center" prop="country" label="易燃液体"></el-table-column>
        <el-table-column align="center" prop="city" label="易燃固体、自燃物品和遇湿易燃物品" width="300"></el-table-column>
        <el-table-column align="center" prop="fire" label="腐蚀品"></el-table-column>
        <el-table-column align="center" prop="corrosives" label="氧化剂和有机过氧化物" width="270"></el-table-column>
        <el-table-column align="center" prop="oxygen" label="杂类"></el-table-column>
      </template>
      <template v-else-if="boolNature">
        <el-table-column align="center" prop="area" label="地区" width="200"></el-table-column>
        <el-table-column align="center" prop="all" label="总计"></el-table-column>
        <el-table-column align="center" prop="speed" label="地震"></el-table-column>
        <el-table-column align="center" prop="nation" label="水灾"></el-table-column>
        <el-table-column align="center" prop="province" label="风灾"></el-table-column>
        <el-table-column align="center" prop="country" label="山体滑坡"></el-table-column>
        <el-table-column align="center" prop="city" label="旱灾"></el-table-column>
        <el-table-column align="center" prop="fire" label="其它"></el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
import allData from "../../common/json/zhidui";
import { rsa } from "../requestUrl";
export default {
  name: "tableCom",
  data() {
    return {
      loadTable: true,
      boolTraffic: false,
      boolPeople: false,
      boolNature: false,
      boolDanger: false,
      mockData: [],
      headerData: [],
      dataJson: JSON.parse(window.localStorage.getItem("dataJson"))
    };
  },
  created() {
    this.getData();
    // this.disData();
  },
  mounted() {},
  methods: {
    getData() {
      var data = {
        endDate: this.dataJson.dateValue[1],
        startDate: this.dataJson.dateValue[0],
        typeId: this.dataJson.dataId,
        orgTreeId: this.dataJson.orgTreeId
      };
      this.axios({
        method: "post",
        url: rsa,
        data
      }).then(res => {
        this.loadTable = false;
        var resTitleData = res.data.result.titleList;
        this.headerData = resTitleData;
        this.mockData = res.data.result.mapList;
      });
    },
    disData() {
      if (this.dataJson.dataName == "交通事故") {
        this.boolTraffic = true;
        this.boolPeople = false;
        this.boolDanger = false;
        this.mockData = allData.trafficData;
      } else if (this.dataJson.dataName == "群众遇险") {
        this.boolPeople = true;
        this.boolTraffic = false;
        this.boolDanger = false;
        this.mockData = allData.savePeploeData;
      } else if (this.dataJson.dataName == "化学危险品事故") {
        this.boolPeople = false;
        this.boolTraffic = false;
        this.boolDanger = true;
        this.mockData = allData.dangerData;
      } else if (this.dataJson.dataName == "水旱灾害") {
        this.boolPeople = false;
        this.boolTraffic = false;
        this.boolDanger = false;
        this.boolNature = true;
        this.mockData = allData.naturalData;
      }
    }
  }
};
</script>
<style lang="scss">
.myTable {
  width: 100%;
  height: 100%;
  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    background-color: #006d94 !important;
  }
  .el-table,
  .el-table__expanded-cell,
  .el-table th,
  .el-table tr {
    background-color: transparent !important;
  }
  .el-table--border,
  .el-table--group {
    border-color: #006d94 !important;
  }
  td {
    border-color: #006d94 !important;
  }
  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: transparent !important;
  }
  .el-table__header-wrapper {
    .el-table__header {
      font-size: 24px;

      height: 64px;
      line-height: 64px;
      tr {
        color: #ffffff !important;
        border-color: #006d94 !important;
      }
      th {
        padding: 0px !important;
        border-color: #006d94 !important;
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
      .el-table_1_column_1 {
        color: #ffffff;
        font-size: 24px;
        background: none;
        -webkit-text-fill-color: #ffffff;
      }
    }
  }
}
</style>
