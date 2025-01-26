import React from 'react';
import { Link } from 'react-router';  // Use 'react-router-dom' instead of 'react-router'

const PostSection = ({ post }) => {
  if (!post) {
    return <div>Loading...</div>;
  }

  const {
    authorImage,
    authorName,
    postTitle,
    postDescription,
    tag,
    upVote,
    downVote,
    date,
    _id, // Ensure _id is destructured here
  } = post;

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-6 mb-6 shadow-md max-w-full mx-10">
      <div className="flex items-center mb-4">
        <img
          src={authorImage || 'https://via.placeholder.com/50'}
          alt={authorName}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-lg font-semibold">{authorName}</h3>
          <div className="flex flex-wrap mt-2">
            {tag.map((singleTag, index) => (
              <span
                key={index}
                className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm mr-2 mb-2"
              >
                {singleTag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <h2 className="text-xl font-bold text-gray-800 mt-4">{postTitle}</h2>
      <p>{date}</p>
      <p className="text-gray-600 mt-2">{postDescription}</p>

      <div className="mt-4 flex">
        <button className="bg-green-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-600">
          {upVote} 👍
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">
          {downVote} 👎
        </button>
        <Link to={`/post/${_id}`}>View Post Details</Link>
      </div>
    </div>
  );
};

export default PostSection;
