<template>
    <div>
        <p class="title">区县境内分析</p>
        <!-- 插入地图 -->
        <div class="map">
            <map-com></map-com>
        </div>
        <p class="content_item">
            抓动物事件接警量排名前三的支队有：
            <span class="redFont">贵阳市消防支队、遵义市消防支队、毕节市消防支队。</span>
            其中贵阳市消防支队占比41.88%、遵义市消防支队占比24.93%、毕节市消防支队占比7.98%。
        </p>
        <p class="content_item">
            抓动物事件接警量排名前十的大队有：
            <span
                class="redFont"
            >云岩区消防大队、红花岗区消防大队、南明区消防大队、七星关区消防大队、汇川区消防大队、白云区消防大队、兴义市消防大队、钟山区消防大队、花溪区消防大队、观山湖区消防大队。</span>
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
