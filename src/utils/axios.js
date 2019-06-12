import axios from 'axios'
import store from '../store'
import { Toast } from 'vant';
import { removeCookie } from './utils';

const url = process.env.NODE_ENV == 'development' ? 'https://mall.xvfin.com/api' : `https://mall.xvfin.com/api`
// 创建axios 实例
const lang = {
	'cn':'sc',
	'en':'en',
	'zh':'tc'
}

const service = axios.create({
	baseURL: url,
	timeout: 10000
})





// request 拦截器
service.interceptors.request.use(
	config => {
		// 这里可以自定义一些config 配置
		const token = store.state.isLogin;

		if(token) {
			config.headers.common['token'] = token
		};
		config.headers.common['lang'] = lang[store.state.language];
		
		return config
	},
	error => {
		//  这里处理一些请求出错的情况

		console.log(error)
		Promise.reject(error)
	}
)

// response 拦截器
service.interceptors.response.use(
	response => {
		const res = response.data
		// 这里处理一些response 正常放回时的逻辑

		// console.log(res);
		

		if(res.code != 0) {
			Toast(res.message);
		};

		if(res.code == 4001) {

			setTimeout(()=>{
				removeCookie('token');
				window.location.reload();
			},2000)
			
		};

		return res
	},
	error => {
		// 这里处理一些response 出错时的逻辑

		return Promise.reject(error)
	}
)
service.__proto__ = axios

export default service

