<template>
  	<div class="index-view">
		<DefaultNavBar type="1" >
			<template v-slot:logo>
				<img  class="navbar-logo" src="../../public/images/index_logo.png" alt="">	
			</template>

			<template v-slot:mobile-index>
				<div @click="goPage(key)" v-if="key > 0" class="index-mobile-item mobile-navbar-item is-paddingless navbar-item" v-for="(item,key) in bannerData.sector" :key="key">
					<!-- <div v-if="key == 0" class="mobile-navbar-ctx">{{$t('a-t-1')}}</div>
					<div v-else-if="key == 1" class="mobile-navbar-ctx">{{$t('a-t-2')}}</div>
					<div v-else-if="key == 2" class="mobile-navbar-ctx">{{$t('a-t-3')}}</div>
					<div v-else-if="key == 3" class="mobile-navbar-ctx">{{$t('a-t-4')}}</div>
					<div v-else-if="key == 4" class="mobile-navbar-ctx">{{$t('a-t-5')}}</div> -->
					<div class="mobile-navbar-ctx">{{item.name}}</div>
				</div>
			</template>
			
		</DefaultNavBar>
		<Banner :bannerData="bannerData" />		
		
		
	</div>
</template>

<script>
import Banner from '@/components/Banner'
import api from '@/api/index'
export default {
	name: "home",
	data(){
		return {
			bannerData:''
		}
	},
	methods:{
		goPage(key){

			if(this.bannerData['banner'][key]['external']) {
                window.location.href = this.bannerData['banner'][key]['jump_url']
            }else{
                this.$router.push({
                    path:this.bannerData['banner'][key]['jump_url']
                })
            }

		}
	},
	async created(){
		const data = await api.getBanner();
		// console.log(data.data);
		// data.data.banner.length = 3;
		// data.data.sector.length = 3;
		// sector
		data.data.sector.unshift({});
		this.bannerData = data.data;
		console.log(this.bannerData)
	},
	components:{
		Banner
	}
	
};
</script>

<style lang="scss">
	.index-view {
		height: 100%;
	}
	
</style>

