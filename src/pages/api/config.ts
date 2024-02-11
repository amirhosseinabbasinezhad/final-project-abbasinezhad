import Axios from 'axios';

import { getToken, removeToken } from './token';

export const BaseUrl = 'https://shop-api-backend-main.vercel.app/api/';
export const ImageUrl = 'https://shop-api-backend-main.vercel.app/api/';
export const apiAgent = Axios.create({ baseURL: BaseUrl });

apiAgent.interceptors.request.use(
  (config) => {
    const token = getToken();
    console.log("token",token);
    
    if (token && config.headers && !config.headers?.Authorization) {
      console.log("inspector work");
      
      config.headers.Token = `Bearer ${token}`;

    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

apiAgent.interceptors.response.use(
  (config) => config,
  (error) => {
    if (error.response.status === 401) {
      removeToken();
    }

    return Promise.reject(error);
  }
);
