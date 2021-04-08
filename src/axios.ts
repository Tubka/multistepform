import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://msf-server.azurewebsites.net',

});

export default instance;