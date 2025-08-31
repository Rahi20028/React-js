// src/App.jsx
import React, { useState } from 'react'; // Add useState
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PostList from './pages/PostList';
import PostDetail from './pages/PostDetail';
import CreatePost from './pages/CreatePost'; // Import CreatePost

function App() {
  // Lifted state
  const [posts, setPosts] = useState([]);

  const addPost = (newPost) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <div>
      <Header />
      <main>
        <Routes>
          {/* Pass state and function down as props */}
          <Route path="/" element={<PostList posts={posts} setPosts={setPosts} />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;