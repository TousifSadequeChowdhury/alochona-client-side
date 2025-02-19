import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { AuthContext } from '../../../AuthProvider';
import { FaRegTrashAlt, FaArrowUp, FaArrowDown, FaRegCommentDots } from 'react-icons/fa';
import { FiAlertTriangle } from 'react-icons/fi';

const UserAvatar = ({ user }) => {
  if (user?.photoURL) {
    return <img src={user.photoURL} alt={user.displayName} className="w-12 h-12 rounded-full border-2 border-white shadow-sm" />;
  }
  return (
    <div className="w-12 h-12 rounded-full bg-indigo-500 flex items-center justify-center text-white font-semibold text-xl">
      {user?.displayName?.[0] || 'U'}
    </div>
  );
};

const MyPosts = () => {
  const { user } = useContext(AuthContext);
  const [myPosts, setMyPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('https://alochona-server.vercel.app/api/posts');
        const filteredPosts = user ? response.data.posts.filter(post => post.authorEmail === user.email) : [];
        setMyPosts(filteredPosts);
      } catch (err) {
        console.error("Error fetching posts:", err);
        setError("Failed to load posts. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [user]);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this post?')) return;
    
    try {
      await axios.delete(`https://alochona-server.vercel.app/api/posts/${id}`);
      setMyPosts(myPosts.filter(post => post._id !== id));
    } catch (err) {
      console.error("Error deleting post:", err);
      setError("Failed to delete post. Please try again.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-red-50 text-red-700 rounded-lg mx-4 flex items-center">
        <FiAlertTriangle className="mr-3 text-xl" />
        {error}
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Posts</h1>
        <span className="text-gray-500">
          {myPosts.length} {myPosts.length === 1 ? 'post' : 'posts'}
        </span>
      </div>

      {myPosts.length === 0 ? (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <p className="text-gray-500 text-lg">No posts found. Start by creating a new post!</p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {myPosts.map((post) => (
            <div
              key={post._id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              {/* Post Header */}
              <div className="p-6 border-b border-gray-100">
                <div className="flex items-center gap-4">
                  <UserAvatar user={{ photoURL: post.authorImage, displayName: post.authorName }} />
                  <div>
                    <h3 className="font-semibold text-gray-900">{post.authorName}</h3>
                    <p className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Fixed Title Height */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 h-16 overflow-hidden">{post.postTitle}</h3>

                {/* Fixed Description Height */}
                <p className="text-gray-600 line-clamp-3 mb-4 h-24 overflow-hidden">{post.postDescription}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tag.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Engagement Metrics */}
                <div className="flex items-center justify-between text-gray-500">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <FaArrowUp className="text-green-600" />
                      <span className="text-sm font-medium">{post.upVote}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaArrowDown className="text-red-600" />
                      <span className="text-sm font-medium">{post.downVote}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <FaRegCommentDots className="text-indigo-600" />
                      <span className="text-sm font-medium">{post.comments?.length || 0}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleDelete(post._id)}
                    className="text-red-500 hover:text-red-700 transition-colors flex items-center gap-2"
                  >
                    <FaRegTrashAlt className="text-sm" />
                    <span className="text-sm font-medium">Delete</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPosts;
