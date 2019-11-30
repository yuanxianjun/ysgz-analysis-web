<template>
  <div>
    <p class="content_item">贵州是矿产资源的富集地，境内矿产资源种类繁多，分布广泛，门类齐全，储量丰富，但同时地质环境脆弱，较易发生矿山事故。</p>

    <p class="title">(一)事故类型分析</p>
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="title">(二)区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      从矿山事故发生地区分析，矿山事故救援支队排名为：
      <span class="redFont">六盘水市消防支队。大队排名为：钟山区消防大队。</span>
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
      dataJson: JSON.parse(window.localStorage.getItem("dataJson"))
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
