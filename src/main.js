import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'




import VueTranslator from 'vue-translator'
import VeeValidate from 'vee-validate'
import NProgress from 'nprogress/nprogress'





import DefaultNavBar from './components/NavBar/DefaultNavBar'
import Footer from './components/Footer'

import Language from './language/index'
import tools from './utils/tools'


Vue.component('DefaultNavBar', DefaultNavBar)
Vue.component('Footer', Footer)


Vue.use(VeeValidate);
// Vue.use(VueInsProgressBar, {
// 	position: 'fixed',
// 	show: true,
// 	height: '2px'
// })
Vue.use(VueTranslator, {
	defaultLocale: 'en',
	locale: store.state.language,
	translations: Language,
	merge:_.merge
})



router.beforeEach((to, from, next) => {

	NProgress.start();

	if (to.meta.keepAlive) {
		store.commit('addIncludeList', to.name)
	}
	
	const token = store.state.isLogin;
	if(to.meta.login) {
		tools.lastLink = to.path;

		if(!token) {
			NProgress.done()
			next('/login')
		}else{
			next() 
		}
			// !token?next('/login'):next() 
	}else{
		if( (token && to.name == 'Login') || (token && to.name == 'SignUp')) {next('/index');return} //解决登陆后 禁止去登陆页和注册页
		next();
	}
	
})

router.afterEach((to, from) => {
    NProgress.done()
})

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
