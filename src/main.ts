import { createApp } from 'vue'
import App from './App.vue'
import store from '@/store'
import router from '@/router'
import directives from '@/directives'
import '@/styles/global.less'

const app = createApp(App)

app.use(store).use(router).use(directives).mount('#app')
