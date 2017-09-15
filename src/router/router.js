import vue from 'vue';
import router from 'vue-router';
import articleList from '../components/mainContent/articleList.vue';
import article from '../components/mainContent/article.vue';
import user from '../components/user/user.vue';

vue.use(router)

export default new router({
    routes: [
        {
            path: '/',
            name: 'articleList',
            component: articleList
        },
        {
            path: '/article/:id',
            name: 'article',
            component: article
        },
        {
            path: '/user/:name?',
            name: 'user',
            component: user
        }
    ]
})