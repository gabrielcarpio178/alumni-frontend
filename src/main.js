import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './route/route.js'

const globalVariable = {
    data(){
        return {
            PORT: 'https://alumnibackend-6i5fla0z.b4a.run',
            isLogin: localStorage.getItem('token')!==null
        }
    }
}

const app = createApp(App);
app.mixin(globalVariable);
app.use(router).mount('#app')
