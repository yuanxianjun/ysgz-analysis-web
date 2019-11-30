<template>
  <div>
    <p
      class="content_item"
    >贵州省由于地理位置独特，纬度较低，海拔较高，形成四季分明、雨热同季、干湿季节明显的气候特点，约80%的太阳辐射量集中于4—11月，70%~85%的降水量集中于5—10月，冬季降水量仅占全年的5%左右。故冬春旱现象严重，加上草木枯黄，因此从每年的11月至翌年4月极易发生森林火灾。</p>

    <p class="title">(一)事故类型分析</p>
    <!-- 柱状图 -->
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="title">(二)区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      森林火灾事故救援排名前三的支队有：
      <span class="redFont">安顺市消防支队、黔西南州消防支队、贵安新区消防支队。</span>
    </p>
    <p class="content_item">
      森林火灾事故救援排名前十的大队有：
      <span
        class="redFont"
      >贵安新区消防大队、西秀区消防大队、安顺市开发区消防大队、兴义市消防大队、晴隆县消防大队、顶效开发区消防大队、特勤大队、贞丰县消防大队、安龙县消防大队、剑河县消防大队。</span>
    </p>
  </div>
</template>
<script>
import histogramCom from "./echartsBar";
import mapCom from "./map";
export default {
  name: "maskBox",
  data() {
    return {
      dataJson: JSON.parse(window.localStorage.getItem("dataJson")),
      title: ""
    };
  },
  components: {
    histogramCom,
    mapCom
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
</style>
