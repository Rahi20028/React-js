// src/pages/CreatePost.jsx
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// This component receives a function `addPost` as a prop
const CreatePost = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate(); // Hook for programmatic navigation
  const titleInputRef = useRef(null); // useRef hook

  // Focus the input field on component mount
  useEffect(() => {
    titleInputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      userId: 1, // mock user id
      id: Date.now(), // temporary unique id
      title,
      body,
    };
    addPost(newPost); // Call the function passed down from App.jsx
    navigate('/'); // Redirect to home page after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Post</h2>
      <div>
        <label>Title:</label>
        {/* This is a CONTROLLED COMPONENT because React state controls its value */}
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          ref={titleInputRef} // Assigning the ref
        />
      </div>
      <div>
        <label>Body:</label>
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>
      <button type="submit">Add Post</button>
    </form>
  );
};

export default CreatePost;