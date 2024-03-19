import axios from "axios";

import { LOCAL_BASE_URL } from "../utils/constant";

const messageAPI = {
    all: (page, limit = 10) =>
        axios.get(`${LOCAL_BASE_URL}/articles`),

    getMessage: () => axios.get(`${LOCAL_BASE_URL}/messages`),
};

export default messageAPI;