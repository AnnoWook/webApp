
import NotFound from './components/NotFound.vue'
/*childContainer*/
import Home from './components/home.vue'
import AllSinger from './components/ChildContainer/AllSinger.vue'
import SongClassify from './components/ChildContainer/SongClassify.vue'
// import Player from './components/ChildContainer/Player.vue'
// import Search from './components/ChildContainer/Search.vue'

export default [
    { path: '/home', component: Home },
    { path: '/allsinger', component: AllSinger },
    { path: '/songclassify', component: SongClassify },
    // { path: '/player:id', component: Player },
    { path: '/', redirect: '/home' },
    // { path: '/search', component: Search },
    { path: '*', component: NotFound },
]
