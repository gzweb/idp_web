<template>
    <div class="application-view fixed-view">
        <DefaultNavBar />
        <RellaxBanner>
            <template v-slot:rellaxpic>
                <img class="rellax-pic" src="../../public/images/banner_5.png" alt="">
            </template>
            <template v-slot:rellaxtext>
                <div class="rellax-text is-size-1-desktop is-size-3-touch">{{$t('table1')}}</div>
               
            </template>
        </RellaxBanner>

        <div class="rellax-page-view">
            <div class="title-style-1 title-style-text">{{$t('table1')}}</div>

            <div class="container">

                
                <div class="table-view">
                    <div class="columns is-marginless is-gapless is-mobile table-view-item table-view-item-first">
                        <div class="column">{{menuList[0]['text']}}：{{ menuList[0]['value'] }}</div>
                        <div class="column has-text-right">{{menuList[1]['text']}}：

                            <span class="table-color">{{h}}:{{m}}:{{s}}</span>
                        </div>
                    </div>
                    

                    <div class="table-item" v-for="(item,key) in list" :key="key">
                        <div class="table-item-title" :class="{'no-margin':key == 0}"> {{item.title}}</div>


                        <div class="columns is-multiline is-variable is-8">
                            <div class="column is-6" v-for="(items,index) in item.value" :key="index">
                                <div class="columns is-mobile is-variable">
                                    <div class="column is-6 table-color-1">{{items.text}}</div>
                                    <div class="column is-6 has-text-right table-color-2">{{items.value}}</div>
                                </div>
                            </div>
                        </div>
                    

                    </div>

                    
                </div>

                <div style="margin-top:100px;"></div>
            
                
                <div class="columns is-marginless is-gapless price-item" v-for="(item,key) in list1" :key="key">
                    <div class="column has-text-right">{{item.text}}：{{item.value}}</div>
                </div>
                
                <div class="columns is-marginless is-gapless price-item">
                    <div class="column has-text-right">{{moneyInfo.text}}： <span class="price-color">{{moneyInfo.value}}</span></div>
                </div>

                <div class="columns is-marginless is-gapless price-item">
                    <div class="column has-text-right">
                        <a :href="link" class="button button-style price-button">{{$t('table5')}}</a>
                        <div class="pay-tips">{{$t('table4')}}</div>
                    </div>
                </div>
            </div>
        </div>
        

        <Footer />

    </div>
</template>

<script>

import '../css/table.css'
import RellaxBanner from '@/components/RellaxBanner'
import {formatSeconds} from '../utils/utils'
import {getPayInfo} from '@/api/home'
import translator from '../language/lib/table'

let timer;


export default {
    components:{
        RellaxBanner,
        timer:null
    },
    translator,
    data(){
        return {
            list:[],
            modalShow:0,
            ctxMessage:'',
            s:'00',
            m:'00',
            h:'00',
            menuList:[{},{}],
            list:[],
            list1:[],
            link:'',
            moneyInfo:''
        }
    },
    async created(){

       
        
        const data = await getPayInfo(this.$route.params.id);
        

        console.log(data);


        this.menuList = data.data.info[0]['value'];
        this.list = data.data.info.slice(1);
        this.list1 = data.data.money;
        this.moneyInfo = data.data.money_total;
        this.link = data.data.pay_url;

        let times = this.menuList[1]['value'];
        timer = setInterval(()=>{
            if(times<=0) {clearInterval(timer)}
            let result = formatSeconds(--times);            
            this.s = result['s']
            this.m = result['m']
            this.h = result['h']
        },1000)
    },
    destroyed(){
        clearInterval(timer);
    },
    methods:{
       
        
    }
}
</script>

<style lang="scss">

</style>
