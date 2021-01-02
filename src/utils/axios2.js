import axios from 'axios';
import axiosRetry from "axios-retry";
//import {ConfigContext} from 'security/configContext'
//import useSecurity from '/useSecurity'

const axiosInstance = axios.create({
    // baseURL: 'http://localhost:3000',
    headers: {'Accept': 'application/json'},
    paramsSerializer: params => {
        let result = Object.keys(params).map(key => `${key}=${encodeURIComponent(params[key])}`).join('&');
        return result;
    }
})
axiosInstance.interceptors.request.use(function (config) {
    config.baseURL = "";
    //config.headers['Authorization']='Bearer '+config.accessToken;
    return config;
}, function (error) {
    return Promise.reject(error);
});
axiosRetry(axiosInstance, {retry: 2, shouldResetTimeout: true});
const useAxios = () => {
    let [config] = "";
    //  let [config]=useContext(ConfigContext);
    // let {isAuthenticated, getAccessToken}=useSecurity();
    function get(config) {
        config.method = 'get';
        return request(config);
    }

    function post(config) {
        config.method = 'post';
        return request(config);
    }

    function put(config) {
        config.method = 'put';
        return request(config);
    }

    function deleteReq(config) {
        config.method = 'delete';
        return request(config);
    }

    async function request(params) {
        let callParams = {...params, ...config};

        try {
            const res = await axiosInstance(...config);
            return res.data;
        } catch (e) {
            console.log("api call error", e);
            Promise.reject(e);
        }
    }

    return {
        get, post, put, deleteReq
    }
}
export default useAxios;