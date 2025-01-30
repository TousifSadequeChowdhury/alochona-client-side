import React, { useContext, useState } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider';
import { FaRobot } from 'react-icons/fa'; 
import { ClipLoader } from 'react-spinners'; 
import { toast, ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

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
  const [loading, setLoading] = useState(false); // State for loading

  const handleGenerate = async () => {
    if (tagsSelected.length === 0) {
      alert('Please select at least one tag.');
      return;
    }

    setLoading(true); // Start loading

    try {
      const response = await axios.get('http://localhost:3000/testai', {
        params: { prompt: tagsSelected.map(tag => tag.value).join(", ") },
      });
      setPostTitle(response.data.title);
      setPostDescription(response.data.description);
    } catch (error) {
      console.error('Error generating content:', error);
      alert('Failed to generate content.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!user || !user.photoURL || !user.displayName || !user.email) {
      console.error('User data is missing');
      alert('User data is missing. Please log in properly.');
      return;
    }
  
    if (tagsSelected.length === 0) {
      console.error('Tag is required');
      alert('Please select at least one tag.');
      return;
    }
  
    const postData = {
      authorImage: user.photoURL,
      authorName: user.displayName,
      authorEmail: user.email,
      postTitle,
      postDescription,
      tag: tagsSelected.map(tag => tag.value), 
      upVote,
      downVote,
    };
  
 
    axios.post('https://alochona-server.vercel.app/api/posts', postData)
      .then(response => {
        console.log(response.data);
        toast.success('Post submitted successfully!'); // Success toast
      })
      .catch(error => {
        console.error('Error:', error);
        toast.error('Failed to submit post. Please try again.'); // Error toast
      }).finally(() => {
        setLoading(false); // Stop loading
      });
  };
  
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-7" >
      <h2 className="text-2xl font-semibold text-gray-700 mb-6">Add a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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
        <button
          type="button"
          onClick={handleGenerate}
          disabled={loading} 
          className="w-full py-2 px-4 bg-gradient-to-r from-indigo-700 to-purple-600 text-white font-semibold rounded-md hover:from-blue-600 hover:to-purple-700 transition duration-200 flex items-center justify-center"
        >
          {loading ? (
            <>
              <ClipLoader color="#ffffff" size={20} className="mr-2" /> {/* Spinner */}
              Generating...
            </>
          ) : (
            <>
              <FaRobot className="mr-2" /> 
              Generate Post
            </>
          )}
        </button>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-indigo-800 text-white font-semibold rounded-md hover:bg-indigo-600 transition duration-200"
        >
          Submit Post
        </button>
      </form>
      <ToastContainer /> {/* Toast container */}
    </div>
  );
};

export default AddPost;