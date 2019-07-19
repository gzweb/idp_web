<template>
    <div class="user-page-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner class="rellax-auto">
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/login.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="title-style-1 is-size-1-desktop is-size-3-touch">{{$t('forget-3')}}</div>
            </template>
        </RellaxBanner>
        <div class="rellax-page rellax-page-view">
            <div class="container">
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="email" v-model="email" v-validate="'required|email'" class="input" type="text" :placeholder="$t('forget-4')">
                        <div v-show="errors.has('email')" class="help is-danger">{{ $t('forget-4') }}</div>
                    </div>
                    
                </div>
                
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <div class="button button-style is-fullwidth" @click="postData">{{$t('s9')}}</div>
                    </div>
                </div>
                <router-link to="/login" class="user-page-text">{{$t('forget-2')}}</router-link>
                <!-- <a class="sign-up user-page-text">Forgot your password?</a> -->
            </div>
        </div>
        <Footer />
        <Modal :ctxMessage="ctxMessage" :show="show" @hideModal="hideModal">
            <template>
                {{$t('forget-6')}}
            </template>
        </Modal>
    </div>
</template>

<script>
import RellaxBanner from '@/components/RellaxBanner'
import Modal from '@/components/Modal'
import {resetPasswordEmail} from '@/api/public'
import '../css/registered.css'
import translator from '../language/lib/forget_password'

let timer = null;

export default {
    data(){
        return {
            email:'',
            ctxMessage:'',
            show:0,
            isDown:1,
            time:60
        }
    },
    components:{
        RellaxBanner,
        Modal
    },
    destroyed(){
        clearInterval(timer);
    },
    methods:{
        hideModal(){
            this.show = 0;
        },
        postData(){
            if(!this.isDown) {
                this.show = 1;
                this.ctxMessage = this.$t('forget-1');
                return;
            };
            this.$validator.validateAll().then(async res => {
                if (res) {

                    
                    const data = await resetPasswordEmail({
                        email:this.email
                    });

                
                    

                    if(data.code != '0') {
                        this.show = 1;
                        this.ctxMessage = data.message;
                        return;
                    };

                    
                    this.show = 1;
                    this.ctxMessage = this.$t('forget-5');
                    this.isDown = 0;
                    
                    timer = setInterval(()=>{
                        --this.time;
                        if(this.time <= 0){
                            clearInterval(timer);
                            this.time = 60;
                            this.isDown = 1;
                        }
                    },1000);


                }

                

            });
        }
    },
    translator
}
</script>

<style lang="scss">
</style>
