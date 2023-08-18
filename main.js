import App from './App'
import * as Pinia from 'pinia'
import lazyPlugin from 'vue3-lazy'

import {
	createSSRApp
} from 'vue'

export function createApp() {
	const app = createSSRApp(App)
	app.use(Pinia.createPinia())
	// #ifdef H5
	lazyPlugin.install(app, {
		loading: '/static/images/common/placeholder.png',
	})
	// #endif
	return {
		app,
		Pinia
	}
}