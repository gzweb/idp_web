<template>
    <div class="application-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/banner_1.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">{{$t('a-t-2')}}</div>
                <!-- <div class="rellax-text is-size-1-desktop is-size-3-touch">application</div> -->
            </template>
        </RellaxBanner>

        <div class="application-page">
            

            <BannerStep :show="1"/>

            
            <div class="container form-view">
                <div class="columns">
                    
                    
                    <div class="column">
                        <div class="control">
                            <input name="lastName" v-validate="'required|alpha_spaces'" v-model="params.last_name" class="input" type="text" :placeholder="$t('validation-2')">
                        </div>                       
                        <div v-show="errors.has('lastName')" class="help is-danger">{{ $t('validation-2') }}</div>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input name="firstName" v-model="params.first_name" v-validate="'required|alpha_spaces'" type="text" class="input" :placeholder="$t('validation-1')">
                        </div>
                        <div v-show="errors.has('firstName')" class="help is-danger">{{ $t('validation-1') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="control">
                            <input name="nameNumber" v-validate="'required|alpha_num|min:4|max:4'" v-model="params.candidate_id" class="input" type="text" :placeholder="$t('validation-4')">
                        </div>
                        <div v-show="errors.has('nameNumber')" class="help is-danger">{{ $t('validation-4') }}</div>
                    </div>
                    <div class="column">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="testType" v-validate="'required'" v-model="params.test_type" @change="selectChange">
                                        <option disabled value="">{{$t('validation-7')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr" :key="key">
                                            {{item.text}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-show="errors.has('testType')" class="help is-danger">{{ $t('validation-7') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <date-picker name="testDate" v-validate="'required'" :editable="false" :placeholder="$t('ap10')" value-type="format" width="100%" input-class="input" v-model="params.test_date" :lang="getLanguage" type="date" format="DD/MM/YYYY" confirm></date-picker>
                        <div v-show="errors.has('testDate')" class="help is-danger">{{ $t('ap10') }}</div>
                    </div>
                    <div class="column">
                        <date-picker name="newTestDate" v-validate="'required'" :editable="false" :placeholder="$t('ap11')" value-type="format" width="100%" :not-before="beforeTime" input-class="input" v-model="params.new_test_date" :lang="getLanguage" type="date" format="DD/MM/YYYY" confirm></date-picker>
                        <div v-show="errors.has('newTestDate')" class="help is-danger">{{ $t('ap40') }}</div>
                    </div>
                </div>
            </div>
            

            <div class="container form-view">
                <label class="label form-label">{{$t('ap12')}}</label>
                <div class="columns">
                    <div class="column is-6">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="reason" v-validate="'required'" v-model="params.reason" @change="selectChange">
                                        <option disabled value="">{{$t('ap12')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr1" :key="key">
                                            {{item.text}}
                                        </option>
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-show="errors.has('reason')" class="help is-danger">{{ $t('ap12') }}</div>
                    </div>
                    
                    <div class="column is-6" v-if="params.reason == 'ABSENT'">
                        <div class="file has-name is-fullwidth">
                            <label class="file-label">
                                <input class="file-input" type="file" name="file" @change="imgChange" >
                                <span class="file-cta">
                                <span class="file-icon">
                                    <i class="fas fa-upload"></i>
                                </span>
                                <span class="file-label">
                                    {{$t('ap14')}}
                                </span>
                                </span>
                                <span class="file-name">
                                File format:  jpg, png, gif, jpeg ,pdf ,doc
                                </span>
                            </label>
                            
                        </div>
                        <a target="_blank" :href="uploadLink" class="button button-style upload-button" v-if="params.medical_proof">{{$t('s10')}}</a>
    
                        
                    </div>
                </div>

                <label class="label form-label" v-html="$t('ap41')"></label>

                <div class="columns">
                    <div class="column">
                        <div class="control"><textarea name="params.statement" v-validate="'required'"  v-model="params.statement" class="textarea" :placeholder="$t('ap35')"></textarea></div>
                        <div v-show="errors.has('params.statement')" class="help is-danger">{{ $t('ap35') }}</div>
                    </div>
                    
                </div>

              
                
                
                <label class="bui-checkbox-label  bui-checkbox-anim">
                    <input v-validate="'required'" type="checkbox" name="terms"/><i class="bui-checkbox"></i>  {{$t('ap6')}}<a target="_blank" href="https://www.idp.com/hongkong/terms-of-use/">Terms</a>  and <a target="_blank" href="https://www.ieltsessentials.com/global/footerlinks/privacypolicy">Privacy Policy</a>
                </label>
                <div class="control">
                    <div v-show="errors.has('terms')" class="help is-danger">{{ $t('ap4') }}</div>
                </div>
            </div>
            
            <div class="field is-grouped is-grouped-centered button-view">
                <div @click="submitForm" class="button button-style is-medium">{{$t('s9')}}</div>
            </div>

            <div class="container">
                <div class="application-title" v-html="ruleCtx.title"></div>
                <div class="application-ctx" v-html="ruleCtx.content"></div>
            </div>
            

            

        </div>
        
        <Modal @hideModal="hideModal" :ctxMessage="ctxMessage" :show="modalShow" />

        <Footer />

    </div>
</template>

<script>



import '../css/application.css'
import RellaxBanner from '@/components/RellaxBanner'
import Modal from '@/components/Modal'
import DatePicker from 'vue2-datepicker'

import BannerStep from '@/components/BannerStep'
import translator from '../language/lib/application'

import { getApplicationInfo,postApplication,upLoadImg } from '../api/application'


export default {
    components:{
        DatePicker,
        RellaxBanner,
        BannerStep,
        Modal
    },
    translator,
    data(){
        return {
            ruleCtx:{},
            selectArr:[],
            selectArr1:[],
            uploadLink:'',

            beforeTime:new Date(),
            modalShow:0,
            ctxMessage:'',

            params:{
                first_name:'',
                last_name:'',
                candidate_id:'',
                test_type:'',
                test_date:'',
                new_test_date:'',
                reason:'',
                medical_proof:''
            }
        }
    },
    computed:{
        getLanguage(){
            return (this.$store.state.language  == 'en'?'en':'zh')
        }
    },
    async created(){
        const data = await getApplicationInfo('TDT');

        this.selectArr = data.data.test_type;
        this.selectArr1 = data.data.reason;

        this.ruleCtx = data.data.sector.terms
        // console.log(this.selectArr1)
    },
    methods:{
        async imgChange(e){

          
            
            
            
            if(e.target.files.length <=0 ) { return }

            
            
            let file = e.target.files[0];           
            let params = new FormData(); //创建form对象

            if(!/\.(gif|jpg|jpeg|png|GIF|JPG|PNG|pdf|PDF|doc|DOC|docx|DOCX)$/.test(file.name)) {
                this.modalShow = 1;
                this.ctxMessage = this.$t('ap37');
                return;
            };

           
            
            

            
            params.append('file',file);//通过append向form对象添加数据
          
            let config = {
                headers:{'Content-Type':'multipart/form-data'}
            };

            

            const data = await upLoadImg(params,config);
            

            this.modalShow = 1;

            if(data.code != 0) {
                this.ctxMessage = data.msg
            };

            this.ctxMessage = this.$t('ap15');
            this.params.medical_proof = data.data.id;
            this.uploadLink = data.data.link;
           
        },
        selectChange(e){
            switch(e.target.name) {
                case 'testType':
                    this.params.testType = e.target.value
                break;
                case 'reason':
                    this.params.reason = e.target.value
                break;
            }
        },
        hideModal(){
            this.modalShow = 0;
            if(this.isSuccess) {
                
                let path;
                switch(this.isSuccess){
                    case 1:
                        path =  `/price_table/${this.dataID}`
                    break;
                    case 2:
                        path = `/table/${this.dataID}`
                    break;
                }
                this.$router.replace(path)
            };
        },
        async submitForm(){

    
            
            this.$validator.validateAll().then(async res => {
                if (res) {


                    if(!this.params.medical_proof && this.params.reason == 'ABSENT') {
                        this.modalShow = 1;
                        this.ctxMessage = this.$t('ap14');
                        return;
                    }

                    

                    const data = await postApplication('TDT',this.params);
                   
                    
                    

                    this.modalShow = 1;
                    if(data.code != '0') {
                        this.ctxMessage = data.message;
                        return;
                    };


                    if(data.data.to_pay) {
                        this.isSuccess = 1;
                    }else{
                        this.isSuccess = 2;
                    };

                    this.dataID = data.data.id;
                    
                    this.ctxMessage = this.$t('ap16');

                    
                }

                

                

            });
        }
    }
}
</script>

<style lang="scss">

</style>
