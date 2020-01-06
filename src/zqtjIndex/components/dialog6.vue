<template>
  <div>
    <p class="title">化工火灾类型分析</p>
    <!-- 柱状图 -->
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="content_item">石油化工装置火灾占比100%。油、气储罐（库、站）火灾占比0%，危险化学品仓库火灾占比0%。</p>
    <p class="title">区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      化工火灾排名前3的支队有
      <span class="redFont">毕节支队、遵义支队、贵阳支队。</span>
      其中毕节支队的化工火灾接警数量占全省该类型火灾接警的50%。
    </p>
    <p class="content_item">
      化工火灾排名前10的大队有
      <span class="redFont">七星关大队、仁怀大队、修文大队、红花岗大队、习水大队、白云大队、长顺大队、兴义大队。</span>
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
