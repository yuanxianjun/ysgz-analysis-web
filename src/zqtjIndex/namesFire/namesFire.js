import Vue from 'vue';
import localPage from './namesFire.vue'
import '@/common/styles/reset.css'
import '@/zqtjIndex/namesFire/assets/css/myStyle.scss'
import 'element-ui/lib/theme-chalk/index.css';
import {
    Message,
    Table,
    TableColumn,
    Loading,
    Pagination
} from 'element-ui'
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition'
Vue.component(CollapseTransition.name, CollapseTransition)
import axios from "axios"
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Loading);
Vue.use(Pagination);
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

axios.defaults.baseURL = location.origin + "/ysgz/";
// axios.defaults.baseURL = "http://192.168.1.141:8918/ysgz";
// axios.defaults.baseURL = "http://192.168.94.161:8086/ysgz"; // axios.defaults.baseURL = "http://192.168.1.141:8918/ysgz";
new Vue({
    render: h => h(localPage)
}).$mount('#app')