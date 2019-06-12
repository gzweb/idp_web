<template>
    <div class="contact-us-view fixed-view">
        <DefaultNavBar />
        
        <div class="container contact-us-container">
            <div class="columns is-marginless contact-us-item">
                <div class="column is-10 is-offset-2 is-paddingless">
                    <div class="columns is-marginless">
                        <div class="column is-paddingless">
                            <img src="../../public/images/contact_us_1.png" class="c-u-img" alt="">
                        </div>
                        <div class="column is-paddingless">
                            <div class="notifications-view">
                                <div class="contact-us-notifications-title">{{$t('cu1')}}</div>
                                <div class="contact-us-notifications">
                                    <div class="contact-us-notifications-text">{{$t('cu2')}}</div>
                                    <div class="contact-us-notifications-text">{{$t('cu3')}}</div>
                                    <div class="contact-us-notifications-text">{{$t('cu4')}}</div>
                                    <div class="contact-us-notifications-text">{{$t('cu5')}}</div>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div class="columns is-marginless contact-us-item">
                <div class="column is-10 is-paddingless">
                    <div class="columns is-marginless">
                        <div class="column is-paddingless">
                            <img src="../../public/images/contact_us_2.png" class="c-u-img" alt="">
                        </div>
                        <div class="column is-paddingless">
                            <div class="notifications-view">
                                <div class="contact-us-notifications-title">{{$t('cu6')}}</div>
                                <div class="contact-us-notifications">
                                    <div class="contact-us-notifications-text">{{$t('cu7')}}</div>
                                    <div class="contact-us-notifications-text">{{$t('cu8')}}</div>
                                    <div class="contact-us-notifications-text">{{$t('cu9')}}</div>
                                    <div class="contact-us-notifications-text">{{$t('cu10')}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <div class="maps-view">
            <div class="container contact-us-container">
                <div class="columns">
                    <div class="column is-5">
                        <div class="notifications-view">
                            <div class="contact-us-notifications-title">{{$t('cu11')}}</div>
                            <div class="contact-us-notifications">
                                <div class="contact-us-notifications-text">{{$t('cu12')}}</div>
                                
                            </div>
                        </div>
                    </div>
                    <div class="column is-6 is-offset-1">
                        <img src="../../public/images/map.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <Footer />

        

    </div>
</template>

<script>
import translator from '../language/lib/contact_us'
export default {
    translator
}
</script>

<style lang="scss">
    .contact-us-notifications-title {
        font-size: 24px;
        color: #242C32;
        font-weight: bold;
    }
    .notifications-view {
        margin-left: 60px;
        // margin: 0 auto;
    }
    .contact-us-notifications-text {
        color: #242C32;
    }
    .contact-us-notifications {
        position: relative;
        margin-top: 30px;
        padding-left: 40px;
        &::before {
            position: absolute;
            top:0;
            left: 0;
            width: 1px;
            height: 100%;
            content: '';
            background: #E31B38;
        }
    }
    .contact-us-view {
        img {
            // margin: 0 auto;
            display: block;
        }
        .contact-us-item {
            margin-top: 50px !important;
        }
        .contact-us-container {
            overflow: hidden;
        }
        .c-u-img {
            transition: all .5s;
            &:hover {
                transform: scale(1.05);
            }
        }
    }
    .maps-view {
        margin-top: 50px;
        padding: 50px 20px;
        background: rgba(170,179,187,0.10);
        .notifications-view {
            margin: 0;
        }
    }
</style>
