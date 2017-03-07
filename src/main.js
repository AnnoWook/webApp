/*引入组件*/
//如果在一个模块化工程中使用它，必须要通过 Vue.use() 明确地安装路由功能
import Vue from 'vue'
import VueRouter from 'vue-router'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'

Vue.use(VueRouter)
Vue.use(Mint)
// 引入文件
import App from './App.vue' //主页
import routes from './router.js' //路由

const router = new VueRouter({
    mode: 'history',
    routes,
})

router.beforeEach((to, from, next) => {
    next()
})

// 创建实例
const app = new Vue({
    data: {
        bus: new Vue(),
    },
    router,
    store,
    render: h => h(App),
}).$mount('#app')
