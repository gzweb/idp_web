<template>
    <swiper :options="parentConfig" ref="parentSwiper" class="index-banner">
        <swiper-slide class="parent-slide">
            <swiper :options="childConfig" ref="childSwiper" class="child-swiper">
                <swiper-slide v-for="(item,key) in bannerData.banner" :key="key">

                    <div class="slide-item">
                        <img :class="{'slide-pic-active':swiperIndex == key}" class="slide-img" :src="item.image_url" alt="">
                    </div>

                    <div class="slide-ctx" v-if="key == 0">
                        <div class="container">
                            <div class="columns">
                                <div class="column is-8 is-offset-2-desktop">
                                    <div class="home-ctx" v-html="item.text"></div>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="slide-ctx" v-if="key > 0">
                        <div class="slide-text is-size-3-touch">
                            <!-- {{item.text || 'TEST TEXT'}} -->
                            {{bannerData.sector[key]['name']}}
                        </div>
                        <div class="slide-button" @click="goPage(key)">
                            
                            {{$t('s13')}}
                        </div>
                    </div>
                </swiper-slide>
                <!-- <div class="swiper-pagination is-hidden-desktop" id="swiper-pagination" ></div> -->
                <div class="swiper-pagination" id="swiper-pagination" ></div>
            </swiper>
            <!-- <div class="container parent-swiper-menu is-hidden-touch">
                <div class="container container-after">
                    <div class="columns is-gapless">
                        <div v-show="key > 0" @mouseenter="setSwiperPage(key)" class="column" v-for="(item,key) in bannerData.sector" :key="key">
                            <div class="column-item" :class="{'column-item-active':key == swiperIndex}">{{item.name}}</div>
                        </div>
                    </div>
                    
                </div>
            </div> -->
        </swiper-slide>
        <swiper-slide class="slide-auto parent-slide">
            <Footer />
        </swiper-slide>
    </swiper>

</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
// import Footer from './Footer'


export default {
    computed:{
        bannerData(){
            return this.$store.state.TestList
        },
    },
    data(){
        return {
            swiperIndex:0,
            parentConfig : {
                direction:'vertical',
                slidesPerView: 'auto',
                mousewheel: true,
                on:{
                    reachBeginning: e =>{
                        
                    },
                    reachEnd: e =>{
                        
                    }
                }
            },
            childConfig:{
                effect:'fade',
                lazy: true,
                autoplay:{
                    delay: 10000,
                    stopOnLastSlide: false,
                    disableOnInteraction: true,
                },
                pagination: {
                    el: '#swiper-pagination',
                    clickable :true,
                    bulletClass : 'my-bullet',
                    bulletActiveClass: 'my-bullet-active'
                },
                on:{
                    slideChange: e =>{
                        const key = this.$refs.childSwiper.swiper.activeIndex;
                        this.swiperIndex = key;
                    }
                }
            }
        }  
    },
    methods:{
        setSwiperPage(key){
            this.$refs.childSwiper.swiper.slideTo(key);
        },
        goPage(key){
            
            if(this.bannerData['banner'][key]['external']) {
                window.location.href = this.bannerData['banner'][key]['jump_url']
            }else{
                this.$router.push({
                    path:this.bannerData['banner'][key]['jump_url']
                })
            }
        }
    },
    created(){
        
    
    },
    components:{
        swiper,
        swiperSlide
    }
}
</script>

<style lang="scss">
    .index-banner {
        height: 100%;
    }
    #app .slide-auto {
        height: auto;
    }
    .my-bullet {
        position: relative;
        display: inline-block;
        width: 40px; 
        height: 40px; 
        margin: 0 5px;
        cursor: pointer;
        &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 4px;
            opacity: .4;
            content: '';
            background-color: white;
        }
    }
    .my-bullet-active {
        &::before {
            opacity: 1;
        }
    }
    .parent-slide {
        overflow: hidden;
        .child-swiper {
            height: 100%;
        }
        .min-height {
            transition: all 1s;
        }
        .column {
            position: relative;
            // cursor: pointer;
        }
        .column-item {
            margin-right: 50px;
            font-size: 16px;
            min-height: 50px;
            opacity: .6;
            color: white;
        }
        .column-item-active {
            font-weight: bold;
            opacity: 1;
        }
        .column-item-active::before {
            position: absolute;
            bottom: -10px;
            left: 0;
            width: calc(100% - 50px);
            height: 2px;
            content: '';
            animation: fadeIn 1s;
            background: #D81734;
        }
        .container-after {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            &::before {
                position: absolute;
                bottom: -10px;
                left: 0;
                width: 100%;
                height: 1px;
                content: '';
                background: rgba(216,216,216,0.5);
            }
        }
        .parent-swiper-menu {
            position: absolute;
            bottom: 30px;
            left: 0;
            right: 0;
            margin: 0 auto;
            width:100%;
            min-height: 70px;
            // height: 70px; 
            z-index: 2;
        }
        // .parent-swiper-wrap {
        //     width: 1380px;
        //     margin: 0 auto;
        //     height: 70px;
        //     background-color: aqua;
        // }
        .slide-item {
            position: relative;
            height: 100%;
            display: flex;
            align-items: center;
            justify-items: center;
            overflow: hidden;
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                content: '';
                z-index: 1;
                background-color: rgba(0, 0, 0, 0.3);
            }
        }
        .slide-ctx {
            position: absolute;
            display: flex;
            top: 0;
            left: 0;
            font-size: 70px;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;
            z-index: 3;
            flex-direction:column;
        }
        .slide-text {
            margin-top: 50px;
            width: 66%;
            text-align: center;
            color: white;
        }
        .slide-button {
            width: 340px;
            height: 62px;
            margin-top: 56px;
            font-size: 20px;
            line-height: 62px;
            text-align: center;
            color: white;
            cursor: pointer;
            // border: 1px solid white;
            background: #E31B38;
            border-radius: 35px;
            transition: all 0.5s;
            &:hover {
                // border: 1px solid #D71735;
                transform: translate3d(0,-6px,0);
            }
        }
        .slide-img {
            position: absolute;
            top: 0;
            left: 50%;
            width: 1920px;
            margin-left: -960px;
            max-width:inherit;
            transform: scale(1.1);
            transition: transform 10s;
        }
        .slide-pic-active {
            transform: scale(1);
        }
    }
    #swiper-pagination {
        width: 100%;
        bottom: 30px;
        .swiper-pagination-bullet-active {
            opacity: 1;
            background-color: #fff;
        }
    }
    .swiper-pagination-bullet {
        margin: 0 4px;
        opacity: .8;
    }
    .home-ctx {
        color: white;
        p {
            font-size: 50px;
            text-align: center;
        }
        ul {
            width: 60%;
            margin: 30px auto 0;
            font-size: 26px;
        }
        li {
            position: relative;
            padding-left: 20px;
            margin-top: 10px;
            opacity: .7;
            &::before {
                position: absolute;
                top: 16px;
                left: 0;
                width: 6px;
                height: 6px;
                border-radius: 100%;
                content: '';
                background-color: #fff;
            }
            
        }
    }
</style>
