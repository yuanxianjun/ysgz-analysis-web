<template>
    <div id="countDowns">
        <div class="downBox" v-for="(item,i) in downTimeList" :key='i'>
            <el-tooltip v-if='item.id' class="item" :disabled="item.name.length>13?false:true" effect="dark" :enterable="false" transition="el-zoom-in-center" :content="item.name" placement="top">
                <p class="downTitle"><span>距</span>{{item.name}}</p>
            </el-tooltip>
            <p v-if='item.id' class="downTime"><img src="../assets/image/downTime.png" alt="">{{item.downTime}}</p>
            <span class="zwrw" v-if="!item.id">暂无任务</span>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
        }
    },
    props:['downTimeList']
}
</script>

<style lang='scss'>
#countDowns{
    height: 170px;
    display: flex;
    justify-content: center;
    margin: 0 5px;
    .downBox{
        min-width: 427.5px;
        // height: 170px;
        text-shadow: 3px 3px 10px #0772f6;
        margin: 0 25px;
        box-sizing: border-box;
        padding: 20px;
        display: flex;
        // flex: 1;
        position: relative;
        flex-direction: column;
        justify-content: space-between;
        background-image: url('../assets/image/downBox.png');
        background-size: 100% 100%;
    }
    .downTitle{
        background-image: url('../assets/image/downTitle.png');
        background-size: 100% 100%;
        line-height: 40px;
        font-size: 22px;
        padding-left: 20px;
        height: 40px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
        span{
            font-weight: normal;
            margin-right: 30px;
            font-size: 20px;
        }
    }
    .downTime{
        padding-left: 30px;
        height: 40px;
        font-size: 44px;
        font-family: 'numberFont';
        display: flex;
        align-items: center;
        img{
            margin-right:46px;
        }
    }
}
</style>
