<template>
    <div class="application-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/banner_2.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">{{getTestTile}}</div>
                <!-- <div class="rellax-text is-size-1-desktop is-size-3-touch">application</div> -->
            </template>
        </RellaxBanner>

        <div class="application-page">
            

            <BannerStep :show="1">
                <template v-slot:text>
                   {{$t('ap42')}}
                </template>
            </BannerStep>
            

            
            <div class="container form-view">
                <div class="application-ctx" v-html="ruleCtx.notes"></div>
                <div class="columns">
                    
                    <div class="column">
                        <div class="control">
                            <input name="last_name" v-model="params.last_name" v-validate="{ required: true, regex: /^[A-Za-z.'-\s]+$/}" type="text" class="input" :placeholder="$t('validation-1')">
                        </div>
                        <div class="application-tips">{{$t('s11')}}</div>
                        <div v-show="errors.has('last_name')" class="help is-danger">{{ $t('validation-1') }}</div>
                    </div>
                     <div class="column">
                        <div class="control">
                            <input name="first_name" v-validate="{ required: true, regex: /^[A-Za-z.'-\s]+$/}" v-model="params.first_name" class="input" type="text" :placeholder="$t('validation-2')">
                        </div>          
                        <div class="application-tips">{{$t('s18')}}</div>             
                        <div v-show="errors.has('first_name')" class="help is-danger">{{ $t('validation-2') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column">
                        <div class="control">
                            <input name="nameNumber" v-validate="'required|alpha_num|min:4|max:4'" v-model="params.candidate_id" class="input" type="text" :placeholder="$t('validation-4')">
                        </div>
                        <div class="application-tips">{{$t('s14')}}</div>
                        <div v-show="errors.has('nameNumber')" class="help is-danger">{{ $t('validation-4') }}</div>
                    </div>
                    <div class="column">
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
                        <div v-show="errors.has('params.test_type')" class="help is-danger">{{ $t('validation-7') }}</div>
                    </div>
                </div>
                <div class="columns">
                    <div class="column is-6">
                        <date-picker name="test_date" v-validate="'required'" :editable="false" :placeholder="$t('validation-6')" :not-before="beforeTime" :not-after="maxTime" value-type="format" width="100%" input-class="input" v-model="params.test_date" :lang="getLanguage" type="date" format="DD/MM/YYYY" confirm></date-picker>
                        <!-- <div class="application-tips">{{$t('ap52')}}</div> -->
                        <div v-show="errors.has('test_date')" class="help is-danger">{{ $t('validation-6') }}</div>
                    </div>
                </div>
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
                                        
                                        <option v-if="item.value != 'CASH' || isCash" :value="item.value" v-for="(item,key) in selectArr1" :key="key">
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
                

                <div style="margin-bottom:20px;">
                    <label class="bui-checkbox-label  bui-checkbox-anim">
                        <input @change="selectChange" name="cash" v-model="isCash" type="checkbox" /><i class="bui-checkbox" style="margin-right:10px;"></i>{{$t('ap53')}}</a> 
                    </label>
                </div>
                
            </div>

            

            <div class="container form-view">
                <label class="label form-label">{{$t('ap34')}}</label>
                <div class="columns">
                    <div class="column is-6">
                        <div class="field has-addons">
                            <div class="control is-expanded">
                                <div class="select is-fullwidth">
                                    <select name="reason" v-validate="'required'" v-model="params.reason" @change="selectChange">
                                        <option disabled value="">{{$t('ap34')}}</option>
                                        <option :value="item.value" v-for="(item,key) in selectArr2" :key="key">
                                            {{item.text}}
                                        </option>
                                        
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div v-show="errors.has('reason')" class="help is-danger">{{ $t('ap34') }}</div>
                    </div>


                    <div class="column is-6" v-if="isUploadShow">
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
                        <!-- <div class="button button-style upload-button" v-if="params.medical_proof" @click="previewFile">{{$t('s10')}}</div> -->
                        <a target="_blank" :href="uploadLink" class="button button-style upload-button" v-if="params.medical_proof">{{$t('s10')}}</a>
                        
                    </div>


                </div>


                <label class="label form-label" v-html="$t('ap41')"></label>
                <div class="columns">
                    <div class="column">
                        <div class="control"><textarea name="params.statement" v-validate="'required'"  v-model="params.statement" class="textarea" :placeholder="$t('ap51')"></textarea></div>
                        <div v-show="errors.has('params.statement')" class="help is-danger">{{ $t('ap51') }}</div>
                    </div>
                </div>
                
                <template v-for="item in ruleCtx.files">
                    <div class="additional-text">{{item.title}}</div>
                    <div class="download-link-view">
                        <a :href="items.link" v-for="(items,key) in item.files" :key="key" class="download-link">{{key+1}}. &nbsp;&nbsp;{{items.name}}</a>
                    </div>
                </template>
                
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
            ruleCtx:{
                terms:{
                    
                }
            },

            isUploadShow:false,

            isCash:0,

            test_type_1:'',
            test_type_2:'',
            selectTypeArr1:[],
            selectTypeArr2:[],

            uploadLink:'',
            beforeTime:new Date(),
            modalShow:0,
            ctxMessage:'',
            params:{
                test_type:'',
                refund_type:'',
                reason:''
            },
            isInput:'',
            selectArr:[],
            selectArr1:[],
            selectArr2:[],
            maxTime:'',
            beforeTime:''
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
        // console.log(Language)

        // let t1 = new Date();
        // let t2 = new Date();

        // this.beforeTime = t1.setDate(t1.getDate() - 7)
        // this.maxTime = t2.setDate(t2.getDate() + 365)


        const data = await getApplicationInfo('TFR');
        this.ruleCtx = data.data.sector
        this.selectArr = data.data.test_type;
        this.selectArr1 = data.data.refund_type;
        // this.selectArr2 = data.data.reason;
        this.selectArr3 = data.data.refund_payee_name;

        this.temporaryArr = data.data.reason;
        this.validateArr = data.data.reason_medical_proof;
        this.dataArr = data.data.test_type_date_range;

        // this.beforeTime = t1.setDate(t1.getDate() - parseInt(data.data.sector.test_date_range[0]))
        // this.maxTime = t2.setDate(t2.getDate() - parseInt(data.data.sector.test_date_range[1]))

        console.log(data)
    },
    methods:{
        selectChange(e){


            if(!e.target.name.indexOf('params.test_type')) {
            

                switch(e.target.name) {
                    case 'params.test_type':
                            this.params.test_type = e.target.value;

                            
                            // this.selectArr2 = data.data.reason;
                        break;
                    case 'params.test_type_1':
                            this.params.test_type = '';
                            this.test_type_2 = '';
                            this.selectTypeArr1 = this.selectArr[e.target.value];

                            let result = [];

                            for(let x in this.temporaryArr[e.target.value]) {
                                result.push({
                                    value:x,
                                    text:this.temporaryArr[e.target.value][x]
                                })
                            };
                            this.isUploadShow = false;
                            this.params.reason = '';

                            this.selectArr2 = result;   
                            

                    
                        break;
                    case 'params.test_type_2':
                            this.params.test_type = '';
                            this.selectTypeArr2 = this.selectTypeArr1[e.target.value];
                            
                        break;
                };
            };

            switch(e.target.name) {
                // case 'testType':
                //     this.params.test_type = e.target.value
                // break;
                case 'reason':
                    

                    // includes


                    this.params.reason = e.target.value;
                    
                    // this.validateArr.includes(e.target.value)
                    let isFind = this.validateArr.includes(e.target.value);    //判断显示上传和重置时间

                    // console.log(this.validateArr.includes(e.target.value))
                    
                    
                    

                    let t1 = new Date();
                    let t2 = new Date();
                  
                    this.params.test_date = '';
                
                    this.beforeTime = t1.setDate(t1.getDate() - this.dataArr[e.target.value][0]);
                    this.maxTime = t2.setDate(t2.getDate() - this.dataArr[e.target.value][1]);


                    this.isUploadShow = (!isFind?false:true);

                    // if(!isFind){
                    //     // this.params.test_date = '';
                    //     // this.isUploadShow = false;
                    //     // const time = new Date();
                    //     // this.beforeTime = time.setDate(time.getDate()+35);
                    // }else{
                    //     // this.params.test_date = '';
                    //     // this.isUploadShow = true;
                    //     // this.beforeTime = new Date();
                    // };
                break;
                case 'params.refund_type':
                    this.params.refund_type = e.target.value;
                break;
                case 'cash':
                    this.params.refund_type = (this.isCash?this.selectArr1[1]['value']:this.selectArr1[0]['value'])
                    break;
            }
        },
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

                    

                    if(!this.params.medical_proof && this.isUploadShow) {
                        this.modalShow = 1;
                        this.ctxMessage = this.$t('ap14');
                        return;
                    }

                
                    



                    

                    const data = await postApplication('TFR',this.params);
                   
                    
                    
                    
                    if(data.code != '0') {
                        this.modalShow = 1;
                        this.ctxMessage = data.message;
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
