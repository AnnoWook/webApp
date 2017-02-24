<template>
    <div class="container">
        <div class="header">
            <router-link to='/recommend'>推荐</router-link>
            <router-link to='/rank'>排行</router-link>
            <router-link to='/sheet'>歌单</router-link>
            <router-link to='/me'>我的</router-link>
        </div>
        <div class="main">
            <!-- 搜索 -->
            <div class="search2">
                <router-link to='/search'>
                    <input type="text" name="" value="" placeholder="搜索歌曲、歌手...">
                </router-link>  
                <button type="button" name="button"><i class="mintui mintui-search"></i></button>
            </div>
            <!-- 轮播图 -->
            <div class="page-swipe">
                <mt-swipe :auto="4000">
                    <mt-swipe-item class="slide4"></mt-swipe-item>
                    <mt-swipe-item class="slide5"></mt-swipe-item>
                    <mt-swipe-item class="slide6"></mt-swipe-item>
                    <mt-swipe-item class="slide7"></mt-swipe-item>
                </mt-swipe>
            </div>
            <!-- 全部歌单 -->
            <div class="AllTheSong">
                <h5>全部歌单</h5>
                <ul>
                    <li v-for="(value,key) in hinterlandItems" @click="play(hinterlandItems[key].songid)" >
                        <img v-bind:src="value.albumpic_big">
                        <span>{{value.songname}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style>
    .slide4 {
        background: url(./image/1482312358874_.jpg) center center no-repeat;
        background-size: 100% 100%;
        color: #fff;
    }
    
    .slide5 {
        background: url(./image/1486478610443_.jpg) center center no-repeat;
        background-size: 100% 100%;
        color: #fff;
    }
    
    .slide6 {
        background: url(./image/1486821984806_.jpg) center center no-repeat;
        background-size: 100% 100%;
        color: #fff;
    }
    
    .slide7 {
        background: url(./image/1486987185879_.jpg) center center no-repeat;
        background-size: 100% 100%;
        color: #fff;
    }
    
    .AllTheSong {
        width: 100%;
        /*color: rgba(255, 255, 255, 0.8);*/
        font-size: .8rem;
    }
    
    .AllTheSong h5 {
        margin-left: .5rem;
        margin-bottom: .2rem;
    }
    
    .AllTheSong ul {
        width: 100%;
        /*display: flex;*/
        margin: 0 .1rem 0 .1rem;
    }
    
    .AllTheSong ul li {
        float: left;
        width: 50%;
        height: 50%;
    }
    
    .AllTheSong ul li img {
        width: 98%;
        height: 100%;
    }
    
    .AllTheSong ul li span {
        display: inline-block;
        width: 9rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        text-indent: .2rem;
    }
</style>
<script>
    export default {
        data() {
            return {
                hinterland: 5, //热歌
                hinterlandItems: '',
            }
        },
        mounted: function() {
            this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.hinterland}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    // 这里是处理正确的回调
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.hinterlandItems = foo
                })
        },
        methods: {
            play(id) {
                this.$router.push({
                    path: `player${id}`
                })
            },
        }
    }
</script>