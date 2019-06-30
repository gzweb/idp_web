<template>
    <div class="application-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/banner_4.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">{{getTestList['sector']&&getTestList['sector'][4]['name']}}</div>
                <!-- <div class="rellax-text is-size-1-desktop is-size-3-touch">(Reprint TRF) application</div> -->
            </template>
        </RellaxBanner>

        <div class="application-page">
           

            <BannerStep />
            

            
            <div class="container form-view">
                <div class="application-ctx" v-html="ruleCtx.notes"></div>
                <div class="columns">
                    
                    
                    <div class="column">
                        <div class="control">
                            <input name="last_name" v-model="params.last_name" v-validate="'required|alpha_spaces'" type="text" class="input" :placeholder="$t('validation-1')">
                        </div>
                        <div class="application-tips">{{$t('s11')}}</div>
                        <div v-show="errors.has('last_name')" class="help is-danger">{{ $t('validation-1') }}</div>
                    </div>
                     <div class="column">
                        <div class="control">
                            <input name="first_name" v-validate="'required|alpha_spaces'" v-model="params.first_name" class="input" type="text" :placeholder="$t('validation-2')">
                        </div>   
                        <div class="application-tips">{{$t('s11')}}</div>                    
                        <div v-show="errors.has('first_name')" class="help is-danger">{{ $t('validation-2') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="control">
                            <input name="candidate_id" v-validate="'required|alpha_num|min:4|max:4'" v-model="params.candidate_id" class="input" type="text" :placeholder="$t('validation-4')">
                        </div>
                        <div class="application-tips">{{$t('s14')}}</div>
                        <div v-show="errors.has('candidate_id')" class="help is-danger">{{ $t('validation-4') }}</div>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input name="candidate_number" v-validate="'required|min:6|max:6'" v-model="params.candidate_number" class="input" type="text" :placeholder="$t('validation-5')">
                        </div>
                        <div v-show="errors.has('candidate_number')" class="help is-danger">{{ $t('validation-5') }}</div>
                    </div>
                </div>
                <div class="columns" style="margin-bottom:0;">
                    
                    <div class="column">
                        <date-picker name="test_date" v-validate="'required'" :editable="false" :placeholder="$t('validation-6')" value-type="format" width="100%" input-class="input" v-model="params.test_date" :lang="getLanguage" type="date" format="DD/MM/YYYY" confirm></date-picker>
                        <div v-show="errors.has('test_date')" class="help is-danger">{{ $t('validation-6') }}</div>
                    </div>
                    <div class="column">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="test_type" v-validate="'required'" v-model="params.test_type" @change="selectChange">
                                        <option disabled value="">{{$t('validation-7')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr" :key="key">
                                            {{item.text}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-show="errors.has('test_type')" class="help is-danger">{{ $t('validation-7') }}</div>
                    </div>
                </div>
                <div class="columns is-gapless">
                    <div class="application-tips">{{$t('ap43')}}</div>
                </div>
            </div>
            <div class="container form-view">
                <label class="label form-label">{{$t('ap21')}}</label>
                <div class="columns is-multiline" v-for="(item,key) in params.institution" :key="key">
                    <div class="column is-6">
                        <div class="control">
                            <input :name="`contact_name-${key}`" v-validate="'required'" v-model="params.institution[key]['contact_name']"  class="input" type="text" :placeholder="$t('ap17')">
                        </div>
                        <div v-show="errors.has(`contact_name-${key}`)" class="help is-danger">{{ $t('ap17') }}</div>
                    </div>
                    <div class="column is-6">
                        <div class="control">
                            <input :name="`institution_name-${key}`" v-validate="'required'" v-model="params.institution[key]['institution_name']" class="input" type="text" :placeholder="$t('ap18')">
                        </div>
                        <div v-show="errors.has(`institution_name-${key}`)" class="help is-danger">{{ $t('ap18') }}</div>
                    </div>

                    <div class="column is-6">
                        <input v-model="params.institution[key]['file_number']" class="input" type="text" :placeholder="$t('ap23')">
                    </div>

                    <div class="column is-6">
                        <div class="control">
                            <input :name="`address-${key}`" v-validate="'required'" v-model="params.institution[key]['address']" class="input" type="text" :placeholder="$t('ap19')">
                        </div>
                        <div v-show="errors.has(`address-${key}`)" class="help is-danger">{{ $t('ap19') }}</div>
                    </div>

                    <div class="column is-6">
                        <div class="control">
                            <input :name="`tel-${key}`" v-validate="'required'" v-model="params.institution[key]['tel']" class="input" type="text" :placeholder="$t('ap20')">
                        </div>
                        <div v-show="errors.has(`tel-${key}`)" class="help is-danger">{{ $t('ap20') }}</div>
                        
                    </div>

                    <div class="column is-6" v-if="key == params.institution.length - 1">
                        <div class="columns">
                            <div class="column is-5">
                                <div class="button button-style" @click="addInfo">{{$t('ap22')}}</div>
                            </div>
                            <div class="column">
                                <div class="button remove-style" @click="removeInfo" v-if="params.institution.length > 1">{{$t('ap36')}}</div>
                            </div>
                        </div>
                        
                        
                    </div>
                    
                </div>
                
            </div>

            <div class="container form-view">
                <label class="label form-label">{{$t('ap24')}}</label>
                <div class="application-tips" style="margin-bottom:10px;">{{ $t('ap44') }}</div>
                <div class="columns">
                    <div class="column is-6">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="courier_service" v-validate="'required'" v-model="params.courier_service" @change="selectChange">
                                        <option disabled value="">{{ $t('ap24') }}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr1" :key="key">
                                            {{item.text}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="application-tips" v-show="selectTips">{{selectTips}}</div>
                        <div v-show="errors.has('courier_service')" class="help is-danger">{{ $t('ap24') }}</div>
                        
                    </div>
                    
                </div>
            </div>

            <!-- <div class="container form-view" v-if="params.medium == 'PAPER'">
                <label class="label form-label">{{ $t('ap26') }}</label>
                <div class="columns">
                    <div class="column is-6">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="courier_service" v-validate="'required'" v-model="params.courier_service" @change="selectChange">
                                        <option disabled value="">{{ $t('ap27') }}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr2" :key="key">
                                            {{item.text}}
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-show="errors.has('courier_service')" class="help is-danger">{{ $t('ap27') }}</div>
                    </div>
                </div>




                <div class="columns">
                    <div class="column is-6">
                        <input class="input" type="text" :placeholder=" $t('ap28')">
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <input class="input" type="text" :placeholder="$t('ap29')">
                    </div>
                </div>
                <div class="tips">{{$t('ap30')}}</div>
                
                <div class="columns">
                    <div class="column is-2">
                        <input class="input" type="text" placeholder="+86">
                    </div>
                    <div class="column is-4">
                        <input class="input" type="text" placeholder="Contact phone number">
                    </div>
                    <div class="column is-6">
                        <input class="input" type="text" placeholder="Zip code">
                    </div>
                </div>

                <div class="additional-text">List the acceptance of electronic copy</div>
                <div class="download-link-view">
                    <a class="download-link" href="">1.Click on the file name to download</a>
                </div>
                
                
                
                
            </div> -->

            

            <div class="container form-view" style="margin-top:30px;">

                <template v-for="item in ruleCtx.files">
                    <div class="additional-text">{{item.title}}</div>
                    <div class="download-link-view">
                        <a :href="items.link" v-for="(items,key) in item.files" :key="key" class="download-link">{{key+1}}. &nbsp;&nbsp;{{items.name}}</a>
                    </div>
                </template>

                
                <div style="margin-top:80px;"></div>

                <label class="bui-checkbox-label  bui-checkbox-anim">
                    <input v-validate="'required'" type="checkbox" name="terms"/><i class="bui-checkbox"></i><a class="rule-link" href="#rule">{{$t('ap6')}}</a> 
                </label>
                <div class="control">
                    <div v-show="errors.has('terms')" class="help is-danger">{{ $t('ap4') }}</div>
                </div>
            </div>
            
            <div class="field is-grouped is-grouped-centered button-view">
                <div @click="submitForm" class="button button-style is-medium">{{$t('s9')}}</div>
            </div>


            <div class="container" id="rule">
                <div class="application-title" v-html="ruleCtx.terms.title"></div>
                <div class="application-ctx" v-html="ruleCtx.terms.content"></div>
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
            ruleCtx:{
                terms:{}
            },
            // beforeTime:new Date(),
            modalShow:0,
            ctxMessage:'',
            selectTips:0,
            params:{
                test_type:'',
                medium:'',
                courier_service:'',
                institution:[{}]
            },
            selectArr:[],
            selectArr1:[]
            // selectArr2:[]
        }
    },
    computed:{
        getLanguage(){
            return (this.$store.state.language  == 'en'?'en':'zh')
        },
        getTestList(){
            return this.$store.state.TestList
        }
    },
    async created(){
        const data = await getApplicationInfo('RTRF');
        this.ruleCtx = data.data.sector
        this.selectArr = data.data.test_type;
        // this.selectArr1 = data.data.medium;
        // this.selectArr2 = data.data.courier_service;
        this.selectArr1 = data.data.courier_service;
        console.log(data);
        
    },
    methods:{
        removeInfo(){
            if(this.params.institution.length <= 1) {return}
            this.params.institution.pop();
        },
        addInfo(){
            this.params.institution.push({});
        },
        selectChange(e){
            switch(e.target.name) {
                case 'testType':
                    this.params.testType = e.target.value
                break;
                // case 'medium':
                //     this.params.medium = e.target.value
                // break;
                case 'courier_service':
                    this.params.courier_service = e.target.value
                    if(this.selectArr1[e.target.selectedIndex-1]['remark']) {
                        this.selectTips = this.selectArr1[e.target.selectedIndex-1]['remark'];
                    }else{
                        this.selectTips = 0;
                    };
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
        submitForm(){
            this.$validator.validateAll().then(async res => {
                if (res) {

                    $('.application-page input,.application-page select').css({
                        'border':'1px solid #aab3bb'
                    })
                    $('.mx-datepicker input').css({
                        'border':'1px solid #aab3bb'
                    })

                    this.params['count'] = this.params.institution.length;
                    

                    const data = await postApplication('RTRF',this.params);
                   
        
                    

                    this.modalShow = 1;
                    if(data.code != '0') {
                        this.ctxMessage = data.message;
                        if(data.data) {
                            data.data.fields.forEach((v,k)=>{
                                $(`input[name="${v}"],select[name="${v}"]`).css({
                                    'border':'1px solid #ff3860'
                                });
                                if(v == 'test_date') {
                                    $('.mx-datepicker input').css({
                                        'border':'1px solid #ff3860'
                                    })
                                };
                            });
                        };
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
    .tips {
        font-size: 14px;
        color: #697782;
    }
    .download-link {
        text-decoration: underline;
    }
    .additional-text {
        margin-top: 10px;
    }
    .download-link-view {
        margin-bottom: 10px;
    }
    .remove-style {
        // margin-left: 50px;
        background-color: #FF8300;
        color: white;
        &:hover {
            color: white;
        }
    }
</style>
