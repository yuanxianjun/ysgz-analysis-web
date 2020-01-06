<template>
  <div>
    <p class="title">交通工具火灾类型分析</p>
    <!-- 柱状图 -->
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="content_item">汽车、车库火灾占比100%，飞机火灾占比0%，列车火灾占比0%，船舶火灾占比0%。</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      交通工具火灾排名前3的支队有
      <span class="redFont">遵义支队、贵阳支队、毕节支队。</span>
      其中遵义支队的交通工具火灾接警数量占全省该类型火灾接警的45.63%。
    </p>
    <p class="content_item">
      交通工具火灾排名前10的大队有
      <span class="redFont">红花岗大队、遵义县大队、仁怀大队、七星关大队、云岩大队、汇川大队、桐梓大队、余庆大队、习水大队、凤岗大队。</span>
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
