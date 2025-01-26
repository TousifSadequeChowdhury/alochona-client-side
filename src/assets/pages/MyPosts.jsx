import React, { useState } from 'react';

const MyPosts = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'My First Post',
      upVotes: 10,
      downVotes: 2,
    },
    {
      id: 2,
      title: 'React is Awesome',
      upVotes: 20,
      downVotes: 1,
    },
    {
      id: 3,
      title: 'Learning Tailwind CSS',
      upVotes: 15,
      downVotes: 3,
    },
  ]);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const handleComment = (id) => {
    console.log('Commenting on post with ID:', id);
    // Implement the commenting functionality here
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">My Posts</h2>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left font-medium text-gray-600">Post Title</th>
            <th className="px-4 py-2 text-left font-medium text-gray-600">Votes</th>
            <th className="px-4 py-2 text-center font-medium text-gray-600">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border-b">
              <td className="px-4 py-2 text-gray-700">{post.title}</td>
              <td className="px-4 py-2 text-gray-700">
                {post.upVotes - post.downVotes} ({post.upVotes} UpVotes, {post.downVotes} DownVotes)
              </td>
              <td className="px-4 py-2 text-center">
                <button
                  onClick={() => handleComment(post.id)}
                  className="mr-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                >
                  Comment
                </button>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="px-4 py-2 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-200"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyPosts;
