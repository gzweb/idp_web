<template>
    <div class="transparent-view">

        <!-- PC -->
        <nav :class="{'pc-navbar-transparent':type,'index-move-navbar': indexNavBarMove && type}" class="pc-navbar is-hidden-touch navbar is-transparent is-fixed-top">
            <div class="container">
                <div class="navbar-brand is-marginless">
                    <a class="navbar-item is-paddingless" @click="goIndex">
                        <slot name="logo">
                            <img class="navbar-logo" src="../../../public/images/top-logo.png" alt="">	
                        </slot>
                    </a>                    
                </div>
                
                <div class="navbar-menu is-marginless">
                    <div class="navbar-end">
                        
                        <div v-if="!isLogin" @click="goPage(0)" class="navbar-item is-paddingless pc-navbar-item" :class="[type?'index-navbar-item':'other-navbar-item']">
                            {{$t('s1')}}
                        </div>
                        <div v-if="!isLogin" @click="goPage(1)" class="navbar-item is-paddingless pc-navbar-item" :class="[type?'index-navbar-item':'other-navbar-item']">
                            {{$t('s2')}}   
                        </div>
                        <div @click="goIndex" class="navbar-item is-paddingless pc-navbar-item" :class="[type?'index-navbar-item':'other-navbar-item']">
                            {{$t('s12')}}
                        </div>
                        <div @click="goPage(2)" class="navbar-item is-paddingless pc-navbar-item" :class="[type?'index-navbar-item':'other-navbar-item']">
                            {{$t('s3')}}  
                        </div>
                        <div @click="goPage(3)" class="navbar-item is-paddingless pc-navbar-item" :class="[type?'index-navbar-item':'other-navbar-item']">
                            {{$t('s4')}}   
                        </div>
                        <div @click="goPage(4)" class="navbar-item is-paddingless pc-navbar-item" :class="[type?'index-navbar-item':'other-navbar-item']">
                            {{$t('s5')}}  
                        </div>
                        <div @click="goPage(5)" class="navbar-item is-paddingless pc-navbar-item" :class="[type?'index-navbar-item':'other-navbar-item']">
                            {{$t('s8')}}  
                        </div>
                        <div v-if="isLogin" @click="exitAccount" class="navbar-item is-paddingless pc-navbar-item" :class="[type?'index-navbar-item':'other-navbar-item']">
                            {{$t('s7')}}   
                        </div>
                        <Language :type="type" />
                    </div>
                </div>
            </div>
        </nav>


        <!-- 移动 -->

        <nav :class="{'is-mobile-top':type,'index-move-navbar': indexNavBarMove && type}" class="mobile-navbar is-hidden-desktop navbar is-fixed-top">
            <div class="container mobile-center">
                <div class="navbar-brand">
                    <div class="navbar-item" @click="goIndex">
                        <slot name="logo">
                            <img class="navbar-logo" src="../../../public/images/top-logo.png" alt="">	
                        </slot>
                    </div>
                    <div class="mobile-fixed-item is-paddingless">
                        <Language :type="type" />
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

        <div class="mobile-layer animated" v-show="isNavbar" :class="{'is-index-mobile':type,'fadeInUp':isNavbar}">
            <slot name="mobile-index"></slot>
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
import { removeCookie } from '../../utils/utils'

export default {
    props:['type'],
    data(){
        return {
            isNavbar:0
        }
    },
    computed: {
        indexNavBarMove () {
            return this.$store.state.isIndexFixed
        },
        swiperIndex () {
            return this.$store.state.swiperIndex
        },
        isLogin () {
            return this.$store.state.isLogin
        }
    },
    methods:{
        exitAccount(){
            removeCookie('token');
            console.log(removeCookie);
            location.reload();
        },
        showlayer(){
            this.isNavbar= !this.isNavbar;
            
            // 控制首页导航栏动画效果
            if(!this.swiperIndex) {
                this.$store.commit('setIndexFixed',this.isNavbar)
            }
            

            
        },
        goPage(key){
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
    created(){
        this.$store.commit('setIndexFixed',0)
    },
    components:{
        Language,
    }
}
</script>

<style lang="scss">
    #app {
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
            &::before {
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto 0;
                right: -20px;
                width: 1px;
                height: 20px;
                content: '';
                background-color: white;
            }
            &:hover {
                color: #D71735;
            }
        }
        .index-navbar-item {
            color: white;
        }
        .other-navbar-item {
            color: #697782;
            &::before{
                background-color: #697782;
            }
        }
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
            top:90px;
            left: 0;
            height: calc(100% - 90px);
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
