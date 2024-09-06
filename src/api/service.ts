import axios, { AxiosInstance, AxiosRequestConfig, AxiosRequestHeaders, AxiosResponse, AxiosError } from "axios";
// import log from "@/utils/log"; 捕获

/**
 * INFO: 类型“(config: AxiosRequestConfig) => AxiosRequestConfig<any>”的参数不能赋给类型“(value: InternalAxiosRequestConfig<any>) => InternalAxiosRequestConfig<any> | Promise<InternalAxiosRequestConfig<any>>”的参数.
 */
interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const baseRequestConfig: AxiosRequestConfig = {
  baseURL: import.meta.env.VITE_APP_API_URL,
  timeout: 15000,
};

// Request interceptors
const service: AxiosInstance = axios.create(baseRequestConfig);

const err = (err: AxiosError): Promise<AxiosError> => {
  if (err.response?.status === 401 || err.response?.status === 504) {
    // INFO: do something, 可清除登录信息及重定向到登录页
  }

  return Promise.reject(err);
};

const handleError = (res: AxiosResponse<any, any>) => {
    // Print to console
    if (import.meta.env.MODE === "development") {
    //   log.capsule("Error", "UI");
    //   log.error(res);
    }
    return Promise.reject(res);
  };
  

service.interceptors.request.use((config: AdaptAxiosRequestConfig) => {
  // do something
  if (config.headers) {
    config.headers["Access-Token"] = "Access-Token";
  }

  return config;
}, err);

service.interceptors.response.use((res: AxiosResponse) => {
  // No code will be processed
  if (res.data.code === undefined) {
    return res.data;
  }

  switch (res.data.code) {
    case 0:
      return res.data.data;
    default:
      handleError(res);
      throw new Error();
  }
}, err);

export default service;
