import Vue from 'vue'
import Vuex from 'vuex'
// import * as getters from './getters'
// import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)

const state = {
    data : null,
    nam : null,
    songlist : [],
    shift : false,
    conceal : false,  //底部播放器的默认隐藏
    //=========================测试=========================
    currentTime : 0,
}

// const getters = {
//     currentTime : state => Math.floor(state.currentTime / 60)
// }


const mutations = {
      getData(state, payload) {
          state.data = payload.songdata
          for( var i = 0; i < state.songlist.length ; i++){
              if( state.songlist[i].songname == payload.songdata.songname ) return
          }
          state.songlist.push(payload.songdata)
          if(state.songlist.length > 0){
             state.conceal = true
          }
      },
      getName(state, setname){
          state.nam = setname.name
      },
      getShift(state ,setshift){
          state.shift = setshift.shift
      }
}

export default new Vuex.Store({
    state,
    // getters,
    actions,
    mutations,
})
