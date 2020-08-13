import Vue from 'vue'
import Router from 'vue-router'

import * as VeeValidate from 'vee-validate';

import Hello from '@/components/HelloWorld'


Vue.use(VeeValidate);
Vue.use(Router);


export default new Router({
    routes: [{
        path: '/home',
        name: 'Hello',
        component: Hello
    }]
})