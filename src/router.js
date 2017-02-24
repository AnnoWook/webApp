import RecommendContainer from './RecommendContainer.vue'
import RankContainer from './RankContainer.vue'
import SheetContainer from './SheetContainer.vue'
import MeContainer from './MeContainer.vue'
import NotFoundContainer from './NotFoundContainer.vue'
import MusicContainer from './MusicContainer.vue'
/*childContainer*/
import AllSingerContainer from './ChildContainer/AllSingerContainer.vue'
import SongClassifyContainer from './ChildContainer/SongClassifyContainer.vue'
import PlayerContainer from './ChildContainer/PlayerContainer.vue'
import SearchContainer from './ChildContainer/SearchContainer.vue'

export default [
    { path: '/recommend', component: RecommendContainer },
    { path: '/recommend/allsinger', component: AllSingerContainer },
    { path: '/recommend/songclassify', component: SongClassifyContainer },
    { path: '/player:id', component: PlayerContainer },
    { path: '/search', component: SearchContainer },
    // {path: '/recommend',component: RecommendContainer,beforeEnter: (to, from, next) => {next()},
    //     children: [
    //     ]
    // },
    { path: '/rank', component: RankContainer },
    { path: '/sheet', component: SheetContainer },
    { path: '/me', component: MeContainer },
    { path: '/music', component: MusicContainer },
    { path: '/', redirect: '/recommend' },
    { path: '*', component: NotFoundContainer },
]