// src/pages/PostList.jsx
import React, { useEffect } from 'react'; // remove useState
import axios from 'axios';
import { Link } from 'react-router-dom';

// Receive props from App.jsx
const PostList = ({ posts, setPosts }) => {
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    // Fetch only if posts array is empty
    if (posts.length === 0) {
      axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => {
          setPosts(response.data);
          setError(null);
        })
        .catch(err => setError('Failed to fetch posts.'))
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
    }
  }, [posts, setPosts]);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;