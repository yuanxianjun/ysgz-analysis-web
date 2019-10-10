import axios from 'axios';
let CancelToken = axios.CancelToken;
let cancel;

// axios.defaults.baseURL = 'http://192.168.1.22:8888/ecp';
// axios.defaults.rabbitMQUrl = 'ws://192.168.1.25:61614/stomp';
// axios.defaults.headers.common['Authorization'] = 'double-click-666';
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//添加一个请求拦截器
axios.interceptors.request.use(function (config) {
    // Do something before request is sent
    // cancel('Operation canceled by the user.');
    if('get' === config.method){
        config.params = {
            // _t: Date.parse(new Date()) / 1000,
            ...config.params
        }
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// // 添加一个响应拦截器
// axios.interceptors.response.use(function (response) {
//     // Do something with response data
//     return response;
// }, function (error) {
//     // Do something with response error
//     return Promise.reject(error);
// });

// 一个请求的例子
// axios.get('/example/1', {
//     cancelToken: new CancelToken(function executor(c) {
//         // An executor function receives a cancel function as a parameter
//         cancel = c;
//     })
// }).then(res => {
//     console.log(res);
// }).catch(error => {
//     if (axios.isCancel(error)) {
//         console.log('Request canceled', error.message);
//     }
// });

export default axios
