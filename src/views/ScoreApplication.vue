<template>
    <div class="application-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/score_1.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">{{$t('a-t-1')}} </div>
                <!-- <div class="rellax-text is-size-1-desktop is-size-3-touch">application</div> -->
            </template>
        </RellaxBanner>

        <div class="application-page">
            

            <BannerStep />

           

            
            <div class="container form-view">
                <div class="columns">
                    <div class="column">
                        <div class="control">
                            <input name="params.last_name" v-validate="'required|alpha_spaces'" v-model="params.last_name" class="input" type="text" :placeholder="$t('validation-2')">
                        </div>                       
                        
                        <div v-show="errors.has('params.last_name')" class="help is-danger">{{ $t('validation-2') }}</div>
                    </div>
                    <div class="column">

                        <div class="control">
                            <input name="params.first_name" v-model="params.first_name" v-validate="'required|alpha_spaces'" type="text" class="input" :placeholder="$t('validation-1')">
                        </div>
                        <div v-show="errors.has('params.first_name')" class="help is-danger">{{ $t('validation-1') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="control">
                            <input name="params.candidate_id" v-validate="'required|alpha_num|min:4|max:4'" v-model="params.candidate_id" class="input" type="text" :placeholder="$t('validation-4')">
                        </div>
                        <div class="application-tips">{{$t('s11')}}</div>
                        <div v-show="errors.has('params.candidate_id')" class="help is-danger">{{ $t('validation-4') }}</div>
                    </div>
                    <div class="column">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="params.test_type" v-validate="'required'" v-model="params.test_type" @change="selectChange">
                                        <option disabled value="">{{$t('validation-7')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr" :key="key">
                                            {{item.text}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        
                        </div>
                        <div v-show="errors.has('params.test_type')" class="help is-danger">{{ $t('validation-7') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <input name="params.candidate_number" v-validate="'required'" v-model="params.candidate_number" class="input" type="text" :placeholder="$t('validation-5')">
                        <div v-show="errors.has('params.candidate_number')" class="help is-danger">{{ $t('validation-5') }}</div>
                    </div>
                    <div class="column">
                        <!-- 限制时间 not-after="2019-05-30 12:00:00" -->
                        <date-picker name="params.test_date" v-validate="'required'" :editable="false" :placeholder="$t('validation-6')" value-type="format" width="100%" input-class="input" v-model="params.test_date" :lang="getLanguage" type="date" format="MM/DD/YYYY" confirm></date-picker>
                        <div class="application-tips">{{$t('ap38')}}</div>
                        <div v-show="errors.has('params.test_date')" class="help is-danger">{{ $t('validation-6') }}</div>
                    
                    </div>
                </div>
            </div>

            <div class="container form-view">
                <label class="label form-label">{{$t('ap39')}}</label>

                
                <div class="columns">
                    <div class="column" v-for="(item,key) in selectArr2" :key="key">
                        <!-- <label class="bui-checkbox-label  bui-checkbox-anim">
                            <input name="test-checkbox" v-validate="'required'" @click="checkTap(key,$event)" :checked="checkIndex == key" :value="item.value"  type="checkbox"/><i class="bui-checkbox"></i> {{item.text}}
                        </label> -->


                        <label  class="bui-checkbox-label  bui-checkbox-anim">
                            <input name="check" v-validate="'required'" v-model="params.components" :value="item.value" type="checkbox"/><i class="bui-checkbox"></i> {{item.text}}
                        </label>
                    </div>
                </div>

                <div v-show="errors.has('check')" class="help is-danger">{{ $t('ap39') }}</div>

                

            </div>
            <div class="container form-view">
                <label class="label form-label">{{$t('ap5')}}</label>
                <div class="columns">
                    <div class="column is-6">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="params.refund_type" v-validate="'required'" v-model="params.refund_type" @change="selectChange">
                                        <option disabled value="">{{$t('ap1')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr1" :key="key">
                                            {{item.text}}
                                        </option>
                                        
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                        <div v-show="errors.has('params.refund_type')" class="help is-danger">{{ $t('ap1') }}</div>
                    </div>
                </div>
            
                
                <div class="columns" v-if="params.refund_type == 'CHEQUE'">
                    <div class="column is-6">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="isInput" v-validate="'required'" v-model="isInput" @change="selectChange">
                                        <option disabled value="">{{$t('ap40')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr3" :key="key">
                                            {{item.text}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-show="errors.has('isInput')" class="help is-danger">{{ $t('ap40') }}</div>
                    </div>
                </div>

                
                
                <div class="columns" v-if="isInput == 'ANOTHER' && params.refund_type == 'CHEQUE'">
                    <div class="column">
                        <div class="control">
                            <input class="input" name="params.payee_first_name" v-model="params.payee_first_name" v-validate="'required|alpha_spaces'" type="text" :placeholder="$t('ap2')">
                        </div>
                        <div v-show="errors.has('params.payee_first_name')" class="help is-danger">{{ $t('ap2') }}</div>
                        
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" name="params.payee_last_name" v-model="params.payee_last_name" v-validate="'required|alpha_spaces'" type="text" :placeholder="$t('ap3')">
                        </div>
                        <div v-show="errors.has('params.payee_last_name')" class="help is-danger">{{ $t('ap3') }}</div>
                        
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
                <div @click="submitForm" class="button button-style is-medium">{{ $t('s9')}}</div>
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


import { getApplicationInfo,postApplication } from '../api/application'
import translator from '../language/lib/application'




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
            // beforeTime:new Date(),

            modalShow:0,
            ctxMessage:'',

            selectArr:[],
            selectArr1:[],
            selectArr2:[],
            selectArr3:[],
            isInput:'',
            params:{
                refund_type:'',
                test_type:'',
                components:[]
            }
        }
    },
    computed:{
        getLanguage(){
            return (this.$store.state.language  == 'en'?'en':'zh')
        }
    },
    async created(){
        

        const data = await getApplicationInfo('EOR');

        this.ruleCtx = data.data.sector.terms
        this.selectArr = data.data.test_type
        this.selectArr1 = data.data.refund_type
        this.selectArr2 = data.data.components
        this.selectArr3 = data.data.refund_payee_name;

        this.params.components = this.selectArr2.map(v=>{
            return v.value
        })

        // this.params.components

        // console.log(result)

        console.log(data);
        
    },
    methods:{
        selectChange(e){
            switch(e.target.name) {
                case 'params.test_type':
                    this.params.test_type = e.target.value
                break;
                case 'params.refund_type':
                    this.params.refund_type = e.target.value
                break;
            }
        },
        checkTap(key,ev){
            if(this.checkIndex == key) {
                ev.preventDefault()
            };
            this.checkIndex = key;
            
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
        submitForm(){
            
            this.$validator.validateAll().then(async res => {
                if (res) {

                    

                    const data = await postApplication('EOR',this.params);
                    // 

                    
                    

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
