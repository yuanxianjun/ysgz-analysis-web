<template>
  <div>
    <p class="title">(一)事故类型分析</p>
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="content_item">草原火灾具有火势猛、速度快、季节性明显的特点，草原火灾主要为人为因素引起的火灾。</p>
    <p class="title">(二)区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      从草原火灾发生地区分析，草原火灾事故救援支队排名为：
      <span class="redFont">安顺市消防支队。大队排名为：西秀区消防大队。</span>
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
