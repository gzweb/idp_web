import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base:'/html',
	routes: [
		{
			path: '/',
			name: 'Index',
			component: Index
		},
		{
			path: '/home',
			name: 'Home',
			component: () => import('./views/Home.vue'),
			meta:{
				login:true,
				keepAlive:true
			}
		},
		{
			path: '/about',
			name: 'About',
			component: () => import('./views/About.vue')
		},
		{
			path: '/score_application',
			name: 'ScoreApplication',
			component: () => import('./views/ScoreApplication.vue'),
			meta:{
				login:true
			}
		},
		{
			path: '/test_date_application',
			name: 'TestDateApplication',
			component: () => import('./views/TestDateApplication.vue'),
			meta:{
				login:true
			}
		},
		{
			path: '/refund_application',
			name: 'RefundApplication',
			component: () => import('./views/RefundApplication.vue'),
			meta:{
				login:true
			}
		},
		{
			path: '/additional_test_application',
			name: 'AdditionalTestApplication',
			component: () => import('./views/AdditionalTestApplication.vue'),
			meta:{
				login:true
			}
		},
		{
			path: '/post_score_application',
			name: 'PostScoreApplication',
			component: () => import('./views/PostScoreApplication.vue'),
			meta:{
				login:true
			}
		},
		{
			path: '/login',
			name: 'Login',
			component: () => import('./views/Login.vue')
		},
		{
			path: '/email_login',
			name: 'EmailLogin',
			component: () => import('./views/EmailLogin.vue')
		},
		{
			path: '/sign_up',
			name: 'SignUp',
			component: () => import('./views/SignUp.vue')
		},
		{
			path: '/forget_password',
			name: 'ForgetPassword',
			component: () => import('./views/ForgetPassword.vue')
		},
		{
			path: '/price_table/:id',
			name: 'PriceTable',
			component: () => import('./views/PriceTable.vue'),
			meta:{
				login:true
			}
		},
		{
			path: '/contact_us',
			name: 'ContactUs',
			component: () => import('./views/ContactUs.vue')
		},
		{
			path: '/table/:id',
			name: 'Table',
			component: () => import('./views/Table.vue'),
			meta:{
				login:true
			}
		},
		{
			path: '/faq',
			name: 'FAQ',
			component: () => import('./views/FAQ.vue')
		},
		{
			path: '/reset_password/:id',
			name: 'ResetPassword',
			component: () => import('./views/ResetPassword.vue')
		}
	],
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition || typeof savedPosition === 'undefined') {
			// 只处理设置了路由元信息的组件
			if (savedPosition) {
				return savedPosition
			}
		} else {
			return {
				x: 0,
				y: 0
			}
		}
	}
})
