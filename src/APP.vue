<template>
    <div id="app">

        <header></header>

        <content></content>

        <asideMenu></asideMenu>

        <transition name="show">
            <Login v-if="isShowLogin"></Login>
        </transition>

        <transition name="show">
            <Info v-if="isShowInfo"></Info>
        </transition>

        <transition name="show">
            <Msg v-if="isShowMsg"></Msg>
        </transition>

        <transition name="show">
            <newArticle v-if="isShowNewArticle"></newArticle>
        </transition>

        <transition name="show">
            <about v-if="isShowAbout"></about>
        </transition>
    </div>
</template>

<script>
    import header from './components/header/header.vue'
    import content from './components/content/content.vue'
    import AsideMenu from './components/asideMenu/asideMenu.vue'
    import login from './components/login/login.vue'
    import info from './components/info/info.vue'
    import message from './components/message/message.vue'
    import newArticle from './components/newArticle/newArticle.vue'
    import about from './components/about/about.vue'

    export default {
        name: 'app',
        components: {
            header,
            content,
            asideMenu,
            login,
            info,
            message,
            newArticle,
            about
        },
        computed: {
           isShowLogin(){
               return this.$store.state.isShowLogin;
           },
            isShowInfo(){
                return this.$store.state.isShowInfo;
            },
            isShowMsg(){
                return this.$store.state.isShowMsg;
            },
            isShowNewArticle(){
                return this.$store.state.isShowNewArticle;
            },
            isShowAbout(){
                return this.$store.state.isShowAbout;
            }
        }
    }
</script>

<style lang="scss">
    @import './style/common.scss';

    #app {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }
</style>