import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitter-clone-pts.herokuapp.com',
});

export default instance;
