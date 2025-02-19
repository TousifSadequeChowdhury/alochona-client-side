import { useEffect, useState } from 'react';
import axios from 'axios';
import PostSection from './PostSection';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://alochona-server.vercel.app/api/posts')
      .then((response) => {
        const allPosts = response.data.posts;
        setPosts(allPosts);
        setFilteredPosts(allPosts);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  // Handle tag search functionality
  const handleSearch = (event) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    
    const filtered = posts.filter(post => 
      post.tag.some(tag => tag.toLowerCase().includes(term))
    );
    
    setFilteredPosts(filtered);
  };

  return (
    <div className="container mx-auto px-4 flex flex-col justify-center items-center min-h-screen mt-2">     
      <div className="flex flex-col md:flex-row justify-center items-center space-x-4 space-y-4 md:space-y-0 w-full">
        {/* Heading */}
        <h1 className="text-2xl font-semibold text-gray-900">Posts</h1>

        {/* Search Bar */}
        <div className="relative w-80">
          <input
            type="text"
            placeholder="Search posts by tags..."
            value={searchTerm}
            onChange={handleSearch}
            className="w-full px-4 py-2 pl-10 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
          />
          {/* Search Icon */}
          <svg
            className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>

      {/* Display posts */}
      <ul className="space-y-6 mt-8 w-full max-w-xl">
        {filteredPosts.length === 0 ? (
          <div className="text-center my-8 text-gray-500">
            No posts found with matching tags
          </div>
        ) : (
          filteredPosts.map((post) => (
            <li key={post._id}>
              <PostSection post={post} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Posts;
