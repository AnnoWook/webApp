<template>

<div id="search" ref="reference">
    <mt-header title="搜索" class="fli">
        <a slot="left" @click="so({ name : false })">
            <mt-button icon="back" class="return"></mt-button>
        </a>
    </mt-header>
    <div class="main searchmain">
            <div class="search">
            <a href="#">
            <input type="text" id="seek" name="" value="" placeholder="搜索歌曲、歌手..."  autofocus>
            <!-- v-on:focus='focus' v-on:click='click' -->
            </a>
            <button type="button" name="button" v-on:click='search' id="button">
                <i class="mintui mintui-search"></i>
            </button>
        </div>
        <!--加载等待-->
        <mt-spinner color="rgba(255,255,255,.5)" type="fading-circle" v-if="isLoading" size="200" class="loading" ></mt-spinner>
        <div class="searchList">
            <ul>
                <li v-for='(value,key) in result' class="searchListstyle" @click='play({songdata:result[key]})'>
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
    #search {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
    }
    .searchmain {
        margin-top: 0 !important;
    }
    .searchList .searchListstyle {
        border-bottom: .05rem solid rgba(0, 0, 0, .3);
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
</style>
<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import { mapMutations } from 'vuex'
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
            ...mapMutations({
                play : 'getData',
                so : 'getName',
            }),
            addScrollEvent() {
                var _that = this
                this.$refs.reference.onscroll = function(e) {
                    if (e.target.scrollHeight - 1 <= e.target.scrollTop + e.target.offsetHeight) {
                        _that.$http.get(`https://route.showapi.com/213-1?keyword=${document.querySelector('#seek').value}&page=${_that.pagenext++}&showapi_appid=31967&showapi_timestamp=&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                            .then(function(response) {
                                var subject = response.body.showapi_res_body.pagebean.contentlist
                                _that.result = _that.result.concat(subject)
                            })
                    }
                }
                this.result = _that.result
            },
            search: function() {
                this.isLoading = true
                this.$http.get(`https://route.showapi.com/213-1?keyword=${document.querySelector('#seek').value}&page=${this.paging}&showapi_appid=31967&showapi_timestamp=&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                    .then(function(response) {
                        this.result = response.body.showapi_res_body.pagebean.contentlist
                        this.isLoading = false
                    })
            },
            scrollList: function(e) {

            },
        },
    }
</script>
