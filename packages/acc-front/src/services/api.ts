import axios from 'axios';

const baseURL = '/api/';
const version = 'v1';

export const api = axios.create({
  baseURL: `${baseURL}${version}/`,
  withCredentials: true,
  proxy: {
    host: 'localhost',
    port: 3333,
  },
});
