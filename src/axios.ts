import axios from 'axios';
import Cookies from 'js-cookie';

const defaultOptions = {
  baseURL: 'https://msf-server.azurewebsites.net',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
};

let fetch = axios.create(defaultOptions);

// Set the AUTH token for any request
fetch.interceptors.request.use(function (config) {
  const tokenCookie = Cookies.get('token');
  const token = localStorage.getItem('token') || tokenCookie;
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default fetch;