import axios from 'axios';
import axiosRetry from "axios-retry";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    url:(url={})=>{return url},
    headers: (headers={})=>{return headers},
    paramsSerializer: (params={}) => {
        let result = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
        return result;
    }
});

axiosRetry(axiosInstance, {
    retryDelay: (retryCount) => {
        return retryCount * 1000;
    },retryCondition:(error) => {return true;}
});

axiosInstance.interceptors.request.use(function (config) {
    // config.baseURL = "";
    config.headers['Authorization']='Bearer Mayank'//+config.accessToken;
    config.headers['Access-Control-Max-Age']=8640000;
    config.headers['max-age']=8640000;

    return config;
}, function (error) {
    return Promise.reject(error);
});

class Axios1 {
    get(config) {
        config.method = 'get';
        return this.request(config);
    }

    post(config) {
        config.method = 'post';
        return this.request(config);
    }

    put(config) {
        config.method = 'put';
        return this.request(config);
    }

    deleteReq(config) {
        config.method = 'delete';
        return this.request(config);
    }

    async request(config) {
        try {
            config.headers={...config.headers,'Accept': 'application/json', 'Content-Type': 'application/json','test':'test'};
            console.log("config: ",config);

            const res = await axiosInstance(config);
            return res.data;
        } catch (e) {
            console.log("api call error", e);
        }
    }
}

export default new Axios1();