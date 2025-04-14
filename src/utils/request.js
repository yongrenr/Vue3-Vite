import axios from 'axios'
 
// 创建一个 axios 实例
const request = axios.create({
    baseURL: import.meta.env.VITE_APP_BASE_API, // 这里设置为代理的路径
    timeout: 5000 // 请求超时时间
});
// 请求拦截器
request.interceptors.request.use(
    config => {
        return config;
    },
    error => {
        console.log(error); // 打印错误日志
        Promise.reject(error).then(r => {});
    }
);
 
// 响应拦截器
request.interceptors.response.use(
    response => {
        // 在这里可以做一些统一的响应处理逻辑
        return response.data;
    },
    error => {
        console.log(error); // 打印错误日志
        return Promise.reject(error);
    }
);
 
 
export default request