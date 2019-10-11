<template>
  <div id="zqtjIndex">
    <com-header></com-header>
    <el-row>
      <el-col class="header_mb">
        <back-home></back-home>
      </el-col>
    </el-row>
    <comOut></comOut>
    <div class="detailContent">
      <div class="tableBox">
        <table class="titleTable" border="1">
          <thead>
            <tr class="trTitle titleWidth">
              <td colspan="2">地区</td>
              <td>总计</td>
              <td>高速</td>
              <td>国道</td>
              <td>省道</td>
              <td>乡村</td>
              <td>城市</td>
            </tr>
          </thead>
          <tbody ref="tbodyBox"></tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";
import comOut from "@/zqtjIndex/components/comOut";
export default {
  name: "zqtjIndex",
  data() {
    return {
      localPage: "",
      detailData: {
        title: '2019年全省合计',
        aggregate: 1132,
        gs: 246,
        gd: 68,
        sd: 117,
        xc: 364,
        cs: 337,
        cityList: [{
          title: '贵阳',
          districtList: [
            {
              title: '小计',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },

          ]
        },{
          title: '南阳',
          districtList: [
            {
              title: '小计',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            },
            {
              title: '南明区',
              aggregate: 1132,
              gs: 246,
              gd: 68,
              sd: 117,
              xc: 364,
              cs: 337,
            }
          ]
        }
        ]
      }
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
    this.createTable("tbodyBox", this.detailData);
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
      var tableContent = `<tr class='titleWidth'><td colspan="2">${data.title}</td>
      <td class='trColor'>${data.aggregate}</td>
      <td class='trColor'>${data.gs}</td>
      <td class='trColor'>${data.gd}</td>
      <td class='trColor'>${data.sd}</td>
      <td class='trColor'>${data.xc}</td>
      <td class='trColor'>${data.cs}</td></tr>`;
      data.cityList.forEach((item, i) => {
        // tableContent+=`<tr><td rowspan=${item.districtList.length?item.districtList.length:'1'}>${item.title}</td>`
        item.districtList.forEach((disItem, k) => {
          tableContent += `<tr>`;
          if (k==0){
            tableContent += `<td style='width:calc(188px / 14);' rowspan=${item.districtList.length?item.districtList.length:'1'}>${item.title}</td>`;
          }
          tableContent += `<td style='width:calc(188px / 14);'>${disItem.title}</td>
          <td class='trColor'>${disItem.aggregate}</td>
          <td class='trColor'>${disItem.gs}</td>
          <td class='trColor'>${disItem.gd}</td>
          <td class='trColor'>${disItem.sd}</td>
          <td class='trColor'>${disItem.xc}</td>
          <td class='trColor'>${disItem.cs}</td></tr>`
        })
      });
      table.innerHTML = tableContent;
    },
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
  .detailContent {
    width: 100%;
    padding: 30px 20px;
    .tableBox {
      width: 100%;
      height: 850px;
      overflow-y: auto;
    }
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
        font-family: numberFont;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 24px;
        height: 64px;
      }
      tbody {
          width: 100%;
      }
      .trTitle {
        background-image: url(../../common/images/titleBg.png);
      }
      .titleWidth td{
        width:calc(100% / 7);
      }
      .trColor{
        font-size: 48px!important;
        background-image: -webkit-linear-gradient(90deg, #00ff1d 0%, #00fff5 100%);
	      -webkit-background-clip: text;
	      -webkit-text-fill-color: transparent;
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