import axios from "axios";
import { LOCAL_BASE_URL } from "../utils/constant";
import axiosInstance from './axiosInterceptorInstance';

// axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');

const mainAPI = {
    getMessage: (contactId) => axiosInstance.get(`${LOCAL_BASE_URL}/messages/${contactId}`),
    getUsers: () => axiosInstance.get(`${LOCAL_BASE_URL}/users`),
    addMembers: (members) => axiosInstance.post(`${LOCAL_BASE_URL}/members`, members),
    getNewUsers: () => axiosInstance.get(`${LOCAL_BASE_URL}/explore-users`),
    signIn: (password, email) => axiosInstance.post(`${LOCAL_BASE_URL}/login`, {
        email: email,
        password: password
    }),
    signUp: (user) => axiosInstance.post(`${LOCAL_BASE_URL}/register`, user),
};

export default mainAPI;