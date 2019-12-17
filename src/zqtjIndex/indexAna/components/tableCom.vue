<template>
    <div class="myTableDiv">
        <el-table id="jtTable" border :data="mockData" style="width: 100%;">
            <el-table-column align="center" prop="area" label="地区" width="200"></el-table-column>
            <el-table-column align="center" prop="total" label="总计"></el-table-column>
            <el-table-column align="center" prop="fire" label="火灾扑救"></el-table-column>
            <el-table-column align="center" prop="rescue" label="抢险救援"></el-table-column>
            <el-table-column align="center" prop="social" label="社会救助"></el-table-column>
            <el-table-column align="center" prop="other" label="其它"></el-table-column>
        </el-table>
    </div>
</template>
<script>
export default {
    name: "tableCom",
    props: ["mockData"],
    data() {
        return {};
    },
    created() {
        // this.disData();
    },
    mounted() {},
    methods: {}
};
</script>
<style lang="scss">
.myTableDiv {
    width: 100%;
    .el-table__body .el-table__row td .cell {
        font-family: ROME;
        color: #00faa8;
        background-image: linear-gradient(top, #00f6fb 0%, #00ff98 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent !important;
        font-size: 60px;
    }
    .el-table__body .el-table__row td:first-of-type,
    .el-table__body .el-table__row .el-table_1_column_1 {
        .cell {
            font-size: 24px;
            color: #ffffff !important;
            -webkit-text-fill-color: #ffffff !important;
        }
    }
    .el-table__empty-block {
        border-bottom: 1px solid #006d94;
    }
}
</style>
