import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://twitter-clone-pts.herokuapp.com',
  // headers: {
  //   Authorization:
  //     localStorage && localStorage.getItem('auth-token')
  //       ? `Bearer ${localStorage.getItem('auth-token')}`
  //       : '',
  // },
});

instance.interceptors.request.use(
  function (config) {
    const token = window.localStorage.getItem('auth-token');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;
