<template>
    <div class="transparent-view" id="transparent-view">

        <div class="cookie-view" id="cookie-view" v-if="isCookieTips">
            <div class="container">
                <div class="cookie-tips">
                    <div class="cookie-close" @click="closeCookieTips"></div>
                    <div class="cookie-text" v-html="$t('s16')"></div>
                </div>
            </div>
        </div>
        <!-- PC -->
        <nav class="pc-navbar is-hidden-touch navbar is-transparent">
            <div class="container">
                <div class="navbar-brand is-marginless">
                    <a class="navbar-item is-paddingless" @click="goIndex">
                        <img class="navbar-logo" src="../../../public/images/top-logo.png" alt="">	
                    </a>                    
                </div>
                
                <div class="navbar-menu is-marginless">
                    <div class="navbar-end">       
                        <div v-if="!isLogin" @click="goPage(0)" class="navbar-item is-paddingless pc-navbar-item">
                            {{$t('s1')}}
                        </div>
                        <div v-if="!isLogin" @click="goPage(1)" class="navbar-item is-paddingless pc-navbar-item">
                            {{$t('s2')}}   
                        </div>
                        <div @click="goIndex" class="navbar-item is-paddingless pc-navbar-item">
                            {{$t('s12')}}
                        </div>
                        <div @click="goPage(2)" class="navbar-item is-paddingless pc-navbar-item">
                            {{$t('s3')}}  
                        </div>
                        <div @click="goPage(3)" class="navbar-item is-paddingless pc-navbar-item">
                            {{$t('s4')}}   
                        </div>
                        <div @click="goPage(4)" class="navbar-item is-paddingless pc-navbar-item">
                            {{$t('s5')}}  
                        </div>
                        <div @click="goPage(5)" class="navbar-item is-paddingless pc-navbar-item">
                            {{$t('s8')}}  
                        </div>
                        <div v-if="isLogin" @click="exitAccount" class="navbar-item is-paddingless pc-navbar-item">
                            {{$t('s7')}}   
                        </div>
                        <Language />
                    </div>
                </div>
            </div>
        </nav>

        <div class="navigation-list is-hidden-touch">
            <div class="container is-hidden-touch navigation-view">
                <div class="navigation-wrap">
                    <div @click="testPage(key)" :class="{'navbar-active':key == navbarKey}" class="navigation-item has-text-centered" v-if="key > 0" v-for="(item,key) in getTestList.sector" :key="key">
                        {{item.name}}
                    </div>
                </div>
                
            </div>
        </div>
        


        <!-- 移动 -->

        <nav class="mobile-navbar is-hidden-desktop navbar" >
            <div class="container mobile-center">
                <div class="navbar-brand">
                    <div class="navbar-item" @click="goIndex">
                        
                        <img class="navbar-logo" src="../../../public/images/top-logo.png" alt="">	
                    </div>
                    <div class="mobile-fixed-item is-paddingless">
                        <Language />
                    </div>
                    <div class="navbar-burger" :class="{'is-active':isNavbar}"
				    @click="showlayer">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>

        <div class="mobile-layer animated" v-show="isNavbar" :style="{'top':getTop+'px','height':'calc(100% - '+getTop+'px)'}">
            <!-- <slot name="mobile-index"></slot> -->
            <div v-if="key > 0" @click="testPage(key)" v-for="(item,key) in getTestList.sector" :key="key" class="mobile-navbar-item is-paddingless navbar-item">
                <div class="mobile-navbar-ctx">{{item.name}}</div>
            </div>
            <div @click="goIndex" class="mobile-navbar-item is-paddingless navbar-item">
                <div class="mobile-navbar-ctx">{{$t('s12')}}</div>
            </div>
            <div @click="goPage(2)" class="mobile-navbar-item is-paddingless navbar-item">
                <div class="mobile-navbar-ctx">{{$t('s3')}}</div>
            </div>
            <div @click="goPage(3)" class="mobile-navbar-item is-paddingless navbar-item">
                <div class="mobile-navbar-ctx">{{$t('s4')}}</div>
            </div>
            <div @click="goPage(4)" class="mobile-navbar-item is-paddingless navbar-item">
                <div class="mobile-navbar-ctx">{{$t('s5')}}</div>
            </div>
            <div @click="goPage(5)" class="mobile-navbar-item is-paddingless navbar-item">
                <div class="mobile-navbar-ctx">{{$t('s8')}}</div>
            </div>

            <div v-if="isLogin" @click="exitAccount" class="mobile-navbar-item is-paddingless navbar-item">
                <div class="mobile-navbar-ctx">{{$t('s7')}}</div>
            </div>
            <div class="mobile-flex" v-if="!isLogin">
                <div @click="goPage(0)" class="mobile-layer-item">{{$t('s1')}}</div>
                <div class="mobile-flex-line"></div>
                <div @click="goPage(1)" class="mobile-layer-item">{{$t('s2')}}</div>
            </div>
        </div>
    </div>
</template>

<script>
import Language from './Language'
import api from '@/api/index'
// import { removeCookie } from '../../utils/utils'
import {exitAccount} from '../../api/public'
import { setTimeout } from 'timers';

export default {
    props:['type'],
    data(){
        return {
            isNavbar:0,
            navbarKey:0
        }
    },
    computed: {
        // indexNavBarMove () {
        //     return this.$store.state.isIndexFixed
        // },
        // swiperIndex () {
        //     return this.$store.state.swiperIndex
        // },
        getTestList(){
            return this.$store.state.TestList
        },
        isCookieTips(){
            return this.$store.state.isCookieTips
        },
        isLogin () {
            return this.$store.state.isLogin
        },
        getTop(){
			return this.$store.state.appTop
		}
    },
    methods:{
        testPage(key){
            this.isNavbar = false;
            if(this.getTestList['banner'][key]['external']) {
                window.location.href = this.getTestList['banner'][key]['jump_url']
            }else{

                // console.log(key,this.getTestList['banner'])

                this.$router.push({
                    path:this.getTestList['banner'][key]['jump_url']
                })
            }
        },
        closeCookieTips(){
            this.$store.commit('setCookieTipsState',0);
            const height = $('#transparent-view').height() - $('#cookie-view').height();
            this.$store.commit('setAppTop', height) ;
            
            
            $('#rellax-fixed-view').css({
                'top':height+'px'
            })
            // Cookies.set('cookietips', 'false', { expires: 30 });
        },
        async exitAccount(){
            await exitAccount();
            Cookies.remove('token');
            // console.log(removeCookie);
            location.reload();
        },
        showlayer(){
            this.isNavbar= !this.isNavbar;
            
            // 控制首页导航栏动画效果
            // if(!this.swiperIndex) {
            //     this.$store.commit('setIndexFixed',this.isNavbar)
            // }
        },
        goPage(key){
            this.isNavbar = false;
            switch(key) {
                case 0:
                    this.$router.push('/login')
                break;
                case 1:
                    this.$router.push('/sign_up')
                break;
                case 2:
                    this.$router.push('/contact_us')
                break;
                case 3:
                    this.$router.push('/about')
                break;
                case 4:
                    this.$router.push('/home')
                break;
                case 5:
                    this.$router.push('/faq')
                break;
               
            }
        },
        goIndex(){
            
            

            if(this.$route.name == 'Index') {
                window.location.reload();
                
            }else{
                this.$router.push('/');
            }
        }
    },
    async created(){
        if(this.getTestList.length < 2) {
            const data = await api.getBanner();
            data.data.sector.unshift({});        
            this.$store.commit('setTestList', data.data)
            console.log(data.data)
        };
        


        this.$nextTick(()=>{
            const height = $('#transparent-view').height();
            this.$store.commit('setAppTop', height)            
        });




        let str;

        switch(this.$route.name) {
            case 'ScoreApplication':
                str = '/score_application'
            break;
            case 'TestDateApplication':
                str = '/test_date_application'
            break;
            case 'RefundApplication':
                str = '/refund_application'
            break;
            case 'AdditionalTestApplication':
                str = '/additional_test_application'
            break;
            case 'PostScoreApplication':
                str = '/post_score_application'
            break;
        }

        this.navbarKey = _.findIndex(this.getTestList['banner'], function(o) { return o.jump_url == str });
        this.$store.commit('setTestTile', this.getTestList['sector'][this.navbarKey]['name'])  
        
        

        
    },
    components:{
        Language,
    }
}
</script>

<style lang="scss">
    #app {
        .transparent-view {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            z-index: 20;
        }
        .navbar-active {
            color:#e31837 !important;
        }
        .navigation-list {
            min-height: 60px;
            display: flex;
            align-items: center;
            background: white;
            .navigation-wrap {
                display: flex;
                justify-content: space-between;
            }
            &::after {
                position: absolute;
                bottom: -1px;
                left: 0;
                width: 100%;
                height: 2px;
                content: '';
                background: #D71735;
            }
            .navigation-item {
                transition: all 0.5s;
                cursor: pointer;
                font-size: 18px;
                color: #333F48;
                &:hover {
                    color: #D71735;
                }
            }
        }
        .cookie-tips {
            position: relative;
            padding-right: 30px;
            .cookie-close {
                position: absolute;
                right: 14px;
                bottom: 0;
                top: 0;
                margin: auto 0;
                width: 18px;
                height: 18px;
                cursor: pointer;
                z-index: 1;
                transition: all 0.5s;
                background-image: url(../../../public/images/cookie_colose.png);
                background-size: 100%;
                background-repeat: no-repeat;
                &:hover {
                    transform: rotate(180deg);
                }
            }
        }
        .cookie-text {
            position: relative;
            padding-left: 30px;
            ::before {
                position: absolute;
                top: 5px;
                left: 0;
                width: 19px;
                height: 19px;
                content: '';
                background-image: url(../../../public/images/warning.png);
                background-size: 100%;
                background-repeat: no-repeat;
            }
        }
        .cookie-link {
            color: #333F48;
            text-decoration: underline;
        }
        .cookie-view {
            min-height: 30px;
            line-height: 30px;
            background: #D1D6DA;
        }
        .mobile-fixed-item {
            position: absolute;
            right: 4rem;
            top: 0;
            bottom: 0;
            margin: auto 0;
            display: flex;
        }
        .pc-navbar .navbar-logo,.mobile-navbar .navbar-logo {
            width: 230px;
            height: auto;
            max-width: inherit;
            max-height: inherit;
        }
        .mobile-navbar .navbar-logo{
            width: 180px;
        }
        .pc-navbar-item {
            position: relative;
            margin: 0 20px;
            transition: all 0.5s;
            cursor: pointer;
            color: #697782;
        
            &::before {
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;
                right: -20px;
                width: 1px;
                height: 20px;
                content: '';
                background-color: #697782;
            }
            &:hover {
                color: #D71735;
            }
        }
        // .index-navbar-item {
        //     color: white;
        // }
        // .other-navbar-item {
        //     color: #697782;
        //     &::before{
        //         background-color: #697782;
        //     }
        // }
        .pc-navbar,.mobile-navbar {
            width: 100%;
            &::after {
                position: absolute;
                bottom: -1px;
                left: 0;
                width: 100%;
                height: 2px;
                content: '';
                background: #D71735;
            }
        }
        .pc-navbar {
            &::after {
                bottom: 0px;
                height: 1px;
                background: #A5AFB7;
            }
        }
        
        .pc-navbar-transparent,.is-mobile-top {
            background: none;
            &::after {
                display: none;
            }
        }



        .mobile-navbar {
            // height: 80px;
            .mobile-center {
                height: 100%;
                width: 100%;
                display: flex;
                align-items: center;
                .navbar-brand {
                    width: 100%;
                }
            }
        }

        .is-mobile-top {
            // background-color: #242C32;
            background: none;
        }
        .navbar-burger span {
            background-color: #e31837;
        }

        .navbar-burger {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            margin: auto 0;
        }
         
        .is-mobile-top .navbar-burger span {
            background-color: white;
        }
        .mobile-navbar-item {
            position: relative;
            display: flex;
            align-items: center;
            min-height: 60px;
            color: white;
            &::before {
                position: absolute;
                top: 0;
                right: 20px;
                bottom: 0;
                margin: auto 0;
                content: '';
                width: 30px;
                height: 30px;
                background-repeat: no-repeat;
                background-size: 100%;
                background-image: url(../../../public/images/navbar_iocn.png);
            }
        }
        
        .mobile-navbar-ctx {
            position: relative;
            // padding: 10px 0;
            width: 90%;
            margin: 0 auto;
        }
        
        .navbar {
            height: 90px;
            transition: all 0.5s;
        }
    
        

        .mobile-layer {
            position: fixed;
            top:0;
            left: 0;
            // height: 100%;
            width: 100%;
            z-index: 20;
            overflow-y: scroll;
            background: #e31837;
            .mobile-flex {
                position: relative;
                display: flex;
                height: 80px;
                justify-content: center;
                align-items: center;
                color: #AEB3B6;
                background-color: #e31837;
            }
            .mobile-flex-line {
                width: 1px;
                height: 16px;
                background-color: white;
            }
            .mobile-layer-item {
                position: relative;
                color: white;
                margin: 0 20px;
            }
        }

        

        .is-index-mobile {
            background-color: #36424A;
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                margin: 0 auto;
                width: 90%;
                height: 1px;
                content: '';
                z-index: 2;
                background-color: #4A555C;
            }
            .mobile-navbar-ctx {
                // height: 100%;
                display: flex;
                align-items: center;
                min-height: 60px;
                box-sizing: border-box;
                &::before {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 1px;
                    content: '';
                    background-color: #4A555C;
                }
            }
            .mobile-flex {
                background-color: #36424A;
            }
            .mobile-navbar-item {
                color: #AEB3B6;
            }
            .mobile-layer-item {
                color: #AEB3B6;
                
            }
            .index-mobile-item {
                background-color: #242C32;
                color: white;
            }
        }

        .index-move-navbar {
            background-color: #242C32;
        }
        
    }
</style>
