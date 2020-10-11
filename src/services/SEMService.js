import axios from 'axios';

const SEMService = axios.create({
  baseURL: 'http://localhost:5000/',
});

export default SEMService;
