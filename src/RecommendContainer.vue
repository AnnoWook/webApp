<template>
<div class="container">
    <div class="header">
        <router-link to='/recommend'>推荐</router-link>
        <router-link to='/rank'>排行</router-link>
        <router-link to='/sheet'>歌单</router-link>
        <router-link to='/me'>我的</router-link>
    </div>
    <div class="main">
        <!-- 轮播图 -->
        <div class="page-swipe">
            <mt-swipe :auto="4000">
                <mt-swipe-item class="slide1"></mt-swipe-item>
                <mt-swipe-item class="slide2"></mt-swipe-item>
                <mt-swipe-item class="slide3"></mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 搜索 -->
        <div class="search">
            <router-link to='/search'>
            <input type="text" name="" value="" placeholder="搜索歌曲、歌手...">
            </router-link>            
            <button type="button" name="button"><i class="mintui mintui-search"></i></button>
        </div>
        <div class="singer">
            <router-link to='/recommend/allsinger'>全部歌手</router-link>
            <router-link to='/recommend/songclassify'>歌曲分类</router-link>
        </div>
        <!-- 新歌速递 -->
        <div class="new">
            <h5>新歌速递</h5>
                    <ul class="newsong-list">
                        <li @click="play(koreaSongid)">
                            <a>
                                <img v-bind:src="koreaCover">
                                <span v-html="koreaSongname"></span>
                            </a>
                        </li>
                        <li @click="play(americaSongid)">
                            <a>
                                <img v-bind:src="americaCover" >
                                <span v-html="americaSongname"></span>
                            </a>
                        </li>
                        <li @click="play(salesSongid)">
                            <a>
                                <img v-bind:src="salesCover" >
                                <span v-html="salesSongname"></span>
                            </a>
                        </li>
                    </ul>
        </div>
        <div class="new">
            <h5>
                每日推荐
                <span class="more">
                    更多&gt;
                </span>
            </h5>

            <div class="recommend">
                <ul>
                  <li>
                    <img v-bind:src="imag" class="groom">
                  </li>
                </ul>
                <ul>
                        <li v-for="(value,key) in rq" class="listsong" v-bind:value='key'  @click="play(rq[key].songid)">
                            {{ value.songname }}
                        </li>
                </ul>
                <ul>
                    <li v-for="(value,key) in rq" class="listsinger">
                        {{ value.singername }}
                    </li>
                </ul>
            </div>
        </div>
    </div>

</div>

</template>

<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    Vue.use(VueResource)
    export default {
        data() {
            return {
                rq: '',
                imag: '',

                koreaItems: '',
                koreaCover: '',
                koreaSongname: '',
                koreaSongid: '',

                americaItems: '',
                americaCover: '',
                americaSongname: '',
                americaSongid: '',

                salesItems: '',
                salesCover: '',
                salesSongname: '',
                salesSongid: '',

                america: 3, //欧美
                hinterland: 5, //内地
                hongkong: 6, //港台
                korea: 16, //韩国
                jp: 17, //日本
                ballad: 18, //民谣
                rock: 19, //摇滚
                sales: 23, //销量
                hot: 26, //热歌
            }
        },
        mounted: function() {
            this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.korea}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.koreaItems = foo
                    this.koreaCover = this.koreaItems[0].albumpic_big
                    this.koreaSongname = this.koreaItems[0].songname
                    this.koreaSongid = this.koreaItems[0].songid
                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.america}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.americaItems = foo
                    this.americaCover = this.americaItems[0].albumpic_big
                    this.americaSongname = this.americaItems[0].songname
                    this.americaSongid = this.americaItems[0].songid
                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.sales}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.salesItems = foo
                    this.salesCover = this.salesItems[0].albumpic_big
                    this.salesSongname = this.salesItems[0].songname
                    this.salesSongid = this.salesItems[0].songid
                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.hot}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.rq = foo
                    this.imag = this.rq[0].albumpic_big
                })
        },
        methods: {
            play(id) {
                this.$router.push({
                    path: `player${id}`
                })
            }
        },
    }
</script>


<style>
    .header {
        height: 7%;
        background-color: rgba(105, 25, 51, .9);
        display: flex;
        /*justify-content: space-around;*/
        align-items: center;
        position: fixed;
        top: 0;
        z-index: 10;
        width: 100%;
    }
    
    .header a {
        color: #f1f1f1;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: Center;
        border-bottom: .2rem solid rgba(105, 25, 51, .5);
    }
    
    .main {
        margin-top: 13%;
        height: 93%;
    }
    
    @descendent desc {
        /*text-align: center;*/
        /*color: #666;*/
        /*margin-bottom: 5px;*/
    }
    
    .mint-swipe {
        height: 10rem;
        /*height: 350px;*/
        /*color: #fff;*/
        /*font-size: 30px;*/
        text-align: center;
        margin-bottom: 20px;
    }
    
    .mint-swipe-item {
        line-height: 200px;
    }
    
    .slide1 {
        background: url(./image/T003R720x288M000002mryCr3VtdR3.jpg) center center no-repeat;
        background-size: 100% 100%;
        /*color: #fff;*/
    }
    
    .slide2 {
        background: url(./image/T003R720x288M000003utrAc4A7FwF.jpg) center center no-repeat;
        background-size: 100% 100%;
        /*color: #000;*/
    }
    
    .slide3 {
        background: url(./image/T003R720x288M000004Zu0uz1PYd2t.jpg) center center no-repeat;
        background-size: 100% 100%;
        /*color: #fff;*/
    }
    /*搜索*/
    
    .main .search {
        margin-top: .5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .main .search a {
        display: inline-block;
        width: 80%;
    }
    
    .search input {
        height: 1.3rem;
        width: 100%;
        border: 1px solid rgba(0, 0, 0, .1);
        border-radius: 1rem;
        text-indent: .7rem;
        font-size: .7rem;
        background-color: rgba(0, 0, 0, .1);
        color: rgb(0, 0, 0, 1);
    }
    
    .search button {
        height: 1rem;
        width: 10%;
        font-size: .9rem;
        color: rgba(0, 0, 0, 1);
        background: rgba(0, 0, 0, 0);
        border: none;
        padding: 0;
        margin: 0;
        outline-style: none;
    }
    
    .search button i {
        font-size: 1.2rem
    }
    /*分类*/
    
    .singer {
        display: flex;
        justify-content: center;
        margin-top: .5rem;
        background-color: rgba(0, 0, 0, .02);
    }
    
    .singer a {
        flex: 1;
        text-align: center;
        margin: .4rem 0;
        color: black;
    }
    
    .singer a:first-child {
        border-right: 1px solid rgba(0, 0, 0, .1);
    }
    /*新歌速递*/
    
    .new {
        font-size: .8rem;
        font-family: '微软雅黑';
        margin-top: 1rem;
        /*border: 1px solid red;*/
        /*background-color: rgba(0, 0, 0, .02);*/
        height: 35%;
        /*height: 12rem;*/
        color: black;
    }
    
    .new h5 {
        color: black;
        font-size: .8rem;
        font-family: '微软雅黑';
        /*margin-top: .2rem;*/
        text-indent: .5rem;
        padding: .4rem 0;
    }
    
    .new .more {
        float: right;
        margin-right: .8rem;
        color: rgba(0, 0, 0, 1);
    }
    
    .new .newsong-list {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    
    .new .newsong-list a {
        display: inline-block;
        width: 100%;
        height: 100%;
    }
    
    .new .newsong-list li {
        width: 100%;
        height: 100%;
        flex: 1;
    }
    
    .new .newsong-list li img {
        width: 98%;
        margin-left: .05rem;
    }
    
    .new .newsong-list li span {
        display: inline-block;
        width: 100%;
        text-indent: .1rem;
        margin-top: .2rem;
        margin-left: .3rem;
    }
    /*每日推荐*/
    
    .recommend {
        height: 6rem;
        overflow: hidden;
        display: flex;
    }
    /*超出部分隐藏*/
    
    .recommend ul {
        flex: 1;
    }
    /*.recommend ul:first-child li img {
        width: 100%;
    }
    */
    
    .recommend ul:nth-child(2) {
        text-indent: 0.8rem;
    }
    
    .recommend ul:nth-child(3) {
        /*text-indent: 1rem;*/
    }
    
    .recommend ul .listsong {
        width: 6rem;
        height: 2rem;
        line-height: 2rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        /*color: rgba(255, 255, 255, .9);*/
    }
    
    .listsinger {
        font-size: .8rem;
        height: 2rem;
        line-height: 2rem;
        margin-left: .2rem;
        color: rgba(0, 0, 0, .5);
    }
    
    .recommend ul li .groom {
        margin-left: .5rem;
    }
</style>