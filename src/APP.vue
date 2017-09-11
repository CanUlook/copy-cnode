<template>
    <div id="app">

        <Vheader></Vheader>

        <Vcontent> </Vcontent>

        <AsideMenu></AsideMenu>

        <transition name="show">
            <Login v-if="isShowLogin"></Login>
        </transition>

        <stransition name="show">
            <Info v-if="isShowInfo"></Info>
        </stransition>
    </div>
</template>