import { Tweet as TweetType } from '../types';

type Props = {
  data: TweetType[];
};

function Tweet({ data }: Props) {
  return (
    <div>
      {data.map((tweet) => (
        <div key={tweet.id}>
          <div>{tweet.content}</div>
          <p>{tweet.createdAt}</p>
        </div>
      ))}
    </div>
  );
}

export default Tweet;
