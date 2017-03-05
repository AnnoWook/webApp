import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as mutations from './mutations'
import * as actions from './actions'
Vue.use(Vuex)

const state = {
    data : null,
    nam : null,
    songlist : [],
    shift : false,
}

const store = new Vuex.Store({
    state,
    getters,
    actions,
    mutations,
})

export default store
