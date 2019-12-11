<template>
    <div>
        <p class="title">区县境内分析</p>
        <!-- 插入地图 -->
        <div class="map">
            <map-com></map-com>
        </div>
        <p class="content_item">
            冲马路事件接警量排名前三的支队有：
            <span class="redFont">遵义市消防支队、贵阳市消防支队、六盘水市消防支队。</span>
            其中遵义市消防支队占比40.00%，贵阳市消防支队占比20.00%，六盘水市消防支队占比20.00%。
        </p>
        <p class="content_item">
            冲马路事件接警量排名前十的大队有：
            <span class="redFont">清镇市消防大队、钟山区消防大队、德江县消防大队、仁怀市消防大队、红花岗区消防大队。</span>
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
