<template>
  <div>
    <p class="title">区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      高层建筑火灾排名前3的支队有
      <span class="redFont">遵义支队、贵阳支队、黔南支队。</span>
      其中遵义支队的人员密集场所火灾接警数量占全省该类型火灾接警的32.28%。
    </p>
    <p class="content_item">
      人员密集场所火灾排名前10的大队有
      <span class="redFont">遵义县大队、钟山大队、南明大队、兴义市大队、桐梓大队、德江大队、汇川大队、红花岗大队、独山大队、绥阳大队。</span>
    </p>
  </div>
</template>
<script>
import mapCom from "./map";
export default {
  name: "maskBox",
  data() {
    return {};
  },
  components: {
    mapCom
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
</style>
