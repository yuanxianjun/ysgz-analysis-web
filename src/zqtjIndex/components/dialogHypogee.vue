<template>
  <div>
    <p class="title">人员密集场所火灾类型分析</p>
    <!-- 柱状图 -->
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p
      class="content_item"
    >住宅宿舍火灾占比85.07%，宾馆饭店火灾占比6.72%，商场市场火灾占比4.67%，办公场所火灾占比1.53%，学校医院火灾占比1.37%，娱乐场所火灾占比0.37%，交通枢纽火灾占比0.27%。</p>
    <p class="content_item">在住宅宿舍火灾中，以民房起火为主。</p>
    <p class="title">区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      人员密集场所火灾排名前3的支队有
      <span class="redFont">遵义支队、贵阳支队、毕节支队。</span>
      其中遵义支队的人员密集场所火灾接警数量占全省该类型火灾接警的34.64%。
    </p>
    <p class="content_item">
      人员密集场所火灾排名前10的大队有
      <span class="redFont">云岩大队、红花岗大队、汇川大队、仁怀大队、钟山大队、七星关大队、南明大队、遵义县大队、西秀大队、湄潭大队。</span>
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
