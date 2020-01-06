<template>
  <div>
    <p class="title">区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      其他火灾排名前3的支队有
      <span class="redFont">遵义支队、铜仁支队、黔西南支队。</span>
      其中遵义支队的其他火灾接警数量占全省该类型火灾接警的32.63%。
    </p>
    <p class="content_item">
      其他火灾排名前10的大队有
      <span class="redFont">红花岗大队、云岩大队、凤岗大队、遵义县大队、汇川大队、都匀大队、七星关大队、兴义大队、印江大队、石阡大队。</span>
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
