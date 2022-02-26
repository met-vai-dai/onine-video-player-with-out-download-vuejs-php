import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'

Vue.use(VueRouter);

import './Option/Vue_Plugins.js';

Vue.config.productionTip = false

import './Option/Vue_Mixin.js';
import './Option/Vue_Global_Variable.js';

new Vue({
    router,
    // vuetify,
    render: h => h(App)
}).$mount('#app');
