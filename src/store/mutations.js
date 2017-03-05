export function getData(state, payload) {
  state.data = payload.songdata
  for( var i = 0; i < state.songlist.length ;i++){
      if( state.songlist[i].songname == payload.songdata.songname ) return
  }
  state.songlist.push(payload.songdata)
}
export function getName(state, setname){
    state.nam = setname.name;
}

export function getShift(state ,setshift){
    state.shift = setshift.shift
}
