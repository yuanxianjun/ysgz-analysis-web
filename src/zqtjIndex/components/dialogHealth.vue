<template>
  <div>
    <p class="content_item">公共卫生事件具有突发性、公共性、严重性、紧迫性、复杂性等特点，需要及时采取措施，将事件的危害控制在最低程度。</p>

    <p class="title">(一)事故类型分析</p>
    <div class="ecartsDiv">
      <histogramCom></histogramCom>
    </div>
    <p class="title">(二)区县境内分析</p>
    <!-- 插入地图 -->
    <div class="map">
      <map-com></map-com>
    </div>
    <p class="content_item">
      从公共卫生事件发生地区分析，矿山事故救援支队排名为
      <span class="redFont">：贵阳市消防支队。大队排名为：南明区消防大队。</span>
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
      dataJson: JSON.parse(window.localStorage.getItem("dataJson"))
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
