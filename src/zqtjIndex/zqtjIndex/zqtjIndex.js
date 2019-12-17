import Vue from 'vue'
import localPage from './zqtjIndex.vue'
import '@/common/styles/reset.scss'
import './assets/style/style.css'
import axios from '@/zqtjIndex/ajax'
import {
    Row,
    Col,
    Message
} from "element-ui"
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
axios.defaults.baseURL = location.origin + "/ysgz/"; // axios.defaults.baseURL = "http://192.168.1.141:8918/ysgz";
// // axios.defaults.baseURL = "http://192.168.94.161:8086/ysgz";
new Vue({
    render: h => h(localPage)
}).$mount('#app')