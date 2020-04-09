<template>
  <div id="index">
    <div class="top">
      <img src="./assets/img/top.png" />
    </div>
    <div class="middle">
      <div class="ym">
        <img v-show="!boolMonth" src="./assets/img/villiage.png" />
        <img v-show="boolMonth" src="./assets/img/monthData.png" />
        <div class="ymBtn btn" @click="boolMonth=!boolMonth"></div>
      </div>
      <div class="moreBtn">
        <img v-show="!boolExpand" src="./assets/img/moreBtn.png" />
        <img v-show="boolExpand" src="./assets/img/expand.png" />
        <div class="handleMore btn" @click="boolExpand=!boolExpand"></div>
      </div>
    </div>
    <div class="Rank">
      <img src="./assets/img/rank.png" />
    </div>
    <div class="bottom">
      <div :style="boolComunity?comunity:out1" class="out">
        <div class="data">
          <img v-show="!boolComunity" src="./assets/img/data1.png" />
          <img v-show="!boolComunity" src="./assets/img/departmentMore.png" />
          <img v-show="boolComunity" src="./assets/img/comunityData.png" />
          <img v-show="boolComunity" src="./assets/img/comunityDataMore.png" />
        </div>
        <div class="detailBtn btn" @click="boolComunity=!boolComunity"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      comunity: {
        backgroundImage: "url(" + require("./assets/img/community.png") + ")"
      },
      out1: {
        backgroundImage: "url(" + require("./assets/img/out1.png") + ")"
      },
      // 社区接单
      boolComunity: false,
      // 展开更多
      boolExpand: false,
      // 切换年月
      boolMonth: false
    };
  },
  created() {},
  mounted() {},
  updated() {},
  methods: {}
};
</script>
<style lang="scss" >
#index {
  width: 100%;
  height: auto;
  .middle {
    width: 100%;
    // height: 1683px;
    position: relative;
    .moreBtn:hover {
      cursor: pointer;
    }
    .ymBtn {
      width: 100%;
      height: 105px;
      position: absolute;
      top: 33px;
    }
  }
  .moreBtn {
    position: relative;
  }
  .handleMore {
    width: 100%;
    height: 115px;
    position: absolute;
    bottom: 35px;
  }
  .out {
    width: 100%;
    height: 750px;
    background-color: rgb(17, 23, 83);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    position: relative;
    .data {
      position: absolute;
      margin-top: 208px;
      margin-left: 44px;
      width: 87%;
      height: 402px;
      overflow-y: auto;
    }
    .detailBtn {
      position: absolute;
      top: 10%;
      width: 100%;
      height: 100px;
    }
  }
}
img {
  display: block;
  width: 100%;
  height: auto;
}
.btn:hover {
  cursor: pointer;
}
*::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 4px rgba(0, 0, 0, 0.2);
  background-color: #041530;
  border-radius: 4px;
}
*::-webkit-scrollbar {
  width: 10px;
  height: 4px;
  background-color: #057ac5;
  border-radius: 4px;
}

*::-webkit-scrollbar-thumb {
  border-radius: 5px;
  background: #057ac5;
}
</style>