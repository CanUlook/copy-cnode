import Vue from 'vue'
import app from './app'
import router from './router/router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import vuex from 'vuex';
import moment from 'moment'

Vue.use(vueAxios, axios);

Vue.use(vuex);

Vue.prototype.moment = moment;
Vue.prototype.changeTime = time => moment(time).startOf('minute').fromNow().replace(/hours?/, '小时').replace('ago', '前').replace(/days?/, '天').replace(/minutes?/, '分钟').replace(/\ban?/, '1').replace(/months?/, '个月').replace(/\byears?/, '年').replace(/\s/g, '').replace('fewseconds','分钟');

const store = new vuex.Store({
    state: {
        tab: 'all',
        articleList: [],
        collectTopics: [],
        isLoading: false,
        isMore: false,
        isShowAsideMenu: false,
        isShowLogin: false,
        isShowInfo: false,
        isShowMsg: false,
        isShowNewArticle: false,
        isShowAbout: false,
        scrollTop: 0,
        userInfo: localStorage.userInfo && JSON.parse(localStorage.userInfo) || {avatar_url: '', id: '', loginname: '', success: false},
        ak: localStorage.ak || ''
    },

    mutations: {
        changeTab(state, payload) {
            state.isLoading = payload.hasOwnProperty('isLoading') ? payload.isLoading : state.isLoading;
            state.tab = payload.type || state.tab;
            state.articleList = payload.articleList || state.articleList;
        },
        viewArcticle(state, flag) {
            state.isLoading = flag;
        },
        changeMore(state, flag) {
            state.isMore = flag;
        },
        changeScrollTop(state, scrollTop) {
            state.scrollTop = scrollTop;
        },
        showAsideMenu(state, flag) {
            state.isShowAsideMenu = flag;
        },
        showLogin(state, flag) {
            state.isShowLogin = flag;
        },
        showInfo(state, flag) {
            state.isShowInfo = flag;
        },
        showMsg(state, flag) {
            state.isShowMsg = flag;
        },
        showNewArticle(state, flag) {
            state.isShowNewArticle = flag;
        },
        showAbout(state, flag) {
            state.isShowAbout = flag;
        },
        updateUserInfo(state, userInfo) {
            state.userInfo = userInfo;
        },
        updateAk(state, ak) {
            state.ak = ak;
        },
        updateCollect(state, collectTopics) {
            state.collectTopics = collectTopics;
        }
    },


});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<app/>',
    components: { app }
});
