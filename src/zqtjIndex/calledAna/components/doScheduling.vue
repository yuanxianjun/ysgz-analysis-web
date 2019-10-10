<template>
  <div class="analysisModel" v-show="analysisFlag">
    <div class="model">
      <div class="gif"></div>
    </div>
    <p class="modelText">
      分析研判中
      <i class="dot">...</i>
    </p>
  </div>
</template>
<script>
export default {
  name: "bollSearch",
  data() {
    return {
      analysisFlag: true
    };
  },
  mounted() {}
};
</script>
<style lang="scss">
.analysisModel {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999;
  .model {
    width: 417px;
    height: 414px;
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    overflow: hidden;
    border-radius: 50%;
  }
  .gif {
    position: relative;
    background: url("../assets/boll.gif") no-repeat;
    height: 600px;
    width: 800px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .modelText {
    top: 45%;
    left: 37.5%;
    position: absolute;
    z-index: 999;
    font-size: 60px !important;
    font-weight: 540;
    color: #fff !important; // animation: fadeoutR 2s infinite linear;
  }
  .dot {
    font-size: 50px !important;
    overflow: hidden;
    display: inline-block;
    animation: dotAnim 1s infinite linear;
  }
  .el-loading-mask {
    background: radial-gradient(#001011, #00020c, #000) !important;
  }
}
@keyframes dotAnim {
  0% {
    width: 0;
  }
  100% {
    width: 40px;
  }
}

@-webkit-keyframes fadeoutR {
  0% {
    opacity: 0.8;
    -webkit-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -webkit-transform: translateX(-100px);
  }
}

@-moz-keyframes fadeoutR {
  0% {
    opacity: 0.8;
    -moz-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -moz-transform: translateX(-100px);
  }
}

@-ms-keyframes fadeoutR {
  0% {
    opacity: 0.8;
    -ms-transform: translateX(0);
  }
  100% {
    opacity: 0;
    -ms-transform: translateX(-100px);
  }
}

@keyframes fadeoutR {
  0% {
    opacity: 0.8;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-100px);
  }
}
</style>
