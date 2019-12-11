<template>
    <div>
        <p class="title">区县境内分析</p>
        <!-- 插入地图 -->
        <div class="map">
            <map-com></map-com>
        </div>
        <p class="content_item">
            关水龙头事件接警量排名前三的支队有：
            <span class="redFont">安顺市消防支队、遵义市消防支队、黔西南州消防支队。</span>
            其中安顺市消防支队占比33.33%、遵义市消防支队占比33.33%、黔西南州消防支队占比33.33%。
        </p>
        <p class="content_item">
            关水龙头事件接警量排名前十的大队有：
            <span class="redFont">兴义市消防大队、西秀区消防大队、汇川区消防大队。</span>
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
