

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
//测试接口
// import { getCategory } from './apis/testAPI'
// getCategory().then(res=>{
//     console.log(res)
// })
const app = createApp(App)
const pinia=createPinia()
//注册持久化插件
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
// app.use(createPinia())
app.use(router)

app.mount('#app')
