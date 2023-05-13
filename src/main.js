import { createApp } from 'vue'

import './assets/styles/main.scss'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify.js'
import store from './store'

const app = createApp(App)

app.use(router)
app.use(vuetify)
app.use(store)

app.mount('#app')
