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
                        <input name="email" v-model="email" v-validate="'required|email'" class="input" type="text" :placeholder="$t('v2')">
                        <div class="application-tips">{{$t('v8')}}</div>
                        <div v-show="errors.has('email')" class="help is-danger">{{ $t('v2') }}</div>
                    </div>
                    
                </div>
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="password" v-model="password" v-validate="'required|min:8|max:20'" class="input" type="password" :placeholder="$t('v3')">
                        <div v-show="errors.has('password')" class="help is-danger">{{$t('v3')}}</div>
                    </div>
                </div>

                <!-- <div class="columns" v-if="isMFA">
                    <div class="column is-10-touch is-6-desktop">
                        <div class="columns" style="margin:0">
                            


                            <div class="field is-grouped" style="width:100%;">
                                <div class="control is-expanded">
                                    <input class="input" name="emailCode" v-validate="'required'" v-model="emailCode" type="text" :placeholder="$t('v4')">
                                </div>
                                <div class="control">
                                    <div class="button button-style" @click="postMFA">
                                    SEND EMAIL
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div v-show="errors.has('emailCode')" class="help is-danger">{{$t('v4')}}</div>

                        
                        
                    
                        
                    </div>

                    
                </div> -->
                <div class="columns">

                    <div class="column is-10-touch is-6-desktop">
                        <div class="field has-addons" style="margin:0;">
                            <div class="control is-expanded">
                                <input name="code" v-validate="'required|min:5|max:5'" v-model="code" class="input" type="text" :placeholder="$t('v5')">
                            </div>
                            <div class="control code-view">
                                <img @click="setValidationImg" width="102" :src="codeSrc" alt="">
                            </div>
                        </div>
                        <div class="application-tips">{{$t('s17')}}</div>
                        <div v-show="errors.has('code')" class="help is-danger">{{ $t('v5') }}</div>
                    </div>
                    

                    
                </div>
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <div class="button button-style is-fullwidth" @click="postData">{{$t('v1')}}</div>
                    </div>
                </div>
                <router-link to="/forget_password" class="sign-up user-page-text">{{$t('v6')}}</router-link>
            </div>
        </div>
        <Modal :ctxMessage="ctxMessage" :show="show" @hideModal="hideModal" />
        <Footer />
    </div>
</template>

<script>

import RellaxBanner from '@/components/RellaxBanner'
import Modal from '@/components/Modal'
import tools from '@/utils/tools'
// import {setCookie} from '@/utils/utils'
import {getValidationImg ,login} from '@/api/public'
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
            isMFA:0,
            // emailCode:null,
            // password:'',
            // email:'',
            password:process.env.NODE_ENV == 'production'?'':'Tp123456',
            email:process.env.NODE_ENV == 'production'?'':'56252090@qq.com',
            code:'',
            codeID:'',
            codeSrc:''
        }
    },
    async created(){
        // const mfaData = await isMfa();
        this.setValidationImg()
        // this.isMFA = mfaData.data.enable
        

        // console.log(this.$route)
    },
    methods : {
        hideModal(){
            this.show = 0;
        },
        // async postMFA(){
        //     const pattern = /^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,8})$/;
        //     if(!pattern.test(this.email)) {
        //         this.show = 1;
        //         this.ctxMessage = '请输入正确的邮箱';
        //         return;
        //     }
        //     Toast.loading({
        //         mask:true,
        //         duration:0
        //     });
        //     const data = await getMfaCode({
        //         email:this.email
        //     });

        //     Toast('发送成功，请去邮箱查收');
        // },
        async setValidationImg(){
            const codeData = await getValidationImg();
            this.codeID = codeData.data.id;
            this.codeSrc = codeData.data.image;
        },
        postData(){
            
            
            this.$validator.validateAll().then(async res => {
                if (res) {

                    
                    const data = await login({
                        email:this.email,
                        password:this.password,
                        captcha:this.code,
                        captcha_id:this.codeID
                        // code:this.emailCode
                    });

                    
                    

                    if(data.code != '0') {
                        this.show = 1;
                        this.ctxMessage = data.message;
                        this.setValidationImg();
                        return;
                    };



                    // data.data.mfa = 1;
                    if(data.data.mfa) {
                        this.$router.replace({path:'/email_login',query:{
                            token:data.data.token
                        }});
                        return;
                    };


                    // setCookie('token',data.data.token,0.5);
                    Cookies.set('token', data.data.token, { expires: 0.5 });
                    this.$store.commit('setLoginState',data.data.token);

                    
                    if(tools.lastLink) {
                        this.$router.push({path:tools.lastLink});
                        tools.lastLink = '';
                    }else{
                        this.$router.push({path:'/'});
                    }
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
</style>
