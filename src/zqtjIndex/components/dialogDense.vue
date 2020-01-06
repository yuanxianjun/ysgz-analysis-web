<template>
  <div>
    <p class="title">地下建筑火灾类型分析</p>
    <!-- 柱状图 -->
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="content_item">地下仓库火灾占比62.5%，地下商场超市火灾占比25%，地铁、隧道火灾占比12.5%。</p>
    <p class="title">区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      地下建筑火灾排名前3的支队有
      <span class="redFont">安顺支队、贵阳支队、铜仁支队。</span>
    </p>
    <p class="content_item">
      地下建筑火灾排名前7的大队有
      <span class="redFont">安顺市开发区大队、七星关大队、南明大队、都匀大队、玉屏大队、云岩大队、汇川大队。</span>
    </p>
  </div>
</template>
<script>
import mapCom from "./map";
import histogramCom from "./echartsBar";

export default {
  name: "maskBox",
  data() {
    return {};
  },
  components: {
    mapCom,
    histogramCom
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
</style>
