import { BE_URL } from '@/constant';
import { getCookie } from '@/utils/cookie';
import axios from 'axios';

export const AxiosInstance = axios.create({
  baseURL: BE_URL,
  timeout: 30000,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'ngrok-skip-browser-warning': 'true',
    Authorization: getCookie('access_token')
      ? `Bearer ${getCookie('access_token')}`
      : undefined,
  },
});

// request interceptor
AxiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const { response, config } = error;
    if (response) {
      return Promise.reject(response.data);
    } else return Promise.reject(error);
  }
);

export default AxiosInstance;
