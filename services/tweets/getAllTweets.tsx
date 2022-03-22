import axios from '../../config/axios';
import { Tweet } from '../../types';

export const getAllTweets = () => {
  return axios.get('/tweets/posted').then((res) => {
    const data: Tweet[] = res.data;
    console.log(data);
    return data;
  });
};
