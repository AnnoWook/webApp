
import NotFound from './components/NotFound.vue'
/*childContainer*/
import Home from './components/home.vue'
import AllSinger from './components/ChildContainer/AllSinger.vue'
import SongClassify from './components/ChildContainer/SongClassify.vue'

export default [
    { path: '/home', component: Home },
    { path: '/allsinger', component: AllSinger },
    { path: '/songclassify', component: SongClassify },
    { path: '/', redirect: '/home' },
    { path: '*', component: NotFound },
]
