import axios from 'axios';

const SEMService = axios.create({
  baseURL: process.env.VUE_APP_BACK_URL,
});

export default SEMService;
