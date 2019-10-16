<template>
  <div id="zqtjIndex">
    <com-header></com-header>
    <el-row>
      <el-col class="header_mb">
        <back-home></back-home>
      </el-col>
    </el-row>
    <comOut></comOut>
    <div class="zqtjContent">
      <div class="zqtjModule">
        <div class="zqtjtop">
          <div class="table-title">
            <i class="title-i"></i>
            <label>火灾扑救</label>
          </div>
          <div class="tableBox">
            <table ref="table1" border="1"></table>
          </div>
        </div>
        <div class="zqtjbottom">
          <div id="pieOne1" ref="pieOne1"></div>
        </div>
      </div>
      <div class="zqtjModule">
        <div class="zqtjtop">
          <div class="table-title">
            <i class="title-i"></i>
            <label>抢险救援</label>
          </div>
          <div class="tableBox">
            <table ref="table2" border="1"></table>
          </div>
        </div>
        <div class="zqtjbottom">
          <div id="pieOne2" ref="pieOne2"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";
import comOut from "@/zqtjIndex/components/comOut";
import echarts from "echarts";
export default {
  name: "zqtjIndex",
  data() {
    return {
      localPage: "",
      hzpjList1: [
        {
          title: "商城市场",
          count: 608
        },
        {
          title: "饭店娱乐",
          count: 891
        },
        {
          title: "娱乐场所",
          count: 1075
        },
        {
          title: "办公场所",
          count: 643
        },
        {
          title: "体育场馆",
          count: 546
        },
        {
          title: "住宅场馆",
          count: 971
        },
        {
          title: "学校医院",
          count: 605
        },
        {
          title: "高层建筑",
          count: 713
        }
      ],
      hzpjList2: [
        {
          title: "交通事故",
          count: 1132
        },
        {
          title: "危化品事故",
          count: 200
        },
        {
          title: "建、构筑物事故",
          count: 60
        },
        {
          title: "自然灾害",
          count: 342
        },
        {
          title: "突发事件",
          count: 8
        },
        {
          title: "救人",
          count: 3086
        },
        {
          title: "基础设施（备）事故",
          count: 387
        },
        {
          title: "其他",
          count: 890
        }
      ]
    };
  },
  components: {
    comHeader,
    backHome,
    comOut
  },
  created() {
    this.localInfo_gd();
  },
  mounted() {
    this.createTable("table1", this.hzpjList1);
    this.createTable("table2", this.hzpjList2);
    this.pieData("pieOne1", this.hzpjList1);
    this.pieData("pieOne2", this.hzpjList2);
  },
  methods: {
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

    // 创建table内容
    createTable(ref, data) {
      let table = this.$refs[ref];
      var tableContent = "";
      data.forEach((item, i) => {
        if (i % 4 == 0) {
          tableContent += `<tr class="trTitle">
                            <td title=${item.title}>${item.title}</td>
                            <td title=${data[i + 3] ? data[i + 1].title : ""}>${
            data[i + 1] ? data[i + 1].title : ""
          }</td>
                            <td title=${data[i + 3] ? data[i + 2].title : ""}>${
            data[i + 2] ? data[i + 2].title : ""
          }</td>
                            <td title=${data[i + 3] ? data[i + 3].title : ""}>${
            data[i + 3] ? data[i + 3].title : ""
          }</td>
                        </tr>
                        <tr class="trCount">
                            <td title=${item.title}>${item.count}</td>
                            <td title=${data[i + 1] ? data[i + 1].title : ""}>${
            data[i + 1] ? data[i + 1].count : ""
          }</td>
                            <td title=${data[i + 2] ? data[i + 2].title : ""}>${
            data[i + 2] ? data[i + 2].count : ""
          }</td>
                            <td title=${data[i + 3] ? data[i + 3].title : ""}>${
            data[i + 3] ? data[i + 3].count : ""
          }</td>
                        </tr>`;
        }
      });
      let gradeNum = Math.ceil(data.length / 4);
      if (gradeNum < 3 && !(gradeNum == null)) {
        for (let index = 0; index < 3 - gradeNum; index++) {
          tableContent += `<tr class="trTitle"><td></td><td></td><td></td><td></td></tr>
                    <tr class="trCount"><td></td><td></td><td></td><td></td></tr>`;
        }
      }
      table.innerHTML = tableContent;
      let trList = document.getElementsByTagName("td");
      for (let index = 0; index < trList.length; index++) {
        trList[index].onclick = function(e) {
          var jsonData = JSON.stringify([
            { link: "calledAna.html", name: e.target.title }
          ]);
          window.localStorage.setItem("linkPageObj", jsonData);
          window.localStorage.setItem("dataName", e.target.title);
          if (e.target.title == "交通事故") {
            window.location.href = `calledAna.html`;
          }
          if (e.target.title == "救人") {
            window.location.href = `calledAna.html`;
          }
          if (e.target.title == "危化品事故") {
            window.location.href = `calledAna.html`;
          }
        };
      }
    },
    // echarts
    pieData(val, hzpjList) {
      let pieOne = this.$refs[val];
      let keyUnitChart = echarts.init(pieOne);
      keyUnitChart.clear();
      let option;
      let _this = this;
      var pieData = hzpjList.map(item => {
        return {
          name: item.title,
          value: item.count
        };
      });
      option = {
        color: [
          "#45FFAC",
          "#00FFFF",
          "#0096FF",
          "#7ECEF4",
          "#448ACA",
          "rgba(250,250,250,0.3)"
        ],
        grid: {
          top: 0,
          bottom: 0
        },
        legend: {
          orient: "horizontal",
          bottom: 0,
          itemWidth: 6,
          itemHeight: 6,
          itempGap: 0,

          formatter: name => {
            let data = pieData;
            let total = 0;
            let target;
            for (let i = 0, l = data.length; i < l; i++) {
              total += data[i].value;
              if (data[i].name == name) {
                target = data[i].value;
              }
            }
            name = name.length > 5 ? name.substr(0, 4) + "..." : name;
            let arr = ["{a|" + name + "}"];
            return arr.join("\n");
          },
          textStyle: {
            color: "#fff",
            rich: {
              a: {
                lineHeight: 30,
                fontSize: 18,
                color: function() {}
              }
            }
          },
          icon: "roundRect",
          data: pieData
        },
        series: [
          // 主要展示层的
          {
            radius: ["55%", "63%"],
            center: ["50%", "40%"],
            type: "pie",
            itemStyle: {
              shadowBlur: 30,
              shadowColor: "#00ccff"
            },
            label: {
              normal: {
                show: false,
                formatter: "{c}%",
                textStyle: {
                  fontSize: 18
                },
                position: "outside"
              },
              emphasis: {
                show: true,
                formatter: function(params) {
                  // console.log(params.data, "params");
                  return params.data.name + "\n" + params.data.value;
                }
              }
            },
            labelLine: {
              normal: {
                show: true,
                length: 20,
                length2: 25
              },
              emphasis: {
                show: true
              }
            },
            name: "民警训练总量",
            data: pieData
          },
          // 边框的设置
          {
            radius: ["48%", "49%"],
            center: ["50%", "40%"],
            type: "pie",
            label: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            labelLine: {
              normal: {
                show: false
              },
              emphasis: {
                show: false
              }
            },
            animation: false,
            tooltip: {
              show: true,
              formatter: function(params) {}
            },
            data: [
              {
                value: 1,
                itemStyle: {
                  borderWidth: 1,
                  color: "#00ccff"
                }
              }
            ]
          },
          {
            name: "外边框",
            type: "pie",
            clockWise: false, //顺时加载
            hoverAnimation: false, //鼠标移入变大
            center: ["50%", "40%"],
            radius: ["70%", "69%"],
            label: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 9,
                name: "",
                itemStyle: {
                  normal: {
                    borderWidth: 1,
                    borderColor: "#00ccff"
                  }
                }
              }
            ]
          }
        ]
      };

      keyUnitChart.setOption(option);
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
  .zqtjContent {
    width: 100%;
    padding: 30px 20px;
    display: flex;
    justify-content: space-between;
    .zqtjModule {
      flex: 1;
      margin: 0 20px;
      .zqtjtop {
        margin-bottom: 10px;
        .tableBox {
          margin-top: 10px;
          width: 100%;
          height: 337px;
          overflow-y: auto;
          table {
            word-break: break-all;
            border-collapse: collapse;
            width: 100%;
            text-align: center;
            tr,
            td {
              border: 1px solid #006d94;
            }
            td {
              width: 25%;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              cursor: pointer;
            }
          }
          .trTitle {
            font-size: 24px;
            height: 44px;
            background-image: url(../../common/images/titleBg.png);
          }
          .trCount {
            font-size: 48px;
            height: 68px;
            font-family: numberFont;
            td {
              background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
        }
        .title-i {
          width: 5px;
          height: 24px;
          background: linear-gradient(to right, #00ff1e, #00ffd5);
          display: inline-block;
          vertical-align: middle;
          margin-right: 10px;
        }
        .table-title {
          color: #ffff;
          background-image: -webkit-gradient(
            linear,
            0 0,
            0 bottom,
            from(#00d9df),
            to(#00f697)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-size: 24px;
          font-weight: bold;
        }
      }
      .zqtjbottom {
        background-image: url(../../common/images/echartBg.png);
        background-size: 100% 100%;
        height: 436px;
        width: 100%;
        #pieOne1,
        #pieOne2 {
          width: 100%;
          height: calc(100% - 10px);
        }
      }
    }
  }
}
@media screen and (width: 1920px) {
  html {
    overflow-x: hidden !important;
  }
}
</style>