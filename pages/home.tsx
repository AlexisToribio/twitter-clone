import React, { useState } from 'react';
import Layout from '../components/Layout';
import Tweet from '../components/Tweet';
import Post from '../components/Post';

function home() {
  const [data, setData] = useState({
    author: '',
    content: '',
    _id: '',
    createdAt: '',
    updatedAt: '',
    __v: '',
  });

  return (
    <Layout>
      <div>
        <h1 className="mt-4 mb-5 w-full text-xl font-bold">Home</h1>
        <Tweet data={data} setData={setData} />
        <Post data={data} />
      </div>
    </Layout>
  );
}

export default home;
