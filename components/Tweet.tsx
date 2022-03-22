import React, { useState } from 'react';
import axios from '../config/axios';

type Props = {
  setData: React.Dispatch<
    React.SetStateAction<{
      author: string;
      content: string;
      _id: string;
      createdAt: string;
      updatedAt: string;
      __v: string;
    }>
  >;
  data: {
    author: string;
    content: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
  };
};

function Tweet({ data, setData }: Props) {
  // const [tweet, setTweet] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    // setTweet(e.target.value);
    setData({
      ...data,
      content: e.target.value,
    });
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axios
      .post('/tweets/new', { content: data.content })
      .then((res) => {
        setData({
          ...data,
          author: res.data.data.author,
          content: res.data.data.content,
          _id: res.data.data._id,
          createdAt: res.data.data.createdAt,
          updatedAt: res.data.data.updatedAt,
          __v: res.data.data.__v,
        });
        console.log(res);
      })
      .catch((er) => console.log(er));
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
          onChange={handleChange}
        ></textarea>
        <div className="flex justify-end">
          <button
            className="mt-2 rounded-3xl border-2 bg-twitter-blue-normal px-5 py-2 font-medium text-white"
            type="submit"
          >
            Tweet
          </button>
        </div>
      </form>
    </div>
  );
}

export default Tweet;
