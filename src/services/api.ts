import axios, { AxiosInstance } from 'axios';

const BACKEND_URL = 'https://pognali-api-pg1n.onrender.com/api';
const REQUEST_TIMEOUT = 50000;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return api;
};
