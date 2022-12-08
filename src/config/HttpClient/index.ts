const axios = require("axios");

const axiosInstance = axios.create({
  timeout: 500,
});

const baseURL = "https://challenge.surfe.com";

const httpClient = () => {
  axiosInstance.interceptors.request.use((config: any) => ({
    ...config,
    baseURL,
  }));

  return axiosInstance;
};

export default httpClient;
