import Vue from 'vue'
import detailAna from './detailAna.vue'
import '@/common/styles/reset.css'
import axios from '@/zqtjIndex/ajax'
import { Row, Col, Message } from "element-ui"
Vue.use(Row)
Vue.use(Col)
Vue.prototype.axios = axios;
Vue.prototype.$message = Message;
Vue.config.productionTip = false;
Vue.prototype.resetSetItem = (key, newVal) => {
    if (key === 'userInfo') {
        // 创建一个StorageEvent事件
        let newStorageEvent = document.createEvent('StorageEvent');
        const storage = {
            setItem: (k, val) => {
                localStorage.setItem(k, val);
                // 初始化创建的事件
                newStorageEvent.initStorageEvent('setItem', false, false, k, null, val, null, null);
                // 派发对象
                window.dispatchEvent(newStorageEvent);
            }
        };
        return storage.setItem(key, newVal);
    }
};
axios.get(`${process.env.BASE_URL}domain.json`)
    .then(res => {
        axios.defaults.baseURL = res.data.baseUrl;
        axios.defaults.rabbitMQUrl = res.data.rabbitMQUrl;
        new Vue({
            render: h => h(detailAna)
        }).$mount('#app')

    }).catch(err => {
        console.log(err);
    });