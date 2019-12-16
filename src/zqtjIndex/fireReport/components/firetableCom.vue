<template>
    <div class="myTable">
        <el-table id="jtTable" border :data="mockData" style="width: 100%;">
            <el-table-column type="index" label="排名" align="center" width="150"></el-table-column>
            <el-table-column
                v-for="(item,i) in mockHeader"
                :key="i"
                :label="item.label"
                :prop="item.prop"
                align="center"
            ></el-table-column>
        </el-table>
    </div>
</template>
<script>
import allData from "./../assets/json/fireSave";
export default {
    name: "tableCom",
    props: ["dataType", "headerData"],
    data() {
        return {
            mockData: [],
            mockHeader: [],
            allHeader: {
                h1: [
                    { label: "地州市", prop: "area" },
                    { label: "火灾起数", prop: "num" },
                    { label: "去年同期起数", prop: "last" },
                    { label: "同比", prop: "cmopare" }
                ],
                h2: [
                    { label: "区  县", prop: "area" },
                    { label: "火灾起数", prop: "num" },
                    { label: "本地区占比", prop: "last" }
                ],
                h3: [
                    { label: "区  县", prop: "area" },
                    { label: "火灾起数", prop: "num" },
                    { label: "居住类火灾起数", prop: "last" },
                    { label: "本地区占比", prop: "cmopare" }
                ],
                h4: [
                    { label: "地州市", prop: "area" },
                    { label: "亡人数", prop: "num" },
                    { label: "亡人数占比", prop: "last" }
                ]
            }
        };
    },
    created() {
        // this.disData();
    },
    mounted() {
        this.judgeType(this.dataType, this.headerData);
    },
    methods: {
        // 判断是否是哪个类型的数据
        judgeType(type, headerType) {
            this.mockHeader = this.allHeader[headerType];
            this.mockData = allData[type];
        }
    }
};
</script>
<style lang="scss">
.myTable {
    width: 100%;
    height: auto;
    margin-top: 10px;
    min-height: 0;
}
</style>
