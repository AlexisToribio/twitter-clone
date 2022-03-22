import React, { useEffect, useState } from 'react';
import HomeLayout from '../components/HomeLayout';
import WriteTweet from '../components/WriteTweet';
import Tweet from '../components/Tweet';
import { getAllTweets } from '../services/tweets/getAllTweets';
import { Tweet as TweetType } from '../types';

function home() {
  const [data, setData] = useState<TweetType[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllTweets().then((tweets) => {
      setData(tweets);
      setLoading(false);
    });
  }, []);

  return (
    <HomeLayout setData={setData}>
      <div>
        <h1 className="mt-4 mb-5 w-full text-xl font-bold">Home</h1>
        <WriteTweet setData={setData} />
        {loading ? 'Cargando...' : <Tweet data={data} />}
      </div>
    </HomeLayout>
  );
}

export default home;
