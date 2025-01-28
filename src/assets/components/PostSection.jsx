import React from 'react';
import { Link } from 'react-router';
import { FaThumbsUp, FaThumbsDown } from 'react-icons/fa';

const PostSection = ({ post }) => {
  if (!post) {
    return <div className="text-center py-8 text-gray-500">Loading post...</div>;
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
    _id,
  } = post;

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-shadow duration-200 max-w-2xl mx-auto">
      {/* Author Info Section */}
      <div className="flex items-start mb-4">
        <img
          src={authorImage || 'https://via.placeholder.com/50'}
          alt={authorName}
          className="w-14 h-14 rounded-full mr-4 border-2 border-white shadow-sm"
        />
        <div className="flex-1">
          <div className="flex items-baseline justify-between">
            <h3 className="text-lg font-semibold text-gray-900">{authorName}</h3>
            <span className="text-sm text-gray-500">
              {new Date(date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </span>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tag.map((singleTag, index) => (
              <span
                key={index}
                className="bg-indigo-100 text-indigo-800 px-2.5 py-0.5 rounded-full text-xs font-medium"
              >
                {singleTag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Post Content */}
      <div className="mt-4">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{postTitle}</h2>
        <p className="text-gray-600 leading-relaxed">{postDescription}</p>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-indigo-50 text-gray-600 hover:text-indigo-600 transition-colors">
            <FaThumbsUp className="w-5 h-5" />
            <span className="font-medium">{upVote}</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-50 hover:bg-red-50 text-gray-600 hover:text-red-600 transition-colors">
            <FaThumbsDown className="w-5 h-5" />
            <span className="font-medium">{downVote}</span>
          </button>
        </div>

        {/* View Post Link */}
        <Link
          to={`/post/${_id}`}
          className="flex items-center text-indigo-600 hover:text-indigo-800 font-medium transition-colors group"
        >
          View Details
          <svg
            className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default PostSection;