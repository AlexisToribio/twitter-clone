import axios from '../../config/axios';
import { TweetsPostedResponse } from '../../types';

export const getAllTweets = () => {
  return axios.get<TweetsPostedResponse>('/tweets/posted').then((res) => {
    const { data } = res;
    console.log(data);
    return data;
  });
};
