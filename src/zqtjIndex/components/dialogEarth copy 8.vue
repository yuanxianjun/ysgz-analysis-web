<template>
  <div>
    <p class="title">(一)事故类型分析</p>
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p
      class="content_item"
    >地震灾害是一种危及人民生命财产安全、破坏性极大的突发性自然灾害，具有瞬间发生、破坏剧烈、影响面广、次生灾害严重等特点，尤其是在人口密集，政治、经济、工业和科学技术发达的城市和地区，造成的损失更加惨重。</p>
    <p class="title">(二)区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      从地震及次生灾害发生地区分析，地震事故救援支队排名为：
      <span class="redFont">铜仁市消防支队。大队排名为：沿河县消防大队。</span>
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
