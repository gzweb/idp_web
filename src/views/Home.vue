<template>

    <div class="home-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/banner_6.png" alt="">
            </template>
            
        </RellaxBanner>
        <div class="rellax-page-view">
            <div class="title-style-1 home-title">{{$t('s5')}}</div>
 
            <div class="container">
                <div class="columns home-columns">
                    <div class="column is-offset-2-tablet is-12-mobile is-8-tablet">
                        <div class="columns is-mobile is-gapless">
                            <div class="column" v-for="(item,key) in 3" :key="key">
                                <div @click="tabTap(key)" :class="{'home-tab-button-active':tabKey==key}" class="button is-size-7-mobile is-paddingless home-tab-button is-radiusless">
                                    <template v-if="key == 0">
                                        {{$t('home1')}}
                                    </template>

                                    <template v-else-if="key == 1">
                                        {{$t('home2')}}
                                    </template>
                                    <template v-else-if="key == 2">
                                        {{$t('home3')}}
                                    </template>

                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div v-show="tabKey == 0" class="container order-view is-size-7-mobile">
                <div class="columns is-marginless is-mobile order-title is-paddingless has-text-centered is-gapless">
                    <div class="column">{{$t('home4')}}</div>
                    <div class="column">{{$t('home5')}}</div>
                    <div class="column">{{$t('home6')}}</div>
                    <div class="column">{{$t('home7')}}</div>
                    <div class="column">{{$t('home8')}}</div>
                </div>
                <div class="columns is-marginless is-mobile is-paddingless has-text-centered is-gapless" v-for="(item,key) in list" :key="key">
                    <div class="column">{{item.id}}</div>
                    <div class="column status-style-1" :class="{
                        'status-style-1':item.state == 'Awaiting Payment' || item.state == 'Pending' || item.state == 'Pending for delivering',
                        'status-style-2':item.state == 'Approved' || item.state == 'Completed' || item.state == 'Delivered',
                        'status-style-3':item.state == 'Rejected'
                    }">{{item.state_text}}</div>
                    <div class="column">{{item.created_at}}</div>
                    <div class="column">{{item.type}}</div>
                    <div class="column"> <router-link :to="item.to_pay?'/price_table/'+item.id:'/table/'+item.id" class="status-style-3 home-link">{{item.to_pay?$t('home10'):$t('home9')}}</router-link></div>
                </div>
                
                <div class="pagination-view">
                    <v-page :page-size-menu="false"
                        :info="false"
                        :total-row="pageNumber"
                        :first="false"
                        :last="false"
                        @page-change="pageChange"
                        align="right"></v-page>
                </div>
                
            </div>

            <div v-show="tabKey == 1" class="container info-view">
                <div class="container">
                    <div class="columns">
                        <div class="column is-paddingless is-offset-1-mobile is-offset-3-tablet is-10-mobile is-6-tablet">
                            <div v-for="(item,key) in userInfo" :key="key" class="columns is-marginless home-columns-item is-mobile is-gapless">
                                <div class="column">{{item.text}}</div>
                                <div class="column">{{item.value}}</div>
                            </div>
                            <!-- <div class="columns is-marginless home-columns-item is-mobile is-gapless">
                                <div class="column">{{$t('home15')}}</div>
                                <div class="column">2</div>
                            </div>
                            <div class="columns is-marginless home-columns-item is-mobile is-gapless">
                                <div class="column">{{$t('home16')}}</div>
                                <div class="column">2</div>
                            </div>
                            <div class="columns is-marginless home-columns-item is-mobile is-gapless">
                                <div class="column">{{$t('home17')}}</div>
                                <div class="column">2</div>
                            </div> -->
                        </div>
                    </div>
                </div>
                
            </div>

            <div v-show="tabKey == 2" class="container info-view change-view">
                <div class="container">
                    <div class="columns">
                        <div class="column is-paddingless is-offset-1-mobile is-offset-3-tablet is-10-mobile is-6-tablet">
                            <div class="columns is-mobile is-gapless">
                                <div class="column">
                                    <input name="oldPassword" v-model="oldPassword" v-validate="'required|min:8|max:20'" class="input" type="password" :placeholder="$t('home13')">
                                    <div v-show="errors.has('oldPassword')" class="help is-danger">{{$t('home13')}}</div>
                                </div>
                                
                            </div>
                            <div class="columns is-mobile is-gapless">
                                <div class="column">
                                    <input name="password" ref="password" v-validate="{ required: true,regex: /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/ }" v-model="password" class="input" type="password" :placeholder="$t('home11')">
                                    <div v-show="errors.has('password')" class="help is-danger">{{ $t('home11') }}</div>
                                </div>
                                
                            </div>
                            <div class="columns is-mobile is-gapless">
                                <div class="column">
                                    <input name="againPassword" data-vv-as="password" v-validate="'required|confirmed:password'" v-model="againPassword" class="input" type="password" :placeholder="$t('home12')">
                                    <div v-show="errors.has('againPassword')" class="help is-danger">{{ $t('home12') }}</div>
                                </div>
                                
                            </div>
                            <div class="columns is-mobile is-gapless">
                                <!-- <div class="column">
                                    <div class="button is-size-7-mobile change-button">RETURN</div>
                                </div> -->
                                <div class="column has-text-centered">
                                    <div class="button change-button" @click="changPassword">{{$t('home3')}}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
            
            
        </div>
        <Footer />
        <Modal :ctxMessage="ctxMessage" :show="show" @hideModal="hideModal" />
    </div>
</template>

<script>
import RellaxBanner from '@/components/RellaxBanner'
import translator from '../language/lib/home'
import Vue from 'vue'
import { Toast } from 'vant';
import vPage from 'v-page';
import Modal from '@/components/Modal'
import {changePassword} from '@/api/public'
import {removeCookie} from '@/utils/utils'
import {getApplicationList,getUserInfo} from '@/api/home'


Vue.use(vPage);


export default {
    name:'Home',
    components : {
       RellaxBanner,
       Modal
    },
    translator,
    data(){
        return {
            ctxMessage:'',
            show:0,
            tabKey:0,
            list:[],
            pageNumber:0,
            oldPassword:'',
            password:'',
            againPassword:'',
            userInfo:[{}]
        }
    },
    async created(){
        const data = await getUserInfo();
        console.log(data);
        this.userInfo = data.data;

    },
    beforeRouteLeave(to, from, next){
        if (to.name != 'Table' && to.name != 'PriceTable') {
            this.$store.commit('removeIncludeList','Home');
        };
        next();
    },
    methods:{
        pageChange(e){
            this.getList(e.pageNumber)
        },
        async getList(key){
            const data = await getApplicationList({
                page:key,
                size:10
            });
            this.pageNumber = data.data.total;
            this.list = data.data.rows;
        },
        hideModal(){
            this.show = 0;
            if(this.isSussces) {
                // removeCookie('token');
                location.reload();
            };
        },
        changPassword(){
            this.$validator.validateAll().then(async res => {
                if (res) {

                    Toast.loading({
                        mask:true,
                        duration:0
                    });
                    
                    const data = await changePassword({
                        password:this.oldPassword,
                        new_password:this.password
                    });

                    Toast.clear();
                    this.show = 1;
                    if(data.code != '0') {  
                        this.ctxMessage = data.message;
                        return;
                    };
                    this.isSussces = 1;
                    removeCookie('token');
                    this.ctxMessage = this.$t('home18');
                }

                

            });
        },
        tabTap(key){
            this.tabKey = key;
        }
    }
}
</script>

<style lang="scss">
    #app .home-title {
        padding-top: 50px;
        margin-bottom: 50px;
        font-size: 30px;
        color: #242C32;
    }
    .home-tab-button {
        width: 100%;
        color: white;
        border: none;
        background-color: #AAB3BB;
    }
    .home-tab-button-active {
        background-color: #D81734;
    }
    #app .home-columns {
        .column {
            margin-right: 1px;
        }
        .button {
            height: 60px;
        }
    }

    .home-columns-item {
        min-height: 60px;
        position: relative;
        &::before {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 1px;
            content: '';
            background: rgba(165,175,183,0.50);
        }
        .column {
            display: flex;
            align-items: center;
            font-size: 18px;
            &:nth-child(even){
                justify-content: flex-end;
                color: #697782;
            }
            &:nth-child(odd){
                color: #242C32;
            }
        }
    }
    .home-link {
        text-decoration: underline;
    }

    .change-view {
        .home-columns-item {
            &::before {
                display: none;
            }
        }
    }
    .info-view {
        margin-top: 50px;
        padding-bottom: 50px;
        .change-button {
            margin-top: 30px;
            color: white;
            background-color: #D81734;
        }
    }

    .order-view {
        margin-top: 50px;
        .column {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 60px;
            color: #242C32;
            word-break:break-all;
        }
        
        .columns {
            &:nth-child(odd){
                background: #EDEFF1;
            }
            &:nth-child(even){
                background: #DEE2E5;
            }
           
        }
        .order-title {
            background: #F7F8F9 !important;
            .column {
                height: 80px;
            }
        }
        .status-style-1 {
            color: #FF8300;
        }
        .status-style-2 {
            color: #51C21A;
        }
        .status-style-3 {
            color: #D81734;
        }
        .pagination-view {
            margin-top: 20px;
            margin-bottom: 50px;
        }
    }
</style>
