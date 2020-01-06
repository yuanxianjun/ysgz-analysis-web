<template>
  <div>
    <p class="title">特殊火灾类型分析</p>
    <!-- 柱状图 -->
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="content_item">住宅宿舍火灾占比99.67%，宾馆饭店火灾占比0.33%。</p>
    <p class="title">区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      特殊火灾排名前3的支队有
      <span class="redFont">遵义支队、贵阳支队、毕节支队。</span>
      其中遵义支队的特殊火灾接警数量占全省该类型火灾接警的60.29%。
    </p>
    <p class="content_item">
      特殊火灾排名前10的大队有
      <span class="redFont">红花岗大队、汇川大队、仁怀大队、七星关大队、云岩大队、钟山大队、凤岗大队、湄潭大队、西秀大队、务川大队。</span>
    </p>
  </div>
</template>
<script>
import histogramCom from "./echartsBar";
import mapCom from "./map";
export default {
  name: "dialogHypogee",
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
