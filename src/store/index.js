import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions'
import API from '../config/api.js'

Vue.use(Vuex)

function dispose(api) {
    return (id) => Vue.http.get(
        api.url, {
            params: api.params(id),
        }
    )
}

export default new Vuex.Store ({
    state : {
        data : null, //单首歌曲数据
        nam : null,
        shift : false,
        conceal : false,  //底部播放器的默认隐藏
        currentTime : 0,
        duration : 0,
        songlist : [], //歌曲列表
        // style : 'rgba(102,102,102,.5)', //当前歌曲颜色值
        dataContainer : {  //存储一首歌曲的详细数据
            songid : null,//歌曲id (默认为null刚进去会报一个错误,待修改)
            albumpic_small : null,
            albumpic_big : null,
            albummid : null , //图片id
            songname : '',
            singername : '',
        },
        index : 0,
        clickTime : 0,
    },
    mutations : {
        updateCurrentTime(state ,time){   //交换当前时间
            state.currentTime = time
        },
        durationTime(state,time){     //交换总时间
            state.duration = time
        },
        endedTime(state){
            //歌曲跳转规则判断
            if(state.index === 0 && state.clickTime === 0) {
                state.index = (state.index - 2 + state.songlist.length) % state.songlist.length
            }else{
                state.index = (state.index - 1 + state.songlist.length) % state.songlist.length
            }
            state.dataContainer.songid = state.songlist[state.index].songid  //列表选歌
            state.dataContainer.albumpic_small = state.songlist[state.index].albumpic_small
            state.dataContainer.songname = state.songlist[state.index].songname
            state.dataContainer.singername = state.songlist[state.index].singername
            state.dataContainer.albumpic_big = state.songlist[state.index].albumpic_big
            state.clickTime++
        },
        previous(state){
            //歌曲跳转规则判断
            if(state.index === 0 && state.clickTime === 0) {
                state.index = (state.index - 2 + state.songlist.length) % state.songlist.length
            }else{
                state.index = (state.index - 1 + state.songlist.length) % state.songlist.length
            }
            state.dataContainer.songid = state.songlist[state.index].songid  //列表选歌
            state.dataContainer.albumpic_small = state.songlist[state.index].albumpic_small
            state.dataContainer.songname = state.songlist[state.index].songname
            state.dataContainer.singername = state.songlist[state.index].singername
            state.dataContainer.albumpic_big = state.songlist[state.index].albumpic_big
            state.clickTime++
        },
        next(state){
            //歌曲跳转规则判断
            if( state.clickTime === 0 ){
                state.index = state.index % state.songlist.length
            }else{
                state.index = (state.index + 1) % state.songlist.length
            }
            state.dataContainer.songid = state.songlist[state.index].songid  //列表选歌
            state.dataContainer.albumpic_small = state.songlist[state.index].albumpic_small
            state.dataContainer.songname = state.songlist[state.index].songname
            state.dataContainer.singername = state.songlist[state.index].singername
            state.dataContainer.albumpic_big = state.songlist[state.index].albumpic_big
            state.clickTime++
        },
        play(state,index){
            state.index = index
            state.dataContainer.songid = state.songlist[state.index].songid  //列表选歌
            state.dataContainer.albumpic_small = state.songlist[state.index].albumpic_small
            state.dataContainer.albumpic_big = state.songlist[state.index].albumpic_big
            state.dataContainer.songname = state.songlist[state.index].songname
            state.dataContainer.singername = state.songlist[state.index].singername
        },
        getData(state, payload) {
            state.data = payload.songdata
            state.dataContainer.songid = payload.songdata.songid   //歌曲id
            state.dataContainer.albumpic_small = payload.songdata.albumpic_small  //封面(小)
            state.dataContainer.albumpic_big = payload.songdata.albumpic_big      //封面(大)
            state.dataContainer.songname = payload.songdata.songname
            state.dataContainer.singername = payload.songdata.singername
            // state.dataContainer.style = payload.songdata
            for( var i = 0; i < state.songlist.length ; i++){
                if( state.songlist[i].songname == payload.songdata.songname ) return
            }
            state.songlist.push(payload.songdata)
            if(state.songlist.length > 0){
               state.conceal = true
            }
        },
        getName(state, payload){
            state.nam = payload.name
        },
        getShift(state ,payload){
            state.shift = payload.shift
        }
    },
    getters : {
        currentTime : state => parseInt(state.currentTime / 60) + ':' + (Array(2).join(0) + (state.currentTime % 60)).slice(-2),
        duration : state => parseInt(state.duration / 60) + ':' + (Array(2).join(0) + (state.duration) % 60 ).slice(-2),
        dataUrl : state =>{
            if( state.dataContainer.songid === null ){
                return false
            }else{
                return 'http://ws.stream.qqmusic.qq.com/' + state.dataContainer.songid + '.m4a?fromtag=46'
            }
        },
        coverSmall : state => {
            if( state.dataContainer.albumpic_small === null ){
                return false
            }else{
                return state.dataContainer.albumpic_small
            }
        },
        coverBig : state => {
                if( state.dataContainer.albumpic_big === null ){
                    return false
                }else{
                    return state.dataContainer.albumpic_big
                }
        },
        songname : state =>{
            return state.dataContainer.songname
        },
        singername : state=>{
            return state.dataContainer.singername
        },
        backgroundCover : state=>{
            return state.dataContainer.albumpic_big
        }
    },
    actions : {
        getAmerica({},id){
            return dispose(API.america)(id)
        },
        getHinterland({},id){
            return dispose(API.hinterland)(id)
        },
        getHongkong({},id){
            return dispose(API.hongkong)(id)
        },
        getKorea({},id){
            return dispose(API.korea)(id)
        },
        getJp({},id){
            return dispose(API.jp)(id)
        },
        getBallad({},id){
            return dispose(API.ballad)(id)
        },
        getRock({},id){
            return dispose(API.rock)(id)
        },
        getSales({},id){
            return dispose(API.sales)(id)
        },
        getHot({},id){
            return dispose(API.hot)(id)
        },
        play({ commit }){
            return commit('play')
        },
    }
})

// export default new Vuex.Store({
//     state,
//     getters,
//     actions,
//     mutations,
// })
