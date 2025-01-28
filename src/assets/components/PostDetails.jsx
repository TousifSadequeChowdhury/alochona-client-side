import axios from 'axios';
import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { FaThumbsUp, FaThumbsDown, FaComment, FaRegClock } from 'react-icons/fa';
import { AuthContext } from '../../../AuthProvider'; // Adjust import path

const PostDetails = () => {
  const { postId } = useParams();
  const { user } = useContext(AuthContext);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    setLoading(true);
    axios.get(`https://alochona-server.vercel.app/api/posts/${postId}`)
      .then(response => {
        setPost(response.data.post);
        setComments(response.data.post.comments || []);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching post details:', error);
        setError('Error fetching post details');
        setLoading(false);
      });
  }, [postId]);

  const handleAddComment = () => {
    if (!user) {
      alert('Please login to comment');
      return;
    }

    if (newComment.trim()) {
      axios.post(`https://alochona-server.vercel.app/api/posts/${postId}/comments`, {
        authorName: user.displayName || 'Anonymous',
        authorEmail: user.email || 'no-email@example.com',
        authorImage: user.photoURL || '',
        text: newComment,
      })
      .then(response => {
        setComments([...comments, response.data.comment]);
        setNewComment('');
      })
      .catch(error => {
        console.error('Error adding comment:', error);
        alert('Failed to add comment. Please try again.');
      });
    } else {
      alert('Comment cannot be empty.');
    }
  };

  // User avatar component
  const UserAvatar = ({ author }) => (
    <div className="flex-shrink-0">
      {author?.authorImage ? (
        <img
          src={author.authorImage}
          alt={author.authorName}
          className="w-10 h-10 rounded-full border-2 border-white"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold">
          {author?.authorName?.[0] || 'U'}
        </div>
      )}
    </div>
  );

  return (
    <div className="max-w-3xl mx-auto p-4">
      {loading && (
        <div className="text-center py-8 text-gray-500">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
        </div>
      )}
      
      {error && (
        <div className="text-center text-red-500 bg-red-50 p-4 rounded-lg mb-6">
          {error}
        </div>
      )}

      {post && (
        <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6 mb-8">
          {/* Post Header */}
          <div className="flex items-start mb-6">
            <UserAvatar author={post} />
            <div className="flex-1 ml-4">
              <div className="flex items-baseline justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{post.postTitle}</h2>
                  <p className="text-gray-600 mt-1">
                    by <span className="font-semibold text-indigo-600">{post.authorName}</span>
                  </p>
                </div>
                <span className="text-sm text-gray-500 flex items-center">
                  <FaRegClock className="mr-1" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </span>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-3">
                {post.tag?.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Post Content */}
          <div className="prose max-w-none mb-8 text-gray-700">
            {post.postDescription}
          </div>

          {/* Post Stats */}
          <div className="flex items-center space-x-6 text-gray-600 border-t border-b py-4 mb-8">
            <div className="flex items-center space-x-2">
              <FaThumbsUp className="text-green-600" />
              <span className="font-medium">{post.upVote}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaThumbsDown className="text-red-600" />
              <span className="font-medium">{post.downVote}</span>
            </div>
            <div className="flex items-center space-x-2">
              <FaComment className="text-indigo-600" />
              <span className="font-medium">{comments.length} comments</span>
            </div>
          </div>

          {/* Comments Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <FaComment className="mr-2 text-indigo-600" />
              Comments
            </h3>

            {comments.length === 0 ? (
              <div className="text-center text-gray-500 py-6">
                No comments yet. Be the first to share your thoughts!
              </div>
            ) : (
              comments.map((comment, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <div className="flex items-start">
                    <UserAvatar author={comment} />
                    <div className="flex-1 ml-4">
                      <div className="flex items-baseline justify-between">
                        <h4 className="font-semibold text-gray-900">{comment.authorName}</h4>
                        {/* <span className="text-sm text-gray-500">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span> */}
                      </div>
                      <p className="text-gray-700 mt-1">{comment.text}</p>
                    </div>
                  </div>
                </div>
              ))
            )}

            {/* Add Comment Section */}
            <div className="mt-8">
              {user ? (
                <>
                  <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    placeholder="Write your comment..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  />
                  <button
                    onClick={handleAddComment}
                    className="mt-4 px-6 py-2 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition-colors flex items-center"
                  >
                    Post Comment
                    <FaComment className="ml-2" />
                  </button>
                </>
              ) : (
                <div className="text-center py-4">
                  <Link
                    to="/login"
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Login to comment
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostDetails;