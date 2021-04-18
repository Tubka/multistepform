import axios from 'axios';

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
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default fetch;