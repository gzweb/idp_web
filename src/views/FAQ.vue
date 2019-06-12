<template>

    <div class="home-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/banner_8.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">Be better prepared for your IELTS test!</div>
                
            </template>
            
        </RellaxBanner>
        <div class="rellax-page-view">
            <div class="title-style-1 faq-title">IELTS FAQ</div>
 
            <div class="container">
                <div class="columns is-gapless">
                    <div class="column is-6 notifications-column-view">
                        <div class="faq-notifications-view">
                            <div class="faq-notifications-item">
                                <div class="faq-notifications-title">Frequently asked questions about IELTS</div>
                                <div class="faq-notifications-text">In addition to the questions below, you will find IELTS support on our official IELTS website: 
                                    <a href="http://www.IELTSessentials.com">www.IELTSessentials.com</a>
                                    . As a proud co-owner of IELTS, 
                                    IDP Education provides free advice, practice questions and IELTS 
                                    Masterclasses and seminars to help you be better prepared.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="column is-6 notifications-column-view">
                        <img class="faq-img" src="../../public/images/faq_1.png" alt="">
                    </div>
                </div>
            </div>
            <div class="container faq-wrap" v-for="(item,key) in list" :key="key">
                <div class="faq-content-title">{{item.group}}</div>
                <div class="faq-content-item" v-for="(items,index) in item.list" :key="index">
                    <div :class="{'is-faq-active':item.isChecked}" class="faq-content-item-title" @click="showItem(key)">
                        {{items.question}}
                    </div>
                    <div v-show="item.isChecked" class="faq-content-item-ctx" v-html="items.answer"></div>
                </div>
            </div>
            
        </div>
        <Footer />
    </div>
</template>

<script>
import RellaxBanner from '@/components/RellaxBanner'
import {getFQA} from '@/api/home'

import translator from '../language/lib/home'


export default {
    components : {
       RellaxBanner
    },
    translator,
    data(){
        return {
            list:[
                {},{},{},{},{},{}
            ]
        }
    },
    async created(){
        const data = await getFQA();
        console.log(data);
        this.list = data.data;
    },
    methods:{
        showItem(key){
            // item.isChecked = !isChecked;

            this.$set(this.list[key], `isChecked`, !this.list[key]['isChecked'])
        }
    }
}
</script>

<style lang="scss">
    #app {
        .faq-title {
            margin-top: 50px;
            margin-bottom: 30px;
            font-size: 24px;
            color: #242C32;
        }
        
    }
    .faq-notifications-view {
        // max-height: 350px;
        height: 100%;
        // padding: 80px 0;
        // box-sizing: border-box;
        overflow: hidden;
        color: white;
        background: #D71735;
        display: flex;
        align-items: center;
        .faq-notifications-item {
            width: 80%;
            margin: 0 auto;
        }
        .faq-notifications-title {
            font-size: 24px;
        }
        .faq-notifications-text {
            margin-top: 20px;
        }
        a {
            color: white;
            text-decoration: underline;
        }
    }
    .notifications-column-view {
        height: 350px;
        overflow: hidden;
    }
    .faq-img {
        // width: 100%;
        margin: 0 auto;
        max-width: inherit;
        height: 350px;
        display: block;
        transition: all 1s;
        &:hover {
            transform: scale(1.05) translate3d(0,0,0);
        }
    }
    .faq-content-title {
        margin-top: 50px;
        margin-bottom: 10px;
        font-size: 24px;
    }
    .faq-content-item-title {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 40px;
        padding: 10px 60px;
        margin-bottom: 20px;
        border: 1px solid #AAB3BB;
        &::before {
            position: absolute;
            top: 0;
            left: 10px;
            bottom: 0;
            margin: auto 0;
            content: '';
            width: 32px;
            height: 32px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url(../../public/images/faq_2.png);
        }
        &::after {
            position: absolute;
            top: 0;
            right: 10px;
            bottom: 0;
            margin: auto 0;
            content: '';
            width: 24px;
            height: 24px;
            transition: all .5s;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url(../../public/images/faq_3.png);
        }
    }
    .faq-content-item-ctx {
        position: relative;
        display: flex;
        align-items: center;
        min-height: 40px;
        padding: 30px 60px;
        margin-bottom: 20px;
        background: rgba(252,147,36,0.10);
        &::before {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            left: 10px;
            content: '';
            width: 32px;
            height: 32px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-image: url(../../public/images/faq_4.png);
        }
        &::after {
            position: absolute;
            top: -10px;
            left: 60px;
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 0 10px 10px 10px;
            border-color: transparent transparent rgba(252,147,36,0.10) transparent;
        }
    }
    .is-faq-active {
        &::after {
            transform: rotateZ(180deg);
        }
    }
    .faq-wrap {
        padding-bottom: 50px;
    }
</style>
