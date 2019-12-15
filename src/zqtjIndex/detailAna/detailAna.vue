<template>
    <div id="zqtjIndex">
        <com-header></com-header>
        <backHome></backHome>
        <div class="header">
            <div class="header_left">
                <!-- 退出按钮  -->
            </div>
            <div class="header_right">
                <!-- 分析按钮 -->
                <el-button class="buttonPos" @click="showGif">
                    <img src="../../common/images/anaButton.png" alt />
                </el-button>
            </div>
        </div>
        <div class="detailContent">
            <el-table
                :data="detailData"
                border
                height="800"
                :span-method="arraySpanMethod"
                :header-cell-class-name="thHeader"
                style="width: 100%;"
                v-loading="loadTable"
                element-loading-background="rgba(0, 0, 0, 0.6)"
            >
                <el-table-column
                    v-for="(item,i) in headerData"
                    :key="i"
                    :prop="item.code"
                    :label="item.name"
                    :width="item.width"
                    align="center"
                ></el-table-column>
            </el-table>
        </div>
        <boll-search v-if="showBoll"></boll-search>
        <mask-box v-if="showBigModel" @closeMaskBox="closeMaskBox"></mask-box>
    </div>
</template>
<script>
import comHeader from "@/zqtjIndex/components/comHeader";
import backHome from "@/zqtjIndex/components/toHome";

// import quData from "../../common/json/qu";
import bollSearch from "../components/doScheduling";
import maskBox from "../components/maskBox";
import { rsaa, disasterAnalysisArea } from "../requestUrl";
export default {
    name: "zqtjIndex",
    data() {
        return {
            loadTable: true,
            showBigModel: false,
            showBoll: false,
            detailData: [],
            detailsType: "",
            areaInterval: [],
            headerData: [],
            dataJson: JSON.parse(window.localStorage.getItem("dataJson"))
        };
    },
    components: {
        comHeader,
        backHome,
        bollSearch,
        maskBox
    },
    created() {
        // if (this.dataJson.dataName == "交通事故") {
        //   this.detailsType = "boolTraffic";
        //   this.detailData = quData.trafficeData;
        // } else if (this.dataJson.dataName == "群众遇险") {
        //   this.detailsType = "boolPeople";
        //   this.detailData = quData.savePeploeData;
        // } else if (this.dataJson.dataName == "化学危险品事故") {
        //   this.detailsType = "boolDanger";
        //   this.detailData = quData.dangerData;
        // } else if (this.dataJson.dataName == "水旱灾害") {
        //   this.detailsType = "boolNatrue";
        //   this.detailData = quData.natureData;
        // }
    },
    mounted() {
        this.judgeType();
    },
    methods: {
        // 判断是否是哪个类型的数据
        judgeType() {
            var type = this.dataJson.typeName,
                url,
                data;
            data = {
                endDate: this.dataJson.dateValue[1],
                startDate: this.dataJson.dateValue[0],
                typeId: this.dataJson.dataId,
                orgTreeId: this.dataJson.orgTreeId
            };
            if (type == "抢险救援") {
                url = rsaa;
            } else if (type == "社会救助") {
                url = disasterAnalysisArea;
            }
            this.getData(url, data);
        },
        // 获取表格数据
        getData(url, data) {
            this.axios({
                method: "post",
                url,
                data
            }).then(res => {
                this.loadTable = false;
                var resTitleData = res.data.result.titleList;
                this.headerData = resTitleData;
                this.detailData = res.data.result.mapList;
                this.createTable(this.detailData);
            });
        },
        // 显示加载中的动画
        showGif() {
            this.showBoll = true;
            setTimeout(() => {
                this.showBoll = false;
                this.showBigModel = true;
            }, 2000);
        },
        closeMaskBox() {
            this.showBigModel = false;
        },
        arraySpanMethod({ row, column, rowIndex, columnIndex }) {
            if (rowIndex === 0) {
                if (columnIndex === 0) {
                    return [1, 2];
                } else if (columnIndex === 1) {
                    return [0, 0];
                }
            } else {
                // 如果当前行包括小计 并且是第一列
                if (
                    (row.area == "小计" && columnIndex == 0) ||
                    (rowIndex == 1 && columnIndex == 0)
                ) {
                    // 循环区域组成的数据列表 如果城市名字等于数据名字就合并当前行
                    for (let i = 0; this.areaInterval.length; i++) {
                        if (row.city == this.areaInterval[i].name) {
                            return {
                                rowspan: this.areaInterval[i].index,
                                colspan: 1
                            };
                            break;
                        }
                    }
                } else if (row.area !== "小计" && columnIndex == 0) {
                    return {
                        rowspan: 0,
                        colspan: 0
                    };
                }
            }
        },
        thHeader({ row, column, rowIndex, columnIndex }) {
            if (columnIndex === 0) {
                return "rightHeader";
            } else if (columnIndex === 1) {
                return "leftHeader";
            }
        },
        // 创建表格
        createTable(data) {
            let arr = [];
            data.forEach((item, i) => {
                if (item.city.indexOf("合计") == -1) {
                    arr.push({
                        name: item.city,
                        index: i
                    });
                }
            });
            function unique(arr) {
                let obj = {};
                let newArr = arr.reduce((cur, next) => {
                    obj[next.name]
                        ? ""
                        : (obj[next.name] = true && cur.push(next));
                    return cur;
                }, []);
                return newArr;
            }
            arr = unique(arr);
            this.areaInterval = [];
            arr.push({
                index: data.length
            });
            for (let i = arr.length - 1; i > 0; i--) {
                this.areaInterval.push({
                    name: arr[i - 1].name,
                    index: arr[i].index - arr[i - 1].index
                });
            }
            var data = this.areaInterval.reverse();
        }
    },
    destroyed() {}
};
</script>
<style lang="scss" >
@font-face {
    font-family: "numberFont"; //数组字体
    src: url("../../common/fonts/290-CAI978.TTF");
}
#zqtjIndex {
    position: relative;
    color: white;
    padding-bottom: 21px;
    width: 1920px;
    height: 1080px;
    //   overflow: hidden;
    background-image: url(../../common/images/background.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    .detailContent {
        width: 100%;
        padding: 40px;
        overflow: auto;
        
        
        .rightHeader {
            text-align: right;
            border-right: 0px !important;
            // padding: 0;
            .cell {
                padding-right: 0;
            }
        }
        .leftHeader {
            text-align: left;
            .cell {
                padding-left: 0;
            }
        }
    }
}
@media screen and (width: 1920px) {
    html {
        overflow-x: hidden !important;
    }
}
.buttonPos {
    width: 150px;
    height: 45px;
    background: transparent;
    border: none !important;
    padding: 0 !important;
    position: absolute;
    // top: 130px;
    right: 0px;
}
.header {
    width: 100%;
    height: 100px;
    padding: 0px 40px;
    padding-left: 0px;
    box-sizing: border-box;
    position: relative;
    top: 40px;
    .header_left {
        float: left;
    }
    .header_right {
        float: right;
        position: absolute;
        right: 40px;
        top: 30px;
        .detailButton {
            margin-right: 40px;
        }
        .buttonPos {
            width: 150px;
            height: 45px;
            background: transparent;
            border: none;
            padding: 0;
        }
    }
}
</style>