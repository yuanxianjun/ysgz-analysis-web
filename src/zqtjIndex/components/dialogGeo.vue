<template>
  <div>
    <p class="content_item">贵州省地质地理条件特殊,地质环境脆弱，按照国家地质灾害防治规划划分，全省均为地质灾害易发区，是全国地质灾害的重灾区之一。</p>
    <p class="title">(一)事故类型分析</p>
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="content_item">从地质灾害类型分析，贵州省主要地质灾害为山体滑坡。</p>
    <p class="title">(二)区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      地质灾害救援排名前三的支队有：
      <span class="redFont">贵阳市消防支队、六盘水市消防支队、毕节市消防支队。</span>
      其中贵阳市消防支队占比27.27%、六盘水市消防支队占比21.21%、毕节市消防支队占比15.15%。
    </p>
    <p class="content_item">
      地质灾害救援排名前十的大队有：
      <span
        class="redFont"
      >水城县消防大队、云岩区消防大队、罗甸县消防大队、赫章县消防大队、织金县消防大队、修文县消防大队、绥阳县消防大队、威宁县消防大队、思南县消防大队、清镇市消防大队。</span>
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
