// axiosInterceptorInstance.js
import { message } from 'antd';
import { LOCAL_BASE_URL } from "../utils/constant";
import axios from 'axios';

const axiosInterceptorInstance = axios.create({
  baseURL: LOCAL_BASE_URL, // Replace with your API base URL
});

// Request interceptor
axiosInterceptorInstance.interceptors.request.use(
  (config) => {
    if(config.url.includes("login"))
    message.open({
      type: 'loading',
      content: 'Wait for a moment....'
    })
    
    // Modify the request config here (add headers, authentication tokens)
    const accessToken = localStorage.getItem("token");

    // If token is present, add it to request's Authorization Header
    if (accessToken) {
      if (config.headers) config.headers.token = accessToken;
    }
    return config;
  },
  (error) => {
    // Handle request errors here
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInterceptorInstance.interceptors.response.use(
  (response) => {
    if(response.request.responseURL.includes("login"))
    message.open({
      type: 'success',
      content: 'Login successfully',

    })
    // Modify the response data here
    return response;
  },
  (err) => {
    if(err.request.responseURL.includes("login"))
    message.open({
      type: 'error',
      content: err.response.data.error || "There is an error"
    })
    // Handle response errors here
    return Promise.reject(err);
  }
);

export default axiosInterceptorInstance;