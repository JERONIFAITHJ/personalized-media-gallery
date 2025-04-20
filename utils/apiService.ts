import axios, { AxiosRequestConfig } from "axios";

export const sendApiCall = async (options?: AxiosRequestConfig) => {
  try {
    const url = "/api" + options?.url;
    const response = await axios({
      ...options,
      url,
      withCredentials: true,
    });
    return response.data;
  } catch (e) {
    if (e?.status === 401) {
      if (window.location.pathname !== "/") window.location.replace("/");
    }
    throw e;
  }
};
