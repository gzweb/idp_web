<template>
  	<div class="index-view">
		<DefaultNavBar>
			
			<!-- <template v-slot:mobile-index>
				<div @click="goPage(key)" v-if="key > 0" v-for="(item,key) in bannerData.sector" :key="key">
					
					<div class="mobile-navbar-ctx">{{item.name}}</div>
				</div>
			</template> -->
			
		</DefaultNavBar>
		<Banner />		
		
		
	</div>
</template>

<script>
import Banner from '@/components/Banner'
export default {
	name: "home",
	data(){
		return {
			// bannerData:''
		}
	},
	methods:{
	},
	async created(){
		// const data = await api.getBanner();
		
		// data.data.sector.unshift({});
		// this.bannerData = data.data;

	
		
		
		// this.$store.commit('setTestList', data.data)
		
		// console.log(this.bannerData)
		
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

