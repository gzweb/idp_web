<template>
    <div class="application-step-view">
        <div class="columns is-gapless is-mobile">
            <div class="column">
                <div class="application-step-item application-step-item-active">
                    <div class="application-step-item-number">01</div>
                    <div class="application-step-text">{{$t('ap7')}}</div>
                </div>
            </div>
            <div class="column is-narrow application-step-icon" v-if="show">
                
            </div>
            <div class="column" v-if="show">
                <div class="application-step-item">
                    <div class="application-step-item-number">02</div>
                    <div class="application-step-text">{{$t('ap8')}}</div>
                </div>
            </div>
            <div class="column is-narrow application-step-icon">
                
            </div>
            <div class="column">
                <div class="application-step-item">
                    <div class="application-step-item-number">{{show?'03':'02'}}</div>
                    <div class="application-step-text">
                        <slot name="text">
                            {{$t('ap9')}}
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:['show']
}
</script>

<style>

</style>
