import Vue from 'vue'
import zqtjIndex from './zqtjIndex.vue'
import '@/common/styles/reset.css'
import './assets/style/style.css'
import axios from '@/zqtjIndex/ajax'

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