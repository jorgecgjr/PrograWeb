import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@popperjs/core'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './assets/style.css'

const app = createApp(App)

app.use(router)
app.use(store)
app.mount('#app')
