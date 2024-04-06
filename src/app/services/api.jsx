import axios from "axios";

import { LOCAL_BASE_URL } from "../utils/constant";

const mainAPI = {
    getMessage: () => axios.get(`${LOCAL_BASE_URL}/messages`),
    getUsers: () => axios.get(`${LOCAL_BASE_URL}/users`),
    signIn: (password, email) => axios.post(`${LOCAL_BASE_URL}/login`, {
        email: email,
        password: password
    }),
    signUp: (user) => axios.post(`${LOCAL_BASE_URL}/register`, user),
};

export default mainAPI;