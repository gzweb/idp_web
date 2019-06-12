import Vue from 'vue'
import Vuex from 'vuex'
import { getCookie } from './utils/utils'

let locale = localStorage.getItem('language');

if(!locale) {
	let lang = navigator.language
	// console.log(lang)
	switch(lang) {
		case 'zh-CN':
			locale = 'cn'
		break;
		case 'en':
			locale = 'en'
		break;
		default:
			locale = 'zh'
		break;
	}
}


switch(locale) {
	case 'en':
		document.title = 'IELTS IDP'
	break;
	default:
		document.title = '雅思IDP'
	break;
}



Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isIndexFixed:0,
		swiperIndex:0,
		language:locale,
		isLogin:getCookie('token'),
		includeList: []
	},
	mutations: {
		setIndexFixed( state, stutas ) { //设置首页导航透明
			state.isIndexFixed = stutas
		},
		setSwiperIndex( state, stutas ) {  //设置首页swiperKey
			state.swiperIndex = stutas
		},
		setLoginState(state ,stutas){  //设置登陆状态
			state.isLogin = stutas
		},

		addIncludeList(state, component) { // 添加路由
			!state.includeList.includes(component) && state.includeList.push(component);
		},
		removeIncludeList(state, component) { //删除路由
			const index = state.includeList.indexOf(component);
			index != -1 && state.includeList.splice(index, 1);
		}
	}
})
