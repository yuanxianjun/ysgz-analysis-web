<template>
  <div>
    <p class="content_item">建筑坍塌事故具有突发性强、易引发次生灾害、社会影响大、救援难度大的特点，一旦发生极易造成严重的人员和财产损失</p>
    <p class="title">(一)事故类型分析</p>
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="content_item">建筑物倒塌事故占比64.18%，建筑物其他事故占比17.91%，构筑物倒塌事故占比11.94%，构筑物其他事故占比6.35%。</p>
    <p class="title">(二)区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      建筑物坍塌事故救援排名前三的支队有：
      <span class="redFont">贵阳市消防支队、黔南州消防支队、六盘水市消防支队。</span>
      其中贵阳市消防支队占比40.30%，黔南州消防支队占比19.40%，六盘水市消防支队占比11.94%。
    </p>
    <p class="content_item">
      建筑物坍塌事故救援排名前十的大队有：
      <span
        class="redFont"
      >云岩区消防大队、观山湖区消防大队、南明区消防大队、乌当区消防大队、都匀市消防大队、水城县消防大队、三都县消防大队、清镇市消防大队、安顺市开发区消防大队、金沙县消防大队。</span>
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
