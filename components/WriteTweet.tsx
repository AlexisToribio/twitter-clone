import React, { useState } from 'react';
import { createTweet } from '../services/tweets/createTweet';
import { Tweet } from '../types';

type Props = {
  setData: React.Dispatch<React.SetStateAction<Tweet[]>>;
  setToggleShow?: React.Dispatch<React.SetStateAction<boolean>>;
};

function WriteTweet({ setData, setToggleShow = () => {} }: Props) {
  const [newTweet, setNewTweet] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTweet(e.target.value);
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const tweetAddToState = {
      content: newTweet,
    };

    createTweet(tweetAddToState).then(({ data }) => {
      console.log(data);
      setData((prevTweets) => [...prevTweets, data]);
      setNewTweet('');
      setToggleShow(false);
    });
  };

  return (
    <div className="flex h-44">
      <div className="w-10%">
        <div className="m-auto w-14 rounded-full">
          <img
            src="https://cdn.anisearch.es/images/character/cover/full/68/68570.webp"
            alt="profile"
            className="h-14 w-full rounded-full"
          />
        </div>
      </div>
      <form className="w-90% pl-2" onSubmit={handleSubmit}>
        <textarea
          placeholder="What's happening?"
          className="h-3/4 w-full resize-none border-b-2 py-4 text-lg outline-none"
          name="tweet"
          value={newTweet}
          onChange={handleChange}
        ></textarea>
        <div className="flex justify-end">
          <button className="mt-2 rounded-3xl border-2 bg-twitter-blue-normal px-5 py-2 font-medium text-white">
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default WriteTweet;
