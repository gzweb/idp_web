<template>
    <div class="user-page-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner class="rellax-auto">
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/login.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="title-style-1 is-size-1-desktop is-size-3-touch">Sign Up</div>
            </template>
        </RellaxBanner>
        <div class="rellax-page rellax-page-view">
            <div class="container">
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="firstName" v-validate="'required|alpha_spaces'" v-model="firstName" class="input" type="text" :placeholder="$t('validation-1')">
                        <div v-show="errors.has('firstName')" class="help is-danger">{{ $t('validation-1') }}</div>
                    </div>
                    
                </div>
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="lastName" v-validate="'required|alpha_spaces'" v-model="lastName" class="input" type="text" :placeholder="$t('validation-2')">
                        <div class="application-tips">{{$t('s11')}}</div>
                        <div v-show="errors.has('lastName')" class="help is-danger">{{ $t('validation-2') }}</div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="nameNumber" v-validate="'required|alpha_num|min:4|max:4'" v-model="nameNumber" class="input" type="text" :placeholder="$t('validation-4')">
                        <div class="application-tips">{{$t('s14')}}</div>
                        <div v-show="errors.has('nameNumber')" class="help is-danger">{{ $t('validation-4') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="email" v-validate="'required|email'" v-model="email"  class="input" type="text" :placeholder="$t('validation-3')">
                        <div class="application-tips">{{$t('s15')}}</div>
                        <div v-show="errors.has('email')" class="help is-danger">{{ $t('validation-3') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="password" ref="password" v-validate="{ required: true,regex: /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/ }" v-model="password" class="input" type="password" :placeholder="$t('sg5')">
  
                        <div v-show="errors.has('password')" class="help is-danger">{{ $t('sg5') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="againPassword" data-vv-as="password" v-validate="'required|confirmed:password'" v-model="againPassword" class="input" type="password" :placeholder="$t('sg6')">
                        <div v-show="errors.has('againPassword')" class="help is-danger">{{ $t('sg6') }}</div>
                    </div>
                </div>

                
                <div class="columns">

                    <div class="column is-10-touch is-6-desktop">
                        <div class="field has-addons" style="margin:0;">
                            <div class="control is-expanded">
                                <input name="code" v-validate="'required|min:5|max:5'" v-model="code" class="input" type="text" :placeholder="$t('sg7')">
                            </div>
                            <div class="control code-view">
                                <img @click="setValidationImg" width="102" :src="codeSrc" alt="">
                            </div>
                        </div>
                        <div v-show="errors.has('code')" class="help is-danger">{{ $t('sg7') }}</div>
                    </div>
                    
                    
                    
                </div>
    
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <div class="button button-style is-fullwidth" @click="postData">{{$t('sg1')}}</div>
                    </div>
                </div>
                <div class="user-page-text text-style">{{$t('sg2')}}<router-link to="/login">{{$t('s1')}}</router-link></div>
                
            </div>
        </div>
        <Modal :ctxMessage="ctxMessage" :show="show" @hideModal="hideModal" />
        <Footer />
    </div>
</template>

<script>

import RellaxBanner from '@/components/RellaxBanner'
import Modal from '@/components/Modal'
import { getValidationImg , signUp } from '../api/public'

import translator from '../language/lib/sign_up'





import '../css/registered.css'
export default {
    components:{
        RellaxBanner,
        Modal
    },
    translator,
    data(){
        return {
            firstName:'',
            lastName:'',
            nameNumber:'',
            email:'',
            password:'',
            againPassword:'',
            code:'',
            codeID:'',
            codeSrc:'',
            show:0,
            ctxMessage:''
        }
    },
    methods:{
        hideModal(){
            this.show = 0;

            if(this.isJump) this.$router.push('/login');
        },
        async setValidationImg(){
            const codeData = await getValidationImg();
            this.codeID = codeData.data.id;
            this.codeSrc = codeData.data.image;
        },
        postData(){
        

            this.$validator.validateAll().then(async res => {
                if (res) {

                    
                    const data = await signUp({
                        email:this.email,
                        password:this.password,
                        first_name:this.firstName,
                        last_name:this.lastName,
                        candidate_id:this.nameNumber,
                        captcha:this.code,
                        captcha_id:this.codeID
                    });
                        
                    
                    this.show = 1;
                    if(data.code != 0) {
                        this.ctxMessage = data.message;
                        this.setValidationImg();
                        return;
                    };

                    this.ctxMessage = this.$t('sg8');
                    this.isJump = 1;
                    return;
                }
            

            });
     
        }
    },
    async created(){
        this.setValidationImg()
    }
}
</script>

<style lang="scss">
#app {
    .text-style {
        color: #242C32;
        padding-bottom: 20px;
        span {
            color: #E31B38;
        }
    }
    .code-view {
        border: 1px solid #AAB3BB;
    }
}
</style>
