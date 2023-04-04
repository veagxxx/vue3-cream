import axios from '@/utils/axios';
export const testApi = (params: any) => {
  return axios.post('/users', params);
}