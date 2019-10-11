import Vue from 'vue';
import calledAna from './calledAna.vue'
import '@/common/styles/reset.css'
import '@/zqtjIndex/calledAna/assets/css/myStyle.scss'
import { Button, Message } from 'element-ui'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.component(CollapseTransition.name, CollapseTransition)
import axios from "axios"
// Button select  Row Col table
Vue.use(Button);
Vue.prototype.$message = Message;
Vue.prototype.axios = axios;
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
Vue.config.productionTip = false;
axios.get(`${process.env.BASE_URL}domain.json`)
    .then(res => {
        axios.defaults.baseURL = res.data.baseUrl;
        axios.defaults.mqURL = res.data.activeMQUrl;
        localStorage.setItem('mqUrl', res.data.activeMQUrl);
        new Vue({
            render: h => h(calledAna)
        }).$mount('#app')
    }).catch(err => {
        console.log(err);
    });