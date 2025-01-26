import React, { useContext, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider';

// Define available tags
const tags = [
  { value: 'Technology', label: 'Technology' },
  { value: 'Science', label: 'Science' },
  { value: 'Health', label: 'Health' },
  { value: 'Lifestyle', label: 'Lifestyle' },
  { value: 'Education', label: 'Education' },
  { value: 'Programming', label: 'Programming' },
  { value: 'Entertainment', label: 'Entertainment' },
  { value: 'Sports', label: 'Sports' },
  { value: 'Travel', label: 'Travel' },
  { value: 'Food', label: 'Food' },
  { value: 'Finance', label: 'Finance' },
  { value: 'Startups', label: 'Startups' },
  { value: 'Environment', label: 'Environment' },
  { value: 'Politics', label: 'Politics' },
  { value: 'Business', label: 'Business' },
  { value: 'Art', label: 'Art' },
  { value: 'Literature', label: 'Literature' },
  { value: 'Gaming', label: 'Gaming' },
  { value: 'Photography', label: 'Photography' },
  { value: 'History', label: 'History' },
  { value: 'Culture', label: 'Culture' },
  { value: 'Movies', label: 'Movies' },
  { value: 'Fashion', label: 'Fashion' },
  { value: 'Music', label: 'Music' },
  { value: 'Books', label: 'Books' },
  { value: 'Space', label: 'Space' },
  { value: 'AI', label: 'AI' },
  { value: 'Machine Learning', label: 'Machine Learning' },
  { value: 'Web Development', label: 'Web Development' },
  { value: 'Productivity', label: 'Productivity' },
];

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const [postTitle, setPostTitle] = useState('');
  const [postDescription, setPostDescription] = useState('');
  const [tagsSelected, setTagsSelected] = useState([]);
  const [upVote, setUpVote] = useState(0);
  const [downVote, setDownVote] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Check if user is logged in and contains required fields
    if (!user || !user.photoURL || !user.displayName || !user.email) {
      console.error('User data is missing');
      alert('User data is missing. Please log in properly.');
      return;
    }
  
    const authorImage = user.photoURL;
    const authorName = user.displayName;
    const authorEmail = user.email;
  
    if (tagsSelected.length === 0) {
      console.error('Tag is required');
      alert('Please select at least one tag.');
      return;
    }
  
    const postData = {
      authorImage,
      authorName,
      authorEmail,
      postTitle,
      postDescription,
      tag: tagsSelected.map(tag => tag.value), 
      upVote,
      downVote,
    };
  
    // Make API call
    axios.post('http://localhost:3000/api/posts', postData)
      .then(response => {
        console.log(response.data); // Handle the response
      })
      .catch(error => {
        console.error('Error:', error); // Handle errors
      });
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Post Title */}
        <div>
          <label htmlFor="postTitle" className="block text-sm font-medium text-gray-600">
            Post Title
          </label>
          <input
            type="text"
            id="postTitle"
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
            required
            className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Post Description */}
        <div>
          <label htmlFor="postDescription" className="block text-sm font-medium text-gray-600">
            Post Description
          </label>
          <textarea
            id="postDescription"
            value={postDescription}
            onChange={(e) => setPostDescription(e.target.value)}
            required
            className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded-md w-full"
          />
        </div>

        {/* Tag Selection */}
        <div>
          <label htmlFor="tags" className="block text-sm font-medium text-gray-600">
            Tags
          </label>
          <Select
            isMulti
            options={tags}
            value={tagsSelected}
            onChange={setTagsSelected}
            placeholder="Select tags"
            className="mt-2"
          />
        </div>

        {/* UpVote and DownVote */}
        <div className="flex space-x-6">
          <div className="w-1/2">
            <label htmlFor="upVote" className="block text-sm font-medium text-gray-600">
              UpVote
            </label>
            <input
              type="number"
              id="upVote"
              value={upVote}
              onChange={(e) => setUpVote(Number(e.target.value))}
              min="0"
              className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded-md w-full"
            />
          </div>

          <div className="w-1/2">
            <label htmlFor="downVote" className="block text-sm font-medium text-gray-600">
              DownVote
            </label>
            <input
              type="number"
              id="downVote"
              value={downVote}
              onChange={(e) => setDownVote(Number(e.target.value))}
              min="0"
              className="mt-2 p-2 bg-gray-50 border border-gray-300 rounded-md w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          >
            Submit Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
