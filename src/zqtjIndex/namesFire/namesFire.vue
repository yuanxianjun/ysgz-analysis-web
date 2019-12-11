<template>
    <div id="calledAna">
        <!-- 公共的头部组件 -->
        <comHeader></comHeader>
        <!-- 公共的页面标示页 -->
        <backHome></backHome>
        <div class="content-wrapper1">
            <div
                class="myTable"
                v-loading="loadTable"
                element-loading-background="rgba(0, 0, 0, 0.6)"
            >
                <el-table
                    highlight-current-row
                    id="jtTable"
                    border
                    :data="tableData"
                    height="863"
                    v-if="!loadTable"
                >
                    <el-table-column align="center" prop="area" label="地区" width="250"></el-table-column>
                    <el-table-column align="center" prop="date" label="时间"></el-table-column>
                    <el-table-column align="center" prop="address" label="起火场所"></el-table-column>
                    <el-table-column align="center" prop="reason" label="火灾原因"></el-table-column>
                    <el-table-column align="center" prop="money" label="直接财产损失(元)"></el-table-column>
                    <el-table-column align="center" prop="die" label="亡人数"></el-table-column>
                    <el-table-column align="center" prop="injured" label="伤人数"></el-table-column>
                </el-table>
            </div>
            <div class="pageRate">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                ></el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
// 引入头部的组件
import comHeader from "../components/comHeader";
import backHome from "../components/toHome";
import { dieAlarmInfo } from "../requestUrl";
export default {
    name: "calledAna",
    data() {
        return {
            dataJson: JSON.parse(window.localStorage.getItem("dataJson")),
            loadTable: true,
            total: 0,
            pageSize: 10,
            currPage: 1,
            tableData: []
        };
    },
    created() {},
    mounted() {
        this.getData();
    },
    methods: {
        /***
         * 获取表格数据
         * */
        getData() {
            var data = {
                endDate: this.dataJson.dateValue[1],
                startDate: this.dataJson.dateValue[0],
                orgTreeId: this.dataJson.orgTreeId,

                pageNum: this.currPage,
                pageSize: this.pageSize
            };
            this.axios({
                method: "post",
                url: dieAlarmInfo,
                data
            }).then(res => {
                var data = res.data.result;
                this.tableData = data.list;
                this.total = data.total;
                this.loadTable = false;
            });
        },
        /***
         * 切换每页显示条数
         * */
        handleSizeChange: function(pagesize) {
            this.pageSize = pagesize;
            this.getData();
        },
        /****
         * 翻页
         * */
        handleCurrentChange: function(page) {
            this.currPage = page;
            this.getData();
        }
    },
    computed: {},
    components: {
        comHeader,
        backHome
    }
};
</script>


<style lang="scss" scoped>
</style>
