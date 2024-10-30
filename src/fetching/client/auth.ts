import { AxiosInstance } from './config';

export const login = async (data: any) => {
  return await AxiosInstance.post('/user/login', data);
};
