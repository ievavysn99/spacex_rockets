import axios from 'axios';
import { IRocket } from './types';

const httpClient = axios.create({
  baseURL: 'https://api.spacexdata.com/v3/rockets',
  timeout: 1000,
});

httpClient.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);

export default httpClient;

class ApiInstance {
  public async getRockets(): Promise<IRocket[]> {
    const rockets: IRocket[] = await httpClient.get('/');

    return rockets;
  }
}

export const API = new ApiInstance();
