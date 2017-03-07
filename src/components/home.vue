<template>
    <div id="box">
        <div class="content-warper" v-show="!nam">
            <div class="swiper-pagination" slot="pagination"></div>
            <swiper :options="swiperOption" class="swiper-box">
                <swiper-slide class="swiper-item">
                <Recommend></Recommend>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                <Rank></Rank>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                <Sheet></Sheet>
                </swiper-slide>
                <swiper-slide class="swiper-item">
                <Me></Me>
                </swiper-slide>
            </swiper>
        </div>
        <Search v-show="nam"></Search>
        <Play></Play>
    </div>
</template>

<script>
    import Recommend from './Recommend.vue'
    import Rank from './Rank.vue'
    import Sheet from './Sheet.vue'
    import Me from './Me.vue'
    import Play from './Play.vue'
    import Search from './ChildContainer/Search.vue'
    import {
        swiper,
        swiperSlide
    } from 'vue-awesome-swiper'
    const TAB_NAME = ['推荐', '排行', '歌单', '我的']
    export default {
        components: {
            Recommend,
            Rank,
            Sheet,
            Me,
            Play,
            Search,
            swiper,
            swiperSlide,
        },
        data() {
            return {
                swiperOption: {
                    pagination: '.swiper-pagination',
                    paginationClickable: true,
                    paginationBulletRender(swiper, index, className) {
                        return `<span class="${className} swiper-pagination-bullet-custom">${TAB_NAME[index]}</span>`
                    }
                }
            }
        },
        computed:{
            nam(){return this.$store.state.nam},
        },
    }
</script>

<style>
    #box{
        height: 100%;

    }
    .swiper-box {
        height: 100%;
    }

    .swiper-slide-active {
        overflow-y: scroll;
    }

    .content-warper {
        height: 100%;
    }

    .swiper-pagination {
        height: 7% ;
        background-color:rgba(156, 39, 176, 1);
        width: 100%;
        position: fixed !important;
        top: 0;
    }

    .swiper-pagination>span {
        height: 100%;
        line-height: 235%;
        width: 25%;
        border-radius: 0;
        color: white;
    }

    .swiper-pagination-bullet-active {
        background:rgba(156, 39, 176, 1) !important;
    }
</style>
