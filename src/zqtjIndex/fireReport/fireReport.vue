<template>
    <div id="fireReport">
        <!-- 公共的头部组件 -->
        <comHeader></comHeader>
        <!-- 公共的页面标示页 -->
        <backHome></backHome>
        <div class="content-wrapper1">
            <div class="titleLabel">贵州省消防总队</div>
            <div class="title2">贵州省2019年1至11月火灾事故综合情况</div>
            <!-- 内容p -->
            <p
                class="fr_sum"
            >2019年1至11月，全省共接报火灾5139起，死亡39人，受伤29人，直接财产损失8910.96万元。与去年同期相比，火灾起数上升27.23%，亡人数上升19.35%，伤人数上升17.39%，直接财产损失上升13.06%。总体来看，我省1至11月火灾呈现以下特征：</p>
            <!-- 表格分析 -->
            <div class="fr_content">
                <div class="label1">一、火灾总体情况</div>
                <div class="title3">(一)地州市火灾整体情况</div>
                <!-- 表格数据 -->
                <firetable-com data-type="generalData" header-data="h1"></firetable-com>
                <div class="fr_item">
                    火灾起数同比上升幅度从高到低的地州市依次是：
                    遵义（+231.23%）、黔南（+116.22%）、黔东南（+27.67%）、铜仁（+4.45%）、黔西南（+1.82%）、贵安（-5.27%）、
                    六盘水（-6.36%）、毕节（-22.7%）、贵阳（-24.06%）、安顺（-48.28%）
                </div>
                <div class="title3">(二)区县火灾整体情况。</div>
                <div class="table_title">火灾起数前十位区县</div>
                <firetable-com data-type="fireTop10" header-data="h6"></firetable-com>
                <div class="table_title">火灾起数同比上升幅度前10位区县</div>
                <firetable-com data-type="up10" header-data="h7"></firetable-com>
                <div class="labelP">
                    <span class="title4">（三）城区火灾情况。</span>

                    <span class="label3">
                        城市市区发生火灾1856起，占比36.12%，县城城区发生火灾1299起，占比25.28%，城区共计占比61.4%。城区火灾在本地区占比最大的前三位是
                        <span
                            class="title3"
                        >贵阳664起，占比83.32%；安顺134起，占比63.81%；黔南249，占比62.25%。</span>
                    </span>
                </div>
                <template>
                    <div class="table_title">城区火灾数排在前10位的区县</div>
                    <firetable-com data-type="cityTop10" header-data="h2"></firetable-com>
                </template>

                <div class="labelP">
                    <span class="title4">（四）农村火灾情况。</span>
                    <span class="label3">
                        农村火灾1196起，占比23.27%；集镇镇区火灾639起，占比12.43%，共计占比35.7%。
                        <span
                            class="title3"
                        >农村火灾在本地区占比最大的前三位是：</span>

                        <span class="title3">黔西南</span>农村火灾180起，占本地区火灾总起数的53.42%；
                        <span class="title3">铜仁</span>农村火灾176起，占本地区火灾总起数的46.81%；
                        <span class="title3">黔东南</span>农村火灾113起，占本地区火灾总起数的42.97%（其中贵安新区9起农村火灾，本地区占比50%）。
                    </span>
                    <firetable-com data-type="countryfire" header-data="h5"></firetable-com>
                </div>
            </div>
            <div class="fr_content">
                <div class="label1">二、火灾分类统计情况</div>

                <div class="title3"></div>

                <div class="labelP">
                    <span class="title4">（一）按照场所统计，全省各地均以居住类场所为火灾高发地。</span>
                    <span
                        class="label3"
                    >住宅为主要发生地，共发生火灾2787起，占火灾总数的54.23%；宿舍火灾449起，占总数的8.74%；交通工具火灾341起，占火灾总数的6.64%。共纳入统计场所35类，排在前6位的分别是住宅、宿舍、交通工具、商244业场所、垃圾231及废弃物、餐饮234场所，火灾发生数占总数的比例达83.40%。</span>
                </div>
                <!-- 表格数据 -->
                <template>
                    <div class="table_title">全省居住类火灾高发的区县</div>
                    <firetable-com data-type="provinceData" header-data="h3"></firetable-com>
                </template>

                <div class="labelP">
                    <span class="title4">（二）电气、生活用火不慎为主要致灾因素。</span>
                    <span
                        class="label3"
                    >全省各地共发生电气火灾2544起，占比49.50%；生活用火不慎967起，占比18.82%；生产作业类火灾140起，占比2.72%。</span>
                </div>

                <div class="labelP">
                    <span class="title4">（三）火灾发生在多层、单层建筑。</span>
                    <span
                        class="label3"
                    >多层建筑火灾2180起，占比56.98%；单层建筑火灾1383起，占比36.15%；高层建筑火灾238起，占比6.22%；地下建筑火灾25起，占比0.65%。</span>
                </div>

                <div class="labelP">
                    <span class="title4">高层建筑火灾主要发生在：</span>
                    <span
                        class="label3"
                    >多层建筑火灾2235起，占比43.49%；单层建筑火灾1465起，占比28.51%；高层建筑火灾255起，占比4.96%；地下建筑火灾23起，占比0.45%。</span>
                </div>

                <div class="labelP">
                    <span class="title4">地下建筑火灾主要发生在：</span>
                    <span class="label3">遵义6起，贵阳5起，黔南5起，毕节3起，铜仁2起，六盘水1起，黔西南1起。</span>
                </div>

                <div class="labelP">
                    <span class="title4">（四）家具、设备及竹、木等制品为主要火灾燃烧物。</span>
                    <span class="label3">有2708起火灾的主要燃烧物为家具、设备及竹、木等制品，占比52.70%；其次是轻工业品、纺织品，占比6%。</span>
                </div>
            </div>

            <div class="fr_content">
                <div class="label1">三、火灾亡人情况</div>
                <p class="fr_sum">2019年1月至11月，共发生亡人火灾19起，死亡39人，受伤14人，直接财产损失204.45万元，过火面积6101.5平方米。</p>
                <!-- 表格数据 -->
                <template>
                    <div class="table_title">火灾亡人数整体情况</div>
                    <firetable-com data-type="dieall" header-data="h4"></firetable-com>
                </template>

                <div class="labelP">
                    <span class="title4">（一）城区亡人火灾数占比较高。</span>

                    <span class="label3">城区火灾死亡19人，占比51.35%；农村、集镇火灾死亡15人，占比40.54%；开发区死亡3人，占比8.11%。</span>
                </div>

                <div class="title3">贵阳城区火灾7起，亡9人；遵义城区火灾2起，亡9人；毕节城区火灾1起，亡1人。</div>

                <div class="labelP">
                    <span class="title4">（二）居住类场所为亡人火灾高发地，其次为餐饮场所。</span>

                    <span
                        class="label3"
                    >住宅火灾死亡15人，占比40.54%；餐饮场所死亡8人，占比21.62%；公共娱乐场所死亡5人，占比13.51%；厂房类死亡4人，占比10.81%；宿舍火灾死亡3人，占比8.1%；三合一、多合一场所死亡2人，占比5.4%。</span>
                </div>

                <div class="labelP">
                    <span class="title4">（三）夜间是火灾亡人高发时段。</span>
                    <span class="label3">
                        住宅火灾死亡15人，占比40.54%；餐饮场所死亡8人，占比21.62%；公共娱乐场所死亡5人，占比13.51%；厂房类死亡4人，占比10.81%；宿舍火灾死亡3人，占比8.1%；三合一、多合一场所死亡2人，占比5.4%。
                        至早间10时为火灾的低发时段，平均每个时段发生火灾293起，但平均65起火灾造成1人死亡。
                    </span>
                </div>
            </div>
            <!-- <div class="accessory">
                <p>附件：1.亡人火灾情况</p>
                <p>2.刑事火灾情况</p>
            </div>
            <div class="ending">
                <p>贵州省消防总队</p>
                <p>2019年11月6日</p>
            </div>-->

            <!-- 分页按钮 -->
            <!-- <div class="pageRate">
                <el-pagination
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="currPage"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size="pageSize"
                    layout="total, sizes, prev, pager, next, jumper"
                    :total="total"
                ></el-pagination>
            </div>-->
        </div>
    </div>
</template>
<script>
// 引入头部的组件
import comHeader from "../components/comHeader";
import backHome from "../components/toHome";
import firetableCom from "./components/firetableCom";
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
        // this.getData();
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
        backHome,
        firetableCom
    }
};
</script>
<style lang="scss" >
</style>
