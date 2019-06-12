import Vue from 'vue'
import App from './app.vue'
import Language from './i18n/index'

Vue.use(VueTranslator, {
	defaultLocale: 'en',
	locale: 'en',
	translations: Language
})

new Vue({
	el: '#app',
	render: h => h(App)
})
