<template>
    <div class="rellax-view">
        <slot name="rellaxpic"></slot>
        <div class="rellax-fixed-view" v-rellax="options">
            <slot name="rellaxpic"></slot>
            <div class="rellax-text-view">
                <slot name="rellaxtext"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import VueRellax from 'vue-rellax'
Vue.use(VueRellax)


export default {
    data(){
        return {
            options:{
                speed:'2'
            }
        }
    }
}
</script>

<style lang="scss">
    .rellax-page-view {
        position: relative;
        z-index: 2;
        overflow: hidden;
        background-color: #fff;
    }
    .rellax-view {
        position: relative;
        max-height: 450px;
        overflow: hidden;
        > img {
            opacity: 0;
        }
        .rellax-pic {
            display: block;
            height: 100%;
            width: auto;
            max-width: inherit;
        }
        .rellax-fixed-view {
            position: fixed;
            top: 90px;
            left: 0;
            width: 100%;
            max-height: 450px;
            overflow: hidden;
            display: flex;
            justify-content: center;
            .rellax-text-view {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
            }
            .rellax-text {
                width: 100%;
                text-align: center;
                color: white; 
            }
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                content: '';
                background-color: rgba(0,0,0,.5);
            }
        }
    }
</style>
