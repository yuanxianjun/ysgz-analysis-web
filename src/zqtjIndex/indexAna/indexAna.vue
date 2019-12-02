<template>
    <div id="calledAna">
        <com-header></com-header>
        <backHome></backHome>
        <div class="content-wrapper">
            <div class="header">
                <div class="header_left">
                    <!-- 退出按钮-->
                    <comOut></comOut>
                </div>
                <div class="header_middle">
                    <div class="dateDiv">
                        <el-date-picker
                            v-model="dateValue"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期"
                            class="hy_date_picker"
                            unlink-panels
                            :clearable="false"
                            @change="changeDate"
                            value-format="yyyy-MM-dd"
                        ></el-date-picker>
                        <div class="timer">
                            <img src="./assets/img/time.png" />
                        </div>
                    </div>
                    <div class="orgDiv">
                        <el-cascader
                            ref="cascaderRef"
                            popper-class="hy_cascader_custom"
                            expand-trigger="click"
                            :show-all-levels="false"
                            v-model="selectedOptions"
                            :options="orgTreeData"
                            :props="slectProps"
                            filterable
                            clearable
                            @change="changeOrgTreeid"
                        ></el-cascader>
                    </div>
                    <el-button class="customBtn" @click="postAll">查询</el-button>
                </div>
                <div class="header_right">
                    <el-row>
                        <el-col :span="8" class="elCol">
                            <div class="label">接警总量</div>
                            <div class="valueDiv">
                                <i class="value">{{sumData.total}}</i>
                                <span class="unit">起</span>
                            </div>
                        </el-col>
                        <el-col :span="8" class="elCol">
                            <div class="label">出动车辆</div>
                            <div class="valueDiv">
                                <i class="value">{{sumData.car}}</i>
                                <span class="unit">辆</span>
                            </div>
                        </el-col>
                        <el-col :span="8" class="elCol">
                            <div class="label">出动人员</div>
                            <div class="valueDiv">
                                <i class="value">{{sumData.person}}</i>
                                <span class="unit">人</span>
                            </div>
                        </el-col>
                    </el-row>
                </div>
            </div>
            <div class="content">
                <!-- 火灾扑救框 -->
                <div class="fireFightingAll">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>火灾扑救</label>
                    </div>
                    <div class="fireLiDiv">
                        <el-row>
                            <el-col :span="4" class="fireliBg">
                                <p class="fireTitle">火灾接警</p>
                                <p class="fireValue">
                                    <span class="number">{{fightFire_data.alarm}}</span>
                                    <span class="unit">起</span>
                                </p>
                            </el-col>
                            <el-col :span="4" class="fireliBg">
                                <p class="fireTitle">亡人火灾</p>
                                <p class="fireValue">
                                    <span class="number">{{fightFire_data.intensive }}</span>
                                    <span class="unit">起</span>
                                </p>
                            </el-col>
                            <el-col :span="4" class="fireliBg">
                                <p class="fireTitle">出动车辆</p>
                                <p class="fireValue">
                                    <span class="number">{{fightFire_data.car}}</span>
                                    <span class="unit">辆</span>
                                </p>
                            </el-col>
                            <el-col :span="4" class="fireliBg">
                                <p class="fireTitle">出动人员</p>
                                <p class="fireValue">
                                    <span class="number">{{fightFire_data.person}}</span>
                                    <span class="unit">人</span>
                                </p>
                            </el-col>
                            <el-col :span="4" class="fireliBg">
                                <p class="fireTitle">财产损失</p>
                                <p class="fireValue">
                                    <span class="number">{{fightFire_data.money}}</span>
                                    <span class="unit">万元</span>
                                </p>
                            </el-col>
                            <el-col :span="4" class="fireliBg">
                                <p class="fireTitle">抢救人员</p>
                                <p class="fireValue">
                                    <span class="number">{{fightFire_data.rescue}}</span>
                                    <span class="unit">人</span>
                                </p>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <!-- 火灾扑救框 -->
                <div class="areaFireDiv" v-if="boolFireAreaData">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>区域火灾扑救数量</label>
                    </div>
                    <div
                        class="chart"
                        v-loading="boolFireArea"
                        element-loading-background="rgba(0, 0, 0, 0.6)"
                    >
                        <div class="rescueChartCon">
                            <!-- 暂时弃用 @refresh="refreshList"-->
                            <detachment-com
                                v-if="!boolFireArea"
                                :statisData="fightFire_data.areaFireAnalysis"
                            ></detachment-com>
                        </div>
                    </div>
                </div>
                <!-- 火灾扑救描述框 -->
                <div class="fireFightingDescribe">
                    <div class="contentText">
                        <p>
                            2019年1月1日至2019年12月3日，全省共接报火灾
                            <span class="number">{{rescue_data.alarm }}</span>起，死亡
                            <span class="number">37</span>起，受伤
                            <span class="number">27</span>人，直接财产损失
                            <span class="number">{{rescue_data.money||0}}</span>万元，与去年同期相比，火灾起数上升
                            <span class="number">31.50%</span>
                            ，亡人数上升
                            <span class="number">19.35%</span>
                            ，伤人数上升
                            <span class="number">17.39%</span>
                            ，直接财产损失上升
                            <span class="number">20.46%</span>。
                        </p>
                    </div>
                </div>
                <!-- 火灾场所框 表格 -->
                <div class="firePlace">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>火灾分析(单位:起)</label>
                    </div>
                    <div class="tableBox">
                        <el-row class="rowDiv">
                            <el-col
                                :span="4"
                                class="tableCol"
                                v-for="(item,index) in firePlace"
                                :key="index"
                            >
                                <template>
                                    <div>
                                        <div class="title">{{item.name}}</div>
                                        <div class="number">{{item.num}}</div>
                                    </div>
                                </template>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <!-- 应急救援总数框 -->
                <div class="emergenceRescue">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>应急救援</label>
                    </div>
                    <div class="rescueOneCon">
                        <el-row>
                            <el-col :span="4">
                                <div class="rescueOneCon_div">
                                    <el-row>
                                        <el-col :span="10">
                                            <img src="./assets/img/应急救援.png" />
                                        </el-col>
                                        <el-col :span="14">
                                            <div style="display:inline-block;">
                                                <p class="rescueOneCon_title gradientFont">应急救援</p>
                                                <p>
                                                    <span class="number">{{rescue_data.alarm ||0}}</span>
                                                    <span class="unit">起</span>
                                                </p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="rescueOneCon_div">
                                    <el-row>
                                        <el-col :span="10">
                                            <img src="./assets/img/重大事故.png" />
                                        </el-col>
                                        <el-col :span="14">
                                            <div>
                                                <p class="rescueOneCon_title gradientFont">重大事故</p>
                                                <p>
                                                    <span
                                                        class="number"
                                                    >{{rescue_data.intensive||0}}</span>
                                                    <span class="unit">起</span>
                                                </p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>

                            <el-col :span="4">
                                <div class="rescueOneCon_div">
                                    <el-row>
                                        <el-col :span="10">
                                            <img src="./assets/img/出动车辆.png" />
                                        </el-col>
                                        <el-col :span="14">
                                            <div style="display:inline-block;">
                                                <p class="rescueOneCon_title gradientFont">出动车辆</p>
                                                <p>
                                                    <span class="number">{{rescue_data.car ||0 }}</span>
                                                    <span class="unit">辆次</span>
                                                </p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="rescueOneCon_div">
                                    <el-row>
                                        <el-col :span="10">
                                            <img src="./assets/img/出动人员.png" />
                                        </el-col>
                                        <el-col :span="14">
                                            <div>
                                                <p class="rescueOneCon_title gradientFont">出动人员</p>
                                                <p>
                                                    <span class="number">{{rescue_data.person ||0}}</span>
                                                    <span class="unit">人</span>
                                                </p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>

                            <el-col :span="4">
                                <div class="rescueOneCon_div">
                                    <el-row>
                                        <el-col :span="10">
                                            <img src="./assets/img/财产损失.png" />
                                        </el-col>
                                        <el-col :span="14">
                                            <div style="display:inline-block;">
                                                <p class="rescueOneCon_title gradientFont">财产损失</p>
                                                <p>
                                                    <span class="number">{{rescue_data.money ||0}}</span>
                                                    <span class="unit">万元</span>
                                                </p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                            <el-col :span="4">
                                <div class="rescueOneCon_div">
                                    <el-row>
                                        <el-col :span="10">
                                            <img src="./assets/img/抢救人员.png" />
                                        </el-col>
                                        <el-col :span="14">
                                            <div>
                                                <p class="rescueOneCon_title gradientFont">抢救人员</p>
                                                <p>
                                                    <span class="number">{{rescue_data.rescue || 0}}</span>
                                                    <span class="unit">人</span>
                                                </p>
                                            </div>
                                        </el-col>
                                    </el-row>
                                </div>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <!-- 区域应急救援统计框 -->
                <div class="areaFireDiv" v-if="boolDetach">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>区域应急救援数量</label>
                    </div>
                    <div
                        class="chart"
                        v-loading="bool"
                        element-loading-background="rgba(0, 0, 0, 0.6)"
                    >
                        <div class="rescueChartCon">
                            <!-- 暂时弃用 @refresh="refreshList" -->
                            <detachmentEmergencyCom v-if="!bool" :statisData="detachmentList"></detachmentEmergencyCom>
                        </div>
                    </div>
                </div>
                <!-- 应急救援描述框  -->
                <div class="fireFightingDescribe">
                    <div class="contentText">
                        <p>
                            2019年1月1日至2019年12月2日，全省共接报应急救援
                            <span
                                class="number"
                            >{{rescue_data.alarm||0}}</span>起，抢救人员3284
                            <span class="number">{{rescue_data.rescue||0}}</span>
                            人。与去年同期相比，应急救援起数上升
                            <span
                                class="number"
                            >16.97%</span>。财产损失其中群众遇险占比
                            <span class="number">49.96%</span>，交通事故占比
                            <span class="number">27.84%</span>，化学危险品事故占比
                            <span class="number">3.36%</span>，水旱灾害占比
                            <span class="number">4%</span>，建筑物坍塌占比
                            <span class="number">0.98%</span>，地质灾害占比
                            <span class="number">0.47%</span>，森林火灾占比
                            <span class="number">1.27%</span>。
                        </p>
                    </div>
                </div>
                <!-- 应急救援分析 列表 -->
                <div class="tableDiv">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>应急救援分析(单位:起)</label>
                    </div>
                    <div class="tableBox">
                        <el-row class="rowDiv" v-if="!bool">
                            <el-col
                                :span="4"
                                class="tableCol"
                                v-for="(item,index) in limitData(0,6)"
                                :key="index"
                            >
                                <template>
                                    <div @click="toNext(item)">
                                        <div class="title">{{item.name}}</div>
                                        <div class="number">{{item.value}}</div>
                                    </div>
                                </template>
                            </el-col>
                        </el-row>
                        <el-row class="rowDiv" v-if="!bool">
                            <el-col
                                :span="4"
                                class="tableCol"
                                v-for="(item,index) in limitData(6,12)"
                                :key="index"
                            >
                                <template>
                                    <div @click="toNext(item)">
                                        <div class="title">{{item.name}}</div>
                                        <div class="number">{{item.value}}</div>
                                    </div>
                                </template>
                            </el-col>
                        </el-row>
                        <el-row class="rowDiv" v-if="!bool">
                            <el-col
                                :span="4"
                                class="tableCol"
                                v-for="(item,index) in limitData(12,18)"
                                :key="index"
                            >
                                <template>
                                    <div @click="toNext(item)">
                                        <div class="title">{{item.name}}</div>
                                        <div class="number">{{item.value}}</div>
                                    </div>
                                </template>
                            </el-col>
                        </el-row>
                    </div>
                </div>
                <!-- 社会救助统计图 -->
                <div class="areaFireDiv" v-if="boolDetach">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>社会救助</label>
                    </div>
                    <div
                        class="chart"
                        v-loading="bool"
                        element-loading-background="rgba(0, 0, 0, 0.6)"
                    >
                        <div class="rescueChartCon">
                            <!-- 暂时弃用 @refresh="refreshList" :statisData="detachmentList" -->
                            <detachmentSocialCom></detachmentSocialCom>
                        </div>
                    </div>
                </div>
                <!-- 社会救助描述框  -->
                <div class="fireFightingDescribe">
                    <div class="contentText">
                        <p>
                            2019年1月1日至2019年12月1日，全省共接社会救助
                            <span class="number">5389</span> 起，与去年同期相比，社会救助起数上升
                            <span class="number">22.65%</span>。其中取马蜂窝占比
                            <span class="number">56.35%</span>，抓动物占比
                            <span class="number">13%</span>，开门占比
                            <span class="number">10.86%</span>，高空取物
                            <span class="number">1.69%</span>，送水
                            <span class="number">0.93%</span>，其它社会救助
                            <span class="number">17%</span>。
                        </p>
                    </div>
                </div>
                <!-- 社会救助查询列表 -->
                <div class="firePlace">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>社会救助(单位:起)</label>
                    </div>
                    <div class="tableBox">
                        <el-row class="rowDiv">
                            <el-col
                                :span="4"
                                class="tableCol"
                                v-for="(item,index) in social_data"
                                :key="index"
                            >
                                <template>
                                    <div>
                                        <div class="title">{{item.name}}</div>
                                        <div class="number">{{item.num}}</div>
                                    </div>
                                </template>
                            </el-col>
                        </el-row>
                    </div>
                </div>

                <!-- 公务执勤统计图 -->
                <div class="areaFireDiv" v-if="boolOfficial">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>公务执勤</label>
                    </div>
                    <div
                        class="chart"
                        v-loading="bool"
                        element-loading-background="rgba(0, 0, 0, 0.6)"
                    >
                        <div class="rescueChartCon">
                            <!-- 暂时弃用 @refresh="refreshList" v-if="!bool" :statisData="detachmentList" -->
                            <detachmentOfficialCom></detachmentOfficialCom>
                        </div>
                    </div>
                </div>
                <!-- 公务执勤描述框  -->
                <div class="fireFightingDescribe">
                    <div class="contentText">
                        <p>
                            2019年1月1日至2019年12月3日，全省共接社会救助
                            <span
                                class="number"
                            >{{rescue_data.alarm||0}}</span>
                            <span class="number">{{rescue_data.intensive||0}}</span>起，财产损失
                            <span class="number">{{rescue_data.money||0}}</span>万元，出动车辆
                            <span class="number">{{rescue_data.car||0}}</span>辆次，出动人员
                            <span class="number">{{rescue_data.person||0}}</span>人次，抢救人员
                            <span class="number">{{rescue_data.rescue||0}}</span>人。
                        </p>
                    </div>
                </div>
                <!-- 公务执勤查询列表 -->
                <div class="firePlace">
                    <div class="table-title">
                        <i class="title-i"></i>
                        <label>公务执勤(单位:起)</label>
                    </div>
                    <div class="tableBox">
                        <el-row class="rowDiv">
                            <el-col
                                :span="4"
                                class="tableCol"
                                v-for="(item,index) in official_data"
                                :key="index"
                            >
                                <template>
                                    <div>
                                        <div class="title">{{item.name}}</div>
                                        <div class="number">{{item.num}}</div>
                                    </div>
                                </template>
                            </el-col>
                        </el-row>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";
import comOut from "@/zqtjIndex/components/comOut";
import {
    rescueAnalysis,
    orgTreeUrl,
    info,
    fightFire,
    fireAnalysis,
    rescue
} from "../requestUrl";
import statisticeCom from "./components/statisticeCom.vue";
import detachmentCom from "./components/detachmentCom.vue";
import detachmentEmergencyCom from "./components/detachmentEmergencyCom.vue";
import detachmentSocialCom from "./components/detachmentSocialCom.vue";
import detachmentOfficialCom from "./components/detachmentOfficialCom.vue";
// import func from "d:/commandrescue/vue-temp/vue-editor-bridge";
export default {
    name: "emergency",
    components: {
        comHeader,
        backHome,
        comOut,
        statisticeCom,
        detachmentCom,
        detachmentEmergencyCom,
        detachmentSocialCom,
        detachmentOfficialCom
    },
    data() {
        return {
            bool: true,
            boolDetach: false,
            boolSocial: true,
            boolOfficial: true,
            //  区域火灾扑救遮罩
            boolFireArea: false,
            boolFireAreaData: true,
            userInfo: JSON.parse(window.localStorage.getItem("userInfo")),
            orgTreeId: "",
            dateValue: [],
            orgTreeData: [],
            slectProps: {
                label: "orgName",
                value: "orgTreeId",
                children: "orgTreeList",
                checkStrictly: true
            },
            selectedOptions: [],
            nameList: [],
            analysisList: [
                { name: "化学危险品事故", id: "020100000000", value: 0 },
                { name: "交通事故", id: "020300000000", value: 0 },
                { name: "地震及次生灾害", id: "020401000000", value: 0 },
                { name: "建筑物坍塌", id: "020200000000", value: 0 },
                { name: "重大安全生产事故", id: "020505000000", value: 0 },
                { name: "空难", id: "020508000000", value: 0 },
                { name: "爆炸及恐怖事件", id: "020509000000", value: 0 },
                { name: "群众遇险", id: "020600000000", value: 0 },
                { name: "水旱灾害", id: "水旱灾害", value: 0 },
                { name: "气象灾害", id: "020403000000", value: 0 },
                { name: "地质灾害", id: "020404000000", value: 0 },
                { name: "森林火灾", id: "020801000000", value: 0 },
                { name: "草原火灾", id: "020802000000", value: 0 },
                { name: "矿山事故", id: "020803000000", value: 0 },
                { name: "水上事故", id: "020604000000", value: 0 },
                { name: "重大污染事件", id: "020503000000", value: 0 },
                { name: "核与辐射事件", id: "020507000000", value: 0 },
                { name: "公共卫生事件", id: "020504000000", value: 0 }
            ],
            detachmentList: [],
            fightFire_data: {
                alarm: 0,
                intensive: 0,
                car: 0,
                person: 0,
                money: 0,
                rescue: 0,
                areaFireAnalysis: []
            },
            rescue_data: {},
            sumData: {
                car: 0,
                person: 0,
                total: 0
            },
            firePlace: {},
            // 社会救助表格数据
            social_data: [
                { name: "开门", num: "585" },
                { name: "取马蜂窝", num: "3037" },
                { name: "冲马路", num: "5" },
                { name: "送水", num: "50" },
                { name: "关水龙头", num: "3" },
                { name: "高空取物", num: "91" },
                { name: "抓动物", num: "700" },
                { name: "其他", num: "918" }
            ],
            // 公务执勤表格数据
            official_data: [
                { name: "元首保卫", num: "0" },
                { name: "我国国家元首", num: "0" },
                { name: "国外元首", num: "0" },
                { name: "重大会议", num: "13" },
                { name: "大型文体活动", num: "41" },
                { name: "大型展览会", num: "4" },
                { name: "其它", num: "260" }
            ]
        };
    },
    computed: {
        // 更新各个接口参数params
        params: function() {
            return {
                endDate: this.dateValue[1],
                orgTreeId: this.orgTreeId,
                startDate: this.dateValue[0]
            };
        }
    },
    created() {
        this.userInfo = {
            admin: false,
            areaId: "520102",
            areaName: "贵州",
            cityId: "520100",
            orgId: "213f9a43359c4ce7bfd998d983de24d8",
            orgName: "指挥中心",
            orgRole: "01",
            orgTree: "0100000052000000",
            roleName: "指挥员",
            userId: "2e9a5b91639b4d15a2aa0ba8c049b909",
            userName: "甘泉"
        };
        window.localStorage.setItem("userInfo", JSON.stringify(this.userInfo));
        this.localInfo_gd();
        this.orgTreeId = this.userInfo.orgTree;
        this.orgTree_gd(this.orgTreeId);
        this.dateDetail();
    },
    mounted() {
        this.postAll();
    },

    methods: {
        postAll() {
            // var index = this.selectedOptions.length - 1;
            // this.orgTreeId = this.selectedOptions[index];
            this.sumInfo_get();
            this.fightFire_get();
            this.fireAnalysis_get();
            this.rescueData_get();
            this.rescue_get();
        },

        // 火灾场所综合信息
        fireAnalysis_get() {
            this.axios({
                method: "post",
                url: fireAnalysis,
                data: this.params
            }).then(res => {
                this.firePlace = res.data.result;
            });
        },
        // 火灾扑救综合信息
        fightFire_get() {
            this.boolFireArea = true;
            this.axios({
                method: "post",
                url: fightFire,
                data: this.params
            }).then(res => {
                this.fightFire_data = res.data.result;
                this.boolFireArea = false;
                var judgeCondition = res.data.result.areaFireAnalysis;
                if (judgeCondition !== null) {
                    this.boolFireAreaData = true;
                } else if (judgeCondition == null) {
                    this.boolFireAreaData = false;
                }
            });
        },
        // 接警综合信息
        sumInfo_get() {
            this.axios({
                method: "post",
                url: info,
                data: this.params
            }).then(res => {
                var data = res.data.result;
                this.sumData.car = data.car ? data.car : 0;
                this.sumData.person = data.person ? data.person : 0;
                this.sumData.total = data.total ? data.total : 0;
            });
        },
        // 应急救援
        rescueData_get() {
            this.axios({
                method: "post",
                url: rescue,
                data: this.params
            }).then(res => {
                this.rescue_data = res.data.result;
            });
        },

        // 根据userId 查询
        localInfo_gd() {
            var hytoken = window.localStorage.getItem("hytoken");
            this.axios({
                method: "post",
                url: "/user/userInfo/?hytoken=" + hytoken
            }).then(res => {
                if (res.data && res.data.code === "success") {
                    var data = res.data.result || {};
                    if (data) {
                        this.resetSetItem("userInfo", JSON.stringify(data));
                        this.userInfo = data;
                    }
                } else if (res.data.code == 500) {
                    this.$message({
                        message: res.data.msg,
                        center: true,
                        type: "error"
                    });
                }
            });
        },
        // 跳转到区队的统计页面
        toNext(item) {
            if (item.value < 1) {
                return;
            }

            var jsonData = JSON.stringify([
                // { link: "indexAna.html", name: "应急救援数据" },
                { link: "calledAna.html", name: item.name }
            ]);
            window.localStorage.setItem("linkPageObj", jsonData);
            var dataJson = {
                dataName: item.name,
                dataId: item.id,
                dateValue: this.dateValue,
                orgTreeId: this.orgTreeId
            };
            window.localStorage.setItem("dataJson", JSON.stringify(dataJson));
            window.location.href = `calledAna.html`;
        },
        limitData(index, limit) {
            var data = this.analysisList;
            data = data.slice(index, limit);
            return data;
        },
        // refreshList(params) {
        //   var arr = this.selectedOptions;
        //   this.selectedOptions = [...arr, params.code];
        //   this.rescue_get();
        // },
        orgTree_gd(id) {
            this.axios({
                method: "get",
                url: orgTreeUrl + id
            }).then(res => {
                this.orgTreeData = [];
                this.orgTreeData.push(res.data.result);
                this.selectedOptions[0] = this.orgTreeData[0].orgTreeId;
            });
        },
        // 取消选中条件
        handleCancel() {
            this.dateDetail();
            this.selectedOptions = [];
        },
        // 处理日期
        dateDetail() {
            var curTimeYear = new Date().getFullYear(),
                curTimeMonth =
                    new Date().getMonth() + 1 < 10
                        ? "0" + (new Date().getMonth() + 1)
                        : new Date().getMonth() + 1,
                curTimeDay =
                    new Date().getDate() < 10
                        ? "0" + new Date().getDate()
                        : new Date().getDate();
            var nowDay = curTimeYear + "-" + curTimeMonth + "-" + curTimeDay,
                startDay = curTimeYear + "-" + "01" + "-" + "01";
            this.dateValue = [startDay, nowDay];
        },
        changeOrgTreeid(params) {
            var index = params.length;
            if (index > 0) {
                this.orgTreeId = params[index - 1];
            }
        },
        changeDate() {
            // console.log(this.dateValue);
        },
        // 分析列表
        rescue_get() {
            this.bool = true;
            this.axios({
                method: "post",
                url: rescueAnalysis,
                data: this.params
            }).then(res => {
                var data = res.data.result;
                // this.analysisList = Object.assign({}, this.analysisList);
                this.analysisList = [
                    { name: "化学危险品事故", id: "020100000000", value: 0 },
                    { name: "交通事故", id: "020300000000", value: 0 },
                    { name: "地震及次生灾害", id: "020401000000", value: 0 },
                    { name: "建筑物坍塌", id: "020200000000", value: 0 },
                    { name: "重大安全生产事故", id: "020505000000", value: 0 },
                    { name: "空难", id: "020508000000", value: 0 },
                    { name: "爆炸及恐怖事件", id: "020509000000", value: 0 },
                    { name: "群众遇险", id: "020600000000", value: 0 },
                    { name: "水旱灾害", id: "020402000000", value: 0 },
                    { name: "气象灾害", id: "020403000000", value: 0 },
                    { name: "地质灾害", id: "020404000000", value: 0 },
                    { name: "森林火灾", id: "020801000000", value: 0 },
                    { name: "草原火灾", id: "020802000000", value: 0 },
                    { name: "矿山事故", id: "020803000000", value: 0 },
                    { name: "水上事故", id: "020604000000", value: 0 },
                    { name: "重大污染事件", id: "020503000000", value: 0 },
                    { name: "核与辐射事件", id: "020507000000", value: 0 },
                    { name: "公共卫生事件", id: "020504000000", value: 0 }
                ];
                var floodsNum = 0;
                data.selfList.forEach(ele => {
                    for (let i = 0; i < 18; i++) {
                        if (ele.name == this.analysisList[i].id) {
                            this.analysisList[i].value = ele.num;
                        }
                    }
                });
                this.bool = false;
                if (data.areaList == null) {
                    this.boolDetach = false;
                } else {
                    this.boolDetach = true;
                    this.detachmentList = data.areaList;
                }
                // this.analysisList[8].value = floodsNum;
            });
        }
    },
    destroyed() {}
};
</script>
<style lang="scss" >
.el-input__inner {
    line-height: 0 !important;
}
.el-date-range-picker__header {
    color: #fff;
}
.hy_date_picker input::-webkit-input-placeholder {
    color: #00ccff !important;
    font-size: 24px;
    line-height: 30px;
}
.el-range-separator {
    color: #00ccff !important;
    font-size: 20px;
    line-height: 30px;
}
.hy_date_picker {
    font-family: "微软雅黑" !important;
    // background-color: #0a2d56 !important;
    background-color: transparent !important;
    color: white !important;
    // border: 1px solid #00b8ff !important;
    border: 1px solid transparent !important;
}
.el-date-editor .el-range__close-icon {
    font-size: 14px;
    color: #00ccff !important;
    width: 25px;
    display: inline-block;
    float: right;
    line-height: 30px;
}
.el-date-editor .el-range__icon {
    // font-size: 14px;
    // margin-left: -5px;
    // color: #00ccff !important;
    // float: left;
    // line-height: 30px;
    display: none;
}
.el-picker-panel {
    background-color: #041c3f !important;
    border: 1px solid #00b8ff !important;
    border: none !important;
    color: #fff;
    .el-date-range-picker .el-picker-panel__content {
        color: #fff;
    }
    .available {
        color: #fff;
    }
}
.el-year-table td .cell {
    width: 48px;
    height: 32px;
    display: block;
    line-height: 32px;
    color: #00ccff !important;
}
.el-month-table td .cell {
    width: 60px;
    height: 36px;
    display: block;
    line-height: 36px;
    color: #00ccff !important;
    margin: 0 auto;
    border-radius: 18px;
}
.el-date-table td.in-range div,
.el-date-table td.in-range div:hover,
.el-date-table.is-week-mode .el-date-table__row.current div,
.el-date-table.is-week-mode .el-date-table__row:hover div {
    background-color: #00ccff !important;
}
.el-date-range-picker__content.is-left {
    border-right: 1px solid #00b8ff !important;
}
.el-picker-panel__icon-btn {
    color: #fff !important;
}
.el-date-table th {
    color: #fff !important;
    border-bottom: solid 1px #00ccff !important;
}
/* 级联选择器的样式的样式 */
.hy_cascader_custom .el-cascader-menu .el-popper {
    border: none !important;
}
.hy_cascader_custom {
    border: none !important;
    font-family: "微软雅黑";
}
.el-cascader-menus {
    background: transparent !important;
}
.hy_cascader_custom .el-cascader-menu {
    display: inline-block;
    vertical-align: top;
    color: #fff;
    border-right: solid 1px #021739;
    background-color: #0a2d56;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 6px 0;
    min-width: 230px;
}
.el-cascader-node.is-selectable.in-active-path {
    color: #ffffff !important;
    background: rgba(0, 204, 255, 0.5);
}

.el-cascader-node:not(.is-disabled):hover {
    background: #00ccff !important;
}
.el-cascader-node:not(.is-disabled):focus,
.el-cascader-node:not(.is-disabled):hover {
    background-color: rgba(0, 204, 255, 0.3) !important;
}
.hy_cascader_custom .el-cascader-menu__item:hover,
.el-cascader-menu__item:focus:not(:active) {
    background-color: rgba(0, 204, 255, 0.3) !important;
}
.hy_cascader_custom .el-cascader-menu__item {
    font-size: 18px !important;
    padding: 8px 20px;
    position: relative;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #00ccff;
    height: 34px;
    line-height: 1.5;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
}
/* 右箭头 */
.el-cascader-menu__item--extensible:after {
    font-family: "element-icons";
    content: "\E6E0";
    font-size: 18px !important;
    color: #bfcbd9;
    position: absolute;
    right: 15px;
}

.hy_cascader_custom .el-cascader-menu__item:hover,
.el-cascader-menu__item:focus:not(:active) {
    background-color: rgba(0, 204, 255, 0.3) !important;
}

.el-cascader-menu__item:hover,
.el-cascader-menu__item:focus:not(:active) {
    background-color: rgba(0, 204, 255, 0.3) !important;
}

.hy_cascader_custom .el-cascader__label {
    background: linear-gradient(to bottom, #02f4fb, #0f84d4);
    -webkit-background-clip: text;
    color: #fff;
    padding-left: 30px;
}

.el-cascader-menu__item--extensible:after {
    color: #00ccff !important;
}

.hy_cascader_custom .el-cascader-menu__item:hover,
.el-cascader-menu__item:focus:not(:active) {
    background-color: rgba(0, 204, 255, 0.2) !important;
}
.hy_cascader_custom .el-cascader-menu__item.is-active {
    color: #ffff !important;
}
.el-cascader-menu__item.is-disabled {
    color: #c0c4cc;
    background-color: none;
    cursor: not-allowed;
}
.hy_cascader_custom .el-cascader-menu__item.is-disabled:hover {
    background-color: rgba(0, 204, 255, 0.2) !important;
}

.el-cascader__label {
    background: linear-gradient(to bottom, #02f4fb, #0f84d4) !important;
    -webkit-background-clip: text !important;
    color: #fff !important;
    padding-left: 30px !important;
}
.el-cascader .el-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px !important;
    top: 0px;
    text-align: center;
    color: #00ccff;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    pointer-events: none;
}
</style>