<template>
    <div id="app">

        <banner></banner>

        <mainContent></mainContent>

        <asideMenu></asideMenu>

        <transition name="show">
            <login v-if="isShowLogin"></login>
        </transition>

        <transition name="show">
            <info v-if="isShowInfo"></info>
        </transition>

        <transition name="show">
            <message v-if="isShowMsg"></message>
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
    import banner from './components/banner/banner.vue'
    import mainContent from './components/mainContent/mainContent.vue'
    import asideMenu from './components/asideMenu/asideMenu.vue'
    import login from './components/login/login.vue'
    import info from './components/info/info.vue'
    import message from './components/message/message.vue'
    import newArticle from './components/newArticle/newArticle.vue'
    import about from './components/about/about.vue'

    export default {
        name: 'app',
        components: {
            banner,
            mainContent,
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