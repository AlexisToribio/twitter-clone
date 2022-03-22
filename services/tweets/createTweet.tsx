import axios from '../../config/axios';

type Props = {
  content: string;
};

export const createTweet = async ({ content }: Props) => {
  const { data } = await axios.post('/tweets/new', { content });
  return data;
};
