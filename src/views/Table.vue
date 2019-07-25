<template>
    <div class="application-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/banner_7.png" alt="">
            </template>
            
        </RellaxBanner>

        <div class="rellax-page-view">
            <!-- <div class="title-style-1 title-style-text">{{$t('table1')}}</div> -->

            <div class="title-style-1 title-style-text">{{menuList[2]['value']}}</div>
            <!-- <div class="container has-text-centered">{{ menuList[2]['value'] }}</div> -->

            <div class="container">
                

            
                <div class="table-view" id="test-print">
                    <div class="columns is-marginless is-gapless is-mobile table-view-item table-view-item-first">
                        <div class="column">{{menuList[0]['text']}}：{{ menuList[0]['value'] }}</div>
                        <div class="column has-text-right">{{menuList[1]['text']}}：{{menuList[1]['value']}}</div>
                    </div>
                    

                    <div class="table-item" v-for="(item,key) in list" :key="key">
                        <div class="table-item-title" :class="{'no-margin':key == 0}"> {{item.title}}</div>


                        <div class="columns is-multiline is-variable is-8">
                            <div class="column is-6" v-for="(items,index) in item.value" :key="index">
                                <div class="columns is-mobile is-variable">
                                    <div class="column is-6 table-color-1">{{items.text}}</div>
                                    <div class="column is-6 has-text-right table-color-2" v-if="!item.type && items.type != 'file'">{{items.value}}</div>
                                    <div class="column is-6 has-text-right table-color-2" v-else>
                                        <a target="_blank" :href="items.value.link" class="button button-style">{{$t('s10')}}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    

                    </div>

                    
                </div>

           
                
                
                <div class="columns columns-style-1">
                    <div class="column">
                        <div class="columns">
                            <div class="column">
                                <div @click="backTap" class="button button-style table-button">{{$t('table2')}}</div>
                            </div>
                            <div class="column is-hidden-touch">
                                <div class="button button-style table-button" @click="print">{{$t('table3')}}</div>
                            </div>

                            <div class="column" v-if="this.isConfirm">
                                <div class="button button-style table-button" @click="cancelOrder">{{$t('table7')}}</div>
                            </div>

                            <div class="column" v-if="this.isConfirm">
                                <div class="button button-style table-button" @click="postOrder">{{$t('table6')}}</div>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

        <Footer />

    </div>
</template>

<script>

import Vue from 'vue'
import '../css/table.css'
import RellaxBanner from '@/components/RellaxBanner'
import {getApplicationCtx,confirmOrder} from '@/api/home'
import translator from '../language/lib/table'
import { Toast } from 'vant';

Vue.use(Toast);





export default {
    name:'Table',
    components:{
        RellaxBanner
    },
    translator,
    data(){
        return {
            menuList:[{},{},{}],
            list:[],
            isConfirm:this.$route.query.isConfirm
        }
    },
    watch:{
        '$route':async function(){
            
            
            const data = await getApplicationCtx(this.$route.params.id)
            

            console.log(data)
                
                
            this.menuList = data.data[0]['value'];
            this.list = data.data.slice(1);


            this.isConfirm = 0;
            
        }
    },
    async created(){
        
        const data = await getApplicationCtx(this.$route.params.id,{
            confirm:this.isConfirm?1:0
        })
        
        this.menuList = data.data[0]['value'];
        this.list = data.data.slice(1);
        
    },
    methods:{
        cancelOrder(){
            

            this.$router.replace('/')
        },
        async postOrder(){
        
            
            const data = await confirmOrder(this.$route.params.id,{
                id:this.$route.params.id
            });

            Toast(data.message);

            this.$router.push({
                path:this.$route.path
            })
            



            // setTimeout(()=>{
            //     this.$router.go(-1);
            // },1000);
            
        },
        backTap(){
            // this.$router.go(-1);
            this.$router.push('/home')
        },
        print(){
            // console.log(printJS)
            
            printJS({ 
                printable: 'test-print',
                type: 'html', 
                header: 'idp 打印测试',
                scanStyles: false,
                css: ['../css/table.css','../css/bulma.min.css']
            })
     
        }
    }
}
</script>

<style lang="scss">
    .table-button {
        width: 200px;
        display: flex;
        margin: 0 auto;
    }
    .columns-style-1 {
        padding: 80px 0 50px;
    }
    .table-bold {
        font-weight: bold;
    }
</style>
