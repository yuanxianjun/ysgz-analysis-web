<template>
    <div id="indexAna">
        <com-header></com-header>
        <backHome></backHome>
        <div class="content-wrapper">
            <div class="header">
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
                    <el-button class="customBtn" @click="postAll(0)">查询</el-button>
                </div>
            </div>

            <div class="contentIndex" ref="contentIndex">
                <!-- 接警总量框 -->
                <div class="totalNum">
                    <el-row>
                        <el-col :span="7" class="colSide">
                            <div
                                v-for="(item,index) in countPercentData.slice(0,2)"
                                class="totalCol"
                            >
                                <div class="label">{{item.name}}</div>
                                <div class="contentValue">
                                    <div class="valueDiv">
                                        <span class="valueName">数量：</span>
                                        <span class="value">{{item.count}}</span>
                                    </div>
                                    <div class="cutLine"></div>
                                    <div class="valueDiv">
                                        <span class="valueName" style="text-indent:30px;">占比：</span>
                                        <span class="value yellowColor">{{item.percentage}}%</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>

                        <el-col :span="10" class="totalColBig">
                            <div class="label">接警总量</div>
                            <div class="valueDiv">
                                <span class="valueAll">{{statisticalData.total}}</span>
                                <span class="unit">起</span>
                            </div>
                        </el-col>

                        <el-col :span="7" class="colSide">
                            <div
                                v-for="(item,index) in countPercentData.slice(2,4)"
                                class="totalCol"
                            >
                                <div class="label">{{item.name}}</div>
                                <div class="contentValue">
                                    <div class="valueDiv">
                                        <span class="valueName">数量：</span>
                                        <span class="value">{{item.count}}</span>
                                    </div>
                                    <div class="cutLine"></div>
                                    <div class="valueDiv">
                                        <span class="valueName" style="text-indent:30px;">占比：</span>
                                        <span class="value yellowColor">{{item.percentage}}%</span>
                                    </div>
                                </div>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <!-- 接警总量的表格 -->
                <div class="indexTableDiv">
                    <table-com ref="indexTable" v-if="showCon" :mockData="mockData"></table-com>
                </div>
                <!-- 火灾扑救模块 -->
                <div class="fire">
                    <div class="table-title1">火灾扑救</div>
                    <!-- 火灾扑救描述框 -->
                    <div class="fireFightingDescribe">
                        <div class="contentText">
                            <p>
                                {{this.dateValue[0]}} 至 {{this.dateValue[1]}}，全省共接报火灾
                                <span
                                    class="number"
                                >{{fightFire_data.alarm }}</span>起，死亡
                                <!-- {{fightFire_data.die }} -->
                                <span class="number">39</span>人，受伤
                                <span class="number">{{fightFire_data.injured }}</span>人，直接财产损失
                                <span class="number">{{fightFire_data.money||0}}</span>万元，与去年同期相比，火灾起数上升
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
                    <!-- 火灾扑救框 -->
                    <div class="fireFightingAll">
                        <div class="fireLiDiv">
                            <el-row>
                                <el-col :span="4" class="fireliBg">
                                    <div @click="toFire('火灾接警',fightFire_data.alarm,'fireReport')">
                                        <p class="fireTitle">火灾接警</p>
                                        <p class="fireValue">
                                            <span class="number">{{fightFire_data.alarm}}</span>
                                            <span class="unit">起</span>
                                        </p>
                                    </div>
                                </el-col>

                                <el-col :span="4" class="fireliBg">
                                    <div
                                        @click="toFire('亡人火灾',fightFire_data.intensive,'namesFire')"
                                    >
                                        <p class="fireTitle">亡人火灾</p>
                                        <p class="fireValue">
                                            <span class="number">{{fightFire_data.intensive}}</span>
                                            <span class="unit">起</span>
                                        </p>
                                    </div>
                                </el-col>

                                <el-col :span="4" class="fireliBg">
                                    <p class="fireTitle">死亡人数</p>
                                    <p class="fireValue">
                                        <!-- {{fightFire_data.die}} -->
                                        <span class="number">39</span>
                                        <span class="unit">人</span>
                                    </p>
                                </el-col>
                                <el-col :span="4" class="fireliBg">
                                    <p class="fireTitle">受伤人数</p>
                                    <p class="fireValue">
                                        <span class="number">{{fightFire_data.injured}}</span>
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
                    <div class="areaFireDiv" v-if="boolDetach">
                        <div class="table-title">
                            <i class="title-i"></i>
                            <label>区域火灾扑救数量</label>
                        </div>
                        <div
                            class="chart"
                            v-loading="bool"
                            element-loading-background="rgba(0, 0, 0, 0.6)"
                        >
                            <div class="rescueChartCon">
                                <!-- 暂时弃用 @refresh="refreshList"-->
                                <detachment-com
                                    v-if="statisticalData.fireList"
                                    :statisData="statisticalData.fireList"
                                ></detachment-com>
                            </div>
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
                                    :span="6"
                                    class="tableCol"
                                    v-for="(item,index) in firePlaceData.fireList"
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
                <!-- 抢险救援模块 -->
                <div class="emergency">
                    <div class="table-title1">抢险救援</div>
                    <!-- 抢险救援描述框  -->
                    <div class="fireFightingDescribe">
                        <div class="contentText">
                            <p>
                                {{this.dateValue[0]}} 至 {{this.dateValue[1]}}，全省共接报抢险救援
                                <span
                                    class="number"
                                >{{rescue_data.alarm||0}}</span>起，抢救人员
                                <span class="number">{{rescue_data.rescue||0}}</span>
                                人。与去年同期相比，抢险救援起数上升
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
                    <!-- 抢险救援总数框 -->
                    <div class="emergenceRescue">
                        <div class="rescueOneCon">
                            <el-row>
                                <el-col :span="5">
                                    <div class="rescueOneCon_div">
                                        <el-row>
                                            <el-col :span="8" class="imgDiv">
                                                <img src="./assets/img/emergency.png" />
                                            </el-col>
                                            <el-col :span="16">
                                                <div style="display:inline-block;">
                                                    <p class="rescueOneCon_title gradientFont">抢险救援</p>
                                                    <p>
                                                        <span
                                                            class="number"
                                                        >{{rescue_data.alarm ||0}}</span>
                                                        <span class="unit">起</span>
                                                    </p>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>

                                <el-col :span="5">
                                    <div class="rescueOneCon_div">
                                        <el-row>
                                            <el-col :span="8" class="imgDiv">
                                                <img src="./assets/img/outCar.png" />
                                            </el-col>
                                            <el-col :span="16">
                                                <div style="display:inline-block;">
                                                    <p class="rescueOneCon_title gradientFont">出动车辆</p>
                                                    <p>
                                                        <span
                                                            class="number"
                                                        >{{rescue_data.car ||0 }}</span>
                                                        <span class="unit">辆次</span>
                                                    </p>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>
                                <el-col :span="5">
                                    <div class="rescueOneCon_div">
                                        <el-row>
                                            <el-col :span="8" class="imgDiv">
                                                <img src="./assets/img/outPeo.png" />
                                            </el-col>
                                            <el-col :span="16">
                                                <div>
                                                    <p class="rescueOneCon_title gradientFont">出动人员</p>
                                                    <p>
                                                        <span
                                                            class="number"
                                                        >{{rescue_data.person ||0}}</span>
                                                        <span class="unit">人</span>
                                                    </p>
                                                </div>
                                            </el-col>
                                        </el-row>
                                    </div>
                                </el-col>

                                <el-col :span="5">
                                    <div class="rescueOneCon_div">
                                        <el-row>
                                            <el-col :span="8" class="imgDiv">
                                                <img src="./assets/img/财产损失.png" />
                                            </el-col>
                                            <el-col :span="16">
                                                <div style="display:inline-block;">
                                                    <p class="rescueOneCon_title gradientFont">财产损失</p>
                                                    <p>
                                                        <span
                                                            class="number"
                                                        >{{rescue_data.money ||0}}</span>
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
                                            <el-col :span="8">
                                                <img src="./assets/img/抢救人员.png" />
                                            </el-col>
                                            <el-col :span="16">
                                                <div>
                                                    <p class="rescueOneCon_title gradientFont">抢救人员</p>
                                                    <p>
                                                        <span
                                                            class="number"
                                                        >{{rescue_data.rescue || 0}}</span>
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
                    <!-- 区域抢险救援统计框 -->
                    <div class="areaFireDiv" v-if="boolDetach">
                        <div class="table-title">
                            <i class="title-i"></i>
                            <label>区域抢险救援数量</label>
                        </div>
                        <div
                            class="chart"
                            v-loading="bool"
                            element-loading-background="rgba(0, 0, 0, 0.6)"
                        >
                            <div class="rescueChartCon">
                                <!-- 暂时弃用 @refresh="refreshList" -->
                                <detachmentEmergencyCom
                                    v-if="statisticalData.rescueList"
                                    :rescueProp="statisticalData.rescueList"
                                ></detachmentEmergencyCom>
                            </div>
                        </div>
                    </div>

                    <!-- 抢险救援分析 列表 -->
                    <div class="tableDiv">
                        <div class="table-title">
                            <i class="title-i"></i>
                            <label>抢险救援分析(单位:起)</label>
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
                                        <div @click="toNext(item,'抢险救援')">
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
                                        <div @click="toNext(item,'抢险救援')">
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
                                        <div @click="toNext(item,'抢险救援')">
                                            <div class="title">{{item.name}}</div>
                                            <div class="number">{{item.value}}</div>
                                        </div>
                                    </template>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 社会救助模块 -->
                <div class="social">
                    <div class="table-title1">社会救助</div>
                    <!-- 社会救助描述框  -->
                    <div class="fireFightingDescribe">
                        <div class="contentText">
                            <p>
                                {{this.dateValue[0]}} 至 {{this.dateValue[1]}}，全省共接社会救助
                                <span
                                    class="number"
                                >{{countPercentData[2]['count']}}</span> 起，与去年同期相比，社会救助起数上升
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
                    <!-- 社会救助统计图 -->
                    <div class="areaFireDiv" v-if="boolDetach">
                        <div
                            class="chart"
                            v-loading="bool"
                            element-loading-background="rgba(0, 0, 0, 0.6)"
                        >
                            <div class="rescueChartCon">
                                <!-- 暂时弃用 @refresh="refreshList"  -->
                                <detachmentSocialCom
                                    v-if="statisticalData.socialList"
                                    :socialData="statisticalData.socialList"
                                ></detachmentSocialCom>
                            </div>
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
                                    :span="6"
                                    class="tableCol"
                                    v-for="(item,index) in firePlaceData.socialList"
                                    :key="index"
                                >
                                    <template>
                                        <div @click="toNext(item,'社会救助')">
                                            <div class="title">{{item.name}}</div>
                                            <div class="number">{{item.num}}</div>
                                        </div>
                                    </template>
                                </el-col>
                            </el-row>
                        </div>
                    </div>
                </div>
                <!-- 公务执勤 -->
                <div class="office">
                    <div class="table-title1">公务执勤</div>
                    <!-- 公务执勤描述框  -->
                    <div class="fireFightingDescribe">
                        <div class="contentText">
                            <p>
                                {{this.dateValue[0]}} 至 {{this.dateValue[1]}}，全省共接公务执勤
                                <span
                                    class="number"
                                >{{countPercentData[3]['count']}}</span>起，与去年同期相比，出动数上升
                                <span class="number">1225%</span>。其中，其它公务执勤出动占比
                                <span class="number">81.76%</span>，重大会议占比
                                <span class="number">4.09%</span>，大型文体活动占比
                                <span class="number">12.89%</span>，大型展览会占比
                                <span class="number">1.26%</span>。
                            </p>
                        </div>
                    </div>
                    <!-- 公务执勤统计图 -->
                    <div class="areaFireDiv" v-if="boolDetach">
                        <div
                            class="chart"
                            v-loading="bool"
                            element-loading-background="rgba(0, 0, 0, 0.6)"
                        >
                            <div class="rescueChartCon">
                                <!-- 暂时弃用 @refresh="refreshList"  -->
                                <detachmentOfficialCom
                                    v-if="statisticalData.dutyList"
                                    :officialData="statisticalData.dutyList"
                                ></detachmentOfficialCom>
                            </div>
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
                                    v-for="(item,index) in firePlaceData.dutyList"
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
    </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";
import tableCom from "./components/tableCom";
import {
    rescueAnalysis,
    orgTreeUrl,
    info,
    fightFire,
    fireAnalysis,
    rescue,
    alarmType,
    alarmTypeCity
} from "../requestUrl";
import statisticeCom from "./components/statisticeCom.vue";
import detachmentCom from "./components/detachmentCom.vue";
import detachmentEmergencyCom from "./components/detachmentEmergencyCom.vue";
import detachmentSocialCom from "./components/detachmentSocialCom.vue";
import detachmentOfficialCom from "./components/detachmentOfficialCom.vue";
import QS from "qs";
export default {
    name: "emergency",
    components: {
        comHeader,
        backHome,
        statisticeCom,
        detachmentCom,
        detachmentEmergencyCom,
        detachmentSocialCom,
        detachmentOfficialCom,
        tableCom
    },
    data() {
        return {
            // 表格数据
            showOut: true,
            showCon: false,
            mockData: [],
            // 统计图数据
            statisticalData: {
                fireList: null, //火灾扑救
                rescueList: null, //抢险救援
                socialList: null, //社会救助
                dutyList: null, //公务执勤,
                total: 0
            },
            // 四种类型的总数 以及占比 从左向右
            countPercentData: [
                { count: 0 },
                { count: 0 },
                { count: 0 },
                { count: 0 }
            ],
            bool: true,
            boolDetach: true,
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
                { name: "建筑物坍塌事故", id: "020200000000", value: 0 },
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
            fightFire_data: {
                alarm: 0,
                intensive: 0,
                money: 0,
                rescue: 0,
                die: 0,
                injured: 0,
                areaFireAnalysis: []
            },
            rescue_data: {
                alarm: 0
            },

            firePlaceData: {
                fireList: [],
                dutyList: [],
                socialList: []
            }
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
        this.getCurrTime();
    },
    mounted() {
        //部署删除或者注释
        // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        /*

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
        this.orgTreeId = this.userInfo.orgTree;
        this.orgTree_gd(this.orgTreeId);
        this.dateDetail();
        this.postAll();
*/
        //>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
        this.localInfo_gd();
    },
    updated() {
        this.movePos();
    },
    methods: {
        getCurrTime() {
            let time = new Date();
            let year, month, day, hour, min, sec;
            year = time.getFullYear();
            month =
                time.getMonth() + 1 < 10
                    ? "0" + (time.getMonth() + 1)
                    : time.getMonth() + 1;
            day = time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
            return year + "年" + month + "月" + day + "日";
        },
        postAll(val) {
            var dataJson;
            if (val == 0) {
                dataJson = {
                    dateValue: this.dateValue,
                    orgTreeId: this.orgTreeId,
                    contentPos: 0
                };
                window.localStorage.setItem(
                    "dataJson",
                    JSON.stringify(dataJson)
                );
            }

            this.fireAnalysis_get();
            this.rescue_get();
            // this.alarmType_get();
            // console.log(this.$refs.indexTable.getData());
            var _ = this;
            // 火灾扑救综合信息
            var fightFire_get = () => {
                this.axios({
                    method: "post",
                    url: fightFire,
                    data: this.params
                }).then(res => {
                    this.fightFire_data = res.data.result;
                });
            };

            // 抢险救援  18项列表
            var rescueData_get = () => {
                this.axios({
                    method: "post",
                    url: rescue,
                    data: this.params
                }).then(res => {
                    this.rescue_data = res.data.result;
                });
            };
            rescueData_get();
            fightFire_get();
            this.axios.all([_.alarmType_get(), _.getTableData()]).then(
                _.axios.spread((res1, res2) => {
                    //
                    /**
                     * 全省合计的第一条数据
                     * @param{string} startDate开始时间
                     * @param{String} endDate  结束时间
                     * @param{o}firstData 处理好的数据格式
                     *  */
                    var startDate = _.dateValue[0].slice(0, 7),
                        endDate = _.dateValue[1].slice(0, 7),
                        sum = 0,
                        allName = "";
                    _.countPercentData.forEach(item => {
                        sum += item.count * 1;
                    });
                    if (this.orgTreeId.length == 16) {
                        allName ="全省合计"
                    } else if(this.orgTreeId.length == "24") {
                        allName ="全市合计"
                    }
                    var firstData = {
                        area: startDate + "-" + endDate + allName,
                        total: sum,
                        fire: _.countPercentData[0].count,
                        rescue: _.countPercentData[1].count,
                        social: _.countPercentData[2].count,
                        duty: _.countPercentData[3].count
                    };
                    if (_.mockData.length > 0) {
                        _.mockData.unshift(firstData);
                        _.showCon = true;
                    } else {
                        _.showCon = false;
                    }
                })
            );
        },
        // 获取表格数据
        getTableData() {
            return this.axios({
                method: "post",
                url: alarmTypeCity,
                data: this.params
            }).then(res => {
                var data = res.data.result;
                this.mockData = data;
            });
        },
        // 火灾场所综合信息
        fireAnalysis_get() {
            this.axios({
                method: "post",
                url: fireAnalysis,
                data: this.params
            }).then(res => {
                /**
                 * @param{Array} fireList:火灾扑救,
                 * @param{Array} socialList:社会救助,
                 * @param{Array} dutyList:公务执勤
                 * */
                this.firePlaceData = res.data.result;
            });
        },
        // 根据userId 查询
        localInfo_gd() {
            var hytoken = window.localStorage.getItem("hytoken");
            this.axios({
                method: "post",
                url: "/user/userInfo?hytoken=" + hytoken
            }).then(res => {
                if (res.data && res.data.code === "success") {
                    var data = res.data.result || {};
                    if (data) {
                        this.resetSetItem("userInfo", JSON.stringify(data));
                        this.userInfo = data;
                    }
                    this.orgTreeId = this.userInfo.orgTree;
                    this.orgTree_gd(this.orgTreeId);
                    this.dateDetail();
                    this.postAll();
                } else if (res.data.code == 500) {
                    this.$message({
                        message: res.data.msg,
                        center: true,
                        type: "error"
                    });
                }
            });
        },
        // 刚入页面的时候跳转到哪个位置
        movePos() {
            let distance = 0,
                dataJson = JSON.parse(localStorage.getItem("dataJson"));
            if (dataJson) {
                distance = dataJson.contentPos || 0;
            }
            // 控制移动
            document.querySelector(".contentIndex").scrollTo(0, distance);
        },
        // 跳转到区队的统计页面
        toNext(item, typeName) {
            if (item.value < 1 || item.num < 1) {
                return;
            }
            var jsonData = JSON.stringify([
                // { link: "indexAna.html", name: "抢险救援数据" },
                { link: "calledAna.html", name: item.name }
            ]);
            window.localStorage.setItem("linkPageObj", jsonData);
            var dataJson = {
                dataName: item.name,
                dataId: item.id || item.code,
                dateValue: this.dateValue,
                orgTreeId: this.orgTreeId,
                typeName: typeName,
                contentPos: this.$refs["contentIndex"].scrollTop
            };
            window.localStorage.setItem("dataJson", JSON.stringify(dataJson));
            window.location.href = `calledAna.html`;
        },
        /**
         * 方法说明
         * @method toFire
         * @for 火灾扑救二级页
         * @param {string} name 火灾扑救类型
         * @param {value} value 火灾扑救类型
         * @param {String} linkPage 火灾扑救类型
         *  */

        // 跳转到亡人火灾详细列表页面
        toFire(name, value, linkPage) {
            // 没有火灾则不跳转
            if (value < 1) {
                return;
            }

            var dataJson = {
                dataName: name,
                dataId: "0",
                dateValue: this.dateValue,
                orgTreeId: this.orgTreeId
            };
            window.localStorage.setItem("dataJson", JSON.stringify(dataJson));

            if (name == "亡人火灾") {
                var jsonData = JSON.stringify([
                    // { link: "indexAna.html", name: "抢险救援数据" },
                    { link: "namesFire.html", name: name }
                ]);
                window.localStorage.setItem("linkPageObj", jsonData);
                window.location.href = "namesFire.html";
            } else if (name == "火灾接警") {
                var jsonData = JSON.stringify([
                    // { link: "indexAna.html", name: "抢险救援数据" },
                    { link: "fireReport.html", name: name }
                ]);
                window.localStorage.setItem("linkPageObj", jsonData);
                window.location.href = "fireReport.html";
            }
            // console.log(`${linkPage}.html`);
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
                    { name: "建筑物坍塌事故", id: "020200000000", value: 0 },
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
            });
        },
        // 接警分析 统计信息
        alarmType_get() {
            this.bool = true;
            this.boolDetach = false;
            return this.axios({
                method: "post",
                url: alarmType,
                data: this.params
            }).then(res => {
                var data = res.data.result;
                this.bool = false;

                // 火灾扑救 统计图数据
                this.statisticalData.fireList = data.fireList;
                // 抢险救援 统计图数据
                this.statisticalData.rescueList = data.rescueList;
                // 社会救助 统计图数据
                this.statisticalData.socialList = data.socialList;
                // 公务执勤 统计图数据
                this.statisticalData.dutyList = data.dutyList;

                // 火灾扑救的数量和占比
                var nameList = ["火灾扑救", "抢险救援", "社会救助", "公务执勤"];
                this.countPercentData = data.dataList.map((item, index) => {
                    item["name"] = nameList[index];
                    return item;
                });

                // 接警总量
                this.statisticalData.total = data.total;

                if (!data.fireList) {
                    this.boolDetach = false;
                } else {
                    this.boolDetach = true;
                }
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