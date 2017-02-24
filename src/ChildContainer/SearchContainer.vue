<template>
<div class="container" ref="reference">
        <mt-header title="搜索" class="fli">
            <router-link to="/" slot="left">
                <mt-button icon="back" class="return"></mt-button>
            </router-link>
        </mt-header>
        <div class="main searchmain">
             <div class="search">
                <router-link to='/search'>
                <input type="text" name="" value="" placeholder="搜索歌曲、歌手..." v-on:focus='focus' v-on:click='click' autofocus>
                </router-link>            
                <button type="button" name="button" v-on:click='search'>
                    <i class="mintui mintui-search"></i>
                </button>
            </div>
            <!--加载等待-->
            <mt-spinner color="rgba(255,255,255,.5)" type="fading-circle" v-if="isLoading" size="200" class="loading" ></mt-spinner>
            <div class="searchList">
                <ul>
                    <li v-for='(value,key) in result' class="searchListstyle" @click='play(result[key].songid)'>
                        <span>{{ value.songname }}</span>
                        <span>{{ value.singername }}</span>
                        <span>{{ value.albumname }}</span>
                    </li>
                </ul>
            </div>
            <!--<div v-show="isBottom">
                <span>正在加载更多数据...</span>
            </div>-->
        </div>
</div>
</template>
<style>
    .searchmain {
        margin-top: 0;
    }
    
    .searchList .searchListstyle {
        /*color: rgba(255, 255, 255, 1);*/
        border-bottom: .05rem solid rgba(255, 255, 255, .3);
        margin: 0 1rem;
        padding: .5rem 0;
        font-size: .8rem;
        line-height: 1.2rem;
    }
    
    .searchList .searchListstyle span:first-child {
        display: block;
    }
    
    .searchList .searchListstyle span:nth-child(2) {
        color: #28c0c6;
        font-size: .75rem;
    }
    
    .searchList .searchListstyle span:last-child {
        color: rgba(0, 0, 0, .5);
        font-size: .75rem;
    }
    
    .loading {
        display: flex;
        padding: 12rem 10rem;
    }
    
    .loading div {}
</style>
<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import jquery from 'jquery'
    Vue.use(VueResource)
    export default {
        data() {
            return {
                result: [],
                isLoading: false,
                paging: 1,
                pagenext: 2,
            }
        },
        updated() {
            //页面加载完毕之后触发???
            this.addScrollEvent()
        },
        methods: {
            addScrollEvent() {
                var _that = this
                this.$refs.reference.onscroll = function(e) {
                    if (e.target.scrollHeight - 1 <= e.target.scrollTop + e.target.offsetHeight) {
                        _that.$http.get(`https://route.showapi.com/213-1?keyword=${document.querySelector('input').value}&page=${_that.pagenext++}&showapi_appid=31967&showapi_timestamp=&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                            .then(function(response) {
                                var subject = response.body.showapi_res_body.pagebean.contentlist
                                _that.result = _that.result.concat(subject)
                            })
                    }
                }
                this.result = _that.result
            },
            focus: function() {
                $("input").trigger("click").focus()
            },
            click: function() {},
            search: function() {
                this.isLoading = true
                this.$http.get(`https://route.showapi.com/213-1?keyword=${document.querySelector('input').value}&page=${this.paging}&showapi_appid=31967&showapi_timestamp=&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                    .then(function(response) {
                        this.result = response.body.showapi_res_body.pagebean.contentlist
                        this.isLoading = false
                    })
            },
            scrollList: function(e) {

            },
            play(id) {
                console.log(1)
                this.$router.push({
                    path: `player${id}`
                })
            },
        },
    }
</script>