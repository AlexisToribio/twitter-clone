import React from 'react';

type Props = {
  data: {
    author: string;
    content: string;
    _id: string;
    createdAt: string;
    updatedAt: string;
    __v: string;
  };
};

function Post({ data }: Props) {
  return (
    <div>
      <div>
        <img
          src="https://cdn.anisearch.es/images/character/cover/full/68/68570.webp"
          alt="profile"
        />
        <p>{data.author}</p>
      </div>
      <div>{data.content}</div>
      <p>{data.createdAt}</p>
    </div>
  );
}

export default Post;
