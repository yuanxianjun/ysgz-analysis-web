<template>
  <div>
    <p class="title">其他重要场所火灾类型分析</p>
    <!-- 柱状图 -->
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p
      class="content_item"
    >露天堆垛火灾占比49.48%，物资仓库火灾占比33.68%，洁净厂房火灾占比14.43%，重要机关单位火灾占比1.37%，文物古建筑火灾占比1.03%。</p>
    <p class="content_item">露天堆垛火灾中，以垃圾堆、箱起火为主。</p>
    <p class="title">区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      其他重要场所火灾排名前3的支队有
      <span class="redFont">遵义支队、贵阳支队、黔东南支队。</span>
      其中遵义支队的其他重要场所火灾接警数量占全省该类型火灾接警的42.95%。
    </p>
    <p class="content_item">
      人员密集场所火灾排名前10的大队有
      <span class="redFont">红花岗大队、仁怀大队、钟山大队、汇川大队、习水大队、云岩大队、凯里市大队、南明大队、兴仁大队、七星关大队。</span>
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
