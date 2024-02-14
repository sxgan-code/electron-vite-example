// src\utils\http.ts 参考于https://gitee.com/youlaiorg/vue3-element-admin/blob/master/src/utils/request.ts
import axios, {AxiosResponse, InternalAxiosRequestConfig} from 'axios';
// useUserStore用于用户权限验证的全局token状态管理
// import { useUserStoreHook } from '@/store/userStore.ts';

// 创建 axios 实例
const service = axios.create({
    // baseURL: import.meta.env.VITE_APP_BASE_API,
    // 这里使用在线mock数据,根据实际情况配置
    baseURL: import.meta.env.VITE_APP_ENV === 'development' ? import.meta.env.VITE_MOCK_BASE_URL : import.meta.env.VITE_BASE_URL,
    timeout: 50000,
    headers: {'Content-Type': 'application/json;charset=utf-8'}
});

// 请求拦截器
service.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        // 通过配置每次请求头添加token来自动权限校验
        // const userStore = useUserStoreHook();
        // if (userStore.token) {
        //     config.headers.Authorization = userStore.token;
        // }
        return config;
    },
    (error: any) => {
        return Promise.reject(error);
    }
);

// 响应拦截器
service.interceptors.response.use(
    (response: AxiosResponse) => {
        console.log("http.ts response", response)
        const {code, msg} = response.data;
        if (code === '000') {
            return response.data;
        }
        // 响应数据为二进制流处理(Excel导出)
        if (response.data instanceof ArrayBuffer) {
            return response;
        }

        ElMessage.error(msg || '系统出错');
        return Promise.reject(new Error(msg || 'Error'));
    },
    (error: any) => {
        if (error.response.data) {
            const {code, msg} = error.response.data;
            // token 过期,重新登录
            if (code === 'A0230') {
                ElMessageBox.confirm('当前页面已失效，请重新登录', '提示', {
                    confirmButtonText: '确定',
                    type: 'warning'
                }).then(() => {
                    localStorage.clear();
                    window.location.href = '/';
                });
            } else {
                ElMessage.error(msg || '系统出错');
            }
        }
        return Promise.reject(error.message);
    }
);
// 导出 axios 实例
export default service;