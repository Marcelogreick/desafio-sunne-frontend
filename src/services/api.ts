import axios from 'axios';
import config from '../configs/env.json';

export const api = axios.create({
  baseURL: config.host_api
});

export default api;
