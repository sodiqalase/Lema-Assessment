import { APP_CONSTANT } from "@/utils/constants.util";

import axios, { AxiosRequestConfig } from "axios";

const contentType = "application/json";

const config: AxiosRequestConfig = {
    baseURL: APP_CONSTANT.baseURL,
    headers: {
        "Content-Type": contentType,
        Accept: contentType,
    },
};

export const ApiClient = axios.create(config);

export default ApiClient;
