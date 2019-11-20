import Vue from 'vue';
import index from './emergency.vue'
import '@/common/styles/reset.css'
import '@/zqtjIndex/emergency/assets/css/myStyle.scss'
import 'element-ui/lib/theme-chalk/index.css';
import { Button, Message, Table, TableColumn, Row, Col, DatePicker, Cascader, Loading } from 'element-ui'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.component(CollapseTransition.name, CollapseTransition)
import axios from "axios"
// Button select  Row Col table
Vue.use(Button);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Col);
Vue.use(DatePicker);
Vue.use(Cascader);
Vue.use(Loading);
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
            render: h => h(index)
        }).$mount('#app')
    }).catch(err => {
        console.log(err);
    });