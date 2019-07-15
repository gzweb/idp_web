<template>
    <div class="modal animated" :class="{'fadeIn':show ,'is-active':show}" v-show="show" @touchmove.prevent>
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="modal-view">
                <div class="modal-view-title">
                    <slot>{{$t('s6')}}</slot>
                    <div class="delete is-medium" @click="hideModal"></div>
                </div>
                <div class="modal-view-ctx" v-html="ctxMessage"></div>
                <div class="modal-button-view">
                    <div class="button button-style modal-button" @click="hideModal">确定</div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['show','ctxMessage'],
    methods:{
        hideModal(){
            this.$emit('hideModal')
        }
    }
}
</script>

<style lang="scss">
    .modal-view {
        width: 90%;
        margin: 0 auto;
        background-color: #fff;
        border-radius: 8px;
        overflow: hidden;
        .modal-view-title {
            position: relative;
            height: 40px;
            line-height: 40px;
            font-size: 20px;
            color: white;
            text-align: center;
            background-color: #E31B38;
            .delete {
                position: absolute;
                right: 10px;
                top: 0;
                bottom: 0;
                margin: auto 0;
            }
        }
        .modal-view-ctx {
            min-height: 150px;
            padding: 10px 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 18px;
            color: #242C32;
        }
        .modal-button {
            width: 100px;
            margin: 0 auto;
        }
        .modal-button-view {
            padding-bottom: 20px;
            text-align: center;
        }
    }
</style>
