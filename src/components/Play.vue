<template>
    <div id="play">
        <div class="miniplay" v-show="conceal">
            <!-- <div style="display:none;"> -->
                <!-- {{ this.index }} -->
                <!-- {{ data }} -->
                <!-- {{ songlist }} -->
            <!-- </div> -->
            <div class="keep" @click='shift()'>

            </div>
            <!-- 进度条 -->
            <div class="schedule" v-on:click='leap'>
                <div class="currentProgress">

                </div>
            </div>
            <!-- 封面 歌名 歌手 -->
            <div class="cover">
                <img :src='coverSmall' alt="" id="cover">
            </div>
            <div class="songname">
                {{ songname }}
            </div>
            <div id="singer">
                {{ singername }}
            </div>
            <div class="songlistbutton" @click='openlist'>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div class="songlist">
                <div class="song-list-header">
                    <span class='song-list-title'>
                        播放列表
                        <span class="close" @click='close'>×</span>
                    </span>
                </div>
                <div class="songlists">
                    <ul class="m-list">
                        <li class='listsingle' v-for='(value,key) in songlist' @click='play(key)' v-on:click=' clickTime += 1 ' >
                            <span>{{ value.songname }}</span> <i>-</i> <span>{{ value.singername }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            <!-- 暂停 -->
            <div class="pause playing" @click='start'>

            </div>
        </div>

        <!-- 全屏播放 -->
        <div class="play">
            <img :src='backgroundCover' alt="" id="playbackground">
            <mt-header title="播放" class="fli" id="playsongname">
                <a slot="left" @click='returnhome'>
                    <mt-button icon="back" class="return"></mt-button>
                </a>
            </mt-header>
            <div class="main playmain">
                <div class="volume">
                    <div class="sumvolume" v-on:touchmove='test'>
                        <div class="currentvolume" v-on:touchstart='volume'>

                        </div>
                    </div>
                </div>

                <div class="opticalDisk">
                    <img :src='coverBig' class="playcover">
                </div>
                <!-- <div v-if="isLoading" class="loadinglrc">
                    等待歌词载入....
                </div> -->
                <!-- <div class="lyrics">
                    <ul>
                        <li class="lyriccurrent">
                            {{ lyricstime }}
                        </li>
                    </ul>
                </div> -->
                <div class="">

                </div>
                <div class="playBack">
                    <!-- <input class="currentTime"  v-model="currentTime"> -->
                    <span class="currentTime">{{ currentTime }}</span>
                    <div class="schedule" v-on:click='leaps'>
                        <div class="currentProgress" >

                        </div>
                    </div>
                    <span class="totalTime">{{ duration }}</span>
                </div>
                <div class="buttons">
                    <div class="previous" @click='previous'>
                        <div class="long">

                        </div>
                        <div class="triangle">

                        </div>
                    </div>
                    <div class="pause playing" v-on:click='start'>

                    </div>
                    <div class="next" @click='next'>
                        <div class="long">

                        </div>
                        <div class="triangle">

                        </div>
                    </div>
                </div>
            </div>

        </div>
        <audio controls autoplay id="audio" @timeupdate='updateTime' @canplay='durationTime' style="display:none" @ended='endedTime' :src='dataUrl'>
            <source src=''  id="source">
        </audio>
        </div>
</template>

<script>
import { mapGetters , mapActions ,mapMutations , mapState } from 'vuex'
    export default {
        data(){
            return {
                flag : -1,
                isLoading: true,
                spaceX: 0,
                clickTime:0,
            }
        },
        computed:{
            ...mapGetters([
                'currentTime' , 'duration' , 'coverSmall' ,'coverBig', 'backgroundCover','dataUrl' ,'songname', 'singername',
            ]),
            ...mapState({

            }),
            songlist(){return this.$store.state.songlist},
            conceal(){return this.$store.state.conceal},
            index(){return this.$store.state.index},
        },
        beforeUpdate(){
            const index = this.index
            const clickTime = this.clickTime
            setTimeout(function(){
                for( var i = 0 , len = $('.m-list').children().length ; i < len ;i++ ){
                    $('.m-list').children()[i].style.backgroundColor = ''
                }
                if( index === 0 && clickTime === 0){
                    $('.m-list li:last').css('background-color','rgba(102,102,102,.5)')
                }else{
                    $('.m-list').children()[index].style.backgroundColor = 'rgba(102,102,102,.5)'
                }
            },0)
        },
        methods:{
            ...mapMutations({
                shift : 'getShift',
            }),
            ...mapMutations([
                'play','previous','next', 'endedTime', // play是索引   上一首下一首
            ]),
            updateTime() {
                // this.$store.commit()
                this.$store.commit('updateCurrentTime',parseInt(document.querySelector('audio').currentTime))
                $('.miniplay .schedule').width() / document.querySelector('audio').duration
                $('.play .schedule').width() / document.querySelector('audio').duration
                $('.miniplay .currentProgress').css('width', document.querySelector('audio').currentTime * $('.miniplay .schedule').width() / document.querySelector('audio').duration)
                $('.play .currentProgress').css('width', document.querySelector('audio').currentTime * $('.play .schedule').width() / document.querySelector('audio').duration)
            },
            durationTime() {
                this.$store.commit('durationTime',parseInt(document.querySelector('audio').duration))
                document.querySelector('audio').volume = 0.9
            },
            shift:function(){
                $('.play').slideToggle();
            },
            openlist:function(event){
                $('.songlist').slideToggle("slow");
            },
            close:function(){
                $('.songlist').slideToggle("slow");
            },
            start: function() {
                var audio = document.querySelector('audio')
                if (audio.paused) {
                    audio.play()
                    $('.playing').removeClass('continue')
                    $('.playing').addClass('pause')
                    $(".opticalDisk").css("animation-play-state", "running")
                } else {
                    audio.pause()
                    $('.playing').removeClass('pause')
                    $('.playing').addClass('continue')
                    $(".opticalDisk").css("animation-play-state", "paused")
                }
            },
            // previous:function(){
                // for( var i = 0 , len = $('.m-list').children().length ; i < len ;i++ ){
                //     $('.m-list').children()[i].style.backgroundColor = ''
                // }
                // $('.m-list').children()[this.temp].style.backgroundColor = 'rgba(102,102,102,.5)'
            // },
            returnhome:function(){
                $('.play').slideToggle();
            },
            leap: function(e) {
                var width = $('.miniplay .schedule').width()
                var point = e.offsetX;
                document.querySelector('audio').currentTime = point / width * document.querySelector('audio').duration
            },
            leaps:function(e){
                var widthmax = $('.play .schedule').width()
                var point = e.offsetX;
                document.querySelector('audio').currentTime = point / widthmax * document.querySelector('audio').duration
            },
            volume: function(e) {
                this.spaceX = $('.currentvolume').offset().left
            },
            test: function(e) {
                var left = e.targetTouches[0].clientX - this.spaceX
                left = left > $('.sumvolume').width() ? $('.sumvolume').width() : left;
                $('.currentvolume').width(left)
                document.querySelector('audio').volume = $('.currentvolume').width() / $('.sumvolume').width()
            },
        },
    }
</script>

<style>
    #play{
        width: 100%;
    }
    .miniplay {
        position: fixed;
        bottom: 0;
        height: 3rem;
        width: 100%;
        background: rgba(255,255,255,.8);
        z-index: 20;
    }
    .liststyle{
        background-color: rgba(102,102,102,.5);
    }
    .miniplay .keep{
        height: 90%;
        position: absolute;
        bottom: 0;
        width:60%;
        z-index: 100;
    }
    .miniplay .songlist{
        display: none;
        position: absolute;
        bottom: 3rem;
        width: 100%;
        height: 20rem;
        background: rgba(255,255,255,1);
    }
    .miniplay .songlist .song-list-header{
        /*display: flex;*/
    }
    .miniplay .songlist .song-list-title{
        display: block;
        text-align: center;
        padding:.5rem 0;
        margin:0 auto;
        border-bottom: .05rem solid rgba(0,0,0,.1);
    }
    .miniplay .songlist .close{
        height: 1.2rem;
        line-height: 1.2rem;
        width: 1.2rem;
        font-size: 1.2rem;
        position: absolute;
        right: 10px;
    }
    .miniplay .songlist .songlists{
        height: 17.5rem;
        overflow-y: scroll;
    }
    .miniplay .songlist .songlists ul{
        height: 100%;
    }
    .miniplay .songlist .songlists li{
        padding: 0 .5rem;
        border-bottom: .05rem solid rgba(0,0,0,.1);
        height: 2rem;
        line-height: 2rem;
    }
    .miniplay .songlist .songlists li span,i{
        float: left;
    }
    .miniplay .songlist .songlists li span:first-child{
        display: inline-block;
        font-size: .9rem;
        width: 6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .miniplay .songlist .songlists li i{
        padding: 0 .4rem;
        font-size: .8rem;
        color:rgba(0,0,0,.7);
    }
    .miniplay .songlist .songlists li span:last-child{
        font-size: .8rem;
        color:rgba(0,0,0,.7);
    }

    .miniplay .schedule {
        width: 100%;
        height: .2rem;
        background-color: rgba(0,0,0,.1);
    }

    .miniplay .currentProgress {
        height: 100%;
        width: 0;
        background-color: rgba(156, 39, 176, 1);
    }
    .miniplay .songlistbutton{
        width: 1.2rem;
        height: 1.2rem;
        position: absolute;
        top: 32%;
        right: 30%;
        display: flex;
        flex-direction : column;
    }
    .miniplay .songlistbutton span{
        height: .3rem;
        margin: .1rem 0;
        border-radius: 1rem;
        width: 100%;
        background: rgba(156, 39, 176, 1);
    }
    .miniplay .pause {
        width: 1.8rem;
        height: 1.8rem;
        position: absolute;
        border-radius: 50%;
        top: 16%;
        right: 15%;
        border: .13rem solid rgba(156, 39, 176, 1);
    }
    .miniplay .pause::before {
        content: '';
        width: .25rem;
        height: .9rem;
        display: block;
        background-color: rgba(156, 39, 176, 1);
        border-radius: 1rem;
        position: absolute;
        top: 25%;
        left: 28%;
    }
    .miniplay .pause::after {
        content: '';
        width: .25rem;
        height: .9rem;
        display: block;
        background-color: rgba(156, 39, 176, 1);
        border-radius: 1rem;
        position: absolute;
        top: 25%;
        right: 28%;
    }

    .miniplay .continue {
        width: 1.8rem;
        height: 1.8rem;
        position: absolute;
        border-radius: 50%;
        top: 16%;
        right: 15%;
        border: .13rem solid rgba(156, 39, 176, 1);
    }

    .miniplay .continue::before {
        content: '';
        display: block;
        position: absolute;
        top: 25%;
        left: 38%;
        height: 0;
        width: 0;
        border-left: .65rem solid rgba(156, 39, 176, 1);
        border-top: .45rem solid transparent;
        border-bottom: .45rem solid transparent;
    }
    .miniplay .cover{
        height: 2.3rem;
        width: 2.3rem;
        border-radius: 50%;
        border:none;
        position: absolute;
        left: 6%;
        top:15%;
    }
    .miniplay .cover #cover{
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .miniplay .songname{
        font-size: .5rem;
        position: absolute;
        left: 20%;
        top: 20%;
        width: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .miniplay #singer{
        font-size: .5rem;
        color: rgba(0,0,0,.6);
        position: absolute;
        top: 58%;
        left: 20%;
        width: 5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    /*全屏展示样式*/
    .play{
        height: 100%;
        width: 100%;
        background: skyblue;
        display: none;
        position: absolute;
        bottom: 0;
        z-index: 100;
    }
    #playbackground{
        height: 100%;
        width: 100%;
        filter: blur(100px);
        -webkit-filter: blur(100px);
        position: absolute;
        z-index: 200;
    }
    #canvas{
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 200;
    }
    #playsongname{
        z-index: 201;
    }
    .playmain {
        height: 0;
        z-index: 201;
    }

    .loadinglrc {
        color: #fff;
        margin: auto;
        position: absolute;
        top: 14rem;
        left: 6rem;
    }
    .opticalDisk {
        margin: 1rem auto;
        width : 15rem;
        height: 15rem;
        background: url(../image/timg.png) 0 0 no-repeat;
        background-size: 15rem 15rem ;
        animation: circle_top 12s linear 0s forwards;
        -webkit-animation: circle_top 12s linear 0s forwards;
        animation-iteration-count: infinite;
        -webkit-animation-iteration-count: infinite;
        animation-play-state: running;
        -webkit-animation-play-state: running;
        border-radius: 50%;
        position: relative;
        z-index: 201;
    }
    .playcover{
        width: 56%;
        height: 56%;
        border-radius: 50%;
        position: absolute;
        top: 0;
        left: 0;
        right:0;
        bottom: 0;
        margin:auto;
    }

    @keyframes circle_top {
        form {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }
    @-webkit-keyframes circle_top {
        form {
            -webkit-transform: rotateZ(0deg);
        }
        to {
            -webkit-transform: rotateZ(360deg);
        }
    }

    .lyrics {
        width: 100%;
        height: 2rem;
        z-index: 201;
    }

    .lyrics li {
        text-align: center;
        height: 1rem;
        padding: 0 1rem;
    }
    .lyriccurrent {
        color: rgba(255, 255, 255, 1);
        font-size: .7rem;
        padding: 0 4rem;
    }
    .lyric {
        padding: 0 4rem;
    }

    .volume {
        z-index: 201;
    }

    .volume .sumvolume {
        height: .1rem;
        width: 14rem;
        background-color: rgba(255, 255, 255, .2);
        margin: 0 auto;
        position: relative;
        z-index: 201;
    }

    .volume .sumvolume .currentvolume {
        height: 100%;
        width: 90%;
        background-color: #fff;
        position: relative;
    }

    .volume .sumvolume .currentvolume::before {
        content: '';
        width: .5rem;
        height: .5rem;
        display: block;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        right: -.1rem;
        top: -.2rem;
    }

    .playBack {
        margin-top: -1rem;
        display: flex;
        z-index: 201;
    }

    .playBack input {
        color: rgba(255, 255, 255, .8);
        background: transparent;
        border: none;
        font-size: .8rem;
        width: 2.5rem;
        padding: 0 1rem;
        margin: 1.5rem 0;
        z-index: 201;
    }

    .playBack span {
        font-size: .8rem;
        margin: 1.5rem 0;
        padding: 0 1rem;
        color: rgba(255, 255, 255, .8);
        z-index: 201;

    }

    .playBack .currentProgress {
        height: 100%;
        width: 0;
        background-color: #fff;
        position: relative;
        z-index: 201;
    }

    .playBack .currentProgress::before {
        content: '';
        width: .5rem;
        height: .5rem;
        display: block;
        background-color: #fff;
        border-radius: 50%;
        position: absolute;
        right: -.1rem;
        top: -.2rem;
    }

    .playBack .schedule {
        margin-top: 2rem;
        width: 14rem;
        height: .1rem;
        background-color: rgba(255, 255, 255, .2);
        margin: 2rem 0 0 0;
        z-index: 201;
    }

    .buttons {
        display: flex;
        justify-content: center;
        z-index: 201;
    }

    .buttons .previous {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .1);
        position: relative;
        z-index: 201;
    }

    .buttons .previous .long {
        height: 1.3rem;
        width: .2rem;
        background-color: #fff;
        border-radius: 1rem;
        position: absolute;
        top: .6rem;
        left: .8rem;
    }

    .buttons .previous .triangle {
        height: 0;
        width: 0;
        border-right: .66rem solid #fff;
        border-top: .66rem solid transparent;
        border-bottom: .66rem solid transparent;
        position: absolute;
        top: .6rem;
        left: 1rem;
    }

    .buttons .pause {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .1);
        margin: 0 2.2rem;
        position: relative;
        z-index: 201;
    }

    .buttons .pause::before {
        content: '';
        width: .4rem;
        height: 1.8rem;
        display: block;
        background-color: #fff;
        border-radius: 1rem;
        position: absolute;
        top: 1.1rem;
        left: 1.2rem;
    }

    .buttons .pause::after {
        content: '';
        width: .4rem;
        height: 1.8rem;
        display: block;
        background-color: #fff;
        border-radius: 1rem;
        position: absolute;
        top: 1.1rem;
        left: 2.3rem;
    }

    .buttons .continue {
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .1);
        margin: 0 2.2rem;
        position: relative;
        z-index: 201;
    }

    .buttons .continue::before {
        content: '';
        display: block;
        position: absolute;
        top: 1.1rem;
        left: 1.5rem;
        height: 0;
        width: 0;
        border-left: 1.2rem solid #fff;
        border-top: .9rem solid transparent;
        border-bottom: .9rem solid transparent;
    }

    .buttons .next {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .1);
        position: relative;
        z-index: 201;
    }

    .buttons .next .long {
        height: 1.3rem;
        width: .2rem;
        background-color: #fff;
        border-radius: 1rem;
        position: absolute;
        top: .6rem;
        right: .8rem;
    }

    .buttons .next .triangle {
        height: 0;
        width: 0;
        border-left: .66rem solid #fff;
        border-top: .66rem solid transparent;
        border-bottom: .66rem solid transparent;
        position: absolute;
        top: .6rem;
        right: 1rem;
    }

</style>
