<template>
    <div class="user-page-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner class="rellax-auto">
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/login.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="title-style-1 is-size-1-desktop is-size-3-touch">{{$t('r-p-1')}}</div>
            </template>
        </RellaxBanner>
        <div class="rellax-page rellax-page-view">
            <div class="container">
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="password" ref="password" v-validate="{ required: true,regex: /^(?=.*[0-9].*)(?=.*[A-Z].*)(?=.*[a-z].*).{8,20}$/ }" v-model="password" class="input" type="password" :placeholder="$t('r-p-2')">
                        <div v-show="errors.has('password')" class="help is-danger">{{ $t('r-p-2') }}</div>
                    </div>
                    
                </div>
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <input name="againPassword" data-vv-as="password" v-validate="'required|confirmed:password'" v-model="againPassword" class="input" type="password" :placeholder="$t('r-p-3')">
                        <div v-show="errors.has('againPassword')" class="help is-danger">{{ $t('r-p-3') }}</div>
                    </div>
                </div>

                
                
                <div class="columns">
                    <div class="column is-10-touch is-6-desktop">
                        <div class="button reset-button button-style is-fullwidth" @click="postData">{{$t('s9')}}</div>
                    </div>
                </div>
                
            </div>
        </div>
        <Modal :ctxMessage="ctxMessage" :show="show" @hideModal="hideModal">
            <!-- <template>
                {{$t('r-p-5')}}
            </template> -->
        </Modal>
        <Footer />
    </div>
</template>

<script>

import RellaxBanner from '@/components/RellaxBanner'
import Modal from '@/components/Modal'
import {resetPassword} from '@/api/public'
// import {removeCookie} from '@/utils/utils'

import translator from '../language/lib/reset_password'

import '../css/registered.css'
export default {
    components:{
        RellaxBanner,
        Modal
    },
    translator,
    data(){
        return {
            password:'',
            againPassword:'',
            ctxMessage:'',
            show:0
        }
    },
    async created(){
        
    },
    methods : {
        hideModal(){
            this.show = 0;
            if(this.isSussces) {
                // Cookies.remove('token');
                localStorage.removeItem('token');
                this.$router.push('/login')
            };
        },
        
        postData(){
            
            
            this.$validator.validateAll().then(async res => {
                if (res) {

                    
                    const data = await resetPassword({
                        data:this.$route.params.id,
                        password:this.password
                    });

                    
                    
                    this.show = 1;
                    if(data.code != '0') {
                        this.ctxMessage = data.message;
                        return;
                    };
                    this.isSussces = 1;
                    this.ctxMessage = this.$t('r-p-4');
                }

            });
            
            
        }
    }
}
</script>

<style lang="scss">
    .reset-button {
        margin-bottom: 50px;
    }
</style>
