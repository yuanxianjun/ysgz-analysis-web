import Vue from 'vue'
import zqtjIndex from './zqtjIndex.vue'
import '@/common/styles/reset.css'
import ElementUI from 'element-ui'
import '@/common/styles/element-variables.scss'
import './assets/style/style.css'
import axios from '@/zqtjIndex/ajax'
import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)
Vue.use(ElementUI);
Vue.prototype.axios = axios;
Vue.config.productionTip = false;



axios.get(`${process.env.BASE_URL}domain.json`)
    .then(res => {
        axios.defaults.baseURL = res.data.baseUrl;
        axios.defaults.rabbitMQUrl = res.data.rabbitMQUrl;
        new Vue({
            render: h => h(zqtjIndex)
        }).$mount('#app')

    }).catch(err => {
        console.log(err);
    });