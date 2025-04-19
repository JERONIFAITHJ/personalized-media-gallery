import axios, { AxiosRequestConfig } from "axios";

export const sendApiCall = async (options?: AxiosRequestConfig) => {
  const url = "/api" + options?.url;
  const response = await axios({
    ...options,
    url,
    withCredentials: true,
  });

  console.log(response);

  return response.data;
};
