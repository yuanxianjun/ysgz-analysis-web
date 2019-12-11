<template>
    <div class="topHeader">
        <div class="logo">
            <img src="../../common/images/logo_title.png" />
        </div>
        <div class="big_title">
            <img src="../../common/images/title_text.png" alt />
        </div>
        <comOut></comOut>
        <!-- <div class="weather">
      <div class="sweater-box">
        <span class="date">{{curDate}}</span>
        <span class="week">{{curWeek}}</span>
        <span class="time" v-html="curTime"></span>
      </div>
        </div>-->
    </div>
</template>
<script>
import comOut from "./comOut1";
export default {
    name: "comHeader",
    data() {
        return {
            curTime: "",
            curDate: "",
            curWeek: "",
            serveTime: ""
        };
    },
    components: {
        comOut
    },
    watch: {},
    created() {},
    mounted() {
        // console.log(this.serveTime, "this.serverTIme");
        this.getServeTime_gd();
    },
    methods: {
        getServeTime_gd() {
            this.getCurrTime();
        },
        // 获取时间
        getCurrTime() {
            let _this = this,
                timer = null,
                time = "",
                timeTemp = "";
            if (_this.serveTime) {
                time = new Date(_this.serveTime);
            } else {
                time = new Date();
            }
            clearInterval(timer);
            timer = setInterval(function() {
                let year, month, day, hour, min, sec, week;
                year = time.getFullYear();
                month =
                    time.getMonth() + 1 < 10
                        ? "0" + (time.getMonth() + 1)
                        : time.getMonth() + 1;

                day =
                    time.getDate() < 10 ? "0" + time.getDate() : time.getDate();
                hour =
                    time.getHours() < 10
                        ? "0" + time.getHours()
                        : time.getHours();
                min =
                    time.getMinutes() < 10
                        ? "0" + time.getMinutes()
                        : time.getMinutes();
                sec =
                    time.getSeconds() < 10
                        ? "0" + time.getSeconds()
                        : time.getSeconds();
                let timeStr =
                    hour +
                    "<span style='font-family:微软雅黑'> : </span>" +
                    min;
                week = time.getDay();
                // console.log(time.getDay(), "查看getDay");

                _this.curTime = timeStr;
                _this.curDate = year + "-" + month + "-" + day;
                _this.curWeek =
                    "星 期 " + ["日", "一", "二", "三", "四", "五", "六"][week];
                timeTemp = time.setSeconds(time.getSeconds() + 1);
                time = new Date(timeTemp);
            }, 1000);
        }
    }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../common/styles/font.css";
#comHeader {
    font-family: "ROME";
}
#fontPutong {
    font-family: "微软雅黑" !important;
}
.topHeader {
    width: 100%;
    height: 90px;
    position: relative;
    overflow: hidden;
    background: url("../../common/images/heaer_backgroung.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: "ROME";
    .logo {
        cursor: pointer;
        margin-top: 15px;
        position: absolute;
        left: 40px;
    }
    .big_title {
        text-align: center;
        img {
            margin-top: 10px;
        }
    }
    .weather {
        position: absolute;
        right: 40px;
        top: 5px;
        text-align: right;
        line-height: 50px;

        overflow: hidden;
        .sweater-box {
            color: #0ab7ff;
            width: 400px;
            text-align: right;
            float: right;
            font-size: 22px;
            padding-right: 2px;
            span {
                margin-left: 20px;
                display: inline-block;
            }
        }
    }
}
</style>
