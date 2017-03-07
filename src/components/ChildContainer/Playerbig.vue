<template>
        <div id="play">
            <mt-header title="播放" class="fli">
                <a slot="left">
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
                <div v-if="isLoading" class="loadinglrc">
                    等待歌词载入....
                </div>
                <div class="lyrics">
                    <ul>
                        <li class="lyric">
                            {{ ontwolyricstime }}
                        </li>
                        <li class="lyric">
                            {{ onlyricstime }}
                        </li>
                        <li class="lyriccurrent">
                            {{ lyricstime }}
                        </li>
                        <li class="lyric">
                            {{ nextlyricstime }}
                        </li>
                        <li class="lyric">
                            {{ nexttwolyricstime }}
                        </li>
                    </ul>
                </div>
                <div class="">

                </div>
                <div class="playBack">
                    <input class="currentTime" v-model="currentTime">
                    <div class="schedule" v-on:click='leap'>
                        <div class="currentProgress" >

                        </div>
                    </div>
                    <span class="totalTime">00:00</span>
                </div>
                <div class="buttons">
                    <div class="previous">
                        <div class="long">

                        </div>
                        <div class="triangle">

                        </div>
                    </div>
                    <div class="pause playing" v-on:click='start'>

                    </div>
                    <div class="next">
                        <div class="long">

                        </div>
                        <div class="triangle">

                        </div>
                    </div>
                </div>
            </div>
        </div>


</template>
<script>
    import Vue from 'vue'
    import VueResource from 'vue-resource'
    import jquery from 'jquery'

    Vue.use(VueResource)

    /*留个坑 待解决*/
    export default {
        data() {
            return {
                isLoading: true,
                msg: '',
                res: '',
                spaceX: 0,
                songname: '',
                lyrics: [], //通过集体渲染的循环列表
                lyrics2: [], //通过watch筛选出来的列表
                //存储5条歌词
                ontwolyricstime: '', //前两句
                onlyricstime: '', //前一句
                lyricstime: '', //当前
                nextlyricstime: '', //后一句
                nexttwolyricstime: '', //后两句
                currentTime: '',
            }
        },
        // // 专门控制input 这类输入框的对象 watch
        watch: {
            deep: true,
            currentTime: function(curVal, oldVal) {
                //foreach中的this指向为lyrics  这里存一下lyricstime的this指向
                var ontwothat = this.ontwolyricstime
                var onthat = this.onlyricstime
                var that = this.lyricstime
                var nextthat = this.nextlyricstime
                var nexttwothat = this.nexttwolyricstime
                var loading = this.isLoading
                    //this.lyrics2是一个数组 把这个数组的当前歌词渲染到中间那个li中 首先要获取当前歌词索引 index
                    //由于我用的是脑残式的歌词渲染方式 所以会导致歌词走完后报错  所以在这里开始就给这个数组后面存空值 这样就不会报错了
                this.lyrics2.push(' ')
                this.lyrics2.forEach(function(element, index, array) {
                    if (`${element[1]}${element[2]}:${element[3]}${element[4]}` == curVal) {
                        //如果同步 则渲染到页面上去
                        loading = false
                        ontwothat = array[index - 2].slice(8)
                        onthat = array[index - 1].slice(8)
                        that = array[index].slice(8)
                        nextthat = array[index + 1].slice(8)
                        nexttwothat = array[index + 2].slice(8)
                            //如果中间的索引 走到了 最后一个 那么可以肯定后面没有值了
                    }
                })
                this.isLoading = loading
                this.ontwolyricstime = ontwothat
                this.onlyricstime = onthat
                this.lyricstime = that
                this.nextlyricstime = nextthat
                this.nexttwolyricstime = nexttwothat
            }
        },
        mounted: function() {
            this.fetch(this.$route.params.id)
        },
        methods: {
            fetch(id) {
                this.msg = id

                document.querySelector('#audio').src = `http://ws.stream.qqmusic.qq.com/${id}.m4a?fromtag=46"`
                this.$http.get(`https://route.showapi.com/213-2?musicid=${id}&showapi_appid=31967&showapi_timestamp=&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
                    .then(function(response) {
                        var dispose = response.body.showapi_res_body.lyric.replace(/&#\d+;/g, '')
                        var temp = dispose.replace(/\[/g, `<br>[`)
                        var temp2 = temp.split(/<br>/g)
                        this.lyrics2 = temp.split(/<br>/g)
                            //主渲染列表
                        var lyricsthat = this.lyrics
                        temp2.forEach(function(element, index, array) {
                            var temp3 = element.slice(8)
                            lyricsthat.push(temp3)
                        })
                        this.lyrics = lyricsthat
                        // document.querySelector('.mint-header-title').innerHTML = this.lyrics[6]
                    })
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
            monitor: function() {
                var m, s;
                m = Math.floor(document.querySelector('audio').duration / 60);
                s = Math.floor(document.querySelector('audio').duration % 60);
                m = m < 10 ? '0' + m : m;
                s = s < 10 ? '0' + s : s;
                $('.totalTime').html(m + ":" + s);
                document.querySelector('audio').volume = 0.9
            },
            realtime: function() {
                var m, s;
                m = Math.floor(document.querySelector('audio').currentTime / 60);
                s = Math.floor(document.querySelector('audio').currentTime % 60);
                m = m < 10 ? '0' + m : m;
                s = s < 10 ? '0' + s : s;
                this.currentTime = m + ":" + s;
                $('.schedule').width() / document.querySelector('audio').duration
                $('.currentProgress').css('width', document.querySelector('audio').currentTime * $('.schedule').width() / document.querySelector('audio').duration)
            },
            leap: function(e) {
                var width = $('.schedule').width();
                var point = e.offsetX;
                document.querySelector('audio').currentTime = point / width * document.querySelector('audio').duration
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
    #play {
        height: 100%;
        width: 100%;
        overflow-y: scroll;
        background-color: rgba(156, 39, 176, .55);
    }
    /*页面底部播放器样式*/


    /*全页面的播放器样式*/

    .playmain {
        height: 0;
    }

    .loadinglrc {
        color: #fff;
        margin: auto;
        position: absolute;
        top: 14rem;
        left: 6rem;
    }

    .fli {
        height: 7%;
        font-size: 1rem;
    }

    .fli i {
        font-size: 1rem;
    }

    .return {
        height: 100%;
    }
    /*光盘转动效果 div加类名*/

    .opticalDisk {
        margin: 0 1.5rem;
        width: 800px;
        height: 800px;
        background: url(../../image/timg.png) 0 0 no-repeat;
        animation: circle_top 12s linear 0s forwards;
        animation-iteration-count: infinite;
        animation-play-state: running;
    }

    @keyframes circle_top {
        form {
            transform: rotateZ(0deg);
        }
        to {
            transform: rotateZ(360deg);
        }
    }

    .lyrics {
        width: 100%;
        height: 16rem;
        margin-top: 3rem;
    }

    .lyrics li {
        margin: 2rem 0;
        text-align: center;
        height: 1rem;
        padding: 0 1rem;
    }

    .lyrics li:nth-child(1) {
        font-size: .7rem;
        color: rgba(255, 255, 255, .2);
    }

    .lyrics li:nth-child(2) {
        font-size: .9rem;
        color: rgba(255, 255, 255, .5);
    }

    .lyrics li:nth-child(3) {
        font-size: 1.2rem;
        /*width: 15rem;*/
        color: rgba(255, 255, 255, 1);
    }

    .lyrics li:nth-child(4) {
        font-size: .9rem;
        color: rgba(255, 255, 255, .5);
    }

    .lyrics li:nth-child(5) {
        font-size: .7rem;
        color: rgba(255, 255, 255, .2);
    }

    .lyriccurrent {
        color: rgba(255, 255, 255, 1);
        font-size: .7rem;
        padding: 0 4rem;
    }

    .lyric {
        /*color: rgba(255, 255, 255, .2);*/
        /*font-size: .8rem;*/
        padding: 0 4rem;
    }

    .volume {}

    .volume .sumvolume {
        height: .1rem;
        width: 14rem;
        background-color: rgba(255, 255, 255, .2);
        margin: 0 auto;
        position: relative;
        z-index: 15;
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
        margin-top: 1rem;
        display: flex;
    }

    .playBack input {
        color: rgba(255, 255, 255, .8);
        background: transparent;
        border: none;
        font-size: .8rem;
        width: 2.5rem;
        padding: 0 1rem;
        margin: 1.5rem 0;
    }

    .playBack span {
        font-size: .8rem;
        margin: 1.5rem 0;
        padding: 0 1rem;
        color: rgba(255, 255, 255, .8)
    }

    .playBack .currentProgress {
        height: 100%;
        width: 0;
        background-color: #fff;
        position: relative;
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
    }

    .buttons {
        display: flex;
        justify-content: center;
    }

    .buttons .previous {
        height: 2.5rem;
        width: 2.5rem;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, .1);
        position: relative;
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
