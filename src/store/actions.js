import Vue from 'vue'
import API from '../config/api.js'

function dispose(api) {
    return (id) => Vue.http.get(
        api.url, {
            params: api.params(id),
        }
    )
}
export const getAmerica = ({},id) => dispose(API.america)(id)
export const getHinterland = ({},id) => dispose(API.hinterland)(id)
export const getHongkong = ({},id) => dispose(API.hongkong)(id)
export const getKorea = ({},id) => dispose(API.korea)(id)
export const getJp = ({},id) => dispose(API.jp)(id)
export const getBallad = ({},id) => dispose(API.ballad)(id)
export const getRock = ({},id) => dispose(API.rock)(id)
export const getSales = ({},id) => dispose(API.sales)(id)
export const getHot = ({},id) => dispose(API.hot)(id)

export const play = ({ commit }) => commit('play')
