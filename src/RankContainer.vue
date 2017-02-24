<template>
    <div class="container">
        <div class="header">
            <router-link to='/recommend'>推荐</router-link>
            <router-link to='/rank'>排行</router-link>
            <router-link to='/sheet'>歌单</router-link>
            <router-link to='/me'>我的</router-link>
        </div>
        <div class="main">
            <div class="search2">
                <router-link to='/search'>
                    <input type="text" name="" value="" placeholder="搜索歌曲、歌手...">
                </router-link> 
                <button type="button" name="button"><i class="mintui mintui-search"></i></button>
            </div>
            <div class="rank">
                <h5>巅峰榜</h5>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="hotImag">
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in hotItems" @click="play(hotItems[key].songid)" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in hotItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="salesImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in salesItems" @click="play(salesItems[key].songid)" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in salesItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="hongkongImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in hongkongItems" @click="play(hongkongItems[key].songid)" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in hongkongItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="balladImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in balladItems" @click="play(balladItems[key].songid)" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in balladItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="rockImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in rockItems" @click="play(rockItems[key].songid)" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in rockItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="americaImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in americaItems" @click="play(americaItems[key].songid)" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in americaItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="koreaImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in koreaItems" @click="play(koreaItems[key].songid)" class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in koreaItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
                <div class="recommend">
                    <ul>
                      <li>
                        <img v-bind:src="jpImag" >
                      </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in jpItems" @click="play(jpItems[key].songid)"  class="listsong">
                            {{key+1}} {{ value.songname }}
                        </li>
                    </ul>
                    <ul>
                        <li v-for="(value,key) in jpItems" class="listsinger">
                            {{ value.singername }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
    .search2 {
        margin-top: 3rem;
        margin-bottom: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .search2 a {
        display: inline-block;
        width: 80%;
    }
    
    .search2 input {
        height: 1.3rem;
        width: 100%;
        border: none;
        border-radius: 1rem;
        text-indent: .7rem;
        font-size: .7rem;
        background-color: rgba(0, 0, 0, .1);
        color: rgb(0, 0, 0, 1);
    }
    
    .search2 button {
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
    
    .search2 button i {
        font-size: 1.1rem;
    }
    
    .rank {
        margin: 0 1rem 0 1rem;
    }
    
    .rank h5 {
        font-size: 1rem;
        /*color: rgba(255, 255, 255, .8);*/
    }
    
    .rank .recommend {
        border-top: .05rem solid rgba(255, 255, 255, .2);
        padding-top: .5rem;
        margin: .5rem 0;
    }
</style>
<script>
    export default {
        data() {
            return {
                rq: [],

                hot: 26, //热歌
                hotItems: '',
                hotImag: '',
                sales: 23, //销量
                salesItems: '',
                salesImag: '',
                hongkong: 6, //港台
                hongkongItems: '',
                hongkongImag: '',
                ballad: 18, //民谣
                balladItems: '',
                balladImag: '',
                rock: 19, //摇滚
                rockItems: '',
                rockImag: '',
                america: 3, //欧美
                americaItems: '',
                americaImag: '',
                korea: 16, //韩国
                koreaItems: '',
                koreaImag: '',
                jp: 17, //日本
                jpItems: '',
                jpImag: '',
            }
        },
        mounted: function() {
            this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.hot}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.hotItems = foo
                    this.hotImag = this.hotItems[0].albumpic_big
                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.sales}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.salesItems = foo
                    this.salesImag = this.salesItems[0].albumpic_big
                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.hongkong}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.hongkongItems = foo
                    this.hongkongImag = this.hongkongItems[0].albumpic_big

                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.ballad}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.balladItems = foo
                    this.balladImag = this.balladItems[0].albumpic_big

                })
            this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.rock}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.rockItems = foo
                    this.rockImag = this.rockItems[0].albumpic_big

                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.america}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.americaItems = foo
                    this.americaImag = this.americaItems[0].albumpic_big
                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.korea}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.koreaItems = foo
                    this.koreaImag = this.koreaItems[0].albumpic_big
                }),
                this.$http.get(`https://route.showapi.com/213-4?showapi_appid=31967&showapi_timestamp=&topid=${this.jp}&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                .then(function(response) {
                    var foo = response.body.showapi_res_body.pagebean.songlist
                    this.jpItems = foo
                    this.jpImag = this.jpItems[0].albumpic_big
                })
        },
        methods: {
            play(id) {
                this.$router.push({
                    path: `player${id}`
                })
            }
        }
    }
</script>