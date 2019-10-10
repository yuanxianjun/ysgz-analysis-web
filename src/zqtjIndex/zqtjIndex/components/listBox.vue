<template>
    <div id='listBox'>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for='(item,i) in taskList' :key='i'>
                    <div :class='item.onCls=="onShowCls"?"showBox showBox"+(i+1)%4+" boxShadow"+item.status:"showBox showBox"+(i+1)%4'>
                        <div v-if='item.id' class="showListBox">
                            <el-tooltip class="item" :disabled="item.name.length>12?false:true" effect="dark" :enterable="false" transition="el-zoom-in-center" :content="item.name" placement="top">
                                <p class="showBoxTitle">{{item.name}}</p>
                            </el-tooltip>
                            <el-tooltip class="item" :disabled="item.attendee&&item.attendee.length>12?false:true" effect="dark" :enterable="false" transition="el-zoom-in-center" :content="item.attendee" placement="top">
                                <p>出席人：{{item.attendee}}</p>
                            </el-tooltip>
                            <el-tooltip class="item" :disabled="item.location&&item.location.length>12?false:true" effect="dark" :enterable="false" transition="el-zoom-in-center" :content="item.location" placement="top">
                                <p>地点：{{item.location}}</p>
                            </el-tooltip>
                            <div><span class="jdSpan">进度：</span><el-progress class="progressCls" :show-text='false' :stroke-width="18" :percentage="item.percentage"></el-progress></div>
                            <div class="TimeProgress">
                                <div><p>{{item.startTime.split(' ')[0]}}</p><p>{{item.startTime.split(' ')[1]}}</p></div>
                                <div><p v-if='item.endTime'>{{item.endTime.split(' ')[0]}}</p><p v-if='item.endTime'>{{item.endTime.split(' ')[1]}}</p></div>
                            </div>
                        </div>
                        <span class="zwrw" v-if="!item.id">暂无任务</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
export default {
    name: 'carrousel',
    data () { 
        return {
            mySwiper: null, //swiper实例
            newReal: null, //滑动后的下标
            isOK: false,  //判断是滑动还是点击
            scrollTimer: null//定时器
        }
    },
    props:['onshowStatus','taskList','nowDotIndex','taskChange','paddingList','onStatus'],
    watch: {
        taskChange: function (newData,oldData) {
                this.initSwiper();
                clearTimeout(this.scrollTimer);
                this.timerFun();
        },
        nowDotIndex: function (newData,oldData) {
            if (this.mySwiper) {
                if (newData!==null) {
                    this.mySwiper.slideTo(this.nowDotIndex, 1000, false);//切换到第一个slide，速度为1秒
                    this.newReal = null;
                    clearTimeout(this.scrollTimer)
                }
            } else {
                this.initSwiper();
            }
        }
    },
    methods () {
        this.timerFun();
    },
    methods: {
        //初始化swiper
        initSwiper () {
            let that = this;
            this.$nextTick(() => {
                this.mySwiper && this.mySwiper.destroy(false);
                this.mySwiper = null;
                this.mySwiper = new Swiper('.swiper-container', {
                    // autoplay: true,//可选选项，自动滑动
                    effect : 'coverflow',
                    slidesPerView: 4,
                    // loop: true,
                    coverflowEffect: {
                        rotate: 40,
                        stretch: -6,
                        depth: 150,
                        modifier: 0.8,
                        slideShadows: false
                    },
                    // autoplay: {
                    //     disableOnInteraction: false,
                    // },
                    on: {
                        touchEnd: function(event){
                            // if (that.taskList.length-4<=this.realIndex&&that.onshowStatus>=that.taskList.length-4){} else {
                                that.isOK = true;
                            // }
                        },
                        transitionEnd: function(event){
                                that.newReal = this.realIndex;
                                if (that.isOK) {
                                    that.$emit('dotChangeEnd',this.realIndex)
                                    clearTimeout(that.scrollTimer);
                                    that.timerFun();
                                    that.isOK = false;
                                }
                        },
                        slideChange: function(event){
                            that.rightBoxChange(this.realIndex)
                        },
                        init: function(){
                            that.rightBoxChange(this.realIndex)
                        }
                    },
                })
                this.mySwiper.slideTo(this.nowDotIndex, 1000, false);//切换到第一个slide，速度为1秒
            })
        },
        // slide变化时右侧的slide样式变化
        rightBoxChange (realIndex) {
            let rightBox = document.getElementsByClassName('swiper-slide');
            Array.from(rightBox).forEach((item) => {
                if (item.className.includes('swiper-rightbox')) {
                    item.className = 'swiper-slide';
                }
            })
            if (rightBox[realIndex+3]) {
                rightBox[realIndex+3].className += ' swiper-rightbox';
            }
        },
        //十秒定位到正在进行时的数据
        timerFun () {
            this.scrollTimer = setTimeout(() => {
                if (this.paddingList.length>0&&this.onStatus==0) {
                    let isTrue= true;
                    this.taskList.forEach((item,i) => {
                        if (isTrue&&item.status==2) {
                            isTrue = false;
                            this.mySwiper.slideTo(i, 1000, false);
                            this.$emit('dotChangeEnd',i)
                        }
                    });
                }
            },10000)
        }
    }
}
</script>

<style lang='scss'>
#listBox{
    margin-bottom: 30px;
}
.swiper-container{
    width: calc(100% - 60px);
    // background: #666;
    height: 340px;
    color: #fff;
    // margin: 0 auto;
}
.swiper-slide{
    // margin: 0 20px!important;
}
.swiper-slide-active{
    transform: translate3d(-83px, 0px, -180px) rotateX(0deg) rotateY(48deg)!important;
}
.swiper-rightbox{
    transform: translate3d(83px, 0px, -180px) rotateX(0deg) rotateY(-48deg)!important;
}
.showBox{
    width: 100%;
    height: 100%;
    // margin: 5px;
    position: relative;
    border-radius: 5px;
    // box-shadow: inset 0px 0px 30px red;
    // margin: 0 0px;
}
.showBox1{
    background-image: url('../assets/image/showBg1.png');
    background-size: 100% 100%;
}
.showBox2{
    background-image: url('../assets/image/showBg2.png');
    background-size: 100% 100%;
    
}
.showBox3{
    background-image: url('../assets/image/showBg3.png');
    background-size: 100% 100%;
}
.showBox0{
    background-image: url('../assets/image/showBg4.png');
    background-size: 100% 100%;
}
.boxShadow1{
    box-shadow: inset 0px 0px 60px #ee7300;
}
.boxShadow2{
    box-shadow: inset 0px 0px 60px #00ff04;
}
.boxShadow3{
    box-shadow: inset 0px 0px 60px rgb(0, 0, 0);
}
.showListBox{
    padding: 44px 50px 0 50px;
    color: #fff;
    text-shadow: 3px 3px 10px #0772f6;
    font-size: 24px;
    // background: #ccc;
    &>p{
        line-height: 50px;
        height: 50px;
        background-image: url(../assets/image/borderBg.png);
        background-repeat: no-repeat;
        background-position: bottom left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .showBoxTitle{
        font-size: 26px;
    }
    &>div{
        display: flex;
        align-items: center;
        margin-top:5px;
    }
    .TimeProgress{
        margin-top:10px;
        line-height: 22px;
        border-bottom: none;
        display: flex;
        justify-content: space-between;
        margin-left: 30px;
        margin-right: 15px;
        p{
            text-align: center;
            font-family: 'numberFont';
            font-size: 20px;
            // margin-left: 30px;
        }
    }
}
.progressCls{
    width:66%;
    margin-top:5px;
    .el-progress-bar__inner{
        background-image: linear-gradient(
            90deg,
            #00eafe 0%,
            #50f580 100%
        );
    }
    .el-progress-bar__outer{
        background: rgba(5,122,197,.2);
    }
}
</style>
