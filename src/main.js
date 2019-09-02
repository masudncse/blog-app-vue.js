import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import About from './components/AboutComponent'
import Contact from './components/ContactComponent'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/', component: App},
        {path: '/about', component: About},
        {path: '/contact', component: Contact}
    ]
});

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
