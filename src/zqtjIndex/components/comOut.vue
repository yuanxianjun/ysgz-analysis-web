<template>
  <div class="mainOut">
    <div class="name_div">
      <div class="circle_div">
        <div class="outHead">
          <img src="../../common/images/outHead.png" alt />
        </div>
      </div>
      <div class="out_circle"></div>
      <div class="name_con" @click="toPersonInfo">
        <span class="police_name">{{userInfo.userName?userInfo.userName:''}}</span>
        <span class="helleo">{{userInfo.roleName == "管理员" ? " " : (' '+userInfo.roleName + ' ')}}您好</span>
      </div>
      <div class="out_btn" @click="showOutPage = true"></div>
    </div>
    <div class="outPageBox" v-if="showOutPage">
      <div class="outPage">
        <div class="centerDiv">
          <div class="headImg">
            <img class="head_img" src="../../common/images/outHead.png" alt />
          </div>
          <div class="loginName">{{userInfo.userName?userInfo.userName:'黄景瑜'}}</div>
          <div class="btns">
            <div class="confirm" @click="outConfirm">
              <img src="../../common/images/modal_3.png" alt />
            </div>
            <div class="cancel" @click="outCancel">
              <img src="../../common/images/modal_4.png" alt />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "comOut",
  props: {
    msg: String
  },
  data() {
    return {
      userInfo: {
        areaId: "",
        areaName: "",
        cityId: "",
        orgId: "",
        orgName: " ",
        orgRole: "",
        orgTree: "",
        userId: "",
        userName: "",
        roleName: ""
      },
      showOutPage: false,
      showLv3Btn: false,
      orgRole: "",
      flag: true
    };
  },
  created() {
    window.addEventListener("setItem", () => {
      this.userInfo = JSON.parse(localStorage.getItem("userInfo"));
      this.flag = false;
    });
    if (this.flag) {
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) {
        this.userInfo = userInfo;
        this.orgRole = userInfo.orgRole;
      } else {
        // window.location.href = "/ysgzIndex.html";
      }
    }
  },
  mounted() {},
  methods: {
    // 跳转到人员信息界面
    // 人员画像界面
    toPersonInfo() {
      //  00超级管理员 01总队领导 02总队人员 03支队领导 04支队 05大队领导 06大队 07中队领导 08中队 ,
      var userInfo = JSON.parse(localStorage.getItem("userInfo"));
      var userId = userInfo.userId;
      if (userInfo.roleName == "管理员") {
        return;
      }
      if (userId) {
        var paramObj = {
          userId: userId
        };
        window.localStorage.setItem("manParams", JSON.stringify(paramObj));
        window.location.href = "personInfo.html";
      } else {
        this.$message("暂无信息");
      }
    },
    // 退出按钮方法
    outConfirm() {
      this.showOutPage = false;
      sessionStorage.clear();
      localStorage.clear();
      window.location.href = "/";
    },
    outCancel() {
      this.showOutPage = false;
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../common/styles/font.css";
.mainOut {
  width: 354px;
  height: 80px;
  margin-left: 40px;
  position: relative;
  .circleShowLv3 {
    width: 60px;
    height: 70px;
    position: absolute;
    left: 348px;
    top: -25px;
    z-index: 999;
    cursor: pointer;
  }
}
/*登录名称*/
.name_div {
  width: 354px;
  height: 80px;
  background: url("../../common/images/sign.png") no-repeat center right;
  background-size: 77% auto;
  position: relative;
  .circle_div {
    width: 24.8%;
    height: 100%;
    float: left;
    .outHead {
      text-align: center;
    }
    img {
      width: 34px;
      height: 34px;
      margin-top: 20px;
      margin-left: 10px;
    }
  }
  .out_circle {
    width: 102px;
    height: 102px;
    position: absolute;
    left: -2px;
    top: -12px;
    background: url(../../common/images/logo_pie.png) no-repeat center center;
    -webkit-background-size: cover;
    background-size: cover;
    -webkit-animation: myRotate 10s linear infinite;
    animation: myRotate 10s linear infinite;
  }
  .name_con {
    min-width: 60%;
    line-height: 80px;
    float: left;
    .police_name {
      display: inline-block;
      color: #0ab7ff;
      font-size: 22px;
      min-width: 75;
      margin-left: 20px;
    }
    .helleo {
      font-size: 18px;
      color: #fff;
    }
  }
  .name_con:hover {
    cursor: pointer;
  }
  .out_btn {
    position: absolute;
    right: 8%;
    top: 30%;
    width: 30px;
    height: 30px;
    background: url(../../common/images/out.png) no-repeat center center;
    cursor: pointer;
  }
}
.outPageBox {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;
}
// 退出的弹框
.outPage {
  width: 100%;
  height: 100%;
  overflow: hidden;
  opacity: 60%;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  position: relative;
  .centerDiv {
    width: 456px;
    height: 445px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    background-image: url("../../common/images/modal1.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding-top: 65px;
    .headImg {
      width: 180px;
      height: 180px;
      margin: 0 auto;
      background-image: url("../../common/images/modal_2.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      text-align: center;
      padding-top: 55px;
      .header_img {
        width: 80px;
        height: 80px;
      }
      .btns {
        width: 100%;
        height: 80px;
        .confirm {
          width: 200px;
          height: 80px;
          float: left;
          cursor: pointer;
        }
      }
    }
    .loginName {
      height: 50px;
      text-align: center;
      color: #0ff;
      line-height: 40px;
      font-size: 18px;
      font-family: "ROME";
    }
    .btns {
      width: 100%;
      height: 80px;
      & > div {
        width: 200px;
        height: 80px;
        float: left;
      }
      .confirm {
        text-align: right;
        cursor: pointer;
      }

      .cancel {
        text-align: left;
        margin-left: 50px;
        cursor: pointer;
      }
    }
  }
}
</style>
<style>
@-webkit-keyframes myRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@keyframes myRotate {
  0% {
    -webkit-transform: rotate(0deg);
  }
  50% {
    -webkit-transform: rotate(180deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}
</style>
