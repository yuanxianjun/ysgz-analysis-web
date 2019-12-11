<template>
    <div>
        <p class="title">区县境内分析</p>
        <!-- 插入地图 -->
        <div class="map">
            <map-com></map-com>
        </div>
        <p class="content_item">
            送水事件接警量排名前三的支队有：
            <span class="redFont">黔东南州消防支队、贵阳市消防支队、遵义市消防支队。</span>
            其中黔东南州消防支队占比32.00%，贵阳市消防支队占比26.00%，遵义市消防支队占比20.00%。
        </p>
        <p class="content_item">
            送水事件接警量排名前十的大队有：
            <span
                class="redFont"
            >观山湖区消防大队、天柱县消防大队、德江县消防大队、余庆县消防大队、黎平县消防大队、白云区消防大队、岑巩县消防大队、台江县消防大队、剑河县消防大队、道真县消防大队。</span>
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
