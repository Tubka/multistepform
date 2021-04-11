import axios from 'axios';

// const instance = axios.create({
//   baseURL: 'https://msf-server.azurewebsites.net',
//   timeout: 5000,
//   headers: {
//     Authorization : `Bearer ${localStorage.getItem('token')}`
//   }
// });

const defaultOptions = {
  baseURL: 'https://msf-server.azurewebsites.net',
  headers: {
    'Content-Type': 'application/json',
  },
};

let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

export default instance;