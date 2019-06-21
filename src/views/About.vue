<template>
    <div class="about-view fixed-view ">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/about_2.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">{{$t('title')}}</div>    
            </template>
            
        </RellaxBanner>
        
        <div class="about-ctx-view pc is-hidden-touch">
            <div class="columns is-gapless pc-columns">
                <div class="column about-middle">
                    <div class="about-text">
                        <div class="about-title">{{ $t('about-v1')}}</div>
                        <div class="about-title-ctx">
                            {{$t('about-v2')}}    
                        </div>
                    </div>
                </div>
                <div class="column">
                    <img class="about-pic" src="../../public/images/about_1.png" alt="">
                </div>
            </div>
            <div class="columns is-gapless is-marginless columns-style about-triangle">
                <div class="column">
                    <img class="about-pic" src="../../public/images/about_3.png" alt="">
                </div>
                <div class="column about-middle">
                    <div class="about-text">
                        <div class="about-title">{{$t('about-v3')}}</div>
                        <div class="about-title-ctx">
                            {{$t('about-v4')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- 移动端 -->
        <div class="about-ctx-view mobile is-hidden-desktop">
            <div class="columns is-marginless is-gapless is-desktop">
                <div class="column">
                    <div class="about-text">
                        <div class="about-title">{{ $t('about-v1')}}</div>
                        <div class="about-title-ctx">
                            {{ $t('about-v2')}}
                        </div>
                    </div>
                </div>
                <div class="column">
                    <img class="mobile-about-pic" src="../../public/images/about_1.png" alt="">
                </div>
            </div>
            <div class="columns is-gapless is-marginless columns-style is-desktop">
                <div class="column about-middle">
                    <div class="about-text">
                        <div class="about-title">{{ $t('about-v3')}}</div>
                        <div class="about-title-ctx">
                            {{ $t('about-v4')}}
                        </div>
                    </div>
                </div>
                <div class="column">
                    <img class="about-pic" src="../../public/images/about_3.png" alt="">
                </div>
                
            </div>
        </div>

        <div class="about-scene">
            <div class="about-scene-title is-size-2-touch">{{ $t('about-v5')}}</div>
            <div class="about-scene-small-title is-size-6-touch">{{ $t('about-v6')}}</div>
            <div class="about-scene-tips is-size-6-touch">{{ $t('about-v7')}}:</div>
            <div class="container">
                <div class="about-list-item">
                    <div class="about-list-item-rect">
                        <img src="../../public/images/about_4.png" alt="">
                    </div>
                    
                    <div class="about-list-item-number">01</div>
                    <div class="about-list-item-text">{{ $t('about-v8')}}</div>
                </div>
                <div class="about-list-item">
                    <div class="about-list-item-rect">
                        <img src="../../public/images/about_5.png" alt="">
                    </div>
                    <div class="about-list-item-number about-list-item-number-1">02</div>
                    <div class="about-list-item-text">{{ $t('about-v9')}}</div>
                </div>
                <div class="about-list-item">
                    <div class="about-list-item-rect">
                        <img src="../../public/images/about_6.png" alt="">
                    </div>
                    <div class="about-list-item-number">03</div>
                    <div class="about-list-item-text">{{ $t('about-v10')}}</div>
                </div>
                <div class="about-list-item">
                    <div class="about-list-item-rect">
                        <img src="../../public/images/about_7.png" alt="">
                    </div>
                    <div class="about-list-item-number about-list-item-number-1">04</div>
                    <div class="about-list-item-text">{{ $t('about-v11')}}</div>
                </div>
            </div>
            
        </div>
        <Footer />

    </div>
</template>

<script>
import RellaxBanner from '@/components/RellaxBanner'
import translator from '../language/lib/about'
export default {
    translator,
    components:{
        RellaxBanner
    }
}
</script>

<style lang="scss">
    #app {
        .pc-columns {
            margin-bottom: 70px;
        }
        .about-scene {
            position: relative;
            overflow: hidden;
            background-color: #fff;
        }
    }
    .about-scene {
        .container {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }
        .about-list-item-text {
            margin-top: 30px;
            text-align: center;
            font-size: 22px;
            color: #242C32;
        }
        .about-list-item-number {
            position: absolute;
            top: -40px;
            left: 0;
            right: 0;
            margin: 0 auto;
            font-size: 34px;
            width: 72px;
            height: 80px;
            color: white;
            text-align: center;
            line-height: 80px;
            background-repeat: no-repeat;
            background-size: 100%;
            background-image: url(../../public/images/a_5.png);
        }
        .about-list-item-number-1 {
            background-image: url(../../public/images/a_4.png);
        }
        .about-list-item-rect {
            position: relative;
            height: 359px;
            overflow: hidden;
            img {
                margin-top: -1px;
                margin-left: -1px;
                display: block;
            }
            &::before {
                position: absolute;
                top: 0;
                left: 0;
                width: 250px;
                height: 359px;
                content: '';
                background-repeat: no-repeat;
                background-size: 100%;
                background-image: url(../../public/images/a_3.png);
            }
        }
        .about-list-item {
            position: relative;
            width: 250px;
            min-height: 359px;
            margin: 0 10px 100px;
            transition: all 0.5s;
            &:hover {
                transform: translate3d(0,-10px,0);
            }
        }
    }
   


    .about-triangle {
        position: relative;
        &::before {
            position: absolute;
            left: 0;
            bottom: -25px;
            right: 0;
            margin: 0 auto;
            content: '';
            width: 0;
            height: 0;
            border-style: solid;
            border-width: 25px 25px 0 25px;
            border-color: #d71734 transparent transparent transparent;
        }
    }
    .about-scene-small-title,.about-scene-tips {
        text-align: center;
        font-size: 18px;
        color: #414F5B;
    }
    .about-scene-tips {
        margin-top: 20px;
        margin-bottom: 100px;
    }
    .about-scene-title {
        margin-top: 60px;
        margin-bottom: 40px;
        font-size: 50px;
        text-align: center;
        color: #242C32;
    }
    .about-ctx-view {
        position: relative;
        z-index: 2;
        background-color: #fff;
        
        .about-title {
            font-size: 30px;
        }
        .about-title-ctx {
            margin-top: 20px;
            font-size: 16px;
        }
        .about-pic {
            display: block;
            width: 100%;
            transition: all .5s;
            &:hover {
                transform: scale(1.05);
            }
        }
        .about-text {
            margin: 0 auto;
            padding: 20px 0;
            box-sizing: border-box;
        }
        .about-middle {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
        }
        img {
            display: block;
        }
        .mobile-about-pic {
            width: 100%;
            margin: 0 auto;
        }
        .columns-style {
            background-color: #D71735;
            .about-text {
                color: white;
            }
        }
    }
    .mobile {
        .about-text {
            width: 90%;
        }
    }
    .pc {
        .about-pic {
            position: relative;
            top: -50px;
        }
        .about-text {
            width: 80%;
        }
    }
</style>
