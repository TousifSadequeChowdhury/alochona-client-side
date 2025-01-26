import { useEffect, useState } from 'react';
import axios from 'axios';
import PostSection from './PostSection';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  
  // Fetching posts using axios
  useEffect(() => {
    axios
      .get('http://localhost:3000/api/posts') // Make sure this URL matches your backend endpoint
      .then((response) => {
        setPosts(response.data.posts); // Store the posts in state
        console.log(posts)
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []); // The empty array ensures the effect runs once when the component mounts

  return (
    <div>
      <h1 className='font-bold mb-4'>Posts</h1>
      {/* Display posts */}
      <ul >
  {posts.map((post) => (
    <li key={post._id}>
      <PostSection post={post}></PostSection>
    </li>
  ))}
</ul>

    </div>
  );
}

export default Posts;
