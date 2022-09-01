import axios from "axios";
import { getCookie } from "cookies-next";

const baseURL = process.env.BACKEND_BASE_URL;

const config: any = {
    baseURL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json"
    }
};

// If auth-token is available, add it to the Axios API header
if (getCookie("auth-token")) {
    config.headers["Authorization"] = `Bearer ${getCookie("auth-token")}`;
}

// Create new axios instance
const $http = axios.create(config);

export default $http;
