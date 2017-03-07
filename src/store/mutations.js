import Vue from 'vue'
export function getData(state, payload) {
  state.data = payload.songdata
  for( var i = 0; i < state.songlist.length ; i++){
      if( state.songlist[i].songname == payload.songdata.songname ) return
  }
  state.songlist.push(payload.songdata)
  if(state.songlist.length > 0){
     state.conceal = true
  }
  // 需要一个专门存储列表中的歌曲id,
  // Vue.http.get(`https://route.showapi.com/213-2?musicid=${state.data.songid}&showapi_appid=31967&showapi_timestamp=&showapi_sign=7c45d428c1024a5e88c3cbc78a506646`, )
  // .then(function(response) {
  //     const acquire = response.body.showapi_res_body.lyric.replace(/&#\d+;/g, '')
  //     const dispose = acquire.replace(/\[/g, `<br>[`)
  //     const getlyric = dispose.split(/<br>/g)
  //     const lyricdispose = getlyric.slice(6,-1)
  //     state.songid = lyricdispose
  //   //   console.log(state.songid)
  // })



}
export function getName(state, setname){
    state.nam = setname.name;
}

export function getShift(state ,setshift){
    state.shift = setshift.shift
}
