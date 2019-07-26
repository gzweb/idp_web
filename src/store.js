import Vue from 'vue'
import Vuex from 'vuex'
// import { getCookie } from './utils/utils'

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
		document.title = 'IDP IELTS'
	break;
	default:
		document.title = 'IDP 雅思'
	break;
}



Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		isIndexFixed:0,
		swiperIndex:0,
		language:locale,
		// isCookieTips:Cookies.get('cookietips') == 'false'?0:1,
		isCookieTips:1,
		isLogin:Cookies.get('token'),
		includeList: [],
		TestList:[{}],
		appTop:0,
		testTile:''
	},
	mutations: {
		setTestTile(state ,stutas){  //设置高度
			state.testTile = stutas;
		},
		setAppTop(state ,stutas){  //设置高度
			state.appTop = stutas;
		},
		setCookieTipsState(state ,stutas){  //设置登陆状态
			state.isCookieTips = stutas
		},
		setTestList(state ,stutas){  //设置登陆状态
			state.TestList = stutas
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
