<template>
    <div class="application-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/score_1.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">{{getTestTile}} </div>
                <!-- <div class="rellax-text is-size-1-desktop is-size-3-touch">application</div> -->
            </template>
        </RellaxBanner>

        <div class="application-page">
            

            <BannerStep />

           

            
            <div class="container form-view">

                <div class="application-ctx" v-html="ruleCtx.notes"></div>
                <div class="columns">
                    
                    <div class="column">

                        <div class="control">
                            <input name="params.last_name" v-model="params.last_name" v-validate="'required|alpha_spaces'" type="text" class="input" :placeholder="$t('validation-1')">
                        </div>
                        <div class="application-tips">{{$t('s11')}}</div>
                        <div v-show="errors.has('params.last_name')" class="help is-danger">{{ $t('validation-1') }}</div>
                    </div>
                    <div class="column">
                        <div class="control">
                            <input name="params.first_name" v-validate="'required|alpha_spaces'" v-model="params.first_name" class="input" type="text" :placeholder="$t('validation-2')">
                        </div>                       
                        <div class="application-tips">{{$t('s18')}}</div>
                        <div v-show="errors.has('params.first_name')" class="help is-danger">{{ $t('validation-2') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="control">
                            <input name="params.candidate_id" v-validate="'required|alpha_num|min:4|max:4'" v-model="params.candidate_id" class="input" type="text" :placeholder="$t('validation-4')">
                        </div>
                        <div class="application-tips">{{$t('s14')}}</div>
                        <div v-show="errors.has('params.candidate_id')" class="help is-danger">{{ $t('validation-4') }}</div>
                    </div>
                    <div class="column">
                        <div class="field has-addons">
                            <div class="control is-expanded">

								<div class="columns">
                                    <div class="column is-4">
                                        <div class="select is-fullwidth">
											<select name="params.test_type_1" v-validate="'required'" v-model="test_type_1" @change="selectChange">
												<option disabled value="">{{$t('validation-7')}}</option>
												<option :value="key" v-for="(item,key) in selectArr" :key="key">
													{{key}}
												</option>
											</select>
										</div>
                                    </div>
                                    <div class="column is-4">
										<div class="select is-fullwidth">
											<select name="params.test_type_2" v-validate="'required'" v-model="test_type_2" @change="selectChange">
												<option disabled value="">{{$t('validation-8')}}</option>
												<option :value="key" v-for="(item,key) in selectTypeArr1" :key="key">
													{{key}}
												</option>
											</select>
										</div>
									</div>
                                    <div class="column is-4">
										<div class="select is-fullwidth">
											<select name="params.test_type" v-validate="'required'" v-model="params.test_type" @change="selectChange">
												<option disabled value="">{{$t('validation-9')}}</option>
												<option :value="item" v-for="(item,key) in selectTypeArr2" :key="key">
													{{key}}
												</option>
											</select>
										</div>
									</div>
                                </div>
                                <!-- <div class="select is-fullwidth">
                                    <select name="params.test_type" v-validate="'required'" v-model="params.test_type" @change="selectChange">
                                        <option disabled value="">{{$t('validation-7')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr" :key="key">
                                            {{item.text}}
                                        </option>
                                    </select>
                                </div> -->
                            </div>
                        
                        </div>
                        <div v-show="errors.has('params.test_type')" class="help is-danger">{{ $t('validation-7') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <input name="params.candidate_number" v-validate="'required|max:6|min:6'" v-model="params.candidate_number" class="input" type="text" :placeholder="$t('validation-5')">
                        <div v-show="errors.has('params.candidate_number')" class="help is-danger">{{ $t('validation-5') }}</div>
                    </div>
                    <div class="column" style="line-height:normal;">
                        <!-- 限制时间 not-after="2019-05-30 12:00:00" -->
                        <date-picker name="params.test_date" v-validate="'required'" :not-before="beforeTime" :not-after="maxTime" :editable="false" :placeholder="$t('validation-6')" value-type="format" width="100%" input-class="input" v-model="params.test_date" :lang="getLanguage" type="date" format="DD/MM/YYYY" confirm></date-picker>
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

                <div class="application-tips">{{$t('ap52')}}</div>
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
                                        <option v-show="item.value != 'CASH' || isCash" :value="item.value" v-for="(item,key) in selectArr1" :key="key">
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
                            <input class="input" name="params.payee_last_name" v-model="params.payee_last_name" v-validate="'required|alpha_spaces'" type="text" :placeholder="$t('ap2')">
                        </div>
                        <div v-show="errors.has('params.payee_last_name')" class="help is-danger">{{ $t('ap2') }}</div>
                        
                    </div>
                    <div class="column">
                        <div class="control">
                            <input class="input" name="params.payee_first_name" v-model="params.payee_first_name" v-validate="'required|alpha_spaces'" type="text" :placeholder="$t('ap3')">
                        </div>
                        <div v-show="errors.has('params.payee_first_name')" class="help is-danger">{{ $t('ap3') }}</div>
                        
                    </div>
                </div>
                
                <!-- <template v-for="item in ruleCtx.files">
                    <div class="additional-text">{{item.title}}</div>
                    <div class="download-link-view">
                        <a :href="items.link" v-for="(items,key) in item.files" :key="key" class="download-link">{{key+1}}. &nbsp;&nbsp;{{items.name}}</a>
                    </div>
                </template> -->

                <div style="margin-bottom:120px;">
                    <label class="bui-checkbox-label  bui-checkbox-anim">
                        <input @change="selectChange" name="cash" v-model="isCash" type="checkbox" /><i class="bui-checkbox" style="margin-right:10px;"></i>{{$t('ap53')}}</a> 
                    </label>
                </div>
                

                <label class="bui-checkbox-label  bui-checkbox-anim">
                    <input v-validate="'required'" type="checkbox" name="terms"/><i class="bui-checkbox"></i><a class="rule-link" href="#rule">{{$t('ap6')}}</a> 
                </label>
                

                <div class="control">
                    <div v-show="errors.has('terms')" class="help is-danger">{{ $t('ap4') }}</div>
                </div>
            </div>
            
            <div class="field is-grouped is-grouped-centered button-view">
                <div @click="submitForm" class="button button-style is-medium">{{ $t('s9')}}</div>
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
            ruleCtx:{
                terms:{

                }
			},
			test_type_1:'',
            test_type_2:'',
            selectTypeArr1:[],
            selectTypeArr2:[],
            beforeTime:'',
            maxTime:'',

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
            },
            isCash:0
        }
    },
    computed:{
        getLanguage(){
            return (this.$store.state.language  == 'en'?'en':'zh')
        },
        getTestList(){
            return this.$store.state.TestList
        },
        getTestTile(){
            return this.$store.state.testTile
        }
    },
    async created(){
        

        let t1 = new Date();
        let t2 = new Date();

        this.beforeTime = t1.setDate(t1.getDate() - 41)
        this.maxTime = t2.setDate(t2.getDate() + 5)

		const data = await getApplicationInfo('EOR');
		

        this.ruleCtx = data.data.sector
        this.selectArr = data.data.test_type
        this.selectArr1 = data.data.refund_type
        this.selectArr2 = data.data.components
        this.selectArr3 = data.data.refund_payee_name;




        // this.params.components = this.selectArr2.map(v=>{
        //     return 0
        // });



        console.log(data)


        
    },
    methods:{
        selectChange(e){

            if(!e.target.name.indexOf('params.test_type')) {
            

                switch(e.target.name) {
                    case 'params.test_type':
                            this.params.test_type = e.target.value;
                        break;
                    case 'params.test_type_1':
                            this.params.test_type = '';
                            this.test_type_2 = '';
                            this.selectTypeArr1 = this.selectArr[e.target.value];
                        break;
                    case 'params.test_type_2':
                            this.params.test_type = '';
                            this.selectTypeArr2 = this.selectTypeArr1[e.target.value];
                        break;
                };
            };


            // console.log(e.target.name)

            switch(e.target.name) {
                // case 'params.test_type':
                //     this.params.test_type = e.target.value
                // break;
                case 'params.refund_type':
                    this.params.refund_type = e.target.value
                break;
                case 'cash':
                    this.params.refund_type = (this.isCash?this.selectArr1[1]['value']:this.selectArr1[0]['value'])
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

        
            // if(this.isSuccess) {
                
            //     let path;
            //     switch(this.isSuccess){
            //         case 1:
            //             path =  `/price_table/${this.dataID}`
            //         break;
            //         case 2:
            //             path = `/table/${this.dataID}`
            //         break;
            //     }
            //     this.$router.replace(path)
            // };

        },
        submitForm(){
            
            this.$validator.validateAll().then(async res => {
                if (res) {
                    
                    // 提交数据后 验证错误恢复样式
                    $('.application-page input,.application-page select').css({
                        'border':'1px solid #aab3bb'
                    })

                    $('.mx-datepicker input').css({
                        'border':'1px solid #aab3bb'
                    })

        

                    const data = await postApplication('EOR',this.params);
                    // 

                    
                    

                    
                    if(data.code != '0') {
                        this.modalShow = 1;
                        this.ctxMessage = data.message;

                        if(data.data) {
                            data.data.fields.forEach((v,k)=>{
                                
                                $(`input[name="params.${v}"],select[name="params.${v}"]`).css({
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



                    let path;

                    if(data.data.to_pay) {
                        path =  `/price_table/${data.data.id}`
                    }else{
                        if(data.data.to_confirm) {
                            path = `/table/${data.data.id}?isConfirm=1`
                        }else{
                            path = `/table/${data.data.id}`
                        }
                    }
                   
                    this.$router.replace(path)





                    // if(data.data.to_pay) {
                    //     this.isSuccess = 1;
                    // }else{
                    //     this.isSuccess = 2;
                    // };

                    // this.dataID = data.data.id;
                    
                    // this.ctxMessage = this.$t('ap16');

                    
                }

                

                

            });
        }
    }
}
</script>

<style lang="scss">

</style>
