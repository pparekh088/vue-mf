import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


function mount(el){
    createApp(App).use(store).use(router).mount(el)
}

if(process.env.NODE_ENV === 'development'){
    mount('#app')
}

export { mount }