<template>
    <div>
        <div class="main">
            <!-- 搜索 -->
            <div class="search2">
                <a>
                    <input type="text" name="" value="" placeholder="搜索歌曲、歌手..." @click='so({ name : true })'>
                </a>
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
                    <li v-for="(value,key) in hinterlandItems" @click="play({ songdata : hinterlandItems[key] })" >
                        <img v-bind:src="value.albumpic_big">
                        <span>{{value.songname}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            hinterlandItems: '',
        }
    },
    mounted: function() {
        this.$store.dispatch('getHinterland',).then((response) => {
            this.hinterlandItems = response.body.showapi_res_body.pagebean.songlist
        })
    },
    methods:{
        ...mapMutations({
            play : 'getData' ,
            so : 'getName',
        })
    }
}
</script>

<style>
    .slide4 {
        background: url(../image/1482312358874_.jpg) center center no-repeat;
        background-size: 100% 100%;
        color: #fff;
    }

    .slide5 {
        background: url(../image/1486478610443_.jpg) center center no-repeat;
        background-size: 100% 100%;
        color: #fff;
    }

    .slide6 {
        background: url(../image/1486821984806_.jpg) center center no-repeat;
        background-size: 100% 100%;
        color: #fff;
    }

    .slide7 {
        background: url(../image/1486987185879_.jpg) center center no-repeat;
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
