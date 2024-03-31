import axios from "axios";

import { LOCAL_BASE_URL } from "../utils/constant";

const messageAPI = {
    getMessage: () => axios.get(`${LOCAL_BASE_URL}/messages`),
    signIn: (password, email) => axios.post(`${LOCAL_BASE_URL}/login`, {
        email: email,
        password: password
    }),
    signUp: (user) => axios.post(`${LOCAL_BASE_URL}/register`, user),
};

export default messageAPI;