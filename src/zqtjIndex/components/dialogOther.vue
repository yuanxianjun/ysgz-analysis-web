<template>
    <div>
        <p class="title">区县境内分析</p>
        <!-- 插入地图 -->
        <div class="map">
            <map-com></map-com>
        </div>
        <p class="content_item">
            其他类型事件接警量排名前三的支队有：
            <span class="redFont">贵阳市消防支队、六盘水市消防支队、毕节市消防支队。</span>
            其中贵阳市消防支队占比31.50%、六盘水市消防支队占比14.02%、毕节市消防支队占比12.19%。
        </p>
        <p class="content_item">
            其他类型事件接警量排名前十的大队有：
            <span
                class="redFont"
            >南明区消防大队、七星关区消防大队、云岩区消防大队、钟山区消防大队、六枝特区消防大队、红花岗区消防大队、都匀市消防大队、汇川区消防大队、观山湖区消防大队、水城县消防大队。</span>
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
