import axios from '../config/axios';
import { Tweet } from '../types';

type Props = {
  content: string;
};

export const createTweet = async ({ content }: Props) => {
  const data = await axios.post('/tweets/new', { content });
  console.log(data);
  return data;
};

export const getAllTweets = () => {
  return axios.get('/tweets/posted').then((res) => {
    const data: Tweet[] = res.data;
    console.log(data);
    return data;
  });
};
