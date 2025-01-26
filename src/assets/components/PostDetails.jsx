import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const PostDetails = () => {
  const { postId } = useParams(); // Get the postId from the URL
  const [post, setPost] = useState(null); // State to store post data
  const [comments, setComments] = useState([]); // State to store comments
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors
  const [newComment, setNewComment] = useState(''); // State for the new comment input

  // Fetch post details using the postId
  useEffect(() => {
    setLoading(true); // Set loading state before fetching
    axios.get(`http://localhost:3000/api/posts/${postId}`)
      .then(response => {
        setPost(response.data.post); // Set post data in state
        setComments(response.data.comments || []); // Set comments (if available) in state
        setLoading(false); // Set loading state to false once data is fetched
      })
      .catch(error => {
        console.error('Error fetching post details:', error);
        setError('Error fetching post details'); // Set error state
        setLoading(false); // Set loading state to false on error
      });
  }, [postId]);

  // Handle adding a new comment
  const handleAddComment = () => {
    if (newComment.trim()) {
      axios.post(`http://localhost:3000/api/posts/${postId}/comments`, { comment: newComment })
        .then(response => {
          setComments([...comments, response.data.comment]); // Update comments list
          setNewComment(''); // Clear input field after adding comment
        })
        .catch(error => {
          console.error('Error adding comment:', error);
        });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {loading && <div className="text-center text-xl text-gray-500">Loading...</div>}
      {error && <div className="text-center text-xl text-red-500">{error}</div>}

      {post && (
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
          <h1 className="text-3xl font-semibold text-gray-900">{post.postTitle}</h1>
          <p className="text-lg text-gray-600 mt-2">By <span className="font-semibold">{post.authorName}</span> | {post.authorEmail}</p>
          <p className="text-gray-800 mt-4">{post.postDescription}</p>
          
          <div className="flex space-x-4 mt-6">
            <span className="text-green-600 font-semibold">Upvotes: {post.upVote}</span>
            <span className="text-red-600 font-semibold">Downvotes: {post.downVote}</span>
          </div>
          
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Comments</h3>
            
            {comments.length === 0 ? (
              <p className="text-gray-500">No comments yet.</p>
            ) : (
              comments.map((comment, index) => (
                <div key={index} className="border-b pb-4 mb-4">
                  <p className="font-semibold text-gray-800">{comment.authorName}</p>
                  <p className="text-gray-600">{comment.text}</p>
                </div>
              ))
            )}
            
            <div className="mt-6">
              <textarea 
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                placeholder="Add a comment..."
                rows="4"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button 
                onClick={handleAddComment} 
                className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                Post Comment
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;
