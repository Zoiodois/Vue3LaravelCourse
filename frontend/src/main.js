import './assets/main.css';
import store from './store/store';

// import { createApp } from 'vue'

import App from './App.vue'

import router from './router'
import { createApp } from 'vue/dist/vue.esm-bundler.js'

const app = createApp(App)

app.component('teste' , {
    template: `<h2>Teste</h2>`
})




app.use(router)
app.use(store)

app.mount('#app')


//Exemplo 1 - Criação de componentes Globais
// const app = createApp({
//     template:`
//     <header-app></header-app>
//     <footer-app></footer-app>
//     `
// })

// app.component('header-app', {
//     template:'<h2>Header</h2>'
// })
// app.component('footer-app', {
//     template:'<h2>Footer</h2>'
// })
//Fim do Exemplo 1
