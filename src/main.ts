
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './app/App.vue'
import ElementPlus from 'element-plus'

import 'element-plus/dist/index.css'
import './main.css'


const app = createApp(App);


app.use(createPinia())

import router from './app/router'
app.use(router)
app.use(ElementPlus)


app.mount('#app')
