<template>
    <div class="application-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/banner_3.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">{{$t('a-t-5')}}</div>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">Form by courier service</div>
            </template>
        </RellaxBanner>

        <div class="application-page">
           

            <BannerStep />
            

            
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
                        <div class="control">
                            <input name="candidate_number" v-validate="'required'" v-model="params.candidate_number" class="input" type="text" :placeholder="$t('validation-5')">
                        </div>
                        <div v-show="errors.has('candidate_number')" class="help is-danger">{{ $t('validation-5') }}</div>
                    </div>
                </div>
                <div class="columns">
                    
                    <div class="column">
                        <date-picker name="testDate" v-validate="'required'" :editable="false" :placeholder="$t('validation-6')" value-type="format" width="100%" input-class="input" v-model="params.test_date" :lang="getLanguage" type="date" format="MM/DD/YYYY" confirm></date-picker>
                        <div v-show="errors.has('testDate')" class="help is-danger">{{ $t('validation-6') }}</div>
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

                
            </div>
         
            <div class="container form-view">
                <label class="label form-label">{{$t('ap31')}}</label>
                <div class="columns">
                    <div class="column is-6">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="courier_destination" v-validate="'required'" v-model="params.courier_destination" @change="selectChange">
                                        <option disabled value="">{{$t('ap32')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr1" :key="key">
                                            {{item.text}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-show="errors.has('courier_destination')" class="help is-danger">{{ $t('ap32') }}</div>
                    </div>
                </div>

                <div class="columns">
                    <div class="column is-3">
                        <div class="control">
                            <input class="input" v-model="params.country" name="Country" v-validate="'required'" type="text" :placeholder="$t('ap47')">
                        </div>
                        <div v-show="errors.has('Country')" class="help is-danger">{{ $t('ap47') }}</div>
                    </div>
                    <div class="column is-3">
                        <div class="control">
                            <input class="input" v-model="params.province" name="Province" v-validate="'required'" type="text" :placeholder="$t('ap48')">
                        </div>
                        <div v-show="errors.has('Province')" class="help is-danger">{{ $t('ap48') }}</div>
                    </div>
                    <div class="column is-3">
                        <div class="control">
                            <input class="input" v-model="params.city" name="City" v-validate="'required'" type="text" :placeholder="$t('ap49')">
                        </div>
                        <div v-show="errors.has('City')" class="help is-danger">{{ $t('ap49') }}</div>
                    </div>
                    <div class="column is-3">
                        <div class="control">
                            <input class="input" v-model="params.zip_code" name="zip" v-validate="'required'" type="text" :placeholder="$t('ap50')">
                        </div>
                        <div v-show="errors.has('zip')" class="help is-danger">{{ $t('ap50') }}</div>
                    </div>
                    
                </div>

                
                <!-- <div class="columns">
                    <div class="column is-6">
                        
                        <input class="input" type="text" :placeholder="$t('ap28')">
                    </div>
                </div> -->
                <div class="columns">
                    <div class="column">
                        <div class="control">
                            <input class="input" name="address" v-validate="'required'" v-model="params.address"  type="text" :placeholder="$t('ap29')">
                        </div>
                        <div class="application-tips">{{$t('ap45')}}</div>
                        <div v-show="errors.has('address')" class="help is-danger">{{ $t('ap29') }}</div>
                    </div>
                </div>
                <div class="tips">{{$t('ap30')}}</div>
                
                <div class="columns">
                    <div class="column is-2">
                        <input class="input" type="text" v-model="params.countryCode" :placeholder="$t('ap46')">
                    </div>
                    <div class="column is-10">
                        <div class="control">
                            <input class="input" v-model="params.tel" name="tel" v-validate="'required'" type="number" :placeholder="$t('ap20')">
                        </div>
                        <div v-show="errors.has('tel')" class="help is-danger">{{ $t('ap20') }}</div>
                    </div>
                    <!-- <div class="column is-6">
                        <div class="control">
                            <input class="input" v-model="params.zip_code" name="zip_code" v-validate="'required'" type="text" :placeholder="$t('ap33')">
                        </div>
                        <div v-show="errors.has('zip_code')" class="help is-danger">{{ $t('ap33') }}</div>
                    </div> -->
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
import BannerStep from '@/components/BannerStep'
import DatePicker from 'vue2-datepicker'


import translator from '../language/lib/application'
import { getApplicationInfo,postApplication } from '../api/application'




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
            ruleCtx:'',
            params:{
                test_type:'',
                courier_destination:''
            },
            // beforeTime:new Date(),
            modalShow:0,
            ctxMessage:'',
            selectArr:[],
            selectArr1:[]
        }
    },
    computed:{
        getLanguage(){
            return (this.$store.state.language  == 'en'?'en':'zh')
        }
    },
    async created(){
        const data = await getApplicationInfo('OTRF');
        this.ruleCtx = data.data.sector.terms
        this.selectArr = data.data.test_type;
        this.selectArr1 = data.data.courier_destination;
        console.log(data);
    },
    methods:{
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
        selectChange(e){
            switch(e.target.name) {
                case 'testType':
                    this.params.testType = e.target.value
                break;
            }
        },
        submitForm(){
            
            this.$validator.validateAll().then(async res => {
                if (res) {

                    


                    this.params.tel = `${this.params.countryCode}-${this.params.tel}`;

                   
                    

                    const data = await postApplication('OTRF',this.params);
                   
                    
                    

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
