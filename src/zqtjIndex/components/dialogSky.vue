<template>
    <div>
        <p class="title">区县境内分析</p>
        <!-- 插入地图 -->
        <div class="map">
            <map-com></map-com>
        </div>
        <p class="content_item">
            高空取物事件接警量排名前三的支队有：
            <span class="redFont">遵义市消防支队、毕节市消防支队、贵阳市消防支队。</span>
            其中遵义市消防支队占比33.70%、毕节市消防支队占比22.83%、贵阳市消防支队占比17.39%。
        </p>
        <p class="content_item">
            高空取物事件接警量排名前十的大队有：
            <span
                class="redFont"
            >七星关区消防大队、汇川区消防大队、红花岗区消防大队、西秀区消防大队、钟山区消防大队、瓮安县消防大队、南明区消防大队、正安县消防大队、安顺市开发区消防大队、乌当区消防大队。</span>
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
