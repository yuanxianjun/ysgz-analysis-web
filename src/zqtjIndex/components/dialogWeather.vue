<template>
  <div>
    <p class="title">(一)事故类型分析</p>
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="content_item">从气象灾害类型分析，贵州省主要地质灾害为风灾。</p>
    <p class="title">(二)区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      气象灾害救援排名前三的支队有：
      <span class="redFont">遵义市消防支队、毕节市消防支队、黔西南州消防支队。</span>
    </p>
    <p class="content_item">
      气象灾害救援排名前十的大队有：
      <span class="redFont">桐梓县消防大队、七星关区消防大队、安龙县消防大队。</span>
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
