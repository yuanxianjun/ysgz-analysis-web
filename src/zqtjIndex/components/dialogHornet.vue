<template>
    <div>
        <p class="normal">从时间上看，取马蜂窝事件集中在气温较高的7、8、9三个月。</p>
        <p class="title">区县境内分析</p>
        <!-- 插入地图 -->
        <div class="map">
            <map-com></map-com>
        </div>
        <p class="content_item">
            取马蜂窝事件接警量排名前三的支队有：
            <span class="redFont">贵阳市消防支队、遵义市消防支队、安顺市消防支队。</span>
            其中贵阳市消防支队占比57.65%，遵义市消防支队占比24.08%，安顺市消防支队占比4.08%。
        </p>
        <p class="content_item">
            取马蜂窝事件接警量排名前十的大队有：
            <span
                class="redFont"
            >云岩区消防大队、南明区消防大队、红花岗区消防大队、汇川区消防大队、花溪区消防大队、观山湖区消防大队、经开区消防大队、乌当区消防大队、清镇市消防大队、七星关区消防大队。</span>
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
