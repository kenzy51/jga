import { LocalStorageKey } from "@enums/localStorage";
import { LocalStorage } from "@localStorage/localStorage";
import axios, { AxiosRequestHeaders } from "axios";

const $api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

$api.interceptors.request.use(
  (config: any) => {
    if (typeof window !== "undefined") {
      const lang = LocalStorage.getItem(LocalStorageKey.Lang);
      const token = LocalStorage.getItem(LocalStorageKey.AccessToken);
      let parsedToken = "";

      if (token) {
        parsedToken = JSON.parse(token);
      }

      const headers: Partial<AxiosRequestHeaders> = {
        "accept-language": lang ?? "ru",
      };

      if (token) {
        headers.Authorization = `Bearer ${parsedToken}`;
      }

      return {
        ...config,
        headers: {
          ...headers,
          ...config.headers,
        },
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default $api;
