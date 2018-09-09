
import Vue from 'vue'
import Vuex from 'vuex'
import types from './mutation-types.js'
Vue.use(Vuex);


const state = {
    is_not_first: true,
    animate_name: 'vux-pop-in',
    nav_index: 1
};

const mutations = {
    [ types.JUDGE_IS_NOT_FIRST ] (state,is_not_first) {
        state.is_not_first = is_not_first;
    },
    [ types.SET_ANIMATE_NAME ] (state,animate_name) {
        state.animate_name = animate_name;
    },
    [ types.SET_NAV_INDEX ] (state,nav_index) {
        state.nav_index = nav_index;
    }
};

export default new Vuex.Store({
    state,
    mutations
})
