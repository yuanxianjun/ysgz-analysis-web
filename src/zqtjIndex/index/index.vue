<template>
  <div id="calledAna">
    <com-header></com-header>
    <backHome></backHome>
    <div class="content-wrapper">
      <el-row :gutter="20">
        <el-col :span="6" class="left">
          <div class="header">
            <div class="header_left">
              <!-- 退出按钮  -->
            
            </div>
          </div>
          <div class="fireOne">
            <div class="nav-header">
              <p>火灾扑救</p>
            </div>
            <div class="fireContent bgCon">
              <div class="fireOne_con">
                <p class="fireOne_title">火灾接警</p>
                <p class="fireOne_number">
                  <span class="number">{{fightFire_data.alarm ||0}}</span>
                  <span class="unit">起</span>
                </p>
              </div>
              <div class="fireOne_con">
                <p class="fireOne_title">重大火灾</p>
                <p class="fireOne_number">
                  <span class="number">{{fightFire_data.intensive||0}}</span>
                  <span class="unit">起</span>
                </p>
              </div>
              <div class="fireOne_con">
                <p class="fireOne_title">出动车辆</p>
                <p class="fireOne_number">
                  <span class="number">{{fightFire_data.car ||0}}</span>
                  <span class="unit">辆次</span>
                </p>
              </div>
              <div class="fireOne_con">
                <p class="fireOne_title">出动人员</p>
                <p class="fireOne_number">
                  <span class="number">{{fightFire_data.person ||0}}</span>
                  <span class="unit">人次</span>
                </p>
              </div>
              <div class="fireOne_con">
                <p class="fireOne_title">财产损失</p>
                <p class="fireOne_number">
                  <span class="number">{{fightFire_data.money ||0}}</span>
                  <span class="unit">万元</span>
                </p>
              </div>
              <div class="fireOne_con">
                <p class="fireOne_title">抢救人员</p>
                <p class="fireOne_number">
                  <span class="number">{{fightFire_data.rescue ||0}}</span>
                  <span class="unit">人</span>
                </p>
              </div>
            </div>
          </div>
          <div class="fireChart">
            <div class="nav-header">
              <p>区域火灾情况</p>
            </div>
            <div class="fireChartContent bgCon">
              <annular-com v-if="beginLoad" :userInfo="userInfo"></annular-com>
            </div>
          </div>
        </el-col>
        <el-col
          :span="12"
          class="middle"
          v-loading="loading"
          element-loading-background="rgba(0, 0, 0, 0.8)"
        >
          <el-table
            :data="tableData"
            style="width:100%"
            height="930"
            :row-class-name="tableRowClassName"
          >
            <el-table-column prop="time" label="时间" align="center" width="300"></el-table-column>
            <el-table-column prop="address" label="地点" align="center"></el-table-column>
            <el-table-column prop="fireType" label="类型" width="160"></el-table-column>
            <el-table-column prop="fireRange" label="等级" width="120">
              <template slot-scope="scope">
                <div>{{scope.row.fireRange == "1"?"一级": "2"?"二级":"3"?"三级":"4"?"四级":"5"?"五级":""}}</div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
        <el-col :span="6" class="right">
          <div class="rescueOne">
            <div class="nav-header">
              <p>抢险救援</p>
            </div>
            <div class="rescueOneCon bgCon">
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="rescueOneCon_div">
                    <el-row>
                      <el-col :span="10">
                        <img src="./assets/img/应急救援.png" />
                      </el-col>
                      <el-col :span="14">
                        <div style="display:inline-block;">
                          <p class="rescueOneCon_title gradientFont">应急救援</p>
                          <p>
                            <span class="number">{{rescue_data.alarm ||0}}</span>
                            <span class="unit">起</span>
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="rescueOneCon_div">
                    <el-row>
                      <el-col :span="10">
                        <img src="./assets/img/重大事故.png" />
                      </el-col>
                      <el-col :span="14">
                        <div>
                          <p class="rescueOneCon_title gradientFont">重大事故</p>
                          <p>
                            <span class="number">{{rescue_data.intensive||0}}</span>
                            <span class="unit">起</span>
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="rescueOneCon_div">
                    <el-row>
                      <el-col :span="10">
                        <img src="./assets/img/出动车辆.png" />
                      </el-col>
                      <el-col :span="14">
                        <div style="display:inline-block;">
                          <p class="rescueOneCon_title gradientFont">出动车辆</p>
                          <p>
                            <span class="number">{{rescue_data.car ||0 }}</span>
                            <span class="unit">辆次</span>
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="rescueOneCon_div">
                    <el-row>
                      <el-col :span="10">
                        <img src="./assets/img/出动人员.png" />
                      </el-col>
                      <el-col :span="14">
                        <div>
                          <p class="rescueOneCon_title gradientFont">出动人员</p>
                          <p>
                            <span class="number">{{rescue_data.person ||0}}</span>
                            <span class="unit">人</span>
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
              <el-row :gutter="20">
                <el-col :span="12">
                  <div class="rescueOneCon_div">
                    <el-row>
                      <el-col :span="10">
                        <img src="./assets/img/财产损失.png" />
                      </el-col>
                      <el-col :span="14">
                        <div style="display:inline-block;">
                          <p class="rescueOneCon_title gradientFont">财产损失</p>
                          <p>
                            <span class="number">{{rescue_data.money ||0}}</span>
                            <span class="unit">万元</span>
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
                <el-col :span="12">
                  <div class="rescueOneCon_div">
                    <el-row>
                      <el-col :span="10">
                        <img src="./assets/img/抢救人员.png" />
                      </el-col>
                      <el-col :span="14">
                        <div>
                          <p class="rescueOneCon_title gradientFont">抢救人员</p>
                          <p>
                            <span class="number">{{rescue_data.rescue || 0}}</span>
                            <span class="unit">人</span>
                          </p>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
          <div class="rescueChart">
            <div class="nav-header">
              <p>
                应急救援数据
                <span class="into_icon" @click="toNext"></span>
              </p>
            </div>
            <div class="rescueChartCon bgCon">
              <emergency-com v-if="beginLoad" :userInfo="userInfo"></emergency-com>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
// 引入url文件
import { todayFire, fightFire, rescue } from "../requestUrl";

import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";

import annularCom from "./components/annularCom";
import emergencyCom from "./components/emergencyCom";
export default {
  name: "index",
  components: {
    comHeader,
    backHome,

    annularCom,
    emergencyCom
  },
  data() {
    return {
      beginLoad: false,
      loading: true,
      userInfo: {},
      tableData: [
        // {
        //   time: "324243",
        //   address: "十六点十六分零四撒旦士大夫随风倒",
        //   fireType: "1",
        //   fireRange: "sdflsfslkfdls"
        // }
      ],
      fightFire_data: {
        alarm: 0,
        intensive: 0,
        car: 0,
        person: 0,
        money: 0,
        rescue: 0
      },
      rescue_data: {
        alarm: "",
        intensive: null,
        car: null,
        person: null,
        money: null,
        rescue: null
      }
    };
  },
  created() {
    
    
  },
  mounted() {
    this.localInfo_gd();
    // this.fightFire_get();
    // this.rescue_get();
    // this.tableList();
    // this.setInter();
  },
  methods: {
    // 根据userId 查询
    localInfo_gd() {
      this.axios({
        method: "post",
        url: "/user/userInfo/" 
      }).then(res => {
        if (res.data && res.data.code === "success") {
          var data = res.data.result || {};
          if (data) {
            this.resetSetItem("userInfo", JSON.stringify(data));
            this.userInfo = data;
            this.beginLoad = true;
            this.fightFire_get();
            this.rescue_get();
            this.tableList();
            this.setInter();
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
    // 去下一页
    toNext() {
      window.location.href = "emergency.html";
      var jsonData = JSON.stringify([
        { link: "emergency.html", name: "应急救援数据" }
      ]);
      window.localStorage.setItem("linkPageObj", jsonData);
    },
    // 火灾扑救
    fightFire_get() {
      var params = this.userInfo.orgTree;
      this.axios({
        method: "get",
        url: fightFire + params
      }).then(res => {
        this.fightFire_data = res.data.result;
        // this.loading = false;
      });
    },
    // 抢险救援
    rescue_get() {
      var params = this.userInfo.orgTree;
      this.axios({
        method: "get",
        url: rescue + params
      }).then(res => {
        this.rescue_data = res.data.result;
        // this.loading = false;
      });
    },
    // 启用定时器 function
    setInter() {
      var timer = null,
        timer2 = null;
      var _ = this;
      clearTimeout(timer);
      timer = setTimeout(function() {
        _.tableList();
        clearTimeout(timer2);
        timer2 = setTimeout(function() {
          _.setInter();
        }, 60000);
      }, 60000);
    },
    tableRowClassName({ row, rowIndex }) {
      if (row.intensive) {
        return "warning-row";
      } else if (rowIndex % 2 === 1) {
        return "success-row";
      }
      return "";
    },
    tableList() {
      var params = this.userInfo.orgTree;
      this.axios({
        method: "get",
        url: todayFire + params
      }).then(res => {
        this.tableData = res.data.result;
        this.loading = false;
      });
    }
  },
  destroyed() {}
};
</script>
<style lang="scss" ></style>