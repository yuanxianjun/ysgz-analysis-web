<template>
  <div class="outBigModal">
    <!-- 立功受奖弹窗 -->
    <div class="big_modal">
      <div class="modalTitle">分析研判</div>
      <div class="showMoreDiv">
        <div class="nei">
          <div class="itemTable">
            <div v-for="itemCon in mockData2">
              <p class="label">{{itemCon.label}}</p>
              <p class="number">{{itemCon.con}}</p>
            </div>
          </div>
          <div class="contextAna">
            <p>加强该区域辖区中队的道路抢险救援装备实力。</p>
          </div>
        </div>
        <div class="closeImg" @click="closeAll">
          <img src="../../common/images/bubble_close.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "maskBox",
  data() {
    return {
      mockData2: [
        {
          label: "高发季度",
          con: "第一季度"
        },
        {
          label: "高发月份",
          con: "二月份"
        },
        {
          label: "高发时间",
          con: "凌晨两点"
        },
        {
          label: "高发类型",
          con: "追尾"
        },
        {
          label: "高发路段",
          con: "京贵高速"
        },
        {
          label: "所辖区中队",
          con: ""
        }
      ]
    };
  },
  mounted() {},
  methods: {
    closeAll() {
      this.$emit("closeMaskBox");
    }
  }
};
</script>
<style lang="scss">
.outBigModal {
  width: 100%;
  height: 100%;
  position: fixed;
  overflow: hidden;
  opacity: 60%;
  background: rgba(0, 0, 0, 0.6);
  left: 0;
  top: 0;
  z-index: 9999;
  .big_modal_unit {
    width: 714px;
  }
  .big_modal_person {
    width: 1071px;
  }
}
.big_modal {
  width: 991px;
  height: 602px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .modalTitle {
    height: 30px;
    line-height: 30px;
    font-size: 24px;
    color: #fff;
  }
}
// 弹出框
.showMoreDiv {
  width: 100%;
  height: 570px;
  background: url(../../common/images/content.png) no-repeat center center;
  background-size: 100% 100%;
  z-index: 9999;
  padding: 20px;
  padding-bottom: 40px;
  overflow: hidden;
  .nei {
    width: 100%;
    height: 100%;
    position: relative;
    top: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    .itemTable {
      width: 100%;
      height: 192px;
      div {
        display: block;
        border: 1px solid #003e70;
        text-align: center;
        width: 235px;
        float: left;
        .label {
          font-size: 24px;
          height: 43px;
          line-height: 43px;
          color: #ffffff;
          background: url(../../common/images/title_bg.png) no-repeat center
            center;
          background-size: 100% 100%;
        }
        .number {
          font-size: 24px;
          height: 70px;
          line-height: 70px;
          background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
    }
    .contextAna {
      width: 930px;
      height: 117px;
      background: url(../../common/images/context.png) no-repeat center center;
      background-size: 100% 100%;
      text-align: center;
      line-height: 1;
      p {
        width: 100%;
        height: 100%;
        font-size: 24px;
        line-height: 117px;
        background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      position: absolute;
      bottom: 30px;
      right: 10px;
    }
  }
  .closeImg {
    position: absolute;
    right: 10px;
    top: 50px;
    width: 20px;
    height: 20px;
    cursor: pointer;
  }
}
</style>
