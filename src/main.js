import Vue from 'vue'
import store from './store';
import router from './router';

import App from './App.vue'

require('./assets/css/bootstrap.css')
require('./assets/css/blog.css')

require('./lib/jquery-2.0.3.min')

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
