<template>
    <div>
        <div class="main">
            <div class="account">
                <!--<div class="head">

                </div>-->
                <div class="login">
                    <span>登录账号</span>
                    <span>登录后什么都不能做...</span>
                </div>
                <div class="symbol">
                    <i>&gt;</i>
                </div>
            </div>
            <!--<div class="function">
                <div class="func">
                    <ul>
                        <li class="thisLocality">
                            <span>本地歌曲</span>
                        </li>
                        <li class="download">
                            <span>我的下载</span>
                        </li>
                        <li class="recently">
                            <span>最近播放</span>
                        </li>
                    </ul>
                </div>
            </div>-->
            <!-- 个人列表 -->
            <div class="songMenu">
                <ul>
                    <li>我的歌单<i class="arrows">&gt;</i></li>
                    <li><i class="redHeart">❤</i>我的收藏 <i class="arrows">&gt;</i></li>
                </ul>
            </div>
            <div class="setting">
                <ul>
                    <li>设置<i class="arrows">&gt;</i></li>
                    <li>问题与建议<i class="arrows">&gt;</i></li>
                    <li>检测更新<i class="arrows">&gt;</i></li>
                    <li>关于<i class="arrows">&gt;</i></li>
                </ul>
            </div>

        </div>
    </div>
</template>
<style>
    .account {
        display: flex;
        /*color: rgba(0, 0, 0, .8);*/
        border-bottom: .05rem solid rgba(255, 255, 255, .1);
        margin: 3.5rem 1rem 0 1rem;
    }
    /*.account .head {
        width: 3rem;
        height: 3rem;
        background: url(./image/small.png) -384px 0 no-repeat;
        flex: 1;
    }*/
    
    .account span:last-child {
        margin: .4rem 0;
    }
    
    .login {
        display: flex;
        flex-direction: column;
        flex: 4;
    }
    
    .login span:first-child {
        /*color: rgb(255, 255, 255);*/
    }
    
    .login span:last-child {
        /*color: rgba(255, 255, 255, 0.8);*/
        font-size: .8rem;
    }
    
    .symbol {
        margin-top: .5rem;
        /*color: rgba(255, 255, 255, 0.5);*/
    }
    /*.function {
        background-color: rgba(255, 255, 255, 0.05);
        margin: .3rem 0;
    }*/
    /*.func {
        height: 6rem;
        margin: 0 1rem;
    }
    
    .func ul {
        display: flex;
        justify-content: center;
    }
    
    .func ul li {
        position: relative;
        margin-top: 1rem;
    }
    
    .func ul li:first-child {
        margin-right: 3.5rem;
    }
    
    .func ul li:last-child {
        margin-left: 3.5rem;
    }
    
    .func ul li span {
        width: 5rem;
        position: absolute;
        top: 3rem;
        left: -.3rem;
        color: #fff;
        font-size: .8rem;
    }*/
    /*.thisLocality {
        width: 121px;
        height: 121px;
        background: url(./image/small.png) 0 0 no-repeat;
    }
    
    .download {
        width: 121px;
        height: 121px;
        background: url(./image/small.png) 0 -1296px no-repeat;
    }
    
    .recently {
        width: 121px;
        height: 121px;
        background: url(./image/small.png) -1768px 0 no-repeat;
    }*/
    /*个人列表  设置*/
    
    .songMenu {
        /*color: #fff;*/
        background-color: rgba(0, 0, 0, .05);
        padding: 0 1rem;
        margin: .3rem 0;
    }
    
    .songMenu ul li {
        padding: .5rem 0;
        font-size: .9rem;
    }
    
    .arrows {
        float: right;
        /*color: rgba(255, 255, 255, 0.3);*/
    }
    
    .songMenu ul li .redHeart {
        display: inline-block;
        height: 2rem;
        line-height: 2rem;
        width: 2rem;
        border: 1px solid rgba(0, 0, 0, .3);
        /*background-color: rgba(255, 255, 255, .1);*/
        text-align: center;
        font-size: 1.2rem;
        color: #E76256;
        margin-right: .5rem;
    }
    
    .songMenu ul li:first-child {
        border-bottom: .05rem solid rgba(1, 1, 1, .1);
    }
    
    .setting {
        /*color: #fff;*/
        padding: 0 1rem;
    }
    
    .setting ul li {
        padding: .2rem 0;
        font-size: .9rem;
        border-bottom: .05rem solid rgba(1, 1, 1, .1);
        line-height: 2rem;
    }
    
    .setting ul li:last-child {
        border-bottom: none;
    }
</style>
<script>
    export default {
        data() {
            return {}
        }
    }
</script>