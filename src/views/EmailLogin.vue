<template>
    <div class="user-page-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner class="rellax-auto">
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/login.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="title-style-1 is-size-1-desktop is-size-3-touch">{{$t('v1')}}</div>
            </template>
        </RellaxBanner>
        <div class="rellax-page rellax-page-view">
            <div class="container">
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="email" v-model="code" v-validate="'required'" class="input" type="text" :placeholder="$t('v7')">
                        <div v-show="errors.has('email')" class="help is-danger">{{ $t('v7') }}</div>
                    </div>
                    
                </div>
            
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <div class="button button-style is-fullwidth email-login-button" @click="postData">{{$t('v1')}}</div>
                    </div>
                </div>
                <!-- <router-link to="/forget_password" class="sign-up user-page-text">{{$t('v6')}}</router-link> -->
            </div>
        </div>
        <Modal :ctxMessage="ctxMessage" :show="show" @hideModal="hideModal" />
        <Footer />
    </div>
</template>

<script>
import Vue from 'vue'
import { Toast } from 'vant';
import RellaxBanner from '@/components/RellaxBanner'
import Modal from '@/components/Modal'
import tools from '@/utils/tools'
import {setCookie} from '@/utils/utils'
import {emailLogin} from '@/api/public'
import translator from '../language/lib/login'

import '../css/registered.css'
export default {
    components:{
        RellaxBanner,
        Modal
    },
    translator,
    data(){
        return {
            ctxMessage:'',
            show:0,
            code:''
        }
    },
    async created(){
        // const mfaData = await isMfa();
        // this.setValidationImg()
        // this.isMFA = mfaData.data.enable
        

        // console.log(this.$route)
    },
    methods : {
        hideModal(){
            this.show = 0;
        },
        postData(){
            
            
            this.$validator.validateAll().then(async res => {
                if (res) {

                    Toast.loading({
                        mask:true,
                        duration:0
                    });
                    const data = await emailLogin({
                        code:this.code,
                        token:this.$route.query.token
                    });

                    Toast.clear();
                    

                    if(data.code != '0') {
                        this.show = 1;
                        this.ctxMessage = data.message;
                        // this.setValidationImg();
                        return;
                    };


                    setCookie('token',data.data.token,0.5);
                    this.$store.commit('setLoginState',data.data.token);

                    
                    if(tools.lastLink) {
                        this.$router.push({path:tools.lastLink});
                        tools.lastLink = '';
                    }else{
                        this.$router.push({path:'/'});
                    };



                }

                

            });
            
            
        }
    }
}
</script>

<style lang="scss">
    .code-view {
        border: 1px solid #AAB3BB;
    }
    .email-login-button {
        margin-bottom: 50px;
    }
</style>
